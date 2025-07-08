/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @pfsa/ui – Vite Configuration             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Local Vite configuration for the `@pfsa/ui` workspace lib.
 * Adds TS config paths + test coverage support via Vitest.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/* ─────────────────────────────────────────────────────────────
 * ⚙️ Vite Configuration
 * ───────────────────────────────────────────────────────────── */
export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/ui',
  plugins: [tsconfigPaths()],

  // 🧪 Vitest setup for component/unit testing
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
