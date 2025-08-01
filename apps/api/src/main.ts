/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/api – Hono Main Application Entry          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { connectToDatabase } from '@pfsa/data';

// Route imports
import articles from './routes/articles';
import auth from './routes/auth';
import users from './routes/users';

/* ─────────────────────────────────────────────────────────────
 * 🧾 App Configuration
 * ───────────────────────────────────────────────────────────── */
const app = new Hono();

// Global middleware
app.use('*', logger());
app.use('*', cors({
  origin: [
    'http://localhost:3000',
    'https://portugueseforum.com',
    'https://www.portugueseforum.com',
  ],
  credentials: true,
}));

// Health check
app.get('/', (c) => {
  return c.json({ 
    message: 'Portuguese Forum API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    jwt: !!process.env.JWT_SECRET,
    mongodb: !!process.env.MONGODB_URI,
  });
});

// Route mounting
app.route('/articles', articles);
app.route('/auth', auth);
app.route('/users', users);

// Initialize database connection
connectToDatabase().catch(console.error);

/* ─────────────────────────────────────────────────────────────
 * 🚀 Export
 * ───────────────────────────────────────────────────────────── */
export default app;