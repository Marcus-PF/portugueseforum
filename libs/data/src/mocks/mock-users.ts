/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Mock User Data                       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import type { User } from '../models';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Mock Data
 * ───────────────────────────────────────────────────────────── */
export const mockUsers: Partial<User>[] = [
  {
    email: 'admin@portugueseforum.com',
    name: 'Admin User',
    role: 'admin',
    isVerified: true,
    isBanned: false,
    lastLoginAt: new Date('2024-07-08'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-08'),
  },
  {
    email: 'marci@mannys.co.za',
    name: 'Marcus Ive',
    role: 'admin',
    isVerified: true,
    isBanned: false,
    lastLoginAt: new Date('2024-07-09'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-09'),
  },
  {
    email: 'mod@portugueseforum.com',
    name: 'Moderator User',
    role: 'moderator',
    isVerified: true,
    isBanned: false,
    lastLoginAt: new Date('2024-07-05'),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-07-05'),
  },
  {
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    isVerified: true,
    isBanned: false,
    lastLoginAt: new Date('2024-07-07'),
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-07-07'),
  },
  {
    email: 'newuser@example.com',
    name: 'New User',
    role: 'user',
    isVerified: false,
    isBanned: false,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
  },
  {
    email: 'banned@example.com',
    name: 'Banned User',
    role: 'user',
    isVerified: true,
    isBanned: true,
    bannedAt: new Date('2024-06-15'),
    bannedReason: 'Violation of community guidelines',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-06-15'),
  },
];