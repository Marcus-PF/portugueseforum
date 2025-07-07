/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          @pfsa/modles – Tailwind Class Composer       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides the `cn()` helper for conditional classname
 * concatenation **with** Tailwind‑aware conflict resolution.
 * Internally combines `clsx` (truthy merging) + `tailwind‑merge`
 * (dedup + order fixing) for reliable styling.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* ─────────────────────────────────────────────────────────────
 * 🎨 Classname Helper
 * ───────────────────────────────────────────────────────────── */
/**
 * Merge arbitrary Tailwind class strings conditionally.
 *
 * @example
 * ```ts
 * <div className={cn('p-4', isActive && 'bg-primary')} />
 * ```
 *
 * @param inputs – Accepts any number of `clsx`‑compatible values
 *                (`string`, `undefined`, object conditions, etc.).
 * @returns A single optimised class string.
 */
export function cn(...inputs: ClassValue[]): string {
  // 1️⃣ clsx: resolves truthy / falsy conditions to a raw string
  // 2️⃣ twMerge: deduplicates conflicting Tailwind classes
  return twMerge(clsx(inputs));
}
