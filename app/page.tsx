'use client';

import AnimatedBackground from '@/components/ui/AnimatedBackground';
import VideoBackground from '@/components/ui/VideoBackground';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, FileText, Linkedin, Github, Terminal, Server, Database, Braces, Layers, Cpu, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import AwardSection from '@/components/AwardSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';

// Badges technologiques avec icônes
function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-[#101B2E]/10 dark:bg-[#F7E3C5]/10 px-3 py-1.5 rounded-full text-xs font-medium border border-[#101B2E]/10 dark:border-[#F7E3C5]/10">
      {icon}
      <span>{label}</span>
    </div>
  );
}



export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration errors by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Détecter le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  // Couleurs du thème officiel
  const primaryColorDark = '#101B2E'; // Bleu nuit
  const primaryColorLight = '#F7E3C5'; // Beige crème
  const accentColor = '#B74134'; // Rouge brique
  const darkBgColor = '#0A1422'; // Bleu nuit plus foncé pour le fond en mode sombre
  const darkHeaderColor = 'rgba(16, 27, 46, 0.8)'; // Header en mode sombre avec transparence
  const goldAccent = '#D9A441'; // Or doux pour les éléments décoratifs
  
  // Only render content after component has mounted on client
  if (!mounted) {
    return <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0F1729] text-white"></main>;
  }
  
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-white dark:bg-[#101B2E] text-[#101B2E] dark:text-[#F7E3C5] transition-colors duration-300">
      {/* Background Dynamique */}
      <AnimatedBackground />

      {/* Header minimaliste - Complètement transparent */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 dark:text-white bg-transparent border-transparent">
        {/* Overlay pour le mode sombre - Toujours transparent */}
        <div className="absolute inset-0 transition-colors duration-300 -z-10 bg-transparent" data-component-name="Home"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo minimaliste */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/logo-miguel-transp.png" 
              alt="Miguel" 
              width={50} 
              height={50}
              className="relative z-10"
              priority
            />
          </motion.div>
          
          {/* Navigation */}
          <motion.nav 
            className="flex gap-6 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <Link 
              href="/cv.pdf" 
              target="_blank"
              className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
            >
              <FileText size={18} />
              <span className="font-medium tracking-wide hidden md:inline">CV</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/miguel-boka" 
              target="_blank"
              className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
            >
              <Linkedin size={18} />
              <span className="font-medium tracking-wide hidden md:inline">LINKEDIN</span>
            </Link>
            <Link 
              href="https://github.com/MrBigboka" 
              target="_blank"
              className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
            >
              <Github size={18} />
              <span className="font-medium tracking-wide hidden md:inline">GITHUB</span>
            </Link>
          </motion.nav>
        </div>
      </header>

      {/* Contenu Principal */}      
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-20">
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
                className="text-[#d42d1d] font-bold mb-2 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                DÉVELOPPEUR FULL-STACK
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#0a192f] dark:text-white drop-shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                MIGUEL BOKA
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed text-[#0a192f]/90 dark:text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Je crée des solutions intelligentes et performantes qui transforment les idées en expériences numériques exceptionnelles.
              </motion.p>
            </div>
            
            {/* Badges technologiques */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TechBadge icon={<Braces size={16} color="#B74134" />} label="REACT" />
              <TechBadge icon={<Server size={16} color="#B74134" />} label="NODE.JS" />
              <TechBadge icon={<Cpu size={16} color="#B74134" />} label="IA" />
              <TechBadge icon={<Database size={16} color="#B74134" />} label="SQL/NOSQL" />
              <TechBadge icon={<Terminal size={16} color="#B74134" />} label="PYTHON" />
              <TechBadge icon={<Layers size={16} color="#B74134" />} label="CLOUD" />
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
      
      {/* Section Projets */}
      <ProjectsSection />
      
      {/* Section Distinction - Bourse CPMT */}
      <AwardSection />
      
      {/* Sections supplémentaires inspirées de l'exemple */}
      <section className="relative z-10 py-20 px-6 md:px-12 bg-gray-50/80 dark:bg-[#0F1729]/70 backdrop-blur-sm border-t border-b border-gray-200/50 dark:border-white/10 shadow-inner transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Expertise Technique" 
            subtitle="COMPÉTENCES & TECHNOLOGIES" 
            accentWord="Technique" 
            align="center" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* GitHub Activity */}
            <motion.div 
              className="bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Github size={24} className="text-[#d42d1d] dark:text-[#d42d1d]" />
                <h3 className="text-[#0a192f] dark:text-white text-xl font-semibold">Activité GitHub</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Contributions de l'année dernière.</p>
              
              {/* GitHub contribution graph (simulé) */}
              <div className="h-[120px] w-full bg-gray-100/80 dark:bg-[#071525]/80 rounded-md overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-inner transition-colors duration-300">
                <div className="h-full w-full flex items-end">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-green-600 mx-[1px] rounded-t-sm" 
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        opacity: 0.5 + Math.random() * 0.5
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Citation favorite */}
            <motion.div 
              className="bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#d42d1d] dark:text-[#d42d1d] text-2xl">"</span>
                <h3 className="text-[#0a192f] dark:text-white text-xl font-semibold">Citation Préférée</h3>
              </div>
              <p className="text-gray-700 dark:text-white mb-4 font-medium">
                "La simplicité est la sophistication suprême."
              </p>
              <p className="text-[#0a192f]/80 dark:text-gray-300 text-sm italic">— Léonard de Vinci</p>
            </motion.div>
          </div>
          
          {/* Tech Stack */}
          <motion.div 
            className="bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 mb-8 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={24} className="text-[#d42d1d] dark:text-[#d42d1d]" />
              <h3 className="text-[#0a192f] dark:text-white text-xl font-semibold">Stack Technique</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Construire le web avec passion, code propre et technologies modernes.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Braces size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">TypeScript</span>
              </div>
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Server size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">Laravel</span>
              </div>
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Cpu size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">Next.js</span>
              </div>
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Layers size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">Astro.js</span>
              </div>
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <ArrowRight size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">TailwindCSS</span>
              </div>
              <div className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm p-2 rounded text-center border border-gray-200/50 dark:border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Database size={20} className="text-[#d42d1d] mx-auto mb-1" />
                <span className="text-[#0a192f] dark:text-white text-xs font-medium">Prisma</span>
              </div>
            </div>
          </motion.div>
          
          {/* Projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-[#0a192f] dark:text-white text-xl font-semibold mb-3">Kit d'Authentification Next.js</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">Next.js + Better-Auth + Prisma</p>
              <div className="flex gap-2">
                <span className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm text-[#0a192f] dark:text-white text-xs px-2 py-1 rounded border border-gray-200/50 dark:border-white/10 shadow-sm transition-all duration-300">Next.js</span>
                <span className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm text-[#0a192f] dark:text-white text-xs px-2 py-1 rounded border border-gray-200/50 dark:border-white/10 shadow-sm transition-all duration-300">Auth</span>
                <span className="bg-gray-100/80 dark:bg-[#071525]/80 backdrop-blur-sm text-[#0a192f] dark:text-white text-xs px-2 py-1 rounded border border-gray-200/50 dark:border-white/10 shadow-sm transition-all duration-300">Prisma</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-[#0a192f] dark:text-white text-xl font-semibold mb-3">Vitesse de Frappe</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">94.4 MPM, 30s, 98.76% FR</p>
              <div className="w-full bg-gray-200/80 dark:bg-[#071525]/80 backdrop-blur-sm h-2 rounded-full overflow-hidden border border-gray-300/50 dark:border-white/10 shadow-inner transition-colors duration-300">
                <div className="bg-[#d42d1d] h-full" style={{ width: '94%' }}></div>
              </div>
            </motion.div>
          </div>
          
          {/* Tech Stack avec badges */}
          <div className="mt-12 bg-[#0A1220] p-8 rounded-xl border border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TechStack />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Contact */}
      <ContactSection />
      
      {/* Espace avant le footer */}
      <div className="h-8"></div>
      
      {/* Footer */}
      <Footer />
      
      {/* Styles globaux pour les animations personnalisées */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}
