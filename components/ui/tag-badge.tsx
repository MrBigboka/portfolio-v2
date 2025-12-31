'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Tag as TagIcon } from 'lucide-react';

interface TagBadgeProps {
  tag: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TagBadge({ tag, icon, className }: TagBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold',
        className
      )}
    >
      {icon || <TagIcon className="w-3 h-3" />}
      <span>{tag}</span>
    </div>
  );
}
