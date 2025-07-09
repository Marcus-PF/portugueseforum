/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Newsletter Service                   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Service layer for newsletter subscription operations.
 *
 * Exports:
 *  - `newsletterService` → Service object with CRUD operations
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { NewsletterModel, type Newsletter } from '../models/newsletter';
import { connectToDatabase } from '../utils';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Service Implementation
 * ───────────────────────────────────────────────────────────── */
export class NewsletterService {
  // Create a new newsletter
  async create(newsletterData: Omit<Newsletter, '_id' | 'createdAt' | 'updatedAt'>): Promise<Newsletter> {
    await connectToDatabase();
    
    const newsletter = new NewsletterModel(newsletterData);
    return await newsletter.save();
  }

  // Get all newsletters with pagination
  async getAll(options: {
    page?: number;
    limit?: number;
    published?: boolean;
  } = {}) {
    await connectToDatabase();
    
    const { page = 1, limit = 10, published } = options;
    const skip = (page - 1) * limit;
    
    const filter = published !== undefined ? { isPublished: published } : {};
    
    const newsletters = await NewsletterModel
      .find(filter)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await NewsletterModel.countDocuments(filter);
    
    return {
      newsletters,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // Get newsletter by ID
  async getById(id: string): Promise<Newsletter | null> {
    await connectToDatabase();
    return await NewsletterModel.findById(id).lean<Newsletter>();
  }

  // Get newsletter by issue and year
  async getByIssue(issueNumber: number, year: number): Promise<Newsletter | null> {
    await connectToDatabase();
    return await NewsletterModel.findOne({ issueNumber, year }).lean<Newsletter>();
  }

  // Update newsletter
  async update(id: string, updates: Partial<Newsletter>): Promise<Newsletter | null> {
    await connectToDatabase();
    return await NewsletterModel.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).lean<Newsletter>();
  }

  // Delete newsletter
  async delete(id: string): Promise<boolean> {
    await connectToDatabase();
    const result = await NewsletterModel.findByIdAndDelete(id);
    return result !== null;
  }

  // Increment download count
  async incrementDownloadCount(id: string): Promise<void> {
    await connectToDatabase();
    await NewsletterModel.findByIdAndUpdate(id, { $inc: { downloadCount: 1 } });
  }

  // Subscription management
  async subscribe(email: string): Promise<Newsletter> {
    await connectToDatabase();
    const existingSubscription = await NewsletterModel.findOne({ email });
    
    if (existingSubscription) {
      existingSubscription.subscribed = true;
      return existingSubscription.save();
    }
    
    return NewsletterModel.create({ email, subscribed: true });
  }

  async unsubscribe(email: string): Promise<Newsletter | null> {
    await connectToDatabase();
    return NewsletterModel.findOneAndUpdate(
      { email },
      { subscribed: false },
      { new: true }
    );
  }

  async getSubscribers(): Promise<Newsletter[]> {
    await connectToDatabase();
    return NewsletterModel.find({ subscribed: true });
  }
}

/* ─────────────────────────────────────────────────────────────
 * 🧠 Service Export
 * ───────────────────────────────────────────────────────────── */
export const newsletterService = new NewsletterService();