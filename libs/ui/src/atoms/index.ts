/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          @pfsa/ui – ShadCN Component Exports          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central export hub for all ShadCN UI atoms. These are
 * low-level, reusable components used across the app.
 *
 * Grouped by **interface domain** for clarity and ease of use:
 *  - Feedback (alerts, dialogs, skeletons, etc.)
 *  - Form Elements (input, select, switch, etc.)
 *  - Navigation (menus, accordions, tabs, etc.)
 *  - Layout (card, drawer, sheet, sidebar, etc.)
 *  - Overlay (popover, tooltip, hover-card, etc.)
 *  - Miscellaneous (carousel, chart, table, etc.)
 */

/* ─────────────────────────────────────────────────────────────
 * 📣 Feedback
 * ───────────────────────────────────────────────────────────── */
export * from './alert';
export * from './alert-dialog';
export * from './progress';
export * from './skeleton';
export * from './sonner';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Form Elements
 * ───────────────────────────────────────────────────────────── */
export * from './checkbox';
export * from './form';
export * from './input';
export * from './input-otp';
export * from './label';
export * from './radio-group';
export * from './select';
export * from './slider';
export * from './switch';
export * from './textarea';
export * from './toggle';
export * from './toggle-group';

/* ─────────────────────────────────────────────────────────────
 * 🧭 Navigation
 * ───────────────────────────────────────────────────────────── */
export * from './accordion';
export * from './breadcrumb';
export * from './collapsible';
export * from './command';
export * from './menubar';
export * from './navigation-menu';
export * from './pagination';
export * from './tabs';

/* ─────────────────────────────────────────────────────────────
 * 📦 Layout & Structure
 * ───────────────────────────────────────────────────────────── */
export * from './card';
export * from './drawer';
export * from './resizable';
export * from './scroll-area';
export * from './separator';
export * from './sheet';
export * from './sidebar';

/* ─────────────────────────────────────────────────────────────
 * 🪟 Overlay
 * ───────────────────────────────────────────────────────────── */
export * from './context-menu';
export * from './dialog';
export * from './dropdown-menu';
export * from './hover-card';
export * from './popover';
export * from './tooltip';

/* ─────────────────────────────────────────────────────────────
 * 🎨 Miscellaneous
 * ───────────────────────────────────────────────────────────── */
export * from './avatar';
export * from './badge';
export * from './button';
export * from './carousel';
export * from './chart';
export * from './table';
