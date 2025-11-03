import React from 'react';
import logo from '@/assets/images/logo.jpeg';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img 
      src={logo} 
      alt="iKHULU SQUARES Logo" 
      className={`h-12 w-auto ${className}`}
    />
  );
};
