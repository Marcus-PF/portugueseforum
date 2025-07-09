# 🌐 Public Forum Website (@pfsa/forum) - Enhanced Structure

```
📁 apps/forum/                           # Next.js Public Forum Application
├── 📁 src/
│   ├── 📁 app/                          # Next.js 14 App Router
│   │   ├── 📄 layout.tsx                # Root layout
│   │   ├── 📄 page.tsx                  # Homepage
│   │   ├── 📄 loading.tsx               # Global loading UI
│   │   ├── 📄 error.tsx                 # Error boundary
│   │   ├── 📄 not-found.tsx             # 404 page
│   │   ├── 📄 global-error.tsx          # Global error handler
│   │   │
│   │   ├── 📁 (auth)/                   # Auth route group
│   │   │   ├── 📄 layout.tsx            # Auth layout
│   │   │   ├── 📁 login/                # Login page
│   │   │   │   ├── 📄 page.tsx          # Login page
│   │   │   │   └── 📄 loading.tsx       # Login loading
│   │   │   ├── 📁 register/             # Registration page
│   │   │   │   ├── 📄 page.tsx          # Registration page
│   │   │   │   └── 📄 loading.tsx       # Registration loading
│   │   │   ├── 📁 forgot-password/      # Password reset
│   │   │   │   └── 📄 page.tsx          # Password reset page
│   │   │   ├── 📁 reset-password/       # New password
│   │   │   │   └── 📄 page.tsx          # New password page
│   │   │   └── 📁 verify-email/         # Email verification
│   │   │       └── 📄 page.tsx          # Email verification page
│   │   │
│   │   ├── 📁 (public)/                 # Public route group
│   │   │   ├── 📄 layout.tsx            # Public layout
│   │   │   ├── 📁 about/                # About pages
│   │   │   │   ├── 📄 page.tsx          # About Portuguese community
│   │   │   │   ├── 📁 heritage/         # Portuguese heritage
│   │   │   │   │   └── 📄 page.tsx      # Heritage page
│   │   │   │   ├── 📁 diaspora/         # Portuguese diaspora
│   │   │   │   │   └── 📄 page.tsx      # Diaspora page
│   │   │   │   └── 📁 south-africa/     # PT community in SA
│   │   │   │       └── 📄 page.tsx      # SA community page
│   │   │   ├── 📁 articles/             # Public articles
│   │   │   │   ├── 📄 page.tsx          # Articles listing
│   │   │   │   ├── 📄 loading.tsx       # Articles loading
│   │   │   │   ├── 📁 [category]/       # Article categories
│   │   │   │   │   ├── 📄 page.tsx      # Category page
│   │   │   │   │   └── 📄 loading.tsx   # Category loading
│   │   │   │   └── 📁 [slug]/           # Individual article
│   │   │   │       ├── 📄 page.tsx      # Article page
│   │   │   │       ├── 📄 loading.tsx   # Article loading
│   │   │   │       └── 📄 error.tsx     # Article error
│   │   │   ├── 📁 events/               # Community events
│   │   │   │   ├── 📄 page.tsx          # Events listing
│   │   │   │   ├── 📄 loading.tsx       # Events loading
│   │   │   │   ├── 📁 calendar/         # Events calendar
│   │   │   │   │   └── 📄 page.tsx      # Calendar view
│   │   │   │   ├── 📁 cultural/         # Cultural events
│   │   │   │   │   └── 📄 page.tsx      # Cultural events
│   │   │   │   └── 📁 [id]/             # Individual event
│   │   │   │       ├── 📄 page.tsx      # Event page
│   │   │   │       └── 📄 loading.tsx   # Event loading
│   │   │   └── 📁 contact/              # Contact information
│   │   │       └── 📄 page.tsx          # Contact page
│   │   │
│   │   ├── 📁 (protected)/              # Protected route group
│   │   │   ├── 📄 layout.tsx            # Protected layout
│   │   │   ├── 📁 dashboard/            # User dashboard
│   │   │   │   ├── 📄 page.tsx          # Dashboard home
│   │   │   │   ├── 📄 loading.tsx       # Dashboard loading
│   │   │   │   ├── 📁 profile/          # User profile
│   │   │   │   │   ├── 📄 page.tsx      # Profile page
│   │   │   │   │   ├── 📄 loading.tsx   # Profile loading
│   │   │   │   │   ├── 📁 edit/         # Edit profile
│   │   │   │   │   │   └── 📄 page.tsx  # Edit profile page
│   │   │   │   │   └── 📁 settings/     # Profile settings
│   │   │   │   │       ├── 📄 page.tsx  # Settings page
│   │   │   │   │       ├── 📁 privacy/  # Privacy settings
│   │   │   │   │       │   └── 📄 page.tsx # Privacy page
│   │   │   │   │       ├── 📁 security/ # Security settings
│   │   │   │   │       │   └── 📄 page.tsx # Security page
│   │   │   │   │       └── 📁 notifications/ # Notification settings
│   │   │   │   │           └── 📄 page.tsx # Notifications page
│   │   │   │   ├── 📁 membership/       # Membership management
│   │   │   │   │   ├── 📄 page.tsx      # Membership page
│   │   │   │   │   ├── 📄 loading.tsx   # Membership loading
│   │   │   │   │   ├── 📁 upgrade/      # Upgrade membership
│   │   │   │   │   │   └── 📄 page.tsx  # Upgrade page
│   │   │   │   │   ├── 📁 billing/      # Billing information
│   │   │   │   │   │   └── 📄 page.tsx  # Billing page
│   │   │   │   │   └── 📁 invoices/     # Invoice history
│   │   │   │   │       └── 📄 page.tsx  # Invoices page
│   │   │   │   └── 📁 my-content/       # User's content
│   │   │   │       ├── 📄 page.tsx      # My content page
│   │   │   │       ├── 📁 articles/     # My articles
│   │   │   │       │   └── 📄 page.tsx  # My articles page
│   │   │   │       ├── 📁 forum-posts/  # My forum posts
│   │   │   │       │   └── 📄 page.tsx  # My posts page
│   │   │   │       └── 📁 comments/     # My comments
│   │   │   │           └── 📄 page.tsx  # My comments page
│   │   │   │
│   │   │   ├── 📁 forum/                # Forum section
│   │   │   │   ├── 📄 page.tsx          # Forum home
│   │   │   │   ├── 📄 loading.tsx       # Forum loading
│   │   │   │   ├── 📁 [category]/       # Forum categories
│   │   │   │   │   ├── 📄 page.tsx      # Category page
│   │   │   │   │   ├── 📄 loading.tsx   # Category loading
│   │   │   │   │   └── 📁 [topic]/      # Forum topics
│   │   │   │   │       ├── 📄 page.tsx  # Topic page
│   │   │   │   │       ├── 📄 loading.tsx # Topic loading
│   │   │   │   │       └── 📄 error.tsx # Topic error
│   │   │   │   ├── 📁 create/           # Create new topic
│   │   │   │   │   └── 📄 page.tsx      # Create topic page
│   │   │   │   └── 📁 search/           # Forum search
│   │   │   │       └── 📄 page.tsx      # Search results
│   │   │   │
│   │   │   ├── 📁 write/                # Content creation
│   │   │   │   ├── 📄 page.tsx          # Write options
│   │   │   │   ├── 📁 article/          # Write article
│   │   │   │   │   ├── 📄 page.tsx      # Article editor
│   │   │   │   │   └── 📄 loading.tsx   # Editor loading
│   │   │   │   └── 📁 forum-post/       # Create forum post
│   │   │   │       └── 📄 page.tsx      # Forum post editor
│   │   │   │
│   │   │   └── 📁 events/               # Protected events
│   │   │       ├── 📄 page.tsx          # Events for members
│   │   │       ├── 📁 my-events/        # User's events
│   │   │       │   └── 📄 page.tsx      # My events page
│   │   │       ├── 📁 create/           # Create event
│   │   │       │   └── 📄 page.tsx      # Create event page
│   │   │       └── 📁 rsvp/             # RSVP management
│   │   │           └── 📄 page.tsx      # RSVP page
│   │   │
│   │   ├── 📁 api/                      # API routes
│   │   │   ├── 📁 auth/                 # Authentication APIs
│   │   │   │   ├── 📄 route.ts          # Auth API routes
│   │   │   │   └── 📁 callback/         # OAuth callbacks
│   │   │   │       └── 📄 route.ts      # OAuth callback
│   │   │   ├── 📁 users/                # User APIs
│   │   │   │   └── 📄 route.ts          # User API routes
│   │   │   ├── 📁 upload/               # File upload
│   │   │   │   └── 📄 route.ts          # Upload API
│   │   │   └── 📁 search/               # Search API
│   │   │       └── 📄 route.ts          # Search routes
│   │   │
│   │   └── 📄 sitemap.ts                # Sitemap generation
│   │
│   ├── 📁 components/                   # React Components
│   │   ├── 📁 layout/                   # Layout Components
│   │   │   ├── 📄 header.tsx            # Site header
│   │   │   ├── 📄 footer.tsx            # Site footer
│   │   │   ├── 📄 sidebar.tsx           # Sidebar navigation
│   │   │   ├── 📄 navigation.tsx        # Main navigation
│   │   │   ├── 📄 breadcrumbs.tsx       # Breadcrumb navigation
│   │   │   └── 📄 index.ts              # Layout exports
│   │   │
│   │   ├── 📁 auth/                     # Authentication Components
│   │   │   ├── 📄 login-form.tsx        # Login form
│   │   │   ├── 📄 register-form.tsx     # Registration form
│   │   │   ├── 📄 password-reset-form.tsx # Password reset
│   │   │   ├── 📄 oauth-buttons.tsx     # OAuth login buttons
│   │   │   ├── 📄 auth-guard.tsx        # Route protection
│   │   │   └── 📄 index.ts              # Auth components exports
│   │   │
│   │   ├── 📁 forum/                    # Forum Components
│   │   │   ├── 📄 topic-list.tsx        # Forum topic list
│   │   │   ├── 📄 topic-card.tsx        # Topic card component
│   │   │   ├── 📄 post-editor.tsx       # Post editor
│   │   │   ├── 📄 reply-form.tsx        # Reply form
│   │   │   ├── 📄 forum-search.tsx      # Forum search
│   │   │   ├── 📄 category-nav.tsx      # Category navigation
│   │   │   └── 📄 index.ts              # Forum components exports
│   │   │
│   │   ├── 📁 articles/                 # Article Components
│   │   │   ├── 📄 article-list.tsx      # Article listing
│   │   │   ├── 📄 article-card.tsx      # Article card
│   │   │   ├── 📄 article-reader.tsx    # Article reader
│   │   │   ├── 📄 article-editor.tsx    # Article editor
│   │   │   ├── 📄 article-comments.tsx  # Article comments
│   │   │   ├── 📄 article-reactions.tsx # Article reactions
│   │   │   └── 📄 index.ts              # Article components exports
│   │   │
│   │   ├── 📁 events/                   # Event Components
│   │   │   ├── 📄 event-list.tsx        # Event listing
│   │   │   ├── 📄 event-card.tsx        # Event card
│   │   │   ├── 📄 event-calendar.tsx    # Event calendar
│   │   │   ├── 📄 rsvp-button.tsx       # RSVP button
│   │   │   ├── 📄 event-form.tsx        # Event creation form
│   │   │   └── 📄 index.ts              # Event components exports
│   │   │
│   │   ├── 📁 cultural/                 # Portuguese Cultural Components
│   │   │   ├── 📄 heritage-showcase.tsx # Portuguese heritage
│   │   │   ├── 📄 cultural-calendar.tsx # Cultural events calendar
│   │   │   ├── 📄 tradition-card.tsx    # Tradition display
│   │   │   ├── 📄 diaspora-map.tsx      # Diaspora community map
│   │   │   ├── 📄 cultural-quotes.tsx   # Portuguese quotes
│   │   │   └── 📄 index.ts              # Cultural components exports
│   │   │
│   │   ├── 📁 user/                     # User Components
│   │   │   ├── 📄 user-profile.tsx      # User profile display
│   │   │   ├── 📄 user-avatar.tsx       # User avatar
│   │   │   ├── 📄 user-card.tsx         # User card
│   │   │   ├── 📄 profile-editor.tsx    # Profile editor
│   │   │   ├── 📄 user-activity.tsx     # User activity feed
│   │   │   └── 📄 index.ts              # User components exports
│   │   │
│   │   ├── 📁 membership/               # Membership Components
│   │   │   ├── 📄 membership-plans.tsx  # Membership plans display
│   │   │   ├── 📄 upgrade-modal.tsx     # Upgrade modal
│   │   │   ├── 📄 billing-info.tsx      # Billing information
│   │   │   ├── 📄 payment-form.tsx      # Payment form
│   │   │   ├── 📄 membership-badge.tsx  # Membership badge
│   │   │   └── 📄 index.ts              # Membership components exports
│   │   │
│   │   ├── 📁 media/                    # Media Components
│   │   │   ├── 📄 image-gallery.tsx     # Image gallery
│   │   │   ├── 📄 file-upload.tsx       # File upload
│   │   │   ├── 📄 video-player.tsx      # Video player
│   │   │   ├── 📄 audio-player.tsx      # Audio player
│   │   │   ├── 📄 media-modal.tsx       # Media modal
│   │   │   └── 📄 index.ts              # Media components exports
│   │   │
│   │   └── 📄 index.ts                  # All components exports
│   │
│   ├── 📁 hooks/                        # Custom React Hooks
│   │   ├── 📄 use-auth.ts               # Authentication hook
│   │   ├── 📄 use-user.ts               # User data hook
│   │   ├── 📄 use-forum.ts              # Forum data hook
│   │   ├── 📄 use-articles.ts           # Articles data hook
│   │   ├── 📄 use-events.ts             # Events data hook
│   │   ├── 📄 use-membership.ts         # Membership hook
│   │   ├── 📄 use-cultural-content.ts   # Cultural content hook
│   │   ├── 📄 use-media-upload.ts       # Media upload hook
│   │   └── 📄 index.ts                  # Hooks exports
│   │
│   ├── 📁 styles/                       # Styling
│   │   ├── 📄 globals.css               # Global styles
│   │   ├── 📄 components.css            # Component styles
│   │   ├── 📄 auth.css                  # Authentication styles
│   │   ├── 📄 forum.css                 # Forum styles
│   │   ├── 📄 cultural.css              # Portuguese cultural styles
│   │   └── 📄 responsive.css            # Responsive styles
│   │
│   ├── 📁 lib/                          # Utility Libraries
│   │   ├── 📄 api-client.ts             # API client configuration
│   │   ├── 📄 auth.ts                   # Authentication utilities
│   │   ├── 📄 constants.ts              # Application constants
│   │   ├── 📄 utils.ts                  # General utilities
│   │   ├── 📄 validators.ts             # Form validators
│   │   ├── 📄 portuguese-utils.ts       # Portuguese-specific utilities
│   │   └── 📄 index.ts                  # Lib exports
│   │
│   ├── 📁 types/                        # TypeScript Types
│   │   ├── 📄 auth.types.ts             # Authentication types
│   │   ├── 📄 user.types.ts             # User types
│   │   ├── 📄 forum.types.ts            # Forum types
│   │   ├── 📄 article.types.ts          # Article types
│   │   ├── 📄 event.types.ts            # Event types
│   │   ├── 📄 cultural.types.ts         # Cultural content types
│   │   └── 📄 index.ts                  # Types exports
│   │
│   └── 📁 config/                       # Configuration
│       ├── 📄 site.config.ts            # Site configuration
│       ├── 📄 auth.config.ts            # Auth configuration
│       ├── 📄 api.config.ts             # API configuration
│       └── 📄 index.ts                  # Config exports
│
├── 📄 next.config.js                    # Next.js configuration
├── 📄 tailwind.config.js                # Tailwind CSS configuration
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 package.json                      # Package dependencies
├── 📄 .env.local.example                # Environment variables example
└── 📄 README.md                         # Forum documentation
```

# 🌐 Public Website: Key Features

## 🌍 Open Access & Browsing
- Public access for browsing content  
- No login required for basic content exploration  

## 🔐 Authentication & Participation
- Authentication system for community participation  
- Secure login and registration flow  
- Role-based access to forums and member features  

## 🇵🇹 Portuguese Cultural Focus
- Dedicated sections for Portuguese heritage content  
- Culturally relevant design and language support  
- Integration with i18n for Portuguese and English users  

## 💬 Community Interaction
- Forum discussions with support for threading and moderation  
- Commenting system on articles and events  
- Reaction system for community engagement  

## 📝 Content Publishing
- Article publishing platform with author profiles  
- Rich text editor with media support  
- Featured and trending articles display  

## 📅 Community Events
- Cultural calendar with upcoming Portuguese events  
- Event details, RSVP, and participation tracking  
- Integration with external calendar services  

## 👥 Membership & Profiles
- User profile pages with public and private views  
- Membership management (tiers, benefits)  
- Community roles and badges  

---

This **public website** serves as the **main gateway** to your **Portuguese Forum**, combining **cultural richness**, **community interaction**, and **content accessibility** for both **guests** and **registered members**, with a strong emphasis on **Portuguese-South African heritage** and user experience.
