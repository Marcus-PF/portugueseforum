import { api, Article } from '@pfsa/data';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: { slug: string; locale: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const t = useTranslations('news');
  let article: Article;

  try {
    article = await api.get<Article>(`/articles/${params.slug}`);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{t('published')}: {new Date(article.createdAt).toLocaleDateString()}</p>
      <div className="prose">{article.content}</div>
      {article.tags.length > 0 && (
        <div className="mt-4">
          <span className="font-semibold">{t('tags')}: </span>
          {article.tags.join(', ')}
        </div>
      )}
    </div>
  );
}