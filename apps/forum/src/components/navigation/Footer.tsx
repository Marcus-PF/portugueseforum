'use client'

/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Footer – Portuguese Forum               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Responsive footer with logo, navigation, contact,
 * and social links. Matches updated brand style.
 */

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export function Footer() {
  const { locale } = useParams()

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & tagline */}
        <div className="flex flex-col gap-2">
          <Link href={`/${locale}`}>
            <Image
              src="/pf-nav-logo-light.svg"
              alt="Portuguese Forum"
              width={140}
              height={32}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/pf-nav-logo-dark.svg"
              alt="Portuguese Forum"
              width={140}
              height={32}
              className="h-8 w-auto hidden dark:block"
            />
          </Link>
          <p className="text-sm mt-2">
            A home for the Portuguese-speaking community in South Africa and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="hover:text-muted transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="text-sm flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0800428428" className="hover:text-muted">0800 428 428</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@portugueseforum.org.za" className="hover:text-muted">
                info@portugueseforum.org.za
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 items-center">
            <a
              href="https://web.facebook.com/groups/portugueseforumsa"
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/portugueseforum"
              target="_blank"
              rel="noreferrer"
              className="hover:text-muted"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-4 text-center text-xs">
        © 2025 Portuguese Forum. All rights reserved.
      </div>
    </footer>
  )
}
