# 🌐 @pfsa/api-client Library - Enhanced Structure

```
📁 libs/api-client/                       # @pfsa/api-client - API Communication Layer
├── 📁 src/
│   ├── 📁 clients/                       # API Client Implementations
│   │   ├── 📁 base/                      # Base Client Configuration
│   │   │   ├── 📄 base-client.ts         # Base HTTP client with interceptors
│   │   │   ├── 📄 client-config.ts       # Client configuration types
│   │   │   ├── 📄 interceptors.ts        # Request/response interceptors
│   │   │   ├── 📄 retry.ts               # Retry logic for failed requests
│   │   │   ├── 📄 cache.ts               # Response caching mechanism
│   │   │   └── 📄 index.ts               # Base client exports
│   │   │
│   │   ├── 📁 auth/                      # Authentication API Client
│   │   │   ├── 📄 auth-client.ts         # Authentication endpoints
│   │   │   ├── 📄 auth.types.ts          # Auth-specific types
│   │   │   ├── 📄 auth.schemas.ts        # Zod validation schemas
│   │   │   ├── 📄 auth.mock.ts           # Mock responses for testing
│   │   │   └── 📄 index.ts               # Auth client exports
│   │   │
│   │   ├── 📁 user/                      # User Management API Client
│   │   │   ├── 📄 user-client.ts         # User CRUD endpoints
│   │   │   ├── 📄 profile-client.ts      # User profile endpoints
│   │   │   ├── 📄 user.types.ts          # User-specific types
│   │   │   ├── 📄 user.schemas.ts        # User validation schemas
│   │   │   ├── 📄 user.mock.ts           # Mock user responses
│   │   │   └── 📄 index.ts               # User client exports
│   │   │
│   │   ├── 📁 membership/                # Membership API Client
│   │   │   ├── 📄 membership-client.ts   # Membership endpoints
│   │   │   ├── 📄 payment-client.ts      # Payment processing endpoints
│   │   │   ├── 📄 billing-client.ts      # Billing management endpoints
│   │   │   ├── 📄 membership.types.ts    # Membership-specific types
│   │   │   ├── 📄 membership.schemas.ts  # Membership validation schemas
│   │   │   ├── 📄 membership.mock.ts     # Mock membership responses
│   │   │   └── 📄 index.ts               # Membership client exports
│   │   │
│   │   ├── 📁 articles/                  # Articles API Client
│   │   │   ├── 📄 articles-client.ts     # Article CRUD endpoints
│   │   │   ├── 📄 categories-client.ts   # Article categories endpoints
│   │   │   ├── 📄 comments-client.ts     # Article comments endpoints
│   │   │   ├── 📄 articles.types.ts      # Article-specific types
│   │   │   ├── 📄 articles.schemas.ts    # Article validation schemas
│   │   │   ├── 📄 articles.mock.ts       # Mock article responses
│   │   │   └── 📄 index.ts               # Articles client exports
│   │   │
│   │   ├── 📁 media/                     # Media API Client
│   │   │   ├── 📄 media-client.ts        # Media upload/management endpoints
│   │   │   ├── 📄 gallery-client.ts      # Gallery management endpoints
│   │   │   ├── 📄 upload-client.ts       # File upload utilities
│   │   │   ├── 📄 media.types.ts         # Media-specific types
│   │   │   ├── 📄 media.schemas.ts       # Media validation schemas
│   │   │   ├── 📄 media.mock.ts          # Mock media responses
│   │   │   └── 📄 index.ts               # Media client exports
│   │   │
│   │   ├── 📁 forum/                     # Forum API Client
│   │   │   ├── 📄 forum-client.ts        # Forum posts endpoints
│   │   │   ├── 📄 topics-client.ts       # Forum topics endpoints
│   │   │   ├── 📄 moderation-client.ts   # Forum moderation endpoints
│   │   │   ├── 📄 forum.types.ts         # Forum-specific types
│   │   │   ├── 📄 forum.schemas.ts       # Forum validation schemas
│   │   │   ├── 📄 forum.mock.ts          # Mock forum responses
│   │   │   └── 📄 index.ts               # Forum client exports
│   │   │
│   │   ├── 📁 events/                    # Events API Client
│   │   │   ├── 📄 events-client.ts       # Community events endpoints
│   │   │   ├── 📄 calendar-client.ts     # Calendar integration endpoints
│   │   │   ├── 📄 rsvp-client.ts         # Event RSVP endpoints
│   │   │   ├── 📄 events.types.ts        # Event-specific types
│   │   │   ├── 📄 events.schemas.ts      # Event validation schemas
│   │   │   ├── 📄 events.mock.ts         # Mock event responses
│   │   │   └── 📄 index.ts               # Events client exports
│   │   │
│   │   ├── 📁 notifications/             # Notifications API Client
│   │   │   ├── 📄 notifications-client.ts # Notification endpoints
│   │   │   ├── 📄 push-client.ts         # Push notification endpoints
│   │   │   ├── 📄 email-client.ts        # Email notification endpoints
│   │   │   ├── 📄 notifications.types.ts # Notification-specific types
│   │   │   ├── 📄 notifications.schemas.ts # Notification validation schemas
│   │   │   ├── 📄 notifications.mock.ts  # Mock notification responses
│   │   │   └── 📄 index.ts               # Notifications client exports
│   │   │
│   │   ├── 📁 admin/                     # Admin API Client
│   │   │   ├── 📄 admin-client.ts        # Admin management endpoints
│   │   │   ├── 📄 analytics-client.ts    # Analytics endpoints
│   │   │   ├── 📄 reports-client.ts      # Reporting endpoints
│   │   │   ├── 📄 admin.types.ts         # Admin-specific types
│   │   │   ├── 📄 admin.schemas.ts       # Admin validation schemas
│   │   │   ├── 📄 admin.mock.ts          # Mock admin responses
│   │   │   └── 📄 index.ts               # Admin client exports
│   │   │
│   │   └── 📄 index.ts                   # All clients exports
│   │
│   ├── 📁 types/                         # Global API Types
│   │   ├── 📁 common/                    # Common API Types
│   │   │   ├── 📄 api.types.ts           # Base API response types
│   │   │   ├── 📄 pagination.types.ts    # Pagination types
│   │   │   ├── 📄 filter.types.ts        # Filtering types
│   │   │   ├── 📄 sort.types.ts          # Sorting types
│   │   │   ├── 📄 error.types.ts         # Error response types
│   │   │   ├── 📄 metadata.types.ts      # Response metadata types
│   │   │   └── 📄 index.ts               # Common types exports
│   │   │
│   │   ├── 📁 requests/                  # Request Types
│   │   │   ├── 📄 auth-requests.ts       # Authentication request types
│   │   │   ├── 📄 user-requests.ts       # User request types
│   │   │   ├── 📄 membership-requests.ts # Membership request types
│   │   │   ├── 📄 article-requests.ts    # Article request types
│   │   │   ├── 📄 media-requests.ts      # Media request types
│   │   │   └── 📄 index.ts               # Request types exports
│   │   │
│   │   ├── 📁 responses/                 # Response Types
│   │   │   ├── 📄 auth-responses.ts      # Authentication response types
│   │   │   ├── 📄 user-responses.ts      # User response types
│   │   │   ├── 📄 membership-responses.ts # Membership response types
│   │   │   ├── 📄 article-responses.ts   # Article response types
│   │   │   ├── 📄 media-responses.ts     # Media response types
│   │   │   └── 📄 index.ts               # Response types exports
│   │   │
│   │   └── 📄 index.ts                   # All types exports
│   │
│   ├── 📁 schemas/                       # Validation Schemas
│   │   ├── 📁 zod/                       # Zod Validation Schemas
│   │   │   ├── 📄 auth.schemas.ts        # Authentication schemas
│   │   │   ├── 📄 user.schemas.ts        # User validation schemas
│   │   │   ├── 📄 membership.schemas.ts  # Membership schemas
│   │   │   ├── 📄 article.schemas.ts     # Article schemas
│   │   │   ├── 📄 media.schemas.ts       # Media schemas
│   │   │   ├── 📄 common.schemas.ts      # Common validation schemas
│   │   │   └── 📄 index.ts               # Schema exports
│   │   │
│   │   ├── 📁 validators/                # Custom Validators
│   │   │   ├── 📄 business-rules.ts      # Business rule validators
│   │   │   ├── 📄 portuguese.validators.ts # PT-specific validators
│   │   │   ├── 📄 south-african.validators.ts # SA-specific validators
│   │   │   ├── 📄 date.validators.ts     # Date validation helpers
│   │   │   └── 📄 index.ts               # Validator exports
│   │   │
│   │   └── 📄 index.ts                   # All schemas exports
│   │
│   ├── 📁 hooks/                         # React Query Hooks
│   │   ├── 📁 auth/                      # Authentication Hooks
│   │   │   ├── 📄 use-login.ts           # Login mutation hook
│   │   │   ├── 📄 use-register.ts        # Registration mutation hook
│   │   │   ├── 📄 use-logout.ts          # Logout mutation hook
│   │   │   ├── 📄 use-refresh-token.ts   # Token refresh hook
│   │   │   ├── 📄 use-current-user.ts    # Current user query hook
│   │   │   ├── 📄 use-auth-status.ts     # Auth status hook
│   │   │   └── 📄 index.ts               # Auth hooks exports
│   │   │
│   │   ├── 📁 user/                      # User Management Hooks
│   │   │   ├── 📄 use-users.ts           # Users list query hook
│   │   │   ├── 📄 use-user.ts            # Single user query hook
│   │   │   ├── 📄 use-create-user.ts     # Create user mutation
│   │   │   ├── 📄 use-update-user.ts     # Update user mutation
│   │   │   ├── 📄 use-delete-user.ts     # Delete user mutation
│   │   │   ├── 📄 use-user-profile.ts    # User profile hooks
│   │   │   └── 📄 index.ts               # User hooks exports
│   │   │
│   │   ├── 📁 membership/                # Membership Hooks
│   │   │   ├── 📄 use-memberships.ts     # Memberships query hook
│   │   │   ├── 📄 use-membership.ts      # Single membership hook
│   │   │   ├── 📄 use-create-membership.ts # Create membership mutation
│   │   │   ├── 📄 use-payment.ts         # Payment processing hooks
│   │   │   ├── 📄 use-billing.ts         # Billing management hooks
│   │   │   └── 📄 index.ts               # Membership hooks exports
│   │   │
│   │   ├── 📁 articles/                  # Articles Hooks
│   │   │   ├── 📄 use-articles.ts        # Articles list query hook
│   │   │   ├── 📄 use-article.ts         # Single article query hook
│   │   │   ├── 📄 use-create-article.ts  # Create article mutation
│   │   │   ├── 📄 use-update-article.ts  # Update article mutation
│   │   │   ├── 📄 use-delete-article.ts  # Delete article mutation
│   │   │   ├── 📄 use-article-comments.ts # Article comments hooks
│   │   │   └── 📄 index.ts               # Article hooks exports
│   │   │
│   │   ├── 📁 media/                     # Media Hooks
│   │   │   ├── 📄 use-media.ts           # Media query hooks
│   │   │   ├── 📄 use-upload-media.ts    # Media upload mutation
│   │   │   ├── 📄 use-delete-media.ts    # Media deletion mutation
│   │   │   ├── 📄 use-gallery.ts         # Gallery management hooks
│   │   │   └── 📄 index.ts               # Media hooks exports
│   │   │
│   │   ├── 📁 forum/                     # Forum Hooks
│   │   │   ├── 📄 use-forum-posts.ts     # Forum posts query hooks
│   │   │   ├── 📄 use-forum-topics.ts    # Forum topics hooks
│   │   │   ├── 📄 use-create-post.ts     # Create forum post mutation
│   │   │   ├── 📄 use-moderation.ts      # Forum moderation hooks
│   │   │   └── 📄 index.ts               # Forum hooks exports
│   │   │
│   │   ├── 📁 events/                    # Events Hooks
│   │   │   ├── 📄 use-events.ts          # Events query hooks
│   │   │   ├── 📄 use-create-event.ts    # Create event mutation
│   │   │   ├── 📄 use-rsvp.ts            # RSVP management hooks
│   │   │   ├── 📄 use-calendar.ts        # Calendar integration hooks
│   │   │   └── 📄 index.ts               # Events hooks exports
│   │   │
│   │   ├── 📁 notifications/             # Notification Hooks
│   │   │   ├── 📄 use-notifications.ts   # Notifications query hooks
│   │   │   ├── 📄 use-mark-read.ts       # Mark notification as read
│   │   │   ├── 📄 use-push-subscription.ts # Push notification setup
│   │   │   └── 📄 index.ts               # Notification hooks exports
│   │   │
│   │   ├── 📁 admin/                     # Admin Hooks
│   │   │   ├── 📄 use-admin-dashboard.ts # Admin dashboard data
│   │   │   ├── 📄 use-analytics.ts       # Analytics data hooks
│   │   │   ├── 📄 use-reports.ts         # Reports generation hooks
│   │   │   └── 📄 index.ts               # Admin hooks exports
│   │   │
│   │   └── 📄 index.ts                   # All hooks exports
│   │
│   ├── 📁 providers/                     # API Providers & Context
│   │   ├── 📄 api-provider.tsx           # Main API provider component
│   │   ├── 📄 query-provider.tsx         # React Query provider
│   │   ├── 📄 auth-provider.tsx          # Authentication provider
│   │   ├── 📄 error-provider.tsx         # Error handling provider
│   │   ├── 📄 offline-provider.tsx       # Offline detection provider
│   │   └── 📄 index.ts                   # Providers exports
│   │
│   ├── 📁 utils/                         # API Utilities
│   │   ├── 📄 api-helpers.ts             # Common API helper functions
│   │   ├── 📄 url-builder.ts             # URL construction utilities
│   │   ├── 📄 query-keys.ts              # React Query key management
│   │   ├── 📄 cache-utils.ts             # Cache management utilities
│   │   ├── 📄 error-handler.ts           # Centralized error handling
│   │   ├── 📄 retry-policy.ts            # Retry logic configuration
│   │   ├── 📄 transform.ts               # Data transformation utilities
│   │   ├── 📄 validation.ts              # Validation utilities
│   │   ├── 📄 portuguese.utils.ts        # PT-specific API utilities
│   │   ├── 📄 south-african.utils.ts     # SA-specific API utilities
│   │   └── 📄 index.ts                   # Utils exports
│   │
│   ├── 📁 interceptors/                  # HTTP Interceptors
│   │   ├── 📄 auth-interceptor.ts        # Authentication token injection
│   │   ├── 📄 error-interceptor.ts       # Error response handling
│   │   ├── 📄 logging-interceptor.ts     # Request/response logging
│   │   ├── 📄 cache-interceptor.ts       # Response caching logic
│   │   ├── 📄 retry-interceptor.ts       # Automatic retry logic
│   │   ├── 📄 transform-interceptor.ts   # Data transformation
│   │   ├── 📄 rate-limit-interceptor.ts  # Rate limiting handling
│   │   └── 📄 index.ts                   # Interceptors exports
│   │
│   ├── 📁 mock/                          # Mock Data & MSW
│   │   ├── 📁 handlers/                  # MSW Request Handlers
│   │   │   ├── 📄 auth.handlers.ts       # Auth mock handlers
│   │   │   ├── 📄 user.handlers.ts       # User mock handlers
│   │   │   ├── 📄 membership.handlers.ts # Membership mock handlers
│   │   │   ├── 📄 article.handlers.ts    # Article mock handlers
│   │   │   ├── 📄 media.handlers.ts      # Media mock handlers
│   │   │   ├── 📄 forum.handlers.ts      # Forum mock handlers
│   │   │   ├── 📄 events.handlers.ts     # Events mock handlers
│   │   │   └── 📄 index.ts               # Handlers exports
│   │   │
│   │   ├── 📁 data/                      # Mock Data Generators
│   │   │   ├── 📄 auth.data.ts           # Mock auth data
│   │   │   ├── 📄 user.data.ts           # Mock user data
│   │   │   ├── 📄 membership.data.ts     # Mock membership data
│   │   │   ├── 📄 article.data.ts        # Mock article data
│   │   │   ├── 📄 media.data.ts          # Mock media data
│   │   │   ├── 📄 forum.data.ts          # Mock forum data
│   │   │   ├── 📄 events.data.ts         # Mock events data
│   │   │   ├── 📄 portuguese.data.ts     # PT-specific mock data
│   │   │   └── 📄 index.ts               # Mock data exports
│   │   │
│   │   ├── 📄 msw-setup.ts               # MSW configuration
│   │   ├── 📄 mock-server.ts             # Mock server setup
│   │   └── 📄 index.ts                   # Mock exports
│   │
│   ├── 📁 constants/                     # API Constants
│   │   ├── 📄 endpoints.ts               # API endpoint constants
│   │   ├── 📄 headers.ts                 # HTTP headers constants
│   │   ├── 📄 status-codes.ts            # HTTP status codes
│   │   ├── 📄 query-keys.ts              # React Query key constants
│   │   ├── 📄 cache-keys.ts              # Cache key constants
│   │   ├── 📄 timeouts.ts                # Timeout configurations
│   │   ├── 📄 retry.ts                   # Retry configuration constants
│   │   └── 📄 index.ts                   # Constants exports
│   │
│   ├── 📁 errors/                        # Error Classes & Handling
│   │   ├── 📄 api-error.ts               # Base API error class
│   │   ├── 📄 auth-error.ts              # Authentication error class
│   │   ├── 📄 validation-error.ts        # Validation error class
│   │   ├── 📄 network-error.ts           # Network error class
│   │   ├── 📄 business-error.ts          # Business logic error class
│   │   ├── 📄 rate-limit-error.ts        # Rate limiting error class
│   │   ├── 📄 error-factory.ts           # Error creation factory
│   │   └── 📄 index.ts                   # Error exports
│   │
│   ├── 📁 config/                        # Configuration
│   │   ├── 📄 api-config.ts              # API configuration settings
│   │   ├── 📄 environment.ts             # Environment-specific config
│   │   ├── 📄 client-config.ts           # HTTP client configuration
│   │   ├── 📄 cache-config.ts            # Cache configuration
│   │   ├── 📄 retry-config.ts            # Retry policy configuration
│   │   ├── 📄 timeout-config.ts          # Timeout configurations
│   │   └── 📄 index.ts                   # Config exports
│   │
│   ├── 📁 tests/                         # API Client Tests
│   │   ├── 📁 clients/                   # Client unit tests
│   │   │   ├── 📄 auth-client.test.ts    # Auth client tests
│   │   │   ├── 📄 user-client.test.ts    # User client tests
│   │   │   ├── 📄 membership-client.test.ts # Membership client tests
│   │   │   └── 📄 base-client.test.ts    # Base client tests
│   │   ├── 📁 hooks/                     # Hook tests
│   │   │   ├── 📄 use-auth.test.ts       # Auth hooks tests
│   │   │   ├── 📄 use-user.test.ts       # User hooks tests
│   │   │   └── 📄 use-membership.test.ts # Membership hooks tests
│   │   ├── 📁 utils/                     # Utility tests
│   │   │   ├── 📄 api-helpers.test.ts    # API helpers tests
│   │   │   ├── 📄 validation.test.ts     # Validation tests
│   │   │   └── 📄 transform.test.ts      # Transform tests
│   │   ├── 📁 interceptors/              # Interceptor tests
│   │   │   ├── 📄 auth-interceptor.test.ts # Auth interceptor tests
│   │   │   └── 📄 error-interceptor.test.ts # Error interceptor tests
│   │   ├── 📄 setup.ts                   # Test setup configuration
│   │   └── 📄 test-utils.ts              # Testing utilities
│   │
│   └── 📄 index.ts                       # Main API client export
│
├── 📄 project.json                       # Nx project config
├── 📄 package.json                       # Package config
├── 📄 tsconfig.json                      # TypeScript config
├── 📄 tsconfig.lib.json                 # Library TypeScript config
├── 📄 tsconfig.spec.json                # Test TypeScript config
├── 📄 vite.config.ts                    # Vite config
├── 📄 vitest.config.ts                  # Vitest config
└── 📄 README.md                         # API client documentation
```