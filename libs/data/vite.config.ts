/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            @pfsa/data – Vite Configuration            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Local Vite config for `@pfsa/data` including support for:
 *  - Environment overrides via `.env.test`
 *  - TSConfig path resolution
 *  - Unit + integration testing with coverage
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { defineConfig } from 'vite';
import { config as loadEnv } from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

/* ─────────────────────────────────────────────────────────────
 * 🌱 Load Environment
 * ───────────────────────────────────────────────────────────── */
loadEnv({ path: './libs/data/.env.test' });

/* ─────────────────────────────────────────────────────────────
 * ⚙️ Vite Configuration
 * ───────────────────────────────────────────────────────────── */
export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/data',
  plugins: [tsconfigPaths()],

  // 🧪 Vitest test runner
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
