# 🌐 @pfsa/i18n Library - Enhanced Structure

```
📁 libs/i18n/                            # @pfsa/i18n - Internationalization Layer
├── 📁 src/
│   ├── 📁 locales/                       # Language Files & Translations
│   │   ├── 📁 pt/                        # Portuguese (Portugal/Brazil)
│   │   │   ├── 📁 common/                # Common translations
│   │   │   │   ├── 📄 ui.json            # UI elements (buttons, labels)
│   │   │   │   ├── 📄 navigation.json    # Navigation menus
│   │   │   │   ├── 📄 forms.json         # Form labels and validation
│   │   │   │   ├── 📄 actions.json       # Action buttons and CTAs
│   │   │   │   ├── 📄 messages.json      # System messages
│   │   │   │   ├── 📄 errors.json        # Error messages
│   │   │   │   ├── 📄 validation.json    # Validation messages
│   │   │   │   └── 📄 index.ts           # Common translations export
│   │   │   │
│   │   │   ├── 📁 auth/                  # Authentication translations
│   │   │   │   ├── 📄 login.json         # Login page translations
│   │   │   │   ├── 📄 register.json      # Registration translations
│   │   │   │   ├── 📄 passwords.json     # Password-related translations
│   │   │   │   ├── 📄 two-factor.json    # 2FA translations
│   │   │   │   ├── 📄 oauth.json         # OAuth provider translations
│   │   │   │   └── 📄 index.ts           # Auth translations export
│   │   │   │
│   │   │   ├── 📁 user/                  # User management translations
│   │   │   │   ├── 📄 profile.json       # User profile translations
│   │   │   │   ├── 📄 settings.json      # User settings translations
│   │   │   │   ├── 📄 preferences.json   # User preferences
│   │   │   │   ├── 📄 dashboard.json     # User dashboard
│   │   │   │   └── 📄 index.ts           # User translations export
│   │   │   │
│   │   │   ├── 📁 membership/            # Membership translations
│   │   │   │   ├── 📄 plans.json         # Membership plans
│   │   │   │   ├── 📄 billing.json       # Billing translations
│   │   │   │   ├── 📄 payments.json      # Payment translations
│   │   │   │   ├── 📄 benefits.json      # Membership benefits
│   │   │   │   └── 📄 index.ts           # Membership translations export
│   │   │   │
│   │   │   ├── 📁 forum/                 # Forum translations
│   │   │   │   ├── 📄 posts.json         # Forum post translations
│   │   │   │   ├── 📄 topics.json        # Forum topics
│   │   │   │   ├── 📄 comments.json      # Comment translations
│   │   │   │   ├── 📄 moderation.json    # Moderation translations
│   │   │   │   ├── 📄 categories.json    # Forum categories
│   │   │   │   └── 📄 index.ts           # Forum translations export
│   │   │   │
│   │   │   ├── 📁 articles/              # Article translations
│   │   │   │   ├── 📄 content.json       # Article content translations
│   │   │   │   ├── 📄 categories.json    # Article categories
│   │   │   │   ├── 📄 publishing.json    # Publishing translations
│   │   │   │   ├── 📄 comments.json      # Article comments
│   │   │   │   └── 📄 index.ts           # Article translations export
│   │   │   │
│   │   │   ├── 📁 events/                # Events translations
│   │   │   │   ├── 📄 calendar.json      # Calendar translations
│   │   │   │   ├── 📄 events.json        # Event translations
│   │   │   │   ├── 📄 rsvp.json          # RSVP translations
│   │   │   │   ├── 📄 cultural.json      # Cultural event translations
│   │   │   │   └── 📄 index.ts           # Events translations export
│   │   │   │
│   │   │   ├── 📁 admin/                 # Admin translations
│   │   │   │   ├── 📄 dashboard.json     # Admin dashboard
│   │   │   │   ├── 📄 users.json         # User management
│   │   │   │   ├── 📄 content.json       # Content management
│   │   │   │   ├── 📄 analytics.json     # Analytics translations
│   │   │   │   ├── 📄 settings.json      # Admin settings
│   │   │   │   └── 📄 index.ts           # Admin translations export
│   │   │   │
│   │   │   ├── 📁 cultural/              # Portuguese cultural translations
│   │   │   │   ├── 📄 heritage.json      # Cultural heritage
│   │   │   │   ├── 📄 traditions.json    # Portuguese traditions
│   │   │   │   ├── 📄 holidays.json      # Portuguese holidays
│   │   │   │   ├── 📄 food.json          # Portuguese cuisine
│   │   │   │   ├── 📄 music.json         # Portuguese music/fado
│   │   │   │   ├── 📄 places.json        # Portuguese places
│   │   │   │   └── 📄 index.ts           # Cultural translations export
│   │   │   │
│   │   │   └── 📄 index.ts               # All Portuguese translations
│   │   │
│   │   ├── 📁 en/                        # English translations
│   │   │   ├── 📁 common/                # Common English translations
│   │   │   │   ├── 📄 ui.json            # UI elements
│   │   │   │   ├── 📄 navigation.json    # Navigation menus
│   │   │   │   ├── 📄 forms.json         # Form translations
│   │   │   │   ├── 📄 actions.json       # Action buttons
│   │   │   │   ├── 📄 messages.json      # System messages
│   │   │   │   ├── 📄 errors.json        # Error messages
│   │   │   │   ├── 📄 validation.json    # Validation messages
│   │   │   │   └── 📄 index.ts           # Common translations export
│   │   │   │
│   │   │   ├── 📁 auth/                  # Authentication translations
│   │   │   ├── 📁 user/                  # User management translations
│   │   │   ├── 📁 membership/            # Membership translations
│   │   │   ├── 📁 forum/                 # Forum translations
│   │   │   ├── 📁 articles/              # Article translations
│   │   │   ├── 📁 events/                # Events translations
│   │   │   ├── 📁 admin/                 # Admin translations
│   │   │   ├── 📁 cultural/              # Cultural context translations
│   │   │   │   ├── 📄 portuguese-culture.json # About Portuguese culture
│   │   │   │   ├── 📄 south-africa.json  # South African context
│   │   │   │   ├── 📄 diaspora.json      # Portuguese diaspora
│   │   │   │   └── 📄 index.ts           # Cultural translations export
│   │   │   │
│   │   │   └── 📄 index.ts               # All English translations
│   │   │
│   │   ├── 📁 pt-BR/                     # Brazilian Portuguese (optional)
│   │   │   ├── 📁 common/                # Brazilian Portuguese variants
│   │   │   └── 📄 index.ts               # Brazilian Portuguese exports
│   │   │
│   │   └── 📄 index.ts                   # All locales export
│   │
│   ├── 📁 core/                          # Core i18n Implementation
│   │   ├── 📄 i18n-service.ts            # Main i18n service
│   │   ├── 📄 locale-detector.ts         # Automatic locale detection
│   │   ├── 📄 translation-loader.ts      # Dynamic translation loading
│   │   ├── 📄 interpolation.ts           # String interpolation engine
│   │   ├── 📄 pluralization.ts           # Pluralization rules
│   │   ├── 📄 formatting.ts              # Number/date formatting
│   │   ├── 📄 fallback-handler.ts        # Fallback language logic
│   │   ├── 📄 cache-manager.ts           # Translation caching
│   │   ├── 📄 namespace-manager.ts       # Translation namespace handling
│   │   └── 📄 index.ts                   # Core exports
│   │
│   ├── 📁 providers/                     # i18n Providers & Context
│   │   ├── 📄 i18n-provider.tsx          # React i18n provider
│   │   ├── 📄 locale-provider.tsx        # Locale context provider
│   │   ├── 📄 translation-provider.tsx   # Translation context provider
│   │   ├── 📄 ssr-provider.tsx           # Server-side rendering provider
│   │   └── 📄 index.ts                   # Providers exports
│   │
│   ├── 📁 hooks/                         # React i18n Hooks
│   │   ├── 📄 use-translation.ts         # Main translation hook
│   │   ├── 📄 use-locale.ts              # Locale management hook
│   │   ├── 📄 use-language-switcher.ts   # Language switching hook
│   │   ├── 📄 use-direction.ts           # Text direction hook (RTL/LTR)
│   │   ├── 📄 use-format.ts              # Formatting hook (dates, numbers)
│   │   ├── 📄 use-pluralization.ts       # Pluralization hook
│   │   ├── 📄 use-namespace.ts           # Namespace hook
│   │   ├── 📄 use-lazy-translation.ts    # Lazy loading translation hook
│   │   └── 📄 index.ts                   # Hooks exports
│   │
│   ├── 📁 components/                    # i18n UI Components
│   │   ├── 📁 language/                  # Language Selection Components
│   │   │   ├── 📄 language-switcher.tsx  # Language switcher component
│   │   │   ├── 📄 language-dropdown.tsx  # Language dropdown
│   │   │   ├── 📄 language-toggle.tsx    # PT/EN toggle button
│   │   │   ├── 📄 flag-selector.tsx      # Flag-based language selector
│   │   │   └── 📄 index.ts               # Language components exports
│   │   │
│   │   ├── 📁 text/                      # Text Components
│   │   │   ├── 📄 translated-text.tsx    # Auto-translated text component
│   │   │   ├── 📄 interpolated-text.tsx  # Text with variable interpolation
│   │   │   ├── 📄 pluralized-text.tsx    # Pluralized text component
│   │   │   ├── 📄 formatted-text.tsx     # Formatted text (rich text)
│   │   │   └── 📄 index.ts               # Text components exports
│   │   │
│   │   ├── 📁 formatting/                # Formatting Components
│   │   │   ├── 📄 formatted-date.tsx     # Localized date formatting
│   │   │   ├── 📄 formatted-time.tsx     # Localized time formatting
│   │   │   ├── 📄 formatted-number.tsx   # Localized number formatting
│   │   │   ├── 📄 formatted-currency.tsx # Currency formatting (EUR/ZAR)
│   │   │   ├── 📄 formatted-percentage.tsx # Percentage formatting
│   │   │   ├── 📄 relative-time.tsx      # Relative time (e.g., "2 hours ago")
│   │   │   └── 📄 index.ts               # Formatting components exports
│   │   │
│   │   ├── 📁 cultural/                  # Cultural Components
│   │   │   ├── 📄 portuguese-flag.tsx    # Portuguese flag component
│   │   │   ├── 📄 south-african-flag.tsx # South African flag component
│   │   │   ├── 📄 cultural-quote.tsx     # Portuguese cultural quotes
│   │   │   ├── 📄 holiday-display.tsx    # Portuguese holiday display
│   │   │   └── 📄 index.ts               # Cultural components exports
│   │   │
│   │   └── 📄 index.ts                   # All components exports
│   │
│   ├── 📁 utils/                         # i18n Utilities
│   │   ├── 📄 locale-utils.ts            # Locale manipulation utilities
│   │   ├── 📄 translation-utils.ts       # Translation helper functions
│   │   ├── 📄 pluralization-rules.ts     # Language pluralization rules
│   │   ├── 📄 date-formatting.ts         # Date formatting utilities
│   │   ├── 📄 number-formatting.ts       # Number formatting utilities
│   │   ├── 📄 currency-formatting.ts     # Currency formatting (EUR/ZAR)
│   │   ├── 📄 text-direction.ts          # Text direction utilities
│   │   ├── 📄 language-detection.ts      # Browser language detection
│   │   ├── 📄 interpolation-utils.ts     # String interpolation utilities
│   │   ├── 📄 validation-utils.ts        # Translation validation utilities
│   │   ├── 📄 portuguese-utils.ts        # Portuguese-specific utilities
│   │   ├── 📄 south-african-utils.ts     # South African locale utilities
│   │   └── 📄 index.ts                   # Utils exports
│   │
│   ├── 📁 formatters/                    # Locale-Specific Formatters
│   │   ├── 📁 pt/                        # Portuguese formatters
│   │   │   ├── 📄 date-formatter.ts      # Portuguese date formatting
│   │   │   ├── 📄 number-formatter.ts    # Portuguese number formatting
│   │   │   ├── 📄 currency-formatter.ts  # Euro formatting
│   │   │   ├── 📄 address-formatter.ts   # Portuguese address formatting
│   │   │   ├── 📄 phone-formatter.ts     # Portuguese phone formatting
│   │   │   └── 📄 index.ts               # Portuguese formatters export
│   │   │
│   │   ├── 📁 en-ZA/                     # South African English formatters
│   │   │   ├── 📄 date-formatter.ts      # SA date formatting
│   │   │   ├── 📄 number-formatter.ts    # SA number formatting
│   │   │   ├── 📄 currency-formatter.ts  # Rand (ZAR) formatting
│   │   │   ├── 📄 address-formatter.ts   # SA address formatting
│   │   │   ├── 📄 phone-formatter.ts     # SA phone formatting
│   │   │   └── 📄 index.ts               # SA formatters export
│   │   │
│   │   ├── 📁 en-US/                     # US English formatters (fallback)
│   │   │   ├── 📄 date-formatter.ts      # US date formatting
│   │   │   ├── 📄 number-formatter.ts    # US number formatting
│   │   │   ├── 📄 currency-formatter.ts  # USD formatting
│   │   │   └── 📄 index.ts               # US formatters export
│   │   │
│   │   └── 📄 index.ts                   # All formatters exports
│   │
│   ├── 📁 validators/                    # Translation Validators
│   │   ├── 📄 translation-validator.ts   # Translation completeness validator
│   │   ├── 📄 key-validator.ts           # Translation key validator
│   │   ├── 📄 interpolation-validator.ts # Interpolation variable validator
│   │   ├── 📄 pluralization-validator.ts # Pluralization validator
│   │   ├── 📄 format-validator.ts        # Format string validator
│   │   ├── 📄 consistency-validator.ts   # Cross-language consistency
│   │   └── 📄 index.ts                   # Validators exports
│   │
│   ├── 📁 tools/                         # Development Tools
│   │   ├── 📄 translation-extractor.ts   # Extract translatable strings
│   │   ├── 📄 missing-keys-checker.ts    # Check for missing translation keys
│   │   ├── 📄 unused-keys-checker.ts     # Check for unused translation keys
│   │   ├── 📄 translation-generator.ts   # Generate translation templates
│   │   ├── 📄 translation-merger.ts      # Merge translation files
│   │   ├── 📄 translation-sorter.ts      # Sort translation keys
│   │   ├── 📄 stats-generator.ts         # Translation statistics
│   │   └── 📄 index.ts                   # Tools exports
│   │
│   ├── 📁 adapters/                      # Framework Adapters
│   │   ├── 📁 react/                     # React adapter
│   │   │   ├── 📄 react-adapter.ts       # React-specific i18n adapter
│   │   │   ├── 📄 react-hooks.ts         # React hooks implementation
│   │   │   ├── 📄 react-components.ts    # React components
│   │   │   └── 📄 index.ts               # React adapter exports
│   │   │
│   │   ├── 📁 nextjs/                    # Next.js adapter
│   │   │   ├── 📄 nextjs-adapter.ts      # Next.js-specific adapter
│   │   │   ├── 📄 ssr-adapter.ts         # Server-side rendering adapter
│   │   │   ├── 📄 routing-adapter.ts     # i18n routing adapter
│   │   │   └── 📄 index.ts               # Next.js adapter exports
│   │   │
│   │   ├── 📁 hono/                      # Hono adapter
│   │   │   ├── 📄 hono-adapter.ts        # Hono-specific adapter
│   │   │   ├── 📄 api-adapter.ts         # API i18n adapter
│   │   │   └── 📄 index.ts               # Hono adapter exports
│   │   │
│   │   └── 📄 index.ts                   # All adapters exports
│   │
│   ├── 📁 plugins/                       # i18n Plugins
│   │   ├── 📄 icu-plugin.ts              # ICU message format plugin
│   │   ├── 📄 markdown-plugin.ts         # Markdown translation plugin
│   │   ├── 📄 html-plugin.ts             # HTML translation plugin
│   │   ├── 📄 json-plugin.ts             # JSON translation plugin
│   │   ├── 📄 csv-plugin.ts              # CSV import/export plugin
│   │   ├── 📄 google-translate-plugin.ts # Google Translate integration
│   │   └── 📄 index.ts                   # Plugins exports
│   │
│   ├── 📁 constants/                     # i18n Constants
│   │   ├── 📄 locales.ts                 # Supported locales
│   │   ├── 📄 namespaces.ts              # Translation namespaces
│   │   ├── 📄 fallback-chains.ts         # Fallback language chains
│   │   ├── 📄 date-formats.ts            # Date format constants
│   │   ├── 📄 number-formats.ts          # Number format constants
│   │   ├── 📄 currency-codes.ts          # Currency code constants
│   │   ├── 📄 country-codes.ts           # Country code constants
│   │   ├── 📄 portuguese-regions.ts      # Portuguese regions
│   │   ├── 📄 south-african-regions.ts   # South African regions
│   │   └── 📄 index.ts                   # Constants exports
│   │
│   ├── 📁 types/                         # i18n Types
│   │   ├── 📄 i18n.types.ts              # Core i18n types
│   │   ├── 📄 locale.types.ts            # Locale types
│   │   ├── 📄 translation.types.ts       # Translation types
│   │   ├── 📄 formatting.types.ts        # Formatting types
│   │   ├── 📄 interpolation.types.ts     # Interpolation types
│   │   ├── 📄 pluralization.types.ts     # Pluralization types
│   │   ├── 📄 namespace.types.ts         # Namespace types
│   │   ├── 📄 config.types.ts            # Configuration types
│   │   └── 📄 index.ts                   # Types exports
│   │
│   ├── 📁 config/                        # i18n Configuration
│   │   ├── 📄 i18n.config.ts             # Main i18n configuration
│   │   ├── 📄 locale.config.ts           # Locale configuration
│   │   ├── 📄 fallback.config.ts         # Fallback configuration
│   │   ├── 📄 loading.config.ts          # Loading configuration
│   │   ├── 📄 formatting.config.ts       # Formatting configuration
│   │   ├── 📄 caching.config.ts          # Caching configuration
│   │   ├── 📄 portuguese.config.ts       # Portuguese-specific config
│   │   ├── 📄 south-african.config.ts    # South African config
│   │   └── 📄 index.ts                   # Config exports
│   │
│   ├── 📁 tests/                         # i18n Tests
│   │   ├── 📁 core/                      # Core functionality tests
│   │   │   ├── 📄 i18n-service.test.ts   # i18n service tests
│   │   │   ├── 📄 locale-detector.test.ts # Locale detection tests
│   │   │   └── 📄 interpolation.test.ts  # Interpolation tests
│   │   ├── 📁 hooks/                     # Hook tests
│   │   │   ├── 📄 use-translation.test.ts # Translation hook tests
│   │   │   └── 📄 use-locale.test.ts     # Locale hook tests
│   │   ├── 📁 components/                # Component tests
│   │   │   ├── 📄 language-switcher.test.tsx # Language switcher tests
│   │   │   └── 📄 formatted-date.test.tsx # Date formatting tests
│   │   ├── 📁 utils/                     # Utility tests
│   │   │   ├── 📄 locale-utils.test.ts   # Locale utilities tests
│   │   │   └── 📄 formatting.test.ts     # Formatting tests
│   │   ├── 📁 validators/                # Validator tests
│   │   │   └── 📄 translation-validator.test.ts # Translation validation tests
│   │   ├── 📄 setup.ts                   # Test setup
│   │   └── 📄 test-utils.ts              # Testing utilities
│   │
│   └── 📄 index.ts                       # Main i18n library export
│
├── 📄 project.json                       # Nx project config
├── 📄 package.json                       # Package config
├── 📄 tsconfig.json                      # TypeScript config
├── 📄 tsconfig.lib.json                 # Library TypeScript config
├── 📄 tsconfig.spec.json                # Test TypeScript config
├── 📄 vite.config.ts                    # Vite config
├── 📄 vitest.config.ts                  # Vitest config
└── 📄 README.md                         # i18n library documentation
```