📁 Portuguese Forum Monorepo - User Management Files
│
├── 📁 libs/data/src/
│   ├── 📁 constants/
│   │   ├── 📄 roles.ts                    # User role constants
│   │   └── 📄 index.ts                    # Constants exports
│   │
│   ├── 📁 dto/
│   │   ├── 📄 user-dto.ts                 # User DTOs (Create, Update, Response)
│   │   ├── 📄 get-user-response.ts        # User response interface
│   │   └── 📄 index.ts                    # DTO exports
│   │
│   ├── 📁 models/
│   │   ├── 📄 user.ts                     # Mongoose User model
│   │   └── 📄 index.ts                    # Model exports
│   │
│   ├── 📁 schemas/
│   │   ├── 📄 user-schema.ts              # Zod validation schemas
│   │   └── 📄 index.ts                    # Schema exports
│   │
│   ├── 📁 services/
│   │   ├── 📄 user-service.ts             # Core user service
│   │   ├── 📄 user-sort.ts                # User sorting utilities
│   │   ├── 📄 newsletter-service.ts       # Newsletter service
│   │   ├── 📄 sort-posts.ts               # Post sorting utilities
│   │   └── 📄 index.ts                    # Service exports
│   │
│   ├── 📁 mocks/
│   │   ├── 📄 mock-users.ts               # Mock user data
│   │   └── 📄 index.ts                    # Mock exports
│   │
│   ├── 📁 utils/
│   │   ├── 📁 backend/
│   │   │   └── 📄 db.ts                   # Database connection
│   │   ├── 📁 frontend/
│   │   │   └── 📄 client.ts               # Frontend utilities
│   │   └── 📄 index.ts                    # Utility exports
│   │
│   ├── 📄 index.ts                        # Main library exports
│   └── 📄 docs/
│       └── 📄 user-management-guide.md    # User management guide
│
├── 📁 apps/api/src/
│   ├── 📁 routes/
│   │   ├── 📄 users.ts                    # User management API routes
│   │   ├── 📄 auth.ts                     # Authentication routes
│   │   └── 📄 articles.ts                 # Article routes
│   │
│   ├── 📁 middleware/
│   │   └── 📄 jwt.ts                      # JWT authentication middleware
│   │
│   ├── 📁 test-utils/
│   │   ├── 📄 client.ts                   # Test client utilities
│   │   └── 📄 jwt.ts                      # JWT test utilities
│   │
│   ├── 📄 main.ts                         # Main API entry point
│   └── 📄 dev.ts                          # Development server
│
├── 📁 apps/forum/src/
│   ├── 📁 app/[locale]/admin/
│   │   ├── 📁 users/
│   │   │   └── 📄 page.tsx                # User management admin page
│   │   └── 📁 docs/guides/user-management
│   │       │── 📄 user-management.md      # User management documentation
│   │       │── 📄 user-tree.md            # User management documentation
│   │       └── 📄 user-diagram.md         # User management documentation
│   │
│   ├── 📁 components/admin/user-management/
│   │   ├── 📄 user-table.tsx              # User management table
│   │   ├── 📄 user-stats.tsx              # User statistics component
│   │   ├── 📄 user-search.tsx             # User search and filter
│   │   └── 📄 user-management.tsx         # Main user management component
│   │
│   ├── 📁 lib/api/
│   │   └── 📄 users.ts                    # User API client
│   │
│   └── 📁 hooks/
│       └── 📄 use-user-management.ts      # User management hooks
│
└── 📁 tests/
    ├── 📁 libs/data/
    │   └── 📁 services/
    │       ├── 📄 user-service.spec.ts    # User service tests
    │       └── 📄 user-sort.spec.ts       # User sorting tests
    │
    └── 📁 apps/api/
        └── 📁 routes/
            └── 📄 users.spec.ts           # User API tests
