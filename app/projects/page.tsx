'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github } from 'lucide-react';
import TechBadge from '@/components/TechBadge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SmartButton } from '@/components/ui/smart-button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Mail, Linkedin, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  logo?: string;
  accentColor: string;
  year: string;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [, setHoveredProject] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { showToast, toastComponent } = useToast();
  const sectionRef = React.useRef<HTMLElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguel.boka@smartscaling.dev');
    showToast('Email copié dans le presse-papier!', 'success');
  };

  const projects: Project[] = [
    {
      id: 'sidequest',
      title: 'SideQuest',
      description: 'L\'app qui rend l\'organisation de sorties simple et rapide. Découvre des événements par catégories et région, sauvegarde tes lieux favoris, et reçois des recommandations "For You".',
      image: '/projects/sidequest-mockup.png',
      tags: ['REACT NATIVE', 'TYPESCRIPT', 'SUPABASE'],
      category: 'SaaS',
      demoUrl: 'https://testflight.apple.com/join/wPWFm761',
      githubUrl: '#',
      logo: '/projects/sidequest-logo.png',
      accentColor: '#8B5CF6',
      year: '2025'
    },
    {
      id: 'tracksy',
      title: 'Tracksy',
      description: 'SaaS de facturation automatique pour freelances. Suivi du temps, génération de factures, comptabilité intégrée.',
      image: '/projects/tracksy-landing.png',
      tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA', 'POSTGRESQL'],
      category: 'SaaS',
      demoUrl: 'https://tracksy.me',
      githubUrl: '#',
      logo: '/projects/tracksy_icon.png',
      accentColor: '#d5ff3f',
      year: '2025'
    },
    {
      id: 'memocall',
      title: 'MemoCall',
      description: 'Assistant IA qui transforme vos appels en actions concrètes. Transcription, résumé, to-do et pré-remplissage de documents.',
      image: '/projects/Memocall-landing.png',
      tags: ['NEXT.JS', 'TYPESCRIPT', 'OPENAI', 'SUPABASE', 'TWILIO'],
      category: 'SaaS',
      demoUrl: 'https://memocall.ai',
      githubUrl: '#',
      logo: '/projects/memocall_icon.png',
      accentColor: '#FFFFFF',
      year: '2025'
    },
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Plateforme SaaS avec agent IA pour centraliser vos processus. Agent IA pour interroger la base de connaissances interne.',
      image: '/projects/coresync.png',
      tags: ['NEXT.JS', 'FIRESTORE', 'N8N', 'OPENAI'],
      category: 'SaaS',
      demoUrl: 'https://coresync.vercel.app',
      githubUrl: '#',
      logo: '/projects/coresyncLogo.png',
      accentColor: '#9D71E8',
      year: '2024'
    },
    {
      id: 'nocasemtl',
      title: 'NoCaseMTL',
      description: 'Boutique de vêtements streetwear en ligne basée à Montréal. Plateforme e-commerce moderne avec design minimaliste.',
      image: '/projects/nocase1.png',
      tags: ['SHOPIFY', 'LIQUID', 'JAVASCRIPT'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: '#',
      logo: '/projects/nocaseLogo.png',
      accentColor: '#94949C',
      year: '2023'
    },
    {
      id: 'econome',
      title: 'EconoME',
      description: 'Application de gestion budgétaire personnelle pour suivre ses dépenses et économiser.',
      image: '/projects/economeDemo.jpg',
      tags: ['REACT', 'TYPESCRIPT', 'FIREBASE'],
      category: 'Web',
      demoUrl: '#',
      githubUrl: '#',
      logo: '/projects/economeLogo.png',
      accentColor: '#4CAF50',
      year: '2023'
    }
  ];

  const categories = ['all', 'SaaS', 'Mobile', 'IA', 'Web'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Hero Section - Harmonized with site identity */}
      <section className="relative pt-32 pb-20 px-6 bg-black">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-purple-900/5 to-transparent"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
              Mes Projets
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
              Une collection de produits{' '}
              <span className="text-purple-400 italic">en production</span>
            </h1>
          </motion.div>

          {/* Category Filter - Minimal & Harmonized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'all' ? 'Tous' : cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Netflix Style */}
      <section className="px-6 pb-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`transition-transform duration-500 group-hover:scale-105 ${project.id === 'sidequest' ? 'object-contain' : 'object-cover'}`}
                      />
                      {/* Hover image pour NoCaseMTL */}
                      {project.id === 'nocasemtl' && (
                        <Image
                          src="/projects/nocase2.png"
                          alt="NoCaseMTL hover"
                          fill
                          className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        />
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      
                      {/* Logo badge - design moderne sans bordure noire */}
                      {project.logo && (
                        <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl backdrop-blur-xl p-3 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          <Image
                            src={project.logo}
                            alt={project.title}
                            width={64}
                            height={64}
                            className="object-contain relative z-10"
                          />
                        </div>
                      )}

                      {/* Year badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-medium border border-white/10">
                        {project.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-3">
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <div className="flex-1">
                            <SmartButton
                              variant="action"
                              size="sm"
                              icon="external"
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full"
                            >
                              Voir le projet
                            </SmartButton>
                          </div>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${project.accentColor}15, transparent 70%)`
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">Aucun projet dans cette catégorie.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - New Contact Style */}
      <section ref={sectionRef} className="relative px-6 pb-32 pt-16 overflow-hidden">
        {/* Fluid background image with parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/bg-footer.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-16 h-16">
              <Image
                src="/logo/smartscaling-logo.png"
                alt="SmartScaling"
                fill
                className="object-contain opacity-90"
              />
            </div>
          </motion.div>

          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl md:text-6xl font-normal tracking-tight mb-2"
            >
              Du concept à la{' '}
              <span className="font-bold">création</span>
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-3xl md:text-5xl font-normal tracking-tight mb-10"
            >
              Faisons-le{' '}
              <span className="font-bold">ensemble!</span>
            </motion.h3>

            {/* CTA Button to open sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <AnimatedButton onClick={() => setIsSheetOpen(true)} variant="purple">
                    Me contacter
                  </AnimatedButton>
                </motion.div>
              </SheetTrigger>
              <SheetContent className="bg-black border-l border-white/10">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-white text-2xl font-light tracking-tight">
                    Choisissez votre{' '}
                    <span className="text-purple-400 italic">méthode de contact</span>
                  </SheetTitle>
                  <SheetDescription className="text-gray-400 mt-2">
                    Sélectionnez l&apos;option qui vous convient le mieux
                  </SheetDescription>
                </SheetHeader>
                
                {/* Availability message */}
                <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white font-medium mb-2">
                    SmartScaling — On construit, on livre.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Systèmes web & applications qui résolvent de vrais problèmes.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* Email */}
                  <button
                    onClick={() => {
                      handleCopyEmail();
                      setIsSheetOpen(false);
                    }}
                    className="group w-full p-6 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">Email</p>
                        <p className="text-sm text-gray-400">miguel.boka@smartscaling.dev</p>
                      </div>
                    </div>
                  </button>

                  {/* Calendly */}
                  <a
                    href="https://calendly.com/bokamiguel"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                    className="group block w-full p-6 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">Calendrier</p>
                        <p className="text-sm text-gray-400">Réserver un appel de 30 min</p>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/miguel-boka-51b407223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                    className="group block w-full p-6 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                        <Linkedin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">LinkedIn</p>
                        <p className="text-sm text-gray-400">Me connecter sur LinkedIn</p>
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/MrBigboka"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                    className="group block w-full p-6 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                        <Github className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">GitHub</p>
                        <p className="text-sm text-gray-400">Voir mes projets open source</p>
                      </div>
                    </div>
                  </a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Availability message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-white text-lg md:text-xl font-medium">
                Disponible pour nouveaux projets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {toastComponent}
      <Footer />
    </div>
  );
}
