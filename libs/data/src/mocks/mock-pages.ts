/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/data – Mock Page Data                       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Mock data for testing and development purposes.
 *
 * Exports:
 *  - `mockPages` → Array of mock page objects
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import type { Page } from '../models';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Mock Data
 * ───────────────────────────────────────────────────────────── */
export const mockPages: Partial<Page>[] = [
  {
    slug: 'about',
    title_en: 'About Us',
    title_pt: 'Sobre Nós',
    content_en: `
      <h1>About Portuguese Forum</h1>
      <p>The Portuguese Forum is a community platform dedicated to connecting Portuguese speakers worldwide.</p>
      <p>Our mission is to preserve and celebrate Portuguese culture and language.</p>
    `,
    content_pt: `
      <h1>Sobre o Fórum Português</h1>
      <p>O Fórum Português é uma plataforma comunitária dedicada a conectar falantes de português em todo o mundo.</p>
      <p>Nossa missão é preservar e celebrar a cultura e língua portuguesa.</p>
    `,
    published: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    slug: 'contact',
    title_en: 'Contact Us',
    title_pt: 'Contacte-nos',
    content_en: `
      <h1>Get in Touch</h1>
      <p>Have questions or suggestions? We'd love to hear from you!</p>
      <p>Email: hello@portugueseforum.com</p>
    `,
    content_pt: `
      <h1>Entre em Contacto</h1>
      <p>Tem perguntas ou sugestões? Adoraríamos ouvir de si!</p>
      <p>Email: hello@portugueseforum.com</p>
    `,
    published: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
  {
    slug: 'privacy',
    title_en: 'Privacy Policy',
    title_pt: 'Política de Privacidade',
    content_en: `
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>
    `,
    content_pt: `
      <h1>Política de Privacidade</h1>
      <p>A sua privacidade é importante para nós. Esta política explica como recolhemos e usamos os seus dados.</p>
    `,
    published: false,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
];