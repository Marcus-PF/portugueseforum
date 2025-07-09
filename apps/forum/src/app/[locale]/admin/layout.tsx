/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/forum – Admin Section Layout            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Admin section layout wrapper that provides the admin
 * layout context and components for all admin pages.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { AdminLayoutProvider } from '@pfsa/ui';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Layout Props
 * ───────────────────────────────────────────────────────────── */
interface AdminLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Admin Layout Component
 * ───────────────────────────────────────────────────────────── */
export default async function AdminLayout({ 
  children, 
  params
}: AdminLayoutProps) {
  // Await params before using its properties
  const { locale } = await params;
  
  // Verify locale is supported
  const supportedLocales = ['en', 'pt'];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  // Get translations for admin section
  const t = await getTranslations('admin');

  // TODO: Replace with actual auth/session logic
  const mockUser = {
    id: '1',
    name: 'Admin User',
    email: 'admin@portugueseforum.co.za',
    avatar: '/avatars/admin.jpg',
    role: 'admin' as const,
  };

  return (
    <AdminLayoutProvider 
      initialUser={mockUser}
      initialTheme="system"
    >
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </AdminLayoutProvider>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🔧 Metadata
 * ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Admin Panel - Portuguese Forum',
  description: 'Administrative dashboard for Portuguese Forum of South Africa',
  robots: {
    index: false,
    follow: false,
  },
};