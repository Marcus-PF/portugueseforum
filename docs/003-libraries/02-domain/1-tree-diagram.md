# 🏛️ Domain Libraries - Complete Structure

```
📁 libs/domain/                           # Business Logic Layer
│
├── 📁 user/                              # @pfsa/domain-user
│   ├── 📁 src/
│   │   ├── 📁 entities/                  # Domain Entities
│   │   │   ├── 📄 user.entity.ts         # User aggregate root
│   │   │   ├── 📄 profile.entity.ts      # User profile value object
│   │   │   ├── 📄 contact.entity.ts      # Contact information
│   │   │   ├── 📄 address.entity.ts      # Address value object
│   │   │   ├── 📄 preferences.entity.ts  # User preferences
│   │   │   └── 📄 index.ts               # Entity exports
│   │   │
│   │   ├── 📁 value-objects/             # Value Objects
│   │   │   ├── 📄 email.vo.ts            # Email value object
│   │   │   ├── 📄 phone.vo.ts            # Phone number value object
│   │   │   ├── 📄 id-number.vo.ts        # SA ID number value object
│   │   │   ├── 📄 password.vo.ts         # Password value object
│   │   │   ├── 📄 name.vo.ts             # Name value object
│   │   │   ├── 📄 date-of-birth.vo.ts    # Date of birth value object
│   │   │   └── 📄 index.ts               # Value object exports
│   │   │
│   │   ├── 📁 enums/                     # Domain Enums
│   │   │   ├── 📄 user-status.enum.ts    # User status (active, suspended, etc)
│   │   │   ├── 📄 user-role.enum.ts      # User roles (member, admin, etc)
│   │   │   ├── 📄 gender.enum.ts         # Gender options
│   │   │   ├── 📄 language.enum.ts       # Language preferences
│   │   │   ├── 📄 notification.enum.ts   # Notification preferences
│   │   │   └── 📄 index.ts               # Enum exports
│   │   │
│   │   ├── 📁 services/                  # Domain Services
│   │   │   ├── 📄 user-validation.service.ts    # User validation logic
│   │   │   ├── 📄 password-policy.service.ts    # Password policy enforcement
│   │   │   ├── 📄 user-uniqueness.service.ts    # Email/username uniqueness
│   │   │   ├── 📄 profile-completion.service.ts # Profile completion logic
│   │   │   ├── 📄 user-permissions.service.ts   # Permission calculations
│   │   │   └── 📄 index.ts               # Service exports
│   │   │
│   │   ├── 📁 events/                    # Domain Events
│   │   │   ├── 📄 user-created.event.ts  # User creation event
│   │   │   ├── 📄 user-updated.event.ts  # User update event
│   │   │   ├── 📄 user-deleted.event.ts  # User deletion event
│   │   │   ├── 📄 user-activated.event.ts # User activation event
│   │   │   ├── 📄 user-suspended.event.ts # User suspension event
│   │   │   ├── 📄 profile-updated.event.ts # Profile update event
│   │   │   ├── 📄 password-changed.event.ts # Password change event
│   │   │   └── 📄 index.ts               # Event exports
│   │   │
│   │   ├── 📁 specifications/            # Business Rules
│   │   │   ├── 📄 user-can-be-created.spec.ts   # User creation rules
│   │   │   ├── 📄 user-can-be-updated.spec.ts   # User update rules
│   │   │   ├── 📄 user-can-be-deleted.spec.ts   # User deletion rules
│   │   │   ├── 📄 password-is-valid.spec.ts     # Password validation rules
│   │   │   ├── 📄 profile-is-complete.spec.ts   # Profile completion rules
│   │   │   └── 📄 index.ts               # Specification exports
│   │   │
│   │   ├── 📁 repositories/              # Repository Interfaces
│   │   │   ├── 📄 user.repository.ts     # User repository interface
│   │   │   ├── 📄 profile.repository.ts  # Profile repository interface
│   │   │   └── 📄 index.ts               # Repository exports
│   │   │
│   │   ├── 📁 factories/                 # Domain Factories
│   │   │   ├── 📄 user.factory.ts        # User creation factory
│   │   │   ├── 📄 profile.factory.ts     # Profile creation factory
│   │   │   └── 📄 index.ts               # Factory exports
│   │   │
│   │   ├── 📁 errors/                    # Domain-Specific Errors
│   │   │   ├── 📄 user-not-found.error.ts       # User not found error
│   │   │   ├── 📄 user-already-exists.error.ts  # User exists error
│   │   │   ├── 📄 invalid-password.error.ts     # Invalid password error
│   │   │   ├── 📄 user-suspended.error.ts       # User suspended error
│   │   │   ├── 📄 insufficient-permissions.error.ts # Permission error
│   │   │   └── 📄 index.ts               # Error exports
│   │   │
│   │   ├── 📁 constants/                 # Domain Constants
│   │   │   ├── 📄 user.constants.ts      # User-related constants
│   │   │   ├── 📄 validation.constants.ts # Validation constants
│   │   │   ├── 📄 permissions.constants.ts # Permission constants
│   │   │   └── 📄 index.ts               # Constants exports
│   │   │
│   │   ├── 📁 types/                     # Domain Types
│   │   │   ├── 📄 user.types.ts          # User-related types
│   │   │   ├── 📄 profile.types.ts       # Profile-related types
│   │   │   ├── 📄 permissions.types.ts   # Permission types
│   │   │   └── 📄 index.ts               # Type exports
│   │   │
│   │   ├── 📁 tests/                     # Domain Tests
│   │   │   ├── 📁 entities/              # Entity tests
│   │   │   │   ├── 📄 user.entity.spec.ts        # User entity tests
│   │   │   │   ├── 📄 profile.entity.spec.ts     # Profile entity tests
│   │   │   │   └── 📄 contact.entity.spec.ts     # Contact entity tests
│   │   │   ├── 📁 value-objects/         # Value object tests
│   │   │   │   ├── 📄 email.vo.spec.ts           # Email VO tests
│   │   │   │   ├── 📄 phone.vo.spec.ts           # Phone VO tests
│   │   │   │   ├── 📄 id-number.vo.spec.ts       # ID number VO tests
│   │   │   │   └── 📄 password.vo.spec.ts        # Password VO tests
│   │   │   ├── 📁 services/              # Service tests
│   │   │   │   ├── 📄 user-validation.service.spec.ts    # Validation service tests
│   │   │   │   ├── 📄 password-policy.service.spec.ts    # Password policy tests
│   │   │   │   └── 📄 user-permissions.service.spec.ts   # Permissions service tests
│   │   │   ├── 📁 specifications/        # Specification tests
│   │   │   │   ├── 📄 user-can-be-created.spec.spec.ts   # Creation spec tests
│   │   │   │   └── 📄 password-is-valid.spec.spec.ts     # Password spec tests
│   │   │   └── 📁 factories/             # Factory tests
│   │   │       ├── 📄 user.factory.spec.ts       # User factory tests
│   │   │       └── 📄 profile.factory.spec.ts    # Profile factory tests
│   │   │
│   │   └── 📄 index.ts                   # Main domain export
│   │
│   ├── 📄 project.json                   # Nx project config
│   ├── 📄 package.json                   # Package config
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 tsconfig.lib.json             # Library TypeScript config
│   ├── 📄 tsconfig.spec.json            # Test TypeScript config
│   ├── 📄 vite.config.ts                # Vite config
│   ├── 📄 vitest.config.ts              # Vitest config
│   └── 📄 README.md                      # Domain documentation
│
├── 📁 membership/                        # @pfsa/domain-membership
│   ├── 📁 src/
│   │   ├── 📁 entities/                  # Membership Entities
│   │   │   ├── 📄 membership.entity.ts   # Membership aggregate root
│   │   │   ├── 📄 subscription.entity.ts # Subscription details
│   │   │   ├── 📄 payment.entity.ts      # Payment information
│   │   │   ├── 📄 invoice.entity.ts      # Invoice entity
│   │   │   ├── 📄 benefit.entity.ts      # Membership benefits
│   │   │   └── 📄 index.ts               # Entity exports
│   │   │
│   │   ├── 📁 value-objects/             # Value Objects
│   │   │   ├── 📄 membership-number.vo.ts # Membership number
│   │   │   ├── 📄 membership-tier.vo.ts   # Membership tier
│   │   │   ├── 📄 payment-amount.vo.ts    # Payment amount
│   │   │   ├── 📄 currency.vo.ts          # Currency (ZAR/EUR)
│   │   │   ├── 📄 billing-period.vo.ts    # Billing period
│   │   │   └── 📄 index.ts               # Value object exports
│   │   │
│   │   ├── 📁 enums/                     # Membership Enums
│   │   │   ├── 📄 membership-status.enum.ts  # Status (active, expired, etc)
│   │   │   ├── 📄 membership-type.enum.ts    # Type (individual, family, etc)
│   │   │   ├── 📄 payment-status.enum.ts     # Payment status
│   │   │   ├── 📄 payment-method.enum.ts     # Payment methods
│   │   │   ├── 📄 billing-cycle.enum.ts      # Billing cycles
│   │   │   └── 📄 index.ts               # Enum exports
│   │   │
│   │   ├── 📁 services/                  # Domain Services
│   │   │   ├── 📄 membership-calculation.service.ts  # Fee calculations
│   │   │   ├── 📄 membership-renewal.service.ts      # Renewal logic
│   │   │   ├── 📄 payment-processing.service.ts      # Payment logic
│   │   │   ├── 📄 benefit-assignment.service.ts      # Benefit logic
│   │   │   ├── 📄 invoice-generation.service.ts      # Invoice generation
│   │   │   └── 📄 index.ts               # Service exports
│   │   │
│   │   ├── 📁 events/                    # Domain Events
│   │   │   ├── 📄 membership-created.event.ts    # Membership creation
│   │   │   ├── 📄 membership-renewed.event.ts    # Membership renewal
│   │   │   ├── 📄 membership-expired.event.ts    # Membership expiration
│   │   │   ├── 📄 payment-received.event.ts      # Payment received
│   │   │   ├── 📄 payment-failed.event.ts        # Payment failed
│   │   │   ├── 📄 invoice-generated.event.ts     # Invoice generated
│   │   │   └── 📄 index.ts               # Event exports
│   │   │
│   │   ├── 📁 specifications/            # Business Rules
│   │   │   ├── 📄 membership-can-be-created.spec.ts  # Creation rules
│   │   │   ├── 📄 membership-can-be-renewed.spec.ts  # Renewal rules
│   │   │   ├── 📄 payment-is-valid.spec.ts           # Payment validation
│   │   │   ├── 📄 membership-is-active.spec.ts       # Active status rules
│   │   │   └── 📄 index.ts               # Specification exports
│   │   │
│   │   ├── 📁 repositories/              # Repository Interfaces
│   │   │   ├── 📄 membership.repository.ts   # Membership repository
│   │   │   ├── 📄 payment.repository.ts      # Payment repository
│   │   │   ├── 📄 invoice.repository.ts      # Invoice repository
│   │   │   └── 📄 index.ts               # Repository exports
│   │   │
│   │   ├── 📁 factories/                 # Domain Factories
│   │   │   ├── 📄 membership.factory.ts  # Membership factory
│   │   │   ├── 📄 payment.factory.ts     # Payment factory
│   │   │   ├── 📄 invoice.factory.ts     # Invoice factory
│   │   │   └── 📄 index.ts               # Factory exports
│   │   │
│   │   ├── 📁 errors/                    # Domain-Specific Errors
│   │   │   ├── 📄 membership-not-found.error.ts     # Membership not found
│   │   │   ├── 📄 membership-expired.error.ts       # Membership expired
│   │   │   ├── 📄 payment-failed.error.ts           # Payment failed
│   │   │   ├── 📄 invalid-membership-tier.error.ts  # Invalid tier
│   │   │   └── 📄 index.ts               # Error exports
│   │   │
│   │   ├── 📁 constants/                 # Domain Constants
│   │   │   ├── 📄 membership.constants.ts    # Membership constants
│   │   │   ├── 📄 payment.constants.ts       # Payment constants
│   │   │   ├── 📄 billing.constants.ts       # Billing constants
│   │   │   └── 📄 index.ts               # Constants exports
│   │   │
│   │   ├── 📁 types/                     # Domain Types
│   │   │   ├── 📄 membership.types.ts    # Membership types
│   │   │   ├── 📄 payment.types.ts       # Payment types
│   │   │   ├── 📄 billing.types.ts       # Billing types
│   │   │   └── 📄 index.ts               # Type exports
│   │   │
│   │   ├── 📁 tests/                     # Domain Tests
│   │   │   ├── 📁 entities/              # Entity tests
│   │   │   ├── 📁 value-objects/         # Value object tests
│   │   │   ├── 📁 services/              # Service tests
│   │   │   ├── 📁 specifications/        # Specification tests
│   │   │   └── 📁 factories/             # Factory tests
│   │   │
│   │   └── 📄 index.ts                   # Main domain export
│   │
│   ├── 📄 project.json                   # Nx project config
│   ├── 📄 package.json                   # Package config
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 tsconfig.lib.json             # Library TypeScript config
│   ├── 📄 tsconfig.spec.json            # Test TypeScript config
│   ├── 📄 vite.config.ts                # Vite config
│   ├── 📄 vitest.config.ts              # Vitest config
│   └── 📄 README.md                      # Domain documentation
│
└── 📁 article/                           # @pfsa/domain-article
    ├── 📁 src/
    │   ├── 📁 entities/                  # Article Entities
    │   │   ├── 📄 article.entity.ts      # Article aggregate root
    │   │   ├── 📄 content.entity.ts      # Article content
    │   │   ├── 📄 metadata.entity.ts     # Article metadata
    │   │   ├── 📄 category.entity.ts     # Article category
    │   │   ├── 📄 tag.entity.ts          # Article tags
    │   │   └── 📄 index.ts               # Entity exports
    │   │
    │   ├── 📁 value-objects/             # Value Objects
    │   │   ├── 📄 article-title.vo.ts    # Article title
    │   │   ├── 📄 article-slug.vo.ts     # Article slug
    │   │   ├── 📄 article-excerpt.vo.ts  # Article excerpt
    │   │   ├── 📄 reading-time.vo.ts     # Reading time
    │   │   ├── 📄 publication-date.vo.ts # Publication date
    │   │   └── 📄 index.ts               # Value object exports
    │   │
    │   ├── 📁 enums/                     # Article Enums
    │   │   ├── 📄 article-status.enum.ts # Status (draft, published, etc)
    │   │   ├── 📄 article-type.enum.ts   # Type (news, event, etc)
    │   │   ├── 📄 content-language.enum.ts # Content language
    │   │   ├── 📄 visibility.enum.ts     # Visibility (public, members)
    │   │   └── 📄 index.ts               # Enum exports
    │   │
    │   ├── 📁 services/                  # Domain Services
    │   │   ├── 📄 article-validation.service.ts  # Article validation
    │   │   ├── 📄 content-processing.service.ts  # Content processing
    │   │   ├── 📄 slug-generation.service.ts     # Slug generation
    │   │   ├── 📄 reading-time.service.ts        # Reading time calc
    │   │   ├── 📄 seo-optimization.service.ts    # SEO optimization
    │   │   └── 📄 index.ts               # Service exports
    │   │
    │   ├── 📁 events/                    # Domain Events
    │   │   ├── 📄 article-created.event.ts   # Article creation
    │   │   ├── 📄 article-published.event.ts # Article publication
    │   │   ├── 📄 article-updated.event.ts   # Article update
    │   │   ├── 📄 article-deleted.event.ts   # Article deletion
    │   │   ├── 📄 article-viewed.event.ts    # Article view
    │   │   └── 📄 index.ts               # Event exports
    │   │
    │   ├── 📁 specifications/            # Business Rules
    │   │   ├── 📄 article-can-be-published.spec.ts  # Publication rules
    │   │   ├── 📄 content-is-valid.spec.ts          # Content validation
    │   │   ├── 📄 user-can-edit.spec.ts             # Edit permissions
    │   │   └── 📄 index.ts               # Specification exports
    │   │
    │   ├── 📁 repositories/              # Repository Interfaces
    │   │   ├── 📄 article.repository.ts  # Article repository
    │   │   ├── 📄 category.repository.ts # Category repository
    │   │   ├── 📄 tag.repository.ts      # Tag repository
    │   │   └── 📄 index.ts               # Repository exports
    │   │
    │   ├── 📁 factories/                 # Domain Factories
    │   │   ├── 📄 article.factory.ts     # Article factory
    │   │   ├── 📄 content.factory.ts     # Content factory
    │   │   └── 📄 index.ts               # Factory exports
    │   │
    │   ├── 📁 errors/                    # Domain-Specific Errors
    │   │   ├── 📄 article-not-found.error.ts    # Article not found
    │   │   ├── 📄 invalid-content.error.ts      # Invalid content
    │   │   ├── 📄 permission-denied.error.ts    # Permission denied
    │   │   └── 📄 index.ts               # Error exports
    │   │
    │   ├── 📁 constants/                 # Domain Constants
    │   │   ├── 📄 article.constants.ts   # Article constants
    │   │   ├── 📄 content.constants.ts   # Content constants
    │   │   └── 📄 index.ts               # Constants exports
    │   │
    │   ├── 📁 types/                     # Domain Types
    │   │   ├── 📄 article.types.ts       # Article types
    │   │   ├── 📄 content.types.ts       # Content types
    │   │   └── 📄 index.ts               # Type exports
    │   │
    │   ├── 📁 tests/                     # Domain Tests
    │   │   ├── 📁 entities/              # Entity tests
    │   │   ├── 📁 value-objects/         # Value object tests
    │   │   ├── 📁 services/              # Service tests
    │   │   ├── 📁 specifications/        # Specification tests
    │   │   └── 📁 factories/             # Factory tests
    │   │
    │   └── 📄 index.ts                   # Main domain export
    │
    ├── 📄 project.json                   # Nx project config
    ├── 📄 package.json                   # Package config
    ├── 📄 tsconfig.json                  # TypeScript config
    ├── 📄 tsconfig.lib.json             # Library TypeScript config
    ├── 📄 tsconfig.spec.json            # Test TypeScript config
    ├── 📄 vite.config.ts                # Vite config
    ├── 📄 vitest.config.ts              # Vitest config
    └── 📄 README.md                      # Domain documentation
```