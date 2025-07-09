/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – User Management Service              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { UserModel, type User } from '../models/user';
import { connectToDatabase } from '../utils/backend/db';
import type {
  CreateUserDto,
  UpdateUserDto,
  UserResponse,
  AdminUserResponse,
  GetUsersQuery,
  GetUsersResponse,
  BanUserDto,
  UserStatsResponse,
} from '../dto/user-dto';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Service Implementation
 * ───────────────────────────────────────────────────────────── */
export class UserService {
  private toUserResponse(user: User): UserResponse {
    return {
      _id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
      isVerified: user.isVerified,
      isBanned: user.isBanned,
      lastLoginAt: user.lastLoginAt,
      profileImage: user.profileImage,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  private toAdminUserResponse(user: User): AdminUserResponse {
    return {
      ...this.toUserResponse(user),
      bannedAt: user.bannedAt,
      bannedReason: user.bannedReason,
      bannedBy: user.bannedBy?.toString(),
      resetToken: user.resetToken,
      resetTokenExpiry: user.resetTokenExpiry,
      verificationToken: user.verificationToken,
      googleId: user.googleId,
    };
  }

  // Create user
  async createUser(userData: CreateUserDto): Promise<UserResponse> {
    await connectToDatabase();
    
    const user = new UserModel(userData);
    const savedUser = await user.save();
    
    return this.toUserResponse(savedUser);
  }

  // Get user by ID
  async getUserById(id: string): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findById(id);
    return user ? this.toUserResponse(user) : null;
  }

  // Get user by email
  async getUserByEmail(email: string): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findOne({ email });
    return user ? this.toUserResponse(user) : null;
  }

  // Get users with pagination and filters
  async getUsers(query: GetUsersQuery = {}): Promise<GetUsersResponse> {
    await connectToDatabase();
    
    const {
      page = 1,
      limit = 10,
      role,
      isVerified,
      isBanned,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = query;

    const skip = (page - 1) * limit;
    
    // Build filter
    const filter: any = {};
    if (role) filter.role = role;
    if (isVerified !== undefined) filter.isVerified = isVerified;
    if (isBanned !== undefined) filter.isBanned = isBanned;
    if (search) {
      filter.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
      ];
    }

    // Build sort
    const sort: any = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    const users = await UserModel
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await UserModel.countDocuments(filter);
    
    return {
      users: users.map(user => this.toUserResponse(user)),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // Update user
  async updateUser(id: string, updates: UpdateUserDto): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );
    
    return user ? this.toUserResponse(user) : null;
  }

  // Ban user
  async banUser(id: string, banData: BanUserDto): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        isBanned: true,
        bannedAt: new Date(),
        bannedReason: banData.reason,
        bannedBy: banData.bannedBy,
      },
      { new: true, runValidators: true }
    );
    
    return user ? this.toUserResponse(user) : null;
  }

  // Unban user
  async unbanUser(id: string): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findByIdAndUpdate(
      id,
      {
        isBanned: false,
        bannedAt: undefined,
        bannedReason: undefined,
        bannedBy: undefined,
      },
      { new: true, runValidators: true }
    );
    
    return user ? this.toUserResponse(user) : null;
  }

  // Delete user
  async deleteUser(id: string): Promise<boolean> {
    await connectToDatabase();
    
    const result = await UserModel.findByIdAndDelete(id);
    return result !== null;
  }

  // Change user role
  async changeRole(id: string, role: 'admin' | 'user' | 'moderator'): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true }
    );
    
    return user ? this.toUserResponse(user) : null;
  }

  // Verify user
  async verifyUser(id: string): Promise<UserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findByIdAndUpdate(
      id,
      { isVerified: true, verificationToken: undefined },
      { new: true, runValidators: true }
    );
    
    return user ? this.toUserResponse(user) : null;
  }

  // Update last login
  async updateLastLogin(id: string): Promise<void> {
    await connectToDatabase();
    
    await UserModel.findByIdAndUpdate(id, { lastLoginAt: new Date() });
  }

  // Get user statistics
  async getUserStats(): Promise<UserStatsResponse> {
    await connectToDatabase();
    
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [
      totalUsers,
      verifiedUsers,
      bannedUsers,
      adminUsers,
      recentUsers,
    ] = await Promise.all([
      UserModel.countDocuments(),
      UserModel.countDocuments({ isVerified: true }),
      UserModel.countDocuments({ isBanned: true }),
      UserModel.countDocuments({ role: 'admin' }),
      UserModel.countDocuments({ createdAt: { $gte: thirtyDaysAgo } }),
    ]);

    return {
      totalUsers,
      verifiedUsers,
      bannedUsers,
      adminUsers,
      recentUsers,
    };
  }

  // Admin-only: Get user with sensitive data
  async getAdminUserById(id: string): Promise<AdminUserResponse | null> {
    await connectToDatabase();
    
    const user = await UserModel.findById(id).populate('bannedBy', 'name email');
    return user ? this.toAdminUserResponse(user) : null;
  }
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Service Export
 * ───────────────────────────────────────────────────────────── */
export const userService = new UserService();