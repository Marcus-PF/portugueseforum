/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/data – Library Entry Point            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central access point to all exported modules from the
 * `@pfsa/data` workspace library.
 *
 * 🔁 Re-exports:
 *  - `articles/` → Article utilities
 *  - `models/`   → All shared Mongoose schemas + models
 *  - `pages/`    → Page service logic (CRUD)
 *  - `utils/`    → Shared helpers (db, api, email, etc.)
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Module Exports
 * ───────────────────────────────────────────────────────────── */

// New structured exports
export * from './constants';
export * from './dto';
export * from './mocks';
export * from './schemas';
export * from './services';