import type React from 'react';
import { cn } from '@/lib/utils';

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export default function IconLink({ href, icon, label, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-200 p-2 rounded-md hover:bg-accent/10",
        className
      )}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
