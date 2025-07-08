import nodemailer from "nodemailer";

// Define environment variable types for better type safety
// If you want to add type safety, augment the 'node:process' or 'node' module, or use a local type as below:

type EmailEnv = {
  EMAIL_USER?: string;
  EMAIL_PASS?: string;
  NEXTAUTH_URL?: string;
};

const env = process.env as EmailEnv;

// Validate environment variables
if (!env.EMAIL_USER || !env.EMAIL_PASS) {
  throw new Error('Missing required environment variables: EMAIL_USER and/or EMAIL_PASS');
}

export const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email service (e.g., SendGrid, AWS SES)
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

export async function sendPasswordResetEmail(to: string, token: string) {
  try {
    const baseUrl = env.NEXTAUTH_URL || 'http://localhost:3000';
    const resetLink = `${baseUrl}/[locale]/auth/reset-password?token=${token}`;
    
    await transporter.sendMail({
      from: env.EMAIL_USER,
      to,
      subject: 'Password Reset Request',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}