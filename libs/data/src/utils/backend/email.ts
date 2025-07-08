/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @pfsa/utils – Password Reset Email Sender       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides a `sendPasswordResetEmail()` utility using nodemailer,
 * backed by environment-based configuration for authentication
 * and base URL resolution.
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import nodemailer from 'nodemailer';

/* ─────────────────────────────────────────────────────────────
 * 🌐 Environment Setup
 * ───────────────────────────────────────────────────────────── */
type EmailEnv = {
  EMAIL_USER?: string;
  EMAIL_PASS?: string;
  NEXTAUTH_URL?: string;
};

const env = process.env as EmailEnv;

// 🔒 Ensure critical variables are set
if (!env.EMAIL_USER || !env.EMAIL_PASS) {
  throw new Error(
    'Missing required environment variables: EMAIL_USER and/or EMAIL_PASS'
  );
}

/* ─────────────────────────────────────────────────────────────
 * ✉️ Mail Transporter Configuration
 * ───────────────────────────────────────────────────────────── */
export const transporter = nodemailer.createTransport({
  service: 'gmail', // 📌 Replace with your preferred email provider if needed
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});

/* ─────────────────────────────────────────────────────────────
 * 🔁 Email Sender Function
 * ───────────────────────────────────────────────────────────── */
/**
 * Sends a password reset email to the provided address.
 *
 * @param to    – The recipient’s email address
 * @param token – The reset token to be embedded in the reset link
 * @returns A result object indicating success or failure
 */
export async function sendPasswordResetEmail(
  to: string,
  token: string
): Promise<{ success: boolean; error?: string }> {
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
    console.error('❌ Failed to send password reset email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
