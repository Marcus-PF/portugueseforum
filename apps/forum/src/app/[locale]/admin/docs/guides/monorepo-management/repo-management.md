# 🏛️ Portuguese Forum Monorepo - Management Guide

> **Comprehensive guide for managing the Portuguese Forum monorepo structure, dependencies, and development workflows**  
> _Last updated: July 2025_

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Workspace Structure](#-workspace-structure)
3. [Library Management](#-library-management)
4. [Development Workflows](#-development-workflows)
5. [Dependency Management](#-dependency-management)
6. [Build & Deployment](#-build--deployment)
7. [Code Quality & Standards](#-code-quality--standards)
8. [Troubleshooting](#-troubleshooting)

---

## 🎯 Overview

The Portuguese Forum monorepo is built using **Nx 21.2** with **pnpm 10** as the package manager. It follows a clean architecture pattern with strict dependency boundaries and shared libraries for reusable code.

### **Key Principles**
- **Apps consume libs** (never the reverse)
- **Libs can depend on other libs** (following scope rules)
- **Shared utilities** are centralized in `@pfsa/data/utils/shared`
- **Environment configuration** is managed at the root level
- **Type safety** is enforced throughout the entire workspace

### **Technology Stack**
- **Monorepo**: Nx 21.2 with pnpm workspaces
- **Backend**: Hono v4 with TypeScript
- **Frontend**: Next.js 15 with App Router
- **Database**: MongoDB with Mongoose
- **UI**: ShadCN components with Tailwind CSS v4
- **Testing**: Vitest with Testing Library
- **Deployment**: Vercel for both frontend and API

---

## 🏗️ Workspace Structure

### **Applications (`apps/`)**

#### **API Application** (`apps/api/`)
```bash
apps/api/
├── src/
│   ├── main.ts              # Entry point with environment loading
│   ├── dev.ts               # Development server
│   ├── routes/              # API route handlers
│   │   ├── users.ts         # User management endpoints
│   │   ├── auth.ts          # Authentication endpoints
│   │   ├── articles.ts      # Article management endpoints
│   │   └── newsletter.ts    # Newsletter endpoints
│   ├── middleware/          # API middleware
│   │   ├── jwt.ts           # JWT authentication
│   │   ├── cors.ts          # CORS configuration
│   │   └── validation.ts    # Request validation
│   └── utils/               # API-specific utilities
│       └── response.ts      # Response formatting
├── project.json             # Nx project configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

**Key Features:**
- **Environment Loading**: Automatically loads environment variables from workspace root
- **JWT Authentication**: Secure user authentication with refresh tokens
- **Validation**: Zod schema validation for all endpoints
- **CORS**: Properly configured for frontend integration
- **Error Handling**: Centralized error handling with proper status codes

#### **Forum Application** (`apps/forum/`)
```bash
apps/forum/
├── src/
│   ├── app/
│   │   ├── [locale]/         # Internationalized routes
│   │   │   ├── admin/        # Admin dashboard
│   │   │   │   ├── users/    # User management
│   │   │   │   ├── articles/ # Article management
│   │   │   │   └── docs/     # Documentation
│   │   │   ├── auth/         # Authentication pages
│   │   │   ├── articles/     # Public article pages
│   │   │   └── page.tsx      # Homepage
│   │   ├── layout.tsx        # Root layout
│   ├── components/           # App-specific components
│   ├── lib/                  # App-specific utilities
│   │   ├── auth.ts           # NextAuth configuration
│   │   └── api.ts            # API client setup
│   └── middleware/           # Next.js middleware
│       └── auth.ts           # Authentication middleware
├── next.config.mjs           # Next.js configuration
├── project.json              # Nx project configuration
└── tsconfig.json             # TypeScript configuration
```

**Key Features:**
- **Internationalization**: Built-in support for Portuguese and English
- **Admin Dashboard**: Complete user and content management
- **Authentication**: NextAuth integration with multiple providers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data

### **Libraries (`libs/`)**

#### **Data Library** (`libs/data/`)
The central data layer containing all business logic, models, and utilities.

```bash
libs/data/src/
├── constants/               # Application constants
│   ├── roles.ts            # User roles and permissions
│   ├── permissions.ts      # Permission definitions
│   └── index.ts            # Constants exports
├── dto/                    # Data Transfer Objects
│   ├── user-dto.ts         # User DTOs
│   ├── article-dto.ts      # Article DTOs
│   └── index.ts            # DTO exports
├── models/                 # Mongoose models
│   ├── user.ts             # User model
│   ├── article.ts          # Article model
│   └── index.ts            # Model exports
├── schemas/                # Zod validation schemas
│   ├── user-schema.ts      # User validation
│   ├── article-schema.ts   # Article validation
│   └── index.ts            # Schema exports
├── services/               # Business logic services
│   ├── user-service.ts     # User business logic
│   ├── article-service.ts  # Article business logic
│   ├── newsletter-service.ts # Newsletter service
│   └── index.ts            # Service exports
├── mocks/                  # Mock data for testing
│   ├── mock-users.ts       # Mock user data
│   ├── mock-articles.ts    # Mock article data
│   └── index.ts            # Mock exports
├── utils/                  # Utility functions
│   ├── backend/            # Backend-specific utilities
│   │   ├── db.ts           # Database connection
│   │   └── index.ts        # Backend exports
│   ├── frontend/           # Frontend-specific utilities
│   │   ├── client.ts       # API client utilities
│   │   └── index.ts        # Frontend exports
│   ├── shared/             # Shared utilities
│   │   ├── env.ts          # Environment validation
│   │   ├── env-loader.ts   # Environment loading
│   │   ├── validation.ts   # Shared validation
│   │   └── index.ts        # Shared exports
│   └── index.ts            # Utils exports
└── index.ts                # Main library export
```

#### **UI Library** (`libs/ui/`)
Reusable UI components and design system.

```bash
libs/ui/src/
├── components/
│   ├── ui/                 # Base ShadCN components
│   │   ├── button.tsx      # Button component
│   │   ├── input.tsx       # Input component
│   │   ├── dialog.tsx      # Dialog component
│   │   └── ...             # Other UI components
│   ├── forms/              # Form components
│   │   ├── user-form.tsx   # User form
│   │   └── ...             # Other forms
│   ├── tables/             # Table components
│   │   ├── data-table.tsx  # Generic data table
│   │   └── ...             # Other tables
│   └── index.ts            # Component exports
├── hooks/                  # Custom React hooks
│   ├── use-toast.ts        # Toast notifications
│   └── index.ts            # Hook exports
├── lib/                    # UI utilities
│   ├── utils.ts            # Utility functions
│   └── index.ts            # Lib exports
├── styles/                 # Styles and themes
│   ├── globals.css         # Global styles
│   └── components.css      # Component styles
└── index.ts                # Main library export
```

#### **Other Libraries**
- **`@pfsa/auth`**: Authentication utilities and providers
- **`@pfsa/api-client`**: HTTP client for API communication
- **`@pfsa/i18n`**: Internationalization utilities and translations

---

## 📚 Library Management

### **Creating a New Library**

```bash
# Generate a new library
nx generate @nx/js:library my-lib

# Generate a React library
nx generate @nx/react:library my-react-lib

# Generate with specific scope
nx generate @nx/js:library my-lib --directory=libs/shared
```

### **Library Naming Conventions**

- **Scope prefix**: All libraries use `@pfsa/` prefix
- **Kebab case**: Use kebab-case for library names
- **Descriptive names**: Clear, descriptive names that indicate purpose

### **Library Dependencies**

Libraries must follow strict dependency rules:

```typescript
// nx.json - Dependency constraints
"depConstraints": [
  {
    "sourceTag": "scope:shared",
    "onlyDependOnLibsWithTags": ["scope:shared"]
  },
  {
    "sourceTag": "scope:frontend",
    "onlyDependOnLibsWithTags": ["scope:shared", "scope:frontend"]
  },
  {
    "sourceTag": "scope:backend",
    "onlyDependOnLibsWithTags": ["scope:shared", "scope:backend"]
  }
]
```

### **Library Tagging**

Each library must have proper tags in `project.json`:

```json
{
  "name": "my-lib",
  "tags": ["scope:shared", "type:lib"]
}
```

---

## 🔄 Development Workflows

### **Starting Development**

```bash
# Clone the repository
git clone <repo-url>
cd portugueseforum

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Start development servers
pnpm dev:all
```

### **Working with Libraries**

```bash
# Test a specific library
nx test data

# Lint a library
nx lint ui

# Build library (if buildable)
nx build my-lib

# Run affected tests
nx affected:test
```

### **Adding New Features**

1. **Create or update schemas** in `libs/data/src/schemas/`
2. **Update models** in `libs/data/src/models/`
3. **Implement services** in `libs/data/src/services/`
4. **Add API routes** in `apps/api/src/routes/`
5. **Create UI components** in `libs/ui/src/components/`
6. **Add frontend pages** in `apps/forum/src/app/`

### **Testing Strategy**

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch

# Run specific test file
nx test data --testNamePattern="user-service"
```

---

## 📦 Dependency Management

### **Adding Dependencies**

```bash
# Add to workspace root
pnpm add package-name

# Add to specific project
pnpm add package-name --filter=api

# Add dev dependency
pnpm add -D package-name

# Add peer dependency
pnpm add package-name --save-peer
```

### **Updating Dependencies**

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update package-name

# Update Nx
nx migrate latest
```

### **Dependency Constraints**

The workspace uses strict dependency constraints:

- **Apps** can depend on any libs
- **Frontend libs** can depend on shared and frontend libs
- **Backend libs** can depend on shared and backend libs
- **Shared libs** can only depend on other shared libs

---

## 🚀 Build & Deployment

### **Building Applications**

```bash
# Build all applications
nx build

# Build specific application
nx build forum
nx build api

# Build with production optimizations
nx build forum --prod
```

### **Deployment Process**

#### **Frontend Deployment (Vercel)**
```bash
# Deploy to Vercel
vercel --prod

# Or use GitHub Actions
git push origin main
```

#### **API Deployment (Vercel)**
```bash
# Deploy API to Vercel
vercel --prod --cwd apps/api
```

### **Environment Variables**

Environment variables are managed at the root level:

```bash
# Development
.env.local (gitignored)

# Testing
.env.test (committed)

# Production
Set in Vercel dashboard
```

---

## ✅ Code Quality & Standards

### **Code Formatting**

```bash
# Format code
pnpm format

# Check formatting
pnpm format:check
```

### **Linting**

```bash
# Lint all code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Lint specific project
nx lint api
```

### **Type Checking**

```bash
# Type check all projects
pnpm type-check

# Type check specific project
nx type-check data
```

### **Pre-commit Hooks**

The workspace uses pre-commit hooks to ensure code quality:

- **Format check**: Ensures code is properly formatted
- **Lint check**: Ensures no linting errors
- **Type check**: Ensures TypeScript types are correct
- **Test check**: Ensures tests are passing

---

## 🚨 Troubleshooting

### **Common Issues**

#### **Environment Variables Not Loading**
```bash
# Check if .env.local exists
ls -la .env.local

# Verify environment loading in main.ts
# Make sure env-loader.ts is called before other imports
```

#### **Import Path Issues**
```bash
# Check tsconfig.base.json paths
# Verify library exports in index.ts files
# Ensure proper library tagging
```

#### **Dependency Constraint Violations**
```bash
# Check nx.json dependency constraints
# Verify project tags in project.json
# Use nx graph to visualize dependencies
```

#### **Build Failures**
```bash
# Clear Nx cache
nx reset

# Reinstall dependencies
rm -rf node_modules
pnpm install

# Check for circular dependencies
nx graph
```

### **Debugging Commands**

```bash
# Show workspace structure
nx graph

# Show project details
nx show project api

# Show affected projects
nx affected:graph

# Debug build issues
nx build api --verbose
```

### **Performance Optimization**

```bash
# Use Nx Cloud for distributed caching
nx connect

# Enable parallel execution
nx run-many --target=test --parallel

# Profile build performance
nx build --profile
```

---

## 📊 Monitoring & Analytics

### **Nx Cloud Integration**

The workspace is configured with Nx Cloud for:
- **Distributed caching**: Faster builds across team
- **CI/CD optimization**: Parallel task execution
- **Analytics**: Build performance insights

### **Application Monitoring**

- **Vercel Analytics**: Frontend performance monitoring
- **API Monitoring**: Response time and error tracking
- **Database Monitoring**: Query performance and connection health

---

## 🔧 Maintenance Tasks

### **Regular Maintenance**

```bash
# Update dependencies monthly
pnpm update

# Update Nx quarterly
nx migrate latest

# Clean up unused dependencies
pnpm prune

# Audit security vulnerabilities
pnpm audit
```

### **Code Quality Checks**

```bash
# Run full quality check
pnpm lint && pnpm type-check && pnpm test

# Check for outdated dependencies
pnpm outdated

# Check bundle size
nx build forum --analyze
```

---

**Maintainer:** Marcus Ive (@marci)  
**Last Updated:** July 2025  
**Version:** 1.0.0