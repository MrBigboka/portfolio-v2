'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Braces, Server, Database, Cpu, Terminal, Layers, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterEffect from '@/components/ui/TypewriterEffect';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';

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
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 pt-16 md:pt-20" style={{ backgroundColor: '#0E1A2B' }}>
      {/* Animated background using the new GlobalAnimatedBackground component */}
      <GlobalAnimatedBackground sectionId="hero-section" opacity={0.8} />
      
      {/* Éléments décoratifs supplémentaires pour mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#C3513B]/20 to-[#F4C065]/20 blur-3xl"></div>
        <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#0E1A2B]/30 to-[#F8EBD7]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#D2B28D]/20 to-[#F4C065]/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Colonne gauche - Texte et CTA */}
        <motion.div 
          className="flex flex-col space-y-6 md:space-y-8 order-2 md:order-1 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 30, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          {/* Titre et sous-titre */}
          <div>
            <motion.p 
              className="text-[#C3513B] font-bold mb-2 tracking-widest text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              data-component-name="MotionComponent"
            >
              DÉVELOPPEUR FULL-STACK WEB ET MOBILE
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-[#0a192f] dark:text-white drop-shadow-xl"
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
              className="text-lg sm:text-xl leading-relaxed text-[#0a192f]/90 dark:text-white/90"
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
            className="flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <TechBadge icon={<Braces size={14} color="#fad0cc" />} label="REACT" />
            <TechBadge icon={<Server size={14} color="#fad0cc" />} label="NODE.JS" />
            <TechBadge icon={<Cpu size={14} color="#fad0cc" />} label="IA" />
            <TechBadge icon={<Database size={14} color="#fad0cc" />} label="SQL/NOSQL" />
            <TechBadge icon={<Terminal size={14} color="#fad0cc" />} label="PYTHON" />
            <TechBadge icon={<Layers size={14} color="#fad0cc" />} label="CLOUD" />
          </motion.div>
          
          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="bg-[#B74134] text-[#F7E3C5] hover:bg-[#B74134]/90 hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold tracking-wide shadow-xl flex items-center gap-2 border border-[#B74134]/20 transition-all duration-300"
            >
              <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5" /> VOIR MES PROJETS
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-[#101B2E] dark:bg-[#F7E3C5] text-[#F7E3C5] dark:text-[#101B2E] hover:bg-[#101B2E]/90 dark:hover:bg-[#F7E3C5]/90 hover:scale-105 border-[#101B2E] dark:border-[#F7E3C5] rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold tracking-wide shadow-xl flex items-center gap-2 transition-all duration-300"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> CONTACT
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Colonne droite - Logo et éléments visuels */}
        <motion.div 
          className="relative flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, y: -20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cercles décoratifs - tailles adaptées pour mobile */}
          <div className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] rounded-full border-2 border-[#0a192f]/30 dark:border-white/30 animate-pulse-slow blur-[1px]"></div>
          <div className="absolute w-[220px] sm:w-[260px] md:w-[300px] h-[220px] sm:h-[260px] md:h-[300px] rounded-full border-2 border-[#0a192f]/40 dark:border-white/40 animate-pulse-slow animation-delay-1000 blur-[1px]"></div>
          <div className="absolute w-[160px] sm:w-[180px] md:w-[200px] h-[160px] sm:h-[180px] md:h-[200px] rounded-full border-2 border-[#d42d1d]/30 dark:border-[#d42d1d]/40 animate-pulse-slow animation-delay-2000 blur-[1px]"></div>
          
          {/* Logo principal avec effet de glow et hover pour afficher la photo de profil */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Effet de glow amélioré */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] rounded-full blur-3xl bg-[#d42d1d]/70 dark:bg-[#d42d1d]/80 animate-pulse-slow"
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[160px] md:w-[180px] h-[150px] sm:h-[160px] md:h-[180px] rounded-full blur-2xl bg-[#0a192f]/40 dark:bg-white/40 animate-pulse-slow animation-delay-1000"
            ></div>
            
            {/* Points lumineux décoratifs autour du logo */}
            <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-[#F4C065] shadow-[0_0_8px_2px_#F4C065] animate-pulse-slow"></div>
            <div className="absolute top-1/4 right-0 w-1.5 h-1.5 rounded-full bg-[#C3513B] shadow-[0_0_6px_2px_#C3513B] animate-pulse-slow animation-delay-1000"></div>
            <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-[#F8EBD7] shadow-[0_0_8px_2px_#F8EBD7] animate-pulse-slow animation-delay-2000"></div>
            
            {/* Conteneur pour l'effet de hover avec les deux images - taille adaptée pour mobile */}
            <div className="relative group w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden">
              {/* Logo (visible par défaut) */}
              <Image 
                src="/logo-miguel-transp.png" 
                alt="Logo Miguel" 
                width={280} 
                height={280}
                className="relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full"
                priority
              />
              
              {/* Photo de profil (visible au survol) */}
              <Image 
                src="/profil.jpeg" 
                alt="Photo de Miguel" 
                width={280} 
                height={280}
                className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 object-cover rounded-full w-full h-full hero-profile-image"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
