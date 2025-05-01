'use client';

import React from 'react';

interface ProjectPlaceholderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  accentColor?: string;
  index: number;
}

export default function ProjectPlaceholder({ 
  title, 
  subtitle = 'Projet', 
  bgColor = '#0F1729', 
  accentColor = '#d42d1d',
  index
}: ProjectPlaceholderProps) {
  // Variation des couleurs basée sur l'index
  const getGradient = () => {
    if (index % 3 === 0) {
      return `linear-gradient(135deg, ${bgColor} 0%, #3a1e2e 100%)`;
    } else if (index % 3 === 1) {
      return `linear-gradient(135deg, ${bgColor} 0%, #1e2a3a 100%)`;
    } else {
      return `linear-gradient(135deg, ${bgColor} 0%, #2a1e3a 100%)`;
    }
  };

  return (
    <div 
      className="w-full h-full aspect-[16/9] rounded-lg overflow-hidden flex items-center justify-center relative"
      style={{ background: getGradient() }}
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Cercles décoratifs */}
        <div 
          className="absolute rounded-full opacity-20"
          style={{ 
            width: '40%', 
            height: '40%', 
            border: `2px solid ${accentColor}`,
            top: '10%',
            left: '5%',
            animation: 'pulse 8s infinite ease-in-out'
          }}
        />
        <div 
          className="absolute rounded-full opacity-10"
          style={{ 
            width: '60%', 
            height: '60%', 
            border: `2px solid ${accentColor}`,
            bottom: '-20%',
            right: '-10%',
            animation: 'pulse 12s infinite ease-in-out'
          }}
        />
        
        {/* Lignes décoratives */}
        <div 
          className="absolute opacity-10"
          style={{ 
            width: '100%', 
            height: '1px', 
            background: 'white',
            top: '30%',
            transform: 'rotate(-15deg)'
          }}
        />
        <div 
          className="absolute opacity-10"
          style={{ 
            width: '100%', 
            height: '1px', 
            background: 'white',
            bottom: '40%',
            transform: 'rotate(10deg)'
          }}
        />
      </div>
      
      {/* Contenu */}
      <div className="z-10 text-center p-6">
        <p className="text-xs uppercase tracking-wider mb-2 text-white/70">{subtitle}</p>
        <h3 
          className="text-2xl md:text-3xl font-bold"
          style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h3>
        
        {/* Logo ou icône */}
        <div 
          className="mx-auto mt-4 rounded-full w-12 h-12 flex items-center justify-center"
          style={{ background: accentColor }}
        >
          <span className="text-white font-bold">{title.charAt(0)}</span>
        </div>
      </div>
      
      {/* Overlay pour l'effet de profondeur */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          background: `radial-gradient(circle at center, transparent 0%, ${bgColor} 100%)`,
        }}
      />
    </div>
  );
}
