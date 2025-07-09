import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import { newsletterService } from './service';
import { NewsletterModel } from '../models/newsletter';

describe('NewsletterService', () => {
  beforeAll(async () => {
    // Clean up before tests
    await NewsletterModel.deleteMany({});
  });

  afterEach(async () => {
    // Clean up after each test
    await NewsletterModel.deleteMany({});
  });

  it('should create a newsletter', async () => {
    const newsletterData = {
      title: 'Test Newsletter',
      issueNumber: 1,
      month: 1,
      year: 2025,
      description: 'Test description',
      isPublished: false,
      downloadCount: 0,
      fileSize: 0,
      articles: [],
      metadata: {
        totalPages: 8,
        language: 'en' as const,
        tags: ['test'],
      },
    };

    const newsletter = await newsletterService.create(newsletterData);
    
    expect(newsletter).toBeDefined();
    expect(newsletter.title).toBe('Test Newsletter');
    expect(newsletter.issueNumber).toBe(1);
  });

  it('should get all newsletters', async () => {
    // Create test data
    await newsletterService.create({
      title: 'Newsletter 1',
      issueNumber: 1,
      month: 1,
      year: 2025,
      description: 'Description 1',
      isPublished: true,
      downloadCount: 0,
      fileSize: 0,
      articles: [],
      metadata: { totalPages: 8, language: 'en', tags: [] },
    });

    const result = await newsletterService.getAll();
    
    expect(result.newsletters).toHaveLength(1);
    expect(result.newsletters[0]['title']).toBe('Newsletter 1');
  });
});