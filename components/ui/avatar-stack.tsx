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

  return (
    <div className="flex items-center -space-x-2">
      {displayIntegrations.map((integration, index) => {
        const IconComponent = IntegrationIconComponents[integration];
        const color = IntegrationColors[integration] || '#888888';

        return (
          <div
            key={integration}
            className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center overflow-hidden transition-transform hover:scale-110 hover:z-10"
            style={{ 
              zIndex: displayIntegrations.length - index
            }}
            title={integration}
          >
            {IconComponent ? (
              <IconComponent size={24} color={color} />
            ) : (
              <span className="text-xs font-bold text-gray-400">
                {integration.substring(0, 2).toUpperCase()}
              </span>
            )}
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
