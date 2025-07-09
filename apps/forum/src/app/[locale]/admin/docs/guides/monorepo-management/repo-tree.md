# 🌳 Portuguese Forum Monorepo - Repository Tree

> **Complete repository structure showing the ideal organization of our Nx monorepo**  
> _Last updated: July 2025_

---

## 📁 Root Level Structure

```
📁 Portuguese Forum Monorepo (@pfsa/source)
│
├── 📁 apps/                               # Applications
│   ├── 📁 api/                            # Hono API Backend
│   │   ├── 📁 src/
│   │   │   ├── 📄 main.ts                 # API entry point
│   │   │   ├── 📄 dev.ts                  # Development server
│   │   │   ├── 📁 routes/
│   │   │   │   ├── 📄 users.ts            # User management routes
│   │   │   │   ├── 📄 auth.ts             # Authentication routes
│   │   │   │   ├── 📄 articles.ts         # Article management routes
│   │   │   │   └── 📄 newsletter.ts       # Newsletter routes
│   │   │   ├── 📁 middleware/
│   │   │   │   ├── 📄 jwt.ts              # JWT authentication
│   │   │   │   ├── 📄 cors.ts             # CORS handling
│   │   │   │   └── 📄 validation.ts       # Request validation
│   │   │   └── 📁 utils/
│   │   │       └── 📄 response.ts         # Response utilities
│   │   ├── 📄 project.json                # Nx project configuration
│   │   ├── 📄 tsconfig.json               # TypeScript configuration
│   │   └── 📄 vite.config.ts              # Vite configuration
│   │
│   └── 📁 forum/                          # Next.js Frontend
│       ├── 📁 src/
│       │   ├── 📁 app/
│       │   │   ├── 📁 [locale]/
│       │   │   │   ├── 📁 admin/          # Admin dashboard
│       │   │   │   │   ├── 📁 users/      # User management
│       │   │   │   │   ├── 📁 articles/   # Article management
│       │   │   │   │   └── 📁 docs/       # Documentation
│       │   │   │   ├── 📁 auth/           # Authentication pages
│       │   │   │   ├── 📁 articles/       # Article pages
│       │   │   │   └── 📄 page.tsx        # Homepage
│       │   │   └── 📄 layout.tsx          # Root layout
│       │   ├── 📁 components/             # App-specific components
│       │   ├── 📁 lib/
│       │   │   ├── 📄 auth.ts             # Auth configuration
│       │   │   └── 📄 api.ts              # API client setup
│       │   └── 📁 middleware/
│       │       └── 📄 auth.ts             # Auth middleware
│       ├── 📄 next.config.mjs             # Next.js configuration
│       ├── 📄 project.json                # Nx project configuration
│       └── 📄 tsconfig.json               # TypeScript configuration
│
├── 📁 libs/                               # Shared Libraries
│   ├── 📁 data/                           # Data Layer Library
│   │   ├── 📁 src/
│   │   │   ├── 📁 constants/
│   │   │   │   ├── 📄 roles.ts            # User role constants
│   │   │   │   ├── 📄 permissions.ts      # Permission constants
│   │   │   │   └── 📄 index.ts            # Constants exports
│   │   │   ├── 📁 dto/
│   │   │   │   ├── 📄 user-dto.ts         # User DTOs
│   │   │   │   ├── 📄 article-dto.ts      # Article DTOs
│   │   │   │   └── 📄 index.ts            # DTO exports
│   │   │   ├── 📁 models/
│   │   │   │   ├── 📄 user.ts             # User Mongoose model
│   │   │   │   ├── 📄 article.ts          # Article Mongoose model
│   │   │   │   └── 📄 index.ts            # Model exports
│   │   │   ├── 📁 schemas/
│   │   │   │   ├── 📄 user-schema.ts      # User Zod schemas
│   │   │   │   ├── 📄 article-schema.ts   # Article Zod schemas
│   │   │   │   └── 📄 index.ts            # Schema exports
│   │   │   ├── 📁 services/
│   │   │   │   ├── 📄 user-service.ts     # User business logic
│   │   │   │   ├── 📄 article-service.ts  # Article business logic
│   │   │   │   ├── 📄 newsletter-service.ts # Newsletter service
│   │   │   │   └── 📄 index.ts            # Service exports
│   │   │   ├── 📁 mocks/
│   │   │   │   ├── 📄 mock-users.ts       # Mock user data
│   │   │   │   ├── 📄 mock-articles.ts    # Mock article data
│   │   │   │   └── 📄 index.ts            # Mock exports
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📁 backend/
│   │   │   │   │   ├── 📄 db.ts           # Database connection
│   │   │   │   │   └── 📄 index.ts        # Backend util exports
│   │   │   │   ├── 📁 frontend/
│   │   │   │   │   ├── 📄 client.ts       # API client utilities
│   │   │   │   │   └── 📄 index.ts        # Frontend util exports
│   │   │   │   ├── 📁 shared/
│   │   │   │   │   ├── 📄 env.ts          # Environment validation
│   │   │   │   │   ├── 📄 env-loader.ts   # Environment loader
│   │   │   │   │   ├── 📄 validation.ts   # Shared validation
│   │   │   │   │   └── 📄 index.ts        # Shared util exports
│   │   │   │   └── 📄 index.ts            # Utils exports
│   │   │   └── 📄 index.ts                # Main library export
│   │   ├── 📄 project.json                # Nx project configuration
│   │   ├── 📄 tsconfig.json               # TypeScript configuration
│   │   └── 📄 vite.config.ts              # Vite configuration
│   │
│   ├── 📁 ui/                             # UI Component Library
│   │   ├── 📁 src/
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📁 ui/                 # ShadCN base components
│   │   │   │   │   ├── 📄 button.tsx      # Button component
│   │   │   │   │   ├── 📄 input.tsx       # Input component
│   │   │   │   │   ├── 📄 dialog.tsx      # Dialog component
│   │   │   │   │   └── 📄 ...             # Other UI components
│   │   │   │   ├── 📁 forms/
│   │   │   │   │   ├── 📄 user-form.tsx   # User form component
│   │   │   │   │   └── 📄 ...             # Other form components
│   │   │   │   ├── 📁 tables/
│   │   │   │   │   ├── 📄 data-table.tsx  # Generic data table
│   │   │   │   │   └── 📄 ...             # Other table components
│   │   │   │   └── 📄 index.ts            # Component exports
│   │   │   ├── 📁 hooks/
│   │   │   │   ├── 📄 use-toast.ts        # Toast hook
│   │   │   │   └── 📄 index.ts            # Hook exports
│   │   │   ├── 📁 lib/
│   │   │   │   ├── 📄 utils.ts            # UI utilities
│   │   │   │   └── 📄 index.ts            # Lib exports
│   │   │   ├── 📁 styles/
│   │   │   │   ├── 📄 globals.css         # Global styles
│   │   │   │   └── 📄 components.css      # Component styles
│   │   │   └── 📄 index.ts                # Main library export
│   │   ├── 📄 project.json                # Nx project configuration
│   │   ├── 📄 tsconfig.json               # TypeScript configuration
│   │   └── 📄 vite.config.ts              # Vite configuration
│   │
│   ├── 📁 auth/                           # Authentication Library
│   │   ├── 📁 src/
│   │   │   ├── 📁 providers/
│   │   │   │   ├── 📄 jwt.ts              # JWT provider
│   │   │   │   ├── 📄 oauth.ts            # OAuth provider
│   │   │   │   └── 📄 index.ts            # Provider exports
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📄 tokens.ts           # Token utilities
│   │   │   │   ├── 📄 validation.ts       # Auth validation
│   │   │   │   └── 📄 index.ts            # Auth util exports
│   │   │   ├── 📁 types/
│   │   │   │   ├── 📄 auth.ts             # Auth types
│   │   │   │   └── 📄 index.ts            # Type exports
│   │   │   └── 📄 index.ts                # Main library export
│   │   ├── 📄 project.json                # Nx project configuration
│   │   ├── 📄 tsconfig.json               # TypeScript configuration
│   │   └── 📄 vite.config.ts              # Vite configuration
│   │
│   ├── 📁 api-client/                     # API Client Library
│   │   ├── 📁 src/
│   │   │   ├── 📁 clients/
│   │   │   │   ├── 📄 users.ts            # User API client
│   │   │   │   ├── 📄 articles.ts         # Article API client
│   │   │   │   ├── 📄 auth.ts             # Auth API client
│   │   │   │   └── 📄 index.ts            # Client exports
│   │   │   ├── 📁 types/
│   │   │   │   ├── 📄 api.ts              # API types
│   │   │   │   └── 📄 index.ts            # Type exports
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📄 http.ts             # HTTP utilities
│   │   │   │   ├── 📄 interceptors.ts     # Request interceptors
│   │   │   │   └── 📄 index.ts            # Util exports
│   │   │   └── 📄 index.ts                # Main library export
│   │   ├── 📄 project.json                # Nx project configuration
│   │   ├── 📄 tsconfig.json               # TypeScript configuration
│   │   └── 📄 vite.config.ts              # Vite configuration
│   │
│   └── 📁 i18n/                           # Internationalization Library
│       ├── 📁 src/
│       │   ├── 📁 locales/
│       │   │   ├── 📄 en.json             # English translations
│       │   │   ├── 📄 pt.json             # Portuguese translations
│       │   │   └── 📄 index.ts            # Locale exports
│       │   ├── 📁 utils/
│       │   │   ├── 📄 translator.ts       # Translation utilities
│       │   │   ├── 📄 formatter.ts        # Formatting utilities
│       │   │   └── 📄 index.ts            # Util exports
│       │   ├── 📁 types/
│       │   │   ├── 📄 i18n.ts             # i18n types
│       │   │   └── 📄 index.ts            # Type exports
│       │   └── 📄 index.ts                # Main library export
│       ├── 📄 project.json                # Nx project configuration
│       ├── 📄 tsconfig.json               # TypeScript configuration
│       └── 📄 vite.config.ts              # Vite configuration
│
├── 📁 ROOT CONFIGURATION FILES
│   ├── 📄 package.json                    # Workspace dependencies
│   ├── 📄 pnpm-workspace.yaml             # pnpm workspace configuration
│   ├── 📄 nx.json                         # Nx workspace configuration
│   ├── 📄 tsconfig.base.json              # Base TypeScript configuration
│   ├── 📄 tsconfig.json                   # Root TypeScript configuration
│   ├── 📄 eslint.config.mjs               # ESLint configuration
│   ├── 📄 .prettierrc                     # Prettier configuration
│   ├── 📄 .prettierignore                 # Prettier ignore patterns
│   ├── 📄 postcss.config.mjs              # PostCSS configuration
│   ├── 📄 tailwind.config.js              # Tailwind configuration
│   ├── 📄 .gitignore                      # Git ignore patterns
│   ├── 📄 .env.example                    # Environment template
│   ├── 📄 .env.test                       # Test environment variables
│   └── 📄 README.md                       # Project documentation
│
└── 📁 DEVELOPMENT & CI/CD
    ├── 📁 .github/
    │   ├── 📁 workflows/
    │   │   ├── 📄 ci.yml                  # CI/CD pipeline
    │   │   └── 📄 deploy.yml              # Deployment pipeline
    │   └── 📁 instructions/
    │       └── 📄 nx.instructions.md      # Nx MCP instructions
    ├── 📁 .nx/
    │   ├── 📄 cache/                      # Nx cache (gitignored)
    │   └── 📄 workspace-data/             # Nx workspace data
    └── 📁 tools/
        ├── 📁 scripts/
        │   ├── 📄 build.sh                # Build scripts
        │   └── 📄 deploy.sh               # Deployment scripts
        └── 📁 generators/
            └── 📄 custom-generator.ts     # Custom Nx generators
```

## 📊 Library Dependencies

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     forum       │    │      api        │    │      libs       │
│   (Next.js)     │    │    (Hono)       │    │   (Internal)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│      @pfsa/ui   │    │   @pfsa/data    │    │   @pfsa/auth    │
│  (Components)   │    │  (Data Layer)   │    │ (Auth Utils)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ @pfsa/api-client│    │   @pfsa/i18n    │    │  @pfsa/utils    │
│ (API Client)    │    │ (Translation)   │    │ (Shared Utils)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

**Key Principles:**
- **Apps depend on libs** (never the reverse)
- **Libs can depend on other libs** (following dependency constraints)
- **Shared utilities** are in `@pfsa/data/utils/shared`
- **Environment configuration** is centralized at root level
- **Each lib has a single responsibility** and clear boundaries