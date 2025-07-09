/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/forum – Locale Layout (i18n-Aware)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Locale-specific layout providing internationalization context,
 * theme support, and public layout provider.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies  
 * ───────────────────────────────────────────────────────────── */
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PublicLayoutProvider } from '@pfsa/ui';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Props
 * ───────────────────────────────────────────────────────────── */
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Locale Layout Component
 * ───────────────────────────────────────────────────────────── */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Verify locale is supported
  const supportedLocales = ['en', 'pt'];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  // Mock user data - replace with actual auth logic
  const mockUser = null; // or get from session/auth

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <PublicLayoutProvider initialUser={mockUser}>
            {children}
          </PublicLayoutProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Generate Static Params
 * ───────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}