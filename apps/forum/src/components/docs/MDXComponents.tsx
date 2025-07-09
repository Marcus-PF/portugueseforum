/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @pfsa/forum – MDX Component Overrides & Atoms     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Custom MDX components that override default HTML elements
 * with styled variants using our UI library and design system.
 *
 * Exports:
 *  - `MDXComponents` → Object mapping HTML elements to styled components
 */

/* ─────────────────────────────────────────────────────────────
 * 📦 Dependencies
 * ───────────────────────────────────────────────────────────── */
import { ReactNode } from 'react';
import { 
  Button, 
  Alert, 
  AlertDescription, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@pfsa/ui';
import { cn } from '@pfsa/utils/shared';

/* ─────────────────────────────────────────────────────────────
 * 🧾 Component Type Definitions
 * ───────────────────────────────────────────────────────────── */
interface MDXComponentProps {
  className?: string;
  children?: ReactNode;
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type ListProps = React.HTMLAttributes<HTMLUListElement | HTMLOListElement>;
type TableProps = React.HTMLAttributes<HTMLTableElement>;
type CodeProps = React.HTMLAttributes<HTMLElement>;
type PreProps = React.HTMLAttributes<HTMLPreElement>;

/* ─────────────────────────────────────────────────────────────
 * 🧾 Enhanced HTML Element Components
 * ───────────────────────────────────────────────────────────── */
const StyledH1 = ({ className, ...props }: HeadingProps) => (
  <h1
    className={cn(
      'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
      'border-b border-border pb-4 mb-8',
      className
    )}
    {...props}
  />
);

const StyledH2 = ({ className, ...props }: HeadingProps) => (
  <h2
    className={cn(
      'scroll-m-20 text-3xl font-semibold tracking-tight',
      'border-b border-border pb-2 mb-6 mt-10 first:mt-0',
      className
    )}
    {...props}
  />
);

const StyledH3 = ({ className, ...props }: HeadingProps) => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight',
      'mb-4 mt-8 first:mt-0',
      className
    )}
    {...props}
  />
);

const StyledH4 = ({ className, ...props }: HeadingProps) => (
  <h4
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-tight',
      'mb-4 mt-6 first:mt-0',
      className
    )}
    {...props}
  />
);

const StyledParagraph = ({ className, ...props }: ParagraphProps) => (
  <p
    className={cn(
      'leading-7 text-muted-foreground',
      '[&:not(:first-child)]:mt-6',
      className
    )}
    {...props}
  />
);

const StyledUnorderedList = ({ className, ...props }: ListProps) => (
  <ul
    className={cn(
      'my-6 ml-6 list-disc',
      '[&>li]:mt-2',
      className
    )}
    {...props}
  />
);

const StyledOrderedList = ({ className, ...props }: ListProps) => (
  <ol
    className={cn(
      'my-6 ml-6 list-decimal',
      '[&>li]:mt-2',
      className
    )}
    {...props}
  />
);

const StyledListItem = ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
  <li
    className={cn('mt-2', className)}
    {...props}
  />
);

const StyledBlockquote = ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className={cn(
      'mt-6 border-l-2 border-primary pl-6 italic',
      'text-muted-foreground',
      className
    )}
    {...props}
  />
);

const StyledCode = ({ className, ...props }: CodeProps) => (
  <code
    className={cn(
      'relative rounded bg-muted px-[0.3rem] py-[0.2rem]',
      'font-mono text-sm font-semibold',
      className
    )}
    {...props}
  />
);

const StyledPre = ({ className, ...props }: PreProps) => (
  <pre
    className={cn(
      'mb-4 mt-6 overflow-x-auto rounded-lg',
      'border bg-zinc-950 py-4 px-6',
      'dark:bg-zinc-900',
      '[&>code]:bg-transparent [&>code]:p-0',
      className
    )}
    {...props}
  />
);

const StyledTable = ({ className, ...props }: TableProps) => (
  <div className="my-6 w-full overflow-y-auto">
    <table
      className={cn(
        'w-full border-collapse border-spacing-0',
        'border border-border rounded-lg',
        className
      )}
      {...props}
    />
  </div>
);

const StyledTableHead = ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      'border-b border-border px-4 py-2',
      'text-left font-bold',
      'bg-muted/50',
      '[&[align=center]]:text-center [&[align=right]]:text-right',
      className
    )}
    {...props}
  />
);

const StyledTableCell = ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={cn(
      'border-b border-border px-4 py-2',
      '[&[align=center]]:text-center [&[align=right]]:text-right',
      className
    )}
    {...props}
  />
);

/* ─────────────────────────────────────────────────────────────
 * 🧠 MDX Components Export
 * ───────────────────────────────────────────────────────────── */
export const MDXComponents = {
  // Custom components from our UI library
  Button,
  Alert,
  AlertDescription,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  
  // Enhanced HTML elements
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  p: StyledParagraph,
  ul: StyledUnorderedList,
  ol: StyledOrderedList,
  li: StyledListItem,
  blockquote: StyledBlockquote,
  code: StyledCode,
  pre: StyledPre,
  table: StyledTable,
  th: StyledTableHead,
  td: StyledTableCell,
};