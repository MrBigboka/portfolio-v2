'use client';

import React from 'react';
import { IntegrationIconComponents, IntegrationColors } from '@/components/icons/IntegrationIcons';

interface IntegrationTooltipProps {
  integrations: string[];
}

export function IntegrationTooltip({ integrations }: IntegrationTooltipProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {integrations.map((integration) => {
        const IconComponent = IntegrationIconComponents[integration];
        const color = IntegrationColors[integration] || '#888888';
        
        return (
          <div
            key={integration}
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
            title={integration}
          >
            {IconComponent ? (
              <IconComponent size={20} color={color} />
            ) : (
              <span className="text-xs text-gray-400 font-medium">
                {integration.substring(0, 2).toUpperCase()}
              </span>
            )}
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
              {integration}
            </div>
          </div>
        );
      })}
    </div>
  );
}
