import NextAuth, { SessionStrategy, AuthOptions, User as NextAuthUser, DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '@pfsa/data';
import { JWT } from 'next-auth/jwt';

// Extend NextAuth User interface to include role
interface ExtendedUser extends NextAuthUser {
  role?: 'user' | 'admin';
}

// Extend JWT interface to include id and role
interface ExtendedJWT extends JWT {
  id?: string;
  role?: 'user' | 'admin';
}

// Extend Session interface to include custom user properties
interface ExtendedSession extends DefaultSession {
  user?: DefaultSession['user'] & {
    id?: string;
    role?: 'user' | 'admin';
  };
}

// Define interface for Mongoose User document
interface UserDocument extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password?: string;
  name?: string;
  role: 'user' | 'admin';
  googleId?: string;
  createdAt: Date;
  resetToken?: string;
  resetTokenExpires?: Date;
}

// Validate environment variables
const requiredEnvVars = ['MONGODB_URI', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'NEXTAUTH_SECRET'];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

const clientPromise = mongoose.connect(process.env['MONGODB_URI']!, {
  dbName: 'pfsa',
}).then((mongoose) => mongoose.connection.getClient());

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials?.email }) as UserDocument | null;
        if (!user || !user.password || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid credentials');
        }

        return { id: user._id.toString(), email: user.email, name: user.name, role: user.role };
      },
    }),
    GoogleProvider({
      clientId: process.env['GOOGLE_CLIENT_ID']!,
      clientSecret: process.env['GOOGLE_CLIENT_SECRET']!,
    }),
  ],
  pages: {
    signIn: '/[locale]/auth/signin',
    newUser: '/[locale]/auth/register',
  },
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }: { token: ExtendedJWT; user?: ExtendedUser }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: ExtendedSession; token: ExtendedJWT }) {
      if (token.id && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);