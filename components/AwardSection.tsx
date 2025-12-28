'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Trophy, ExternalLink, Award, Star } from 'lucide-react';
import Image from 'next/image';

export default function AwardSection() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);

  return (
    <section className="relative z-10 py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle purple glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Award className="w-5 h-5 text-purple-400" />
            <span className="uppercase tracking-[0.3em] text-xs font-medium text-gray-500">
              Distinction Académique
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight"
          >
            Ma{' '}
            <span className="text-purple-400 italic">Reconnaissance</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Floating diploma image */}
          <motion.div 
            className="relative group"
            animate={controls}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 bg-purple-500/20 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 shadow-lg shadow-purple-500/10 group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:border-purple-500/40">
              <Image 
                src="/diploma.png" 
                alt="Bourse CPMT" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
          
          {/* Right - Description */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Trophy size={24} className="text-purple-400" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-light">
                Bourse <span className="text-purple-400 font-medium">CPMT</span>
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              J&apos;ai eu l&apos;honneur d&apos;être titulaire d&apos;une bourse de la Commission des partenaires du marché du travail (CPMT), 
              reconnaissant l&apos;excellence académique et le potentiel professionnel dans le domaine du développement web.
            </p>
            
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-purple-400" />
                <p className="text-gray-400">Reconnaissance d&apos;excellence académique</p>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-purple-400" />
                <p className="text-gray-400">Soutien au développement professionnel</p>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-purple-400" />
                <p className="text-gray-400">Promotion des talents dans le numérique</p>
              </div>
            </div>
            
            <a 
              href="https://www.cpmt.gouv.qc.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full border border-purple-500/30 text-white hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <ExternalLink size={16} className="text-purple-400" />
              En savoir plus sur la CPMT
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
