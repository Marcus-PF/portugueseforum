/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/articles – Fetch All Articles (Lean Docs)   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Retrieves all articles from the database using Mongoose's
 * `.lean()` for lightweight, plain JS objects (no Mongoose
 * document overhead).
 *
 * Exports:
 *  - `fetchArticles()` → Promise<PlainArticle[]>
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { ArticleModel } from '../models/article';
import { connectToDatabase } from '../utils/db';

/* ─────────────────────────────────────────────────────────────
 * 📄 Fetch Logic
 * ───────────────────────────────────────────────────────────── */
/**
 * Connects to MongoDB and returns a lean list of all articles.
 */
export async function fetchArticles() {
  await connectToDatabase();
  return ArticleModel.find().lean(); // Don't annotate return type
}
