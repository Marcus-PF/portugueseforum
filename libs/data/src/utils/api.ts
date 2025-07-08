/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃          @pfsa/utils – Type‑Safe API Client (HTTP)     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides a lightweight `api` wrapper for making `GET` and
 * `POST` requests with generic response typing, environment-
 * based base URL resolution, and safe error parsing using Zod.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { z } from 'zod';

/* ─────────────────────────────────────────────────────────────
 * 🛡️ Error Shape Validation
 * ───────────────────────────────────────────────────────────── */
const errorResponseSchema = z.object({
  message: z.string(),
});

/* ─────────────────────────────────────────────────────────────
 * 🌐 Base URL Resolver
 * ───────────────────────────────────────────────────────────── */
/**
 * Retrieves the API base URL from environment config.
 */
function getBaseUrl(): string {
  return process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:4000';
}

/* ─────────────────────────────────────────────────────────────
 * 🚨 Error Handler
 * ───────────────────────────────────────────────────────────── */
/**
 * Safely parses and throws user-friendly API errors.
 */
async function handleError(response: Response): Promise<never> {
  const errorData = await response.json().catch(() => ({}));
  const parsed = errorResponseSchema.safeParse(errorData);

  const message = parsed.success
    ? parsed.data.message
    : `API request failed: ${response.status} ${response.statusText}`;

  throw new Error(message);
}

/* ─────────────────────────────────────────────────────────────
 * 🔗 API Client
 * ───────────────────────────────────────────────────────────── */
/**
 * Thin wrapper for HTTP requests with automatic JSON parsing,
 * environment-based base URL resolution, and typed responses.
 */
export const api = {
  /**
   * Sends a POST request to the specified endpoint.
   *
   * @param url – The relative API route (e.g., `/auth/register`)
   * @param body – JSON-serializable payload
   * @returns A parsed JSON response of type `T`
   */
  async post<T>(url: string, body: unknown): Promise<T> {
    const response = await fetch(`${getBaseUrl()}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) await handleError(response);
    return response.json();
  },

  /**
   * Sends a GET request to the specified endpoint.
   *
   * @param url – The relative API route
   * @returns A parsed JSON response of type `T`
   */
  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${getBaseUrl()}${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) await handleError(response);
    return response.json();
  },
};
