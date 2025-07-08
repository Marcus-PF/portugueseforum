# ✨ Code Formatting & Style Guide

> This document outlines our **formatting conventions**, **commenting strategy**, and **structure expectations** across the `@pfsa` monorepo (starting with `libs/data`).  
> It ensures a **unified developer experience**, higher readability, and consistent documentation across domains.

---

## 📐 File Structure Conventions

- **One module per file**: Keep each model/service/function isolated for clarity.
- **Named exports**: Always use named exports for shared functions/types/models.
- **Index aggregators**: Each directory should include an `index.ts` to re-export local modules.
- **File naming**: Use **kebab-case** (not camelCase or snake_case).

> ✅ Example: `community-post.ts` not `CommunityPost.ts` or `community_post.ts`

---

## 🔖 File Header Blocks

All exported files must begin with a **semantic header block** using a fixed format.

```ts
/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/{domain} – Short Description of the File     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Longer explanation or rationale for this file/module.
 *
 * Exports:
 *  - `NameA` → Description
 *  - `NameB` → Description
 */
````

---

## 🧩 Sectioned Layout

Each file should clearly separate concerns using boxed section markers:

```ts
/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Schema, model } from 'mongoose';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Schema Definition
 * ───────────────────────────────────────────────────────────── */
export const MySchema = new Schema({ ... });

/* ─────────────────────────────────────────────────────────────
 * 🧠 Type & Model Exports
 * ───────────────────────────────────────────────────────────── */
export type MyType = InferSchemaType<typeof MySchema>;
export const MyModel = models['My'] || model('My', MySchema);
```

### Available Markers

| Symbol | Section                          |
| ------ | -------------------------------- |
| 📦     | Dependencies                     |
| 🧾     | Schema or Service Implementation |
| 🧠     | Exports (Models, Types, etc.)    |
| 📚     | Docs or metadata-only utilities  |
| 🔧     | Configuration                    |
| 🧪     | Test setup                       |

---

## 🔤 Comment Style

* **Inline rationale**: Prefer in-line comments to explain *why*, not *what*.
* **JSdoc blocks**: Use `@example`, `@param`, `@returns` where helpful.
* **Emoji markers**: Use visual anchors (📦, 🧠, 🔁) consistently to enhance scanning.

---

## 💅 Formatting Rules

Enforced by Prettier & ESLint (via Nx):

| Rule                               | Value             |
| ---------------------------------- | ----------------- |
| Indentation                        | 2 spaces          |
| Quotes                             | Single `'`        |
| Semicolons                         | Yes               |
| Trailing commas                    | Always (`es5`)    |
| Line width                         | 100 characters    |
| File endings                       | Always newline    |
| Module boundaries                  | Tagged enforced   |
| `clsx`/`tailwind-merge` formatting | Use `cn()` helper |

### Sample:

```ts
<div className={cn('text-sm', isActive && 'text-blue-500')} />
```

---

## 🧪 Testing Patterns

* **Colocated**: Each domain has a single `*.spec.ts` file.
* **Vitest**: Always prefer isolated logic and mock external I/O.
* **Setup**: Ensure MongoDB via `.env.test`, load with `dotenv`.

```ts
beforeAll(async () => {
  await connectToDatabase();
});
```

---

## 🧠 TypeScript Rules

* Prefer `InferSchemaType<typeof Schema>` over manually defining interfaces
* Use `Pick<Type, Keys>` for granular input DTOs
* Never annotate `.lean()` or `.toJSON()` results unless absolutely necessary
* Never `any`, prefer `unknown` + zod validation if needed

---

## 📁 Directory Standards

| Folder      | Role                                        |
| ----------- | ------------------------------------------- |
| `articles/` | Article-related service logic (fetch, etc.) |
| `models/`   | Mongoose schemas + exported types           |
| `pages/`    | CRUD logic for static content pages         |
| `utils/`    | Generic helpers (API, DB, email, cn, etc.)  |

---

## ⛔ Anti-Patterns

* ⛔ Using inline Mongo connection logic (use `connectToDatabase()` instead)
* ⛔ Manually constructing class strings (use `cn()`)
* ⛔ Duplicating schemas across services (DRY with `models/`)
* ⛔ Using `import type` inconsistently (use explicitly where needed)

---

## 🏁 Roadmap

This guide will eventually move to:

```
docs/dev/formatting/
└── ts.md
└── api.md
└── db.md
└── test.md
```

---

## 📌 Meta

* Maintainer: [@marci](mailto:marci@mannys.co.za)
* Last updated: **July 2025**
* Location: `apps/forum/src/app/[locale]/admin/docs/dev/code-formatting.md`

---
