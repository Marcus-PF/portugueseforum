/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/articles – Export Aggregator (Barrel)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Centralized re-exports for article-related server logic.
 * Use this to simplify imports across consuming layers.
 *
 * Exports:
 *  - `fetchArticles()` → Fetches all published articles
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Export Modules
 * ───────────────────────────────────────────────────────────── */
export * from './fetchArticles';
