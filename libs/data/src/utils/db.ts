/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/utils – Mongoose Database Connector       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides a singleton-safe `connectToDatabase()` utility
 * for establishing and reusing a MongoDB connection using
 * Mongoose, configured via environment variables.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import mongoose from 'mongoose';

/* ─────────────────────────────────────────────────────────────
 * 🌐 Database Connection
 * ───────────────────────────────────────────────────────────── */
/**
 * Connects to MongoDB using Mongoose, only once per runtime.
 *
 * @returns The active mongoose instance (connected or reused)
 * @throws  If `MONGODB_URI` is not defined in the environment
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  // ✅ Reuse existing connection in dev or SSR envs
  if (mongoose.connection.readyState !== 0) return mongoose;

  // 🔒 Require connection string
  const uri = process.env['MONGODB_URI'];
  if (!uri) throw new Error('MONGODB_URI environment variable is not set');

  // 🔗 Initiate connection with optional dbName
  return mongoose.connect(uri, { dbName: 'pfsa' });
}
