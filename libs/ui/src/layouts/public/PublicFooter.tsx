/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              @pfsa/ui – Public Footer               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Public footer component with links, social media,
 * and contact information.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Footer Configuration
 * ───────────────────────────────────────────────────────────── */
const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'News', href: '/news' },
      { title: 'Events', href: '/events' },
      { title: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { title: 'Join Us', href: '/membership' },
      { title: 'Benefits', href: '/membership/benefits' },
      { title: 'Renewals', href: '/membership/renewals' },
      { title: 'Support', href: '/membership/support' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Portuguese Culture', href: '/culture' },
      { title: 'Language Learning', href: '/language' },
      { title: 'Business Directory', href: '/business' },
      { title: 'FAQ', href: '/faq' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/portugueseforum', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/portugueseforum', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/portugueseforum', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/portugueseforum', label: 'YouTube' },
];

/* ─────────────────────────────────────────────────────────────
 * 🧠 Public Footer Component
 * ───────────────────────────────────────────────────────────── */
export const PublicFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">PF</span>
              </div>
              <span className="font-bold text-lg">Portuguese Forum</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Connecting the Portuguese community in South Africa since 2001. 
              Preserving culture, building bridges, and creating lasting connections.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+27 21 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@portugueseforum.co.za</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Portuguese Forum of South Africa. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 pt-6 border-t text-center">
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

PublicFooter.displayName = 'PublicFooter';