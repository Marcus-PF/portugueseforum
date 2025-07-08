/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/forum – Root Redirect to Default Locale     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Redirects from `/` to the default locale route (`/en`)
 * using Next.js App Router's built-in `redirect()` helper.
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { redirect } from 'next/navigation';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Redirect Logic
 * ───────────────────────────────────────────────────────────── */
export default function RootPage() {
  redirect('/en'); // You may also dynamically resolve the defaultLocale if needed
}
