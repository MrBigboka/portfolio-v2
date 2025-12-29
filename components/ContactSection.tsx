'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Copy, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/components/ui/Toast';

export default function ContactSection() {
  const { showToast, toastComponent } = useToast();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@miguelboka.dev');
    showToast('Email copié dans le presse-papier!', 'success');
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle purple glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto">
        {/* Header - sobre, pas marketing */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.3em] text-xs font-medium text-gray-500 mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight"
          >
            Discutons de votre{' '}
            <span className="text-purple-400 italic">prochain système</span>
          </motion.h2>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-3xl bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>
            
            {/* Header with photo and name */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/10"
              >
                <Image 
                  src="/profil.jpeg" 
                  alt="Miguel Boka" 
                  fill 
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </motion.div>
              
              <div className="text-center md:text-left flex-1">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-light text-white mb-2"
                >
                  Miguel Boka
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-gray-400 mb-4"
                >
                  Consultant & Développeur Web & Mobile
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-wrap justify-center md:justify-start gap-2"
                >
                  <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 border border-purple-500/20">
                    Consultant
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 border border-purple-500/20">
                    Full Stack
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 border border-purple-500/20">
                    UX/UI Design
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                    Montréal, QC
                  </span>
                </motion.div>
              </div>
            </div>
            
            {/* Main contact info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="mailto:contact@miguelboka.dev" 
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm truncate">contact@miguelboka.dev</p>
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-500/20 transition-all duration-200"
                  title="Copier l'email"
                >
                  <Copy size={14} className="text-gray-400" />
                </button>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href="https://calendly.com/bokamiguel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Calendar size={20} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">Calendrier</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white text-sm truncate">Prendre rendez-vous</p>
                    <ExternalLink size={12} className="text-gray-500 flex-shrink-0" />
                  </div>
                </div>
              </motion.a>
            </div>
            
            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <a 
                href="https://linkedin.com/in/miguelboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Linkedin size={20} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">LinkedIn</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white text-sm truncate">linkedin.com/in/miguelboka</p>
                    <ExternalLink size={12} className="text-gray-500 flex-shrink-0" />
                  </div>
                </div>
              </a>
              
              <a 
                href="https://github.com/MrBigboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-purple-500/10 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Github size={20} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-wider">GitHub</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white text-sm truncate">github.com/MrBigboka</p>
                    <ExternalLink size={12} className="text-gray-500 flex-shrink-0" />
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      {toastComponent}
    </section>
  );
}
