'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/components/ui/ProjectCard';
// import ProjectPlaceholder from '@/components/ui/ProjectPlaceholder';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

// Ensure GSAP plugins are registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Type étendu pour les projets avec les propriétés demoUrl et githubUrl
interface ExtendedProject extends Project {
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  // Exemple de projets avec images stock
  const projects: ExtendedProject[] = [
    {
      id: 'project1',
      title: 'Project 1',
      description: '',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop',
      tags: ['NEXT.JS'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: '#3a1e2e',
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: '',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop',
      tags: ['REACT'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: '#1e2a3a',
    },
    {
      id: 'project3',
      title: 'Project 3',
      description: '',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop',
      tags: ['PYTHON'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: '#2a1e3a',
    },
    {
      id: 'project4',
      title: 'Project 4',
      description: '',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
      tags: ['TYPESCRIPT'],
      link: '#',
      demoUrl: '#',
      githubUrl: '#',
      bgColor: '#3a1e2e',
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP ScrollTrigger once the component is mounted
  useEffect(() => {
    if (!containerRef.current || !projectsContainerRef.current || !detailsRef.current) return;

    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create a ScrollTrigger for each project item
    const projectItems = document.querySelectorAll('.project-item');

    // Pin the details section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 10%",
      end: "bottom bottom",
      pin: detailsRef.current,
      pinSpacing: false,
    });

    // Create a trigger for each project to update active state
    projectItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveProject(index),
        onEnterBack: () => setActiveProject(index),
      });
    });

    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 bg-[#101B2E] text-[#F7E3C5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section avec effet lumineux */}
        <SectionHeader 
          title="Projets Signature" 
          subtitle="RÉALISATIONS RÉCENTES" 
          accentWord="Signature" 
          align="center" 
        />

        {/* Grille de projets style carte */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-[#101B2E] border border-[#F7E3C5]/10 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Image du projet avec overlay */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B2E] via-transparent to-transparent z-10 opacity-80"></div>
                <div className="absolute inset-0 bg-[#B74134]/30 z-5 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-[#1a1d2d] to-[#0d0f17] w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/10">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6">
                {/* Tag */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B74134] bg-[#B74134]/10 px-3 py-1 rounded-full">
                    {project.tags?.[0] || 'WEB'}
                  </span>
                </div>
                
                {/* Titre */}
                <h3 className="text-xl font-bold mb-3 text-[#F7E3C5]">{project.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-[#F7E3C5]/70 mb-6 line-clamp-3">
                  {project.description || 'Plateforme développée avec Next.js, permettant le partage et l\'exploration d\'idées avec une performance optimale...'}
                </p>
                
                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-[#0F1729] text-[#F7E3C5]/80 rounded">{tag}</span>
                  ))}
                  {(!project.tags || project.tags.length === 0) && (
                    <>
                      <span className="text-xs px-2 py-1 bg-[#0F1729] text-[#F7E3C5]/80 rounded">Next.js</span>
                      <span className="text-xs px-2 py-1 bg-[#0F1729] text-[#F7E3C5]/80 rounded">React</span>
                      <span className="text-xs px-2 py-1 bg-[#0F1729] text-[#F7E3C5]/80 rounded">Tailwind CSS</span>
                    </>
                  )}
                </div>
                
                {/* Boutons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-1/2 py-2 rounded-lg bg-[#B74134] text-[#F7E3C5] hover:bg-[#D9A441] transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={14} className="mr-2" /> Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-1/2 py-2 rounded-lg bg-[#101B2E] border border-[#F7E3C5]/20 text-[#F7E3C5] hover:bg-[#0F1729] transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={14} className="mr-2" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Section cachée pour maintenir les références mais ne pas afficher l'ancien format */}
        <div className="hidden">
          <div ref={containerRef}></div>
          <div ref={projectsContainerRef}></div>
          <div ref={detailsRef}>
            <AnimatePresence mode='wait'>
              {projects.length > 0 && (
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {/* Project Title with Tech Tag */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B74134] mb-2 block">
                      {projects[activeProject]?.tags?.[0] || 'WEB'}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{projects[activeProject]?.title}</h3>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-white/80 mb-8 text-lg leading-relaxed">
                    {projects[activeProject]?.description || 'Une description détaillée du projet sera ajoutée ici. Ce texte est un exemple qui montre comment la description apparaîtra dans la section des détails du projet.'}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white/60 mb-4">Fonctionnalités clés</h4>
                    <div className="space-y-3 text-white/80">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B74134] mt-0.5 flex-shrink-0" />
                        <span>Interface utilisateur intuitive et réactive</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B74134] mt-0.5 flex-shrink-0" />
                        <span>Performance optimisée pour une expérience fluide</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B74134] mt-0.5 flex-shrink-0" />
                        <span>Architecture modulaire et maintenable</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white/60 mb-4">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject]?.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {projects[activeProject]?.demoUrl && (
                      <Button variant="default" className="bg-[#B74134] hover:bg-[#B74134]/80 text-[#F7E3C5]" asChild>
                        <Link href={projects[activeProject]?.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
                          Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                    {projects[activeProject]?.githubUrl && (
                      <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
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
