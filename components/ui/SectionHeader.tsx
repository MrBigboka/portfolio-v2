'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentWord?: string; // Mot à mettre en évidence avec l'effet lumineux
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  accentWord,
  align = 'center' 
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
          className="uppercase tracking-widest text-sm font-medium text-[#B74134] mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        {accentWord ? (
          <>
            {beforeAccent}
            <span className="relative inline-block">
              <span 
                className="relative z-10 bg-gradient-to-r from-[#F7E3C5] via-[#D9A441] to-[#B74134] text-transparent bg-clip-text animate-gradient italic" 
                style={{ 
                  fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                  fontSize: '1.15em',
                  fontWeight: 'normal',
                  letterSpacing: '0.02em'
                }}
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
    </div>
  );
}
