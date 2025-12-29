'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'purple' | 'white';
}

export function AnimatedButton({ 
  children, 
  href, 
  onClick, 
  className = '',
  variant = 'purple'
}: AnimatedButtonProps) {
  const Component = href ? 'a' : 'button';
  
  const baseStyles = "group inline-flex items-center gap-3 rounded-full font-medium px-6 py-3 transition-all duration-300 overflow-hidden";
  
  const variantStyles = variant === 'purple' 
    ? "bg-zinc-900 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white"
    : "bg-white hover:bg-black text-black hover:text-white";
  
  const iconBgStyles = variant === 'purple'
    ? "bg-white group-hover:bg-black"
    : "bg-purple-500 group-hover:bg-white";
    
  const iconColorStyles = variant === 'purple'
    ? "text-black group-hover:text-white"
    : "text-white group-hover:text-black";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="relative z-10">{children}</span>
      <span className={`relative w-6 h-6 rounded-full ${iconBgStyles} flex items-center justify-center overflow-hidden transition-all duration-300`}>
        <span className="relative w-full h-full flex items-center justify-center">
          <ArrowUpRight 
            className={`w-3.5 h-3.5 ${iconColorStyles} transition-all duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]`}
          />
          <ArrowUpRight 
            className={`w-3.5 h-3.5 ${iconColorStyles} absolute -translate-x-[150%] translate-y-[150%] transition-all duration-300 delay-75 group-hover:translate-x-0 group-hover:translate-y-0`}
          />
        </span>
      </span>
    </Component>
  );
}
