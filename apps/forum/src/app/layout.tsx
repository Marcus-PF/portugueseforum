/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/forum – Root Layout (Global)           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Root layout providing basic HTML structure and global styles.
 * Locale-specific logic is handled in [locale]/layout.tsx.
 */

import '@pfsa/ui/global';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Props
 * ───────────────────────────────────────────────────────────── */
interface RootLayoutProps {
  children: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Root Layout Component
 * ───────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Metadata
 * ───────────────────────────────────────────────────────────── */
export const metadata = {
  title: {
    default: 'Portuguese Forum of South Africa',
    template: '%s | Portuguese Forum of South Africa',
  },
  description: 'Connecting Portuguese heritage with modern South African life.',
  keywords: ['Portuguese', 'South Africa', 'Community', 'Culture', 'Forum'],
  authors: [{ name: 'Portuguese Forum of South Africa' }],
  creator: 'Portuguese Forum of South Africa',
  publisher: 'Portuguese Forum of South Africa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};