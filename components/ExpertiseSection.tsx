'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import TechBadge from './TechBadge';
import { Marquee } from './ui/marquee';

const qualities = [
  'RESPONSIVE', 'SCALABLE', 'PERFORMANT', 'AGILE', 'CLEAN CODE', 'DRY', 'SOLID',
  'AUTOMATISÉ', 'OPTIMISÉ', 'SÉCURISÉ', 'ACCESSIBLE', 'MODERNE', 'MAINTENABLE'
];

const ExpertiseSection: React.FC = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <section className="relative z-10 py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col justify-between h-full relative z-10">
        {/* React Logo with Purple Glow */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Subtle purple glow behind */}
            <div className="absolute inset-0 -m-12 rounded-full bg-purple-600/15 blur-3xl"></div>
            <div className="absolute inset-0 -m-6 rounded-full bg-purple-500/10 blur-2xl"></div>
            
            {/* Outer ring */}
            <div className="absolute inset-0 -m-4 rounded-full border border-purple-500/20"></div>
            
            {/* Spinning React logo */}
            <motion.div 
              ref={wheelRef} 
              className="relative w-32 h-32 md:w-40 md:h-40"
              style={{ rotate }}
            >
              <Image
                src="/react-metal.png"
                alt="React logo"
                width={160}
                height={160}
                className="relative z-10 w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16" id="about">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.3em] text-xs font-medium text-gray-500 mb-4"
          >
            Ce qu&apos;on maîtrise
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight"
          >
            Une expertise au service de{' '}
            <span className="text-purple-400 italic">résultats</span>
          </motion.h2>
        </div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="w-full mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2 max-w-5xl mx-auto">
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
          </div>
        </motion.div>

        </div>
      
      {/* Diagonal Crossing Banners */}
      <div className="relative w-full h-48 mt-16">
        {/* Back banner - same shape with invisible text for consistent height */}
        <div 
          className="absolute w-[200%] -left-[50%] bg-purple-900 py-4 z-0"
          style={{ 
            transform: 'rotate(4deg)',
            top: '55%'
          }}
        >
          <Marquee className="[--duration:50s] opacity-0" reverse pauseOnHover={false}>
            {qualities.map((quality, index) => (
              <span key={index} className="flex items-center gap-8 mx-8">
                <span className="text-transparent font-semibold text-sm uppercase tracking-widest">{quality}</span>
                <span className="text-transparent">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
        
        {/* Front banner - with text */}
        <div 
          className="absolute w-[200%] -left-[50%] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 py-4 z-10"
          style={{ 
            transform: 'rotate(-4deg)',
            top: '20%'
          }}
        >
          <Marquee className="[--duration:50s]" pauseOnHover={false}>
            {qualities.map((quality, index) => (
              <span key={index} className="flex items-center gap-8 mx-8">
                <span className="text-white font-semibold text-sm uppercase tracking-widest">{quality}</span>
                <span className="text-white/70">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
