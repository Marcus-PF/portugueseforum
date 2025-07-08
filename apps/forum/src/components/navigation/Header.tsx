/**
 * ────────────────────────────────────────────────────────────────
 * 🧭 Header — Forum Navigation Bar
 * ────────────────────────────────────────────────────────────────
 * Provides a responsive top-level navigation bar for the forum.
 * Uses design primitives from @pfsa/ui and supports i18n + mobile.
 * 
 * 🧩 Composed of:
 * - Logo + site title
 * - Main nav (desktop)
 * - Mobile nav trigger
 * - Auth / profile menu
 * 
 * 📦 Tailwind v4 with theme tokens via globals.css
 * 🧱 Responsive with `useIsMobile` hook from @pfsa/ui
 * 📘 ShadCN atoms via @pfsa/ui/atoms
 * 
 * ────────────────────────────────────────────────────────────────
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@pfsa/ui';
import { Button, Avatar, NavigationMenu, Sheet, SheetTrigger, SheetContent } from '@pfsa/ui';
import { Menu } from 'lucide-react';
import { cn } from '@pfsa/utils/shared';


// ────────────────────────────────────────────────────────────────
// 🧩 Component
// ────────────────────────────────────────────────────────────────

export const Header = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // assuming route format: /[locale]/...

  const navItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'News', href: `/${locale}/news` },
    { label: 'Community', href: `/${locale}/community` },
    { label: 'About', href: `/${locale}/about` },
  ];

  return (
    <header className="w-full border-b bg-background px-4 py-2.5 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* ─── Logo + Brand ───────────────────────── */}
        <Link href={`/${locale}`} className="text-lg font-semibold text-primary">
          PFórum
        </Link>

        {/* ─── Desktop Nav ───────────────────────── */}
        {!isMobile && (
          <NavigationMenu className="hidden sm:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href && 'text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </NavigationMenu>
        )}

        {/* ─── Right Side (User or Auth) ─────────── */}
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline">
            Sign In
          </Button>

          {/* Avatar placeholder */}
          {/* <Avatar src="/me.png" alt="User" /> */}
        </div>

        {/* ─── Mobile Nav ────────────────────────── */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-base font-medium hover:text-primary',
                      pathname === item.href && 'text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};
