// eslint.config.mjs

import nx from '@nx/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default [
  // Base configs from Nx
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // Core ESLint JavaScript rules
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Next.js plugin + web vitals
  {
    files: ['apps/forum/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  // Enforce clean boundaries based on project tags
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            '^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$',
          ],
          depConstraints: [
            {
              sourceTag: 'frontend',
              onlyDependOnLibsWithTags: ['shared'],
            },
            {
              sourceTag: 'backend',
              onlyDependOnLibsWithTags: ['shared'],
            },
            {
              sourceTag: 'shared',
              onlyDependOnLibsWithTags: ['shared'],
            },
          ],
        },
      ],
    },
  },

  // Ignore non-source directories and generated configs
  {
    ignores: [
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
];
