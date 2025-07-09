/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @pfsa/ui – Admin Sidebar                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Admin sidebar navigation component with menu items
 * and active state management.
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@pfsa/utils/shared';
import { Button } from '../../atoms';
import { ScrollArea } from '../../atoms';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '../../atoms';
import {
  BarChart3,
  Database,
  FileText,
  Mail,
  MessageCircle,
  Settings,
  Shield,
  Users,
  LayoutDashboard,
  Globe,
  Book,
  LogOut,
} from 'lucide-react';
import { useAdminLayout } from './AdminLayoutProvider';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Navigation Items
 * ───────────────────────────────────────────────────────────── */
const navigationItems = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: Users,
  },
  {
    title: 'Posts',
    url: '/admin/posts',
    icon: FileText,
  },
  {
    title: 'Comments',
    url: '/admin/comments',
    icon: MessageCircle,
  },
  {
    title: 'Analytics',
    url: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: 'Moderation',
    url: '/admin/moderation',
    icon: Shield,
  },
  {
    title: 'Translations',
    url: '/admin/translations',
    icon: Globe,
  },
  {
    title: 'Database',
    url: '/admin/database',
    icon: Database,
  },
  {
    title: 'Email',
    url: '/admin/email',
    icon: Mail,
  },
  {
    title: 'Documentation',
    url: '/admin/docs',
    icon: Book,
  },
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: Settings,
  },
];

/* ─────────────────────────────────────────────────────────────
 * 🧠 Admin Sidebar Component
 * ───────────────────────────────────────────────────────────── */
export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const { user } = useAdminLayout();

  const handleSignOut = () => {
    // TODO: Implement sign out logic
    console.log('Sign out clicked');
  };

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r bg-card"
      variant="sidebar"
    >
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">PF</span>
          </div>
          {state !== 'collapsed' && (
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Portuguese Forum</span>
              <span className="text-xs text-muted-foreground">Admin Panel</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="flex-1 px-3">
          <SidebarMenu>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`);
              
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link href={item.url}>
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        {user && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-xs">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {state !== 'collapsed' && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-xs text-muted-foreground">{user.role}</span>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="h-8 w-8 p-0"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

AdminSidebar.displayName = 'AdminSidebar';