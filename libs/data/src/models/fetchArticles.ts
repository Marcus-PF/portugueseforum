import mongoose from 'mongoose';
import { ArticleModel } from './article'; // Make sure ArticleModel is the actual Mongoose model

export async function fetchArticles() {
  // Ensure mongoose is connected (adjust as needed for your setup)
  if (mongoose.connection.readyState === 0) {
    const mongoUri = process.env['MONGODB_URI'];
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    await mongoose.connect(mongoUri, { dbName: 'pfsa' });
  }
  // Fetch all articles (customize query as needed)
  const articles = await ArticleModel.find().lean();
  return articles;
}