/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/models – Community Post Schema & Model        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines the schema for community posts and embedded replies.
 * This includes user references, timestamps, and nested subdocs.
 *
 * Exports:
 *  - `CommunityPostModel` → Mongoose model
 *  - `CommunityPost`      → TypeScript type from schema
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Schema, model, models, InferSchemaType } from 'mongoose';

/* ─────────────────────────────────────────────────────────────
 * 🧩 Subschema: Reply
 * ───────────────────────────────────────────────────────────── */
const ReplySchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const CommunityPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    replies: {
      type: [ReplySchema],
      default: [],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type & Model Exports
 * ───────────────────────────────────────────────────────────── */
/**
 * TypeScript type based on CommunityPostSchema.
 */
export type CommunityPost = InferSchemaType<typeof CommunityPostSchema>;

/**
 * Mongoose model for the `community_posts` collection.
 */
export const CommunityPostModel =
  models['CommunityPost'] || model('CommunityPost', CommunityPostSchema, 'community_posts');
