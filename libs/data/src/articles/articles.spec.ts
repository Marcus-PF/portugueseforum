/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃                  Articles Module Tests                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for core functionality in the `articles` domain.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { fetchArticles } from './fetchArticles';
import { connectToDatabase } from '../utils/backend/db';

beforeAll(async () => {
  await connectToDatabase();
});

describe('fetchArticles', () => {
  it('should return an array of articles', async () => {
    const articles = await fetchArticles();
    expect(Array.isArray(articles)).toBe(true);
  });
});
