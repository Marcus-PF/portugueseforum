/**
 * ────────────────────────────────────────────────────────────────
 * 🦶 Footer — Forum Site Footer
 * ────────────────────────────────────────────────────────────────
 * Displays site branding, basic nav links, and legal information.
 * Responsive layout with dark/light mode support.
 * 
 * 📦 Tailwind v4 via globals.css (semantic tokens)
 * 📘 Uses ShadCN primitives via @pfsa/ui
 * 🧱 Extensible for future additions (socials, locale switch, etc)
 * 
 * ────────────────────────────────────────────────────────────────
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from '@pfsa/ui';
import { cn } from '@pfsa/utils/shared';


// ────────────────────────────────────────────────────────────────
// 🧩 Component
// ────────────────────────────────────────────────────────────────

export const Footer = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const footerLinks = [
    { label: 'About', href: `/${locale}/about` },
    { label: 'Contact', href: `/${locale}/contact` },
    { label: 'Privacy Policy', href: `/${locale}/privacy-policy` },
  ];

  return (
    <footer className="w-full border-t bg-muted px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-4">
        {/* ─── Links Row ───────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} PFórum. All rights reserved.
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href && 'text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ─── Divider ────────────────────────── */}
        <Separator className="hidden sm:block" />

        {/* ─── Optional future section ─────────── */}
        {/* <div className="flex justify-end">
          <ThemeToggle />
        </div> */}
      </div>
    </footer>
  );
};
