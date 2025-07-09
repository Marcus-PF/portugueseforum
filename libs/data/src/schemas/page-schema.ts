/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Page Zod Schema Validation           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for bilingual page validation and type inference.
 *
 * Exports:
 *  - `pageSchema` → Zod schema for page validation
 *  - `PageSchema` → Inferred TypeScript type
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const pageSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title_en: z.string().min(1, 'English title is required'),
  title_pt: z.string().min(1, 'Portuguese title is required'),
  content_en: z.string().min(1, 'English content is required'),
  content_pt: z.string().min(1, 'Portuguese content is required'),
  published: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type Exports
 * ───────────────────────────────────────────────────────────── */
export type PageSchema = z.infer<typeof pageSchema>;