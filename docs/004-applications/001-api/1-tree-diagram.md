# 🌐 API Application (@pfsa/api) - Enhanced Structure

```
📁 apps/api/                             # Hono API Application
├── 📁 src/
│   ├── 📁 routes/                       # API Route Handlers
│   │   ├── 📁 auth/                     # Authentication Routes
│   │   │   ├── 📄 auth.routes.ts        # Main auth routes
│   │   │   ├── 📄 login.routes.ts       # Login endpoints
│   │   │   ├── 📄 register.routes.ts    # Registration endpoints
│   │   │   ├── 📄 password.routes.ts    # Password management
│   │   │   ├── 📄 oauth.routes.ts       # OAuth provider routes
│   │   │   ├── 📄 two-factor.routes.ts  # 2FA routes
│   │   │   ├── 📄 session.routes.ts     # Session management
│   │   │   ├── 📄 refresh.routes.ts     # Token refresh
│   │   │   └── 📄 index.ts              # Auth routes exports
│   │   │
│   │   ├── 📁 users/                    # User Management Routes
│   │   │   ├── 📄 users.routes.ts       # User CRUD operations
│   │   │   ├── 📄 profile.routes.ts     # User profile management
│   │   │   ├── 📄 preferences.routes.ts # User preferences
│   │   │   ├── 📄 avatar.routes.ts      # Avatar management
│   │   │   ├── 📄 security.routes.ts    # Security settings
│   │   │   ├── 📄 privacy.routes.ts     # Privacy settings
│   │   │   └── 📄 index.ts              # User routes exports
│   │   │
│   │   ├── 📁 membership/               # Membership Management Routes
│   │   │   ├── 📄 membership.routes.ts  # Membership CRUD
│   │   │   ├── 📄 plans.routes.ts       # Membership plans
│   │   │   ├── 📄 billing.routes.ts     # Billing management
│   │   │   ├── 📄 payments.routes.ts    # Payment processing
│   │   │   ├── 📄 invoices.routes.ts    # Invoice management
│   │   │   ├── 📄 subscriptions.routes.ts # Subscription management
│   │   │   └── 📄 index.ts              # Membership routes exports
│   │   │
│   │   ├── 📁 articles/                 # Article Management Routes
│   │   │   ├── 📄 articles.routes.ts    # Article CRUD operations
│   │   │   ├── 📄 categories.routes.ts  # Article categories
│   │   │   ├── 📄 comments.routes.ts    # Article comments
│   │   │   ├── 📄 reactions.routes.ts   # Article reactions (likes, etc.)
│   │   │   ├── 📄 publishing.routes.ts  # Publishing workflow
│   │   │   ├── 📄 moderation.routes.ts  # Content moderation
│   │   │   ├── 📄 search.routes.ts      # Article search
│   │   │   └── 📄 index.ts              # Article routes exports
│   │   │
│   │   ├── 📁 forum/                    # Forum Routes
│   │   │   ├── 📄 forum.routes.ts       # Forum management
│   │   │   ├── 📄 topics.routes.ts      # Forum topics
│   │   │   ├── 📄 posts.routes.ts       # Forum posts
│   │   │   ├── 📄 replies.routes.ts     # Post replies
│   │   │   ├── 📄 moderation.routes.ts  # Forum moderation
│   │   │   ├── 📄 categories.routes.ts  # Forum categories
│   │   │   ├── 📄 voting.routes.ts      # Post voting system
│   │   │   └── 📄 index.ts              # Forum routes exports
│   │   │
│   │   ├── 📁 events/                   # Events Management Routes
│   │   │   ├── 📄 events.routes.ts      # Event CRUD operations
│   │   │   ├── 📄 calendar.routes.ts    # Calendar integration
│   │   │   ├── 📄 rsvp.routes.ts        # RSVP management
│   │   │   ├── 📄 tickets.routes.ts     # Event ticketing
│   │   │   ├── 📄 cultural.routes.ts    # Portuguese cultural events
│   │   │   ├── 📄 venues.routes.ts      # Event venues
│   │   │   └── 📄 index.ts              # Events routes exports
│   │   │
│   │   ├── 📁 media/                    # Media Management Routes
│   │   │   ├── 📄 media.routes.ts       # Media CRUD operations
│   │   │   ├── 📄 upload.routes.ts      # File upload endpoints
│   │   │   ├── 📄 gallery.routes.ts     # Gallery management
│   │   │   ├── 📄 images.routes.ts      # Image processing
│   │   │   ├── 📄 videos.routes.ts      # Video processing
│   │   │   ├── 📄 documents.routes.ts   # Document management
│   │   │   └── 📄 index.ts              # Media routes exports
│   │   │
│   │   ├── 📁 notifications/            # Notification Routes
│   │   │   ├── 📄 notifications.routes.ts # Notification management
│   │   │   ├── 📄 push.routes.ts        # Push notifications
│   │   │   ├── 📄 email.routes.ts       # Email notifications
│   │   │   ├── 📄 sms.routes.ts         # SMS notifications
│   │   │   ├── 📄 preferences.routes.ts # Notification preferences
│   │   │   └── 📄 index.ts              # Notification routes exports
│   │   │
│   │   ├── 📁 admin/                    # Admin Routes
│   │   │   ├── 📄 admin.routes.ts       # Admin panel routes
│   │   │   ├── 📄 dashboard.routes.ts   # Admin dashboard
│   │   │   ├── 📄 analytics.routes.ts   # Analytics endpoints
│   │   │   ├── 📄 reports.routes.ts     # Report generation
│   │   │   ├── 📄 moderation.routes.ts  # Content moderation
│   │   │   ├── 📄 users.routes.ts       # User management
│   │   │   ├── 📄 system.routes.ts      # System management
│   │   │   └── 📄 index.ts              # Admin routes exports
│   │   │
│   │   ├── 📁 cultural/                 # Portuguese Cultural Routes
│   │   │   ├── 📄 heritage.routes.ts    # Cultural heritage endpoints
│   │   │   ├── 📄 traditions.routes.ts  # Portuguese traditions
│   │   │   ├── 📄 holidays.routes.ts    # Portuguese holidays
│   │   │   ├── 📄 cuisine.routes.ts     # Portuguese cuisine
│   │   │   ├── 📄 music.routes.ts       # Portuguese music/fado
│   │   │   ├── 📄 diaspora.routes.ts    # Diaspora information
│   │   │   └── 📄 index.ts              # Cultural routes exports
│   │   │
│   │   ├── 📁 integration/              # External Integration Routes
│   │   │   ├── 📄 payment.routes.ts     # Payment gateway integration
│   │   │   ├── 📄 social.routes.ts      # Social media integration
│   │   │   ├── 📄 email.routes.ts       # Email service integration
│   │   │   ├── 📄 storage.routes.ts     # Cloud storage integration
│   │   │   ├── 📄 analytics.routes.ts   # Analytics integration
│   │   │   └── 📄 index.ts              # Integration routes exports
│   │   │
│   │   └── 📄 index.ts                  # All routes exports
│   │
│   ├── 📁 middleware/                   # API Middleware
│   │   ├── 📁 auth/                     # Authentication Middleware
│   │   │   ├── 📄 auth.middleware.ts    # Authentication middleware
│   │   │   ├── 📄 jwt.middleware.ts     # JWT token middleware
│   │   │   ├── 📄 permission.middleware.ts # Permission middleware
│   │   │   ├── 📄 role.middleware.ts    # Role-based middleware
│   │   │   ├── 📄 rate-limit.middleware.ts # Rate limiting
│   │   │   └── 📄 index.ts              # Auth middleware exports
│   │   │
│   │   ├── 📁 validation/               # Validation Middleware
│   │   │   ├── 📄 validation.middleware.ts # Request validation
│   │   │   ├── 📄 zod.middleware.ts     # Zod schema validation
│   │   │   ├── 📄 sanitization.middleware.ts # Input sanitization
│   │   │   ├── 📄 file.middleware.ts    # File validation
│   │   │   └── 📄 index.ts              # Validation middleware exports
│   │   │
│   │   ├── 📁 security/                 # Security Middleware
│   │   │   ├── 📄 cors.middleware.ts    # CORS middleware
│   │   │   ├── 📄 helmet.middleware.ts  # Security headers
│   │   │   ├── 📄 csrf.middleware.ts    # CSRF protection
│   │   │   ├── 📄 xss.middleware.ts     # XSS protection
│   │   │   ├── 📄 ddos.middleware.ts    # DDoS protection
│   │   │   └── 📄 index.ts              # Security middleware exports
│   │   │
│   │   ├── 📁 logging/                  # Logging Middleware
│   │   │   ├── 📄 logger.middleware.ts  # Request/response logging
│   │   │   ├── 📄 audit.middleware.ts   # Audit logging
│   │   │   ├── 📄 error.middleware.ts   # Error logging
│   │   │   ├── 📄 performance.middleware.ts # Performance logging
│   │   │   └── 📄 index.ts              # Logging middleware exports
│   │   │
│   │   ├── 📁 caching/                  # Caching Middleware
│   │   │   ├── 📄 cache.middleware.ts   # Response caching
│   │   │   ├── 📄 etag.middleware.ts    # ETag handling
│   │   │   ├── 📄 compression.middleware.ts # Response compression
│   │   │   └── 📄 index.ts              # Caching middleware exports
│   │   │
│   │   └── 📄 index.ts                  # All middleware exports
│   │
│   ├── 📁 services/                     # Business Logic Services
│   │   ├── 📁 auth/                     # Authentication Services
│   │   │   ├── 📄 auth.service.ts       # Authentication service
│   │   │   ├── 📄 jwt.service.ts        # JWT token service
│   │   │   ├── 📄 oauth.service.ts      # OAuth service
│   │   │   ├── 📄 two-factor.service.ts # 2FA service
│   │   │   ├── 📄 session.service.ts    # Session management
│   │   │   └── 📄 index.ts              # Auth services exports
│   │   │
│   │   ├── 📁 user/                     # User Services
│   │   │   ├── 📄 user.service.ts       # User management service
│   │   │   ├── 📄 profile.service.ts    # Profile service
│   │   │   ├── 📄 avatar.service.ts     # Avatar service
│   │   │   ├── 📄 preferences.service.ts # Preferences service
│   │   │   └── 📄 index.ts              # User services exports
│   │   │
│   │   ├── 📁 membership/               # Membership Services
│   │   │   ├── 📄 membership.service.ts # Membership service
│   │   │   ├── 📄 billing.service.ts    # Billing service
│   │   │   ├── 📄 payment.service.ts    # Payment service
│   │   │   ├── 📄 subscription.service.ts # Subscription service
│   │   │   └── 📄 index.ts              # Membership services exports
│   │   │
│   │   ├── 📁 content/                  # Content Services
│   │   │   ├── 📄 article.service.ts    # Article service
│   │   │   ├── 📄 forum.service.ts      # Forum service
│   │   │   ├── 📄 comment.service.ts    # Comment service
│   │   │   ├── 📄 moderation.service.ts # Moderation service
│   │   │   ├── 📄 search.service.ts     # Search service
│   │   │   └── 📄 index.ts              # Content services exports
│   │   │
│   │   ├── 📁 media/                    # Media Services
│   │   │   ├── 📄 media.service.ts      # Media management service
│   │   │   ├── 📄 upload.service.ts     # File upload service
│   │   │   ├── 📄 image.service.ts      # Image processing service
│   │   │   ├── 📄 video.service.ts      # Video processing service
│   │   │   └── 📄 index.ts              # Media services exports
│   │   │
│   │   ├── 📁 notification/             # Notification Services
│   │   │   ├── 📄 notification.service.ts # Notification service
│   │   │   ├── 📄 email.service.ts      # Email service
│   │   │   ├── 📄 push.service.ts       # Push notification service
│   │   │   ├── 📄 sms.service.ts        # SMS service
│   │   │   └── 📄 index.ts              # Notification services exports
│   │   │
│   │   ├── 📁 integration/              # External Integration Services
│   │   │   ├── 📄 payment-gateway.service.ts # Payment gateway service
│   │   │   ├── 📄 email-provider.service.ts # Email provider service
│   │   │   ├── 📄 storage.service.ts    # Cloud storage service
│   │   │   ├── 📄 analytics.service.ts  # Analytics service
│   │   │   └── 📄 index.ts              # Integration services exports
│   │   │
│   │   └── 📄 index.ts                  # All services exports
│   │
│   ├── 📁 controllers/                  # Route Controllers
│   │   ├── 📁 auth/                     # Authentication Controllers
│   │   │   ├── 📄 auth.controller.ts    # Authentication controller
│   │   │   ├── 📄 login.controller.ts   # Login controller
│   │   │   ├── 📄 register.controller.ts # Registration controller
│   │   │   ├── 📄 oauth.controller.ts   # OAuth controller
│   │   │   └── 📄 index.ts              # Auth controllers exports
│   │   │
│   │   ├── 📁 user/                     # User Controllers
│   │   │   ├── 📄 user.controller.ts    # User controller
│   │   │   ├── 📄 profile.controller.ts # Profile controller
│   │   │   └── 📄 index.ts              # User controllers exports
│   │   │
│   │   ├── 📁 membership/               # Membership Controllers
│   │   │   ├── 📄 membership.controller.ts # Membership controller
│   │   │   ├── 📄 billing.controller.ts # Billing controller
│   │   │   └── 📄 index.ts              # Membership controllers exports
│   │   │
│   │   ├── 📁 content/                  # Content Controllers
│   │   │   ├── 📄 article.controller.ts # Article controller
│   │   │   ├── 📄 forum.controller.ts   # Forum controller
│   │   │   └── 📄 index.ts              # Content controllers exports
│   │   │
│   │   └── 📄 index.ts                  # All controllers exports
│   │
│   ├── 📁 validators/                   # Request Validators
│   │   ├── 📁 auth/                     # Authentication Validators
│   │   │   ├── 📄 login.validator.ts    # Login validation
│   │   │   ├── 📄 register.validator.ts # Registration validation
│   │   │   ├── 📄 password.validator.ts # Password validation
│   │   │   └── 📄 index.ts              # Auth validators exports
│   │   │
│   │   ├── 📁 user/                     # User Validators
│   │   │   ├── 📄 user.validator.ts     # User validation
│   │   │   ├── 📄 profile.validator.ts  # Profile validation
│   │   │   └── 📄 index.ts              # User validators exports
│   │   │
│   │   ├── 📁 content/                  # Content Validators
│   │   │   ├── 📄 article.validator.ts  # Article validation
│   │   │   ├── 📄 forum.validator.ts    # Forum validation
│   │   │   └── 📄 index.ts              # Content validators exports
│   │   │
│   │   ├── 📁 cultural/                 # Portuguese-Specific Validators
│   │   │   ├── 📄 portuguese-address.validator.ts # PT address validation
│   │   │   ├── 📄 portuguese-phone.validator.ts # PT phone validation
│   │   │   ├── 📄 south-african-address.validator.ts # SA address validation
│   │   │   ├── 📄 postal-code.validator.ts # Postal code validation
│   │   │   └── 📄 index.ts              # Cultural validators exports
│   │   │
│   │   └── 📄 index.ts                  # All validators exports
│   │
│   ├── 📁 types/                        # API Types
│   │   ├── 📁 common/                   # Common API Types
│   │   │   ├── 📄 api.types.ts          # Base API types
│   │   │   ├── 📄 response.types.ts     # Response types
│   │   │   ├── 📄 pagination.types.ts   # Pagination types
│   │   │   ├── 📄 error.types.ts        # Error types
│   │   │   └── 📄 index.ts              # Common types exports
│   │   │
│   │   ├── 📁 entities/                 # Entity Types
│   │   │   ├── 📄 user.types.ts         # User entity types
│   │   │   ├── 📄 article.types.ts      # Article entity types
│   │   │   ├── 📄 membership.types.ts   # Membership entity types
│   │   │   ├── 📄 forum.types.ts        # Forum entity types
│   │   │   └── 📄 index.ts              # Entity types exports
│   │   │
│   │   ├── 📁 requests/                 # Request Types
│   │   │   ├── 📄 auth.requests.ts      # Auth request types
│   │   │   ├── 📄 user.requests.ts      # User request types
│   │   │   └── 📄 index.ts              # Request types exports
│   │   │
│   │   └── 📄 index.ts                  # All types exports
│   │
│   ├── 📁 config/                       # Configuration
│   │   ├── 📄 app.config.ts             # Main app configuration
│   │   ├── 📄 database.config.ts        # Database configuration
│   │   ├── 📄 auth.config.ts            # Authentication configuration
│   │   ├── 📄 redis.config.ts           # Redis configuration
│   │   ├── 📄 storage.config.ts         # Storage configuration
│   │   ├── 📄 email.config.ts           # Email configuration
│   │   ├── 📄 payment.config.ts         # Payment configuration
│   │   ├── 📄 environment.config.ts     # Environment configuration
│   │   └── 📄 index.ts                  # Config exports
│   │
│   ├── 📁 utils/                        # Utility Functions
│   │   ├── 📄 response.utils.ts         # Response utilities
│   │   ├── 📄 validation.utils.ts       # Validation utilities
│   │   ├── 📄 crypto.utils.ts           # Cryptography utilities
│   │   ├── 📄 date.utils.ts             # Date utilities
│   │   ├── 📄 string.utils.ts           # String utilities
│   │   ├── 📄 file.utils.ts             # File utilities
│   │   ├── 📄 portuguese.utils.ts       # Portuguese-specific utilities
│   │   ├── 📄 south-african.utils.ts    # South African utilities
│   │   └── 📄 index.ts                  # Utils exports
│   │
│   ├── 📁 database/                     # Database Layer
│   │   ├── 📁 models/                   # Database Models
│   │   │   ├── 📄 user.model.ts         # User model
│   │   │   ├── 📄 article.model.ts      # Article model
│   │   │   ├── 📄 membership.model.ts   # Membership model
│   │   │   ├── 📄 forum.model.ts        # Forum model
│   │   │   ├── 📄 event.model.ts        # Event model
│   │   │   └── 📄 index.ts              # Models exports
│   │   │
│   │   ├── 📁 repositories/             # Repository Pattern
│   │   │   ├── 📄 base.repository.ts    # Base repository
│   │   │   ├── 📄 user.repository.ts    # User repository
│   │   │   ├── 📄 article.repository.ts # Article repository
│   │   │   ├── 📄 membership.repository.ts # Membership repository
│   │   │   └── 📄 index.ts              # Repositories exports
│   │   │
│   │   ├── 📁 migrations/               # Database Migrations
│   │   │   ├── 📄 001_initial.ts        # Initial migration
│   │   │   ├── 📄 002_users.ts          # Users table migration
│   │   │   ├── 📄 003_articles.ts       # Articles table migration
│   │   │   └── 📄 index.ts              # Migrations exports
│   │   │
│   │   ├── 📁 seeds/                    # Database Seeds
│   │   │   ├── 📄 users.seed.ts         # User seed data
│   │   │   ├── 📄 articles.seed.ts      # Article seed data
│   │   │   ├── 📄 portuguese.seed.ts    # Portuguese cultural seed data
│   │   │   └── 📄 index.ts              # Seeds exports
│   │   │
│   │   └── 📄 index.ts                  # Database exports
│   │
│   ├── 📁 errors/                       # Error Handling
│   │   ├── 📄 api-error.ts              # Base API error class
│   │   ├── 📄 validation-error.ts       # Validation error class
│   │   ├── 📄 auth-error.ts             # Authentication error class
│   │   ├── 📄 permission-error.ts       # Permission error class
│   │   ├── 📄 rate-limit-error.ts       # Rate limit error class
│   │   ├── 📄 error-handler.ts          # Global error handler
│   │   └── 📄 index.ts                  # Errors exports
│   │
│   ├── 📁 constants/                    # API Constants
│   │   ├── 📄 http-status.ts            # HTTP status codes
│   │   ├── 📄 error-codes.ts            # Custom error codes
│   │   ├── 📄 permissions.ts            # Permission constants
│   │   ├── 📄 roles.ts                  # Role constants
│   │   ├── 📄 membership.ts             # Membership constants
│   │   └── 📄 index.ts                  # Constants exports
│   │
│   ├── 📁 jobs/                         # Background Jobs
│   │   ├── 📄 email.job.ts              # Email job processor
│   │   ├── 📄 notification.job.ts       # Notification job processor
│   │   ├── 📄 cleanup.job.ts            # Cleanup job processor
│   │   ├── 📄 analytics.job.ts          # Analytics job processor
│   │   ├── 📄 backup.job.ts             # Backup job processor
│   │   └── 📄 index.ts                  # Jobs exports
│   │
│   ├── 📁 tests/                        # API Tests
│   │   ├── 📁 routes/                   # Route tests
│   │   │   ├── 📄 auth.test.ts          # Auth routes tests
│   │   │   ├── 📄 users.test.ts         # User routes tests
│   │   │   ├── 📄 articles.test.ts      # Article routes tests
│   │   │   └── 📄 forum.test.ts         # Forum routes tests
│   │   ├── 📁 services/                 # Service tests
│   │   │   ├── 📄 auth.service.test.ts  # Auth service tests
│   │   │   ├── 📄 user.service.test.ts  # User service tests
│   │   │   └── 📄 content.service.test.ts # Content service tests
│   │   ├── 📁 middleware/               # Middleware tests
│   │   │   ├── 📄 auth.middleware.test.ts # Auth middleware tests
│   │   │   └── 📄 validation.middleware.test.ts # Validation tests
│   │   ├── 📁 integration/              # Integration tests
│   │   │   ├── 📄 auth-flow.test.ts     # Auth flow integration tests
│   │   │   ├── 📄 user-management.test.ts # User management tests
│   │   │   └── 📄 content-creation.test.ts # Content creation tests
│   │   ├── 📄 setup.ts                  # Test setup
│   │   └── 📄 test-utils.ts             # Testing utilities
│   │
│   └── 📄 main.ts                       # Application entry point
│
├── 📄 project.json                      # Nx project config
├── 📄 package.json                      # Package config
├── 📄 tsconfig.json                     # TypeScript config
├── 📄 tsconfig.app.json                 # App TypeScript config
├── 📄 tsconfig.spec.json                # Test TypeScript config
├── 📄 Dockerfile                        # Docker configuration
├── 📄 .env.example                      # Environment variables example
└── 📄 README.md                         # API documentation
```