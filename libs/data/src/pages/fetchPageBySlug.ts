/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/pages – Fetch Page by Slug (Lean)        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Retrieves a static page document based on its slug,
 * returning a lean (plain JS) version of the data.
 *
 * Exports:
 *  - `fetchPageBySlug(slug)` → Promise<LeanPage | null>
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { connectToDatabase } from '../utils/db';
import { PageModel } from '../models/page';

/* ─────────────────────────────────────────────────────────────
 * 📄 Retrieval Logic
 * ───────────────────────────────────────────────────────────── */
/**
 * Looks up a page by its unique slug identifier.
 *
 * @param slug - Slug to match against
 * @returns Lean version of the page (no Mongoose instance)
 */
export async function fetchPageBySlug(slug: string) {
  await connectToDatabase();
  return PageModel.findOne({ slug }).lean();
}
