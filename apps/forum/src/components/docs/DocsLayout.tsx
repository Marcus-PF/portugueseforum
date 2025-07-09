/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Documentation Layout Component      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Responsive layout wrapper for documentation pages with 
 * navigation sidebar, mobile menu, and structured content area.
 *
 * Exports:
 *  - `DocsLayout` → Main documentation layout component
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { ReactNode } from 'react';
import Link from 'next/link';
import { 
  Button,
  Badge,
} from '@pfsa/ui';
import { MenuIcon, BookOpenIcon, FileTextIcon, CogIcon } from '@heroicons/react/24/outline';
import { cn } from '@pfsa/utils/shared';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Type Definitions
 * ───────────────────────────────────────────────────────────── */
interface DocsLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

interface NavigationItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  items?: NavigationItem[];
}

/* ─────────────────────────────────────────────────────────────
 * 🔧 Navigation Configuration
 * ───────────────────────────────────────────────────────────── */
const navigation: NavigationItem[] = [
  {
    title: 'Getting Started',
    href: '/admin/docs',
    icon: BookOpenIcon,
    items: [
      { title: 'Overview', href: '/admin/docs' },
      { title: 'Development Setup', href: '/admin/docs/getting-started/setup' },
      { title: 'Architecture', href: '/admin/docs/getting-started/architecture' },
      { title: 'Contributing', href: '/admin/docs/getting-started/contributing' },
    ],
  },
  {
    title: 'Development',
    href: '/admin/docs/development',
    icon: FileTextIcon,
    items: [
      { title: 'Code Formatting', href: '/admin/docs/development/code-formatting' },
      { title: 'Testing Standards', href: '/admin/docs/development/testing' },
      { title: 'Git Workflow', href: '/admin/docs/development/git-workflow' },
      { title: 'Security Guidelines', href: '/admin/docs/development/security' },
    ],
  },
  {
    title: 'Architecture',
    href: '/admin/docs/architecture',
    icon: CogIcon,
    items: [
      { title: 'System Overview', href: '/admin/docs/architecture/overview' },
      { title: 'Apps', href: '/admin/docs/architecture/apps' },
      { title: 'Libraries', href: '/admin/docs/architecture/libs' },
      { title: 'Database Schema', href: '/admin/docs/architecture/database' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
 * 🧾 Navigation Components
 * ───────────────────────────────────────────────────────────── */
interface NavigationItemsProps {
  items: NavigationItem[];
  currentPath?: string;
}

function NavigationItems({ items, currentPath }: NavigationItemsProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.href;
        
        return (
          <div key={item.href}>
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                'hover:bg-accent hover:text-accent-foreground',
                isActive && 'bg-accent text-accent-foreground'
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.title}
            </Link>
            {item.items && (
              <div className="ml-7 mt-1 space-y-1">
                {item.items.map((subItem) => {
                  const isSubActive = currentPath === subItem.href;
                  return (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-sm transition-colors',
                        'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                        isSubActive && 'bg-accent text-accent-foreground font-medium'
                      )}
                    >
                      {subItem.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Sidebar Component
 * ───────────────────────────────────────────────────────────── */
interface SidebarProps {
  currentPath?: string;
}

function Sidebar({ currentPath }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <BookOpenIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Documentation</h2>
            <Badge variant="secondary" className="text-xs">
              @pfsa/forum
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto px-4 py-6">
        <NavigationItems items={navigation} currentPath={currentPath} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Main Layout Component
 * ───────────────────────────────────────────────────────────── */
export function DocsLayout({ 
  children, 
  title, 
  description, 
  className 
}: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 z-40 bg-background border-r">
          <Sidebar />
        </aside>

        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden fixed top-4 left-4 z-50"
        >
          {/* <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Toggle navigation menu</span> */}
        </Button>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
              {description && (
                <p className="text-xl text-muted-foreground">{description}</p>
              )}
            </div>

            {/* Content Area */}
            <div className={cn(
              'prose prose-neutral dark:prose-invert max-w-none',
              'prose-headings:scroll-m-20 prose-headings:font-semibold',
              'prose-code:relative prose-code:rounded prose-code:bg-muted',
              'prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono',
              'prose-code:text-sm prose-code:font-semibold',
              className
            )}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}