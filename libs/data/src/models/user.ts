/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/models – User Schema & Model          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines the schema for application users, supporting
 * both email/password and social login (e.g. Google).
 * Includes roles, reset tokens, timestamps, and validation.
 *
 * Exports:
 *  - `UserModel` → Mongoose model
 *  - `User`      → TypeScript type from schema
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Schema, model, models, InferSchemaType } from 'mongoose';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required(this: { googleId?: string }) {
        return !this.googleId;
      },
    },
    name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    googleId: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpires: {
      type: Date,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type & Model Exports
 * ───────────────────────────────────────────────────────────── */
/**
 * TypeScript type based on UserSchema.
 */
export type User = InferSchemaType<typeof UserSchema>;

/**
 * Mongoose model for the `users` collection.
 */
export const UserModel =
  models['User'] || model<User>('User', UserSchema, 'users');
