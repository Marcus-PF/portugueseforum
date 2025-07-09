# 🧪 @pfsa/testing Library - Enhanced Structure

```
📁 libs/testing/                          # @pfsa/testing - Testing Utilities & Helpers
├── 📁 src/
│   ├── 📁 setup/                         # Test Setup & Configuration
│   │   ├── 📄 global-setup.ts           # Global test setup
│   │   ├── 📄 jest-setup.ts             # Jest configuration setup
│   │   ├── 📄 vitest-setup.ts           # Vitest configuration setup
│   │   ├── 📄 playwright-setup.ts       # Playwright E2E setup
│   │   ├── 📄 storybook-setup.ts        # Storybook testing setup
│   │   ├── 📄 msw-setup.ts              # MSW (Mock Service Worker) setup
│   │   ├── 📄 test-environment.ts       # Test environment configuration
│   │   └── 📄 index.ts                  # Setup exports
│   │
│   ├── 📁 mocks/                        # Mock Data & Services
│   │   ├── 📁 api/                      # API Mock Data
│   │   │   ├── 📄 auth-mocks.ts         # Authentication mock data
│   │   │   ├── 📄 user-mocks.ts         # User mock data
│   │   │   ├── 📄 membership-mocks.ts   # Membership mock data
│   │   │   ├── 📄 article-mocks.ts      # Article mock data
│   │   │   ├── 📄 forum-mocks.ts        # Forum mock data
│   │   │   ├── 📄 events-mocks.ts       # Events mock data
│   │   │   ├── 📄 media-mocks.ts        # Media mock data
│   │   │   ├── 📄 admin-mocks.ts        # Admin mock data
│   │   │   └── 📄 index.ts              # API mocks exports
│   │   │
│   │   ├── 📁 cultural/                 # Portuguese Cultural Mock Data
│   │   │   ├── 📄 portuguese-users.ts   # Portuguese user mock data
│   │   │   ├── 📄 cultural-events.ts    # Portuguese cultural events
│   │   │   ├── 📄 holidays.ts           # Portuguese holidays
│   │   │   ├── 📄 locations.ts          # Portuguese/SA locations
│   │   │   ├── 📄 cuisine.ts            # Portuguese cuisine data
│   │   │   ├── 📄 traditions.ts         # Portuguese traditions
│   │   │   └── 📄 index.ts              # Cultural mocks exports
│   │   │
│   │   ├── 📁 services/                 # Service Mocks
│   │   │   ├── 📄 auth-service.mock.ts  # Auth service mock
│   │   │   ├── 📄 api-client.mock.ts    # API client mock
│   │   │   ├── 📄 i18n-service.mock.ts  # i18n service mock
│   │   │   ├── 📄 storage.mock.ts       # Storage service mock
│   │   │   ├── 📄 notification.mock.ts  # Notification service mock
│   │   │   ├── 📄 payment.mock.ts       # Payment service mock
│   │   │   └── 📄 index.ts              # Service mocks exports
│   │   │
│   │   ├── 📁 components/               # Component Mocks
│   │   │   ├── 📄 ui-components.mock.ts # UI component mocks
│   │   │   ├── 📄 auth-components.mock.ts # Auth component mocks
│   │   │   ├── 📄 form-components.mock.ts # Form component mocks
│   │   │   └── 📄 index.ts              # Component mocks exports
│   │   │
│   │   ├── 📁 browser/                  # Browser API Mocks
│   │   │   ├── 📄 localStorage.mock.ts  # localStorage mock
│   │   │   ├── 📄 sessionStorage.mock.ts # sessionStorage mock
│   │   │   ├── 📄 fetch.mock.ts         # Fetch API mock
│   │   │   ├── 📄 geolocation.mock.ts   # Geolocation API mock
│   │   │   ├── 📄 notification.mock.ts  # Notification API mock
│   │   │   ├── 📄 intersectionObserver.mock.ts # IntersectionObserver mock
│   │   │   └── 📄 index.ts              # Browser mocks exports
│   │   │
│   │   └── 📄 index.ts                  # All mocks exports
│   │
│   ├── 📁 factories/                    # Test Data Factories
│   │   ├── 📁 entities/                 # Entity Factories
│   │   │   ├── 📄 user.factory.ts       # User entity factory
│   │   │   ├── 📄 article.factory.ts    # Article entity factory
│   │   │   ├── 📄 membership.factory.ts # Membership entity factory
│   │   │   ├── 📄 forum-post.factory.ts # Forum post factory
│   │   │   ├── 📄 event.factory.ts      # Event entity factory
│   │   │   ├── 📄 media.factory.ts      # Media entity factory
│   │   │   ├── 📄 comment.factory.ts    # Comment entity factory
│   │   │   └── 📄 index.ts              # Entity factories exports
│   │   │
│   │   ├── 📁 api/                      # API Response Factories
│   │   │   ├── 📄 auth-responses.factory.ts # Auth response factory
│   │   │   ├── 📄 api-responses.factory.ts # Generic API response factory
│   │   │   ├── 📄 error-responses.factory.ts # Error response factory
│   │   │   ├── 📄 pagination.factory.ts # Pagination factory
│   │   │   └── 📄 index.ts              # API factories exports
│   │   │
│   │   ├── 📁 forms/                    # Form Data Factories
│   │   │   ├── 📄 login-form.factory.ts # Login form factory
│   │   │   ├── 📄 register-form.factory.ts # Registration form factory
│   │   │   ├── 📄 profile-form.factory.ts # Profile form factory
│   │   │   ├── 📄 article-form.factory.ts # Article form factory
│   │   │   └── 📄 index.ts              # Form factories exports
│   │   │
│   │   ├── 📁 cultural/                 # Portuguese Cultural Factories
│   │   │   ├── 📄 portuguese-address.factory.ts # Portuguese address factory
│   │   │   ├── 📄 south-african-address.factory.ts # SA address factory
│   │   │   ├── 📄 portuguese-phone.factory.ts # Portuguese phone factory
│   │   │   ├── 📄 cultural-event.factory.ts # Cultural event factory
│   │   │   └── 📄 index.ts              # Cultural factories exports
│   │   │
│   │   └── 📄 index.ts                  # All factories exports
│   │
│   ├── 📁 utilities/                    # Test Utilities
│   │   ├── 📁 react/                    # React Testing Utilities
│   │   │   ├── 📄 render-utils.tsx      # Custom render utilities
│   │   │   ├── 📄 hook-utils.ts         # Hook testing utilities
│   │   │   ├── 📄 component-utils.tsx   # Component testing utilities
│   │   │   ├── 📄 router-utils.tsx      # Router testing utilities
│   │   │   ├── 📄 context-utils.tsx     # Context testing utilities
│   │   │   ├── 📄 form-utils.tsx        # Form testing utilities
│   │   │   └── 📄 index.ts              # React utilities exports
│   │   │
│   │   ├── 📁 api/                      # API Testing Utilities
│   │   │   ├── 📄 api-test-utils.ts     # API testing helpers
│   │   │   ├── 📄 http-utils.ts         # HTTP testing utilities
│   │   │   ├── 📄 auth-utils.ts         # Auth testing utilities
│   │   │   ├── 📄 request-utils.ts      # Request testing utilities
│   │   │   ├── 📄 response-utils.ts     # Response testing utilities
│   │   │   └── 📄 index.ts              # API utilities exports
│   │   │
│   │   ├── 📁 database/                 # Database Testing Utilities
│   │   │   ├── 📄 db-test-utils.ts      # Database testing helpers
│   │   │   ├── 📄 migration-utils.ts    # Migration testing utilities
│   │   │   ├── 📄 seed-utils.ts         # Database seeding utilities
│   │   │   ├── 📄 cleanup-utils.ts      # Database cleanup utilities
│   │   │   └── 📄 index.ts              # Database utilities exports
│   │   │
│   │   ├── 📁 e2e/                      # E2E Testing Utilities
│   │   │   ├── 📄 playwright-utils.ts   # Playwright utilities
│   │   │   ├── 📄 page-objects.ts       # Page object utilities
│   │   │   ├── 📄 screenshot-utils.ts   # Screenshot utilities
│   │   │   ├── 📄 wait-utils.ts         # Wait condition utilities
│   │   │   ├── 📄 navigation-utils.ts   # Navigation utilities
│   │   │   └── 📄 index.ts              # E2E utilities exports
│   │   │
│   │   ├── 📁 performance/              # Performance Testing Utilities
│   │   │   ├── 📄 benchmark-utils.ts    # Benchmarking utilities
│   │   │   ├── 📄 memory-utils.ts       # Memory testing utilities
│   │   │   ├── 📄 timing-utils.ts       # Timing utilities
│   │   │   └── 📄 index.ts              # Performance utilities exports
│   │   │
│   │   ├── 📁 accessibility/            # Accessibility Testing Utilities
│   │   │   ├── 📄 a11y-utils.ts         # Accessibility testing utilities
│   │   │   ├── 📄 axe-utils.ts          # Axe-core testing utilities
│   │   │   ├── 📄 keyboard-utils.ts     # Keyboard navigation testing
│   │   │   ├── 📄 screen-reader-utils.ts # Screen reader testing
│   │   │   └── 📄 index.ts              # A11y utilities exports
│   │   │
│   │   └── 📄 index.ts                  # All utilities exports
│   │
│   ├── 📁 fixtures/                     # Test Fixtures
│   │   ├── 📁 files/                    # File Fixtures
│   │   │   ├── 📄 images.ts             # Image file fixtures
│   │   │   ├── 📄 documents.ts          # Document file fixtures
│   │   │   ├── 📄 videos.ts             # Video file fixtures
│   │   │   ├── 📄 audio.ts              # Audio file fixtures
│   │   │   └── 📄 index.ts              # File fixtures exports
│   │   │
│   │   ├── 📁 data/                     # Data Fixtures
│   │   │   ├── 📄 users.json            # User data fixtures
│   │   │   ├── 📄 articles.json         # Article data fixtures
│   │   │   ├── 📄 memberships.json      # Membership data fixtures
│   │   │   ├── 📄 events.json           # Event data fixtures
│   │   │   ├── 📄 portuguese-content.json # Portuguese content fixtures
│   │   │   └── 📄 index.ts              # Data fixtures exports
│   │   │
│   │   ├── 📁 html/                     # HTML Fixtures
│   │   │   ├── 📄 email-templates.ts    # Email template fixtures
│   │   │   ├── 📄 page-fragments.ts     # HTML fragment fixtures
│   │   │   └── 📄 index.ts              # HTML fixtures exports
│   │   │
│   │   └── 📄 index.ts                  # All fixtures exports
│   │
│   ├── 📁 matchers/                     # Custom Jest/Vitest Matchers
│   │   ├── 📄 dom-matchers.ts           # DOM-specific matchers
│   │   ├── 📄 api-matchers.ts           # API response matchers
│   │   ├── 📄 auth-matchers.ts          # Authentication matchers
│   │   ├── 📄 i18n-matchers.ts          # i18n-specific matchers
│   │   ├── 📄 accessibility-matchers.ts # Accessibility matchers
│   │   ├── 📄 performance-matchers.ts   # Performance matchers
│   │   ├── 📄 portuguese-matchers.ts    # Portuguese-specific matchers
│   │   └── 📄 index.ts                  # All matchers exports
│   │
│   ├── 📁 generators/                   # Test Code Generators
│   │   ├── 📄 test-generator.ts         # Generic test generator
│   │   ├── 📄 factory-generator.ts      # Factory generator
│   │   ├── 📄 mock-generator.ts         # Mock generator
│   │   ├── 📄 fixture-generator.ts      # Fixture generator
│   │   ├── 📄 e2e-generator.ts          # E2E test generator
│   │   └── 📄 index.ts                  # Generators exports
│   │
│   ├── 📁 providers/                    # Test Providers
│   │   ├── 📄 test-provider.tsx         # Main test provider
│   │   ├── 📄 auth-test-provider.tsx    # Auth test provider
│   │   ├── 📄 i18n-test-provider.tsx    # i18n test provider
│   │   ├── 📄 router-test-provider.tsx  # Router test provider
│   │   ├── 📄 theme-test-provider.tsx   # Theme test provider
│   │   └── 📄 index.ts                  # Test providers exports
│   │
│   ├── 📁 servers/                      # Test Servers
│   │   ├── 📄 mock-server.ts            # MSW mock server
│   │   ├── 📄 test-api-server.ts        # Test API server
│   │   ├── 📄 websocket-server.ts       # WebSocket test server
│   │   ├── 📄 file-server.ts            # File serving test server
│   │   └── 📄 index.ts                  # Test servers exports
│   │
│   ├── 📁 reporters/                    # Custom Test Reporters
│   │   ├── 📄 coverage-reporter.ts      # Coverage reporter
│   │   ├── 📄 performance-reporter.ts   # Performance reporter
│   │   ├── 📄 accessibility-reporter.ts # Accessibility reporter
│   │   ├── 📄 visual-reporter.ts        # Visual regression reporter
│   │   └── 📄 index.ts                  # Reporters exports
│   │
│   ├── 📁 configs/                      # Test Configurations
│   │   ├── 📄 jest.config.ts            # Jest configuration
│   │   ├── 📄 vitest.config.ts          # Vitest configuration
│   │   ├── 📄 playwright.config.ts      # Playwright configuration
│   │   ├── 📄 storybook.config.ts       # Storybook test configuration
│   │   ├── 📄 coverage.config.ts        # Coverage configuration
│   │   ├── 📄 e2e.config.ts             # E2E test configuration
│   │   └── 📄 index.ts                  # Config exports
│   │
│   ├── 📁 helpers/                      # Test Helpers
│   │   ├── 📄 test-helpers.ts           # General test helpers
│   │   ├── 📄 async-helpers.ts          # Async testing helpers
│   │   ├── 📄 timer-helpers.ts          # Timer testing helpers
│   │   ├── 📄 event-helpers.ts          # Event testing helpers
│   │   ├── 📄 file-helpers.ts           # File testing helpers
│   │   ├── 📄 network-helpers.ts        # Network testing helpers
│   │   ├── 📄 portuguese-helpers.ts     # Portuguese-specific helpers
│   │   └── 📄 index.ts                  # Helpers exports
│   │
│   ├── 📁 types/                        # Testing Types
│   │   ├── 📄 test.types.ts             # Core testing types
│   │   ├── 📄 mock.types.ts             # Mock types
│   │   ├── 📄 factory.types.ts          # Factory types
│   │   ├── 📄 fixture.types.ts          # Fixture types
│   │   ├── 📄 matcher.types.ts          # Custom matcher types
│   │   ├── 📄 e2e.types.ts              # E2E testing types
│   │   └── 📄 index.ts                  # Types exports
│   │
│   ├── 📁 constants/                    # Testing Constants
│   │   ├── 📄 test.constants.ts         # General test constants
│   │   ├── 📄 timeout.constants.ts      # Timeout constants
│   │   ├── 📄 selector.constants.ts     # CSS selector constants
│   │   ├── 📄 url.constants.ts          # Test URL constants
│   │   ├── 📄 data.constants.ts         # Test data constants
│   │   └── 📄 index.ts                  # Constants exports
│   │
│   ├── 📁 plugins/                      # Testing Plugins
│   │   ├── 📄 coverage-plugin.ts        # Coverage plugin
│   │   ├── 📄 screenshot-plugin.ts      # Screenshot plugin
│   │   ├── 📄 accessibility-plugin.ts   # Accessibility plugin
│   │   ├── 📄 performance-plugin.ts     # Performance plugin
│   │   └── 📄 index.ts                  # Plugins exports
│   │
│   ├── 📁 templates/                    # Test Templates
│   │   ├── 📄 unit-test.template.ts     # Unit test template
│   │   ├── 📄 integration-test.template.ts # Integration test template
│   │   ├── 📄 e2e-test.template.ts      # E2E test template
│   │   ├── 📄 component-test.template.tsx # Component test template
│   │   └── 📄 index.ts                  # Templates exports
│   │
│   ├── 📁 validators/                   # Test Validators
│   │   ├── 📄 schema-validators.ts      # Schema validation helpers
│   │   ├── 📄 response-validators.ts    # Response validation helpers
│   │   ├── 📄 form-validators.ts        # Form validation helpers
│   │   └── 📄 index.ts                  # Validators exports
│   │
│   ├── 📁 tests/                        # Testing Library Tests
│   │   ├── 📁 utilities/                # Utility tests
│   │   │   ├── 📄 render-utils.test.ts  # Render utilities tests
│   │   │   ├── 📄 api-utils.test.ts     # API utilities tests
│   │   │   └── 📄 mock-utils.test.ts    # Mock utilities tests
│   │   ├── 📁 factories/                # Factory tests
│   │   │   ├── 📄 user-factory.test.ts  # User factory tests
│   │   │   └── 📄 article-factory.test.ts # Article factory tests
│   │   ├── 📁 matchers/                 # Matcher tests
│   │   │   ├── 📄 dom-matchers.test.ts  # DOM matcher tests
│   │   │   └── 📄 api-matchers.test.ts  # API matcher tests
│   │   ├── 📄 setup.ts                  # Test setup
│   │   └── 📄 test-utils.ts             # Testing utilities
│   │
│   └── 📄 index.ts                      # Main testing library export
│
├── 📄 project.json                      # Nx project config
├── 📄 package.json                      # Package config
├── 📄 tsconfig.json                     # TypeScript config
├── 📄 tsconfig.lib.json                 # Library TypeScript config
├── 📄 tsconfig.spec.json                # Test TypeScript config
├── 📄 jest.config.ts                    # Jest configuration
├── 📄 vitest.config.ts                  # Vitest configuration
├── 📄 playwright.config.ts              # Playwright configuration
└── 📄 README.md                         # Testing library documentation
```