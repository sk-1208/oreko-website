import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('font-display font-medium text-2xl text-primary', className)}>
      Oreko
    </span>
  );
}
