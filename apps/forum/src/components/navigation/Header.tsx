'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Navigation Header – PFórum UI            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Sticky translucent navigation bar with localized links,
 * dynamic logo, hotline/social top bar, and responsive sheet.
 */

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button, Sheet, SheetContent, SheetTrigger } from '@pfsa/ui'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun, Users, Facebook, Instagram } from 'lucide-react'

export function Header() {
  const { locale } = useParams()
  const { theme, setTheme } = useTheme()
  const t = useTranslations('Navigation')

  const navItems = [
    { href: '', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/news', label: t('news') },
    { href: '/membership', label: t('membership') },
    { href: '/contact', label: t('contact') },
  ]

  const joinUrl = 'https://web.facebook.com/groups/portugueseforumsa'

  return (
    <>
      {/* 🧭 Top Bar – Hotline + Socials */}
      <div className="w-full bg-secondary text-secondary-foreground font-semibold text-sm py-1.5 px-4 flex justify-between items-center">
        <span>
          📞 National Helpline:{' '}
          <a href="tel:0800428428" className="underline">
            0800 428 428
          </a>
        </span>
        <div className="flex gap-3 items-center">
          <a
            href="https://web.facebook.com/groups/portugueseforumsa"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/portugueseforum"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* 🚀 Main Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur bg-background/90 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href={`/${locale}`}>
            <Image
              src={`/pf-nav-logo-${theme === 'dark' ? 'dark' : 'light'}.svg`}
              alt="Portuguese Forum"
              width={160}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link
                href="https://web.facebook.com/groups/portugueseforumsa"
                target="_blank"
                className="flex items-center gap-1"
              >
                <Users className="size-4" /> <span className="hidden sm:inline">Join Community</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-6">
                <nav className="flex flex-col gap-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${locale}${item.href}`}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <a href={joinUrl} target="_blank" rel="noreferrer">
                      👥 Join Community
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}