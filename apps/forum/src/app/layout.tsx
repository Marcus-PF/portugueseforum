/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          Root Layout – Global App Shell (+ i18n)      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides Header / Footer, SEO metadata, and wires Next-Intl's
 * `<NextIntlClientProvider>` for all child routes.
 */

import '@pfsa/ui/global'

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter, Roboto_Slab } from 'next/font/google'
import { Header } from '../components/navigation/Header'
import { Footer } from '../components/navigation/Footer'
import { Providers } from '../components/navigation/Providers'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata, Viewport } from 'next'
import { cn } from '@pfsa/utils/shared'

/* ─────────────────────────────────────────────────────────────
 * 🎨 Font Configuration
 * ───────────────────────────────────────────────────────────── */
const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter'
})

const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-roboto-slab'
})

/* ─────────────────────────────────────────────────────────────
 * 🌐 SEO Metadata
 * ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'Portuguese Forum of South Africa',
    template: '%s | Portuguese Forum of South Africa'
  },
  description: 'The official platform for the Portuguese community in South Africa. Connecting Portuguese heritage with modern South African life through events, news, and cultural preservation.',
  keywords: [
    'Portuguese Forum',
    'South Africa',
    'Portuguese community',
    'Portuguese culture',
    'Portuguese heritage',
    'Portuguese events',
    'Portuguese news',
    'Portuguese South Africa'
  ],
  authors: [{ name: 'Portuguese Forum of South Africa' }],
  creator: 'Portuguese Forum of South Africa',
  publisher: 'Portuguese Forum of South Africa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portugueseforum.org.za'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-PT': '/pt',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portugueseforum.org.za',
    title: 'Portuguese Forum of South Africa',
    description: 'Connecting Portuguese heritage with modern South African life through events, news, and cultural preservation.',
    siteName: 'Portuguese Forum of South Africa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portuguese Forum of South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portuguese Forum of South Africa',
    description: 'Connecting Portuguese heritage with modern South African life through events, news, and cultural preservation.',
    images: ['/og-image.jpg'],
    creator: '@PortugueseForum',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  category: 'community',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

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
    <html 
      lang={params.locale} 
      suppressHydrationWarning
      className={cn(
        'scroll-smooth',
        inter.variable,
        robotoSlab.variable
      )}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags */}
        <meta name="application-name" content="Portuguese Forum SA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portuguese Forum SA" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Portuguese Forum of South Africa',
              url: 'https://portugueseforum.org.za',
              logo: 'https://portugueseforum.org.za/logo.png',
              description: 'The official platform for the Portuguese community in South Africa',
              sameAs: [
                'https://www.facebook.com/portugueseforum',
                'https://www.instagram.com/portugueseforum',
                'https://www.linkedin.com/company/portuguese-forum-sa',
                'https://twitter.com/portugueseforum'
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Your Street Address',
                addressLocality: 'Your City',
                addressRegion: 'Your Province',
                postalCode: 'Your Postal Code',
                addressCountry: 'ZA'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+27-xx-xxx-xxxx',
                contactType: 'General Inquiries',
                email: 'info@portugueseforum.org.za'
              }
            })
          }}
        />
      </head>
      
      <body className={cn(
        'flex min-h-screen flex-col bg-background text-foreground font-sans antialiased',
        'selection:bg-primary/20 selection:text-primary-foreground'
      )}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Providers>
            <Header />
            
            <main 
              id="main-content" 
              className="flex-grow"
              role="main"
            >
              {children}
            </main>
            
            <Footer />
          </Providers>
        </NextIntlClientProvider>

        {/* Remove analytics for now */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        
        {/* Scroll to top button would go here if needed */}
        <div id="scroll-to-top-portal" />
      </body>
    </html>
  )
}