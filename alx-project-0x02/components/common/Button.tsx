import React, { type FC } from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: FC<ButtonProps> = ({ children, size = 'medium', shape = 'rounded-md' }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${sizeClasses[size]} bg-green-600 text-white ${shape}`}
    >
      {children}
    </button>
  );
};

export default Button;
