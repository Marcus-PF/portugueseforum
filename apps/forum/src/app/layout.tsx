/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          Locale Layout – Global App Shell (+ i18n)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides Header / Footer and wires Next-Intl’s
 * `<NextIntlClientProvider>` for all child routes.
 */

import '@pfsa/ui/global';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { NextIntlClientProvider, useMessages } from 'next-intl';

/* Local shared layout pieces */
import { Header } from '../components/navigation/Header';
import { Footer } from '../components/navigation/Footer';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Component
 * ───────────────────────────────────────────────────────────── */
type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
