# 🔐 @pfsa/auth Library - Enhanced Structure

```
📁 libs/auth/                            # @pfsa/auth - Authentication & Authorization Layer
├── 📁 src/
│   ├── 📁 providers/                     # Authentication Providers
│   │   ├── 📁 base/                      # Base Provider Implementation
│   │   │   ├── 📄 base-auth-provider.ts  # Abstract base auth provider
│   │   │   ├── 📄 provider-config.ts     # Provider configuration types
│   │   │   ├── 📄 provider-factory.ts    # Provider factory pattern
│   │   │   └── 📄 index.ts               # Base provider exports
│   │   │
│   │   ├── 📁 email/                     # Email/Password Authentication
│   │   │   ├── 📄 email-provider.ts      # Email auth implementation
│   │   │   ├── 📄 password-reset.ts      # Password reset logic
│   │   │   ├── 📄 email-verification.ts  # Email verification
│   │   │   ├── 📄 email.types.ts         # Email auth types
│   │   │   └── 📄 index.ts               # Email provider exports
│   │   │
│   │   ├── 📁 oauth/                     # OAuth Providers
│   │   │   ├── 📄 oauth-provider.ts      # Base OAuth implementation
│   │   │   ├── 📄 google-provider.ts     # Google OAuth provider
│   │   │   ├── 📄 microsoft-provider.ts  # Microsoft OAuth provider
│   │   │   ├── 📄 facebook-provider.ts   # Facebook OAuth provider
│   │   │   ├── 📄 oauth-callback.ts      # OAuth callback handling
│   │   │   ├── 📄 oauth.types.ts         # OAuth types
│   │   │   └── 📄 index.ts               # OAuth exports
│   │   │
│   │   ├── 📁 saml/                      # SAML Authentication (Enterprise)
│   │   │   ├── 📄 saml-provider.ts       # SAML implementation
│   │   │   ├── 📄 saml-config.ts         # SAML configuration
│   │   │   ├── 📄 saml-metadata.ts       # SAML metadata handling
│   │   │   ├── 📄 saml.types.ts          # SAML types
│   │   │   └── 📄 index.ts               # SAML exports
│   │   │
│   │   ├── 📁 two-factor/                # Two-Factor Authentication
│   │   │   ├── 📄 totp-provider.ts       # TOTP (Time-based OTP)
│   │   │   ├── 📄 sms-provider.ts        # SMS-based 2FA
│   │   │   ├── 📄 email-otp-provider.ts  # Email OTP provider
│   │   │   ├── 📄 backup-codes.ts        # Backup recovery codes
│   │   │   ├── 📄 two-factor.types.ts    # 2FA types
│   │   │   └── 📄 index.ts               # 2FA exports
│   │   │
│   │   └── 📄 index.ts                   # All providers exports
│   │
│   ├── 📁 tokens/                        # Token Management
│   │   ├── 📁 jwt/                       # JWT Token Handling
│   │   │   ├── 📄 jwt-service.ts         # JWT token service
│   │   │   ├── 📄 jwt-validator.ts       # JWT validation logic
│   │   │   ├── 📄 jwt-refresh.ts         # JWT refresh mechanism
│   │   │   ├── 📄 jwt-blacklist.ts       # JWT blacklist management
│   │   │   ├── 📄 jwt.types.ts           # JWT types
│   │   │   └── 📄 index.ts               # JWT exports
│   │   │
│   │   ├── 📁 session/                   # Session Management
│   │   │   ├── 📄 session-service.ts     # Session management service
│   │   │   ├── 📄 session-store.ts       # Session storage abstraction
│   │   │   ├── 📄 session-cleanup.ts     # Session cleanup logic
│   │   │   ├── 📄 session-security.ts    # Session security measures
│   │   │   ├── 📄 session.types.ts       # Session types
│   │   │   └── 📄 index.ts               # Session exports
│   │   │
│   │   ├── 📁 refresh/                   # Refresh Token Logic
│   │   │   ├── 📄 refresh-service.ts     # Refresh token service
│   │   │   ├── 📄 refresh-rotation.ts    # Token rotation strategy
│   │   │   ├── 📄 refresh-validation.ts  # Refresh token validation
│   │   │   ├── 📄 refresh.types.ts       # Refresh token types
│   │   │   └── 📄 index.ts               # Refresh exports
│   │   │
│   │   └── 📄 index.ts                   # Token management exports
│   │
│   ├── 📁 guards/                        # Route & Resource Guards
│   │   ├── 📁 route-guards/              # Route Protection
│   │   │   ├── 📄 auth-guard.ts          # Authentication guard
│   │   │   ├── 📄 role-guard.ts          # Role-based guard
│   │   │   ├── 📄 permission-guard.ts    # Permission-based guard
│   │   │   ├── 📄 membership-guard.ts    # Membership level guard
│   │   │   ├── 📄 admin-guard.ts         # Admin access guard
│   │   │   ├── 📄 guest-guard.ts         # Guest-only guard
│   │   │   └── 📄 index.ts               # Route guards exports
│   │   │
│   │   ├── 📁 api-guards/                # API Endpoint Protection
│   │   │   ├── 📄 api-auth-guard.ts      # API authentication guard
│   │   │   ├── 📄 rate-limit-guard.ts    # Rate limiting guard
│   │   │   ├── 📄 cors-guard.ts          # CORS protection guard
│   │   │   ├── 📄 csrf-guard.ts          # CSRF protection guard
│   │   │   └── 📄 index.ts               # API guards exports
│   │   │
│   │   ├── 📁 resource-guards/           # Resource-Level Protection
│   │   │   ├── 📄 ownership-guard.ts     # Resource ownership guard
│   │   │   ├── 📄 visibility-guard.ts    # Resource visibility guard
│   │   │   ├── 📄 edit-guard.ts          # Edit permission guard
│   │   │   └── 📄 index.ts               # Resource guards exports
│   │   │
│   │   └── 📄 index.ts                   # All guards exports
│   │
│   ├── 📁 permissions/                   # Permission System
│   │   ├── 📁 rbac/                      # Role-Based Access Control
│   │   │   ├── 📄 role-service.ts        # Role management service
│   │   │   ├── 📄 permission-service.ts  # Permission management
│   │   │   ├── 📄 role-hierarchy.ts      # Role hierarchy logic
│   │   │   ├── 📄 role-inheritance.ts    # Role inheritance rules
│   │   │   ├── 📄 rbac.types.ts          # RBAC types
│   │   │   └── 📄 index.ts               # RBAC exports
│   │   │
│   │   ├── 📁 abac/                      # Attribute-Based Access Control
│   │   │   ├── 📄 attribute-service.ts   # Attribute management
│   │   │   ├── 📄 policy-engine.ts       # Policy evaluation engine
│   │   │   ├── 📄 context-builder.ts     # Context building for policies
│   │   │   ├── 📄 abac.types.ts          # ABAC types
│   │   │   └── 📄 index.ts               # ABAC exports
│   │   │
│   │   ├── 📁 policies/                  # Permission Policies
│   │   │   ├── 📄 membership-policies.ts # Membership-based policies
│   │   │   ├── 📄 forum-policies.ts      # Forum-specific policies
│   │   │   ├── 📄 article-policies.ts    # Article access policies
│   │   │   ├── 📄 admin-policies.ts      # Admin policies
│   │   │   ├── 📄 event-policies.ts      # Event access policies
│   │   │   └── 📄 index.ts               # Policies exports
│   │   │
│   │   └── 📄 index.ts                   # Permission system exports
│   │
│   ├── 📁 middleware/                    # Authentication Middleware
│   │   ├── 📁 express/                   # Express.js Middleware
│   │   │   ├── 📄 auth-middleware.ts     # Express auth middleware
│   │   │   ├── 📄 cors-middleware.ts     # CORS middleware
│   │   │   ├── 📄 helmet-middleware.ts   # Security headers middleware
│   │   │   └── 📄 index.ts               # Express middleware exports
│   │   │
│   │   ├── 📁 hono/                      # Hono Middleware
│   │   │   ├── 📄 hono-auth-middleware.ts # Hono auth middleware
│   │   │   ├── 📄 hono-cors-middleware.ts # Hono CORS middleware
│   │   │   ├── 📄 hono-jwt-middleware.ts # Hono JWT middleware
│   │   │   └── 📄 index.ts               # Hono middleware exports
│   │   │
│   │   ├── 📁 nextjs/                    # Next.js Middleware
│   │   │   ├── 📄 nextjs-auth-middleware.ts # Next.js auth middleware
│   │   │   ├── 📄 api-auth-middleware.ts # API route middleware
│   │   │   ├── 📄 page-auth-middleware.ts # Page protection middleware
│   │   │   └── 📄 index.ts               # Next.js middleware exports
│   │   │
│   │   └── 📄 index.ts                   # All middleware exports
│   │
│   ├── 📁 hooks/                         # React Authentication Hooks
│   │   ├── 📁 auth/                      # Core Auth Hooks
│   │   │   ├── 📄 use-auth.ts            # Main authentication hook
│   │   │   ├── 📄 use-login.ts           # Login functionality hook
│   │   │   ├── 📄 use-logout.ts          # Logout functionality hook
│   │   │   ├── 📄 use-register.ts        # Registration hook
│   │   │   ├── 📄 use-auth-state.ts      # Auth state management
│   │   │   ├── 📄 use-current-user.ts    # Current user hook
│   │   │   └── 📄 index.ts               # Auth hooks exports
│   │   │
│   │   ├── 📁 permissions/               # Permission Hooks
│   │   │   ├── 📄 use-permissions.ts     # Permission checking hook
│   │   │   ├── 📄 use-roles.ts           # Role management hook
│   │   │   ├── 📄 use-can.ts             # Permission ability hook
│   │   │   ├── 📄 use-membership-level.ts # Membership level hook
│   │   │   └── 📄 index.ts               # Permission hooks exports
│   │   │
│   │   ├── 📁 guards/                    # Guard Hooks
│   │   │   ├── 📄 use-auth-guard.ts      # Authentication guard hook
│   │   │   ├── 📄 use-role-guard.ts      # Role guard hook
│   │   │   ├── 📄 use-permission-guard.ts # Permission guard hook
│   │   │   └── 📄 index.ts               # Guard hooks exports
│   │   │
│   │   ├── 📁 two-factor/                # 2FA Hooks
│   │   │   ├── 📄 use-two-factor.ts      # 2FA management hook
│   │   │   ├── 📄 use-totp.ts            # TOTP hook
│   │   │   ├── 📄 use-backup-codes.ts    # Backup codes hook
│   │   │   └── 📄 index.ts               # 2FA hooks exports
│   │   │
│   │   └── 📄 index.ts                   # All hooks exports
│   │
│   ├── 📁 components/                    # Auth UI Components
│   │   ├── 📁 forms/                     # Authentication Forms
│   │   │   ├── 📄 login-form.tsx         # Login form component
│   │   │   ├── 📄 register-form.tsx      # Registration form
│   │   │   ├── 📄 forgot-password-form.tsx # Password reset form
│   │   │   ├── 📄 reset-password-form.tsx # New password form
│   │   │   ├── 📄 change-password-form.tsx # Change password form
│   │   │   ├── 📄 two-factor-form.tsx    # 2FA verification form
│   │   │   └── 📄 index.ts               # Form components exports
│   │   │
│   │   ├── 📁 providers/                 # Auth Provider Components
│   │   │   ├── 📄 auth-provider.tsx      # Main auth provider
│   │   │   ├── 📄 permission-provider.tsx # Permission context provider
│   │   │   ├── 📄 role-provider.tsx      # Role context provider
│   │   │   └── 📄 index.ts               # Provider components exports
│   │   │
│   │   ├── 📁 guards/                    # Guard Components
│   │   │   ├── 📄 auth-guard.tsx         # Authentication guard component
│   │   │   ├── 📄 role-guard.tsx         # Role-based guard component
│   │   │   ├── 📄 permission-guard.tsx   # Permission guard component
│   │   │   ├── 📄 membership-guard.tsx   # Membership guard component
│   │   │   └── 📄 index.ts               # Guard components exports
│   │   │
│   │   ├── 📁 oauth/                     # OAuth Components
│   │   │   ├── 📄 oauth-button.tsx       # OAuth login button
│   │   │   ├── 📄 google-login.tsx       # Google login button
│   │   │   ├── 📄 microsoft-login.tsx    # Microsoft login button
│   │   │   ├── 📄 facebook-login.tsx     # Facebook login button
│   │   │   └── 📄 index.ts               # OAuth components exports
│   │   │
│   │   ├── 📁 two-factor/                # 2FA Components
│   │   │   ├── 📄 totp-setup.tsx         # TOTP setup component
│   │   │   ├── 📄 totp-verify.tsx        # TOTP verification
│   │   │   ├── 📄 backup-codes.tsx       # Backup codes display
│   │   │   ├── 📄 sms-setup.tsx          # SMS 2FA setup
│   │   │   └── 📄 index.ts               # 2FA components exports
│   │   │
│   │   └── 📄 index.ts                   # All components exports
│   │
│   ├── 📁 utils/                         # Authentication Utilities
│   │   ├── 📄 crypto.ts                  # Cryptographic utilities
│   │   ├── 📄 password.ts                # Password utilities (hashing, validation)
│   │   ├── 📄 token-utils.ts             # Token manipulation utilities
│   │   ├── 📄 session-utils.ts           # Session management utilities
│   │   ├── 📄 validation.ts              # Auth validation utilities
│   │   ├── 📄 security.ts                # Security helper functions
│   │   ├── 📄 rate-limiting.ts           # Rate limiting utilities
│   │   ├── 📄 audit-log.ts               # Audit logging utilities
│   │   ├── 📄 device-detection.ts        # Device/browser detection
│   │   ├── 📄 geo-location.ts            # Geographic location utilities
│   │   └── 📄 index.ts                   # Utils exports
│   │
│   ├── 📁 storage/                       # Authentication Storage
│   │   ├── 📁 adapters/                  # Storage Adapters
│   │   │   ├── 📄 local-storage.adapter.ts # Browser localStorage adapter
│   │   │   ├── 📄 session-storage.adapter.ts # Browser sessionStorage adapter
│   │   │   ├── 📄 cookie.adapter.ts      # Cookie storage adapter
│   │   │   ├── 📄 memory.adapter.ts      # In-memory storage adapter
│   │   │   ├── 📄 secure-storage.adapter.ts # Encrypted storage adapter
│   │   │   └── 📄 index.ts               # Storage adapters exports
│   │   │
│   │   ├── 📄 storage-service.ts         # Storage abstraction service
│   │   ├── 📄 storage-encryption.ts      # Storage encryption utilities
│   │   ├── 📄 storage.types.ts           # Storage types
│   │   └── 📄 index.ts                   # Storage exports
│   │
│   ├── 📁 events/                        # Authentication Events
│   │   ├── 📄 auth-events.ts             # Authentication event definitions
│   │   ├── 📄 event-emitter.ts           # Event emitter implementation
│   │   ├── 📄 event-listeners.ts         # Default event listeners
│   │   ├── 📄 audit-events.ts            # Audit event definitions
│   │   ├── 📄 security-events.ts         # Security event definitions
│   │   └── 📄 index.ts                   # Events exports
│   │
│   ├── 📁 validators/                    # Authentication Validators
│   │   ├── 📄 email.validator.ts         # Email validation
│   │   ├── 📄 password.validator.ts      # Password strength validation
│   │   ├── 📄 username.validator.ts      # Username validation
│   │   ├── 📄 phone.validator.ts         # Phone number validation
│   │   ├── 📄 otp.validator.ts           # OTP validation
│   │   ├── 📄 token.validator.ts         # Token validation
│   │   ├── 📄 portuguese.validator.ts    # PT-specific validations
│   │   ├── 📄 south-african.validator.ts # SA-specific validations
│   │   └── 📄 index.ts                   # Validators exports
│   │
│   ├── 📁 constants/                     # Authentication Constants
│   │   ├── 📄 auth.constants.ts          # General auth constants
│   │   ├── 📄 role.constants.ts          # Role definitions
│   │   ├── 📄 permission.constants.ts    # Permission definitions
│   │   ├── 📄 token.constants.ts         # Token-related constants
│   │   ├── 📄 security.constants.ts      # Security constants
│   │   ├── 📄 error.constants.ts         # Error message constants
│   │   ├── 📄 membership.constants.ts    # Membership level constants
│   │   └── 📄 index.ts                   # Constants exports
│   │
│   ├── 📁 types/                         # Authentication Types
│   │   ├── 📄 auth.types.ts              # Core authentication types
│   │   ├── 📄 user.types.ts              # User-related types
│   │   ├── 📄 role.types.ts              # Role and permission types
│   │   ├── 📄 token.types.ts             # Token types
│   │   ├── 📄 session.types.ts           # Session types
│   │   ├── 📄 provider.types.ts          # Provider types
│   │   ├── 📄 error.types.ts             # Error types
│   │   ├── 📄 config.types.ts            # Configuration types
│   │   └── 📄 index.ts                   # Types exports
│   │
│   ├── 📁 errors/                        # Authentication Errors
│   │   ├── 📄 auth-error.ts              # Base authentication error
│   │   ├── 📄 invalid-credentials.error.ts # Invalid credentials error
│   │   ├── 📄 token-expired.error.ts     # Token expiration error
│   │   ├── 📄 permission-denied.error.ts # Permission denied error
│   │   ├── 📄 rate-limit.error.ts        # Rate limiting error
│   │   ├── 📄 two-factor.error.ts        # 2FA-related errors
│   │   ├── 📄 session.error.ts           # Session-related errors
│   │   └── 📄 index.ts                   # Errors exports
│   │
│   ├── 📁 config/                        # Authentication Configuration
│   │   ├── 📄 auth.config.ts             # Main auth configuration
│   │   ├── 📄 jwt.config.ts              # JWT configuration
│   │   ├── 📄 oauth.config.ts            # OAuth provider configurations
│   │   ├── 📄 security.config.ts         # Security configurations
│   │   ├── 📄 session.config.ts          # Session configurations
│   │   ├── 📄 rate-limit.config.ts       # Rate limiting configurations
│   │   ├── 📄 environment.config.ts      # Environment-specific configs
│   │   └── 📄 index.ts                   # Config exports
│   │
│   ├── 📁 tests/                         # Authentication Tests
│   │   ├── 📁 providers/                 # Provider tests
│   │   │   ├── 📄 email-provider.test.ts # Email provider tests
│   │   │   ├── 📄 oauth-provider.test.ts # OAuth provider tests
│   │   │   └── 📄 two-factor-provider.test.ts # 2FA provider tests
│   │   ├── 📁 tokens/                    # Token tests
│   │   │   ├── 📄 jwt-service.test.ts    # JWT service tests
│   │   │   └── 📄 session-service.test.ts # Session service tests
│   │   ├── 📁 guards/                    # Guard tests
│   │   │   ├── 📄 auth-guard.test.ts     # Auth guard tests
│   │   │   └── 📄 role-guard.test.ts     # Role guard tests
│   │   ├── 📁 hooks/                     # Hook tests
│   │   │   ├── 📄 use-auth.test.ts       # Auth hook tests
│   │   │   └── 📄 use-permissions.test.ts # Permission hook tests
│   │   ├── 📁 utils/                     # Utility tests
│   │   │   ├── 📄 password.test.ts       # Password utility tests
│   │   │   └── 📄 validation.test.ts     # Validation tests
│   │   ├── 📄 setup.ts                   # Test setup
│   │   └── 📄 test-utils.ts              # Testing utilities
│   │
│   └── 📄 index.ts                       # Main auth library export
│
├── 📄 project.json                       # Nx project config
├── 📄 package.json                       # Package config
├── 📄 tsconfig.json                      # TypeScript config
├── 📄 tsconfig.lib.json                 # Library TypeScript config
├── 📄 tsconfig.spec.json                # Test TypeScript config
├── 📄 vite.config.ts                    # Vite config
├── 📄 vitest.config.ts                  # Vitest config
└── 📄 README.md                         # Auth library documentation
```