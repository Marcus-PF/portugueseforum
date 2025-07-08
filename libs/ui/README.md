# @pfsa/ui

> **Portuguese Forum Shared UI Components**  
> A fully typed, composable component library based on [shadcn/ui](https://ui.shadcn.com) with project-specific extensions, themes, and utilities.

---

## 🧱 Purpose

This package contains all low-level, shared frontend UI components (atoms) and view-agnostic hooks for the PFSA monorepo. It promotes consistency, reusability, and DX-friendly abstractions across all frontend apps.

It includes:

- ShadCN-derived components: alert, accordion, card, dialog, etc.
- Custom primitives and wrappers
- Shared Tailwind theme via `globals.css`
- Composable headless hooks
- Color tokens with full light/dark support using `oklch()`

---

## 🗂️ Directory Structure

```
libs/ui/
├── src/
│   ├── atoms/           → Reusable UI primitives (ShadCN-based)
│   ├── hooks/           → Global frontend utility hooks
│   ├── styles/          → Tailwind theme & tokens (globals.css)
│   └── index.ts         → Barrel file re-exporting all exports
├── project.json         → Nx project config
├── tsconfig.json        → TypeScript settings
└── vite.config.ts       → Vitest & build configuration
```

---

## 🎨 Theme & Styles

The Tailwind CSS theme is defined in:

```
libs/ui/src/styles/globals.css
```

It uses `@theme inline` + `oklch()` color space for accessible, semantically named CSS variables:

- `--primary`, `--secondary`, `--accent`
- `--sidebar-*`, `--card-*`, `--foreground`, etc.

Supports both **light** and **dark** modes.

---

## 🧪 Testing

Unit tests are written using **Vitest** and live under:

```
libs/ui/src/**/*.spec.tsx
```

Run UI tests via:

```bash
nx test ui
```

---

## 📦 Usage

Import atoms/hooks from the workspace path alias:

```ts
import { Button, Accordion } from '@pfsa/ui';
import { useIsMobile } from '@pfsa/ui';
import '@pfsa/ui/global'; // Tailwind tokens
```

---

## 🧠 Notes

- This library **does not include app-specific layout logic**.
- It is framework-agnostic (Next.js, Hono, etc. compatible).
- Tailwind plugins like `tailwindcss-animate` are supported.
- Style tokens follow the [Design Tokens W3C spec](https://design-tokens.org/).

---

## 📁 Related Projects

- [`@pfsa/data`](../../data) – Shared server-side logic
- [`apps/forum`](../../../apps/forum) – Main frontend application

---
