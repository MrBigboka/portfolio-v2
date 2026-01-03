'use client';

import React from 'react';
import { IntegrationIconComponents, IntegrationColors } from '@/components/icons/IntegrationIcons';

interface AvatarStackProps {
  integrations: string[];
  maxDisplay?: number;
}

export function AvatarStack({ integrations, maxDisplay = 4 }: AvatarStackProps) {
  const displayIntegrations = integrations.slice(0, maxDisplay);
  const remainingCount = integrations.length - maxDisplay;
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="flex items-center -space-x-2">
      {displayIntegrations.map((integration, index) => {
        const IconComponent = IntegrationIconComponents[integration];
        const color = IntegrationColors[integration] || '#888888';
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={integration}
            className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-white flex items-center justify-center overflow-visible transition-transform hover:scale-110"
            style={{ 
              zIndex: isHovered ? 100 : displayIntegrations.length - index
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {IconComponent ? (
              <IconComponent size={24} color={color} />
            ) : (
              <span className="text-xs font-bold text-gray-800">
                {integration.substring(0, 2).toUpperCase()}
              </span>
            )}
            {/* Tooltip */}
            <div 
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap pointer-events-none z-50 transition-opacity"
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              {integration}
            </div>
          </div>
        );
      })}
      
      {remainingCount > 0 && (
        <div
          className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center"
          style={{ zIndex: 0 }}
        >
          <span className="text-sm font-semibold text-white">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
}
