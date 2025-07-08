/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Central i18n Locale Configuration    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Declares all supported locales for `next-intl` and
 * exports a helper type for stronger compile-time safety.
 *
 * Exports:
 *  - `locales`       → Tuple of supported locale codes
 *  - `defaultLocale` → Fallback locale
 *  - `AppLocale`     → Literal union of allowed locales
 */

/* ─────────────────────────────────────────────────────────────
 * 🧧 Locale Metadata
 * ───────────────────────────────────────────────────────────── */
export const locales = ['en', 'pt'] as const;
export const defaultLocale = 'en';

export type AppLocale = (typeof locales)[number];
