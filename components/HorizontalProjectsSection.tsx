'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedButton } from '@/components/ui/animated-button';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  logo?: string;
  accentColor: string;
  bgGradient: string;
  status: string;
  category: string;
}

export default function HorizontalProjectsSection() {
  const projects: Project[] = [
    {
      id: 'sidequest',
      title: 'SideQuest',
      description: 'Organise tes sorties entre amis',
      image: '/projects/sidequest-mockup.png',
      tags: ['App', 'Social', 'Événements'],
      demoUrl: 'https://testflight.apple.com/join/wPWFm761',
      logo: '/projects/sidequest-logo.png',
      accentColor: '#8B5CF6',
      bgGradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
      status: 'Gratuit',
      category: 'MOBILE APP'
    },
    {
      id: 'memocall',
      title: 'MemoCall',
      description: 'Transforme tes appels en actions avec l\'IA',
      image: '/projects/Memocall-landing.png',
      tags: ['IA', 'Vocal', 'Automation'],
      demoUrl: 'https://memocall.ai',
      logo: '/projects/memocall_icon.png',
      accentColor: '#FFFFFF',
      bgGradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      status: 'Sur mesure',
      category: 'IA VOCALE'
    },
    {
      id: 'tracksy',
      title: 'Tracksy',
      description: 'Facturation automatique pour freelances',
      image: '/projects/tracksy-landing.png',
      tags: ['SaaS', 'Freelance', 'Facturation'],
      demoUrl: 'https://tracksy.me',
      logo: '/projects/tracksy_icon.png',
      accentColor: '#d5ff3f',
      bgGradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      status: '9$/mois',
      category: 'SAAS'
    },
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Base de connaissances + agent IA',
      image: '/projects/coresync.png',
      tags: ['IA', 'Knowledge Base', 'Enterprise'],
      demoUrl: 'https://coresync.vercel.app',
      logo: '/projects/coresyncLogo.png',
      accentColor: '#9D71E8',
      bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      status: 'Sur mesure',
      category: 'AGENT IA'
    }
  ];

  return (
    <section id="projects" className="relative py-32 text-white bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets</h2>
          <p className="text-gray-400 text-lg">Systèmes en production</p>
        </motion.div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden p-8 h-[450px] flex flex-col"
                style={{
                  background: project.bgGradient,
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)'
                }}
              >
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Image Preview */}
                  <div className="mt-auto mb-6 relative h-48 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.id === 'sidequest' ? 'object-contain' : ''}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Button */}
                  <Link href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <button className="w-full py-3 px-6 rounded-xl bg-black/30 hover:bg-black/50 backdrop-blur-xl border border-white/20 hover:border-white/30 text-white font-semibold transition-all duration-200">
                      Rejoindre la bêta
                    </button>
                  </Link>

                  {/* Price Tag */}
                  <div className="absolute top-8 right-8">
                    <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20">
                      <span className="text-white font-semibold text-sm">PRIX</span>
                      <span className="text-white font-bold text-base ml-2">{project.status}</span>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
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
