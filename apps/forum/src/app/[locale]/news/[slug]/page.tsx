import { useTranslations } from 'next-intl';
import { fetchArticles } from '@pfsa/data';

export async function getServerSideProps({ params }: { params: { slug: string; locale: string } }) {
  const articles = await fetchArticles(params.locale);
  const article = articles.find((a) => a.slug === params.slug);
  return { props: { article: article || null } };
}

export default function ArticlePage({ article }: { article: Article | null }) {
  const t = useTranslations('News');
  if (!article) return <div>{t('noArticles')}</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{article[`title_${locale}`]}</h1>
      <p>{article[`content_${locale}`]}</p>
    </div>
  );
}