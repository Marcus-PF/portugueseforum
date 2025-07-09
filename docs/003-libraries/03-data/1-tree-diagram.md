# 🗄️ Data Libraries - Complete Structure

```
📁 libs/data/                             # Data Access Layer
│
├── 📁 user/                              # @pfsa/data-user
│   ├── 📁 src/
│   │   ├── 📁 models/                    # Database Models
│   │   │   ├── 📁 mongo/                 # MongoDB Models
│   │   │   │   ├── 📄 user.model.ts      # User MongoDB model
│   │   │   │   ├── 📄 profile.model.ts   # Profile MongoDB model
│   │   │   │   ├── 📄 contact.model.ts   # Contact MongoDB model
│   │   │   │   ├── 📄 address.model.ts   # Address MongoDB model
│   │   │   │   ├── 📄 preferences.model.ts # Preferences MongoDB model
│   │   │   │   ├── 📄 session.model.ts   # Session MongoDB model
│   │   │   │   └── 📄 index.ts           # Model exports
│   │   │   ├── 📁 schemas/               # Mongoose Schemas
│   │   │   │   ├── 📄 user.schema.ts     # User schema definition
│   │   │   │   ├── 📄 profile.schema.ts  # Profile schema definition
│   │   │   │   ├── 📄 contact.schema.ts  # Contact schema definition
│   │   │   │   ├── 📄 address.schema.ts  # Address schema definition
│   │   │   │   ├── 📄 preferences.schema.ts # Preferences schema
│   │   │   │   ├── 📄 session.schema.ts  # Session schema definition
│   │   │   │   └── 📄 index.ts           # Schema exports
│   │   │   └── 📄 index.ts               # Models main export
│   │   │
│   │   ├── 📁 dto/                       # Data Transfer Objects
│   │   │   ├── 📄 create-user.dto.ts     # Create user DTO
│   │   │   ├── 📄 update-user.dto.ts     # Update user DTO
│   │   │   ├── 📄 user-response.dto.ts   # User response DTO
│   │   │   ├── 📄 user-list.dto.ts       # User list DTO
│   │   │   ├── 📄 user-profile.dto.ts    # User profile DTO
│   │   │   ├── 📄 user-contact.dto.ts    # User contact DTO
│   │   │   ├── 📄 user-preferences.dto.ts # User preferences DTO
│   │   │   ├── 📄 user-search.dto.ts     # User search DTO
│   │   │   ├── 📄 user-filter.dto.ts     # User filter DTO
│   │   │   └── 📄 index.ts               # DTO exports
│   │   │
│   │   ├── 📁 mappers/                   # Entity-DTO Mappers
│   │   │   ├── 📄 user.mapper.ts         # User entity <-> DTO mapper
│   │   │   ├── 📄 profile.mapper.ts      # Profile entity <-> DTO mapper
│   │   │   ├── 📄 contact.mapper.ts      # Contact entity <-> DTO mapper
│   │   │   ├── 📄 address.mapper.ts      # Address entity <-> DTO mapper
│   │   │   ├── 📄 preferences.mapper.ts  # Preferences entity <-> DTO mapper
│   │   │   └── 📄 index.ts               # Mapper exports
│   │   │
│   │   ├── 📁 repositories/              # Repository Implementations
│   │   │   ├── 📄 user.repository.impl.ts    # User repository implementation
│   │   │   ├── 📄 profile.repository.impl.ts # Profile repository implementation
│   │   │   ├── 📄 contact.repository.impl.ts # Contact repository implementation
│   │   │   ├── 📄 session.repository.impl.ts # Session repository implementation
│   │   │   ├── 📄 base.repository.ts      # Base repository with common operations
│   │   │   └── 📄 index.ts               # Repository exports
│   │   │
│   │   ├── 📁 services/                  # Data Services
│   │   │   ├── 📄 user-data.service.ts   # User data operations
│   │   │   ├── 📄 user-query.service.ts  # User query operations
│   │   │   ├── 📄 user-search.service.ts # User search operations
│   │   │   ├── 📄 user-cache.service.ts  # User caching operations
│   │   │   ├── 📄 user-sync.service.ts   # User data synchronization
│   │   │   ├── 📄 user-backup.service.ts # User data backup
│   │   │   ├── 📄 user-migration.service.ts # User data migration
│   │   │   └── 📄 index.ts               # Service exports
│   │   │
│   │   ├── 📁 validators/                # Data Validation
│   │   │   ├── 📄 user.validator.ts      # User data validation
│   │   │   ├── 📄 profile.validator.ts   # Profile data validation
│   │   │   ├── 📄 contact.validator.ts   # Contact data validation
│   │   │   ├── 📄 address.validator.ts   # Address data validation
│   │   │   ├── 📄 preferences.validator.ts # Preferences validation
│   │   │   └── 📄 index.ts               # Validator exports
│   │   │
│   │   ├── 📁 queries/                   # Database Queries
│   │   │   ├── 📄 user-queries.ts        # User-specific queries
│   │   │   ├── 📄 profile-queries.ts     # Profile-specific queries
│   │   │   ├── 📄 search-queries.ts      # Search queries
│   │   │   ├── 📄 analytics-queries.ts   # Analytics queries
│   │   │   ├── 📄 aggregation-queries.ts # Aggregation queries
│   │   │   └── 📄 index.ts               # Query exports
│   │   │
│   │   ├── 📁 migrations/                # Database Migrations
│   │   │   ├── 📄 001-create-users.ts    # Initial user table/collection
│   │   │   ├── 📄 002-add-profiles.ts    # Add profile structure
│   │   │   ├── 📄 003-add-contacts.ts    # Add contact information
│   │   │   ├── 📄 004-add-preferences.ts # Add user preferences
│   │   │   ├── 📄 005-add-sessions.ts    # Add session management
│   │   │   └── 📄 index.ts               # Migration exports
│   │   │
│   │   ├── 📁 seeders/                   # Database Seeders
│   │   │   ├── 📄 admin-users.seeder.ts  # Admin user seeder
│   │   │   ├── 📄 test-users.seeder.ts   # Test user seeder
│   │   │   ├── 📄 demo-users.seeder.ts   # Demo user seeder
│   │   │   ├── 📄 roles.seeder.ts        # User roles seeder
│   │   │   └── 📄 index.ts               # Seeder exports
│   │   │
│   │   ├── 📁 config/                    # Data Configuration
│   │   │   ├── 📄 database.config.ts     # Database configuration
│   │   │   ├── 📄 cache.config.ts        # Cache configuration
│   │   │   ├── 📄 connection.config.ts   # Connection configuration
│   │   │   ├── 📄 indexes.config.ts      # Database indexes
│   │   │   └── 📄 index.ts               # Config exports
│   │   │
│   │   ├── 📁 utils/                     # Data Utilities
│   │   │   ├── 📄 connection.ts          # Database connection utilities
│   │   │   ├── 📄 transaction.ts         # Transaction utilities
│   │   │   ├── 📄 pagination.ts          # Pagination utilities
│   │   │   ├── 📄 sorting.ts             # Sorting utilities
│   │   │   ├── 📄 filtering.ts           # Filtering utilities
│   │   │   ├── 📄 aggregation.ts         # Aggregation utilities
│   │   │   └── 📄 index.ts               # Util exports
│   │   │
│   │   ├── 📁 constants/                 # Data Constants
│   │   │   ├── 📄 collections.ts         # Collection names
│   │   │   ├── 📄 indexes.ts             # Index definitions
│   │   │   ├── 📄 queries.ts             # Query constants
│   │   │   ├── 📄 cache-keys.ts          # Cache key constants
│   │   │   └── 📄 index.ts               # Constants exports
│   │   │
│   │   ├── 📁 types/                     # Data Types
│   │   │   ├── 📄 user-data.types.ts     # User data types
│   │   │   ├── 📄 query.types.ts         # Query types
│   │   │   ├── 📄 filter.types.ts        # Filter types
│   │   │   ├── 📄 pagination.types.ts    # Pagination types
│   │   │   ├── 📄 connection.types.ts    # Connection types
│   │   │   └── 📄 index.ts               # Types exports
│   │   │
│   │   ├── 📁 tests/                     # Data Layer Tests
│   │   │   ├── 📁 models/                # Model tests
│   │   │   │   ├── 📄 user.model.spec.ts     # User model tests
│   │   │   │   ├── 📄 profile.model.spec.ts  # Profile model tests
│   │   │   │   └── 📄 contact.model.spec.ts  # Contact model tests
│   │   │   ├── 📁 repositories/          # Repository tests
│   │   │   │   ├── 📄 user.repository.spec.ts    # User repository tests
│   │   │   │   ├── 📄 profile.repository.spec.ts # Profile repository tests
│   │   │   │   └── 📄 base.repository.spec.ts    # Base repository tests
│   │   │   ├── 📁 services/              # Service tests
│   │   │   │   ├── 📄 user-data.service.spec.ts  # User data service tests
│   │   │   │   ├── 📄 user-query.service.spec.ts # User query service tests
│   │   │   │   └── 📄 user-cache.service.spec.ts # User cache service tests
│   │   │   ├── 📁 mappers/               # Mapper tests
│   │   │   │   ├── 📄 user.mapper.spec.ts    # User mapper tests
│   │   │   │   └── 📄 profile.mapper.spec.ts # Profile mapper tests
│   │   │   ├── 📁 validators/            # Validator tests
│   │   │   │   ├── 📄 user.validator.spec.ts     # User validator tests
│   │   │   │   └── 📄 profile.validator.spec.ts  # Profile validator tests
│   │   │   ├── 📁 queries/               # Query tests
│   │   │   │   ├── 📄 user-queries.spec.ts       # User query tests
│   │   │   │   └── 📄 search-queries.spec.ts     # Search query tests
│   │   │   └── 📁 utils/                 # Utility tests
│   │   │       ├── 📄 connection.spec.ts     # Connection tests
│   │   │       ├── 📄 pagination.spec.ts     # Pagination tests
│   │   │       └── 📄 filtering.spec.ts      # Filtering tests
│   │   │
│   │   └── 📄 index.ts                   # Main data export
│   │
│   ├── 📄 project.json                   # Nx project config
│   ├── 📄 package.json                   # Package config
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 tsconfig.lib.json             # Library TypeScript config
│   ├── 📄 tsconfig.spec.json            # Test TypeScript config
│   ├── 📄 vite.config.ts                # Vite config
│   ├── 📄 vitest.config.ts              # Vitest config
│   └── 📄 README.md                      # Data layer documentation
│
├── 📁 membership/                        # @pfsa/data-membership
│   ├── 📁 src/
│   │   ├── 📁 models/                    # Membership Models
│   │   │   ├── 📁 mongo/                 # MongoDB Models
│   │   │   │   ├── 📄 membership.model.ts    # Membership MongoDB model
│   │   │   │   ├── 📄 subscription.model.ts  # Subscription MongoDB model
│   │   │   │   ├── 📄 payment.model.ts       # Payment MongoDB model
│   │   │   │   ├── 📄 invoice.model.ts       # Invoice MongoDB model
│   │   │   │   ├── 📄 benefit.model.ts       # Benefit MongoDB model
│   │   │   │   ├── 📄 discount.model.ts      # Discount MongoDB model
│   │   │   │   └── 📄 index.ts               # Model exports
│   │   │   ├── 📁 schemas/               # Mongoose Schemas
│   │   │   │   ├── 📄 membership.schema.ts   # Membership schema
│   │   │   │   ├── 📄 subscription.schema.ts # Subscription schema
│   │   │   │   ├── 📄 payment.schema.ts      # Payment schema
│   │   │   │   ├── 📄 invoice.schema.ts      # Invoice schema
│   │   │   │   ├── 📄 benefit.schema.ts      # Benefit schema
│   │   │   │   ├── 📄 discount.schema.ts     # Discount schema
│   │   │   │   └── 📄 index.ts               # Schema exports
│   │   │   └── 📄 index.ts               # Models main export
│   │   │
│   │   ├── 📁 dto/                       # Data Transfer Objects
│   │   │   ├── 📄 create-membership.dto.ts   # Create membership DTO
│   │   │   ├── 📄 update-membership.dto.ts   # Update membership DTO
│   │   │   ├── 📄 membership-response.dto.ts # Membership response DTO
│   │   │   ├── 📄 payment-request.dto.ts     # Payment request DTO
│   │   │   ├── 📄 payment-response.dto.ts    # Payment response DTO
│   │   │   ├── 📄 invoice.dto.ts             # Invoice DTO
│   │   │   ├── 📄 subscription.dto.ts        # Subscription DTO
│   │   │   ├── 📄 benefit.dto.ts             # Benefit DTO
│   │   │   └── 📄 index.ts               # DTO exports
│   │   │
│   │   ├── 📁 mappers/                   # Entity-DTO Mappers
│   │   │   ├── 📄 membership.mapper.ts   # Membership mapper
│   │   │   ├── 📄 payment.mapper.ts      # Payment mapper
│   │   │   ├── 📄 invoice.mapper.ts      # Invoice mapper
│   │   │   ├── 📄 subscription.mapper.ts # Subscription mapper
│   │   │   ├── 📄 benefit.mapper.ts      # Benefit mapper
│   │   │   └── 📄 index.ts               # Mapper exports
│   │   │
│   │   ├── 📁 repositories/              # Repository Implementations
│   │   │   ├── 📄 membership.repository.impl.ts  # Membership repository
│   │   │   ├── 📄 payment.repository.impl.ts     # Payment repository
│   │   │   ├── 📄 invoice.repository.impl.ts     # Invoice repository
│   │   │   ├── 📄 subscription.repository.impl.ts # Subscription repository
│   │   │   ├── 📄 benefit.repository.impl.ts     # Benefit repository
│   │   │   └── 📄 index.ts               # Repository exports
│   │   │
│   │   ├── 📁 services/                  # Data Services
│   │   │   ├── 📄 membership-data.service.ts # Membership data operations
│   │   │   ├── 📄 payment-data.service.ts    # Payment data operations
│   │   │   ├── 📄 billing-data.service.ts    # Billing data operations
│   │   │   ├── 📄 subscription-data.service.ts # Subscription operations
│   │   │   ├── 📄 reporting-data.service.ts  # Reporting operations
│   │   │   ├── 📄 analytics-data.service.ts  # Analytics operations
│   │   │   └── 📄 index.ts               # Service exports
│   │   │
│   │   ├── 📁 validators/                # Data Validation
│   │   │   ├── 📄 membership.validator.ts    # Membership validation
│   │   │   ├── 📄 payment.validator.ts       # Payment validation
│   │   │   ├── 📄 invoice.validator.ts       # Invoice validation
│   │   │   ├── 📄 subscription.validator.ts  # Subscription validation
│   │   │   ├── 📄 benefit.validator.ts       # Benefit validation
│   │   │   └── 📄 index.ts               # Validator exports
│   │   │
│   │   ├── 📁 queries/                   # Database Queries
│   │   │   ├── 📄 membership-queries.ts  # Membership queries
│   │   │   ├── 📄 payment-queries.ts     # Payment queries
│   │   │   ├── 📄 billing-queries.ts     # Billing queries
│   │   │   ├── 📄 reporting-queries.ts   # Reporting queries
│   │   │   ├── 📄 analytics-queries.ts   # Analytics queries
│   │   │   └── 📄 index.ts               # Query exports
│   │   │
│   │   ├── 📁 migrations/                # Database Migrations
│   │   │   ├── 📄 001-create-memberships.ts  # Initial membership structure
│   │   │   ├── 📄 002-add-payments.ts        # Add payment system
│   │   │   ├── 📄 003-add-invoices.ts        # Add invoice system
│   │   │   ├── 📄 004-add-subscriptions.ts   # Add subscription system
│   │   │   ├── 📄 005-add-benefits.ts        # Add benefits system
│   │   │   └── 📄 index.ts               # Migration exports
│   │   │
│   │   ├── 📁 seeders/                   # Database Seeders
│   │   │   ├── 📄 membership-tiers.seeder.ts # Membership tiers seeder
│   │   │   ├── 📄 benefits.seeder.ts         # Benefits seeder
│   │   │   ├── 📄 payment-methods.seeder.ts  # Payment methods seeder
│   │   │   ├── 📄 discounts.seeder.ts        # Discounts seeder
│   │   │   └── 📄 index.ts               # Seeder exports
│   │   │
│   │   ├── 📁 config/                    # Data Configuration
│   │   │   ├── 📄 payment-gateways.config.ts # Payment gateway config
│   │   │   ├── 📄 billing.config.ts          # Billing configuration
│   │   │   ├── 📄 currency.config.ts         # Currency configuration
│   │   │   └── 📄 index.ts               # Config exports
│   │   │
│   │   ├── 📁 utils/                     # Data Utilities
│   │   │   ├── 📄 payment-processing.ts  # Payment processing utilities
│   │   │   ├── 📄 billing-calculations.ts # Billing calculation utilities
│   │   │   ├── 📄 currency-conversion.ts # Currency conversion utilities
│   │   │   ├── 📄 invoice-generation.ts  # Invoice generation utilities
│   │   │   └── 📄 index.ts               # Util exports
│   │   │
│   │   ├── 📁 constants/                 # Data Constants
│   │   │   ├── 📄 membership-types.ts    # Membership type constants
│   │   │   ├── 📄 payment-statuses.ts    # Payment status constants
│   │   │   ├── 📄 billing-cycles.ts      # Billing cycle constants
│   │   │   ├── 📄 currencies.ts          # Currency constants
│   │   │   └── 📄 index.ts               # Constants exports
│   │   │
│   │   ├── 📁 types/                     # Data Types
│   │   │   ├── 📄 membership-data.types.ts # Membership data types
│   │   │   ├── 📄 payment-data.types.ts    # Payment data types
│   │   │   ├── 📄 billing-data.types.ts    # Billing data types
│   │   │   └── 📄 index.ts               # Types exports
│   │   │
│   │   ├── 📁 tests/                     # Data Layer Tests
│   │   │   ├── 📁 models/                # Model tests
│   │   │   ├── 📁 repositories/          # Repository tests
│   │   │   ├── 📁 services/              # Service tests
│   │   │   ├── 📁 mappers/               # Mapper tests
│   │   │   ├── 📁 validators/            # Validator tests
│   │   │   ├── 📁 queries/               # Query tests
│   │   │   └── 📁 utils/                 # Utility tests
│   │   │
│   │   └── 📄 index.ts                   # Main data export
│   │
│   ├── 📄 project.json                   # Nx project config
│   ├── 📄 package.json                   # Package config
│   ├── 📄 tsconfig.json                  # TypeScript config
│   ├── 📄 tsconfig.lib.json             # Library TypeScript config
│   ├── 📄 tsconfig.spec.json            # Test TypeScript config
│   ├── 📄 vite.config.ts                # Vite config
│   ├── 📄 vitest.config.ts              # Vitest config
│   └── 📄 README.md                      # Data layer documentation
│
└── 📁 article/                           # @pfsa/data-article
    ├── 📁 src/
    │   ├── 📁 models/                    # Article Models
    │   │   ├── 📁 mongo/                 # MongoDB Models
    │   │   │   ├── 📄 article.model.ts   # Article MongoDB model
    │   │   │   ├── 📄 category.model.ts  # Category MongoDB model
    │   │   │   ├── 📄 tag.model.ts       # Tag MongoDB model
    │   │   │   ├── 📄 comment.model.ts   # Comment MongoDB model
    │   │   │   ├── 📄 media.model.ts     # Media MongoDB model
    │   │   │   ├── 📄 version.model.ts   # Version MongoDB model
    │   │   │   └── 📄 index.ts           # Model exports
    │   │   ├── 📁 schemas/               # Mongoose Schemas
    │   │   │   ├── 📄 article.schema.ts  # Article schema
    │   │   │   ├── 📄 category.schema.ts # Category schema
    │   │   │   ├── 📄 tag.schema.ts      # Tag schema
    │   │   │   ├── 📄 comment.schema.ts  # Comment schema
    │   │   │   ├── 📄 media.schema.ts    # Media schema
    │   │   │   ├── 📄 version.schema.ts  # Version schema
    │   │   │   └── 📄 index.ts           # Schema exports
    │   │   └── 📄 index.ts               # Models main export
    │   │
    │   ├── 📁 dto/                       # Data Transfer Objects
    │   │   ├── 📄 create-article.dto.ts  # Create article DTO
    │   │   ├── 📄 update-article.dto.ts  # Update article DTO
    │   │   ├── 📄 article-response.dto.ts # Article response DTO
    │   │   ├── 📄 article-list.dto.ts    # Article list DTO
    │   │   ├── 📄 article-search.dto.ts  # Article search DTO
    │   │   ├── 📄 category.dto.ts        # Category DTO
    │   │   ├── 📄 tag.dto.ts             # Tag DTO
    │   │   ├── 📄 comment.dto.ts         # Comment DTO
    │   │   └── 📄 index.ts               # DTO exports
    │   │
    │   ├── 📁 mappers/                   # Entity-DTO Mappers
    │   │   ├── 📄 article.mapper.ts      # Article mapper
    │   │   ├── 📄 category.mapper.ts     # Category mapper
    │   │   ├── 📄 tag.mapper.ts          # Tag mapper
    │   │   ├── 📄 comment.mapper.ts      # Comment mapper
    │   │   ├── 📄 media.mapper.ts        # Media mapper
    │   │   └── 📄 index.ts               # Mapper exports
    │   │
    │   ├── 📁 repositories/              # Repository Implementations
    │   │   ├── 📄 article.repository.impl.ts # Article repository
    │   │   ├── 📄 category.repository.impl.ts # Category repository
    │   │   ├── 📄 tag.repository.impl.ts     # Tag repository
    │   │   ├── 📄 comment.repository.impl.ts # Comment repository
    │   │   ├── 📄 media.repository.impl.ts   # Media repository
    │   │   └── 📄 index.ts               # Repository exports
    │   │
    │   ├── 📁 services/                  # Data Services
    │   │   ├── 📄 article-data.service.ts    # Article data operations
    │   │   ├── 📄 article-search.service.ts  # Article search operations
    │   │   ├── 📄 content-processing.service.ts # Content processing
    │   │   ├── 📄 media-processing.service.ts   # Media processing
    │   │   ├── 📄 seo-data.service.ts        # SEO data operations
    │   │   ├── 📄 analytics-data.service.ts  # Analytics operations
    │   │   └── 📄 index.ts               # Service exports
    │   │
    │   ├── 📁 validators/                # Data Validation
    │   │   ├── 📄 article.validator.ts   # Article validation
    │   │   ├── 📄 category.validator.ts  # Category validation
    │   │   ├── 📄 tag.validator.ts       # Tag validation
    │   │   ├── 📄 comment.validator.ts   # Comment validation
    │   │   ├── 📄 media.validator.ts     # Media validation
    │   │   └── 📄 index.ts               # Validator exports
    │   │
    │   ├── 📁 queries/                   # Database Queries
    │   │   ├── 📄 article-queries.ts     # Article queries
    │   │   ├── 📄 search-queries.ts      # Search queries
    │   │   ├── 📄 category-queries.ts    # Category queries
    │   │   ├── 📄 tag-queries.ts         # Tag queries
    │   │   ├── 📄 analytics-queries.ts   # Analytics queries
    │   │   └── 📄 index.ts               # Query exports
    │   │
    │   ├── 📁 migrations/                # Database Migrations
    │   │   ├── 📄 001-create-articles.ts # Initial article structure
    │   │   ├── 📄 002-add-categories.ts  # Add category system
    │   │   ├── 📄 003-add-tags.ts        # Add tagging system
    │   │   ├── 📄 004-add-comments.ts    # Add comment system
    │   │   ├── 📄 005-add-media.ts       # Add media system
    │   │   └── 📄 index.ts               # Migration exports
    │   │
    │   ├── 📁 seeders/                   # Database Seeders
    │   │   ├── 📄 categories.seeder.ts   # Categories seeder
    │   │   ├── 📄 tags.seeder.ts         # Tags seeder
    │   │   ├── 📄 sample-articles.seeder.ts # Sample articles seeder
    │   │   └── 📄 index.ts               # Seeder exports
    │   │
    │   ├── 📁 config/                    # Data Configuration
    │   │   ├── 📄 content.config.ts      # Content configuration
    │   │   ├── 📄 media.config.ts        # Media configuration
    │   │   ├── 📄 search.config.ts       # Search configuration
    │   │   └── 📄 index.ts               # Config exports
    │   │
    │   ├── 📁 utils/                     # Data Utilities
    │   │   ├── 📄 content-processing.ts  # Content processing utilities
    │   │   ├── 📄 slug-generation.ts     # Slug generation utilities
    │   │   ├── 📄 text-analysis.ts       # Text analysis utilities
    │   │   ├── 📄 search-indexing.ts     # Search indexing utilities
    │   │   └── 📄 index.ts               # Util exports
    │   │
    │   ├── 📁 constants/                 # Data Constants
    │   │   ├── 📄 article-statuses.ts    # Article status constants
    │   │   ├── 📄 content-types.ts       # Content type constants
    │   │   ├── 📄 media-types.ts         # Media type constants
    │   │   └── 📄 index.ts               # Constants exports
    │   │
    │   ├── 📁 types/                     # Data Types
    │   │   ├── 📄 article-data.types.ts  # Article data types
    │   │   ├── 📄 content-data.types.ts  # Content data types
    │   │   ├── 📄 media-data.types.ts    # Media data types
    │   │   └── 📄 index.ts               # Types exports
    │   │
    │   ├── 📁 tests/                     # Data Layer Tests
    │   │   ├── 📁 models/                # Model tests
    │   │   ├── 📁 repositories/          # Repository tests
    │   │   ├── 📁 services/              # Service tests
    │   │   ├── 📁 mappers/               # Mapper tests
    │   │   ├── 📁 validators/            # Validator tests
    │   │   ├── 📁 queries/               # Query tests
    │   │   └── 📁 utils/                 # Utility tests
    │   │
    │   └── 📄 index.ts                   # Main data export
    │
    ├── 📄 project.json                   # Nx project config
    ├── 📄 package.json                   # Package config
    ├── 📄 tsconfig.json                  # TypeScript config
    ├── 📄 tsconfig.lib.json             # Library TypeScript config
    ├── 📄 tsconfig.spec.json            # Test TypeScript config
    ├── 📄 vite.config.ts                # Vite config
    ├── 📄 vitest.config.ts              # Vitest config
    └── 📄 README.md                      # Data layer documentation
```