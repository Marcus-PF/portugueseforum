/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @pfsa/pages – Export Aggregator (Barrel)       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Centralized re-exports for page service utilities.
 * Consumers should import from this file to ensure consistent
 * modular access across the project.
 *
 * Exports:
 *  - `fetchPageBySlug(slug)`
 *  - `createOrUpdatePage(input)`
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Export Modules
 * ───────────────────────────────────────────────────────────── */
export * from './fetchPageBySlug';
export * from './createOrUpdatePage';
