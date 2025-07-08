# 📚 `@pfsa/data`

> Shared data access layer for the Portuguese Forum monorepo.  
> Defines application-wide **Mongoose models**, **database services**, and **utility functions** — the source of truth for all persistent data operations.

---

## 🧭 Purpose

This library acts as the **data backbone** for all applications in the monorepo — including `forum`, `api`, and future services. It defines consistent database models, CRUD access patterns, shared utilities, and common abstractions across features like:

- ✍️ Articles and publishing
- 📄 Bilingual content pages
- 👤 User accounts and authentication
- 📬 Email transport and templates
- 🛠 Utility helpers for API calls, MongoDB, and Tailwind class merging

---

## 🏗 Structure

```

libs/data/
├── src/
│   ├── articles/          # DB queries and service logic for articles
│   ├── models/            # Mongoose schemas (Article, Page, User, etc.)
│   ├── pages/             # Fetch + upsert for static, bilingual pages
│   └── utils/             # Generic helpers (API client, email, DB, classnames)
├── project.json           # Nx project configuration
├── tsconfig.json          # Local TypeScript overrides
├── vite.config.ts         # Vitest test configuration
└── .env.test              # Environment variables used in tests

````

---

## 🧪 Testing

All modules include colocated unit tests using **Vitest**. To ensure reproducibility, tests load environment variables from a dedicated `.env.test` file in this directory.

### ✅ Running tests

```bash
nx test data
````

### ✅ Test environment variables

```env
# .env.test

MONGODB_URI=mongodb://localhost:27017/pfsa-test
NEXT_PUBLIC_API_URL=http://localhost:4000
EMAIL_USER=test@test.com
EMAIL_PASS=test123
NEXTAUTH_URL=http://localhost:3000
```

> ℹ️ The `.env.test` file is automatically loaded via `vite.config.ts`.

---

## 📦 Exports

The root `index.ts` provides clean access to each logical domain:

```ts
export * from './articles';  // → fetchArticles()
export * from './models';    // → ArticleModel, PageModel, UserModel, etc.
export * from './pages';     // → createOrUpdatePage(), fetchPageBySlug()
export * from './utils';     // → api.get(), connectToDatabase(), cn(), sendEmail(), etc.
```

Use as:

```ts
import { fetchArticles, createOrUpdatePage, connectToDatabase } from '@pfsa/data';
```

---

## 🧱 Models

Defined with `mongoose.Schema` and exported as both:

* `Model`: ready-to-use Mongoose model
* `Type`: statically typed via `InferSchemaType<typeof Schema>`

### Available Schemas

| Model           | Description                                          |
| --------------- | ---------------------------------------------------- |
| `Article`       | Blog-like post with tags, slug, published status     |
| `Page`          | Bilingual static content with `title_*`, `content_*` |
| `User`          | Account model with email, password, role, tokens     |
| `CommunityPost` | Nested reply-based forum posts                       |

Each model is available via both a `Schema`, a `Model`, and a `Type`:

```ts
import { ArticleModel, type Article } from '@pfsa/data';
```

---

## 🛠 Utilities

### 🔌 `connectToDatabase()`

Ensures singleton MongoDB connection using `mongoose`:

```ts
await connectToDatabase(); // handles reuse + validation
```

---

### 🌐 `api`

A simple REST client powered by `fetch` + `zod`:

```ts
const data = await api.get<MyData>('/api/resource');
const result = await api.post<ResponseType>('/api/submit', { payload });
```

> Automatically uses `process.env.NEXT_PUBLIC_API_URL`.

---

### 📧 `sendPasswordResetEmail()`

Sends an email via `nodemailer`, using environment-provided credentials. HTML templates and base URLs are generated dynamically.

---

### 🎨 `cn()`

A class helper that combines `clsx()` with `tailwind-merge()` for Tailwind-safe, conditional class merging:

```ts
<div className={cn('p-4', isActive && 'bg-primary')} />
```

---

## 🧼 Linting & Formatting

Lint and format using Nx:

```bash
nx lint data
nx format
```

Lint rules are enforced via flat ESLint configuration and strict tag boundaries.

---

## 💡 Conventions & Notes

* ✅ **Tag-driven boundaries** are enforced: `scope:shared`, `type:library`
* ✅ **Type-safe environment access** is used via narrowed `process.env`
* ✅ **Lean returns** from queries where applicable (`.lean()`)
* ✅ **`InferSchemaType`** is used to generate static types directly from schemas
* ✅ **Standardized file layout** with domain-level `index.ts` aggregators
* ✅ **Unit tests** are colocated and environment-aware

---

## 📚 Related Projects

| Project       | Path         | Description                             |
| ------------- | ------------ | --------------------------------------- |
| `@pfsa/ui`    | `libs/ui`    | Shared UI components and Tailwind setup |
| `@pfsa/forum` | `apps/forum` | Forum frontend (Next.js)                |
| `@pfsa/api`   | `apps/api`   | Hono-based backend (REST)               |

---

## 📎 License

MIT © [Mannys (Pty) Ltd](https://mannys.co.za)

---

## ✍️ Maintainers

* **Marcus Ive** – [@marci](mailto:marci@mannys.co.za)
* Contributions welcome via pull request.

---
