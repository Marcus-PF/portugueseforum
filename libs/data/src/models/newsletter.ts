import { Schema, model, models } from 'mongoose';
import type { InferSchemaType } from 'mongoose';

const NewsletterSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  issueNumber: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String, // URL to cover image
    required: false,
  },
  pdfUrl: {
    type: String, // URL to PDF file
    required: false,
  },
  articles: [{
    type: Schema.Types.ObjectId,
    ref: 'Article',
  }],
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
    required: false,
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
  fileSize: {
    type: Number, // in bytes
    default: 0,
  },
  metadata: {
    totalPages: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      enum: ['en', 'pt'],
      default: 'en',
    },
    tags: [String],
  },
}, {
  timestamps: true,
});

// Create compound index for unique issue per year
NewsletterSchema.index({ issueNumber: 1, year: 1 }, { unique: true });

// Create index for published newsletters
NewsletterSchema.index({ isPublished: 1, publishedAt: -1 });

export type Newsletter = InferSchemaType<typeof NewsletterSchema>;
export const NewsletterModel = models['Newsletter'] || model('Newsletter', NewsletterSchema);