import { z } from 'zod';

const errorResponseSchema = z.object({
  message: z.string(),
});

export const api = {
  async post<T>(url: string, body: unknown): Promise<T> {
    const baseUrl = process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:4000';
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const parsedError = errorResponseSchema.safeParse(errorData);
      throw new Error(parsedError.success ? parsedError.data.message : `API request failed: ${response.statusText}`);
    }

    return response.json();
  },

  async get<T>(url: string): Promise<T> {
    const baseUrl = process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:4000';
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const parsedError = errorResponseSchema.safeParse(errorData);
      throw new Error(parsedError.success ? parsedError.data.message : `API request failed: ${response.statusText}`);
    }

    return response.json();
  },
};