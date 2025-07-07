export interface Article {
  _id: string;
  title_en: string;
  content_en: string;
  title_pt: string;
  content_pt: string;
  author: string;
  date: Date;
  categories: string[];
  featuredImage?: string;
  slug: string;
}