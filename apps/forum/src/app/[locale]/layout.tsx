/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         RootLayout – Locale-based App Shell         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Wraps all routes under `[locale]/`, handling localization
 * and global structure (Header, Footer, etc).
 *
 * Exports:
 *  - `RootLayout` → The core Next.js layout for all pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import '@pfsa/ui/global';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { Header } from '../../components/navigation/Header';
import { Footer } from '../../components/navigation/Footer';

/* ─────────────────────────────────────────────────────────────
 * 🧠 Root Layout
 * ───────────────────────────────────────────────────────────── */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // ✅ Required for App Router: await dynamic route params
  const { locale } = await Promise.resolve(params);

  let messages: Record<string, unknown>;
  try {
    messages = (await import(`../i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound(); // Fallback to 404 if locale file is missing
  }

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
