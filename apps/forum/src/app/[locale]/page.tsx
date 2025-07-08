/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Homepage (Locale-Aware Entry Point)  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Root page for the forum application. Renders hero content,
 * introductory CTAs, and key entry modules (e.g. featured news).
 *
 * Sections:
 *  - `HeroSection` → Landing headline + CTAs
 *  - More components can be added incrementally
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { useTranslations } from 'next-intl';
import { HeroSection } from '../../components/home/HeroSection';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Page Component
 * ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      {/* Future: <FeaturedNews /> */}
      {/* Future: <NewsletterSignup /> */}
    </div>
  );
}
