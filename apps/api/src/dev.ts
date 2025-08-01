/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         @pfsa/api – Local Development Bootstrapper    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Loads environment variables and launches the Hono API
 * server locally on the configured port (default: 4000).
 *
 * Exports:
 *  - None (script file for dev use only)
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { serve } from '@hono/node-server';
import { config as loadEnv } from 'dotenv';
import { resolve } from 'path';

/* ─────────────────────────────────────────────────────────────
 * 🔧 Load & Validate Environment
 * ───────────────────────────────────────────────────────────── */
const envPath = resolve(__dirname, '../.env');
const result = loadEnv({ path: envPath });

if (result.error) {
  console.error(`❌ Failed to load .env file at ${envPath}:`, result.error);
  throw result.error;
}

console.info(`✅ Loaded .env file from: ${envPath}`);
console.info(`🔐 JWT_SECRET: ${process.env.JWT_SECRET ? 'Set' : 'Not set'}`);

/* ─────────────────────────────────────────────────────────────
 * 🧾 Boot the Hono Server
 * ───────────────────────────────────────────────────────────── */
import app from './main';

const port = parseInt(process.env['PORT'] || '4000', 10);

/**
 * 🛠 Optional typing for clarity in dev context.
 */
interface ServerInfo {
  port: number;
}

interface ServeOptions {
  fetch: typeof app.fetch;
  port: number;
}

serve(
  {
    fetch: app.fetch,
    port,
  } as ServeOptions,
  (info: ServerInfo) => {
    console.log(`🚀 API server running at http://localhost:${info.port}`);
  }
);
