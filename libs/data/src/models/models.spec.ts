/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃                   Mongoose Model Tests                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates model compilation and schema integrity.
 */

import { describe, it, expect } from 'vitest';
import {
  ArticleModel,
  PageModel,
  UserModel,
  CommunityPostModel
} from './index';

describe('Mongoose Models', () => {
  it('should define ArticleModel', () => {
    expect(ArticleModel.modelName).toBe('Article');
  });

  it('should define PageModel', () => {
    expect(PageModel.modelName).toBe('Page');
  });

  it('should define UserModel', () => {
    expect(UserModel.modelName).toBe('User');
  });

  it('should define CommunityPost', () => {
    expect(CommunityPostModel.modelName).toBe('CommunityPost');
  });
});
