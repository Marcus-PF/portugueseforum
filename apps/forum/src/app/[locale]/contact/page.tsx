import { useTranslations } from 'next-intl';
import { Button } from '../../../components/ui/button';

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <form className="space-y-4">
        <input type="text" placeholder={t('name')} className="border p-2 w-full" />
        <input type="email" placeholder={t('email')} className="border p-2 w-full" />
        <textarea placeholder={t('message')} className="border p-2 w-full" />
        <Button type="submit">{t('submit')}</Button>
      </form>
    </div>
  );
}