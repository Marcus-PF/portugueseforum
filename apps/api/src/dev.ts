import { serve } from '@hono/node-server';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
const envPath = resolve(__dirname, '../.env');
const result = config({ path: envPath });
if (result.error) {
  console.error(`Failed to load .env file at ${envPath}:`, result.error);
  throw result.error;
}
console.log(`Loaded .env file from ${envPath}`);
console.log(`JWT_SECRET: ${process.env.JWT_SECRET ? 'Set' : 'Not set'}`);

// Import the main Hono app
import app from './main';

const port = parseInt(process.env['PORT'] || '4000', 10);

// Start the development server
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
    console.log(`API server running at http://localhost:${info.port}`);
  }
);