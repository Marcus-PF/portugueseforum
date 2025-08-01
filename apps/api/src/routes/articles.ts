/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @pfsa/api – Article Routes (CRUD Endpoints)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * REST endpoints for creating and fetching articles. Uses:
 *  • Zod for payload validation
 *  • Shared Mongoose models (ArticleModel)
 *  • Shared Mongo connector (`connectToDatabase`)
 *
 * Exports:
 *  - **default** → Hono sub-app mounted at `/articles`
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { ArticleModel } from '@pfsa/data';
import { connectToDatabase } from '@pfsa/data';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Schema Validation
 * ───────────────────────────────────────────────────────────── */
const createArticleSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  authorId: z.string(),
  tags: z.array(z.string()).optional(),
});

/* ─────────────────────────────────────────────────────────────
 * 🧾 Router Setup
 * ───────────────────────────────────────────────────────────── */
const articles = new Hono();

/* ─────────────────────────────────────────────────────────────
 * ➕  POST /articles  – Create
 * ───────────────────────────────────────────────────────────── */
articles.post(
  '/',
  zValidator('json', createArticleSchema),
  async (c) => {
    await connectToDatabase();

    const data = c.req.valid('json');
    const user = c.get('jwtPayload'); // set by authMiddleware

    if (user.sub !== data.authorId) {
      return c.json({ message: 'Unauthorized: invalid authorId' }, 403);
    }

    const article = new ArticleModel({
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      slug: data.title.toLowerCase().replace(/\s+/g, '-'),
      tags: data.tags ?? [],
      published: false,
    });

    await article.save();
    return c.json({ message: 'Article created', article }, 201);
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🔍  GET /articles/:slug  – Read (single)
 * ───────────────────────────────────────────────────────────── */
articles.get('/:slug', async (c) => {
  await connectToDatabase();

  const slug = c.req.param('slug');
  const article = await ArticleModel.findOne({ slug }).lean();

  if (!article) {
    return c.json({ message: 'Article not found' }, 404);
  }
  return c.json(article);
});

/* ─────────────────────────────────────────────────────────────
 * 📄  GET /articles  – Read (list, published only)
 * ───────────────────────────────────────────────────────────── */
articles.get('/', async (c) => {
  await connectToDatabase();
  const list = await ArticleModel.find({ published: true }).lean();
  return c.json(list);
});

/* ─────────────────────────────────────────────────────────────
 * 🧠 Export Router
 * ───────────────────────────────────────────────────────────── */
export default articles;
