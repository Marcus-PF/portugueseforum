# 🧭 Monorepo Context (Quick Brief)

_Hand this to any AI / teammate to get instant situational awareness._  
_Last sync: **July 2025**_

---

## 🏗 Workspace Tech Stack

| Layer | Tooling |
| ----- | ------- |
| Monorepo | **Nx 21.2** (`workspace.jsonless`) |
| Package manager | **pnpm 10** |
| Backend | **Hono v4** (+ JWT, Zod, MongoDB) |
| Frontend | **Next.js 15** (App Router, React 19) |
| DB / ODM | **MongoDB 6.17** + **Mongoose 8.16** |
| Component kit | **ShadCN** (Radix UI) |
| Styling | **Tailwind CSS v4** + CSS variables |
| i18n | **next-intl 4.3** (`en`, `pt`) |
| Auth | **next-auth 4** (Google OAuth & credentials) |
| Email | **Nodemailer 7** (Gmail demo) |
| Tests | **Vitest 3** + `@vitest/ui` |
| Lint / Format | ESLint 9 (flat), Prettier 2 |

---

## 🗄 Directory Reference

````

apps/
api/         # Hono server (JWT auth, articles + auth routes)
forum/       # Next.js website (App Router, locales)
libs/
data/        # DB models, CRUD services, utils (split: backend|frontend|shared)
ui/          # ShadCN atoms + Tailwind theme

```

### `libs/data`

| Folder | What’s inside |
| ------ | ------------- |
| `models/` | `article.ts`, `community-post.ts`, `page.ts`, `user.ts` |
| `articles/` | `fetchArticles.ts` |
| `pages/` | `createOrUpdatePage.ts`, `fetchPageBySlug.ts` |
| `utils/` | `backend/` (`db.ts`, `email.ts`) • `frontend/` (`api.ts`) • `shared/` (`cn.ts`) |

Tests: colocated `*.spec.ts` per domain (Vitest loads `.env.test`).

### `apps/forum`

| Path | Purpose |
| ---- | ------- |
| `src/app/layout.tsx` | **Global** root layout (next-intl provider) |
| `src/app/page.tsx` | Redirect `/` → `/en` |
| `src/app/[locale]/` | All localised routes (`about`, `news`, `admin`, …) |
| `src/app/i18n/request.ts` | `getRequestConfig` for next-intl v4 |
| `middleware.ts` | `next-intl/middleware` locale detection |

---

## 🔖 Key Conventions

* **File headers** with box art & emoji markers  
* **kebab-case** filenames and **named exports**  
* Each directory re-exports via `index.ts`  
* Tags control boundaries (`backend`, `shared`, `frontend`, …)  
* Tailwind class merging via `cn()` (clsx + tailwind-merge)  
* Prefer `InferSchemaType<typeof Schema>` for Mongoose types  
* `.lean()` results are left un-annotated

Full style guide: `code-formatting.md`.

---

## 🛠 Common Commands

| Action | Command |
| ------ | ------- |
| Start dev servers | `nx serve api` & `nx serve forum` |
| Run tests | `nx test data` (libs) |
| Lint whole repo | `nx lint` |
| Type-check | `nx run-many -t type-check` |
| Clean cache | `nx reset` |

---

## 🗣 Talking to the Repo (when using ChatGPT or similar)

> “You are working in an Nx monorepo with Next.js 15 (App Router) and Hono.  
> Locales are **en** & **pt** via `next-intl@4`.  
> Libs: `@pfsa/data` (Mongoose models, utils) and `@pfsa/ui` (ShadCN atoms).  
> Follow the code-formatting guide (boxed headers, emoji markers, kebab files).  
> Use named exports and keep each module in its own file.”

Copy-paste that blurb to bootstrap a new AI session.

---

## 📌 Contact

Maintainer: **[@marci](mailto:marci@mannys.co.za)** – happy coding!

---
