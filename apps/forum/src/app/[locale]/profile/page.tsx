// apps/forum/src/app/[locale]/profile/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  const { data: session } = useSession();
  const t = useTranslations('profile');

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      {session ? (
        <div>
          <p>Email: {session.user?.email || 'N/A'}</p>
          <p>Name: {session.user?.name || 'N/A'}</p>
          <p>Role: {('role' in (session.user ?? {})) ? (session.user as { role?: string }).role || 'N/A' : 'N/A'}</p>
        </div>
      ) : (
        <p>{t('notSignedIn')}</p>
      )}
    </div>
  );
}