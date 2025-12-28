'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Clock } from 'lucide-react';
import { OpenAIIcon } from './icons/TechIcons';

export default function AboutFounder() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="uppercase tracking-[0.3em] text-xs font-medium text-gray-500 mb-4"
          >
            Le fondateur
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight"
          >
            Qui est derrière{' '}
            <span className="text-purple-400 italic">SmartScaling</span>
          </motion.h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect violet harmonieux */}
              <div className="absolute -inset-12 bg-gradient-to-br from-purple-500/15 via-violet-600/8 to-transparent rounded-full blur-3xl z-[1]"></div>
              
              {/* Photo container avec design uniforme */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 z-10 bg-gradient-to-br from-purple-900/5 to-transparent">
                <Image
                  src="/miguelboka.jpg"
                  alt="Miguel Boka - Fondateur SmartScaling"
                  fill
                  className="object-cover"
                />
              </div>
              
            </div>
          </motion.div>

          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo/smartscaling-logo.png"
                alt="SmartScaling"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-medium">
                  Miguel Boka
                </h3>
                <p className="text-purple-400 text-lg">
                  Fondateur & Lead Architect
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Développeur full-stack passionné depuis l&apos;âge de 15 ans, j&apos;ai fondé <span className="text-white">SmartScaling</span> pour aider les entreprises à transformer leurs idées en produits concrets qui tournent en production.
              </p>
              <p>
                Ma spécialité? <span className="text-white">L&apos;automatisation et l&apos;intelligence artificielle</span>. Je conçois des systèmes qui utilisent OpenAI, des workflows N8N, et des pipelines de données pour automatiser ce qui peut l&apos;être — et libérer du temps pour ce qui compte vraiment.
              </p>
              <p>
                Chaque projet SmartScaling passe par mes mains. Je m&apos;assure personnellement que le code est propre, l&apos;architecture scalable, et que le produit final dépasse vos attentes.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#412991]/20 flex items-center justify-center">
                  <OpenAIIcon className="text-[#10a37f]" size={20} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">OpenAI & LLMs</p>
                  <p className="text-gray-500 text-xs">Intégration IA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#EA4B71]/20 flex items-center justify-center">
                  <Image
                    src="https://cdn.simpleicons.org/n8n/EA4B71"
                    alt="N8N"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">N8N & Make</p>
                  <p className="text-gray-500 text-xs">Automatisation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">4+ ans</p>
                  <p className="text-gray-500 text-xs">Expérience</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/miguel-boka-51b407223/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/MrBigboka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
