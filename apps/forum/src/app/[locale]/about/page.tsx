import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}