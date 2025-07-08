# 🛰️ `@pfsa/api` – Hono-based API Gateway for Portuguese Forum

> The backend API service for the Portuguese Forum platform, built with [Hono](https://hono.dev/) and integrated with MongoDB, JWT authentication, and the `@pfsa/data` library for domain logic and models.

---

## 📁 Overview

This application exposes a lightweight, modular, and secure HTTP API using the [Hono](https://hono.dev/) framework, designed for modern TypeScript runtimes.

It serves as the primary backend for:
- 📝 Article management (`/articles`)
- 🔐 Authentication workflows (`/auth`)
- 🧪 Future protected admin APIs

---

## 🛠️ Stack

| Tech           | Role                            |
|----------------|---------------------------------|
| **Hono**       | Minimal, fast web framework     |
| **Zod**        | Schema validation               |
| **MongoDB**    | Data persistence                |
| **JWT**        | Auth middleware                 |
| **bcrypt**     | Password hashing                |
| **dotenv**     | Secure environment variables    |
| **TSX**        | Dev server (entry via `dev.ts`) |
| **Vitest**     | Testing framework               |

---

## 🚀 Running Locally

### 1. Install dependencies

```bash
pnpm install
````

### 2. Add environment variables

Create an `.env` file inside `apps/api/`:

```env
MONGODB_URI=mongodb://localhost:27017/pfsa
JWT_SECRET=your-super-secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
EMAIL_USER=test@test.com
EMAIL_PASS=test123
```

> ✅ Tip: See [`apps/api/.env`](./.env) for reference.

### 3. Start the dev server

```bash
nx serve api
```

* Default port: `http://localhost:4000`
* Hono entry point: [`src/main.ts`](./src/main.ts)
* Logs JWT env status and boot info

---

## 🌐 Routes

| Method | Path                           | Description                       |
| ------ | ------------------------------ | --------------------------------- |
| `GET`  | `/`                            | API health check                  |
| `GET`  | `/articles`                    | Get published articles            |
| `GET`  | `/articles/:slug`              | Get article by slug               |
| `POST` | `/articles`                    | Create article (JWT protected)    |
| `POST` | `/auth/register`               | User registration                 |
| `POST` | `/auth/reset-password`         | Initiate password reset via email |
| `POST` | `/auth/reset-password/confirm` | Confirm and apply new password    |

> 🛡️ `POST /articles` is protected by JWT middleware and requires a valid `Authorization: Bearer <token>` header.

---

## 🧪 Testing

Vitest is configured via [`vitest.config.ts`](./vitest.config.ts). To run all tests:

```bash
nx test api
```

> By default, test coverage is collected using `v8`.

---

## 📐 Structure

```txt
apps/api/
├── src/
│   ├── dev.ts          # Loads .env + launches Hono app
│   ├── main.ts         # Mounts middleware and routes
│   ├── middleware/     # Auth middleware (JWT-based)
│   └── routes/         # API route handlers (articles, auth)
├── .env                # Local development env vars
├── project.json        # Nx project definition
└── tsconfig.json       # TypeScript config
```

---

## 🧠 Nx Tags

```json
"tags": ["backend", "scope:api", "type:application", "scope:shared"]
```

These tags enable:

* ⚠️ Enforced module boundaries (e.g., can only import from `shared` libs)
* 🧹 Lint rules using `@nx/enforce-module-boundaries`

---

## 📌 Notes

* The API depends on domain models and services from [`@pfsa/data`](../../libs/data).
* All MongoDB operations are scoped to the `pfsa` database.
* Email logic for password reset is delegated to `sendPasswordResetEmail()` in `@pfsa/data`.

---

## 🏁 Roadmap

* [ ] JWT login + session endpoints
* [ ] Rate-limiting & request logging middleware
* [ ] Role-based access control (`admin`, `user`)
* [ ] Article update/delete routes

---

## 📬 Maintainers

* Marcus Ive [@marci](mailto:marci@mannys.co.za)

---
