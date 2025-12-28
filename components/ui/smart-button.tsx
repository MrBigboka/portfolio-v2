'use client';

import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NoiseBackground } from './noise-background';

interface SmartButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'cta' | 'action' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'external' | 'none';
  children: React.ReactNode;
  href: string;
}

export function SmartButton({
  variant = 'cta',
  size = 'md',
  icon = 'none',
  children,
  href,
  className,
  ...props
}: SmartButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  };

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'external' ? ExternalLink : null;

  // CTA avec NoiseBackground (pour Calendly, actions principales)
  if (variant === 'cta') {
    return (
      <NoiseBackground
        containerClassName="w-fit p-2 rounded-full"
        gradientColors={[
          'rgb(168, 85, 247)',
          'rgb(139, 92, 246)',
          'rgb(124, 58, 237)',
        ]}
        noiseIntensity={0.2}
        speed={0.1}
      >
        <a
          href={href}
          className={cn(
            'group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neutral-900 via-neutral-900 to-black text-white font-medium transition-all duration-100 active:scale-98 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.3)] hover:shadow-lg',
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
          {IconComponent && <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </a>
      </NoiseBackground>
    );
  }

  // Action button (pour "Voir le projet", etc.)
  if (variant === 'action') {
    return (
      <NoiseBackground
        containerClassName="w-full p-2 rounded-xl"
        gradientColors={[
          'rgb(168, 85, 247)',
          'rgb(139, 92, 246)',
          'rgb(124, 58, 237)',
        ]}
        noiseIntensity={0.2}
        speed={0.1}
      >
        <a
          href={href}
          className={cn(
            'group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-black text-white font-medium transition-all duration-100 active:scale-98 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.3)] hover:shadow-lg',
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
          {IconComponent && <IconComponent className="w-4 h-4" />}
        </a>
      </NoiseBackground>
    );
  }

  // Outline button (secondaire)
  if (variant === 'outline') {
    return (
      <a
        href={href}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-white/5 hover:text-white hover:border-gray-600 transition-all',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
        {IconComponent && <IconComponent className="w-4 h-4" />}
      </a>
    );
  }

  // Ghost button (minimal)
  if (variant === 'ghost') {
    return (
      <a
        href={href}
        className={cn(
          'inline-flex items-center gap-2 rounded-lg text-gray-400 font-medium hover:text-white hover:bg-white/5 transition-all',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
        {IconComponent && <IconComponent className="w-4 h-4" />}
      </a>
    );
  }

  return null;
}
