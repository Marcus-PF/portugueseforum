# 🏗️ @pfsa/core Library - Complete Scaffold

```
📁 libs/core/                              # @pfsa/core - Foundation Library
├── 📁 src/
│   ├── 📁 env/                            # Environment Management
│   │   ├── 📄 env.ts                      # Environment validation & types
│   │   ├── 📄 env-loader.ts               # Environment loading utilities
│   │   ├── 📄 env-validator.ts            # Zod schemas for env validation
│   │   ├── 📄 constants.ts                # Environment constants
│   │   └── 📄 index.ts                    # Environment exports
│   │
│   ├── 📁 logger/                         # Logging System
│   │   ├── 📄 logger.ts                   # Main logger implementation
│   │   ├── 📄 log-levels.ts               # Log level definitions
│   │   ├── 📄 formatters.ts               # Log formatters (JSON, pretty, etc)
│   │   ├── 📄 transports.ts               # Log transports (console, file, etc)
│   │   ├── 📄 middleware.ts               # Express/Hono logging middleware
│   │   └── 📄 index.ts                    # Logger exports
│   │
│   ├── 📁 utils/                          # Core Utilities
│   │   ├── 📁 crypto/                     # Cryptography utilities
│   │   │   ├── 📄 hash.ts                 # Hashing functions (bcrypt, etc)
│   │   │   ├── 📄 jwt.ts                  # JWT utilities
│   │   │   ├── 📄 encryption.ts           # Encryption/decryption
│   │   │   ├── 📄 random.ts               # Random generation
│   │   │   └── 📄 index.ts                # Crypto exports
│   │   ├── 📁 format/                     # Formatting utilities
│   │   │   ├── 📄 date.ts                 # Date formatting
│   │   │   ├── 📄 string.ts               # String formatting
│   │   │   ├── 📄 number.ts               # Number formatting
│   │   │   ├── 📄 currency.ts             # Currency formatting (ZAR, EUR)
│   │   │   ├── 📄 phone.ts                # Phone number formatting (SA/PT)
│   │   │   └── 📄 index.ts                # Format exports
│   │   ├── 📁 validation/                 # Validation utilities
│   │   │   ├── 📄 schemas.ts              # Common Zod schemas
│   │   │   ├── 📄 email.ts                # Email validation
│   │   │   ├── 📄 password.ts             # Password validation
│   │   │   ├── 📄 phone.ts                # Phone validation
│   │   │   ├── 📄 id-number.ts            # SA ID number validation
│   │   │   └── 📄 index.ts                # Validation exports
│   │   ├── 📁 async/                      # Async utilities
│   │   │   ├── 📄 retry.ts                # Retry mechanisms
│   │   │   ├── 📄 timeout.ts              # Timeout utilities
│   │   │   ├── 📄 debounce.ts             # Debounce functions
│   │   │   ├── 📄 throttle.ts             # Throttle functions
│   │   │   ├── 📄 queue.ts                # Queue management
│   │   │   └── 📄 index.ts                # Async exports
│   │   ├── 📁 array/                      # Array utilities
│   │   │   ├── 📄 chunk.ts                # Array chunking
│   │   │   ├── 📄 unique.ts               # Unique elements
│   │   │   ├── 📄 sort.ts                 # Sorting utilities
│   │   │   ├── 📄 filter.ts               # Filtering utilities
│   │   │   ├── 📄 pagination.ts           # Pagination helpers
│   │   │   └── 📄 index.ts                # Array exports
│   │   ├── 📁 object/                     # Object utilities
│   │   │   ├── 📄 merge.ts                # Object merging
│   │   │   ├── 📄 pick.ts                 # Object picking
│   │   │   ├── 📄 omit.ts                 # Object omitting
│   │   │   ├── 📄 transform.ts            # Object transformation
│   │   │   ├── 📄 deep-clone.ts           # Deep cloning
│   │   │   └── 📄 index.ts                # Object exports
│   │   ├── 📄 cn.ts                       # Class name utility (clsx)
│   │   ├── 📄 sleep.ts                    # Sleep utility
│   │   ├── 📄 generate-id.ts              # ID generation (nanoid, uuid)
│   │   └── 📄 index.ts                    # Utils main export
│   │
│   ├── 📁 errors/                         # Error Handling
│   │   ├── 📄 base-error.ts               # Base error class
│   │   ├── 📄 app-error.ts                # Application errors
│   │   ├── 📄 validation-error.ts         # Validation errors
│   │   ├── 📄 auth-error.ts               # Authentication errors
│   │   ├── 📄 permission-error.ts         # Permission errors
│   │   ├── 📄 not-found-error.ts          # Not found errors
│   │   ├── 📄 conflict-error.ts           # Conflict errors
│   │   ├── 📄 rate-limit-error.ts         # Rate limiting errors
│   │   ├── 📄 error-handler.ts            # Global error handler
│   │   ├── 📄 error-codes.ts              # Error code constants
│   │   └── 📄 index.ts                    # Error exports
│   │
│   ├── 📁 types/                          # Core Type Definitions
│   │   ├── 📄 common.ts                   # Common types
│   │   ├── 📄 api.ts                      # API response types
│   │   ├── 📄 pagination.ts               # Pagination types
│   │   ├── 📄 filter.ts                   # Filter types
│   │   ├── 📄 sort.ts                     # Sort types
│   │   ├── 📄 env.ts                      # Environment types
│   │   ├── 📄 auth.ts                     # Authentication types
│   │   ├── 📄 user.ts                     # User-related types
│   │   ├── 📄 membership.ts               # Membership types
│   │   ├── 📄 events.ts                   # Event types
│   │   └── 📄 index.ts                    # Types exports
│   │
│   ├── 📁 constants/                      # Application Constants
│   │   ├── 📄 app.ts                      # App constants
│   │   ├── 📄 api.ts                      # API constants
│   │   ├── 📄 auth.ts                     # Auth constants
│   │   ├── 📄 pagination.ts               # Pagination constants
│   │   ├── 📄 validation.ts               # Validation constants
│   │   ├── 📄 membership.ts               # Membership constants
│   │   ├── 📄 locale.ts                   # Locale constants
│   │   ├── 📄 regex.ts                    # Regex patterns
│   │   └── 📄 index.ts                    # Constants exports
│   │
│   ├── 📁 config/                         # Configuration Management
│   │   ├── 📄 database.ts                 # Database configuration
│   │   ├── 📄 redis.ts                    # Redis configuration
│   │   ├── 📄 email.ts                    # Email configuration
│   │   ├── 📄 storage.ts                  # Storage configuration
│   │   ├── 📄 rate-limit.ts               # Rate limiting config
│   │   ├── 📄 cors.ts                     # CORS configuration
│   │   ├── 📄 security.ts                 # Security configuration
│   │   └── 📄 index.ts                    # Config exports
│   │
│   ├── 📁 health/                         # Health Check System
│   │   ├── 📄 health-check.ts             # Health check implementation
│   │   ├── 📄 checks/                     # Individual health checks
│   │   │   ├── 📄 database.ts             # Database health check
│   │   │   ├── 📄 redis.ts                # Redis health check
│   │   │   ├── 📄 external-api.ts         # External API health check
│   │   │   ├── 📄 memory.ts               # Memory health check
│   │   │   └── 📄 index.ts                # Health checks exports
│   │   ├── 📄 health-monitor.ts           # Health monitoring
│   │   └── 📄 index.ts                    # Health exports
│   │
│   ├── 📁 events/                         # Event System
│   │   ├── 📄 event-emitter.ts            # Event emitter implementation
│   │   ├── 📄 event-bus.ts                # Event bus for domain events
│   │   ├── 📄 event-types.ts              # Event type definitions
│   │   ├── 📄 event-handler.ts            # Base event handler
│   │   ├── 📄 event-middleware.ts         # Event middleware
│   │   └── 📄 index.ts                    # Events exports
│   │
│   ├── 📁 cache/                          # Caching Utilities
│   │   ├── 📄 cache-manager.ts            # Cache management
│   │   ├── 📄 memory-cache.ts             # In-memory caching
│   │   ├── 📄 redis-cache.ts              # Redis caching
│   │   ├── 📄 cache-decorator.ts          # Caching decorators
│   │   ├── 📄 cache-keys.ts               # Cache key generators
│   │   └── 📄 index.ts                    # Cache exports
│   │
│   ├── 📁 rate-limit/                     # Rate Limiting
│   │   ├── 📄 rate-limiter.ts             # Rate limiter implementation
│   │   ├── 📄 sliding-window.ts           # Sliding window algorithm
│   │   ├── 📄 token-bucket.ts             # Token bucket algorithm
│   │   ├── 📄 strategies.ts               # Rate limiting strategies
│   │   ├── 📄 middleware.ts               # Rate limiting middleware
│   │   └── 📄 index.ts                    # Rate limit exports
│   │
│   ├── 📁 security/                       # Security Utilities
│   │   ├── 📄 sanitize.ts                 # Input sanitization
│   │   ├── 📄 xss-protection.ts           # XSS protection
│   │   ├── 📄 csrf-protection.ts          # CSRF protection
│   │   ├── 📄 helmet-config.ts            # Helmet security headers
│   │   ├── 📄 input-validation.ts         # Input validation
│   │   ├── 📄 sql-injection.ts            # SQL injection prevention
│   │   └── 📄 index.ts                    # Security exports
│   │
│   ├── 📁 monitoring/                     # Application Monitoring
│   │   ├── 📄 metrics.ts                  # Metrics collection
│   │   ├── 📄 performance.ts              # Performance monitoring
│   │   ├── 📄 memory-usage.ts             # Memory usage tracking
│   │   ├── 📄 request-tracking.ts         # Request tracking
│   │   ├── 📄 error-tracking.ts           # Error tracking
│   │   └── 📄 index.ts                    # Monitoring exports
│   │
│   ├── 📁 tests/                          # Core Library Tests
│   │   ├── 📁 env/                        # Environment tests
│   │   │   ├── 📄 env.spec.ts             # Environment validation tests
│   │   │   ├── 📄 env-loader.spec.ts      # Environment loader tests
│   │   │   └── 📄 env-validator.spec.ts   # Environment validator tests
│   │   ├── 📁 logger/                     # Logger tests
│   │   │   ├── 📄 logger.spec.ts          # Logger implementation tests
│   │   │   ├── 📄 formatters.spec.ts      # Formatter tests
│   │   │   └── 📄 transports.spec.ts      # Transport tests
│   │   ├── 📁 utils/                      # Utility tests
│   │   │   ├── 📁 crypto/                 # Crypto utility tests
│   │   │   │   ├── 📄 hash.spec.ts        # Hash function tests
│   │   │   │   ├── 📄 jwt.spec.ts         # JWT utility tests
│   │   │   │   └── 📄 encryption.spec.ts  # Encryption tests
│   │   │   ├── 📁 format/                 # Format utility tests
│   │   │   │   ├── 📄 date.spec.ts        # Date formatting tests
│   │   │   │   ├── 📄 string.spec.ts      # String formatting tests
│   │   │   │   └── 📄 currency.spec.ts    # Currency formatting tests
│   │   │   ├── 📁 validation/             # Validation tests
│   │   │   │   ├── 📄 email.spec.ts       # Email validation tests
│   │   │   │   ├── 📄 password.spec.ts    # Password validation tests
│   │   │   │   └── 📄 id-number.spec.ts   # ID number validation tests
│   │   │   ├── 📁 async/                  # Async utility tests
│   │   │   │   ├── 📄 retry.spec.ts       # Retry mechanism tests
│   │   │   │   ├── 📄 debounce.spec.ts    # Debounce tests
│   │   │   │   └── 📄 queue.spec.ts       # Queue tests
│   │   │   ├── 📁 array/                  # Array utility tests
│   │   │   │   ├── 📄 chunk.spec.ts       # Array chunking tests
│   │   │   │   ├── 📄 unique.spec.ts      # Unique elements tests
│   │   │   │   └── 📄 pagination.spec.ts  # Pagination tests
│   │   │   └── 📁 object/                 # Object utility tests
│   │   │       ├── 📄 merge.spec.ts       # Object merging tests
│   │   │       ├── 📄 pick.spec.ts        # Object picking tests
│   │   │       └── 📄 transform.spec.ts   # Object transformation tests
│   │   ├── 📁 errors/                     # Error handling tests
│   │   │   ├── 📄 base-error.spec.ts      # Base error tests
│   │   │   ├── 📄 app-error.spec.ts       # App error tests
│   │   │   └── 📄 error-handler.spec.ts   # Error handler tests
│   │   ├── 📁 health/                     # Health check tests
│   │   │   ├── 📄 health-check.spec.ts    # Health check tests
│   │   │   └── 📄 health-monitor.spec.ts  # Health monitor tests
│   │   ├── 📁 events/                     # Event system tests
│   │   │   ├── 📄 event-emitter.spec.ts   # Event emitter tests
│   │   │   └── 📄 event-bus.spec.ts       # Event bus tests
│   │   ├── 📁 cache/                      # Cache tests
│   │   │   ├── 📄 cache-manager.spec.ts   # Cache manager tests
│   │   │   ├── 📄 memory-cache.spec.ts    # Memory cache tests
│   │   │   └── 📄 redis-cache.spec.ts     # Redis cache tests
│   │   ├── 📁 rate-limit/                 # Rate limiting tests
│   │   │   ├── 📄 rate-limiter.spec.ts    # Rate limiter tests
│   │   │   └── 📄 strategies.spec.ts      # Strategy tests
│   │   ├── 📁 security/                   # Security tests
│   │   │   ├── 📄 sanitize.spec.ts        # Sanitization tests
│   │   │   ├── 📄 xss-protection.spec.ts  # XSS protection tests
│   │   │   └── 📄 csrf-protection.spec.ts # CSRF protection tests
│   │   └── 📁 monitoring/                 # Monitoring tests
│   │       ├── 📄 metrics.spec.ts         # Metrics tests
│   │       ├── 📄 performance.spec.ts     # Performance tests
│   │       └── 📄 error-tracking.spec.ts  # Error tracking tests
│   │
│   └── 📄 index.ts                        # Main library export
│
├── 📄 project.json                        # Nx project configuration
├── 📄 package.json                        # Package configuration
├── 📄 tsconfig.json                       # TypeScript configuration
├── 📄 tsconfig.lib.json                   # Library TypeScript configuration
├── 📄 tsconfig.spec.json                  # Test TypeScript configuration
├── 📄 vite.config.ts                      # Vite configuration
├── 📄 vitest.config.ts                    # Vitest configuration
├── 📄 eslint.config.js                    # ESLint configuration
├── 📄 jest.config.ts                      # Jest configuration (if used)
└── 📄 README.md                           # Library documentation
```