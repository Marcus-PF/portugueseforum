/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Page Fetch DTOs                      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Data transfer objects for page fetching operations.
 *
 * Exports:
 *  - `FetchPageBySlugDto` → Input interface for page fetch
 *  - `FetchPageBySlugResponse` → Response interface for page fetch
 */

/* ─────────────────────────────────────────────────────────────
 * 🧠 DTO Exports
 * ───────────────────────────────────────────────────────────── */
export interface FetchPageBySlugDto {
  slug: string;
}

export interface FetchPageBySlugResponse {
  _id: string;
  slug: string;
  title_en: string;
  title_pt: string;
  content_en: string;
  content_pt: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}