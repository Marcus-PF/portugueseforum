/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/forum – Next.js Configuration (App Dir)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This configuration sets up Next.js 15 for Portuguese Forum,
 * with Nx support, localization via `next-intl`, and MDX processing.
 */

import { withNx } from '@nx/next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Plugin Configuration (next-intl)
 * ───────────────────────────────────────────────────────────── */
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

/* ─────────────────────────────────────────────────────────────
 * 🔧 MDX Configuration
 * ───────────────────────────────────────────────────────────── */
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

/* ─────────────────────────────────────────────────────────────
 * 🔧 Base Next.js Configuration
 * ───────────────────────────────────────────────────────────── */
const nextConfig = {
  nx: {
    svgr: false, // We use static SVG imports instead of SVGR
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'], // Enable MDX file processing
  experimental: {
    mdxRs: true, // Use Rust-based MDX compiler for better performance
  },
};

/* ─────────────────────────────────────────────────────────────
 * 🧠 Export (Chain all plugins together)
 * ───────────────────────────────────────────────────────────── */
export default withNx(withNextIntl(withMDX(nextConfig)));