/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – User Management Table              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

'use client';

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { useState } from 'react';
import { toast } from 'sonner';
import { UserResponse } from '@pfsa/data/dto';
import { sortUsers } from '@pfsa/data';
import { userApi } from '@/lib/api/users';
import { Button } from '@pfsa/ui';
import { Badge } from '@pfsa/ui';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@pfsa/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@pfsa/ui';
import { MoreHorizontal } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Component Implementation
 * ───────────────────────────────────────────────────────────── */
interface UserTableProps {
  users: UserResponse[];
  onUserUpdate: (updatedUser: UserResponse) => void;
  onUserDelete: (userId: string) => void;
}

export function UserTable({ users, onUserUpdate, onUserDelete }: UserTableProps) {
  const [loading, setLoading] = useState<string | null>(null);
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

  const handleBanUser = async (user: UserResponse) => {
    const reason = prompt('Enter ban reason:');
    if (!reason) return;

    setLoading(user._id);
    try {
      const updatedUser = await userApi.banUser(user._id, {
        reason,
        bannedBy: 'current-admin-id', // Replace with actual admin ID
      });
      
      onUserUpdate(updatedUser);
      toast.success(`User ${user.email} has been banned`);
    } catch (error) {
      toast.error('Failed to ban user');
      console.error('Ban error:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleUnbanUser = async (user: UserResponse) => {
    setLoading(user._id);
    try {
      const updatedUser = await userApi.unbanUser(user._id);
      onUserUpdate(updatedUser);
      toast.success(`User ${user.email} has been unbanned`);
    } catch (error) {
      toast.error('Failed to unban user');
      console.error('Unban error:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleChangeRole = async (user: UserResponse, newRole: 'admin' | 'user' | 'moderator') => {
    setLoading(user._id);
    try {
      const updatedUser = await userApi.changeRole(user._id, newRole);
      onUserUpdate(updatedUser);
      toast.success(`User role changed to ${newRole}`);
    } catch (error) {
      toast.error('Failed to change user role');
      console.error('Role change error:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleVerifyUser = async (user: UserResponse) => {
    setLoading(user._id);
    try {
      const updatedUser = await userApi.verifyUser(user._id);
      onUserUpdate(updatedUser);
      toast.success(`User ${user.email} has been verified`);
    } catch (error) {
      toast.error('Failed to verify user');
      console.error('Verify error:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleDeleteUser = async (user: UserResponse) => {
    if (!confirm(`Are you sure you want to delete ${user.email}?`)) return;

    setLoading(user._id);
    try {
      await userApi.deleteUser(user._id);
      onUserDelete(user._id);
      toast.success(`User ${user.email} has been deleted`);
    } catch (error) {
      toast.error('Failed to delete user');
      console.error('Delete error:', error);
    } finally {
      setLoading(null);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'moderator': return 'bg-yellow-100 text-yellow-800';
      case 'user': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (user: UserResponse) => {
    if (user.isBanned) return 'bg-red-100 text-red-800';
    if (user.isVerified) return 'bg-green-100 text-green-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (user: UserResponse) => {
    if (user.isBanned) return 'Banned';
    if (user.isVerified) return 'Verified';
    return 'Unverified';
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead 
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => handleSort('email')}
          >
            Email {sortBy === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
          </TableHead>
          <TableHead 
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => handleSort('name')}
          >
            Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead 
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => handleSort('createdAt')}
          >
            Created {sortBy === 'createdAt' && (sortOrder === 'asc' ? '↑' : '↓')}
          </TableHead>
          <TableHead>Last Login</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell>{user.name || '-'}</TableCell>
            <TableCell>
              <Badge className={getRoleColor(user.role)}>
                {user.role}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className={getStatusColor(user)}>
                {getStatusText(user)}
              </Badge>
            </TableCell>
            <TableCell>
              {new Date(user.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {user.lastLoginAt 
                ? new Date(user.lastLoginAt).toLocaleDateString()
                : 'Never'
              }
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="h-8 w-8 p-0"
                    disabled={loading === user._id}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {!user.isVerified && (
                    <DropdownMenuItem onClick={() => handleVerifyUser(user)}>
                      Verify User
                    </DropdownMenuItem>
                  )}
                  
                  {user.isBanned ? (
                    <DropdownMenuItem onClick={() => handleUnbanUser(user)}>
                      Unban User
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => handleBanUser(user)}>
                      Ban User
                    </DropdownMenuItem>
                  )}
                  
                  <DropdownMenuItem onClick={() => handleChangeRole(user, 'admin')}>
                    Make Admin
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleChangeRole(user, 'moderator')}>
                    Make Moderator
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleChangeRole(user, 'user')}>
                    Make User
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    onClick={() => handleDeleteUser(user)}
                    className="text-red-600"
                  >
                    Delete User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}