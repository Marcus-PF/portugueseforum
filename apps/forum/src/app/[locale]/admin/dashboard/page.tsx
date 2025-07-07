import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]';
import { useTranslations } from 'next-intl';
import { Button } from '../../../../components/ui/button';
import Link from 'next/link';

export default async function AdminDashboard({ params }: { params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  const t = useTranslations('Admin.dashboard');
  if (!session) return <div>{t('articles.unauthorized')} <Link href={`/${params.locale}/admin/login`}>Login</Link></div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p>{t('welcome', { name: session.user?.name })}</p>
      <Link href={`/${params.locale}/admin/articles`}>
        <Button>{t('manageArticles')}</Button>
      </Link>
    </div>
  );
}