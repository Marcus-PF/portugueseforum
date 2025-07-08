/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/utils/backend – Backend Utility Exports      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Utilities for Node.js/backend environments (e.g., db, email).
 *
 * 🔁 Re-exports:
 *  - `db`    → Mongoose connection + helpers
 *  - `email` → Nodemailer + password reset workflows
 */

/* ─────────────────────────────────────────────────────────────
 * 🧰 Backend Utilities
 * ───────────────────────────────────────────────────────────── */
export * from './db';
export * from './email';
