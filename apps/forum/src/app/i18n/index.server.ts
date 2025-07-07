import { createTranslator } from 'next-intl';

export async function getTranslator(locale: string) {
  const messages = (await import(`./locales/${locale}.json`)).default;
  return createTranslator({ locale, messages });
}