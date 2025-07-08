/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @pfsa/utils – Tailwind Class Composer         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides the `cn()` helper for conditional className
 * concatenation **with** Tailwind‑aware conflict resolution.
 *
 * Internally combines `clsx` (truthy merging)
 * + `tailwind-merge` (deduplication + order fixing)
 * for safe and clean styling.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* ─────────────────────────────────────────────────────────────
 * 🎨 Classname Utility
 * ───────────────────────────────────────────────────────────── */
/**
 * Merges Tailwind utility classes conditionally and safely.
 *
 * @example
 * ```tsx
 * <div className={cn('p-4', isActive && 'bg-primary')} />
 * ```
 *
 * @param inputs – Accepts any number of `clsx`‑compatible values
 *                (`string`, `undefined`, object conditions, etc.)
 * @returns A single deduplicated Tailwind class string
 */
export function cn(...inputs: ClassValue[]): string {
  // 1️⃣ clsx: resolves truthy / falsy conditions to a raw string
  // 2️⃣ twMerge: deduplicates conflicting Tailwind classes
  return twMerge(clsx(inputs));
}
