'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Palette de couleurs du portfolio
const colors = {
  bleuNuit: '#0E1A2B',
  cremeClair: '#F8EBD7',
  rougeBrique: '#C3513B',
  beigeFonce: '#D2B28D',
  bleuArdoise: '#2C3E50',
  jauneDoux: '#F4C065'
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
          className={`uppercase tracking-widest text-sm font-medium mb-3 ${titleClassName.includes('text-white') ? `text-[${colors.jauneDoux}]` : `text-[${colors.rougeBrique}]`}`}
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
                className="relative z-10 bg-gradient-to-r from-[#F8EBD7] via-[#D2B28D] to-[#C3513B] text-transparent bg-clip-text animate-gradient italic" 
                style={{ 
                  fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                  fontSize: '1.15em',
                  fontWeight: 'normal',
                  letterSpacing: '0.02em'
                }}
                data-component-name="SectionHeader"
              >
                {accentWord}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#F8EBD7]/30 via-[#D2B28D]/30 to-[#C3513B]/30 blur-lg filter opacity-70 animate-pulse"></span>
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
          className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${titleClassName.includes('text-white') ? `text-[${colors.cremeClair}]/80` : `text-[${colors.bleuArdoise}]/80`} ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
