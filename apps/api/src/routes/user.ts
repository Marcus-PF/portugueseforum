/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/api – User Management Routes               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { userService } from '@pfsa/data';
import { createUserSchema, updateUserSchema } from '@pfsa/data/schemas';
import { jwtMiddleware } from '../middleware/jwt';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Route Definitions
 * ───────────────────────────────────────────────────────────── */
const users = new Hono();

// Query schema for user listing
const getUsersQuerySchema = z.object({
  page: z.string().optional().transform(val => val ? parseInt(val) : 1),
  limit: z.string().optional().transform(val => val ? parseInt(val) : 10),
  role: z.enum(['admin', 'user', 'moderator']).optional(),
  isVerified: z.string().optional().transform(val => val === 'true'),
  isBanned: z.string().optional().transform(val => val === 'true'),
  search: z.string().optional(),
  sortBy: z.enum(['createdAt', 'email', 'name', 'lastLoginAt']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

// Ban user schema
const banUserSchema = z.object({
  reason: z.string().min(1, 'Ban reason is required'),
  bannedBy: z.string().min(1, 'Banned by is required'),
});

// Role change schema
const changeRoleSchema = z.object({
  role: z.enum(['admin', 'user', 'moderator']),
});

/* ─────────────────────────────────────────────────────────────
 * 🛡️ Protected Routes (Admin Only)
 * ───────────────────────────────────────────────────────────── */

// GET /api/users - List users with pagination and filtering
users.get('/', 
  jwtMiddleware,
  zValidator('query', getUsersQuerySchema),
  async (c) => {
    const query = c.req.valid('query');
    
    try {
      const result = await userService.getUsers(query);
      return c.json(result);
    } catch (error) {
      console.error('Error fetching users:', error);
      return c.json({ error: 'Failed to fetch users' }, 500);
    }
  }
);

// GET /api/users/stats - Get user statistics
users.get('/stats',
  jwtMiddleware,
  async (c) => {
    try {
      const stats = await userService.getUserStats();
      return c.json(stats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
      return c.json({ error: 'Failed to fetch user statistics' }, 500);
    }
  }
);

// GET /api/users/:id - Get user by ID
users.get('/:id',
  jwtMiddleware,
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const user = await userService.getUserById(id);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return c.json({ error: 'Failed to fetch user' }, 500);
    }
  }
);

// POST /api/users - Create new user
users.post('/',
  jwtMiddleware,
  zValidator('json', createUserSchema),
  async (c) => {
    const userData = c.req.valid('json');
    
    try {
      const user = await userService.createUser(userData);
      return c.json(user, 201);
    } catch (error) {
      console.error('Error creating user:', error);
      
      if (error.code === 11000) {
        return c.json({ error: 'Email already exists' }, 400);
      }
      
      return c.json({ error: 'Failed to create user' }, 500);
    }
  }
);

// PUT /api/users/:id - Update user
users.put('/:id',
  jwtMiddleware,
  zValidator('json', updateUserSchema),
  async (c) => {
    const id = c.req.param('id');
    const updates = c.req.valid('json');
    
    try {
      const user = await userService.updateUser(id, updates);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      return c.json({ error: 'Failed to update user' }, 500);
    }
  }
);

// POST /api/users/:id/ban - Ban user
users.post('/:id/ban',
  jwtMiddleware,
  zValidator('json', banUserSchema),
  async (c) => {
    const id = c.req.param('id');
    const banData = c.req.valid('json');
    
    try {
      const user = await userService.banUser(id, banData);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error banning user:', error);
      return c.json({ error: 'Failed to ban user' }, 500);
    }
  }
);

// POST /api/users/:id/unban - Unban user
users.post('/:id/unban',
  jwtMiddleware,
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const user = await userService.unbanUser(id);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error unbanning user:', error);
      return c.json({ error: 'Failed to unban user' }, 500);
    }
  }
);

// POST /api/users/:id/role - Change user role
users.post('/:id/role',
  jwtMiddleware,
  zValidator('json', changeRoleSchema),
  async (c) => {
    const id = c.req.param('id');
    const { role } = c.req.valid('json');
    
    try {
      const user = await userService.changeRole(id, role);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error changing user role:', error);
      return c.json({ error: 'Failed to change user role' }, 500);
    }
  }
);

// POST /api/users/:id/verify - Verify user
users.post('/:id/verify',
  jwtMiddleware,
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const user = await userService.verifyUser(id);
      
      if (!user) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json(user);
    } catch (error) {
      console.error('Error verifying user:', error);
      return c.json({ error: 'Failed to verify user' }, 500);
    }
  }
);

// DELETE /api/users/:id - Delete user
users.delete('/:id',
  jwtMiddleware,
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const success = await userService.deleteUser(id);
      
      if (!success) {
        return c.json({ error: 'User not found' }, 404);
      }
      
      return c.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return c.json({ error: 'Failed to delete user' }, 500);
    }
  }
);

export default users;