/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/forum – Global Not Found Page          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Global not found page for routes outside of locales.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
 * 🧠 Global Not Found Component
 * ───────────────────────────────────────────────────────────── */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">404</h1>
              <h2 className="text-2xl font-semibold">Page Not Found</h2>
              <p className="text-muted-foreground max-w-md">
                The page you're looking for doesn't exist. Please select a language to continue.
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Link
                href="/en"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                English
              </Link>
              <Link
                href="/pt"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Português
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}