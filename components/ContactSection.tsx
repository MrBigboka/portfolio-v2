'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, Calendar, Phone, MapPin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';
import Image from 'next/image';
import Toast, { useToast } from '@/components/ui/Toast';

export default function ContactSection() {
  const { showToast, toastComponent } = useToast();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@miguelboka.dev');
    showToast('Email copié dans le presse-papier!', 'success');
  };

  return (
    <section className="relative z-10 min-h-screen pt-32 pb-24 px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#101B2E' }}>
      {/* Animated background avec les particules */}
      <GlobalAnimatedBackground sectionId="contact-section" opacity={0.8} />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#D9A441]/20 to-[#B74134]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#F7E3C5]/20 to-[#D9A441]/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Me Contacter" 
          subtitle="ÉCHANGEONS" 
          accentWord="Contacter" 
          align="center" 
        />
        
        <div className="mt-16 flex flex-col items-center">
          {/* Carte de contact principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-3xl bg-gradient-to-b from-[#0B1221] to-[#0A0F1A] backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Éléments décoratifs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-[#D9A441]/10 to-[#B74134]/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-[#F7E3C5]/10 to-[#D9A441]/10 blur-3xl"></div>
            
            {/* En-tête avec photo et nom */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#D9A441]/30 shadow-lg shadow-[#D9A441]/10"
              >
                <Image 
                  src="/profil.jpeg" 
                  alt="Miguel Boka" 
                  fill 
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </motion.div>
              
              <div className="text-center md:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  Miguel Boka
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-lg text-[#F7E3C5]/80 mb-4"
                >
                  Consultant & Développeur Web & Mobile
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-wrap justify-center md:justify-start gap-3"
                >
                  <span className="px-3 py-1 bg-[#D9A441]/20 rounded-full text-sm text-[#F7E3C5] border border-[#D9A441]/30">
                    Consultant
                  </span>
                  <span className="px-3 py-1 bg-[#B74134]/20 rounded-full text-sm text-[#F7E3C5] border border-[#B74134]/30">
                    Full Stack
                  </span>
                  <span className="px-3 py-1 bg-[#F7E3C5]/20 rounded-full text-sm text-[#F7E3C5] border border-[#F7E3C5]/30">
                    UX/UI Design
                  </span>
                  <span className="px-3 py-1 bg-[#0A1220]/40 rounded-full text-sm text-[#F7E3C5] border border-[#F7E3C5]/30">
                    Montréal, QC
                  </span>
                </motion.div>
              </div>
            </div>
            
            {/* Informations de contact principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="mailto:contact@miguelboka.dev" 
                className="group flex items-center gap-4 p-5 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Mail size={24} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#D9A441] text-sm font-medium">Email</p>
                  <p className="text-white font-medium">contact@miguelboka.dev</p>
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200"
                  title="Copier l'email"
                >
                  <Copy size={14} className="text-white/70" />
                </button>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href="https://calendly.com/miguelboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Calendar size={24} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">Calendrier</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white font-medium">Prendre rendez-vous</p>
                    <ExternalLink size={14} className="text-white/60" />
                  </div>
                </div>
              </motion.a>
            </div>
            
            {/* Réseaux sociaux */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <a 
                href="https://linkedin.com/in/miguelboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Linkedin size={24} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">LinkedIn</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white font-medium">linkedin.com/in/miguelboka</p>
                    <ExternalLink size={14} className="text-white/60" />
                  </div>
                </div>
              </a>
              
              <a 
                href="https://github.com/MrBigboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Github size={24} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">GitHub</p>
                  <div className="flex items-center gap-1">
                    <p className="text-white font-medium">github.com/MrBigboka</p>
                    <ExternalLink size={14} className="text-white/60" />
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Message d'invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center max-w-2xl"
          >
            <p className="text-[#F7E3C5] text-lg md:text-xl mb-6">
              Vous avez un projet en tête ou vous souhaitez simplement échanger ? <br className="hidden md:block" />
              N&apos;hésitez pas à me contacter, je serai ravi de discuter avec vous.
            </p>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-[#D9A441] to-[#B74134] hover:from-[#B74134] hover:to-[#D9A441] text-white font-medium py-6 px-8 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-[#D9A441]/20 hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              <a href="mailto:contact@miguelboka.dev">
                <span>Envoyez-moi un email</span>
                <Mail size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      {toastComponent}
    </section>
  );
}
