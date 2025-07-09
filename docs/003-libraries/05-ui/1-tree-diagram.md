# 🎨 @pfsa/ui Library - Comprehensive Component System

## 📁 **ATOMS** (38 Components)
```
📁 libs/ui/src/components/atoms/

### 🔘 Form Controls (14 components)
├── 📁 button/                    # ← MOVE FROM: button.tsx
├── 📁 input/                     # ← MOVE FROM: input.tsx  
├── 📁 textarea/                  # ← MOVE FROM: textarea.tsx
├── 📁 label/                     # ← MOVE FROM: label.tsx
├── 📁 checkbox/                  # ← MOVE FROM: checkbox.tsx
├── 📁 radio-group/               # ← MOVE FROM: radio-group.tsx
├── 📁 switch/                    # ← MOVE FROM: switch.tsx
├── 📁 toggle/                    # ← MOVE FROM: toggle.tsx
├── 📁 slider/                    # ← MOVE FROM: slider.tsx
├── 📁 input-otp/                 # ← MOVE FROM: input-otp.tsx
├── 📁 color-picker/              # ← NEW: Color selection input
├── 📁 range-slider/              # ← NEW: Dual handle range slider
├── 📁 pin-input/                 # ← NEW: PIN/OTP code input
├── 📁 rating/                    # ← NEW: Star rating component

### 📊 Data Display (8 components)
├── 📁 badge/                     # ← MOVE FROM: badge.tsx
├── 📁 avatar/                    # ← MOVE FROM: avatar.tsx
├── 📁 progress/                  # ← MOVE FROM: progress.tsx
├── 📁 skeleton/                  # ← MOVE FROM: skeleton.tsx
├── 📁 spinner/                   # ← NEW: Loading spinner
├── 📁 stat/                      # ← NEW: Statistic display
├── 📁 code/                      # ← NEW: Code snippet display
├── 📁 kbd/                       # ← NEW: Keyboard key display

### 🎯 Visual Elements (8 components)
├── 📁 separator/                 # ← MOVE FROM: separator.tsx
├── 📁 divider/                   # ← NEW: Enhanced separator with text
├── 📁 icon/                      # ← NEW: Icon wrapper component
├── 📁 image/                     # ← NEW: Enhanced image with fallback
├── 📁 video/                     # ← NEW: Video player component
├── 📁 audio/                     # ← NEW: Audio player component
├── 📁 flag/                      # ← NEW: Country flag component
├── 📁 emoji/                     # ← NEW: Emoji display component

### 🔗 Navigation Elements (8 components)
├── 📁 link/                      # ← NEW: Enhanced link component
├── 📁 button-group/              # ← NEW: Grouped buttons
├── 📁 breadcrumb-item/           # ← NEW: Individual breadcrumb item
├── 📁 tab/                       # ← NEW: Individual tab component
├── 📁 step/                      # ← NEW: Stepper step component
├── 📁 anchor/                    # ← NEW: Scroll anchor link
├── 📁 back-button/               # ← NEW: Browser back button
├── 📁 close-button/              # ← NEW: Close/dismiss button
```

## 📁 **MOLECULES** (32 Components)
```
📁 libs/ui/src/components/molecules/

### 📝 Form Molecules (12 components)
├── 📁 form-field/                # ← MOVE FROM: form.tsx (FormField parts)
├── 📁 select/                    # ← MOVE FROM: select.tsx
├── 📁 combobox/                  # ← NEW: Searchable select
├── 📁 multi-select/              # ← NEW: Multiple selection
├── 📁 date-picker/               # ← NEW: Date selection
├── 📁 time-picker/               # ← NEW: Time selection
├── 📁 datetime-picker/           # ← NEW: Date & time selection
├── 📁 file-upload/               # ← NEW: File upload with preview
├── 📁 image-upload/              # ← NEW: Image upload with crop
├── 📁 search-input/              # ← NEW: Search with suggestions
├── 📁 password-input/            # ← NEW: Password with strength meter
├── 📁 phone-input/               # ← NEW: Phone with country code

### 🎯 Interactive Molecules (8 components)
├── 📁 dropdown-menu/             # ← MOVE FROM: dropdown-menu.tsx
├── 📁 popover/                   # ← MOVE FROM: popover.tsx
├── 📁 hover-card/                # ← MOVE FROM: hover-card.tsx
├── 📁 tooltip/                   # ← MOVE FROM: tooltip.tsx
├── 📁 toggle-group/              # ← MOVE FROM: toggle-group.tsx
├── 📁 action-sheet/              # ← NEW: Mobile action selector
├── 📁 floating-button/           # ← NEW: Floating action button
├── 📁 quick-actions/             # ← NEW: Quick action buttons

### 📊 Content Molecules (6 components)
├── 📁 card/                      # ← MOVE FROM: card.tsx
├── 📁 alert/                     # ← MOVE FROM: alert.tsx
├── 📁 callout/                   # ← NEW: Enhanced alert with icon
├── 📁 banner/                    # ← NEW: Promotional banner
├── 📁 announcement/              # ← NEW: Site announcement bar
├── 📁 feature-flag/              # ← NEW: Feature toggle display

### 🧭 Navigation Molecules (6 components)
├── 📁 breadcrumb/                # ← MOVE FROM: breadcrumb.tsx
├── 📁 pagination/                # ← MOVE FROM: pagination.tsx
├── 📁 stepper/                   # ← NEW: Multi-step process
├── 📁 progress-steps/            # ← NEW: Progress indicator
├── 📁 tab-list/                  # ← NEW: Tab navigation
├── 📁 link-group/                # ← NEW: Grouped navigation links
```

## 📁 **ORGANISMS** (28 Components)
```
📁 libs/ui/src/components/organisms/

### 🧭 Navigation Organisms (8 components)
├── 📁 navigation-menu/           # ← MOVE FROM: navigation-menu.tsx
├── 📁 menubar/                   # ← MOVE FROM: menubar.tsx
├── 📁 sidebar/                   # ← MOVE FROM: sidebar.tsx
├── 📁 header/                    # ← NEW: Site header
├── 📁 footer/                    # ← NEW: Site footer
├── 📁 mobile-nav/                # ← NEW: Mobile navigation
├── 📁 mega-menu/                 # ← NEW: Large dropdown menu
├── 📁 context-menu/              # ← MOVE FROM: context-menu.tsx

### 📊 Data Organisms (6 components)
├── 📁 data-table/                # ← MOVE FROM: table.tsx (enhanced)
├── 📁 data-grid/                 # ← NEW: Advanced data grid
├── 📁 chart/                     # ← MOVE FROM: chart.tsx
├── 📁 calendar/                  # ← NEW: Full calendar view
├── 📁 timeline/                  # ← NEW: Event timeline
├── 📁 kanban-board/              # ← NEW: Kanban-style board

### 🎥 Media Organisms (4 components)
├── 📁 carousel/                  # ← MOVE FROM: carousel.tsx
├── 📁 gallery/                   # ← NEW: Image/video gallery
├── 📁 media-player/              # ← NEW: Advanced media player
├── 📁 image-comparison/          # ← NEW: Before/after image slider

### 🔍 Search & Filter (4 components)
├── 📁 command/                   # ← MOVE FROM: command.tsx
├── 📁 search-bar/                # ← NEW: Advanced search with filters
├── 📁 filter-panel/              # ← NEW: Advanced filtering
├── 📁 faceted-search/            # ← NEW: Multi-faceted search

### 🔧 Utility Organisms (6 components)
├── 📁 scroll-area/               # ← MOVE FROM: scroll-area.tsx
├── 📁 resizable/                 # ← MOVE FROM: resizable.tsx
├── 📁 collapsible/               # ← MOVE FROM: collapsible.tsx
├── 📁 accordion/                 # ← MOVE FROM: accordion.tsx
├── 📁 tabs/                      # ← MOVE FROM: tabs.tsx
├── 📁 virtual-list/              # ← NEW: Virtualized list for performance
```

## 📁 **TEMPLATES** (16 Components)
```
📁 libs/ui/src/components/templates/

### 💬 Overlay Templates (8 components)
├── 📁 dialog/                    # ← MOVE FROM: dialog.tsx
├── 📁 alert-dialog/              # ← MOVE FROM: alert-dialog.tsx
├── 📁 sheet/                     # ← MOVE FROM: sheet.tsx
├── 📁 drawer/                    # ← MOVE FROM: drawer.tsx
├── 📁 modal/                     # ← NEW: Enhanced modal
├── 📁 bottomsheet/               # ← NEW: Mobile bottom sheet
├── 📁 lightbox/                  # ← NEW: Image/media lightbox
├── 📁 confirm-dialog/            # ← NEW: Confirmation dialog

### 📱 Layout Templates (8 components)
├── 📁 page-layout/               # ← NEW: Basic page layout
├── 📁 dashboard-layout/          # ← NEW: Dashboard layout
├── 📁 auth-layout/               # ← NEW: Authentication layout
├── 📁 split-layout/              # ← NEW: Two-pane split layout
├── 📁 master-detail/             # ← NEW: Master-detail layout
├── 📁 centered-layout/           # ← NEW: Centered content layout
├── 📁 full-screen/               # ← NEW: Full-screen layout
├── 📁 container/                 # ← NEW: Content container
```

## 📁 **NOTIFICATIONS** (6 Components)
```
📁 libs/ui/src/components/notifications/
├── 📁 toast/                     # ← MOVE FROM: sonner.tsx
├── 📁 notification/              # ← NEW: System notification
├── 📁 alert-banner/              # ← NEW: Site-wide alert
├── 📁 status-indicator/          # ← NEW: Real-time status
├── 📁 progress-toast/            # ← NEW: Progress notification
├── 📁 interactive-toast/         # ← NEW: Toast with actions
```

## 📁 **PORTUGUESE FORUM SPECIFIC** (18 Components)
```
📁 libs/ui/src/components/pfsa/

### 🇵🇹 Cultural Components (6 components)
├── 📁 language-switcher/         # ← NEW: PT/EN language toggle
├── 📁 cultural-calendar/         # ← NEW: Portuguese cultural events
├── 📁 flag-display/              # ← NEW: PT/SA flag components
├── 📁 currency-display/          # ← NEW: Multi-currency (EUR/ZAR)
├── 📁 cultural-quote/            # ← NEW: Portuguese quotes/sayings
├── 📁 heritage-showcase/         # ← NEW: Cultural heritage display

### 👥 Community Components (6 components)
├── 📁 member-card/               # ← NEW: Community member profile
├── 📁 event-card/                # ← NEW: Community event display
├── 📁 forum-post/                # ← NEW: Forum post component
├── 📁 comment-thread/            # ← NEW: Threaded comments
├── 📁 member-directory/          # ← NEW: Member listing
├── 📁 activity-feed/             # ← NEW: Community activity stream

### 💼 Business Components (6 components)
├── 📁 membership-tier/           # ← NEW: Membership level display
├── 📁 payment-card/              # ← NEW: Payment method display
├── 📁 invoice-summary/           # ← NEW: Invoice/receipt display
├── 📁 subscription-status/       # ← NEW: Subscription status
├── 📁 benefit-list/              # ← NEW: Membership benefits
├── 📁 service-showcase/          # ← NEW: Business service display
```

## 📁 **ADVANCED COMPONENTS** (12 Components)
```
📁 libs/ui/src/components/advanced/

### 🚀 Performance Components (4 components)
├── 📁 lazy-component/            # ← NEW: Lazy loading wrapper
├── 📁 infinite-scroll/           # ← NEW: Infinite scrolling
├── 📁 virtual-grid/              # ← NEW: Virtualized grid
├── 📁 skeleton-loader/           # ← NEW: Advanced skeleton states

### 🎨 Interactive Components (4 components)
├── 📁 drag-drop/                 # ← NEW: Drag and drop container
├── 📁 sortable-list/             # ← NEW: Sortable item list
├── 📁 resize-panel/              # ← NEW: Resizable panels
├── 📁 split-pane/                # ← NEW: Adjustable split view

### 🔐 Security Components (4 components)
├── 📁 two-factor-auth/           # ← NEW: 2FA setup/verification
├── 📁 captcha/                   # ← NEW: CAPTCHA verification
├── 📁 security-indicator/        # ← NEW: Security status display
├── 📁 privacy-toggle/            # ← NEW: Privacy settings control
```