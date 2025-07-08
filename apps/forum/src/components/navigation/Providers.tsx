/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┃
 * ┃  @pfsa/forum – Providers (Theme + i18n Client Context Shell)   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Used in `layout.tsx` to wrap all pages in:
 * - `next-themes` → dark/light mode via className on <html>
 * - `next-intl` → i18n context from `useMessages`
 *
 * Exports:
 *  - `Providers` → hydration-safe layout context wrapper
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────
 * 📟 Component
 * ───────────────────────────────────────────────────────────── */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}