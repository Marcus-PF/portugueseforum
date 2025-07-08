/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      Locale Middleware – Automatic prefix redirect     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Redirects “/” → “/en” (default) and injects the
 * `x-next-intl-locale` header for server components.
 */

import createMiddleware from 'next-intl/middleware';

/* ────────────────────────────────────────────────────────────
 * 🔧  Configuration
 * ────────────────────────────────────────────────────────── */
export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

/* Match every route except Next assets & API */
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
