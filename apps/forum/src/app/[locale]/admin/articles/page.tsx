import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]';
import { useTranslations } from 'next-intl';
import { Card } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';
import { fetchArticles } from '@pfsa/data';
import Link from 'next/link';

export async function getServerSideProps({ params }: { params: { locale: string } }) {
  const articles = await fetchArticles(params.locale);
  return { props: { articles } };
}

export default async function Articles({ articles, params }: { articles: Article[]; params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  const t = useTranslations('Admin.articles');
  if (!session) return <div>{t('unauthorized')} <Link href={`/${params.locale}/admin/login`}>Login</Link></div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <Link href={`/${params.locale}/admin/articles/create`}>
        <Button>{t('create')}</Button>
      </Link>
      <div className="grid gap-4 mt-4">
        {articles.length === 0 && <p>{t('noArticles')}</p>}
        {articles.map((article) => (
          <Card key={article._id} title={article[`title_${params.locale}`]} content={article[`content_${params.locale}`]}>
            <Link href={`/${params.locale}/admin/articles/edit/${article._id}`}>
              <Button variant="outline">{t('edit')}</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}