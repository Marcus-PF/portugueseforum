/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          @pfsa/forum – ESLint Flat Config Setup        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * ESLint configuration for the Next.js frontend app using
 * Nx and Flat ESLint format. Includes:
 *  - Next.js recommended rules
 *  - Core Web Vitals
 *  - Nx workspace rules
 *  - Shared base rules
 */

/* ─────────────────────────────────────────────────────────────
 * 🔧 ESLint Configuration Setup
 * ───────────────────────────────────────────────────────────── */
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

/* ─────────────────────────────────────────────────────────────
 * 📦 Combined Rule Exports
 * ───────────────────────────────────────────────────────────── */
export default [
  // ✅ Next.js-specific linting rules
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),

  // ✅ Workspace-wide config + Nx + React TS
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],

  // ⛔ Ignore build output
  {
    ignores: ['.next/**/*'],
  },
];
