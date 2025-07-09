/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Mock Article Data                    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Mock data for testing and development purposes.
 *
 * Exports:
 *  - `mockArticles` → Array of mock article objects
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import type { Article } from '../models';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Mock Data
 * ───────────────────────────────────────────────────────────── */
export const mockArticles: Partial<Article>[] = [
  {
    title: 'Welcome to Portuguese Forum',
    slug: 'welcome-to-portuguese-forum',
    content: `
      <p>Welcome to the Portuguese Forum - a platform dedicated to connecting Portuguese speakers worldwide.</p>
      <p>Here you can share stories, discuss culture, and build connections with fellow community members.</p>
    `,
    published: true,
    tags: ['welcome', 'community', 'portuguese'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    title: 'Portuguese Culture and Traditions',
    slug: 'portuguese-culture-and-traditions',
    content: `
      <p>Portugal has a rich cultural heritage spanning centuries.</p>
      <p>From fado music to traditional festivals, there's so much to explore and celebrate.</p>
    `,
    published: true,
    tags: ['culture', 'traditions', 'heritage'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    title: 'Draft Article About Food',
    slug: 'draft-article-about-food',
    content: `
      <p>This is a draft article about Portuguese cuisine...</p>
      <p>Still working on the content!</p>
    `,
    published: false,
    tags: ['food', 'cuisine', 'draft'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
];