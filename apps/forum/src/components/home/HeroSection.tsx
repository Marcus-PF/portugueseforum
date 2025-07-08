/**
 * ────────────────────────────────────────────────────────────────
 * 🏠 HeroSection — Forum Landing Hero
 * ────────────────────────────────────────────────────────────────
 * A prominent landing section for the homepage.
 * Introduces the forum, purpose, and primary CTA.
 * 
 * 🎯 Includes:
 * - Headline & subtitle
 * - Call-to-action button(s)
 * - Optional illustration or visual block
 * 
 * 📦 Responsive with Tailwind v4 utilities
 * 📘 Uses @pfsa/ui primitives (Button, Card)
 * 
 * ────────────────────────────────────────────────────────────────
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Card } from '@pfsa/ui';


// ────────────────────────────────────────────────────────────────
// 🧩 Component
// ────────────────────────────────────────────────────────────────

export const HeroSection = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <section className="w-full bg-background px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* ─── Textual Content ─────────────────── */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Welcome to PFórum
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A space to read, share, and discuss the most relevant news and ideas from the Portuguese-speaking world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href={`/${locale}/news`}>
              <Button size="lg">Explore News</Button>
            </Link>
            <Link href={`/${locale}/community`}>
              <Button size="lg" variant="outline">
                Join the Discussion
              </Button>
            </Link>
          </div>
        </div>

        {/* ─── Optional Illustration / Visual ────── */}
        <div className="flex justify-center md:justify-end">
          <Card className="w-full max-w-md border-muted bg-muted shadow-sm p-6">
            <div className="aspect-video w-full rounded-md bg-secondary/20 flex items-center justify-center text-secondary-foreground">
              {/* Placeholder for image or icon */}
              <span className="text-lg font-semibold">Your Voice Matters</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
