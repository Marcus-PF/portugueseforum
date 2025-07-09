/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Article Fetch Response DTOs          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Response interfaces for article fetching operations.
 *
 * Exports:
 *  - `FetchArticlesResponse` → Response interface for article list
 */

/* ─────────────────────────────────────────────────────────────
 * 🧠 DTO Exports
 * ───────────────────────────────────────────────────────────── */
export interface FetchArticlesResponse {
  articles: Array<{
    _id: string;
    title: string;
    slug: string;
    content: string;
    published: boolean;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  total: number;
}