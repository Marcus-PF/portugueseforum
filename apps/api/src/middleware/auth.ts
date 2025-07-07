import { Hono } from 'hono';
import { jwt } from 'hono/jwt';

export const authMiddleware = jwt({
  secret: process.env.JWT_SECRET!,
});