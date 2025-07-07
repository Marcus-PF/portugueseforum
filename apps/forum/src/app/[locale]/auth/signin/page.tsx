import { getTranslations } from 'next-intl/server';
import { SignIn } from '@auth/core/react';
import { Button, Input, Label } from '@pfsa/ui';

export default async function SignInPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Auth' });

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">{t('signin')}</h1>
      <form action={`/api/auth/signin/credentials`} method="post" className="space-y-4">
        <div>
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" name="email" type="email" required className="border-[var(--border)]" />
        </div>
        <div>
          <Label htmlFor="password">{t('password')}</Label>
          <Input id="password" name="password" type="password" required className="border-[var(--border)]" />
        </div>
        <Button type="submit" className="bg-[var(--primary)] text-[var(--primary-foreground)]">
          {t('submit')}
        </Button>
      </form>
    </div>
  );
}