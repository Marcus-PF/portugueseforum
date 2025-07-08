/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @pfsa/ui – Hook: useIsMobile (Viewport Check)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * A responsive utility hook that detects if the viewport
 * matches a "mobile" breakpoint (< 768px).
 *
 * 📦 Features:
 * - React SSR-safe (`typeof window`)
 * - Uses matchMedia + resize detection
 * - Returns `true` or `false`
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Config
 * ───────────────────────────────────────────────────────────── */
const MOBILE_BREAKPOINT = 768;

/* ─────────────────────────────────────────────────────────────
 * 📱 useIsMobile Hook
 * ───────────────────────────────────────────────────────────── */
/**
 * Detects if the current window width is considered "mobile".
 *
 * @returns `true` if `< 768px`, `false` otherwise.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);
    onChange(); // Initial state on mount

    return () => {
      mql.removeEventListener('change', onChange);
    };
  }, []);

  return !!isMobile;
}
