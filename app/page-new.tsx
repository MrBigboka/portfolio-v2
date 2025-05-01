'use client';

import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, FileText, Linkedin, Github, Terminal, Server, Database, Braces, Layers, Cpu, FolderOpen, Mail } from 'lucide-react';
import React from 'react';

// Badges technologiques avec icônes
function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

export default function Home() {
  // Couleurs inspirées du logo
  const primaryColor = '#f0e6d2'; // beige/crème
  const accentColor = '#b3392c';  // rouge-brun
  
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0a192f]">
      {/* Background Dynamique */}
      <AnimatedBackground />

      {/* Header minimaliste */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-[#0a192f]/70">
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
            className="flex gap-8 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/cv.pdf" 
              target="_blank"
              className="text-[#f0e6d2] hover:text-[#b3392c] transition-colors duration-300 flex items-center gap-2"
            >
              <FileText size={18} />
              <span className="font-medium tracking-wide hidden md:inline">CV</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/your-profile" 
              target="_blank"
              className="text-[#f0e6d2] hover:text-[#b3392c] transition-colors duration-300 flex items-center gap-2"
            >
              <Linkedin size={18} />
              <span className="font-medium tracking-wide hidden md:inline">LINKEDIN</span>
            </Link>
            <Link 
              href="https://github.com/your-username" 
              target="_blank"
              className="text-[#f0e6d2] hover:text-[#b3392c] transition-colors duration-300 flex items-center gap-2"
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
          >
            {/* Titre et sous-titre */}
            <div>
              <motion.p 
                className="text-[#b3392c] font-medium mb-2 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                DÉVELOPPEUR FULL-STACK
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                style={{ color: primaryColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                MIGUEL BOKA
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed"
                style={{ color: `${primaryColor}CC` }}
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
              <TechBadge icon={<Braces size={16} color={accentColor} />} label="REACT" />
              <TechBadge icon={<Server size={16} color={accentColor} />} label="NODE.JS" />
              <TechBadge icon={<Cpu size={16} color={accentColor} />} label="IA" />
              <TechBadge icon={<Database size={16} color={accentColor} />} label="SQL/NOSQL" />
              <TechBadge icon={<Terminal size={16} color={accentColor} />} label="PYTHON" />
              <TechBadge icon={<Layers size={16} color={accentColor} />} label="CLOUD" />
            </motion.div>
            
            {/* Boutons d'action */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="bg-[#b3392c] text-[#f0e6d2] hover:bg-[#b3392c]/90 rounded-full px-8 py-6 text-base font-medium tracking-wide shadow-lg flex items-center gap-2"
              >
                <FolderOpen className="h-5 w-5" /> VOIR MES PROJETS
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-white text-[#0a192f] hover:bg-white/90 border-white rounded-full px-8 py-6 text-base font-medium tracking-wide shadow-lg flex items-center gap-2"
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
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#f0e6d2]/20 animate-pulse-slow"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full border border-[#f0e6d2]/30 animate-pulse-slow animation-delay-1000"></div>
            
            {/* Logo principal avec effet de glow */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {/* Effet de glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full blur-2xl" 
                style={{ backgroundColor: accentColor, opacity: 0.4 }}
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
      
      {/* Sections supplémentaires inspirées de l'exemple */}
      <section className="relative z-10 py-20 px-6 md:px-12 bg-[#0a192f]/80">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* GitHub Activity */}
            <motion.div 
              className="bg-[#0e1e33] p-6 rounded-lg border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Github size={24} className="text-[#f0e6d2]" />
                <h3 className="text-[#f0e6d2] text-xl font-medium">GitHub Activity</h3>
              </div>
              <p className="text-[#8892b0] text-sm mb-4">Contributions in the last year.</p>
              
              {/* GitHub contribution graph (simulé) */}
              <div className="h-[120px] w-full bg-[#0a192f]/50 rounded-md overflow-hidden">
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
              className="bg-[#0e1e33] p-6 rounded-lg border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f0e6d2] text-2xl">"</span>
                <h3 className="text-[#f0e6d2] text-xl font-medium">Citation Favorite</h3>
              </div>
              <p className="text-[#8892b0] mb-4">
                "La simplicité est la sophistication suprême."
              </p>
              <p className="text-[#f0e6d2]/70 text-sm italic">— Leonardo da Vinci</p>
            </motion.div>
          </div>
          
          {/* Tech Stack */}
          <motion.div 
            className="bg-[#0e1e33] p-6 rounded-lg border border-white/5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={24} className="text-[#f0e6d2]" />
              <h3 className="text-[#f0e6d2] text-xl font-medium">Tech Stack</h3>
            </div>
            <p className="text-[#8892b0] mb-6">
              Building the web with heart, clean code, and a modern tech stack.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <Braces size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">TypeScript</span>
              </div>
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <Server size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">Laravel</span>
              </div>
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <Cpu size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">Next.js</span>
              </div>
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <Layers size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">Astro.js</span>
              </div>
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <ArrowRight size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">TailwindCSS</span>
              </div>
              <div className="bg-[#0a192f] p-2 rounded text-center">
                <Database size={20} className="text-[#b3392c] mx-auto mb-1" />
                <span className="text-[#f0e6d2] text-xs">Prisma</span>
              </div>
            </div>
          </motion.div>
          
          {/* Projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-[#0e1e33] p-6 rounded-lg border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-[#f0e6d2] text-xl font-medium mb-3">Next.js Auth Starter Kit</h3>
              <p className="text-[#8892b0] text-sm mb-3">Next.js + Better-Auth + Prisma</p>
              <div className="flex gap-2">
                <span className="bg-[#0a192f] text-[#f0e6d2] text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-[#0a192f] text-[#f0e6d2] text-xs px-2 py-1 rounded">Auth</span>
                <span className="bg-[#0a192f] text-[#f0e6d2] text-xs px-2 py-1 rounded">Prisma</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#0e1e33] p-6 rounded-lg border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-[#f0e6d2] text-xl font-medium mb-3">Typing Speed</h3>
              <p className="text-[#8892b0] text-sm mb-3">94.4 WPM, 30s, 98.76% EN</p>
              <div className="w-full bg-[#0a192f] h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: '94%' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Citation en bas de page */}
      <motion.div 
        className="relative z-10 py-8 text-center text-[#8892b0] text-sm italic px-4 bg-[#0a192f]/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
      >
        <p className="max-w-2xl mx-auto">
          "La simplicité est la sophistication suprême." — <span className="not-italic">Leonardo da Vinci</span>
        </p>
      </motion.div>
      
      {/* Styles globaux pour les animations personnalisées */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.3; }
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
