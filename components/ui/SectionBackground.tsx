'use client';

import React, { ReactNode } from 'react';

interface SectionBackgroundProps {
  children: ReactNode;
  variant?: 'default' | 'light' | 'dark' | 'accent' | 'transparent';
  className?: string;
  withParticles?: boolean;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  withParticles = false
}) => {
  // Base styles that apply to all variants
  const baseStyles = "relative z-10 transition-colors duration-300";
  
  // Variant-specific styles
  const variantStyles = {
    default: "bg-white dark:bg-[#101B2E] text-[#101B2E] dark:text-[#F7E3C5]",
    light: "bg-gray-50/80 dark:bg-[#0F1729]/70 backdrop-blur-sm border-t border-b border-gray-200/50 dark:border-white/10 shadow-inner",
    dark: "bg-[#0a192f] text-white",
    accent: "bg-[#B74134]/10 dark:bg-[#B74134]/20 backdrop-blur-sm",
    transparent: "bg-transparent"
  };
  
  return (
    <section className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {withParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
          <div className="hero-particles-background" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(10, 25, 47, 0.02) 0%, rgba(10, 25, 47, 0.01) 100%)',
            overflow: 'hidden'
          }}>
            <div className="hero-static-particles"></div>
          </div>
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionBackground;
