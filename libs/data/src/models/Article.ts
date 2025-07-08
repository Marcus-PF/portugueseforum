import { Schema, model, models, Document, Types } from 'mongoose';

// Define interface for Article document
export interface Article extends Document {
  _id: string;
  title: string;
  content: string;
  authorId: Types.ObjectId;
  slug: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
}

export const ArticleSchema = new Schema<Article>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ArticleModel = models['Article'] || model<Article>('Article', ArticleSchema, 'articles');