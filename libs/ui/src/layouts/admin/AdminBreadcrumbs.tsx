/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @pfsa/ui – Admin Breadcrumbs              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Breadcrumb navigation component for admin pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Breadcrumb Props
 * ───────────────────────────────────────────────────────────── */
interface AdminBreadcrumbsProps {
  breadcrumbs: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Admin Breadcrumbs Component
 * ───────────────────────────────────────────────────────────── */
export const AdminBreadcrumbs: React.FC<AdminBreadcrumbsProps> = ({
  breadcrumbs,
}) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {breadcrumbs.map((breadcrumb, index) => (
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
              className="hover:text-foreground transition-colors"
            >
              {breadcrumb.label}
            </Link>
          ) : (
            <span>{breadcrumb.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

AdminBreadcrumbs.displayName = 'AdminBreadcrumbs';