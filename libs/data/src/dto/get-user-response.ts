/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – User Response DTOs                   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Response interfaces for user operations.
 *
 * Exports:
 *  - `GetUserResponse` → Response interface for user data
 */

/* ─────────────────────────────────────────────────────────────
 * 🧠 DTO Exports
 * ───────────────────────────────────────────────────────────── */
export interface GetUserResponse {
  _id: string;
  email: string;
  role: 'admin' | 'user';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}