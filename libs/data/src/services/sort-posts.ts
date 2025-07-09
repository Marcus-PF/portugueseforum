/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Post Sorting Utilities               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Generic sorting utilities for posts and articles.
 *
 * Exports:
 *  - `SortablePost` → Interface for sortable post items
 *  - `sortPosts` → Service object with sorting methods
 */

/* ─────────────────────────────────────────────────────────────
 * 🧾 Types & Service Implementation
 * ───────────────────────────────────────────────────────────── */
export interface SortablePost {
  createdAt: Date;
  title: string;
  slug: string;
}

export const sortPosts = {
  /**
   * Sort posts by creation date (newest first)
   */
  byDateDesc: <T extends SortablePost>(posts: T[]): T[] => {
    return [...posts].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },

  /**
   * Sort posts by creation date (oldest first)
   */
  byDateAsc: <T extends SortablePost>(posts: T[]): T[] => {
    return [...posts].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  },

  /**
   * Sort posts by title (A-Z)
   */
  byTitleAsc: <T extends SortablePost>(posts: T[]): T[] => {
    return [...posts].sort((a, b) => a.title.localeCompare(b.title));
  },

  /**
   * Sort posts by title (Z-A)
   */
  byTitleDesc: <T extends SortablePost>(posts: T[]): T[] => {
    return [...posts].sort((a, b) => b.title.localeCompare(a.title));
  },
};