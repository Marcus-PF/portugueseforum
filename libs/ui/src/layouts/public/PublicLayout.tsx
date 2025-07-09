/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @pfsa/ui – Public Layout               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Main public layout component that provides the header,
 * footer, and main content area for public pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { PublicBreadcrumbs } from './PublicBreadcrumbs';
import { LayoutProps } from '../shared/LayoutTypes';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Props
 * ───────────────────────────────────────────────────────────── */
export interface PublicLayoutProps extends LayoutProps {
  showBreadcrumbs?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Public Layout Component
 * ───────────────────────────────────────────────────────────── */
export const PublicLayout: React.FC<PublicLayoutProps> = ({ 
  children, 
  breadcrumbs = [],
  showBreadcrumbs = true,
  maxWidth = 'full',
}) => {
  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm': return 'max-w-sm';
      case 'md': return 'max-w-md';
      case 'lg': return 'max-w-lg';
      case 'xl': return 'max-w-xl';
      case '2xl': return 'max-w-2xl';
      default: return 'max-w-full';
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <PublicHeader />
      
      {/* Main Content */}
      <main className="flex-1">
        <div className={`container mx-auto px-4 ${getMaxWidthClass()}`}>
          {/* Breadcrumbs */}
          {showBreadcrumbs && breadcrumbs.length > 0 && (
            <PublicBreadcrumbs breadcrumbs={breadcrumbs} />
          )}
          
          {/* Page Content */}
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <PublicFooter />
    </div>
  );
};

PublicLayout.displayName = 'PublicLayout';