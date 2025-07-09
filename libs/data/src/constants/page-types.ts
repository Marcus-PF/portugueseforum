/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Page Type Constants                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Constants for different page types in the application.
 *
 * Exports:
 *  - `PAGE_TYPES` → Object with page type constants
 *  - `PageType` → Union type of page types
 */

/* ─────────────────────────────────────────────────────────────
 * 🧾 Constants Definition
 * ───────────────────────────────────────────────────────────── */
export const PAGE_TYPES = {
  STATIC: 'static',
  DYNAMIC: 'dynamic',
  BLOG: 'blog',
  LANDING: 'landing',
  ADMIN: 'admin',
} as const;

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type Exports
 * ───────────────────────────────────────────────────────────── */
export type PageType = typeof PAGE_TYPES[keyof typeof PAGE_TYPES];