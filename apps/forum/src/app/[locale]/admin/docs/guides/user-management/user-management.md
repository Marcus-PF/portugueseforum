# 👥 User Management Guide - Portuguese Forum Monorepo

> **Complete guide for maintaining user management consistency across the `@pfsa` monorepo**  
> _Last updated: July 2025_

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [User Model Structure](#-user-model-structure)
3. [User Service Layer](#-user-service-layer)
4. [DTOs & Validation](#-dtos--validation)
5. [Frontend Integration](#-frontend-integration)
6. [API Endpoints](#-api-endpoints)
7. [Testing Strategy](#-testing-strategy)
8. [Best Practices](#-best-practices)
9. [Common Patterns](#-common-patterns)
10. [Troubleshooting](#-troubleshooting)

---

## 🎯 Overview

The Portuguese Forum uses a comprehensive user management system built on:

- **MongoDB** + **Mongoose** for data persistence
- **Zod** for schema validation
- **JWT** for authentication
- **Role-based access control** (RBAC)
- **Ban/suspension system**
- **Email verification workflow**

### Architecture Flow
```
Frontend (Next.js) → API (Hono) → Data Layer (libs/data) → MongoDB
```

---

## 🗄️ User Model Structure

### Core User Schema

```typescript
// libs/data/src/models/user.ts
export interface User {
  _id: ObjectId;
  email: string;              // Required, unique
  password?: string;          // Optional for OAuth users
  name?: string;              // Display name
  role: 'admin' | 'user' | 'moderator';
  isVerified: boolean;        // Email verification status
  isBanned: boolean;          // Ban status
  bannedAt?: Date;            // Ban timestamp
  bannedReason?: string;      // Ban reason
  bannedBy?: ObjectId;        // Admin who banned
  lastLoginAt?: Date;         // Last login tracking
  googleId?: string;          // OAuth integration
  resetToken?: string;        // Password reset token
  resetTokenExpiry?: Date;    // Token expiration
  verificationToken?: string; // Email verification token
  profileImage?: string;      // Avatar URL
  createdAt: Date;
  updatedAt: Date;
}
```

### Role Hierarchy
```typescript
// libs/data/src/constants/roles.ts
export const ROLES = {
  ADMIN: 'admin',        // Full system access
  MODERATOR: 'moderator', // Content moderation
  USER: 'user',          // Basic user access
} as const;
```

---

## 🔧 User Service Layer

### Core Service Methods

```typescript
// libs/data/src/services/user-service.ts
import { userService } from '@pfsa/data';

// User CRUD Operations
await userService.createUser(userData);
await userService.getUserById(id);
await userService.getUserByEmail(email);
await userService.updateUser(id, updates);
await userService.deleteUser(id);

// User Management
await userService.banUser(id, { reason, bannedBy });
await userService.unbanUser(id);
await userService.changeRole(id, 'admin');
await userService.verifyUser(id);

// Query Operations
await userService.getUsers({
  page: 1,
  limit: 10,
  role: 'user',
  isVerified: true,
  search: 'john@example.com',
  sortBy: 'createdAt',
  sortOrder: 'desc'
});

// Statistics
await userService.getUserStats();
```

### Sorting Utilities

```typescript
// libs/data/src/services/user-sort.ts
import { sortUsers } from '@pfsa/data';

const users = await userService.getUsers();

// Sort by different criteria
const byEmail = sortUsers.byEmail(users.users, 'asc');
const byRole = sortUsers.byRole(users.users, 'desc');
const byStatus = sortUsers.byStatus(users.users, 'asc');
const byLastLogin = sortUsers.byLastLogin(users.users, 'desc');
```

---

## 📦 DTOs & Validation

### Request DTOs

```typescript
// libs/data/src/dto/user-dto.ts

// User Creation
interface CreateUserDto {
  email: string;
  password?: string;
  name?: string;
  role?: 'admin' | 'user' | 'moderator';
  googleId?: string;
}

// User Updates
interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: 'admin' | 'user' | 'moderator';
  isVerified?: boolean;
  profileImage?: string;
}

// User Queries
interface GetUsersQuery {
  page?: number;
  limit?: number;
  role?: 'admin' | 'user' | 'moderator';
  isVerified?: boolean;
  isBanned?: boolean;
  search?: string;
  sortBy?: 'createdAt' | 'email' | 'name' | 'lastLoginAt';
  sortOrder?: 'asc' | 'desc';
}
```

### Response DTOs

```typescript
// Public user data (safe for frontend)
interface UserResponse {
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

// Admin-only data (includes sensitive fields)
interface AdminUserResponse extends UserResponse {
  bannedAt?: Date;
  bannedReason?: string;
  bannedBy?: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
  verificationToken?: string;
  googleId?: string;
}
```

### Zod Validation

```typescript
// libs/data/src/schemas/user-schema.ts
import { userSchema, createUserSchema, updateUserSchema } from '@pfsa/data';

// Validate user data
const validUser = userSchema.parse(userData);
const validCreate = createUserSchema.parse(createData);
const validUpdate = updateUserSchema.parse(updateData);
```

---

## 🌐 Frontend Integration

### Next.js App Router Usage

```typescript
// apps/forum/src/app/[locale]/admin/users/page.tsx
import { userService, sortUsers } from '@pfsa/data';
import { UserResponse } from '@pfsa/data/dto';

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; role?: string };
}) {
  const users = await userService.getUsers({
    page: parseInt(searchParams.page || '1'),
    search: searchParams.search,
    role: searchParams.role as any,
    limit: 20,
  });

  return (
    <div>
      <h1>User Management</h1>
      <UserTable users={users.users} pagination={users.pagination} />
    </div>
  );
}
```

### Client Components

```typescript
// apps/forum/src/components/user-management/user-table.tsx
'use client';

import { UserResponse } from '@pfsa/data/dto';
import { sortUsers } from '@pfsa/data';

interface UserTableProps {
  users: UserResponse[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function UserTable({ users, pagination }: UserTableProps) {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [sortBy, setSortBy] = useState<'email' | 'name' | 'createdAt'>('email');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: typeof sortBy) => {
    const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(field);
    setSortOrder(newOrder);
    
    let sorted: UserResponse[];
    switch (field) {
      case 'email':
        sorted = sortUsers.byEmail(users, newOrder);
        break;
      case 'name':
        sorted = sortUsers.byName(users, newOrder);
        break;
      case 'createdAt':
        sorted = sortUsers.byCreatedAt(users, newOrder);
        break;
      default:
        sorted = users;
    }
    setSortedUsers(sorted);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('email')}>Email</th>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('createdAt')}>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <UserRow key={user._id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
```

---

## 🛰️ API Endpoints

### Hono API Routes

```typescript
// apps/api/src/routes/users.ts
import { Hono } from 'hono';
import { userService } from '@pfsa/data';
import { createUserSchema, updateUserSchema } from '@pfsa/data/schemas';

const users = new Hono();

// GET /api/users - List users with pagination
users.get('/', async (c) => {
  const query = c.req.query();
  const result = await userService.getUsers({
    page: parseInt(query.page || '1'),
    limit: parseInt(query.limit || '10'),
    role: query.role as any,
    isVerified: query.isVerified ? query.isVerified === 'true' : undefined,
    isBanned: query.isBanned ? query.isBanned === 'true' : undefined,
    search: query.search,
    sortBy: query.sortBy as any,
    sortOrder: query.sortOrder as any,
  });
  
  return c.json(result);
});

// GET /api/users/:id - Get user by ID
users.get('/:id', async (c) => {
  const id = c.req.param('id');
  const user = await userService.getUserById(id);
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }
  
  return c.json(user);
});

// POST /api/users - Create user
users.post('/', async (c) => {
  const body = await c.req.json();
  const validatedData = createUserSchema.parse(body);
  
  const user = await userService.createUser(validatedData);
  return c.json(user, 201);
});

// PUT /api/users/:id - Update user
users.put('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const validatedData = updateUserSchema.parse(body);
  
  const user = await userService.updateUser(id, validatedData);
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }
  
  return c.json(user);
});

// POST /api/users/:id/ban - Ban user
users.post('/:id/ban', async (c) => {
  const id = c.req.param('id');
  const { reason, bannedBy } = await c.req.json();
  
  const user = await userService.banUser(id, { reason, bannedBy });
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }
  
  return c.json(user);
});

// POST /api/users/:id/unban - Unban user
users.post('/:id/unban', async (c) => {
  const id = c.req.param('id');
  const user = await userService.unbanUser(id);
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }
  
  return c.json(user);
});

// GET /api/users/stats - User statistics
users.get('/stats', async (c) => {
  const stats = await userService.getUserStats();
  return c.json(stats);
});

export default users;
```

---

## 🧪 Testing Strategy

### Unit Tests

```typescript
// libs/data/src/services/user-service.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { userService } from './user-service';
import { mockUsers } from '../mocks/mock-users';

describe('UserService', () => {
  beforeEach(async () => {
    // Setup test database
    await setupTestDatabase();
  });

  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      const user = await userService.createUser(userData);
      
      expect(user.email).toBe(userData.email);
      expect(user.name).toBe(userData.name);
      expect(user.role).toBe('user');
      expect(user.isVerified).toBe(false);
    });

    it('should throw error for duplicate email', async () => {
      const userData = {
        email: 'existing@example.com',
        password: 'password123',
      };

      await userService.createUser(userData);
      
      await expect(
        userService.createUser(userData)
      ).rejects.toThrow('Email already exists');
    });
  });

  describe('banUser', () => {
    it('should ban a user with reason', async () => {
      const user = await userService.createUser({
        email: 'user@example.com',
        password: 'password123',
      });

      const bannedUser = await userService.banUser(user._id, {
        reason: 'Spam posting',
        bannedBy: 'admin123',
      });

      expect(bannedUser?.isBanned).toBe(true);
      expect(bannedUser?.bannedReason).toBe('Spam posting');
    });
  });

  describe('getUsers', () => {
    it('should return paginated users', async () => {
      // Create test users
      await Promise.all(
        mockUsers.map(userData => userService.createUser(userData))
      );

      const result = await userService.getUsers({
        page: 1,
        limit: 2,
      });

      expect(result.users).toHaveLength(2);
      expect(result.pagination.total).toBeGreaterThan(0);
      expect(result.pagination.totalPages).toBeGreaterThan(0);
    });

    it('should filter users by role', async () => {
      const result = await userService.getUsers({
        role: 'admin',
      });

      expect(result.users.every(user => user.role === 'admin')).toBe(true);
    });
  });
});
```

### Integration Tests

```typescript
// apps/api/src/routes/users.spec.ts
import { describe, it, expect } from 'vitest';
import { testClient } from '../test-utils';

describe('Users API', () => {
  it('should get users with pagination', async () => {
    const response = await testClient.get('/api/users?page=1&limit=10');
    
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('users');
    expect(data).toHaveProperty('pagination');
    expect(Array.isArray(data.users)).toBe(true);
  });

  it('should create a new user', async () => {
    const userData = {
      email: 'newuser@example.com',
      password: 'password123',
      name: 'New User',
    };

    const response = await testClient.post('/api/users', {
      json: userData,
    });

    expect(response.status).toBe(201);
    
    const user = await response.json();
    expect(user.email).toBe(userData.email);
    expect(user.name).toBe(userData.name);
  });

  it('should ban a user', async () => {
    const user = await createTestUser();
    
    const response = await testClient.post(`/api/users/${user._id}/ban`, {
      json: {
        reason: 'Testing ban functionality',
        bannedBy: 'admin123',
      },
    });

    expect(response.status).toBe(200);
    
    const bannedUser = await response.json();
    expect(bannedUser.isBanned).toBe(true);
  });
});
```

---

## 🎯 Best Practices

### 1. **Always Use the Service Layer**
```typescript
// ✅ Good
import { userService } from '@pfsa/data';
const users = await userService.getUsers({ page: 1 });

// ❌ Bad - Direct model access
import { UserModel } from '@pfsa/data';
const users = await UserModel.find({});
```

### 2. **Validate Input Data**
```typescript
// ✅ Good
import { createUserSchema } from '@pfsa/data/schemas';

const validatedData = createUserSchema.parse(requestData);
const user = await userService.createUser(validatedData);

// ❌ Bad - No validation
const user = await userService.createUser(requestData);
```

### 3. **Use Proper DTOs**
```typescript
// ✅ Good
import { UserResponse } from '@pfsa/data/dto';

function UserCard({ user }: { user: UserResponse }) {
  return <div>{user.name}</div>;
}

// ❌ Bad - Using raw model type
import { User } from '@pfsa/data/models';

function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

### 4. **Handle Permissions Correctly**
```typescript
// ✅ Good
const canBanUsers = currentUser.role === 'admin' || currentUser.role === 'moderator';

if (canBanUsers) {
  await userService.banUser(targetUserId, {
    reason: 'Violation of terms',
    bannedBy: currentUser._id,
  });
}

// ❌ Bad - No permission check
await userService.banUser(targetUserId, { reason: 'Violation of terms' });
```

### 5. **Use Sorting Utilities**
```typescript
// ✅ Good
import { sortUsers } from '@pfsa/data';

const sortedUsers = sortUsers.byEmail(users, 'asc');

// ❌ Bad - Manual sorting
const sortedUsers = users.sort((a, b) => a.email.localeCompare(b.email));
```

---

## 🔄 Common Patterns

### 1. **Admin User Management Component**
```typescript
// apps/forum/src/components/admin/user-management.tsx
'use client';

import { useState } from 'react';
import { UserResponse } from '@pfsa/data/dto';
import { sortUsers } from '@pfsa/data';

interface UserManagementProps {
  initialUsers: UserResponse[];
}

export function UserManagement({ initialUsers }: UserManagementProps) {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(false);

  const handleBanUser = async (userId: string, reason: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users/${userId}/ban`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason, bannedBy: currentUser._id }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(u => u._id === userId ? updatedUser : u));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(u => u._id === userId ? updatedUser : u));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* User management UI */}
    </div>
  );
}
```

### 2. **User Statistics Dashboard**
```typescript
// apps/forum/src/components/admin/user-stats.tsx
import { userService } from '@pfsa/data';

export async function UserStats() {
  const stats = await userService.getUserStats();

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="stat-card">
        <h3>Total Users</h3>
        <p>{stats.totalUsers}</p>
      </div>
      <div className="stat-card">
        <h3>Verified Users</h3>
        <p>{stats.verifiedUsers}</p>
      </div>
      <div className="stat-card">
        <h3>Banned Users</h3>
        <p>{stats.bannedUsers}</p>
      </div>
      <div className="stat-card">
        <h3>Recent Users</h3>
        <p>{stats.recentUsers}</p>
      </div>
    </div>
  );
}
```

### 3. **User Search and Filter**
```typescript
// apps/forum/src/components/admin/user-search.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function UserSearch() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (role) params.set('role', role);
    if (status) params.set('status', status);
    
    router.push(`/admin/users?${params.toString()}`);
  };

  return (
    <div className="search-controls">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
        <option value="user">User</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="verified">Verified</option>
        <option value="unverified">Unverified</option>
        <option value="banned">Banned</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. **Type Errors with User Model**
```typescript
// Error: Property 'bannedBy' does not exist on type 'User'
// Solution: Update the User model to include all fields

// libs/data/src/models/user.ts
export const UserSchema = new Schema({
  // ... other fields
  bannedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});
```

#### 2. **Service Method Not Found**
```typescript
// Error: userService.banUser is not a function
// Solution: Ensure the service is properly exported

// libs/data/src/services/index.ts
export * from './user-service';

// Usage
import { userService } from '@pfsa/data';
// or
import { userService } from '@pfsa/data/services';
```

#### 3. **Zod Validation Errors**
```typescript
// Error: Invalid enum value for role
// Solution: Update the enum values to match your constants

// libs/data/src/schemas/user-schema.ts
export const userSchema = z.object({
  role: z.enum(['admin', 'user', 'moderator']).default('user'),
  // Make sure this matches your ROLES constants
});
```

#### 4. **Database Connection Issues**
```typescript
// Error: MongoDB connection failed
// Solution: Ensure connectToDatabase is called in service methods

// libs/data/src/services/user-service.ts
export class UserService {
  async createUser(userData: CreateUserDto): Promise<UserResponse> {
    await connectToDatabase(); // Always call this first
    
    const user = new UserModel(userData);
    const savedUser = await user.save();
    
    return this.toUserResponse(savedUser);
  }
}
```

#### 5. **Import Path Issues**
```typescript
// Error: Cannot resolve module '@pfsa/data/dto'
// Solution: Check your tsconfig.json paths

// tsconfig.base.json
{
  "compilerOptions": {
    "paths": {
      "@pfsa/data": ["libs/data/src/index.ts"],
      "@pfsa/data/*": ["libs/data/src/*"]
    }
  }
}
```

---

## 📚 Quick Reference

### Service Methods
```typescript
// User CRUD
userService.createUser(userData)
userService.getUserById(id)
userService.getUserByEmail(email)
userService.updateUser(id, updates)
userService.deleteUser(id)

// Management
userService.banUser(id, { reason, bannedBy })
userService.unbanUser(id)
userService.changeRole(id, role)
userService.verifyUser(id)

// Queries
userService.getUsers(query)
userService.getUserStats()
```

### Sorting Functions
```typescript
// Sort utilities
sortUsers.byEmail(users, 'asc')
sortUsers.byName(users, 'desc')
sortUsers.byCreatedAt(users, 'desc')
sortUsers.byLastLogin(users, 'desc')
sortUsers.byRole(users, 'asc')
sortUsers.byStatus(users, 'asc')
```

### Constants
```typescript
// Role constants
ROLES.ADMIN      // 'admin'
ROLES.MODERATOR  // 'moderator'
ROLES.USER       // 'user'
```

---

## 🔄 Migration Guide

If you're updating from an older version:

1. **Update User Model** - Add new fields (isBanned, bannedAt, etc.)
2. **Run Database Migration** - Update existing user documents
3. **Update Service Calls** - Replace direct model access with service methods
4. **Update DTOs** - Use proper request/response interfaces
5. **Add Validation** - Implement Zod schemas for all user operations

---

## 📞 Support

For questions or issues:
- Check the [troubleshooting section](#-troubleshooting)
- Review the [test files](../src/services/user-service.spec.ts) for examples
- Contact: **Marcus Ive** - [marci@mannys.co.za](mailto:marci@mannys.co.za)

---

**Last updated:** July 2025  
**Version:** 1.0.0  
**Maintainer:** Marcus Ive (@marci)