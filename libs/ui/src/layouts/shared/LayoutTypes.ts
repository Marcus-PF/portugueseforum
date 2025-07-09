/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @pfsa/ui – Layout System Type Definitions       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shared TypeScript interfaces and types for all layout components
 * across public, admin, and documentation sections.
 *
 * Exports:
 *  - Layout component interfaces
 *  - Navigation configuration types
 *  - Shared layout props and states
 */

import * as React from 'react';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Base Layout Types
 * ───────────────────────────────────────────────────────────── */
export interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export interface LayoutMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

/* ─────────────────────────────────────────────────────────────
 * 🧭 Navigation Types
 * ───────────────────────────────────────────────────────────── */
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  items?: NavigationItem[];
  external?: boolean;
  disabled?: boolean;
}

export interface NavigationSection {
  id: string;
  title: string;
  items: NavigationItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

/* ─────────────────────────────────────────────────────────────
 * 🏠 Public Layout Types
 * ───────────────────────────────────────────────────────────── */
export interface PublicLayoutProps extends BaseLayoutProps {
  showHeader?: boolean;
  showFooter?: boolean;
  metadata?: LayoutMetadata;
}

export interface PublicSidebarLayoutProps extends PublicLayoutProps {
  sidebarContent?: React.ReactNode;
  sidebarWidth?: 'sm' | 'md' | 'lg';
  navigation?: NavigationSection[];
}

/* ─────────────────────────────────────────────────────────────
 * 🔧 Admin Layout Types
 * ───────────────────────────────────────────────────────────── */
export interface AdminLayoutProps extends BaseLayoutProps {
  navigation?: NavigationSection[];
  user?: AdminUser;
  breadcrumbs?: BreadcrumbItem[];
  showHeader?: boolean;
  showFooter?: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'moderator' | 'user';
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

/* ─────────────────────────────────────────────────────────────
 * 📚 Documentation Layout Types
 * ───────────────────────────────────────────────────────────── */
export interface DocsLayoutProps extends BaseLayoutProps {
  title: string;
  description?: string;
  navigation?: NavigationSection[];
  tableOfContents?: TableOfContentsItem[];
  editUrl?: string;
  lastUpdated?: Date;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  href: string;
}

/* ─────────────────────────────────────────────────────────────
 * 🎛️ Layout Context Types
 * ───────────────────────────────────────────────────────────── */
export interface LayoutContextValue {
  currentSection: 'public' | 'admin' | 'docs';
  sidebarOpen: boolean;
  setSidebarOpen: (_: boolean) => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (_theme: 'light' | 'dark' | 'system') => void;
}

/* ─────────────────────────────────────────────────────────────
 * 🏗️ Layout Configuration Types
 * ───────────────────────────────────────────────────────────── */
export interface LayoutConfig {
  public: {
    navigation: NavigationSection[];
    footer: FooterConfig;
  };
  admin: {
    navigation: NavigationSection[];
    branding: BrandingConfig;
  };
  docs: {
    navigation: NavigationSection[];
    searchEnabled: boolean;
  };
}

export interface FooterConfig {
  sections: FooterSection[];
  legal: LegalLink[];
  social: SocialLink[];
}

export interface FooterSection {
  title: string;
  links: NavigationItem[];
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BrandingConfig {
  logo: string;
  logoAlt: string;
  title: string;
  subtitle?: string;
}