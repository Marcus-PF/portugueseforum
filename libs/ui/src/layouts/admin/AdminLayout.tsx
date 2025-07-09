/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @pfsa/ui – Admin Layout                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Main admin layout component that provides the sidebar,
 * header, and main content area for admin pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { 
  SidebarProvider, 
  SidebarInset 
} from '../../atoms';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminBreadcrumbs } from './AdminBreadcrumbs';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Props
 * ───────────────────────────────────────────────────────────── */
export interface AdminLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Admin Layout Component
 * ───────────────────────────────────────────────────────────── */
export const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  breadcrumbs = [] 
}) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content */}
        <SidebarInset className="flex flex-1 flex-col">
          {/* Header */}
          <AdminHeader />
          
          {/* Main Content Area */}
          <main className="flex-1 p-6">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="mb-6">
                <AdminBreadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            )}
            
            {/* Page Content */}
            <div className="space-y-6">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

AdminLayout.displayName = 'AdminLayout';