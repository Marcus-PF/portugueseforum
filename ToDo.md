## ✅ **Project Verification Structure**

We’ll go through your project in four key **phases**, from the ground up. Each phase is broken into **logical groups of files**, ensuring we cover everything cleanly and without redundancy.

---

### **🔹 Phase 1: Root of the Repo**

These are your global configs, scripts, and workspace setup files that affect everything.

**Order:**

1. `package.json` ✔️ *(we’ll do a follow-up validation based on versions)*
2. `pnpm-workspace.yaml` ✔️
3. `nx.json` ✔️
4. `tsconfig.base.json` / `tsconfig.json` ✔️
5. `postcss.config.mjs` ✔️
6. `eslint.config.mjs` ✔️
7. `README.md` ✔️

---

### **🔹 Phase 2: Libs**

We'll cover shared modules before moving into the apps. This ensures utilities, components, and types are all reliable.

**Order:**

#### `libs/data`

1. `project.json` ✔️
2. `tsconfig.json` ✔️
3. `vite.config.ts` ✔️
4. `src/index.ts` ✔️
5. `src/models/` ✔️

   * `article.ts`, `user.ts`, `page.ts`, `community_post.ts` ✔️
6. `src/utils/`

   * `api.ts`, `cn.ts`, `email.ts`, `index.ts` ✔️

#### `libs/ui`

1. `project.json` ✔️
2. `tsconfig.json` ✔️
3. `vite.config.ts` ✔️
4. `src/index.ts` ✔️
5. `src/styles/globals.css` ✔️
6. `src/hooks/` ✔️
7. `src/atoms/` *(we can group these or walk through the key ones you use in `forum`)* ✔️

---

### **🔹 Phase 3: Apps**

#### `apps/api` ✔️

1. `project.json` ✔️
2. `tsconfig.json` ✔️
3. `eslint.config.mjs` ✔️
4. `.env` *(redacted or you can confirm what’s defined)* ✔️
5. `src/dev.ts` ✔️
6. `src/main.ts` ✔️
7. `src/routes/` ✔️

   * `auth.ts`, `articles.ts`
8. `src/middleware/auth.ts` ✔️
9. `src/assets/` *(currently empty — flag for cleanup or ignore?)*

#### `apps/forum`

1. `project.json`
2. `tsconfig.json`
3. `eslint.config.mjs`
4. `next.config.mjs`
5. `index.d.ts`, `next-env.d.ts`
6. `src/app/middleware.ts`
7. `src/app/i18n/`
8. `src/app/[locale]/layout.tsx`
9. Pages: `about`, `auth`, `contact`, `news`, `admin`, `profile`, etc.
10. Components: navigation, shared/auth, newsletter, etc.

---

### **🔹 Phase 4: Final Setup & Polish**

We'll address project-wide consistency, polish, and readiness.

1. Fix missing dependencies / invalid versions
2. Tailwind config & globals CSS integrity
3. Accessibility / SEO baseline (basic checks)
4. Test coverage goals
5. Build + deployment (local & remote: Docker/Vercel/etc.)
6. Documentation completeness (README, CLI scripts, etc.)

---
