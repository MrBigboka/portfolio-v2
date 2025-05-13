'use client';

// CSS pour les particules statiques de la section Hero
import './hero-particles.css';

import React, { useState, useEffect } from 'react';

// Import components
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardSection from '@/components/AwardSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
// 

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration errors by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Only render content after component has mounted on client
  if (!mounted) {
    return <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0F1729] text-white"></main>;
  }
  
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-white dark:bg-[#101B2E] text-[#101B2E] dark:text-[#F7E3C5] transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <HeroSection />
      
      {/* About Section Component with GSAP animation */}
      <AboutSection />
      
      {/* Projects Section Component */}
      <ProjectsSection />
      
      {/* Expertise Section Component */}
      <ExpertiseSection />

      {/* Award Section Component */}
      <AwardSection />
      
      {/* Contact Section Component */}
      <ContactSection />
      
      {/* Footer Component */}
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
        
        /* Styles pour l'animation GSAP */
        @keyframes slowGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Masquer la barre de défilement tout en permettant le défilement */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </main>
  );
}
