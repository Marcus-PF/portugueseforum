# 🏛 Portuguese Forum Monorepo (`@pfsa/*`)

[![Nx](https://img.shields.io/badge/Powered%20by-Nx-6659a8?logo=nx&logoColor=white)](https://nx.dev)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org)
[![pnpm](https://img.shields.io/badge/pnpm-10-yellow?logo=pnpm)](https://pnpm.io)

A **full-stack Nx workspace** that powers _The Portuguese Forum_:

| Domain | Framework | Package | Description |
| ------ | --------- | ------- | ----------- |
| **API** | Hono + TSX | `apps/api` | Lightweight Node API with JWT auth, MongoDB, Zod-validated routes |
| **Website** | Next 15 (App Router) | `apps/forum` | Localised marketing & community frontend (`/en`, `/pt`) |
| **Data** | Mongoose (v8) | `libs/data` | Schemas, CRUD services, shared utils (db, email, api, cn, …) |
| **UI**   | React 19 + ShadCN | `libs/ui` | Re-exported atoms, hooks & global Tailwind v4 theme |

---

## 🗄 Project Layout

```

.
├─ apps/
│  ├─ api/    # Hono server
│  └─ forum/  # Next.js frontend (App Router)
├─ libs/
│  ├─ data/   # Backend-centric utilities & DB models
│  └─ ui/     # Headless UI atoms (ShadCN)
└─ tsconfig.base.json

````

---

## 🚀 Quick Start

```bash
pnpm install         # bootstrap dependencies
nx serve api         # start API on :4000
nx serve forum       # start Next.js on :3000
nx test data         # run Vitest suite for libs/data
nx lint ui           # ESLint (flat) with module boundaries
````

> **Prerequisites:** Node 20+, pnpm 10, MongoDB running on `mongodb://localhost:27017/pfsa`.

---

## 🔑 Environment Files

| App / Lib      | Example file          | Notes                                       |
| -------------- | --------------------- | ------------------------------------------- |
| **API**        | `apps/api/.env`       | `MONGODB_URI`, `JWT_SECRET`, `EMAIL_*`      |
| **Forum**      | `apps/forum/.env`     | `NEXTAUTH_URL`, `NEXT_PUBLIC_API_URL`, etc. |
| **Data tests** | `libs/data/.env.test` | Loaded by Vitest via `dotenv`               |

---

## ✨ Code Style & Rules

* **File headers**, emojis and boxed section markers (📦 / 🧾 / 🧠 …)
* **kebab-case filenames**, **named exports** only
* **ESLint**  `@nx/enforce-module-boundaries` enforced via tags
* **Prettier 2.8** (2-space indent, single quotes, 100 col)
* **Vitest** colocated `*.spec.ts` per domain
* **Tailwind v4** + **tailwind-merge** via `cn()` helper

Full convention docs live at
`apps/forum/src/app/[locale]/admin/docs/dev/code-formatting.md`.

---

## 🧰 Useful Commands

| Goal                         | Command                                     |
| ---------------------------- | ------------------------------------------- |
| Build API (ESBuild)          | `nx build api`                              |
| Prod static export (Next)    | `nx build forum --configuration=production` |
| Type-check everywhere        | `nx run-many -t type-check`                 |
| Reset Nx cache & Jest/Vitest | `nx reset`                                  |
| Clean installs               | `rm -rf node_modules && pnpm i`             |

---

## 🤝 Contributing

1. Branch from `main`, follow commit-lint (`feat:`, `fix:`, …).
2. Keep **one module per file**; update appropriate `index.ts`.
3. Ensure `nx test …` and `nx lint …` pass before PR.
4. Describe any new tags in `nx.json`.

---

## 📜 License

MIT © 2025 *The Portuguese Forum* — Maintainer **[@marci](mailto:marci@mannys.co.za)**
Last updated: **July 2025**

---

