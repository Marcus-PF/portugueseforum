'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@pfsa/ui';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter } from 'next/navigation';
import { api } from '@pfsa/data';
import { useEffect } from 'react';

const formSchema = z.object({
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function ResetPasswordPage() {
  const t = useTranslations('auth');
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { newPassword: '' },
  });

  useEffect(() => {
    if (!token) {
      form.setError('root', { message: t('invalidToken') });
    }
  }, [token, form, t]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!token) return;

    try {
      await api.post('/reset-password/confirm', { token, newPassword: data.newPassword });
      form.reset();
      alert(t('passwordResetSuccess')); // Replace with toast (e.g., sonner)
      router.push('/[locale]/auth/signin');
    } catch (error) {
      form.setError('root', { message: t('passwordResetFailed') });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{t('resetPassword')}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('newPassword')}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={!token}>
            {t('resetPassword')}
          </Button>
        </form>
      </Form>
    </div>
  );
}