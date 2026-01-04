'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/animated-button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TechBadge from './TechBadge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExtendedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  tags: string[];
  link?: string;
  demoUrl?: string;
  githubUrl?: string;
  logo?: string;
  bgColor?: string;
  shortDesc?: string;
  features?: string[];
  accentColor?: string;
  status: 'Production' | 'Beta' | 'Live' | 'TestFlight';
}

export default function ProjectsSection() {
  // Projets principaux pour la landing (3-4 max, format Problème → Système → Impact)
  const projects: ExtendedProject[] = [
    {
      id: 'tracksy',
      title: 'Tracksy',
      description: 'Plateforme SaaS pour freelances. Suivi du temps automatique, génération de factures en un clic, et analytics de rentabilité. Intégration Stripe pour paiements en ligne.',
      image: '/projects/tracksy-landing.png',
      hoverImage: '/projects/tracksy-landing.png',
      tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA', 'POSTGRESQL'],
      demoUrl: 'https://tracksy.me',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#0a1f0a]/90 via-[#0d1a0d]/80 to-[#0a1f0a]/70',
      shortDesc: 'Time tracking & facturation freelance',
      features: [
        'Problème: 3-5h/semaine perdues sur tracking & facturation',
        'Système: Suivi temps → factures → export comptable automatisé',
        'Impact: Prêt à utiliser, plug & play'
      ],
      accentColor: '#d5ff3f',
      logo: '/projects/tracksy_icon.png',
      status: 'Production'
    },
    {
      id: 'sidequest',
      title: 'SideQuest',
      description: 'App mobile iOS pour organiser des sorties. Crée des événements, découvre des lieux avec recommandations ML, invite tes amis. Calendrier social intégré et mode hors-ligne.',
      image: '/projects/sidequest-mockup.png',
      hoverImage: '/projects/sidequest-mockup.png',
      tags: ['REACT NATIVE', 'TYPESCRIPT', 'SUPABASE'],
      demoUrl: 'https://testflight.apple.com/join/wPWFm761',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#2A2A2A]/80 via-[#1A1A1A]/60 to-[#2A2A2A]/30',
      shortDesc: 'Organise tes sorties entre amis',
      features: [
        'Problème: Organiser des sorties = chaos de messages',
        'Système: Événements par catégorie + recommandations "For You"',
        'Impact: Beta publique sur TestFlight'
      ],
      accentColor: '#8B5CF6',
      logo: '/projects/sidequest-logo.png',
      status: 'Beta'
    },
    {
      id: 'memocall',
      title: 'MemoCall',
      description: 'IA vocale pour appels professionnels. Transcription en temps réel, résumés automatiques, extraction de tâches et remplissage de CRM. Powered by GPT-4 et Whisper.',
      image: '/projects/Memocall-landing.png',
      hoverImage: '/projects/Memocall-landing.png',
      tags: ['NEXT.JS', 'TYPESCRIPT', 'OPENAI', 'SUPABASE', 'TWILIO'],
      demoUrl: 'https://memocall.ai',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#1a1a1a]/90 via-[#0d0d0d]/80 to-[#1a1a1a]/70',
      shortDesc: 'Appels → Actions IA',
      features: [
        'Problème: Info perdue et saisie manuelle après chaque appel',
        'Système: Transcription → résumé → to-do → docs pré-remplis',
        'Impact: Early access, implémentation sur mesure'
      ],
      accentColor: '#FFFFFF',
      logo: '/projects/memocall_icon.png',
      status: 'Beta'
    },
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Agent IA encyclopédique pour entreprises. Indexe toute votre documentation interne et répond instantanément aux questions de vos équipes. Recherche sémantique avancée.',
      image: '/projects/coresync.png',
      hoverImage: '/projects/coresync3.png',
      tags: ['NEXT.JS', 'FIRESTORE', 'N8N', 'OPENAI'],
      demoUrl: 'https://coresync.vercel.app',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#5D3A8E]/80 via-[#3E1A6E]/60 to-[#5D3A8E]/30',
      shortDesc: 'Agent IA encyclopédique interne',
      features: [
        'Problème: Temps perdu à chercher docs et processus internes',
        'Système: Agent IA qui interroge votre base de connaissances',
        'Impact: Plateforme à adapter selon votre entreprise'
      ],
      accentColor: '#9D71E8',
      logo: '/projects/coresyncLogo.png',
      status: 'Beta'
    }
  ];

  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null); // This will be the pinned element
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getProjectAccentColor = (index: number): string => {
    return projects[index]?.accentColor || '#FFFFFF'; // Default to white
  };

  useEffect(() => {
    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;

      // Kill existing triggers to avoid conflicts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Create ScrollTriggers for each project card to update activeProject
      projectCardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;
        ScrollTrigger.create({
          trigger: cardRef,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveProject(index);
            }
          },
          invalidateOnRefresh: true,
        });
      });
      
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  const goToProjectURL = (url: string | undefined) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 pb-32 md:pb-40 text-white min-h-screen bg-black" 
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative" ref={projectsContainerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
            Applications disponibles
          </p>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight px-4 max-w-4xl mx-auto">
            Des systèmes en production,{' '}
            <br className="sm:hidden" />
            <span className="text-purple-400 italic">prêts à utiliser</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Version desktop: affichage en colonnes */}
          <div className="hidden lg:block lg:col-span-8" ref={projectsContainerRef}>
            {/* Reduced space-y for tighter card layout */}
            <div className="space-y-24 md:space-y-32 relative z-[5]">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card relative"
                  ref={(el) => { projectCardRefs.current[index] = el; }}
                  style={{ position: 'relative', zIndex: 200 }}
                >
                  <div 
                    className={`group relative flex flex-col rounded-2xl md:rounded-3xl overflow-hidden h-[500px] md:h-[600px] transition-all duration-300 ease-in-out border-2 shadow-xl hover:shadow-2xl ${project.bgColor || 'bg-gray-900'} z-[200] ${project.demoUrl && project.demoUrl !== '#' ? 'cursor-pointer' : ''}`}
                    style={{
                       backgroundColor: project.id === 'memocall' ? '#0a0a0a' : project.id === 'tracksy' ? '#0a1f0a' : '#0E1A2B',
                       position: 'relative',
                       zIndex: 200,
                       isolation: 'isolate',
                       backdropFilter: 'none',
                       borderColor: project.accentColor || '#a5ebd1',
                       boxShadow: activeProject === index 
                         ? `0 0 45px -5px ${project.accentColor}80, 0 0 20px -10px ${project.accentColor}60` 
                         : `0 4px 15px -1px ${project.accentColor}30`,
                       maxHeight: '600px'
                    }}
                    onClick={() => project.demoUrl && project.demoUrl !== '#' ? goToProjectURL(project.demoUrl) : null}
                  >
                    {/* Multiple solid background layers to ensure complete opacity */}
                    <div className="absolute inset-0 bg-zinc-900 z-[101]"></div>
                    <div className="absolute inset-0 bg-[#0E1A2B] z-[102]"></div>
                    <div className="absolute inset-0 z-[103]" style={{
                      background: project.id === 'coresync' 
                        ? 'linear-gradient(135deg, #1a0d2c 0%, #0d0616 100%)'
                        : project.id === 'nocasemtl'
                        ? 'linear-gradient(135deg, #1e1e1e 0%, #0d0d0d 100%)'
                        : project.id === 'econome'
                        ? 'linear-gradient(135deg, #1a3a1a 0%, #0d1a0d 100%)'
                        : 'linear-gradient(135deg, #0c1e14 0%, #07130d 100%)'
                    }}></div>
                    {/* Extra opaque overlay to ensure no transparency */}
                    <div className="absolute inset-0 bg-[#060c18]/95 mix-blend-normal z-[104]"></div>
                    
                    <div className="p-6 md:p-8 z-[105] flex-grow flex flex-col justify-start mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <p 
                          className="text-xl md:text-2xl font-medium leading-snug max-w-[calc(100%-3rem)]"
                          style={{ color: project.accentColor || '#FFFFFF' }}
                        >
                          {project.shortDesc}
                        </p>
                        <ArrowRight 
                          className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0 transition-colors"
                          style={{ color: project.accentColor || '#FFFFFF' }}
                        />
                      </div>
                    </div>

                    <div className={`relative z-[105] mt-auto px-3 pb-3 md:px-4 md:pb-4 ${project.id === 'sidequest' ? 'flex justify-center' : ''}`}>
                      {/* Lueur thématique derrière la miniature */}
                      <div 
                        className={`absolute inset-0 mx-auto rounded-3xl blur-2xl z-[1] transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:rotate-1 ${project.id === 'sidequest' ? 'w-[50%] aspect-[9/16]' : 'w-[95%] aspect-[4/3] md:aspect-[5/4]'}`}
                        style={{ background: project.id === 'sidequest' ? 'linear-gradient(to bottom right, #c084fc, #8B5CF6)' : project.id === 'coresync' ? 'linear-gradient(to bottom right, #dea9ff, #9D71E8)' : project.id === 'tracksy' ? 'linear-gradient(to bottom right, #e8ff8f, #d5ff3f)' : project.id === 'memocall' ? 'linear-gradient(to bottom right, #ffffff, #cccccc)' : 'linear-gradient(to bottom right, #a5ebd1, #10B981)' }}
                      ></div>
                      <div 
                        className={`relative mx-auto overflow-hidden z-[106] transition-all duration-500 ease-out ${project.id === 'sidequest' ? 'w-[45%] aspect-[9/19] bg-transparent border-0 shadow-none group-hover:scale-105' : 'w-[90%] aspect-[4/3] md:aspect-[5/4] rounded-lg md:rounded-xl shadow-xl border border-white/10 bg-zinc-900 group-hover:rotate-1 group-hover:scale-105'}`}
                        style={{boxShadow: project.id === 'sidequest' ? 'none' : project.id === 'coresync' ? '0 10px 30px -5px rgba(222, 169, 255, 0.4), 0 0 15px -5px rgba(222, 169, 255, 0.5)' : project.id === 'tracksy' ? '0 10px 30px -5px rgba(213, 255, 63, 0.4), 0 0 15px -5px rgba(213, 255, 63, 0.5)' : project.id === 'memocall' ? '0 10px 30px -5px rgba(255, 255, 255, 0.3), 0 0 15px -5px rgba(255, 255, 255, 0.4)' : '0 10px 30px -5px rgba(165, 235, 209, 0.4), 0 0 15px -5px rgba(165, 235, 209, 0.5)'}}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full transition-all duration-500 ease-out ${project.id === 'sidequest' ? 'object-contain' : 'object-cover'}`}
                          width={600}
                          height={450}
                        />
                        {project.hoverImage && project.id !== 'coresync' && project.id !== 'sidequest' && (
                          <Image
                            src={project.hoverImage}
                            alt={`${project.title} hover preview`}
                            className="absolute inset-0 w-full h-full object-cover hidden group-hover:block transition-all duration-500 ease-out"
                            width={600}
                            height={450}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Version desktop: détails épinglés */}
          <div 
            className="hidden lg:block lg:col-span-4"
            ref={detailsRef}
          >
             {/* Content that gets pinned with CSS sticky */}
            <div className="sticky top-32 space-y-4 pt-8 pb-4">
              <AnimatePresence mode='wait'>
                {projects.length > 0 && activeProject < projects.length && (
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ 
                      duration: 0.15, 
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    data-component-name="MotionComponent"
                    className="flex flex-col pt-0 mt-0"
                  >
                    <motion.div 
                      className="flex items-center mb-8 pt-0 gap-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.02 }}
                      data-component-name="MotionComponent"
                    >
                      {/* Logo avec glow */}
                      {projects[activeProject].logo && (
                        <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
                          {/* Glow derrière le logo */}
                          <div className="absolute -inset-3 rounded-2xl blur-xl opacity-40" 
                               style={{ background: getProjectAccentColor(activeProject) }}
                          ></div>
                          
                          {/* Logo */}
                          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                          >
                            <Image 
                              src={projects[activeProject].logo!} 
                              alt={`${projects[activeProject].title} logo`} 
                              className="w-full h-full object-contain p-1 rounded-xl"
                              width={80}
                              height={80}
                              style={{ filter: `drop-shadow(0 0 5px ${getProjectAccentColor(activeProject)}40)` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Titre à droite */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            {projects[activeProject].title}
                          </h3>
                          <span 
                            className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full"
                            style={{ 
                              backgroundColor: `${getProjectAccentColor(activeProject)}20`,
                              color: getProjectAccentColor(activeProject),
                              border: `1px solid ${getProjectAccentColor(activeProject)}40`
                            }}
                          >
                            {projects[activeProject].status}
                          </span>
                        </div>
                        <div className="w-20 h-1 rounded-full" style={{ backgroundColor: getProjectAccentColor(activeProject) }}></div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-white/75 mb-7 text-base md:text-lg leading-relaxed max-h-[150px] md:max-h-[200px] overflow-y-auto pr-2 custom-scrollbar"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.03 }}
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent'
                      }}
                    >
                      <p>{projects[activeProject].description}</p>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-4 mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.04 }}
                      data-component-name="MotionComponent"
                    >
                      <div className="mb-7 space-y-3">
                        {projects[activeProject].features?.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3.5">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full mt-0.5" style={{backgroundColor: `${getProjectAccentColor(activeProject)}19`}}>
                              <span className="text-base font-semibold leading-none" style={{color: getProjectAccentColor(activeProject)}}>+</span>
                            </div>
                            <p className="text-white/80 text-sm md:text-base">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-7"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.05 }}
                    >
                       <h4 className="text-sm font-medium mb-4 text-white/60 tracking-wider">TECHNOLOGIES UTILISÉES</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {projects[activeProject].tags.map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.06 }}
                    >
                      {/* Bouton "Voir le Projet" supprimé - les cartes sont maintenant cliquables */}
                      {(projects[activeProject]?.githubUrl && projects[activeProject]?.githubUrl !== '#') && (
                        <Button 
                          variant="outline" 
                          className="border-gray-700/80 hover:border-gray-600 bg-zinc-900/50 hover:bg-gray-800/40 text-white/70 hover:text-white/90 font-medium text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link href={projects[activeProject].githubUrl!} target="_blank" rel="noopener noreferrer">
                            Code Source <Github className="w-4 h-4 ml-2.5" />
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Version mobile: affichage en cards moderne */}
        <div className="lg:hidden mt-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className={`rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/[0.07] to-white/[0.02] flex flex-col shadow-2xl border backdrop-blur-xl ${project.demoUrl && project.demoUrl !== '#' ? 'cursor-pointer' : ''}`}
                style={{
                  borderColor: `${project.accentColor}40`,
                  boxShadow: `0 20px 40px -10px ${project.accentColor}30`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => project.demoUrl && project.demoUrl !== '#' ? goToProjectURL(project.demoUrl) : null}
              >
                {/* Image du projet avec ratio 16:9 */}
                <div className="relative overflow-hidden bg-black/20" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-6">
                  {/* En-tête avec logo et titre */}
                  <div className="flex items-start gap-4 mb-4">
                    {project.logo && (
                      <div className="w-14 h-14 rounded-2xl p-2.5 flex items-center justify-center relative flex-shrink-0 border" style={{ 
                        backgroundColor: `${project.accentColor}10`,
                        borderColor: `${project.accentColor}30`
                      }}>
                        <Image 
                          src={project.logo} 
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain" 
                          width={56}
                          height={56}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.shortDesc}
                      </p>
                    </div>
                    <ArrowRight 
                      className="w-6 h-6 flex-shrink-0 mt-1"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  
                  {/* Technologies utilisées */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <TechBadge key={`mobile-${project.id}-${tag}`} name={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button - Voir plus de projets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link href="/projects">
            <AnimatedButton variant="purple">
              Voir toutes les solutions
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}