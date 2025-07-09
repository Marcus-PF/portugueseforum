/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/data – User Zod Schema Validation           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').optional(),
  name: z.string().trim().optional(),
  role: z.enum(['admin', 'user', 'moderator']).default('user'),
  isVerified: z.boolean().default(false),
  isBanned: z.boolean().default(false),
  bannedAt: z.date().optional(),
  bannedReason: z.string().optional(),
  bannedBy: z.string().optional(),
  lastLoginAt: z.date().optional(),
  googleId: z.string().optional(),
  resetToken: z.string().optional(),
  resetTokenExpiry: z.date().optional(),
  verificationToken: z.string().optional(),
  profileImage: z.string().url().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export const createUserSchema = userSchema.pick({
  email: true,
  password: true,
  name: true,
  role: true,
});

export const updateUserSchema = userSchema.partial();

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type Exports
 * ───────────────────────────────────────────────────────────── */
export type UserSchema = z.infer<typeof userSchema>;
export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;