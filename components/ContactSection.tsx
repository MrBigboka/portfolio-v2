'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/Toast';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function ContactSection() {
  const { showToast, toastComponent } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguel.boka@smartscaling.dev');
    showToast('Email copié!', 'success');
  };

  return (
    <section ref={sectionRef} id="contact" className="relative z-10 py-32 px-6 overflow-hidden bg-black">
      {/* Background image - using img tag for better iOS compatibility */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
      
      {/* Gradient transitions for smooth section separation */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo SmartScaling - transparent */}
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
        <motion.div 
          className="text-center mb-12"
        >
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
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
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
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
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
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
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
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
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
              <p className="text-gray-400 text-sm md:text-base">
                Créons ensemble une plateforme qui convertit.
              </p>
            </motion.div>
        </motion.div>
      </div>
      {toastComponent}
    </section>
  );
}
