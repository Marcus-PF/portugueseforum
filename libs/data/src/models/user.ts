/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/models – User Schema & Model          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
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
      enum: ['user', 'admin', 'moderator'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    bannedAt: {
      type: Date,
    },
    bannedReason: {
      type: String,
    },
    bannedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    lastLoginAt: {
      type: Date,
    },
    googleId: {
      type: String,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpiry: {
      type: Date,
    },
    verificationToken: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type & Model Exports
 * ───────────────────────────────────────────────────────────── */
export type User = InferSchemaType<typeof UserSchema>;
export const UserModel = models['User'] || model<User>('User', UserSchema, 'users');