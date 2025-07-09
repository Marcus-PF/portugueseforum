/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/ui – Public Breadcrumbs             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Breadcrumb navigation component for public pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../shared/LayoutTypes';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Breadcrumb Props
 * ───────────────────────────────────────────────────────────── */
interface PublicBreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  showHome?: boolean;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Public Breadcrumbs Component
 * ───────────────────────────────────────────────────────────── */
export const PublicBreadcrumbs: React.FC<PublicBreadcrumbsProps> = ({
  breadcrumbs,
  showHome = true,
}) => {
  if (breadcrumbs.length === 0) return null;

  const allBreadcrumbs = showHome 
    ? [{ label: 'Home', href: '/' }, ...breadcrumbs]
    : breadcrumbs;

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground py-4">
      {allBreadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )}
          
          {breadcrumb.current ? (
            <span className="font-medium text-foreground">
              {breadcrumb.label}
            </span>
          ) : breadcrumb.href ? (
            <Link
              href={breadcrumb.href}
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              {index === 0 && showHome && (
                <Home className="h-4 w-4" />
              )}
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="flex items-center gap-1">
              {index === 0 && showHome && (
                <Home className="h-4 w-4" />
              )}
              {breadcrumb.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

PublicBreadcrumbs.displayName = 'PublicBreadcrumbs';