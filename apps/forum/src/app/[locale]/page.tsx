import { useTranslations } from 'next-intl';
import { Button } from '@pfsa/ui';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('description')}</p>
      <Button asChild>
        <Link href="/news">{t('News.title')}</Link>
      </Button>
    </div>
  );
}