import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import { User } from '@pfsa/data';
import { sendPasswordResetEmail } from '@pfsa/data';

const auth = new Hono();

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

auth.post('/register', zValidator('json', registerSchema), async (c) => {
  const mongoUri = process.env['MONGODB_URI'];
  if (!mongoUri) {
    return c.json({ error: 'MONGODB_URI environment variable is not set' }, 500);
  }
  await mongoose.connect(mongoUri, { dbName: 'pfsa' });

  const data = c.req.valid('json');
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    return c.json({ error: 'User already exists' }, 400);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({
    email: data.email,
    password: hashedPassword,
    name: data.name,
    role: 'user',
  });

  await user.save();
  return c.json({ message: 'User registered successfully' }, 201);
});

auth.post('/reset-password', zValidator('json', resetPasswordSchema), async (c) => {
  const mongoUri = process.env['MONGODB_URI'];
  if (!mongoUri) {
    return c.json({ error: 'MONGODB_URI environment variable is not set' }, 500);
  }
  await mongoose.connect(mongoUri, { dbName: 'pfsa' });

  const { email } = c.req.valid('json');
  const user = await User.findOne({ email });
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }

  const token = uuidv4();
  user.resetToken = token;
  user.resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour expiry
  await user.save();

  const { success, error } = await sendPasswordResetEmail(email, token);
  if (!success) {
    return c.json({ error: error || 'Failed to send email' }, 500);
  }

  return c.json({ message: 'Password reset email sent' }, 200);
});

auth.post('/reset-password/confirm', zValidator('json', resetPasswordConfirmSchema), async (c) => {
  const mongoUri = process.env['MONGODB_URI'];
  if (!mongoUri) {
    return c.json({ error: 'MONGODB_URI environment variable is not set' }, 500);
  }
  await mongoose.connect(mongoUri, { dbName: 'pfsa' });

  const { token, newPassword } = c.req.valid('json');
  const user = await User.findOne({
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

  return c.json({ message: 'Password reset successfully' }, 200);
});

export default auth;