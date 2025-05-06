'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react'; // Removed unused Monitor, CheckCircle2
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionHeader from '@/components/ui/SectionHeader';

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
  link?: string; // Not currently used in the UI, but kept for data structure
  demoUrl?: string;
  githubUrl?: string;
  bgColor?: string; // Tailwind class for background, e.g., 'bg-gradient-to-b from-[#3E1A35] to-[#2A1B2F]'
  shortDesc?: string;
  features?: string[];
  accentColor?: string; // Hex color string, e.g., '#DB2777'
}

export default function ProjectsSection() {
  const projects: ExtendedProject[] = [
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Un SaaS IA qui centralise la documentation, les processus internes et les outils de communication pour les grandes équipes. Avec son onboarding dynamique et son agent virtuel intelligent, CoreSync améliore la productivité et réduit les pertes de temps dans les entreprises.',
      image: '/projects/coresync.png',
      hoverImage: '/projects/coresync3.png',
      tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'SHADCN UI', 'LLM', 'MAKE.COM', 'VERCEL'],
      demoUrl: '#', // Replace with actual URL or remove if not applicable
      githubUrl: '#', // Replace with actual URL or remove if not applicable
      bgColor: 'bg-gradient-to-br from-[#3E1A35]/80 via-black/60 to-black/90',
      shortDesc: 'Plateforme SaaS IA centralisant documentation et processus pour grandes équipes.',
      features: [
        'Onboarding guidé avec animations et agent AI intégré',
        'Modules personnalisables : formation, RH, sécurité, documentation',
        'Recherche intelligente via LLM sur base de connaissances internes',
        'Automatisations possibles via Make (workflow internes)',
        'Interface moderne responsive pensée pour desktop et mobile'
      ],
      accentColor: '#DB2777' // Pink/Magenta
    },
    {
      id: 'nocasemtl',
      title: 'NoCaseMTL',
      description: 'Boutique e-commerce streetwear Y2K conçue sur Shopify. NoCaseMTL propose une esthétique rétro et urbaine avec des visuels forts, un branding affirmé et une navigation mobile-first, le tout optimisé via des sections personnalisables.',
      image: '/projects/nocase1.png',
      hoverImage: '/projects/nocase2.png',
      tags: ['SHOPIFY', 'LIQUID', 'TAILWIND CSS', 'MOBILE-FIRST UX', 'BRANDING', 'CUSTOM SECTIONS'],
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#1A1F3E]/80 via-black/60 to-black/90',
      shortDesc: 'E-commerce streetwear Y2K au branding affirmé et navigation mobile-first.',
      features: [
        'Boutique Shopify avec gestion complète des collections',
        'Branding rétro-futuriste cohérent avec la mode Y2K',
        'Lookbook animé, filtres par tailles/styles, fiches produits soignées',
        'Version mobile optimisée pour l\\\'expérience utilisateur',
        'Paiements, inventaire et promotions automatisés via apps Shopify'
      ],
      accentColor: '#3B82F6' // Blue
    },
    {
      id: 'econome',
      title: 'EconoME',
      description: 'Une application intelligente de gestion financière personnelle. L\'utilisateur connecte ses revenus et dépenses, et l\'IA génère des insights personnalisés, des graphiques clairs et des suggestions concrètes pour améliorer sa santé financière.',
      image: '/projects/econome.png',
      hoverImage: '/projects/econome2.png',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'LLM', 'PRISMA', 'POSTGRESQL', 'VERCEL'],
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#1A3E2A]/80 via-black/60 to-black/90',
      shortDesc: 'Application IA de gestion financière avec insights personnalisés et graphiques clairs.',
      features: [
        'Dashboard dynamique avec visualisation des dépenses & revenus',
        'Génération d\'insights IA basés sur les transactions',
        'Conseils personnalisés (ex. : "Tu dépenses 22 % de plus en resto que le mois passé")',
        'Mode simulation pour estimer les économies potentielles',
        'Interface simple, épurée, motivante'
      ],
      accentColor: '#10B981' // Green
    },
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
    if (!sectionRef.current || !projectsContainerRef.current || !detailsRef.current) return;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill existing triggers

    // Pin the right column (detailsRef)
    ScrollTrigger.create({
      trigger: sectionRef.current, // The entire section is the trigger for pinning duration
      start: "top top",
      // Pin until the bottom of the projectsContainerRef (left column) reaches the bottom of the viewport
      end: () => `+=${projectsContainerRef.current!.offsetHeight}`,
      pin: detailsRef.current,
      pinSpacing: false,
      scrub: false, 
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true, // For debugging the pin area
    });

    // Create ScrollTriggers for each project card to update activeProject
    projectCardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return;
      ScrollTrigger.create({
        trigger: cardRef,
        start: "top center+=10%", // A bit below center when entering
        end: "bottom center-=10%", // A bit above center when exiting
        onEnter: () => setActiveProject(index),
        onEnterBack: () => setActiveProject(index), // When scrolling back up
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        // markers: {startColor: "pink", endColor: "pink"}, // For debugging individual card triggers
      });
    });
    
    // Ensure ScrollTrigger refreshes on dynamic content changes if any
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]); // Rerun if number of projects changes

  useEffect(() => {
    if (!detailsRef.current) return;
    const elementsToAnimate = detailsRef.current.querySelectorAll('h3, p, div > span, ul > div, button'); // Target specific elements
    gsap.fromTo(
      elementsToAnimate,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out', clearProps: 'all' }
    );
  }, [activeProject]); // Animate when activeProject changes

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-transparent text-white overflow-hidden" // Removed fixed height constraint
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Mes Projets" 
          subtitle="RÉALISATIONS RÉCENTES" 
          accentWord="Projets" 
          align="center" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mt-8">
          
          <div className="lg:col-span-8" ref={projectsContainerRef}>
            {/* Reduced space-y for tighter card layout */}
            <div className="space-y-24 md:space-y-32 relative z-[5]">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-card-trigger group relative`} // Added group for hover effects on image
                  ref={(el) => { projectCardRefs.current[index] = el; }}
                >
                  <div 
                    className={`relative flex flex-col rounded-2xl md:rounded-3xl overflow-hidden h-[500px] md:h-[600px] transition-all duration-300 ease-in-out border shadow-xl hover:shadow-2xl ${project.bgColor || 'bg-gray-900/50'}`}
                    style={{
                       borderColor: activeProject === index ? `${getProjectAccentColor(index)}40` : 'rgba(55, 65, 81, 0.6)', // Tailwind gray-700 equivalent with opacity
                       boxShadow: activeProject === index ? `0 0 45px -5px ${getProjectAccentColor(index)}1A, 0 0 20px -10px ${getProjectAccentColor(index)}15` : '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', // Softer shadow for non-active
                    }}
                  >
                    {/* Optional: subtle inner gradient overlay if needed */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 z-[1]"></div> */}
                    
                    <div className="p-6 md:p-8 z-[2] flex-grow flex flex-col justify-start">
                      <div className="flex items-start justify-between mb-4">
                        <p className="text-xl md:text-2xl text-white/95 font-medium leading-snug max-w-[calc(100%-3rem)]">
                          {project.shortDesc}
                        </p>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 mt-1 flex-shrink-0 transition-colors group-hover:text-white/80" />
                      </div>
                    </div>

                    <div className="relative z-[2] mt-auto px-3 pb-3 md:px-4 md:pb-4">
                      <div 
                        className={`relative w-[90%] mx-auto aspect-[4/3] md:aspect-[5/4] rounded-lg md:rounded-xl overflow-hidden shadow-xl border border-white/10`}
                        style={{boxShadow: `0 10px 30px -10px ${getProjectAccentColor(index)}2A`}}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                        />
                        {project.hoverImage && (
                          <img
                            src={project.hoverImage}
                            alt={`${project.title} hover preview`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                          />
                        )}
                      </div>
                    </div>ª
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="lg:col-span-4 h-auto" // Height will be managed by pinned content
            ref={detailsRef} // This outer div is now the pinned element
          >
             {/* Content that gets pinned */}
            <div className="space-y-4 pt-0 pb-4"> {/* Removed sticky positioning as ScrollTrigger handles it */}
              <AnimatePresence mode='wait'>
                {projects.length > 0 && activeProject < projects.length && (
                  <motion.div
                    key={projects[activeProject].id} // Use project ID for reliable key
                    initial={{ opacity: 0.5, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }} // Smoother ease
                    className="flex flex-col pt-0 mt-0"
                  >
                    <div className="flex items-center gap-3.5 mb-4 pt-0">
                      <div className="h-1 w-12 rounded-full" style={{ backgroundColor: getProjectAccentColor(activeProject) }}></div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: getProjectAccentColor(activeProject) }}>
                        {projects[activeProject].title}
                      </h3>
                    </div>
                    
                    <p className="text-white/75 mb-7 text-base md:text-lg leading-relaxed">
                      {projects[activeProject].description}
                    </p>
                    
                    <div className="mb-7 space-y-3">
                      {projects[activeProject].features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3.5">
                          <span className="text-xl font-semibold leading-tight" style={{color: getProjectAccentColor(activeProject)}}>+</span>
                          <p className="text-white/80 text-sm md:text-base">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                       <h4 className="text-sm font-medium mb-4 text-white/60 tracking-wider">TECHNOLOGIES UTILISÉES</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {projects[activeProject].tags.map((tag) => (
                          <span key={tag} className="px-3.5 py-2 bg-gray-500/10 border border-gray-500/20 rounded-lg text-xs font-medium text-white/70 tracking-wide shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      {(projects[activeProject]?.demoUrl && projects[activeProject]?.demoUrl !== '#') && (
                        <Button 
                          style={{ 
                            backgroundColor: getProjectAccentColor(activeProject), 
                            boxShadow: `0 4px 14px -2px ${getProjectAccentColor(activeProject)}50`
                          }} 
                          className={`hover:opacity-90 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                          asChild
                        >
                          <Link href={projects[activeProject].demoUrl!} target="_blank" rel="noopener noreferrer">
                            Voir le Projet <ExternalLink className="w-4 h-4 ml-2.5" />
                          </Link>
                        </Button>
                      )}
                      {(projects[activeProject]?.githubUrl && projects[activeProject]?.githubUrl !== '#') && (
                        <Button 
                          variant="outline" 
                          className="border-gray-700/80 hover:border-gray-600 bg-black/20 hover:bg-gray-800/40 text-white/70 hover:text-white/90 font-medium text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link href={projects[activeProject].githubUrl!} target="_blank" rel="noopener noreferrer">
                            Code Source <Github className="w-4 h-4 ml-2.5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}