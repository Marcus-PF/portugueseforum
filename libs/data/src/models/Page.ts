/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @pfsa/models – Static Page Schema & Model     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Represents bilingual static content pages (e.g., About,
 * Contact, Privacy) stored in MongoDB with English and
 * Portuguese content fields.
 *
 * Exports:
 *  - `PageModel` → Mongoose model
 *  - `Page`      → TypeScript type from schema
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Schema, model, models, InferSchemaType } from 'mongoose';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const PageSchema = new Schema(
  {
    title_en: {
      type: String,
      required: true,
      trim: true,
    },
    content_en: {
      type: String,
      required: true,
    },
    title_pt: {
      type: String,
      required: true,
      trim: true,
    },
    content_pt: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
 * TypeScript type based on PageSchema.
 */
export type Page = InferSchemaType<typeof PageSchema>;

/**
 * Mongoose model for the `pages` collection.
 */
export const PageModel =
  models['Page'] ?? model<Page>('Page', PageSchema, 'pages');
