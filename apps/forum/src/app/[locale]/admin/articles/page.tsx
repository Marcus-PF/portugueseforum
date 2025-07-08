import { api, Article } from '@pfsa/data';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface AdminArticlesPageProps {
  params: { locale: string };
}

export default async function AdminArticlesPage({ params }: AdminArticlesPageProps) {
  const t = useTranslations('admin');
  const articles = await api.get<Article[]>('/articles');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('articles.title')}</h1>
      <Link href={`/${params.locale}/admin/articles/create`} className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
        {t('articles.create')}
      </Link>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="mb-4">
            <Link href={`/${params.locale}/admin/articles/edit/${article._id}`} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
            <p className="text-gray-600">{article.published ? t('articles.published') : t('articles.draft')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}