import { api, Article } from '@pfsa/data';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface NewsPageProps {
  params: { locale: string };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const t = useTranslations('news');
  const articles = await api.get<Article[]>('/articles');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="mb-4">
            <Link href={`/${params.locale}/news/${article.slug}`} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
            <p className="text-gray-600">{new Date(article.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}