/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/models – Export Aggregator (Barrel File)  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Re-exports all Mongoose schema/models from the `models/`
 * directory so consumers can import from `@pfsa/data` directly.
 *
 * 🔁 Centralized exports:
 *   - `article`         → Article schema/model
 *   - `community-post`  → Community post schema/model
 *   - `page`            → Static page schema/model
 *   - `user`            → Auth user schema/model
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Schema + Model Exports
 * ───────────────────────────────────────────────────────────── */
export * from './article';
export * from './community-post';
export * from './page';
export * from './user';
