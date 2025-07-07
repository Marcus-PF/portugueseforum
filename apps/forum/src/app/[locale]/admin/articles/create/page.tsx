import { getServerSession } from 'next-auth';
import { authOptions } from '../../../api/auth/[...nextauth]';
import { useTranslations } from 'next-intl';
import { Button } from '@pfsa/ui';
import Link from 'next/link';

export default async function CreateArticle({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  const t = useTranslations('Admin.articles');
  if (!session) return <div>{t('unauthorized')} <Link href={`/${params.locale}/admin/login`}>Login</Link></div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('createTitle')}</h1>
      <form className="space-y-4">
        <input type="text" name="title_en" placeholder={t('titleLabel') + ' (English)'} className="border p-2 w-full" />
        <textarea name="content_en" placeholder={t('contentLabel') + ' (English)'} className="border p-2 w-full" />
        <input type="text" name="title_pt" placeholder={t('titleLabel') + ' (Portuguese)'} className="border p-2 w-full" />
        <textarea name="content_pt" placeholder={t('contentLabel') + ' (Portuguese)'} className="border p-2 w-full" />
        <Button type="submit">{t('save')}</Button>
      </form>
    </div>
  );
}