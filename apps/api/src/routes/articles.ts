import { Hono } from 'hono';
import { MongoClient } from 'mongodb';
import { Article } from '@pfsa/data';

const articles = new Hono();

articles.get('/', async (c) => {
  const locale = c.req.query('locale') || 'en';
  const client = new MongoClient(c.env.MONGODB_URI);
  await client.connect();
  const db = client.db('portuguese_forum');
  const data: Article[] = await db.collection<Article>('articles').find().toArray();
  await client.close();
  return c.json(data.map((article) => ({
    ...article,
    title: article[`title_${locale}`],
    content: article[`content_${locale}`],
  })));
});

articles.post('/', async (c) => {
  const article = await c.req.json<Article>();
  const client = new MongoClient(c.env.MONGODB_URI);
  await client.connect();
  const db = client.db('portuguese_forum');
  const result = await db.collection<Article>('articles').insertOne({
    ...article,
    _id: new ObjectId().toString(),
    slug: article.title_en.toLowerCase().replace(/\s+/g, '-'),
  });
  await client.close();
  return c.json({ id: result.insertedId });
});

export default articles;