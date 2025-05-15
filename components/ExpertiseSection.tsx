'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import TechBadge from './TechBadge';


const ExpertiseSection: React.FC = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1440]); // Rotation 4x plus rapide

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 backdrop-blur-sm transition-colors duration-300" style={{ backgroundColor: '#101B2E' }}>

      {/* Solid background color */}
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between h-full">
        {/* Top section with rotating wheel and header */}
        <div className="flex-1 flex flex-col items-center justify-center mb-16">
          {/* Rotating wheel element */}
          <div className="flex justify-center mb-8">
            <motion.div 
              ref={wheelRef} 
              className="relative w-36 h-36 md:w-44 md:h-44"
              style={{ rotate }}
            >
              <div className="relative p-3">
                {/* Cercles lumineux animés */}
                <div className="absolute inset-0 rounded-full blur-2xl bg-[#D9A441]/20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full blur-lg bg-[#D9A441]/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Bordure brillante */}
                <div className="absolute inset-0 rounded-full border-2 border-[#D9A441]/50 animate-pulse" style={{ animationDuration: '3s' }}></div>
                
                {/* Image avec couleur turquoise */}
                <Image
                  src="/engrenage.png"
                  alt="Engrenage rotatif"
                  width={160}
                  height={160}
                  className="relative z-10"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 10px rgba(217, 164, 65, 0.7))',
                    WebkitFilter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 10px rgba(217, 164, 65, 0.7))',
                  }}
                />
                
                {/* Effet de brillance supplémentaire */}
                <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-br from-transparent via-[#D9A441]/5 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-sm font-medium text-[#D9A441] mb-3"
            >
              JE CHERCHE CONSTAMMENT À M&apos;AMÉLIORER
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="text-white">Mon </span>
              <span className="relative inline-block">
                <span 
                  className="relative z-10 bg-gradient-to-r from-[#F7E3C5] via-[#D9A441] to-[#B74134] text-transparent bg-clip-text animate-gradient italic brush-script" 
                  style={{ 
                    fontSize: '1.15em',
                    letterSpacing: '0.02em'
                  }}
                >
                  Tech Stack
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F7E3C5]/30 via-[#D9A441]/30 to-[#B74134]/30 blur-lg filter opacity-70 animate-pulse"></span>
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Tech Stack Grid - Centered design */}
        <div className="w-full mx-auto mb-16">          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.05 }}
          >
            {/* Frontend */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <TechBadge name="HTML" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
              <TechBadge name="CSS" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <TechBadge name="JAVASCRIPT" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
              <TechBadge name="TYPESCRIPT" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
              <TechBadge name="REACT" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.25 }}>
              <TechBadge name="NEXT.JS" />
            </motion.div>
            
            {/* UI/UX & Backend */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
              <TechBadge name="TAILWIND CSS" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.35 }}>
              <TechBadge name="FRAMER MOTION" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
              <TechBadge name="NODE.JS" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.45 }}>
              <TechBadge name="EXPRESS.JS" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
              <TechBadge name="POSTGRESQL" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.55 }}>
              <TechBadge name="MONGODB" />
            </motion.div>
            
            {/* Tools & Platforms */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
              <TechBadge name="PRISMA" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.65 }}>
              <TechBadge name="GIT" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.7 }}>
              <TechBadge name="GITHUB" />
            </motion.div>
            
            {/* Additional Languages */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.75 }}>
              <TechBadge name="PYTHON" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }}>
              <TechBadge name="C#" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.85 }}>
              <TechBadge name=".NET" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
              <TechBadge name="KOTLIN" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.95 }}>
              <TechBadge name="SCALA" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.75 }}>
              <TechBadge name="VERCEL" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }}>
              <TechBadge name="AWS" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.85 }}>
              <TechBadge name="SHOPIFY" />
            </motion.div>
            
            {/* Specialized */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
              <TechBadge name="FIRESTORE" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.95 }}>
              <TechBadge name="N8N" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 1 }}>
              <TechBadge name="DOCKER" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 1 }}>
              <TechBadge name="MAKE.COM" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 1.05 }}>
              <TechBadge name="HUGGING FACE" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section with banner - Version épurée pour mobile */}
        <div className="mt-auto">
          {/* Banner with enhanced dynamic background */}
          <div className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8">
            <div className="relative rounded-xl border border-[#64FFDA]/20 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2e4d] to-[#1a1f4d] opacity-90"></div>
              
              {/* Effet de vague simplifié */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/10 via-transparent to-[#64FFDA]/10" 
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'slowGradientMove 15s linear infinite'
                }}
              ></div>
              
              {/* Points lumineux réduits pour mobile */}
              <div className="absolute inset-0 overflow-hidden opacity-30 hidden md:block">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#64FFDA] animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="py-4 sm:py-5 text-center relative z-10">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 items-center">
                  <span className="text-[#64FFDA] text-lg font-light leading-none">•</span>
                  <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">RESPONSIVE</span>
                  <span className="text-[#64FFDA] text-lg font-light leading-none">•</span>
                  <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">DYNAMIQUE</span>
                  <span className="text-[#64FFDA] text-lg font-light leading-none">•</span>
                  <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">SCALABLE</span>
                  <span className="text-[#64FFDA] text-lg font-light leading-none hidden sm:inline">•</span>
                  <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider hidden sm:inline">PERFORMANCE</span>
                  <span className="text-[#64FFDA] text-lg font-light leading-none hidden sm:inline">•</span>
                  <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider hidden sm:inline">AGILE</span>
                  <span className="text-[#64FFDA] text-lg font-light leading-none hidden sm:inline">•</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
