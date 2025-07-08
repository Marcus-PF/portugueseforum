/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃                    Pages Domain Tests                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests page creation and retrieval logic.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { createOrUpdatePage, fetchPageBySlug } from './index';
import { connectToDatabase } from '../utils/backend/db';

beforeAll(async () => {
  await connectToDatabase();
});

describe('createOrUpdatePage', () => {
  const slug = '__test-page__';

  it('should create or update a page', async () => {
    const page = await createOrUpdatePage({
      slug,
      title_en: 'Test Title EN',
      content_en: 'Test Content EN',
      title_pt: 'Test Title PT',
      content_pt: 'Test Content PT',
    });

    expect(page.slug).toBe(slug);
  });

  it('should fetch a page by slug', async () => {
    const page = await fetchPageBySlug(slug);
    const pageObj = Array.isArray(page) ? page[0] : page;
    expect(pageObj?.['slug']).toBe(slug);
  });
});
