/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – User Management DTOs                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 🧠 DTO Exports
 * ───────────────────────────────────────────────────────────── */

// User creation
export interface CreateUserDto {
  email: string;
  password?: string;
  name?: string;
  role?: 'admin' | 'user' | 'moderator';
  googleId?: string;
}

// User update
export interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'admin' | 'user' | 'moderator';
  isVerified?: boolean;
  profileImage?: string;
}

// User response (public data)
export interface UserResponse {
  _id: string;
  email: string;
  name?: string;
  role: 'admin' | 'user' | 'moderator';
  isVerified: boolean;
  isBanned: boolean;
  lastLoginAt?: Date;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Admin user response (includes sensitive data)
export interface AdminUserResponse extends UserResponse {
  bannedAt?: Date;
  bannedReason?: string;
  bannedBy?: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
  verificationToken?: string;
  googleId?: string;
}

// User list query
export interface GetUsersQuery {
  page?: number;
  limit?: number;
  role?: 'admin' | 'user' | 'moderator';
  isVerified?: boolean;
  isBanned?: boolean;
  search?: string;
  sortBy?: 'createdAt' | 'email' | 'name' | 'lastLoginAt';
  sortOrder?: 'asc' | 'desc';
}

// User list response
export interface GetUsersResponse {
  users: UserResponse[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Ban user
export interface BanUserDto {
  reason: string;
  bannedBy: string;
}

// User statistics
export interface UserStatsResponse {
  totalUsers: number;
  verifiedUsers: number;
  bannedUsers: number;
  adminUsers: number;
  recentUsers: number; // last 30 days
}