'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Braces, Server, Database, Cpu, Terminal, Layers, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterEffect from '@/components/ui/TypewriterEffect';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

// Badges technologiques avec icônes
function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-[#101B2E]/10 dark:bg-[#F7E3C5]/10 px-3 py-1.5 rounded-full text-xs font-medium border border-[#101B2E]/10 dark:border-[#F7E3C5]/10">
      {icon}
      <span>{label}</span>
    </div>
  );
}

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-20" style={{ backgroundColor: '#0a192f' }}>
      {/* Animated background for visual consistency with other sections */}
      <div id="hero-section" className="absolute inset-0 -z-10 overflow-hidden" style={{ zIndex: -1 }}>
        <AnimatedBackground excludeSelector="#projects-section, #expertise-section, #awards-section" />
      </div>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche - Texte et CTA */}
        <motion.div 
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          {/* Titre et sous-titre */}
          <div>
            <motion.p 
              className="text-[#fad0cc] font-bold mb-2 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              data-component-name="MotionComponent"
            >
              DÉVELOPPEUR FULL-STACK WEB ET MOBILE
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#0a192f] dark:text-white drop-shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TypewriterEffect 
                text="MIGUEL BOKA"
                speed={100}
                className="inline-block"
              />
            </motion.h1>
            
            <motion.p 
              className="text-xl leading-relaxed text-[#0a192f]/90 dark:text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypewriterEffect 
                text="Je crée des solutions intelligentes et performantes qui transforment les idées en expériences numériques exceptionnelles."
                speed={30}
                className="inline-block"
              />
            </motion.p>
          </div>
          
          {/* Badges technologiques */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TechBadge icon={<Braces size={16} color="#fad0cc" />} label="REACT" />
            <TechBadge icon={<Server size={16} color="#fad0cc" />} label="NODE.JS" />
            <TechBadge icon={<Cpu size={16} color="#fad0cc" />} label="IA" />
            <TechBadge icon={<Database size={16} color="#fad0cc" />} label="SQL/NOSQL" />
            <TechBadge icon={<Terminal size={16} color="#fad0cc" />} label="PYTHON" />
            <TechBadge icon={<Layers size={16} color="#fad0cc" />} label="CLOUD" />
          </motion.div>
          
          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="bg-[#B74134] text-[#F7E3C5] hover:bg-[#B74134]/90 hover:scale-105 rounded-full px-8 py-6 text-base font-semibold tracking-wide shadow-xl flex items-center gap-2 border border-[#B74134]/20 transition-all duration-300"
            >
              <FolderOpen className="h-5 w-5" /> VOIR MES PROJETS
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-[#101B2E] dark:bg-[#F7E3C5] text-[#F7E3C5] dark:text-[#101B2E] hover:bg-[#101B2E]/90 dark:hover:bg-[#F7E3C5]/90 hover:scale-105 border-[#101B2E] dark:border-[#F7E3C5] rounded-full px-8 py-6 text-base font-semibold tracking-wide shadow-xl flex items-center gap-2 transition-all duration-300"
            >
              <Mail className="h-5 w-5" /> CONTACT
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Colonne droite - Logo et éléments visuels */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cercle décoratif */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#0a192f]/30 dark:border-white/30 animate-pulse-slow blur-[1px]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#0a192f]/40 dark:border-white/40 animate-pulse-slow animation-delay-1000 blur-[1px]"></div>
          <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-[#d42d1d]/30 dark:border-[#d42d1d]/40 animate-pulse-slow animation-delay-2000 blur-[1px]"></div>
          
          {/* Logo principal avec effet de glow */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Effet de glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full blur-3xl bg-[#d42d1d]/60 dark:bg-[#d42d1d]/70 animate-pulse-slow"
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full blur-2xl bg-[#0a192f]/30 dark:bg-white/30 animate-pulse-slow animation-delay-1000"
            ></div>
            
            <Image 
              src="/logo-miguel-transp.png" 
              alt="Logo Miguel" 
              width={280} 
              height={280}
              className="relative z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
