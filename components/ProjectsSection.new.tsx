'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Monitor } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Initialize GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Type pour les projets
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
  bgColor?: string;
  shortDesc?: string;
  features?: string[];
}

export default function ProjectsSection() {
  // Exemple de projets avec images stock
  const projects: ExtendedProject[] = [
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Un SaaS IA qui centralise la documentation, les processus internes et les outils de communication pour les grandes équipes. Avec son onboarding dynamique et son agent virtuel intelligent, CoreSync améliore la productivité et réduit les pertes de temps dans les entreprises.',
      image: '/projects/coresync.png',
      hoverImage: '/projects/coresync3.png',
      tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION', 'SHADCN UI', 'LLM', 'MAKE.COM', 'VERCEL'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'from-purple-900 to-purple-700',
      shortDesc: 'Centralisation intelligente des processus internes pour grandes équipes',
      features: [
        'Onboarding guidé avec animations et agent AI intégré',
        'Modules personnalisables : formation, RH, sécurité, documentation',
        'Recherche intelligente via LLM sur base de connaissances internes',
        'Automatisations possibles via Make (workflow internes)',
        'Interface moderne responsive pensée pour desktop et mobile'
      ]
    },
    {
      id: 'nocasemtl',
      title: 'NoCaseMTL',
      description: 'Boutique e-commerce streetwear Y2K conçue sur Shopify. NoCaseMTL propose une esthétique rétro et urbaine avec des visuels forts, un branding affirmé et une navigation mobile-first, le tout optimisé via des sections personnalisables.',
      image: '/projects/nocase1.png',
      hoverImage: '/projects/nocase2.png',
      tags: ['SHOPIFY', 'LIQUID', 'TAILWIND CSS', 'MOBILE-FIRST UX'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'from-gray-900 to-black',
      shortDesc: 'E-commerce streetwear Y2K avec esthétique rétro-urbaine et navigation mobile-first',
      features: [
        'Boutique Shopify avec gestion complète des collections',
        'Branding rétro-futuriste cohérent avec la mode Y2K',
        'Lookbook animé, filtres par tailles/styles, fiches produits soignées',
        'Version mobile optimisée pour l\'expérience utilisateur',
        'Paiements, inventaire et promotions automatisés via apps Shopify'
      ]
    },
    {
      id: 'econome',
      title: 'EconoME',
      description: 'Une application intelligente de gestion financière personnelle. L\'utilisateur connecte ses revenus et dépenses, et l\'IA génère des insights personnalisés, des graphiques clairs et des suggestions concrètes pour améliorer sa santé financière.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'LLM', 'PRISMA', 'POSTGRESQL', 'VERCEL'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: 'from-emerald-800 to-teal-600',
      shortDesc: 'Application IA de gestion financière avec insights personnalisés et suggestions concrètes',
      features: [
        'Dashboard dynamique avec visualisation des dépenses & revenus',
        'Génération d\'insights IA basés sur les transactions',
        'Conseils personnalisés (ex. : "Tu dépenses 22 % de plus en resto que le mois passé")',
        'Mode simulation pour estimer les économies potentielles',
        'Interface simple, épurée, motivante'
      ]
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fonction pour vérifier si un élément est visible dans la fenêtre
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Considérer qu'un élément est visible s'il occupe une portion significative de l'écran
    return (
      rect.top <= windowHeight * 0.6 &&
      rect.bottom >= windowHeight * 0.4
    );
  };
  
  // Mettre à jour le projet actif en fonction de la visibilité
  const updateActiveProject = () => {
    if (!projectRefs.current) return;
    
    for (let i = 0; i < projectRefs.current.length; i++) {
      const element = projectRefs.current[i];
      if (element && isElementInViewport(element)) {
        setActiveProject(i);
        break;
      }
    }
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Nettoyer les ScrollTriggers existants
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Configurer les écouteurs d'événements pour le défilement
    window.addEventListener('scroll', updateActiveProject);
    window.addEventListener('resize', updateActiveProject);
    
    // Appeler updateActiveProject au chargement initial
    updateActiveProject();
    
    // Configurer ScrollTrigger pour chaque projet
    projects.forEach((_, index) => {
      const projectRef = projectRefs.current[index];
      if (!projectRef) return;
      
      ScrollTrigger.create({
        trigger: projectRef,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveProject(index),
        onEnterBack: () => setActiveProject(index),
        markers: true, // Utile pour le débogage, à retirer en production
      });
    });
    
    return () => {
      // Nettoyer les écouteurs d'événements
      window.removeEventListener('scroll', updateActiveProject);
      window.removeEventListener('resize', updateActiveProject);
      
      // Nettoyer les ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 bg-transparent text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section avec effet lumineux */}
        <h2 className="text-2xl font-bold text-center mb-2 text-red-500">RÉALISATIONS RÉCENTES</h2>
        <h3 className="text-5xl font-bold text-center mb-24">Projets <span className="text-[#B74134]">Signature</span></h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Colonne de gauche: Liste des projets qui défilent */}
          <div className="lg:col-span-7" ref={projectsContainerRef}>
            <div className="space-y-[60vh]">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-item-${index}`}
                  ref={(el) => { projectRefs.current[index] = el; }}
                >
                  {/* Grande thumbnail du projet avec effet de hover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden border border-red-500 group">
                    {project.image ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        {project.hoverImage && (
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                            <img 
                              src={project.hoverImage} 
                              alt={`${project.title} - Vue alternative`} 
                              className="object-cover w-full h-full transition-transform duration-700 scale-105"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gray-800">
                        <Monitor className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Colonne de droite: Détails du projet actif (immobile) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-auto" ref={detailsRef}>
            <AnimatePresence mode='wait'>
              {projects.length > 0 && (
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="text-3xl font-bold mb-2">{projects[activeProject].title}</h3>
                  
                  {/* Short description */}
                  <p className="text-lg text-white/80 mb-6">{projects[activeProject].shortDesc}</p>
                  
                  {/* Full description */}
                  <p className="text-white/70 mb-8">{projects[activeProject].description}</p>
                  
                  {/* Features list */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Fonctionnalités clés</h4>
                    <ul className="space-y-2">
                      {projects[activeProject].features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#B74134] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies used */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-auto pt-4">
                    {projects[activeProject]?.demoUrl && (
                      <Button variant="default" className="bg-[#B74134] hover:bg-[#B74134]/80 text-white border-0" asChild>
                        <Link href={projects[activeProject]?.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
                          Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                    {projects[activeProject]?.githubUrl && (
                      <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white" asChild>
                        <Link href={projects[activeProject]?.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
                          Code Source <Github className="w-4 h-4 ml-2" />
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
    </section>
  );
}
