'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionHeader from '@/components/ui/SectionHeader';
import TechBadge from './TechBadge';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';

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
  logo?: string;
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
      description: 'Un SaaS IA qui centralise documentation, processus internes et outils de communication pour grandes équipes. Améliore productivité et réduit pertes de temps grâce à son agent virtuel intelligent.',
      image: '/projects/coresync.png',
      hoverImage: '/projects/coresync3.png',
      tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'SHADCN UI', 'FIRESTORE', 'N8N', 'VERCEL'],
      demoUrl: 'https://coresync.vercel.app', // URL du site CoreSync
      githubUrl: '#', // Replace with actual URL or remove if not applicable
      bgColor: 'bg-gradient-to-br from-[#5D3A8E]/80 via-[#3E1A6E]/60 to-[#5D3A8E]/30',
      shortDesc: 'Plateforme SaaS IA centralisant documentation et processus pour grandes équipes.',
      features: [
        'Onboarding guidé avec animations et agent AI intégré',
        'Modules personnalisables : formation, RH, sécurité, documentation',
        'Recherche intelligente via LLM sur base de connaissances internes',
        'Automatisations possibles via Make (workflow internes)',
        'Interface moderne responsive pensée pour desktop et mobile'
      ],
      accentColor: '#9D71E8', // Mauve
      logo: '/projects/coresyncLogo.png'
    },
    {
      id: 'nocasemtl',
      title: 'NoCaseMTL',
      description: 'Boutique e-commerce streetwear Y2K sur Shopify. Esthétique rétro urbaine, visuels forts et navigation mobile-first optimisée via sections personnalisables.',
      image: '/projects/nocase1.png',
      hoverImage: '/projects/nocase2.png',
      tags: ['SHOPIFY', 'TAILWIND CSS'],
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#2A2A2A]/80 via-[#1A1A1A]/60 to-[#2A2A2A]/30',
      shortDesc: 'E-commerce streetwear Y2K au branding affirmé et navigation mobile-first.',
      features: [
        'Boutique Shopify avec gestion complète des collections',
        'Branding rétro-futuriste cohérent avec la mode Y2K',
        'Lookbook animé, filtres par tailles/styles, fiches produits soignées',
        'Version mobile optimisée pour l\'expérience utilisateur',
        'Paiements, inventaire et promotions automatisés via apps Shopify'
      ],
      accentColor: '#94949C', // Gris-noir
      logo: '/projects/nocaseLogo.png'
    },
    {
      id: 'econome',
      title: 'EconoME',
      description: 'Application IA de gestion financière personnelle. Connecte revenus et dépenses pour générer insights personnalisés et suggestions concrètes via visualisations claires.',
      image: '/projects/economeDemo.jpg',
      hoverImage: '/projects/economeDemo.jpg',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'FIRESTORE', 'SUPABASE', 'VERCEL'],
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'bg-gradient-to-br from-[#1A3E2A]/80 via-black/60 to-[#1A3E2A]/30',
      shortDesc: 'Application IA de gestion financière avec insights personnalisés et graphiques clairs.',
      features: [
        'Dashboard dynamique avec visualisation des dépenses & revenus',
        'Génération d\'insights IA basés sur les transactions',
        'Conseils personnalisés (ex. : "Tu dépenses 22 % de plus en resto que le mois passé")',
        'Mode simulation pour estimer les économies potentielles',
        'Interface simple, épurée, motivante'
      ],
      accentColor: '#10B981', // Green
      logo: '/projects/economeLogo.png'
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
    if (!sectionRef.current || !projectsContainerRef.current || !detailsRef.current) return;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill existing triggers

    // Créer un point d'arrêt pour le défilement à la fin de la section
    const pinExitTrigger = document.createElement('div');
    pinExitTrigger.style.height = '1px';
    pinExitTrigger.style.width = '100%';
    pinExitTrigger.style.position = 'absolute';
    pinExitTrigger.style.bottom = '0';
    pinExitTrigger.style.left = '0';
    pinExitTrigger.style.zIndex = '-1';
    
    // Stockage de la référence pour le nettoyage
    const sectionRefCurrent = sectionRef.current;
    sectionRefCurrent.appendChild(pinExitTrigger);
    
    // Pin the right column with a defined end point
    ScrollTrigger.create({
      trigger: sectionRefCurrent,
      start: "top top",
      end: "bottom center", // S'arrête exactement quand la section suivante apparaît
      pin: detailsRef.current,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
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
      });
    });
    
    // Ensure ScrollTrigger refreshes on dynamic content changes
    ScrollTrigger.refresh();

    return () => {
      if (sectionRefCurrent && pinExitTrigger.parentNode === sectionRefCurrent) {
        sectionRefCurrent.removeChild(pinExitTrigger);
      }
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

  useEffect(() => {
    if (typeof window !== 'undefined' && projectsContainerRef.current && detailsRef.current) {
      // Animation pour l'entrée initiale de la section
      gsap.timeline({
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: 'top 80%', // Start when the top of the projects section hits 80% from the top of the viewport
          end: 'bottom 20%', // End when the bottom of the projects section hits 20% from the top of the viewport
          toggleActions: 'play none none reverse'
        }
      });
      
      // Create a separate ScrollTrigger for pinning the details section
      ScrollTrigger.create({
        trigger: detailsRef.current,
        start: "top 20%",  // Commence quand le haut de la section atteint 20% depuis le haut du viewport
        endTrigger: projectsContainerRef.current,
        end: 'bottom 80%', // End pinning when the bottom of the projects section hits 80% from the top of the viewport
        pin: true,
        pinSpacing: false,
        markers: false // Set to true for debugging
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const goToProjectURL = (url: string | undefined) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-16 md:py-20 pb-32 md:pb-40 text-white overflow-hidden min-h-screen" 
      style={{ position: 'relative', isolation: 'isolate', backgroundColor: '#101B2E' }}
    >
      {/* Animated background using the new GlobalAnimatedBackground component */}
      <GlobalAnimatedBackground sectionId="projects-section" opacity={0.5} />
      
      {/* Div de séparation pour bloquer le contenu et éviter le chevauchement */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#101B2E] z-[100]"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={projectsContainerRef}>
        <SectionHeader 
          title="Mes Projets" 
          subtitle="RÉALISATIONS RÉCENTES"
          accentWord="Projets"
          titleClassName="text-white"
          align="center" 
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mt-8 mb-16">
          
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
                       backgroundColor: '#0E1A2B', /* Fond opaque bleu nuit conforme à la palette */
                       position: 'relative',
                       zIndex: 200, /* Z-index très élevé pour passer au-dessus de l'AnimatedBackground */
                       isolation: 'isolate', /* Propriété CSS moderne pour isoler le contexte d'empilement */
                       backdropFilter: 'none', /* Désactive tout effet de filtre qui pourrait causer de la transparence */
                       borderColor: project.id === 'coresync' ? '#dea9ff' : project.id === 'nocasemtl' ? '#d9d9df' : '#a5ebd1',
                       boxShadow: activeProject === index 
                         ? `0 0 45px -5px ${project.id === 'coresync' ? '#dea9ff80' : project.id === 'nocasemtl' ? '#d9d9df80' : '#a5ebd180'}, 0 0 20px -10px ${project.id === 'coresync' ? '#dea9ff60' : project.id === 'nocasemtl' ? '#d9d9df60' : '#a5ebd160'}` 
                         : `0 4px 15px -1px ${project.id === 'coresync' ? '#dea9ff30' : project.id === 'nocasemtl' ? '#d9d9df30' : '#a5ebd130'}`,
                       maxHeight: '600px' /* Hauteur maximale fixe */
                    }}
                    onClick={() => project.demoUrl && project.demoUrl !== '#' ? goToProjectURL(project.demoUrl) : null}
                  >
                    {/* Multiple solid background layers to ensure complete opacity */}
                    <div className="absolute inset-0 bg-black z-[101]"></div>
                    <div className="absolute inset-0 bg-[#0E1A2B] z-[102]"></div>
                    <div className="absolute inset-0 z-[103]" style={{
                      background: project.id === 'coresync' 
                        ? 'linear-gradient(135deg, #1a0d2c 0%, #0d0616 100%)'
                        : project.id === 'nocasemtl'
                        ? 'linear-gradient(135deg, #1e1e1e 0%, #0d0d0d 100%)'
                        : 'linear-gradient(135deg, #0c1e14 0%, #07130d 100%)'
                    }}></div>
                    {/* Extra opaque overlay to ensure no transparency */}
                    <div className="absolute inset-0 bg-[#060c18]/95 mix-blend-normal z-[104]"></div>
                    
                    <div className="p-6 md:p-8 z-[105] flex-grow flex flex-col justify-start mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <p 
                          className="text-xl md:text-2xl font-medium leading-snug max-w-[calc(100%-3rem)]"
                          style={{ color: project.id === 'coresync' ? '#dea9ff' : project.id === 'nocasemtl' ? '#d9d9df' : '#a5ebd1' }} // Couleur pâle correspondant au thème
                        >
                          {project.shortDesc}
                        </p>
                        <ArrowRight 
                          className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0 transition-colors"
                          style={{ color: project.id === 'coresync' ? '#dea9ff' : project.id === 'nocasemtl' ? '#d9d9df' : '#a5ebd1' }} // Couleur pâle correspondant au thème
                        />
                      </div>
                    </div>

                    <div className="relative z-[105] mt-auto px-3 pb-3 md:px-4 md:pb-4">
                      {/* Lueur thématique derrière la miniature */}
                      <div 
                        className="absolute inset-0 w-[95%] mx-auto aspect-[4/3] md:aspect-[5/4] rounded-3xl blur-2xl z-[1] transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:rotate-1"
                        style={{ background: project.id === 'coresync' ? 'linear-gradient(to bottom right, #dea9ff, #9D71E8)' : project.id === 'nocasemtl' ? 'linear-gradient(to bottom right, #d9d9df, #94949C)' : 'linear-gradient(to bottom right, #a5ebd1, #10B981)' }}
                      ></div>
                      <div 
                        className={`relative w-[90%] mx-auto aspect-[4/3] md:aspect-[5/4] rounded-lg md:rounded-xl overflow-hidden shadow-xl border border-white/10 z-[106] bg-black transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:rotate-1`}
                        style={{boxShadow: project.id === 'coresync' ? '0 10px 30px -5px rgba(222, 169, 255, 0.4), 0 0 15px -5px rgba(222, 169, 255, 0.5)' : project.id === 'nocasemtl' ? '0 10px 30px -5px rgba(217, 217, 223, 0.4), 0 0 15px -5px rgba(217, 217, 223, 0.5)' : '0 10px 30px -5px rgba(165, 235, 209, 0.4), 0 0 15px -5px rgba(165, 235, 209, 0.5)'}}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 ease-out"
                          width={600}
                          height={450}
                        />
                        {project.hoverImage && project.id !== 'coresync' && (
                          <Image
                            src={project.hoverImage}
                            alt={`${project.title} hover preview`}
                            className="absolute inset-0 w-full h-full object-cover hidden group-hover:block transition-all duration-500 ease-out"
                            width={600}
                            height={450}
                          />
                        )}
                      </div>
                    </div>ª
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Version desktop: détails épinglés */}
          <div 
            className="hidden lg:block lg:col-span-4 h-auto" // Height will be managed by pinned content
            ref={detailsRef} // This outer div is now the pinned element
          >
             {/* Content that gets pinned */}
            <div className="space-y-4 pt-0 pb-4"> {/* Removed sticky positioning as ScrollTrigger handles it */}
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
                      className="flex items-center mb-6 pt-0 gap-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1, delay: 0.02 }}
                      data-component-name="MotionComponent"
                    >
                      {/* Logo à gauche avec contour de la couleur thématique */}
                      {projects[activeProject].logo && (
                        <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
                          {/* Fond lumineux derrière le logo */}
                          <div className="absolute -inset-1.5 rounded-xl opacity-20" 
                               style={{ background: `radial-gradient(circle, ${getProjectAccentColor(activeProject)} 0%, transparent 70%)` }}
                          ></div>
                          
                          {/* Contour coloré autour du logo */}
                          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl overflow-hidden p-2"
                               style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: getProjectAccentColor(activeProject), backgroundColor: '#0E1A2B' }}
                          >
                            <Image 
                              src={projects[activeProject].logo!} 
                              alt={`${projects[activeProject].title} logo`} 
                              className="w-full h-full object-contain drop-shadow-md"
                              width={80}
                              height={80}
                              style={{ filter: `drop-shadow(0 0 5px ${getProjectAccentColor(activeProject)}40)` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Titre à droite */}
                      <div className="flex-grow">
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
                          {projects[activeProject].title}
                        </h3>
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
                          className="border-gray-700/80 hover:border-gray-600 bg-black/20 hover:bg-gray-800/40 text-white/70 hover:text-white/90 font-medium text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
        
        {/* Version mobile: affichage en cards comme dans la capture d'écran */}
        <div className="lg:hidden mt-8">
          <div className="space-y-24">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-[#0E1A2B] flex flex-col shadow-2xl border-2 ${project.demoUrl && project.demoUrl !== '#' ? 'cursor-pointer' : ''}`}
                style={{
                  borderColor: project.id === 'coresync' ? '#9D71E8' : project.id === 'nocasemtl' ? '#94949C' : '#10B981',
                  boxShadow: `0 10px 30px -5px ${project.id === 'coresync' ? 'rgba(157, 113, 232, 0.3)' : project.id === 'nocasemtl' ? 'rgba(148, 148, 156, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => project.demoUrl && project.demoUrl !== '#' ? goToProjectURL(project.demoUrl) : null}
              >
                {/* Image du projet */}
                {/* Thumbnail */}
                <div className="h-[400px] relative overflow-hidden bg-[#0E1A2B]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-6 bg-[#0E1A2B]"
                >
                  {/* En-tête avec logo et titre */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {project.logo && (
                        <div className="w-12 h-12 rounded-full bg-black/30 p-2 flex items-center justify-center relative flex-shrink-0">
                          <Image 
                            src={project.logo} 
                            alt={`${project.title} logo`}
                            className="w-full h-full object-contain" 
                            width={48}
                            height={48}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p 
                          className="text-base leading-relaxed"
                          style={{ color: project.id === 'coresync' ? '#dea9ff' : project.id === 'nocasemtl' ? '#d9d9df' : '#a5ebd1' }}
                        >
                          {project.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight 
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: project.id === 'coresync' ? '#9D71E8' : project.id === 'nocasemtl' ? '#94949C' : '#10B981' }}
                    />
                  </div>
                  
                  {/* Technologies utilisées */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <TechBadge key={`mobile-${project.id}-${tag}`} name={tag} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}