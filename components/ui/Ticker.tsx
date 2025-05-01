'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TickerProps {
  text: string;
  duration?: number;
}

const Ticker: React.FC<TickerProps> = ({ text, duration = 20 }) => {
  // Couleurs extraites du logo
  const primaryColor = '#f0e6d2'; // Beige/crème du logo
  const accentColor = '#b3392c';  // Rouge-brun du logo
  
  return (
    <div 
      className="relative w-full overflow-hidden py-2 text-sm whitespace-nowrap"
      style={{ backgroundColor: accentColor, color: primaryColor }}
    >
      <motion.div
        className="inline-block font-medium"
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        transition={{
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
        }}
      >
        {/* Dupliquer le texte pour un défilement continu */}
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span> 
        <span className="mx-4">{text}</span>
      </motion.div>
    </div>
  );
};

export default Ticker;
