import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../api/auth/[...nextauth]';
import { useTranslations } from 'next-intl';
import { Button } from '../../../../../../components/ui/button';
import { fetchArticles } from '@pfsa/data';
import Link from 'next/link';

export async function getServerSideProps({ params }: { params: { id: string; locale: string } }) {
  const articles = await fetchArticles(params.locale);
  const article = articles.find((a) => a._id === params.id);
  return { props: { article: article || null } };
}

export default async function EditArticle({ article, params }: { article: Article | null; params: { locale: string } }) {
  const session = await getServerSession(authOptions);
  const t = useTranslations('Admin.articles');
  if (!session) return <div>{t('unauthorized')} <Link href={`/${params.locale}/admin/login`}>Login</Link></div>;
  if (!article) return <div>{t('noArticles')}</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{t('editTitle')}</h1>
      <form className="space-y-4">
        <input type="text" name="title_en" defaultValue={article.title_en} placeholder={t('titleLabel') + ' (English)'} className="border p-2 w-full" />
        <textarea name="content_en" defaultValue={article.content_en} placeholder={t('contentLabel') + ' (English)'} className="border p-2 w-full" />
        <input type="text" name="title_pt" defaultValue={article.title_pt} placeholder={t('titleLabel') + ' (Portuguese)'} className="border p-2 w-full" />
        <textarea name="content_pt" defaultValue={article.content_pt} placeholder={t('contentLabel') + ' (Portuguese)'} className="border p-2 w-full" />
        <Button type="submit">{t('update')}</Button>
      </form>
    </div>
  );
}