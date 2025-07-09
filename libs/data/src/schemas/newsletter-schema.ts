/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Newsletter Zod Schema Validation     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Zod schemas for newsletter subscription validation.
 *
 * Exports:
 *  - `newsletterSchema` → Zod schema for newsletter validation
 *  - `NewsletterSchema` → Inferred TypeScript type
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  subscribed: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type Exports
 * ───────────────────────────────────────────────────────────── */
export type NewsletterSchema = z.infer<typeof newsletterSchema>;