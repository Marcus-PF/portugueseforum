/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          Locale Layout – Global App Shell (+ i18n)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides Header / Footer and wires Next-Intl’s
 * `<NextIntlClientProvider>` for all child routes.
 */

import '@pfsa/ui/global'

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Header } from '../components/navigation/Header'
import { Footer } from '../components/navigation/Footer'
import { Providers } from '../components/navigation/Providers'

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Component
 * ───────────────────────────────────────────────────────────── */
type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}
export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = useMessages()

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Providers>
          <Header />
          <main className="flex-grow">
            <NextIntlClientProvider locale={params.locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}