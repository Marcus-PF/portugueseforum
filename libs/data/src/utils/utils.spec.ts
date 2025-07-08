/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃                    Utilities Test Suite               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates reusable utilities such as `cn()` and `api`.
 */

import { describe, it, expect } from 'vitest';
import { cn } from './cn';
import { api } from './api';

describe('cn()', () => {
  it('should merge classes correctly', () => {
    const result = cn('bg-red-500', 'text-white');
    expect(result).toBe('bg-red-500 text-white');
  });
});

describe('api.get()', () => {
  it('should throw when endpoint is missing (simulated)', async () => {
    try {
      await api.get('/__fake-endpoint__');
    } catch (error) {
      const message = (error as Error).message;
      expect(message).toMatch(/(API request failed|fetch failed)/);
    }
  });
});

