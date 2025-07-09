# 📊 Portuguese Forum Monorepo - Architecture Diagram

> **Visual representation of the monorepo architecture, dependencies, and data flow**  
> _Last updated: July 2025_

---

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                        🌐 PORTUGUESE FORUM MONOREPO ARCHITECTURE 🌐                            │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    📱 FRONTEND LAYER 📱                                        │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐       │
│  │📱Admin Panel📱 │    │🏠Public Site🏠 │    │🔐Auth Pages🔐  │    │📝Articles📝    │       │
│  ├─────────────────┤    ├─────────────────┤    ├─────────────────┤    ├─────────────────┤       │
│  │  User Mgmt      │    │  Homepage       │    │  Login/Register │    │  Blog Posts     │       │
│  │  Content Mgmt   │    │  Navigation     │    │  Profile        │    │  Comments       │       │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘       │
│                                    apps/forum (Next.js 15)                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
                                                    │
                                                    │ HTTP/REST API
                                                    │
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    🛰️ BACKEND LAYER 🛰️                                         │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐       │
│  │👤User Routes👤 │    │📝Article RT📝  │    │🔐Auth Routes🔐 │    │📧Newsletter📧  │       │
│  │ CRUD Operations │    │ CRUD Operations │    │  JWT/OAuth      │    │  Email Service  │       │
│  │ Role Management │    │ Search/Filter   │    │  Permissions    │    │  Subscriptions  │       │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘       │
│                                        apps/api (Hono v4)                                       │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
                                                    │
                                                    │ MongoDB Connection
                                                    │
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    🗄️ DATA LAYER 🗄️                                            │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐       │
│  │  👤Users👤     │    │ 📝Articles📝   │    │ 🔐Sessions🔐   │    │ 📧Newsletter📧 │       │
│  │  - Profile Data │    │  - Content      │    │  - JWT Tokens   │    │  - Subscribers  │       │
│  │  - Permissions  │    │  - Metadata     │    │  - Refresh      │    │  - Templates    │       │
│  │  - Preferences  │    │  - Comments     │    │  - Permissions  │    │  - Campaigns    │       │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘       │
│                                      MongoDB Database                                           │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## 🧩 Library Dependencies & Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  📚 SHARED LIBRARIES 📚                                        │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   @pfsa/data    │    │    @pfsa/ui     │    │   @pfsa/auth    │    │ @pfsa/api-client│
│                 │    │                 │    │                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ Models      │ │    │ │ Components  │ │    │ │ JWT Utils   │ │    │ │ HTTP Client │ │
│ │ Services    │ │    │ │ Hooks       │ │    │ │ OAuth       │ │    │ │ Interceptors│ │
│ │ Schemas     │ │    │ │ Utilities   │ │    │ │ Validation  │ │    │ │ Types       │ │
│ │ DTOs        │ │    │ │ Styles      │ │    │ │ Middleware  │ │    │ │ Endpoints   │ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
│                 │    │                 │    │                 │    │                 │
│ scope:backend   │    │ scope:frontend  │    │ scope:shared    │    │ scope:frontend  │
│ type:lib        │    │ type:lib        │    │ type:lib        │    │ type:lib        │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │                       │
         └───────────────────────┼───────────────────────┼───────────────────────┘
                                 │                       │
                                 ▼                       ▼
                    ┌─────────────────┐    ┌─────────────────┐
                    │   @pfsa/i18n    │    │ @pfsa/utils/*   │
                    │                 │    │                 │
                    │ ┌─────────────┐ │    │ ┌─────────────┐ │
                    │ │ Translations│ │    │ │ Shared Utils│ │
                    │ │ Formatters  │ │    │ │ Env Config  │ │
                    │ │ Locales     │ │    │ │ Validators  │ │
                    │ │ Types       │ │    │ │ Helpers     │ │
                    │ └─────────────┘ │    │ └─────────────┘ │
                    │                 │    │                 │
                    │ scope:shared    │    │ scope:shared    │
                    │ type:lib        │    │ type:util       │
                    └─────────────────┘    └─────────────────┘
```

## 🔄 Data Flow Patterns

### 1. **User Authentication Flow**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 👤User Input👤 │──▶│ 🌐Frontend🌐    │──▶│  🛰️ API Layer   │──▶│  🗄️ Data Layer  │
│  Login Form     │    │  Auth Pages     │    │  Auth Routes    │    │  User Model     │
│  Credentials    │    │  @pfsa/ui       │    │  @pfsa/auth     │    │  @pfsa/data     │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │                       │
                                ▼                       ▼                       ▼
                    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
                    │  🔐 JWT Token   │    │  🔒 Session     │    │  💾 Database    │
                    │  @pfsa/auth     │    │  Validation     │    │  User Record    │
                    │  Client Storage │    │  Middleware     │    │  Permissions    │
                    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 2. **Content Management Flow**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│📝Admin User📝  │───▶│  🎛️ Admin Panel │───▶│  📡 API Client  │───▶│  🛰️ API Server  │
│  Create Article │    │  Article Form   │    │  HTTP Request   │    │  Article Route  │
│  @pfsa/ui       │    │  apps/forum     │    │  @pfsa/api-client│    │  apps/api       │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │                       │
                                ▼                       ▼                       ▼
                    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
                    │  ✅ Validation  │    │  🔄 Processing  │    │  💾 Storage     │
                    │  Zod Schema     │    │  Business Logic │    │  Article Model  │
                    │  @pfsa/data     │    │  Article Service│    │  @pfsa/data     │
                    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 3. **Internationalization Flow**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  🌍 User Locale │───▶│  🔄 Translation │───▶│  📝 Rendered    │───▶│  👤 User Sees   │
│  Browser/Prefs  │    │  @pfsa/i18n     │    │  Content        │    │  Localized UI   │
│  URL Parameter  │    │  Locale Files   │    │  Next.js Pages  │    │  Native Language│
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🏷️ Nx Dependency Constraints

### **Scope-Based Constraints**
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   🏷️ SCOPE CONSTRAINTS                                            │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

scope:api       ────────────────────────────────▶ scope:shared + scope:backend
scope:forum     ────────────────────────────────▶ scope:shared + scope:frontend
scope:shared    ────────────────────────────────▶ scope:shared (only)
scope:backend   ────────────────────────────────▶ scope:shared + scope:backend
scope:frontend  ────────────────────────────────▶ scope:shared + scope:frontend
```

### **Type-Based Constraints**
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   🏷️ TYPE CONSTRAINTS                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

type:app        ────────────────────────────────▶ type:lib + type:util
type:lib        ────────────────────────────────▶ type:lib + type:util
type:util       ────────────────────────────────▶ type:util (only)
```

## 🔧 Development Tools Integration

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  🔧 DEVELOPMENT ECOSYSTEM                                         │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  📦 Package     │    │  🏗️ Build       │    │  🧪 Testing     │    │  📊 Analysis    │
│  Management     │    │  System         │    │  Framework      │    │  Tools          │
│                 │    │                 │    │                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ pnpm 10     │ │    │ │ Nx 21.2     │ │    │ │ Vitest 3    │ │    │ │ ESLint 9    │ │
│ │ Workspaces  │ │    │ │ Vite 6      │ │    │ │ @testing-   │ │    │ │ Prettier 2  │ │
│ │ Hoisting    │ │    │ │ Next.js 15  │ │    │ │ library     │ │    │ │ TypeScript  │ │
│ │ Caching     │ │    │ │ TypeScript  │ │    │ │ MSW 2       │ │    │ │ Nx Graph    │ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🌊 Deployment Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  🚀 DEPLOYMENT PIPELINE                                          │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

📝 Developer Push    ────────────────────────────────▶ 🔄 GitHub Actions
       │                                                        │
       ▼                                                        ▼
🧪 Run Tests         ────────────────────────────────▶ 📊 Nx Affected
   - Unit Tests                                                 │
   - Integration                                                ▼
   - E2E Tests                                         🏗️ Build Applications
       │                                                        │
       ▼                                                        ▼
✅ Quality Checks    ────────────────────────────────▶ 🚀 Deploy to Vercel
   - ESLint                                                     │
   - Prettier                                                   ▼
   - TypeScript                                        🌐 Live Application
       │                                                        │
       ▼                                                        ▼
🔍 Security Scan     ────────────────────────────────▶ 📊 Monitoring
   - Dependencies                                               │
   - Vulnerabilities                                            ▼
   - Audit                                             📈 Analytics & Logs
```

---

**Architecture Benefits:**
- **🔒 Secure**: Proper authentication and authorization layers
- **📈 Scalable**: Independent libs can be optimized separately
- **🧪 Testable**: Each layer can be tested in isolation
- **🚀 Performant**: Nx caching and optimized builds
- **👥 Maintainable**: Clear separation of concerns and dependencies