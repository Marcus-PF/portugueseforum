# ⚙️ Admin Dashboard (@pfsa/admin) - Enhanced Structure

```
📁 apps/admin/                           # Next.js Admin Dashboard Application
├── 📁 src/
│   ├── 📁 app/                          # Next.js 14 App Router
│   │   ├── 📄 layout.tsx                # Root admin layout
│   │   ├── 📄 page.tsx                  # Admin homepage/redirect
│   │   ├── 📄 loading.tsx               # Global loading UI
│   │   ├── 📄 error.tsx                 # Error boundary
│   │   ├── 📄 not-found.tsx             # 404 page
│   │   ├── 📄 global-error.tsx          # Global error handler
│   │   │
│   │   ├── 📁 auth/                     # Employee Authentication
│   │   │   ├── 📄 layout.tsx            # Auth layout
│   │   │   ├── 📁 login/                # Admin login
│   │   │   │   ├── 📄 page.tsx          # Admin login page
│   │   │   │   └── 📄 loading.tsx       # Login loading
│   │   │   ├── 📁 sso/                  # Single Sign-On
│   │   │   │   └── 📄 page.tsx          # SSO authentication
│   │   │   ├── 📁 two-factor/           # 2FA for employees
│   │   │   │   └── 📄 page.tsx          # 2FA verification
│   │   │   └── 📁 callback/             # Auth callbacks
│   │   │       └── 📄 page.tsx          # Auth callback handler
│   │   │
│   │   ├── 📁 dashboard/                # Main Dashboard
│   │   │   ├── 📄 layout.tsx            # Dashboard layout
│   │   │   ├── 📄 page.tsx              # Dashboard overview
│   │   │   ├── 📄 loading.tsx           # Dashboard loading
│   │   │   │
│   │   │   ├── 📁 analytics/            # Analytics & Reporting
│   │   │   │   ├── 📄 page.tsx          # Analytics overview
│   │   │   │   ├── 📄 loading.tsx       # Analytics loading
│   │   │   │   ├── 📁 users/            # User analytics
│   │   │   │   │   ├── 📄 page.tsx      # User analytics page
│   │   │   │   │   ├── 📁 demographics/ # User demographics
│   │   │   │   │   │   └── 📄 page.tsx  # Demographics page
│   │   │   │   │   ├── 📁 activity/     # User activity analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Activity analytics
│   │   │   │   │   └── 📁 engagement/   # User engagement
│   │   │   │   │       └── 📄 page.tsx  # Engagement analytics
│   │   │   │   ├── 📁 content/          # Content analytics
│   │   │   │   │   ├── 📄 page.tsx      # Content analytics
│   │   │   │   │   ├── 📁 articles/     # Article analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Article analytics
│   │   │   │   │   ├── 📁 forum/        # Forum analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Forum analytics
│   │   │   │   │   └── 📁 events/       # Event analytics
│   │   │   │   │       └── 📄 page.tsx  # Event analytics
│   │   │   │   ├── 📁 membership/       # Membership analytics
│   │   │   │   │   ├── 📄 page.tsx      # Membership overview
│   │   │   │   │   ├── 📁 revenue/      # Revenue analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Revenue dashboard
│   │   │   │   │   ├── 📁 subscriptions/ # Subscription analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Subscription metrics
│   │   │   │   │   └── 📁 churn/        # Churn analysis
│   │   │   │   │       └── 📄 page.tsx  # Churn analytics
│   │   │   │   ├── 📁 cultural/         # Portuguese cultural analytics
│   │   │   │   │   ├── 📄 page.tsx      # Cultural engagement
│   │   │   │   │   ├── 📁 heritage/     # Heritage content analytics
│   │   │   │   │   │   └── 📄 page.tsx  # Heritage analytics
│   │   │   │   │   └── 📁 diaspora/     # Diaspora analytics
│   │   │   │   │       └── 📄 page.tsx  # Diaspora insights
│   │   │   │   └── 📁 reports/          # Custom reports
│   │   │   │       ├── 📄 page.tsx      # Reports dashboard
│   │   │   │       ├── 📁 create/       # Create new report
│   │   │   │       │   └── 📄 page.tsx  # Report builder
│   │   │   │       └── 📁 [id]/         # Individual report
│   │   │   │           └── 📄 page.tsx  # Report view
│   │   │   │
│   │   │   ├── 📁 users/                # User Management
│   │   │   │   ├── 📄 page.tsx          # Users overview
│   │   │   │   ├── 📄 loading.tsx       # Users loading
│   │   │   │   ├── 📁 list/             # User listing
│   │   │   │   │   ├── 📄 page.tsx      # User list page
│   │   │   │   │   └── 📄 loading.tsx   # List loading
│   │   │   │   ├── 📁 [id]/             # Individual user
│   │   │   │   │   ├── 📄 page.tsx      # User profile view
│   │   │   │   │   ├── 📄 loading.tsx   # User loading
│   │   │   │   │   ├── 📁 edit/         # Edit user
│   │   │   │   │   │   └── 📄 page.tsx  # Edit user page
│   │   │   │   │   ├── 📁 activity/     # User activity
│   │   │   │   │   │   └── 📄 page.tsx  # Activity log
│   │   │   │   │   ├── 📁 content/      # User content
│   │   │   │   │   │   └── 📄 page.tsx  # User content view
│   │   │   │   │   └── 📁 membership/   # User membership
│   │   │   │   │       └── 📄 page.tsx  # Membership details
│   │   │   │   ├── 📁 roles/            # Role management
│   │   │   │   │   ├── 📄 page.tsx      # Roles overview
│   │   │   │   │   ├── 📁 create/       # Create role
│   │   │   │   │   │   └── 📄 page.tsx  # Create role page
│   │   │   │   │   └── 📁 [roleId]/     # Individual role
│   │   │   │   │       ├── 📄 page.tsx  # Role details
│   │   │   │   │       └── 📁 edit/     # Edit role
│   │   │   │   │           └── 📄 page.tsx # Edit role page
│   │   │   │   ├── 📁 permissions/      # Permission management
│   │   │   │   │   ├── 📄 page.tsx      # Permissions overview
│   │   │   │   │   └── 📁 assign/       # Assign permissions
│   │   │   │   │       └── 📄 page.tsx  # Permission assignment
│   │   │   │   └── 📁 bulk-actions/     # Bulk user actions
│   │   │   │       ├── 📄 page.tsx      # Bulk actions page
│   │   │   │       ├── 📁 import/       # Import users
│   │   │   │       │   └── 📄 page.tsx  # User import
│   │   │   │       └── 📁 export/       # Export users
│   │   │   │           └── 📄 page.tsx  # User export
│   │   │   │
│   │   │   ├── 📁 content/              # Content Management
│   │   │   │   ├── 📄 page.tsx          # Content overview
│   │   │   │   ├── 📄 loading.tsx       # Content loading
│   │   │   │   ├── 📁 articles/         # Article management
│   │   │   │   │   ├── 📄 page.tsx      # Articles overview
│   │   │   │   │   ├── 📁 list/         # Article listing
│   │   │   │   │   │   └── 📄 page.tsx  # Article list
│   │   │   │   │   ├── 📁 [id]/         # Individual article
│   │   │   │   │   │   ├── 📄 page.tsx  # Article view
│   │   │   │   │   │   ├── 📁 edit/     # Edit article
│   │   │   │   │   │   │   └── 📄 page.tsx # Edit article
│   │   │   │   │   │   └── 📁 analytics/ # Article analytics
│   │   │   │   │   │       └── 📄 page.tsx # Article metrics
│   │   │   │   │   ├── 📁 categories/   # Article categories
│   │   │   │   │   │   ├── 📄 page.tsx  # Categories management
│   │   │   │   │   │   └── 📁 create/   # Create category
│   │   │   │   │   │       └── 📄 page.tsx # Create category
│   │   │   │   │   └── 📁 moderation/   # Article moderation
│   │   │   │   │       ├── 📄 page.tsx  # Moderation queue
│   │   │   │   │       └── 📁 pending/  # Pending articles
│   │   │   │   │           └── 📄 page.tsx # Pending review
│   │   │   │   ├── 📁 forum/            # Forum management
│   │   │   │   │   ├── 📄 page.tsx      # Forum overview
│   │   │   │   │   ├── 📁 posts/        # Forum posts
│   │   │   │   │   │   ├── 📄 page.tsx  # Posts management
│   │   │   │   │   │   └── 📁 [id]/     # Individual post
│   │   │   │   │   │       └── 📄 page.tsx # Post details
│   │   │   │   │   ├── 📁 topics/       # Forum topics
│   │   │   │   │   │   └── 📄 page.tsx  # Topics management
│   │   │   │   │   ├── 📁 categories/   # Forum categories
│   │   │   │   │   │   └── 📄 page.tsx  # Category management
│   │   │   │   │   └── 📁 moderation/   # Forum moderation
│   │   │   │   │       ├── 📄 page.tsx  # Moderation tools
│   │   │   │   │       ├── 📁 reports/  # Reported content
│   │   │   │   │       │   └── 📄 page.tsx # Reports queue
│   │   │   │   │       └── 📁 banned/   # Banned content
│   │   │   │   │           └── 📄 page.tsx # Banned items
│   │   │   │   ├── 📁 events/           # Event management
│   │   │   │   │   ├── 📄 page.tsx      # Events overview
│   │   │   │   │   ├── 📁 list/         # Event listing
│   │   │   │   │   │   └── 📄 page.tsx  # Event list
│   │   │   │   │   ├── 📁 [id]/         # Individual event
│   │   │   │   │   │   ├── 📄 page.tsx  # Event details
│   │   │   │   │   │   ├── 📁 edit/     # Edit event
│   │   │   │   │   │   │   └── 📄 page.tsx # Edit event
│   │   │   │   │   │   ├── 📁 attendees/ # Event attendees
│   │   │   │   │   │   │   └── 📄 page.tsx # Attendee management
│   │   │   │   │   │   └── 📁 analytics/ # Event analytics
│   │   │   │   │   │       └── 📄 page.tsx # Event metrics
│   │   │   │   │   ├── 📁 create/       # Create event
│   │   │   │   │   │   └── 📄 page.tsx  # Event creation
│   │   │   │   │   └── 📁 cultural/     # Cultural events
│   │   │   │   │       ├── 📄 page.tsx  # Cultural events management
│   │   │   │   │       └── 📁 calendar/ # Cultural calendar
│   │   │   │   │           └── 📄 page.tsx # Calendar management
│   │   │   │   └── 📁 media/            # Media management
│   │   │   │       ├── 📄 page.tsx      # Media overview
│   │   │   │       ├── 📁 library/      # Media library
│   │   │   │       │   ├── 📄 page.tsx  # Media library
│   │   │   │       │   └── 📁 upload/   # Upload media
│   │   │   │       │       └── 📄 page.tsx # Upload interface
│   │   │   │       ├── 📁 galleries/    # Gallery management
│   │   │   │       │   └── 📄 page.tsx  # Gallery management
│   │   │   │       └── 📁 storage/      # Storage management
│   │   │   │           └── 📄 page.tsx  # Storage analytics
│   │   │   │
│   │   │   ├── 📁 membership/           # Membership Management
│   │   │   │   ├── 📄 page.tsx          # Membership overview
│   │   │   │   ├── 📄 loading.tsx       # Membership loading
│   │   │   │   ├── 📁 plans/            # Membership plans
│   │   │   │   │   ├── 📄 page.tsx      # Plans management
│   │   │   │   │   ├── 📁 create/       # Create plan
│   │   │   │   │   │   └── 📄 page.tsx  # Create plan page
│   │   │   │   │   └── 📁 [id]/         # Individual plan
│   │   │   │   │       ├── 📄 page.tsx  # Plan details
│   │   │   │   │       └── 📁 edit/     # Edit plan
│   │   │   │   │           └── 📄 page.tsx # Edit plan
│   │   │   │   ├── 📁 subscriptions/    # Subscription management
│   │   │   │   │   ├── 📄 page.tsx      # Subscriptions overview
│   │   │   │   │   ├── 📁 active/       # Active subscriptions
│   │   │   │   │   │   └── 📄 page.tsx  # Active subs
│   │   │   │   │   ├── 📁 expired/      # Expired subscriptions
│   │   │   │   │   │   └── 📄 page.tsx  # Expired subs
│   │   │   │   │   └── 📁 cancelled/    # Cancelled subscriptions
│   │   │   │   │       └── 📄 page.tsx  # Cancelled subs
│   │   │   │   ├── 📁 billing/          # Billing management
│   │   │   │   │   ├── 📄 page.tsx      # Billing overview
│   │   │   │   │   ├── 📁 invoices/     # Invoice management
│   │   │   │   │   │   ├── 📄 page.tsx  # Invoices list
│   │   │   │   │   │   └── 📁 [id]/     # Individual invoice
│   │   │   │   │   │       └── 📄 page.tsx # Invoice details
│   │   │   │   │   ├── 📁 payments/     # Payment management
│   │   │   │   │   │   ├── 📄 page.tsx  # Payments overview
│   │   │   │   │   │   ├── 📁 successful/ # Successful payments
│   │   │   │   │   │   │   └── 📄 page.tsx # Success payments
│   │   │   │   │   │   ├── 📁 failed/   # Failed payments
│   │   │   │   │   │   │   └── 📄 page.tsx # Failed payments
│   │   │   │   │   │   └── 📁 pending/  # Pending payments
│   │   │   │   │   │       └── 📄 page.tsx # Pending payments
│   │   │   │   │   └── 📁 refunds/      # Refund management
│   │   │   │   │       ├── 📄 page.tsx  # Refunds overview
│   │   │   │   │       └── 📁 process/  # Process refund
│   │   │   │   │           └── 📄 page.tsx # Refund processing
│   │   │   │   └── 📁 analytics/        # Membership analytics
│   │   │   │       ├── 📄 page.tsx      # Membership metrics
│   │   │   │       ├── 📁 revenue/      # Revenue analytics
│   │   │   │       │   └── 📄 page.tsx  # Revenue dashboard
│   │   │   │       └── 📁 retention/    # Retention analytics
│   │   │   │           └── 📄 page.tsx  # Retention metrics
│   │   │   │
│   │   │   ├── 📁 cultural/             # Portuguese Cultural Management
│   │   │   │   ├── 📄 page.tsx          # Cultural overview
│   │   │   │   ├── 📁 heritage/         # Heritage management
│   │   │   │   │   ├── 📄 page.tsx      # Heritage content
│   │   │   │   │   ├── 📁 articles/     # Heritage articles
│   │   │   │   │   │   └── 📄 page.tsx  # Heritage articles
│   │   │   │   │   ├── 📁 traditions/   # Portuguese traditions
│   │   │   │   │   │   └── 📄 page.tsx  # Traditions management
│   │   │   │   │   └── 📁 history/      # Historical content
│   │   │   │   │       └── 📄 page.tsx  # History management
│   │   │   │   ├── 📁 diaspora/         # Diaspora management
│   │   │   │   │   ├── 📄 page.tsx      # Diaspora overview
│   │   │   │   │   ├── 📁 south-africa/ # SA Portuguese community
│   │   │   │   │   │   ├── 📄 page.tsx  # SA community
│   │   │   │   │   │   ├── 📁 regions/  # SA regions
│   │   │   │   │   │   │   └── 📄 page.tsx # Regional management
│   │   │   │   │   │   └── 📁 organizations/ # Portuguese organizations
│   │   │   │   │   │       └── 📄 page.tsx # Org management
│   │   │   │   │   └── 📁 global/       # Global diaspora
│   │   │   │   │       └── 📄 page.tsx  # Global communities
│   │   │   │   ├── 📁 holidays/         # Portuguese holidays
│   │   │   │   │   ├── 📄 page.tsx      # Holiday management
│   │   │   │   │   ├── 📁 calendar/     # Holiday calendar
│   │   │   │   │   │   └── 📄 page.tsx  # Calendar management
│   │   │   │   │   └── 📁 create/       # Create holiday
│   │   │   │   │       └── 📄 page.tsx  # Holiday creation
│   │   │   │   ├── 📁 cuisine/          # Portuguese cuisine
│   │   │   │   │   ├── 📄 page.tsx      # Cuisine management
│   │   │   │   │   ├── 📁 recipes/      # Recipe management
│   │   │   │   │   │   └── 📄 page.tsx  # Recipe admin
│   │   │   │   │   └── 📁 restaurants/  # Portuguese restaurants
│   │   │   │   │       └── 📄 page.tsx  # Restaurant directory
│   │   │   │   └── 📁 music/            # Portuguese music & fado
│   │   │   │       ├── 📄 page.tsx      # Music management
│   │   │   │       ├── 📁 fado/         # Fado music
│   │   │   │       │   └── 📄 page.tsx  # Fado content
│   │   │   │       └── 📁 artists/      # Portuguese artists
│   │   │   │           └── 📄 page.tsx  # Artist management
│   │   │   │
│   │   │   ├── 📁 system/               # System Management
│   │   │   │   ├── 📄 page.tsx          # System overview
│   │   │   │   ├── 📁 settings/         # System settings
│   │   │   │   │   ├── 📄 page.tsx      # General settings
│   │   │   │   │   ├── 📁 security/     # Security settings
│   │   │   │   │   │   └── 📄 page.tsx  # Security config
│   │   │   │   │   ├── 📁 email/        # Email settings
│   │   │   │   │   │   └── 📄 page.tsx  # Email config
│   │   │   │   │   ├── 📁 payment/      # Payment settings
│   │   │   │   │   │   └── 📄 page.tsx  # Payment config
│   │   │   │   │   └── 📁 integrations/ # Integration settings
│   │   │   │   │       └── 📄 page.tsx  # Integration config
│   │   │   │   ├── 📁 logs/             # System logs
│   │   │   │   │   ├── 📄 page.tsx      # Logs overview
│   │   │   │   │   ├── 📁 application/  # Application logs
│   │   │   │   │   │   └── 📄 page.tsx  # App logs
│   │   │   │   │   ├── 📁 security/     # Security logs
│   │   │   │   │   │   └── 📄 page.tsx  # Security logs
│   │   │   │   │   └── 📁 audit/        # Audit logs
│   │   │   │   │       └── 📄 page.tsx  # Audit trail
│   │   │   │   ├── 📁 backup/           # Backup management
│   │   │   │   │   ├── 📄 page.tsx      # Backup overview
│   │   │   │   │   ├── 📁 create/       # Create backup
│   │   │   │   │   │   └── 📄 page.tsx  # Backup creation
│   │   │   │   │   └── 📁 restore/      # Restore backup
│   │   │   │   │       └── 📄 page.tsx  # Backup restoration
│   │   │   │   ├── 📁 maintenance/      # Maintenance mode
│   │   │   │   │   └── 📄 page.tsx      # Maintenance control
│   │   │   │   └── 📁 health/           # System health
│   │   │   │       ├── 📄 page.tsx      # Health dashboard
│   │   │   │       ├── 📁 database/     # Database health
│   │   │   │       │   └── 📄 page.tsx  # DB monitoring
│   │   │   │       ├── 📁 api/          # API health
│   │   │   │       │   └── 📄 page.tsx  # API monitoring
│   │   │   │       └── 📁 storage/      # Storage health
│   │   │   │           └── 📄 page.tsx  # Storage monitoring
│   │   │   │
│   │   │   └── 📁 employees/            # Employee Management
│   │   │       ├── 📄 page.tsx          # Employees overview
│   │   │       ├── 📁 list/             # Employee listing
│   │   │       │   └── 📄 page.tsx      # Employee list
│   │   │       ├── 📁 [id]/             # Individual employee
│   │   │       │   ├── 📄 page.tsx      # Employee profile
│   │   │       │   ├── 📁 edit/         # Edit employee
│   │   │       │   │   └── 📄 page.tsx  # Edit employee
│   │   │       │   ├── 📁 permissions/  # Employee permissions
│   │   │       │   │   └── 📄 page.tsx  # Permission management
│   │   │       │   └── 📁 activity/     # Employee activity
│   │   │       │       └── 📄 page.tsx  # Activity log
│   │   │       ├── 📁 roles/            # Employee roles
│   │   │       │   ├── 📄 page.tsx      # Role management
│   │   │       │   └── 📁 create/       # Create role
│   │   │       │       └── 📄 page.tsx  # Role creation
│   │   │       └── 📁 invite/           # Invite employees
│   │   │           └── 📄 page.tsx      # Employee invitation
│   │   │
│   │   ├── 📁 api/                      # Admin API routes
│   │   │   ├── 📁 auth/                 # Admin authentication
│   │   │   │   └── 📄 route.ts          # Admin auth routes
│   │   │   ├── 📁 analytics/            # Analytics API
│   │   │   │   └── 📄 route.ts          # Analytics endpoints
│   │   │   ├── 📁 reports/              # Report generation
│   │   │   │   └── 📄 route.ts          # Report API
│   │   │   ├── 📁 export/               # Data export
│   │   │   │   └── 📄 route.ts          # Export endpoints
│   │   │   └── 📁 import/               # Data import
│   │   │       └── 📄 route.ts          # Import endpoints
│   │   │
│   │   └── 📄 sitemap.ts                # Admin sitemap
│   │
│   ├── 📁 components/                   # Admin Components
│   │   ├── 📁 layout/                   # Admin Layout Components
│   │   │   ├── 📄 admin-header.tsx      # Admin header
│   │   │   ├── 📄 admin-sidebar.tsx     # Admin sidebar
│   │   │   ├── 📄 admin-navigation.tsx  # Admin navigation
│   │   │   ├── 📄 breadcrumbs.tsx       # Admin breadcrumbs
│   │   │   ├── 📄 quick-actions.tsx     # Quick action buttons
│   │   │   └── 📄 index.ts              # Layout exports
│   │   │
│   │   ├── 📁 auth/                     # Admin Auth Components
│   │   │   ├── 📄 admin-login-form.tsx  # Admin login form
│   │   │   ├── 📄 sso-login.tsx         # SSO login component
│   │   │   ├── 📄 two-factor-auth.tsx   # 2FA component
│   │   │   ├── 📄 employee-guard.tsx    # Employee route protection
│   │   │   └── 📄 index.ts              # Auth components exports
│   │   │
│   │   ├── 📁 analytics/                # Analytics Components
│   │   │   ├── 📄 dashboard-overview.tsx # Analytics overview
│   │   │   ├── 📄 user-analytics.tsx    # User analytics charts
│   │   │   ├── 📄 content-analytics.tsx # Content analytics
│   │   │   ├── 📄 revenue-analytics.tsx # Revenue charts
│   │   │   ├── 📄 cultural-analytics.tsx # Cultural engagement
│   │   │   ├── 📄 chart-components.tsx  # Reusable charts
│   │   │   ├── 📄 metrics-cards.tsx     # Metric display cards
│   │   │   └── 📄 index.ts              # Analytics exports
│   │   │
│   │   ├── 📁 users/                    # User Management Components
│   │   │   ├── 📄 user-table.tsx        # User data table
│   │   │   ├── 📄 user-details.tsx      # User detail view
│   │   │   ├── 📄 user-editor.tsx       # User editor form
│   │   │   ├── 📄 role-assignment.tsx   # Role assignment
│   │   │   ├── 📄 permission-matrix.tsx # Permission matrix
│   │   │   ├── 📄 bulk-actions.tsx      # Bulk user actions
│   │   │   └── 📄 index.ts              # User components exports
│   │   │
│   │   ├── 📁 content/                  # Content Management Components
│   │   │   ├── 📄 content-table.tsx     # Content listing table
│   │   │   ├── 📄 content-editor.tsx    # Content editor
│   │   │   ├── 📄 moderation-queue.tsx  # Moderation queue
│   │   │   ├── 📄 content-preview.tsx   # Content preview
│   │   │   ├── 📄 category-manager.tsx  # Category management
│   │   │   ├── 📄 content-analytics.tsx # Content metrics
│   │   │   └── 📄 index.ts              # Content components exports
│   │   │
│   │   ├── 📁 membership/               # Membership Components
│   │   │   ├── 📄 membership-overview.tsx # Membership dashboard
│   │   │   ├── 📄 plan-editor.tsx       # Plan editor
│   │   │   ├── 📄 subscription-table.tsx # Subscription table
│   │   │   ├── 📄 billing-overview.tsx  # Billing dashboard
│   │   │   ├── 📄 payment-processor.tsx # Payment processing
│   │   │   ├── 📄 refund-manager.tsx    # Refund management
│   │   │   └── 📄 index.ts              # Membership exports
│   │   │
│   │   ├── 📁 cultural/                 # Cultural Management Components
│   │   │   ├── 📄 heritage-manager.tsx  # Heritage content manager
│   │   │   ├── 📄 diaspora-dashboard.tsx # Diaspora dashboard
│   │   │   ├── 📄 cultural-calendar.tsx # Cultural calendar admin
│   │   │   ├── 📄 tradition-editor.tsx  # Tradition editor
│   │   │   ├── 📄 holiday-manager.tsx   # Holiday management
│   │   │   ├── 📄 cuisine-curator.tsx   # Cuisine content curator
│   │   │   └── 📄 index.ts              # Cultural exports
│   │   │
│   │   ├── 📁 reports/                  # Reporting Components
│   │   │   ├── 📄 report-builder.tsx    # Report builder interface
│   │   │   ├── 📄 report-viewer.tsx     # Report viewer
│   │   │   ├── 📄 chart-builder.tsx     # Chart builder
│   │   │   ├── 📄 export-manager.tsx    # Export manager
│   │   │   ├── 📄 scheduled-reports.tsx # Scheduled reports
│   │   │   └── 📄 index.ts              # Reports exports
│   │   │
│   │   ├── 📁 system/                   # System Components
│   │   │   ├── 📄 system-health.tsx     # System health dashboard
│   │   │   ├── 📄 log-viewer.tsx        # Log viewer component
│   │   │   ├── 📄 backup-manager.tsx    # Backup management
│   │   │   ├── 📄 settings-editor.tsx   # Settings editor
│   │   │   ├── 📄 maintenance-mode.tsx  # Maintenance mode control
│   │   │   └── 📄 index.ts              # System exports
│   │   │
│   │   └── 📄 index.ts                  # All admin components exports
│   │
│   ├── 📁 hooks/                        # Admin-Specific Hooks
│   │   ├── 📄 use-admin-auth.ts         # Admin authentication hook
│   │   ├── 📄 use-analytics.ts          # Analytics data hook
│   │   ├── 📄 use-user-management.ts    # User management hook
│   │   ├── 📄 use-content-moderation.ts # Content moderation hook
│   │   ├── 📄 use-membership-admin.ts   # Membership admin hook
│   │   ├── 📄 use-system-health.ts      # System health hook
│   │   ├── 📄 use-cultural-admin.ts     # Cultural admin hook
│   │   ├── 📄 use-reports.ts            # Reports hook
│   │   └── 📄 index.ts                  # Admin hooks exports
│   │
│   ├── 📁 styles/                       # Admin Styling
│   │   ├── 📄 globals.css               # Global admin styles
│   │   ├── 📄 admin-components.css      # Admin component styles
│   │   ├── 📄 dashboard.css             # Dashboard styles
│   │   ├── 📄 tables.css                # Data table styles
│   │   ├── 📄 charts.css                # Chart styles
│   │   ├── 📄 forms.css                 # Admin form styles
│   │   └── 📄 responsive.css            # Admin responsive styles
│   │
│   ├── 📁 lib/                          # Admin Utilities
│   │   ├── 📄 admin-api-client.ts       # Admin API client
│   │   ├── 📄 admin-auth.ts             # Admin authentication utilities
│   │   ├── 📄 permissions.ts            # Permission utilities
│   │   ├── 📄 analytics.ts              # Analytics utilities
│   │   ├── 📄 reports.ts                # Report utilities
│   │   ├── 📄 export.ts                 # Data export utilities
│   │   ├── 📄 validation.ts             # Admin validation
│   │   └── 📄 index.ts                  # Admin lib exports
│   │
│   ├── 📁 types/                        # Admin TypeScript Types
│   │   ├── 📄 admin.types.ts            # Admin-specific types
│   │   ├── 📄 analytics.types.ts        # Analytics types
│   │   ├── 📄 user-management.types.ts  # User management types
│   │   ├── 📄 content-management.types.ts # Content management types
│   │   ├── 📄 membership-admin.types.ts # Membership admin types
│   │   ├── 📄 reports.types.ts          # Report types
│   │   ├── 📄 system.types.ts           # System types
│   │   └── 📄 index.ts                  # Admin types exports
│   │
│   └── 📁 config/                       # Admin Configuration
│       ├── 📄 admin.config.ts           # Admin app configuration
│       ├── 📄 auth.config.ts            # Admin auth configuration
│       ├── 📄 permissions.config.ts     # Permission configuration
│       ├── 📄 analytics.config.ts       # Analytics configuration
│       └── 📄 index.ts                  # Admin config exports
│
├── 📄 next.config.js                    # Next.js admin configuration
├── 📄 tailwind.config.js                # Tailwind CSS admin configuration
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 package.json                      # Package dependencies
├── 📄 .env.local.example                # Environment variables example
└── 📄 README.md                         # Admin dashboard documentation
```

