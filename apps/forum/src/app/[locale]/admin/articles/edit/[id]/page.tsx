import { api, Article } from '@pfsa/data';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

interface EditArticlePageProps {
  params: { id: string; locale: string };
}

export default async function EditArticlePage({ params }: EditArticlePageProps) {
  const t = useTranslations('admin');
  let article: Article | null;

  try {
    article = await api.get<Article>(`/articles/${params.id}`);
  } catch (error) {
    notFound();
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('articles.edit', { title: article.title })}</h1>
      <form action={`/api/articles/${article._id}`} method="POST">
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold">{t('articles.title')}</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={article.title}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-semibold">{t('articles.content')}</label>
          <textarea
            id="content"
            name="content"
            defaultValue={article.content}
            className="w-full p-2 border rounded"
            rows={6}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {t('articles.save')}
        </button>
      </form>
    </div>
  );
}