/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Page Creation/Update DTOs            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Data transfer objects for page creation and update operations.
 *
 * Exports:
 *  - `CreateOrUpdatePageDto` → Input interface for page operations
 */

/* ─────────────────────────────────────────────────────────────
 * 🧠 DTO Exports
 * ───────────────────────────────────────────────────────────── */
export interface CreateOrUpdatePageDto {
  slug: string;
  title_en: string;
  title_pt: string;
  content_en: string;
  content_pt: string;
  published?: boolean;
}