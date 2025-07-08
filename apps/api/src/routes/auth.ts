/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/api – Auth Routes (Register & Reset)   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Handles user registration and password-reset workflow.
 *
 * Exports:
 *  - **default** → Hono sub-app mounted at `/auth`
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import {
  UserModel,
  connectToDatabase,
  sendPasswordResetEmail,
} from '@pfsa/data';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Validation Schemas
 * ───────────────────────────────────────────────────────────── */
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

const resetPasswordSchema = z.object({
  email: z.string().email(),
});

const resetPasswordConfirmSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(8),
});

/* ─────────────────────────────────────────────────────────────
 * 🧾 Router Setup
 * ───────────────────────────────────────────────────────────── */
const auth = new Hono();

/* ─────────────────────────────────────────────────────────────
 * ➕ POST /auth/register
 * ───────────────────────────────────────────────────────────── */
auth.post(
  '/register',
  zValidator('json', registerSchema),
  async (c) => {
    await connectToDatabase();

    const data = c.req.valid('json');
    const existing = await UserModel.findOne({ email: data.email }).lean();

    if (existing) {
      return c.json({ error: 'User already exists' }, 400);
    }

    const hashed = await bcrypt.hash(data.password, 10);
    const user = await UserModel.create({
      email: data.email,
      password: hashed,
      name: data.name,
      role: 'user',
    });

    return c.json({ message: 'User registered', userId: user._id }, 201);
  }
);

/* ─────────────────────────────────────────────────────────────
 * ✉️ POST /auth/reset-password
 * ───────────────────────────────────────────────────────────── */
auth.post(
  '/reset-password',
  zValidator('json', resetPasswordSchema),
  async (c) => {
    await connectToDatabase();

    const { email } = c.req.valid('json');
    const user = await UserModel.findOne({ email });

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    const token = uuidv4();
    user.resetToken = token;
    user.resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000); // 1-hour expiry
    await user.save();

    const { success, error } = await sendPasswordResetEmail(email, token);
    if (!success) {
      return c.json({ error: error ?? 'Failed to send email' }, 500);
    }

    return c.json({ message: 'Password-reset email sent' }, 200);
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🔑 POST /auth/reset-password/confirm
 * ───────────────────────────────────────────────────────────── */
auth.post(
  '/reset-password/confirm',
  zValidator('json', resetPasswordConfirmSchema),
  async (c) => {
    await connectToDatabase();

    const { token, newPassword } = c.req.valid('json');
    const user = await UserModel.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: new Date() },
    });

    if (!user) {
      return c.json({ error: 'Invalid or expired token' }, 400);
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

    return c.json({ message: 'Password reset successful' }, 200);
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Export Router
 * ───────────────────────────────────────────────────────────── */
export default auth;
