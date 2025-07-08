import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import mongoose from 'mongoose';
import { ArticleModel } from '@pfsa/data';

const articles = new Hono();

const createArticleSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  authorId: z.string(),
  tags: z.array(z.string()).optional(),
});

articles.post('/', zValidator('json', createArticleSchema), async (c) => {
  const mongoUri = process.env['MONGODB_URI'];
  if (!mongoUri) {
    return c.json({ message: 'MONGODB_URI environment variable is not set' }, 500);
  }
  await mongoose.connect(mongoUri, { dbName: 'pfsa' });

  const data = c.req.valid('json');
  const article = new ArticleModel({
    title: data.title,
    content: data.content,
    authorId: new mongoose.Types.ObjectId(data.authorId),
    slug: data.title.toLowerCase().replace(/\s+/g, '-'),
    tags: data.tags || [],
    published: false,
  });

  await article.save();
  return c.json({ message: 'Article created successfully', article }, 201);
});

articles.get('/:slug', async (c) => {
  const mongoUri = process.env['MONGODB_URI'];
  if (!mongoUri) {
    return c.json({ message: 'MONGODB_URI environment variable is not set' }, 500);
  }

  await mongoose.connect(mongoUri, { dbName: 'pfsa' });

  const slug = c.req.param('slug');
  const article = await ArticleModel.findOne({ slug }).lean();
  if (!article) {
    return c.json({ message: 'Article not found' }, 404);
  }

  return c.json(article);
});

export default articles;