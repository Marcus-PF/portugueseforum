/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Enhanced User Management Component  ┃
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
import { 
  Button,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pfsa/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@pfsa/ui/dropdown-menu';
import { MoreVertical, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Component Implementation
 * ───────────────────────────────────────────────────────────── */
interface UserManagementProps {
  initialUsers: UserResponse[];
  initialPagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  locale: string;
}

export function UserManagement({ 
  initialUsers, 
  initialPagination, 
  locale 
}: UserManagementProps) {
  const [users, setUsers] = useState(initialUsers);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
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
    setUsers(sorted);
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
      
      setUsers(users.map(u => u._id === user._id ? updatedUser : u));
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
      setUsers(users.map(u => u._id === user._id ? updatedUser : u));
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
      setUsers(users.map(u => u._id === user._id ? updatedUser : u));
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
      setUsers(users.map(u => u._id === user._id ? updatedUser : u));
      toast.success(`User ${user.email} has been verified`);
    } catch (error) {
      toast.error('Failed to verify user');
      console.error('Verify error:', error);
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

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getTimeAgo = (date: Date | string) => {
    const now = new Date();
    const past = new Date(date);
    const diffInMs = now.getTime() - past.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays}d ago`;
    } else {
      return formatDate(date);
    }
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="verified">Verified</SelectItem>
            <SelectItem value="unverified">Unverified</SelectItem>
            <SelectItem value="banned">Banned</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Users Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleSort('email')}
            >
              User {sortBy === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
            </TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Posts</TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleSort('createdAt')}
            >
              Last Seen {sortBy === 'createdAt' && (sortOrder === 'asc' ? '↑' : '↓')}
            </TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead className="w-[50px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.profileImage} alt={user.name} />
                    <AvatarFallback>
                      {user.name?.split(' ').map(n => n[0]).join('') || user.email[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name || 'Anonymous'}</div>
                    <div className="text-sm text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                </div>
              </TableCell>
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
              <TableCell>-</TableCell> {/* Posts count - to be implemented */}
              <TableCell className="text-muted-foreground">
                {user.lastLoginAt ? getTimeAgo(user.lastLoginAt) : 'Never'}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {formatDate(user.createdAt)}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-8 w-8 p-0"
                      disabled={loading === user._id}
                    >
                      <MoreVertical className="h-4 w-4" />
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
                    
                    {user.role !== 'admin' && (
                      <DropdownMenuItem onClick={() => handleChangeRole(user, 'admin')}>
                        Make Admin
                      </DropdownMenuItem>
                    )}
                    {user.role !== 'moderator' && (
                      <DropdownMenuItem onClick={() => handleChangeRole(user, 'moderator')}>
                        Make Moderator
                      </DropdownMenuItem>
                    )}
                    {user.role !== 'user' && (
                      <DropdownMenuItem onClick={() => handleChangeRole(user, 'user')}>
                        Make User
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} users
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <div className="text-sm">
            Page {pagination.page} of {pagination.totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page === pagination.totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}