/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @pfsa/ui – Enhanced Button Component                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * A customizable button with CSS-based hover effects, Azulejo-inspired gradients,
 * and optional Protea pattern accents for Portuguese Forum SA.
 *
 * Exports:
 *  - `Button` → Radix UI button with Tailwind variants and CSS effects
 *  - `buttonVariants` → CVA config for button styling
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@pfsa/utils/shared';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Button Variants
 * ───────────────────────────────────────────────────────────── */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[--radius] text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm hover:bg-[color-mix(in_oklch, var(--primary) 90%)] hover:shadow-[0_0_10px_var(--highlight)] gradient-azulejo hover:scale-105 active:scale-95',
        destructive:
          'bg-[var(--destructive)] text-[var(--primary-foreground)] shadow-sm hover:bg-[color-mix(in_oklch, var(--destructive) 90%)] hover:shadow-[0_0_10px_var(--highlight)] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 active:scale-95',
        outline:
          'border border-[var(--border)] bg-[var(--background)] shadow-sm hover:bg-[var(--muted)] hover:pattern-protea dark:bg-[color-mix(in_oklch, var(--input) 20%)] dark:border-[var(--input)] dark:hover:bg-[color-mix(in_oklch, var(--input) 40%)] hover:scale-105 active:scale-95',
        secondary:
          'bg-[var(--secondary)] text-[var(--secondary-foreground)] shadow-sm hover:bg-[color-mix(in_oklch, var(--secondary) 90%)] hover:shadow-[0_0_10px_var(--highlight)] hover:scale-105 active:scale-95',
        ghost:
          'hover:bg-[var(--muted)] hover:text-[var(--accent-foreground)] hover:pattern-protea dark:hover:bg-[color-mix(in_oklch, var(--muted) 50%)] hover:scale-105 active:scale-95',
        link:
          'text-[var(--primary)] underline-offset-4 hover:underline hover:text-[color-mix(in_oklch, var(--primary) 80%)]',
        protea:
          'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm pattern-protea hover:shadow-[0_0_15px_var(--highlight)] gradient-azulejo hover:scale-105 active:scale-95 animate-protea-bloom',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-[calc(var(--radius)-2px)] gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-[var(--radius)] px-6 has-[>svg]:px-4',
        icon: 'size-9 rounded-[var(--radius)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 Button Component
 * ───────────────────────────────────────────────────────────── */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

/* ─────────────────────────────────────────────────────────────
 * 🧠 Exports
 * ───────────────────────────────────────────────────────────── */
export { Button, buttonVariants };