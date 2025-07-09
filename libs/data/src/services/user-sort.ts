/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/data – User Sorting Utilities               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import type { UserResponse } from '../dto/user-dto';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Sorting Utilities
 * ───────────────────────────────────────────────────────────── */
export const sortUsers = {
  byEmail: (users: UserResponse[], order: 'asc' | 'desc' = 'asc'): UserResponse[] => {
    return [...users].sort((a, b) => {
      const compare = a.email.localeCompare(b.email);
      return order === 'asc' ? compare : -compare;
    });
  },

  byName: (users: UserResponse[], order: 'asc' | 'desc' = 'asc'): UserResponse[] => {
    return [...users].sort((a, b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';
      const compare = nameA.localeCompare(nameB);
      return order === 'asc' ? compare : -compare;
    });
  },

  byCreatedAt: (users: UserResponse[], order: 'asc' | 'desc' = 'desc'): UserResponse[] => {
    return [...users].sort((a, b) => {
      const compare = a.createdAt.getTime() - b.createdAt.getTime();
      return order === 'asc' ? compare : -compare;
    });
  },

  byLastLogin: (users: UserResponse[], order: 'asc' | 'desc' = 'desc'): UserResponse[] => {
    return [...users].sort((a, b) => {
      const dateA = a.lastLoginAt?.getTime() || 0;
      const dateB = b.lastLoginAt?.getTime() || 0;
      const compare = dateA - dateB;
      return order === 'asc' ? compare : -compare;
    });
  },

  byRole: (users: UserResponse[], order: 'asc' | 'desc' = 'asc'): UserResponse[] => {
    const roleOrder = { admin: 1, moderator: 2, user: 3 };
    return [...users].sort((a, b) => {
      const compare = roleOrder[a.role] - roleOrder[b.role];
      return order === 'asc' ? compare : -compare;
    });
  },

  byStatus: (users: UserResponse[], order: 'asc' | 'desc' = 'asc'): UserResponse[] => {
    return [...users].sort((a, b) => {
      const statusA = a.isBanned ? 'banned' : a.isVerified ? 'verified' : 'unverified';
      const statusB = b.isBanned ? 'banned' : b.isVerified ? 'verified' : 'unverified';
      const statusOrder = { verified: 1, unverified: 2, banned: 3 };
      const compare = statusOrder[statusA] - statusOrder[statusB];
      return order === 'asc' ? compare : -compare;
    });
  },
};