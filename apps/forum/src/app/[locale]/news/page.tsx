import { useTranslations } from 'next-intl';
import { Card } from '@pfsa/ui';
import { fetchArticles } from '@pfsa/data';
import Link from 'next/link';

export async function getServerSideProps({ params }: { params: { locale: string } }) {
  const articles = await fetchArticles(params.locale);
  return { props: { articles } };
}

export default function News({ articles }: { articles: Article[] }) {
  const t = useTranslations('News');
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <div className="grid gap-4">
        {articles.length === 0 && <p>{t('noArticles')}</p>}
        {articles.map((article) => (
          <Link key={article._id} href={`/news/${article.slug}`}>
            <Card title={article[`title_${locale}`]} content={article[`content_${locale}`]} />
          </Link>
        ))}
      </div>
    </div>
  );
}