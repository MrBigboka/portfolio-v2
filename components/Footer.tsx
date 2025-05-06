'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-white/10 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedBackground />
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="text-[#F7E3C5] text-base font-medium">Site créé entièrement par Miguel Boka</span>
          <span className="text-xl" role="img" aria-label="geek emoji">🤓</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <div className="text-[#F7E3C5]/80 text-sm flex items-center gap-1.5">
            <span>Fait avec</span>
            <Heart size={14} className="text-[#D9A441] fill-[#D9A441]" />
            <span>en 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
