import { Article } from '../models/Article';

export async function fetchArticles(locale: string): Promise<Article[]> {
  // Mock data until MongoDB is connected
  return [
    {
      _id: '1',
      title_en: 'Sample Article',
      content_en: 'This is a sample article in English.',
      title_pt: 'Artigo de Exemplo',
      content_pt: 'Este é um artigo de exemplo em Português.',
      author: 'Admin',
      date: new Date(),
      categories: ['News'],
      slug: 'sample-article',
    },
  ];
  // Replace with: const response = await fetch(`/api/articles?locale=${locale}`); return response.json();
}