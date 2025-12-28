'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';
import { Code, Briefcase, Lightbulb, Rocket } from 'lucide-react';
import ProfileCard from '@/components/ui/ProfileCard';

// Enregistrer les plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const AboutSection: React.FC = () => {
  // Références pour les animations GSAP
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  //
  const lineRef = useRef<HTMLDivElement>(null);
  
  // Animation GSAP simplifiée pour éviter les problèmes de texte
  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current || !lineRef.current) return;
    
    // Animation de la ligne verticale qui se dessine
    gsap.fromTo(lineRef.current, 
      { height: 0, opacity: 0 },
      { height: '100%', opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
    
    // Animation des cercles décoratifs autour de l'image
    const circles = imageRef.current.querySelectorAll('.decorative-circle');
    circles.forEach((circle) => {
      gsap.set(circle, { opacity: 1 });
    });
    
    // Animation des icônes qui flottent
    const icons = sectionRef.current.querySelectorAll('.floating-icon');
    icons.forEach((icon, index) => {
      // Position initiale aléatoire
      gsap.set(icon, {
        x: (Math.random() * 20) - 10,
        y: (Math.random() * 20) - 10,
        rotation: (Math.random() * 10) - 5,
        opacity: 0.5
      });
      
      // Animation de flottement continue
      gsap.to(icon, {
        x: '+=5',
        y: '-=5',
        rotation: '+=3',
        repeat: -1,
        yoyo: true,
        duration: 3 + (index * 0.5),
        ease: 'sine.inOut'
      });
    });
    
    return () => {
      // Nettoyage des animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ backgroundColor: '#0A1220' }}
    >
      {/* Animated background */}
      <GlobalAnimatedBackground sectionId="about-section" opacity={0.4} />
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 floating-icon opacity-0">
        <Code size={32} className="text-[#D9A441]/40" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 floating-icon opacity-0">
        <Briefcase size={32} className="text-[#B74134]/40" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 floating-icon opacity-0">
        <Lightbulb size={32} className="text-[#D9A441]/40" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 floating-icon opacity-0">
        <Rocket size={32} className="text-[#B74134]/40" />
      </div>
      

      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Titre déplacé dans la colonne de droite */}
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ProfileCard avec effet moderne */}
          <div className="lg:col-span-5 flex justify-center">
            <div ref={imageRef}>
              <ProfileCard
                name="Miguel Boka"
                title="Lead Architect & Fondateur"
                handle="MrBigboka"
                status="Online"
                contactText="Voir LinkedIn"
                avatarUrl="/miguelboka.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open('https://www.linkedin.com/in/miguel-boka-51b407223/', '_blank')}
              />
            </div>
          </div>
          
          {/* Contenu avec animation de révélation */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            <div className="space-y-6 text-white/90">
              {/* Titre déplacé dans la colonne de droite */}
              <div className="mb-8">
                <motion.p 
                  className="uppercase tracking-widest text-sm font-medium text-[#D9A441] animate-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  À PROPOS DE MOI
                </motion.p>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 animate-text">
                  <span className="text-white">Développeur Full-Stack et </span>
                  <span className="relative inline-block">
                    <span 
                      className="relative z-10 bg-gradient-to-r from-[#F7E3C5] via-[#D9A441] to-[#B74134] text-transparent bg-clip-text brush-script" 
                      style={{ 
                        fontSize: '1.15em',
                        letterSpacing: '0.02em'
                      }}
                    >
                      un peu de tout
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F7E3C5]/20 via-[#D9A441]/20 to-[#B74134]/20 blur-lg filter opacity-70"></span>
                  </span>
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed">
                Je m&apos;appelle Miguel Boka, développeur full-stack basé au Québec. Passionné par le développement web depuis l&apos;âge de 15 ans, je conçois des applications web complètes en utilisant les technologies modernes comme React, Next.js et Node.js.
              </p>
              
              <p className="text-[#F8EBD7] text-lg mb-6">
                Avec 4 ans d&apos;expérience professionnelle, j&apos;ai développé une expertise dans la création d&apos;applications web performantes et intuitives. Mon approche combine créativité et rigueur technique pour transformer des idées en solutions concrètes.
              </p>
              
              <p className="text-lg leading-relaxed text-[#F8EBD7]">
                En dehors du code, je suis un passionné de basket, où j&apos;ai appris l&apos;importance du travail d&apos;équipe et de la discipline - des valeurs que j&apos;applique quotidiennement dans mes projets de développement.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Séparateur stylisé */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0E1A2B] to-transparent"></div>
    </section>
  );
};

export default AboutSection;
