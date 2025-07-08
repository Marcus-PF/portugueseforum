/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/forum – Next.js Configuration (App Dir)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This configuration file sets up the core behavior for the
 * Portuguese Forum web frontend using Next.js 15 and Nx.
 *
 * Features:
 *  - Nx plugin support (build/deploy/test)
 *  - SVGR disabled (we use static SVG imports instead)
 *  - App Router + File-based routing
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { withNx } from '@nx/next';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Configuration
 * ───────────────────────────────────────────────────────────── */
const nextConfig = {
  nx: {
    svgr: false, // Disable SVG-to-React component transformation
  },

  // Future options can be added here (e.g., experimental, i18n, images)
};

/* ─────────────────────────────────────────────────────────────
 * 🧠 Export
 * ───────────────────────────────────────────────────────────── */
export default withNx(nextConfig);
