┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                        🌐 PORTUGUESE FORUM - USER MANAGEMENT FLOW                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  👤 USER INPUT  │    │  🌐 FRONTEND    │    │  🛰️ API LAYER   │    │  🗄️ DATA LAYER  │
│   (Browser)     │    │   (Next.js)     │    │    (Hono)       │    │   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘

         │                        │                        │                        │
         │                        │                        │                        │
    ┌────▼────┐                  │                        │                        │
    │ 📊 Admin│                  │                        │                        │
    │Dashboard│                  │                        │                        │
    └────┬────┘                  │                        │                        │
         │                        │                        │                        │
         │ 1. Navigate to         │                        │                        │
         │    /admin/users        │                        │                        │
         │                        │                        │                        │
         └────────────────────────▼                        │                        │
                                 ┌─────────────────┐        │                        │
                                 │ 📄 page.tsx     │        │                        │
                                 │ (Server Side)   │        │                        │
                                 └─────────────────┘        │                        │
                                           │                │                        │
                                           │ 2. Fetch users │                        │
                                           │    via userApi  │                        │
                                           │                │                        │
                                           └────────────────▼                        │
                                                           ┌─────────────────┐        │
                                                           │ 🛰️ GET /users   │        │
                                                           │ (JWT Protected) │        │
                                                           └─────────────────┘        │
                                                                     │                │
                                                                     │ 3. Validate   │
                                                                     │    JWT token   │
                                                                     │                │
                                                                     ▼                │
                                                           ┌─────────────────┐        │
                                                           │ 🛡️ JWT          │        │
                                                           │ Middleware      │        │
                                                           └─────────────────┘        │
                                                                     │                │
                                                                     │ 4. Call        │
                                                                     │    userService │
                                                                     │                │
                                                                     └────────────────▼
                                                                                     ┌─────────────────┐
                                                                                     │ 🔧 userService  │
                                                                                     │ .getUsers()     │
                                                                                     └─────────────────┘
                                                                                               │
                                                                                               │ 5. Query DB
                                                                                               │    with filters
                                                                                               │
                                                                                               ▼
                                                                                     ┌─────────────────┐
                                                                                     │ 🗄️ UserModel    │
                                                                                     │ (MongoDB)       │
                                                                                     └─────────────────┘
                                                                                               │
                                                                                               │ 6. Return
                                                                                               │    user data
                                                                                               │
                                                                                               ▼
                                                           ┌─────────────────┐        ┌─────────────────┐
                                                           │ 📦 UserResponse │◀───────│ 🔧 Service      │
                                                           │ DTO             │        │ Response        │
                                                           └─────────────────┘        └─────────────────┘
                                                                     │
                                                                     │ 7. API Response
                                                                     │
                                                                     ▼
                                 ┌─────────────────┐        ┌─────────────────┐
                                 │ 📊 UserTable    │◀───────│ 🌐 Frontend     │
                                 │ Component       │        │ Receives Data   │
                                 └─────────────────┘        └─────────────────┘
                                           │
                                           │ 8. User interactions
                                           │    (Ban, Role change, etc.)
                                           │
                                           ▼
         ┌─────────────────┐    ┌─────────────────┐
         │ 👤 User Action  │    │ 🎯 Action       │
         │ (Click button)  │    │ Handler         │
         └─────────────────┘    └─────────────────┘
                   │                      │
                   │ 9. Ban user          │
                   │                      │
                   └──────────────────────┘
                                          │
                                          │ 10. POST /users/:id/ban
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ 🛰️ API Route    │
                                │ banUser()       │
                                └─────────────────┘
                                          │
                                          │ 11. Validate request
                                          │     & call service
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ 🔧 userService  │
                                │ .banUser()      │
                                └─────────────────┘
                                          │
                                          │ 12. Update user
                                          │     in database
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ 🗄️ UserModel    │
                                │ findByIdAndUpdate│
                                └─────────────────┘
                                          │
                                          │ 13. Return updated
                                          │     user data
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ 📦 Updated      │
                                │ UserResponse    │
                                └─────────────────┘
                                          │
                                          │ 14. Frontend updates
                                          │     user state
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ 🔄 State Update │
                                │ (React)         │
                                └─────────────────┘
                                          │
                                          │ 15. UI reflects
                                          │     changes
                                          │
                                          ▼
                                ┌─────────────────┐
                                │ ✅ User Banned  │
                                │ (Visual update) │
                                └─────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   🔧 SUPPORTING LAYERS                                            │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  🧪 TESTING     │    │  📦 VALIDATION  │    │  🎯 UTILITIES   │    │  🗂️ MOCK DATA   │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │                        │
         │                        │                        │                        │
    ┌────▼────┐              ┌────▼────┐              ┌────▼────┐              ┌────▼────┐
    │ Unit    │              │ Zod     │              │ Sort    │              │ Mock    │
    │ Tests   │              │ Schemas │              │ Utils   │              │ Users   │
    └─────────┘              └─────────┘              └─────────┘              └─────────┘
         │                        │                        │                        │
    ┌────▼────┐              ┌────▼────┐              ┌────▼────┐              ┌────▼────┐
    │ API     │              │ Request │              │ Filter  │              │ Test    │
    │ Tests   │              │ Validation│             │ Utils   │              │ Data    │
    └─────────┘              └─────────┘              └─────────┘              └─────────┘
         │                        │                        │                        │
    ┌────▼────┐              ┌────▼────┐              ┌────▼────┐              ┌────▼────┐
    │ E2E     │              │ Response│              │ Pagination│             │ Seed    │
    │ Tests   │              │ DTOs    │              │ Utils   │              │ Scripts │
    └─────────┘              └─────────┘              └─────────┘              └─────────┘

┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  🔄 DATA FLOW SUMMARY                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

Request Flow:  Browser → Next.js → API Routes → Services → MongoDB
Response Flow: MongoDB → Services → API Routes → Next.js → Browser

Key Components:
• 🛡️ JWT Middleware: Protects admin routes
• 📦 DTOs: Type-safe data transfer objects
• 🔧 Services: Business logic layer
• 🗄️ Models: Database schema definitions
• 🎯 Utilities: Sorting, filtering, validation
• 🧪 Testing: Unit, integration, E2E tests

User Actions:
• View users (paginated, filtered, sorted)
• Ban/unban users with reasons
• Change user roles (admin, moderator, user)
• Verify user emails
• Delete users
• View user statistics
• Search users by email/name
