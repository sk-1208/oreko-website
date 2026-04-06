import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        success:
          'border-transparent bg-success/15 text-success dark:bg-success/20 dark:text-success',
        warning:
          'border-transparent bg-warning/15 text-warning dark:bg-warning/20 dark:text-warning',
        info:
          'border-transparent bg-primary/15 text-primary dark:bg-primary/20 dark:text-primary',
        // Quote status variants (outline style)
        draft:
          'border-border bg-muted text-muted-foreground',
        sent:
          'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/15',
        accepted:
          'border-success/30 bg-success/10 text-success dark:border-success/40 dark:bg-success/15',
        expired:
          'border-destructive/30 bg-destructive/10 text-destructive dark:border-destructive/40 dark:bg-destructive/15',
        // Invoice status variants
        pending:
          'border-warning/30 bg-warning/10 text-warning dark:border-warning/40 dark:bg-warning/15',
        paid:
          'border-transparent bg-success text-success-foreground shadow hover:bg-success/90',
        overdue:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
        partial:
          'border-primary/30 bg-primary/10 text-primary dark:border-primary/40 dark:bg-primary/15',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
