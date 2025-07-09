/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – User Role Constants                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Constants for user roles and permissions.
 *
 * Exports:
 *  - `ROLES` → Object with role constants
 *  - `Role` → Union type of user roles
 */

/* ─────────────────────────────────────────────────────────────
 * 🧾 Constants Definition
 * ───────────────────────────────────────────────────────────── */
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const;

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type Exports
 * ───────────────────────────────────────────────────────────── */
export type Role = typeof ROLES[keyof typeof ROLES];