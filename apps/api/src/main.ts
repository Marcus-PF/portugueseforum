import { Hono } from 'hono';
import articles from './routes/articles';
import { authMiddleware } from './middleware/auth';

const app = new Hono();

app.use('/articles/*', authMiddleware);
app.route('/articles', articles);

app.get('/', (c) => c.text('Hono API for The Portuguese Forum'));

export default app;