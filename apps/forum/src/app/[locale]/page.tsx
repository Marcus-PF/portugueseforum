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

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { useTranslations } from 'next-intl';
import { PublicLayout } from '@pfsa/ui';
import { HeroSection } from '../../components/home/HeroSection';
import { AboutSection } from '../../components/home/AboutSection';
import { NewsAndEvents } from '../../components/home/NewsAndEvents';
import { CommunityImpact } from '../../components/home/CommunityImpact';
import { LeadershipSection } from '../../components/home/Leadership';
import { CultureShowcase } from '../../components/home/CultureShowcase';
import { TestimonialsSection } from '../../components/home/Testimonials';
import { GetInvolved } from '../../components/home/GetInvolved';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Page Component
 * ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <PublicLayout showBreadcrumbs={false} maxWidth="full">
      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <NewsAndEvents />
        <CommunityImpact />
        <LeadershipSection />
        <CultureShowcase />
        <TestimonialsSection />
        <GetInvolved />
      </div>
    </PublicLayout>
  );
}

// Generate metadata for the home page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'Home',
    description: 'Welcome to the Portuguese Forum of South Africa - connecting Portuguese heritage with modern South African life.',
    alternates: {
      canonical: `/${locale}`,
    },
  };
}