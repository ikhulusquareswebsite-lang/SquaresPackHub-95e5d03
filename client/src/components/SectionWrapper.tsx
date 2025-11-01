import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  className = '',
  variant = 'light'
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 md:py-20 scroll-mt-20',
        variant === 'light' ? 'bg-white' : 'bg-[#E8E8E8]',
        className
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};