/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/forum – Next.js Configuration (App Dir)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This configuration sets up the core behavior for the
 * Portuguese Forum web frontend using Nx + Next.js.
 */

import { withNx } from '@nx/next';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Configuration
 * ───────────────────────────────────────────────────────────── */
const nextConfig = {
  nx: {
    svgr: false,
  },

  experimental: {
    // Fix: Must be an object, not a boolean
    serverActions: {},
  },
};

/* ─────────────────────────────────────────────────────────────
 * 🧠 Export
 * ───────────────────────────────────────────────────────────── */
export default withNx(nextConfig);
