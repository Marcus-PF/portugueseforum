/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/pages – Create or Update Page by Slug        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Upserts a static page (About, Contact, etc.) using a
 * unique slug as the lookup key.
 *
 * - Creates if not found
 * - Updates existing if found
 * - Enforces validation via Mongoose
 *
 * Exports:
 *  - `createOrUpdatePage(input)` → Returns updated Page doc
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { connectToDatabase } from '../utils/db';
import { PageModel, type Page } from '../models/page';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Input Type
 * ───────────────────────────────────────────────────────────── */
/**
 * Slugged page payload for upsert.
 */
type PageInput = Pick<
  Page,
  'slug' | 'title_en' | 'content_en' | 'title_pt' | 'content_pt'
>;

/* ─────────────────────────────────────────────────────────────
 * 🚀 Upsert Logic
 * ───────────────────────────────────────────────────────────── */
/**
 * Creates or updates a page by `slug`.
 *
 * @param input - The page content to store
 * @returns Updated or newly created `Page` document
 */
export async function createOrUpdatePage(input: PageInput): Promise<Page> {
  await connectToDatabase();

  const { slug, ...rest } = input;

  return PageModel.findOneAndUpdate(
    { slug },
    { slug, ...rest },
    {
      new: true,          // Return the modified doc
      upsert: true,       // Create if it doesn't exist
      runValidators: true // Enforce schema rules
    }
  );
}
