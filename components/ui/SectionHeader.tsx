'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Palette de couleurs harmonisée du portfolio
const colors = {
  bleuNuit: '#101B2E',      // Fond et éléments principaux
  bleuFonce: '#0A1422',     // Arrière-plans secondaires
  cremeClair: '#F7E3C5',    // Texte principal
  orDoux: '#D9A441',        // Accents, icônes, éléments interactifs
  rougeBrique: '#B74134',   // Accent secondaire pour les gradients
  beigeFonce: '#D2B28D'     // Transitions dans les gradients
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  accentWord?: string; // Mot à mettre en évidence avec l'effet lumineux
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  description,
  accentWord,
  align = 'center',
  titleClassName = '',
  descriptionClassName = ''
}: SectionHeaderProps) {
  // Séparer le titre pour mettre en évidence le mot accentué
  let beforeAccent = '';
  let afterAccent = '';
  
  if (accentWord && title.includes(accentWord)) {
    const parts = title.split(accentWord);
    beforeAccent = parts[0];
    afterAccent = parts.slice(1).join(accentWord);
  }

  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase tracking-widest text-sm font-medium mb-3 text-white/80"
          data-component-name="MotionComponent"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${titleClassName}`}
      >
        {accentWord ? (
          <>
            {beforeAccent}
            <span className="relative inline-block">
              <span 
                className="relative z-10 bg-gradient-to-r from-[#F7E3C5] via-[#D9A441] to-[#B74134] text-transparent bg-clip-text animate-gradient italic brush-script" 
                style={{ 
                  fontSize: '1.15em',
                  letterSpacing: '0.02em'
                }}
                data-component-name="SectionHeader"
              >
                {accentWord}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#F7E3C5]/30 via-[#D9A441]/30 to-[#B74134]/30 blur-lg filter opacity-70 animate-pulse"></span>
            </span>
            {afterAccent}
          </>
        ) : (
          title
        )}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${titleClassName.includes('text-white') ? `text-[${colors.cremeClair}]/80` : `text-[${colors.bleuNuit}]/80`} ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
