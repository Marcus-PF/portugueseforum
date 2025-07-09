/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/forum – Enhanced User Management Admin Page ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Complete user management interface combining UI and backend.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { Suspense } from 'react';
import { AdminLayout } from '@pfsa/ui';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
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
  Skeleton
} from '@pfsa/ui';
import { getTranslations } from 'next-intl/server';
import { Users, Plus, Search, Filter, MoreVertical } from 'lucide-react';

// Import new user management components
import { UserManagement } from '@/components/admin/user-management/user-management';
import { UserStats } from '@/components/admin/user-management/user-stats';
import { userApi } from '@/lib/api/users';
import { mockUsers } from '@pfsa/data/mocks';
import { userService } from '@pfsa/data';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Page Props
 * ───────────────────────────────────────────────────────────── */
interface AdminUsersPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: {
    page?: string;
    search?: string;
    role?: 'admin' | 'user' | 'moderator';
    status?: string;
  };
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Enhanced Users Page Component
 * ───────────────────────────────────────────────────────────── */
export default async function AdminUsersPage({ 
  params,
  searchParams 
}: AdminUsersPageProps) {
  // Await params before using its properties
  const { locale } = await params;
  
  const t = await getTranslations('admin.users');

  // Parse search parameters
  const page = parseInt(searchParams.page || '1');
  const search = searchParams.search;
  const role = searchParams.role;
  const status = searchParams.status;

  // Parse status filter
  let isVerified: boolean | undefined;
  let isBanned: boolean | undefined;

  if (status === 'verified') isVerified = true;
  if (status === 'unverified') isVerified = false;
  if (status === 'banned') isBanned = true;

  // Fetch data from API or fallback to mock data
  let users, stats;
  
  try {
    // Try to fetch from API first
    [users, stats] = await Promise.all([
      userApi.getUsers({
        page,
        limit: 20,
        search,
        role,
        isVerified,
        isBanned,
        sortBy: 'createdAt',
        sortOrder: 'desc',
      }),
      userApi.getUserStats(),
    ]);
  } catch (error) {
    // Fallback to mock data if API is not available
    console.warn('API not available, using mock data:', error);
    
    // Use mock data with proper structure
    users = {
      users: mockUsers.map(user => ({
        _id: user._id || Math.random().toString(36).substr(2, 9),
        email: user.email || 'unknown@example.com',
        name: user.name || 'Unknown User',
        role: user.role || 'user',
        isVerified: user.isVerified || false,
        isBanned: user.isBanned || false,
        lastLoginAt: user.lastLoginAt,
        profileImage: user.profileImage,
        createdAt: user.createdAt || new Date(),
        updatedAt: user.updatedAt || new Date(),
      })),
      pagination: {
        page: 1,
        limit: 20,
        total: mockUsers.length,
        totalPages: Math.ceil(mockUsers.length / 20),
      },
    };
    
    stats = {
      totalUsers: mockUsers.length,
      verifiedUsers: mockUsers.filter(u => u.isVerified).length,
      bannedUsers: mockUsers.filter(u => u.isBanned).length,
      adminUsers: mockUsers.filter(u => u.role === 'admin').length,
      recentUsers: mockUsers.filter(u => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return u.createdAt && u.createdAt >= thirtyDaysAgo;
      }).length,
    };
  }

  const breadcrumbs = [
    { label: 'Dashboard', href: `/${locale}/admin` },
    { label: 'Users', current: true },
  ];

  return (
    <AdminLayout breadcrumbs={breadcrumbs}>
      <div className="space-y-6">
        {/* Enhanced Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {t('title', { default: 'Users' })}
            </h1>
            <p className="text-muted-foreground">
              {t('description', { default: 'Manage users, roles, and permissions across the platform' })}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              {t('search', { default: 'Search' })}
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              {t('filter', { default: 'Filter' })}
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              {t('addUser', { default: 'Add User' })}
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Cards with Real Data */}
        <Suspense fallback={<UserStatsSkeleton />}>
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.totalUsers', { default: 'Total Users' })}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('stats.totalUsersDesc', { default: 'Registered users' })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.verifiedUsers', { default: 'Verified Users' })}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.verifiedUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('stats.verifiedUsersDesc', { default: 'Email verified' })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.adminUsers', { default: 'Admin Users' })}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.adminUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('stats.adminUsersDesc', { default: 'Administrative users' })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('stats.recentUsers', { default: 'Recent Users' })}
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.recentUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('stats.recentUsersDesc', { default: 'Last 30 days' })}
                </p>
              </CardContent>
            </Card>
          </div>
        </Suspense>

        {/* Enhanced Users Table with Backend Integration */}
        <Card>
          <CardHeader>
            <CardTitle>{t('table.title', { default: 'All Users' })}</CardTitle>
            <CardDescription>
              {t('table.description', { default: 'Manage user accounts and permissions' })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<UserTableSkeleton />}>
              <UserManagement 
                initialUsers={users.users}
                initialPagination={users.pagination}
                locale={locale}
              />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 🧾 Loading Components
 * ───────────────────────────────────────────────────────────── */
function UserStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16 mb-2" />
            <Skeleton className="h-3 w-20" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function UserTableSkeleton() {
  return (
    <div className="space-y-4">
      {/* Search and filter skeleton */}
      <div className="flex space-x-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
      
      {/* Table skeleton */}
      <div className="space-y-2">
        {/* Table header */}
        <div className="flex space-x-4 pb-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        
        {/* Table rows */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 py-2">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-8 w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}