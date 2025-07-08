import { useTranslations } from 'next-intl';
import { fetchArticles } from '@pfsa/data';
import type { Article as BaseArticle } from '@pfsa/data';

type Article = BaseArticle & {
  [key: `title_${string}`]: string;
  [key: `content_${string}`]: string;
};

export async function getServerSideProps({ params }: { params: { slug: string; locale: string } }) {
  const articles = await fetchArticles();
  const article = articles.find((a) => a.slug === params.slug) || null;
  return { props: { article, locale: params.locale } };
}

export default function ArticlePage({ article, locale }: { article: Article | null; locale: string }) {
  const t = useTranslations('News');
  if (!article) return <div>{t('noArticles')}</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{article[`title_${locale}`]}</h1>
      <p>{article[`content_${locale}`]}</p>
    </div>
  );
}