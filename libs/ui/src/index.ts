/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/ui – Library Entry Point              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central access point for re-exporting UI building blocks.
 *
 * 🔁 Re-exports:
 *  - `atoms/`  → Design primitives (buttons, dialogs, inputs, etc.)
 *  - `hooks/`  → UI-specific utility hooks (e.g., responsive)
 *
 * 🧵 Note:
 *  - Global styles are injected manually where needed.
 *    (e.g., `@pfsa/ui/global` → mapped in `tsconfig.base.json`)
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Module Exports
 * ───────────────────────────────────────────────────────────── */
export * from './atoms';
export * from './hooks';
