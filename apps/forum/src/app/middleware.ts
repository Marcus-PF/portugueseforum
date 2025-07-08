/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @pfsa/forum – next-intl Routing Middleware       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Rewrites incoming requests so `/`, `/en/*`, `/pt/*`, etc.
 * are correctly handled by Next App Router + `next-intl`.
 *
 * Exports:
 *  - default → Middleware handler created by next-intl
 *  - `config`→ Route matcher configuration
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '../../i18n';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Middleware
 * ───────────────────────────────────────────────────────────── */
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

/* ─────────────────────────────────────────────────────────────
 * 🔧 Route Matcher Config
 * ───────────────────────────────────────────────────────────── */
export const config = {
  // Ignore Next.js internals & static assets
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
