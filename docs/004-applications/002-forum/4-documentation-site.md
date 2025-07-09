# 📚 Documentation Site (@pfsa/docs) - Comprehensive Structure

```
📁 apps/docs/                           # Docusaurus Documentation Site
├── 📁 src/
│   ├── 📁 components/                   # Documentation Components
│   │   ├── 📁 layout/                   # Layout Components
│   │   │   ├── 📄 docs-header.tsx       # Documentation header
│   │   │   ├── 📄 docs-sidebar.tsx      # Documentation sidebar
│   │   │   ├── 📄 docs-footer.tsx       # Documentation footer
│   │   │   ├── 📄 breadcrumbs.tsx       # Documentation breadcrumbs
│   │   │   └── 📄 index.ts              # Layout exports
│   │   │
│   │   ├── 📁 navigation/               # Navigation Components
│   │   │   ├── 📄 docs-navigation.tsx   # Main documentation navigation
│   │   │   ├── 📄 section-nav.tsx       # Section navigation
│   │   │   ├── 📄 quick-nav.tsx         # Quick navigation
│   │   │   ├── 📄 search-component.tsx  # Documentation search
│   │   │   └── 📄 index.ts              # Navigation exports
│   │   │
│   │   ├── 📁 interactive/              # Interactive Components
│   │   │   ├── 📄 code-playground.tsx   # Code playground
│   │   │   ├── 📄 api-explorer.tsx      # API explorer
│   │   │   ├── 📄 component-preview.tsx # Component preview
│   │   │   ├── 📄 architecture-diagram.tsx # Interactive diagrams
│   │   │   └── 📄 index.ts              # Interactive exports
│   │   │
│   │   ├── 📁 pfsa-specific/            # Portuguese Forum Specific
│   │   │   ├── 📄 cultural-showcase.tsx # Cultural content showcase
│   │   │   ├── 📄 community-stats.tsx   # Community statistics
│   │   │   ├── 📄 diaspora-map.tsx      # Portuguese diaspora map
│   │   │   ├── 📄 heritage-timeline.tsx # Heritage timeline
│   │   │   └── 📄 index.ts              # PFSA exports
│   │   │
│   │   └── 📄 index.ts                  # All components exports
│   │
│   ├── 📁 pages/                        # Documentation Pages
│   │   ├── 📄 index.tsx                 # Documentation homepage
│   │   ├── 📄 getting-started.tsx       # Getting started page
│   │   ├── 📄 api-reference.tsx         # API reference page
│   │   ├── 📄 component-library.tsx     # Component library page
│   │   └── 📄 contributors.tsx          # Contributors page
│   │
│   ├── 📁 css/                          # Documentation Styling
│   │   ├── 📄 custom.css                # Custom documentation styles
│   │   ├── 📄 code-highlighting.css     # Code syntax highlighting
│   │   ├── 📄 pfsa-theme.css            # Portuguese Forum theme
│   │   └── 📄 responsive.css            # Responsive documentation
│   │
│   └── 📁 utils/                        # Documentation Utilities
│       ├── 📄 docs-parser.ts            # Documentation parser
│       ├── 📄 content-loader.ts         # Content loading utilities
│       ├── 📄 search-index.ts           # Search indexing
│       └── 📄 index.ts                  # Utils exports
│
├── 📁 docs/                             # → SYMLINKS TO ROOT docs/ FOLDER
│   ├── 📄 README.md                     # → ../../docs/README.md
│   │
│   ├── 📁 000-intro/                    # → ../../docs/000-intro/
│   │   ├── 📄 0-readme.md               # → ../../docs/000-intro/0-readme.md
│   │   ├── 📄 1-contributing.md         # → ../../docs/000-intro/1-contributing.md
│   │   ├── 📄 2-glossary.md             # → ../../docs/000-intro/2-glossary.md
│   │   └── 📄 3-troubleshooting.md      # → ../../docs/000-intro/3-troubleshooting.md
│   │
│   ├── 📁 001-company-info/             # → ../../docs/001-company-info/
│   │   ├── 📄 1-overview.md             # → ../../docs/001-company-info/1-overview.md
│   │   ├── 📄 2-business-model.md       # → ../../docs/001-company-info/2-business-model.md
│   │   ├── 📄 3-team.md                 # → ../../docs/001-company-info/3-team.md
│   │   ├── 📄 4-community.md            # → ../../docs/001-company-info/4-community.md
│   │   ├── 📄 5-operations.md           # → ../../docs/001-company-info/5-operations.md
│   │   ├── 📄 6-document-standards.md   # → ../../docs/001-company-info/6-document-standards.md
│   │   ├── 📄 7-security-privacy.md     # → ../../docs/001-company-info/7-security-privacy.md
│   │   ├── 📄 8-legal-regulatory.md     # → ../../docs/001-company-info/8-legal-regulatory.md
│   │   ├── 📄 9-brand-guidelines.md     # → ../../docs/001-company-info/9-brand-guidelines.md
│   │   ├── 📄 10-milestones.md          # → ../../docs/001-company-info/10-milestones.md
│   │   ├── 📄 11-privacy-policy.md      # → ../../docs/001-company-info/11-privacy-policy.md
│   │   └── 📄 12-terms-and-conditions.md # → ../../docs/001-company-info/12-terms-and-conditions.md
│   │
│   ├── 📁 002-nx-monorepo/              # → ../../docs/002-nx-monorepo/
│   │   ├── 📄 introduction.md           # → ../../docs/002-nx-monorepo/introduction.md
│   │   ├── 📁 001-architecture/         # → ../../docs/002-nx-monorepo/001-architecture/
│   │   │   └── 📄 1-overview.md         # → ../../docs/002-nx-monorepo/001-architecture/1-overview.md
│   │   └── 📁 002-dev-standards/        # → ../../docs/002-nx-monorepo/002-dev-standards/
│   │       ├── 📄 1-monorepo-context.md # → ../../docs/002-nx-monorepo/002-dev-standards/1-monorepo-context.md
│   │       ├── 📄 2-code-formatting.md  # → ../../docs/002-nx-monorepo/002-dev-standards/2-code-formatting.md
│   │       └── 📄 3-branding-style.md   # → ../../docs/002-nx-monorepo/002-dev-standards/3-branding-style.md
│   │
│   ├── 📁 003-libraries/                # → ../../docs/003-libraries/
│   │   ├── 📁 01-core/                  # → ../../docs/003-libraries/01-core/
│   │   ├── 📁 02-domain/                # → ../../docs/003-libraries/02-domain/
│   │   ├── 📁 03-data/                  # → ../../docs/003-libraries/03-data/
│   │   ├── 📁 04-feature/               # → ../../docs/003-libraries/04-feature/
│   │   ├── 📁 05-ui/                    # → ../../docs/003-libraries/05-ui/
│   │   │   ├── 📄 0-key-features.md     # → ../../docs/003-libraries/05-ui/0-key-features.md
│   │   │   ├── 📄 1-tree-diagram.md     # → ../../docs/003-libraries/05-ui/1-tree-diagram.md
│   │   │   └── 📄 3-migration.md        # → ../../docs/003-libraries/05-ui/3-migration.md
│   │   ├── 📁 06-testing/               # → ../../docs/003-libraries/06-testing/
│   │   └── 📁 08-i18n/                  # → ../../docs/003-libraries/08-i18n/
│   │       └── 📄 0-key-features.md     # → ../../docs/003-libraries/08-i18n/0-key-features.md
│   │
│   ├── 📁 004-applications/             # → ../../docs/004-applications/
│   │   ├── 📁 001-api/                  # → ../../docs/004-applications/001-api/
│   │   ├── 📁 002-forum/                # → ../../docs/004-applications/002-forum/
│   │   │   ├── 📄 2-public-website.md   # → ../../docs/004-applications/002-forum/2-public-website.md
│   │   │   └── 📄 3-admin-dashboard.md  # → ../../docs/004-applications/002-forum/3-admin-dashboard.md
│   │   └── 📁 003-docs/                 # → ../../docs/004-applications/003-docs/
│   │
│   ├── 📁 005-features/                 # → ../../docs/005-features/
│   │   ├── 📁 00-database-management/   # → ../../docs/005-features/00-database-management/
│   │   ├── 📁 01-user-management/       # → ../../docs/005-features/01-user-management/
│   │   ├── 📁 02-member-management/     # → ../../docs/005-features/02-member-management/
│   │   └── 📁 03-media-management/      # → ../../docs/005-features/03-media-management/
│   │
│   ├── 📁 006-style-guide/              # → ../../docs/006-style-guide/
│   │   ├── 📁 01-design-system/         # → ../../docs/006-style-guide/01-design-system/
│   │   ├── 📁 02-accessibility/         # → ../../docs/006-style-guide/02-accessibility/
│   │   └── 📁 03-naming-conventions/    # → ../../docs/006-style-guide/03-naming-conventions/
│   │
│   ├── 📁 007-guides/                   # → ../../docs/007-guides/
│   ├── 📁 008-ai-integration/           # → ../../docs/008-ai-integration/
│   └── 📁 009-visuals/                  # → ../../docs/009-visuals/
│
├── 📁 static/                           # Static Documentation Assets
│   ├── 📁 img/                          # Documentation images
│   │   ├── 📁 architecture/             # Architecture diagrams
│   │   │   ├── 📄 monorepo-diagram.svg  # Monorepo architecture
│   │   │   ├── 📄 data-flow.svg         # Data flow diagram
│   │   │   └── 📄 dependency-graph.svg  # Dependency graph
│   │   ├── 📁 screenshots/              # Application screenshots
│   │   │   ├── 📄 admin-dashboard.png   # Admin dashboard screenshot
│   │   │   ├── 📄 public-site.png       # Public site screenshot
│   │   │   └── 📄 api-docs.png          # API documentation screenshot
│   │   ├── 📁 pfsa/                     # Portuguese Forum specific
│   │   │   ├── 📄 logo.svg              # PFSA logo
│   │   │   ├── 📄 flag-pt.svg           # Portuguese flag
│   │   │   ├── 📄 flag-za.svg           # South African flag
│   │   │   └── 📄 heritage-banner.jpg   # Heritage banner
│   │   └── 📁 icons/                    # Documentation icons
│   │       ├── 📄 api.svg               # API icon
│   │       ├── 📄 frontend.svg          # Frontend icon
│   │       ├── 📄 database.svg          # Database icon
│   │       └── 📄 tools.svg             # Tools icon
│   │
│   ├── 📁 videos/                       # Documentation videos
│   │   ├── 📄 getting-started.mp4       # Getting started video
│   │   ├── 📄 api-overview.mp4          # API overview video
│   │   └── 📄 component-demo.mp4        # Component demo video
│   │
│   └── 📁 downloads/                    # Downloadable resources
│       ├── 📄 api-collection.json       # Postman collection
│       ├── 📄 component-kit.fig         # Figma component kit
│       └── 📄 brand-assets.zip          # Brand assets package
│
├── 📁 blog/                             # Documentation Blog
│   ├── 📄 2025-01-15-monorepo-setup.md # Monorepo setup blog post
│   ├── 📄 2025-01-20-ui-components.md  # UI components blog post
│   └── 📄 2025-01-25-api-updates.md    # API updates blog post
│
├── 📄 docusaurus.config.js              # Docusaurus configuration
├── 📄 sidebars.js                       # Sidebar configuration
├── 📄 package.json                      # Documentation site dependencies
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 tailwind.config.js                # Tailwind CSS configuration
└── 📄 README.md                         # Documentation site README
```

## 🔗 Integration Strategy

### **1. Symlink Configuration**
```bash
# Create symlinks to pull from root docs folder
cd apps/docs/docs
ln -s ../../../docs/* .
```

### **2. Docusaurus Configuration**
```javascript
// docusaurus.config.js
module.exports = {
  title: 'Portuguese Forum Documentation',
  tagline: 'Comprehensive documentation for the @pfsa monorepo',
  url: 'https://docs.portugueseforum.org.za',
  baseUrl: '/',
  
  themeConfig: {
    navbar: {
      title: 'PFSA Docs',
      logo: {
        alt: 'Portuguese Forum Logo',
        src: 'img/pfsa/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: '000-intro/0-readme',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: '002-nx-monorepo/introduction',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'doc',
          docId: '003-libraries/05-ui/0-key-features',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'doc',
          docId: '004-applications/001-api/readme',
          position: 'left',
          label: 'API',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/portugueseforum/source',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/000-intro/0-readme',
            },
            {
              label: 'API Reference',
              to: '/docs/004-applications/001-api/readme',
            },
            {
              label: 'Component Library',
              to: '/docs/003-libraries/05-ui/0-key-features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Portuguese Forum',
              href: 'https://portugueseforum.org.za',
            },
            {
              label: 'Facebook Group',
              href: 'https://facebook.com/groups/portugueseforumsa',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/portugueseforum',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/portugueseforum/source',
            },
            {
              label: 'Issues',
              href: 'https://github.com/portugueseforum/source/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Portuguese Forum of South Africa. Built with Docusaurus.`,
    },
  },
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: '../../../apps/api/docs',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'forum',
        path: '../../../apps/forum/docs',
        routeBasePath: 'forum',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
```

### **3. Sidebar Configuration**
```javascript
// sidebars.js
module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        '000-intro/0-readme',
        '000-intro/1-contributing',
        '000-intro/2-glossary',
      ],
    },
    {
      type: 'category',
      label: '🏢 Company Info',
      items: [
        '001-company-info/1-overview',
        '001-company-info/2-business-model',
        '001-company-info/4-community',
        '001-company-info/9-brand-guidelines',
      ],
    },
    {
      type: 'category',
      label: '🏗️ Monorepo Architecture',
      items: [
        '002-nx-monorepo/introduction',
        '002-nx-monorepo/001-architecture/1-overview',
        '002-nx-monorepo/002-dev-standards/1-monorepo-context',
        '002-nx-monorepo/002-dev-standards/2-code-formatting',
        '002-nx-monorepo/002-dev-standards/3-branding-style',
      ],
    },
    {
      type: 'category',
      label: '📚 Libraries',
      items: [
        '003-libraries/03-data/readme',
        '003-libraries/05-ui/0-key-features',
        '003-libraries/08-i18n/0-key-features',
      ],
    },
    {
      type: 'category',
      label: '🚀 Applications',
      items: [
        '004-applications/001-api/readme',
        '004-applications/002-forum/2-public-website',
        '004-applications/002-forum/3-admin-dashboard',
      ],
    },
    {
      type: 'category',
      label: '✨ Features',
      items: [
        '005-features/01-user-management/readme',
        '005-features/02-member-management/readme',
        '005-features/03-media-management/readme',
      ],
    },
    {
      type: 'category',
      label: '🎨 Style Guide',
      items: [
        '006-style-guide/01-design-system/readme',
        '006-style-guide/02-accessibility/readme',
        '006-style-guide/03-naming-conventions/readme',
      ],
    },
  ],
};
```

## 🎯 Key Features

### **📖 Content Synchronization**
- **Real-time sync** with root `docs/` folder via symlinks
- **Automatic updates** when documentation files change
- **Version control** integrated with main repository

### **🇵🇹 Portuguese Forum Branding**
- **Cultural themes** with Portuguese colors and imagery
- **Bilingual support** (Portuguese/English) via i18n
- **Community integration** with social media links

### **🔍 Enhanced Search**
- **Full-text search** across all documentation
- **API reference search** with code examples
- **Component library search** with live previews

### **📊 Interactive Elements**
- **Live code playground** for testing components
- **API explorer** with request/response examples
- **Architecture diagrams** with interactive elements

Would you like me to proceed with creating the actual Docusaurus application structure, or would you prefer to focus on specific aspects like the configuration files or component structure?