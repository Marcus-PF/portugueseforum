/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @pfsa/api – JWT Middleware for Authenticated     ┃
 * ┃                       Routes                          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Applies JWT-based authentication using Hono's built-in
 * middleware. This secures protected routes across the API.
 *
 * Exports:
 *  - `authMiddleware` → Validates JWT via `Authorization` header
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { jwt } from 'hono/jwt';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Configuration
 * ───────────────────────────────────────────────────────────── */
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  throw new Error('JWT_SECRET environment variable is not set');
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Exported Middleware
 * ───────────────────────────────────────────────────────────── */
/**
 * Middleware to validate Bearer JWT in incoming requests.
 * Will attach `c.get('jwtPayload')` if valid.
 */
export const authMiddleware = jwt({
  secret: jwtSecret,
});
