/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃   @pfsa/forum – next-intl Request Config (App Router) ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Supplies `locale` + `messages` for every request so that
 * `useMessages()` inside the root layout can never fail.
 *
 * • Fallbacks to the repository-wide default locale (“en”)
 *   if the middleware didn’t inject one (e.g. at `/`).
 *
 * Exports:
 *  - default → `getRequestConfig(...)`
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { getRequestConfig } from 'next-intl/server';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Constants
 * ───────────────────────────────────────────────────────────── */
const DEFAULT_LOCALE = 'en' as const;

/* ─────────────────────────────────────────────────────────────
 * 🧾 Request Configuration
 * ───────────────────────────────────────────────────────────── */
export default getRequestConfig(async ({ locale }) => {
  // Gracefully fall back instead of throwing – prevents 500s
  const activeLocale = locale || DEFAULT_LOCALE;

  // Dynamically load the corresponding message bundle
  const messages =
    (await import(`./locales/${activeLocale}.json`)).default;

  return {
    locale: activeLocale,
    messages,
  };
});
