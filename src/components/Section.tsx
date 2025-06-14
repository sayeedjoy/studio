import type React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function Section({ title, children, className, titleClassName, contentClassName }: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12", className)}>
      <div className="container mx-auto px-4">
        <h2 className={cn("text-2xl md:text-3xl font-headline font-semibold text-primary mb-6 md:mb-8 text-center", titleClassName)}>
          {title}
        </h2>
        <div className={cn(contentClassName)}>
         {children}
        </div>
      </div>
    </section>
  );
}
