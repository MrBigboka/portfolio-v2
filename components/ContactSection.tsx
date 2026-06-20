'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, Calendar, Copy, Sparkles } from 'lucide-react';
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax: le fond bouge plus vite que le contenu, qui dérive doucement vers le haut
  const bgY = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  const glowY = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguel.boka@smartscaling.dev');
    showToast('Email copié!', 'success');
  };

  const channels: {
    id: string;
    icon: React.ElementType;
    label: string;
    value: string;
    accent: string;
    accentRgb: string;
    href?: string;
    action?: 'copy';
    featured?: boolean;
  }[] = [
    {
      id: 'calendar',
      icon: Calendar,
      label: 'Réserver un appel',
      value: 'Discutons 30 min de ton projet',
      accent: '#34d399',
      accentRgb: '52, 211, 153',
      href: 'https://calendly.com/bokamiguel',
      featured: true,
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'miguel.boka@smartscaling.dev',
      accent: '#a855f7',
      accentRgb: '168, 85, 247',
      action: 'copy' as const,
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connectons-nous',
      accent: '#38bdf8',
      accentRgb: '56, 189, 248',
      href: 'https://www.linkedin.com/in/miguel-boka-51b407223/',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'Mes projets open source',
      accent: '#e4e4e7',
      accentRgb: '228, 228, 231',
      href: 'https://github.com/MrBigboka',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative z-10 py-32 px-6 overflow-hidden bg-black">
      {/* Background image with parallax - oversized so edges never show while translating */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -inset-y-[20%] inset-x-0 pointer-events-none will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-footer.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
      </motion.div>

      {/* Parallax glow accent that drifts opposite to the background */}
      <motion.div
        style={{ y: glowY }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] pointer-events-none will-change-transform"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)]" />
      </motion.div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
      
      {/* Gradient transitions for smooth section separation */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
      
      <motion.div style={{ y: contentY }} className="max-w-4xl mx-auto relative z-10 will-change-transform">
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
            <SheetContent className="bg-zinc-950 border-l border-white/10 overflow-y-auto p-0">
              {/* Ambient glow at the top of the panel */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.22),transparent_70%)]" />

              <div className="relative p-6">
                <SheetHeader className="p-0 mb-6">
                  {/* Availability pill */}
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-medium text-emerald-300">Disponible pour de nouveaux projets</span>
                  </div>

                  <SheetTitle className="text-white text-2xl font-light tracking-tight">
                    On{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold italic">construit ton projet</span>
                    {' '}ensemble
                  </SheetTitle>
                  <SheetDescription className="text-gray-400 mt-2">
                    Choisis le canal qui te convient — je réponds vite.
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-3">
                  {channels.map((channel, index) => {
                    const Icon = channel.icon;

                    const inner = (
                      <>
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{ background: `radial-gradient(120% 120% at 0% 0%, rgba(${channel.accentRgb}, 0.16), transparent 60%)` }}
                        />
                        <div className="relative flex items-center gap-4">
                          {/* Icon tile */}
                          <div
                            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                            style={{ background: `rgba(${channel.accentRgb}, 0.12)`, border: `1px solid rgba(${channel.accentRgb}, 0.25)` }}
                          >
                            <div
                              className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
                              style={{ background: `rgba(${channel.accentRgb}, 0.45)` }}
                            />
                            <Icon className="relative h-5 w-5" style={{ color: channel.accent }} />
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-white">{channel.label}</p>
                            <p className="truncate text-sm text-gray-400">{channel.value}</p>
                          </div>

                          {/* Arrow */}
                          <div
                            className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:scale-105"
                          >
                            {channel.action === 'copy' ? (
                              <Copy className="h-4 w-4 text-black" />
                            ) : (
                              <ArrowUpRight
                                className="h-4 w-4 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              />
                            )}
                          </div>
                        </div>
                      </>
                    );

                    const cardClass = `group relative block w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                      channel.featured
                        ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-400/[0.08] to-transparent hover:border-emerald-400/50'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`;

                    const style = { boxShadow: `0 0 0 0 rgba(${channel.accentRgb}, 0)` } as React.CSSProperties;

                    return (
                      <motion.div
                        key={channel.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 + index * 0.07, ease: 'easeOut' }}
                      >
                        {channel.action === 'copy' ? (
                          <button
                            onClick={() => {
                              handleCopyEmail();
                              setIsSheetOpen(false);
                            }}
                            className={cardClass}
                            style={style}
                          >
                            {inner}
                          </button>
                        ) : (
                          <a
                            href={channel.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsSheetOpen(false)}
                            className={cardClass}
                            style={style}
                          >
                            {inner}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer note */}
                <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Image src="/logo/smartscaling-logo.png" alt="SmartScaling" width={20} height={20} className="h-5 w-5 shrink-0 object-contain" />
                  <p className="text-sm text-gray-400">
                    <span className="text-white">SmartScaling</span> — du concept à la création.
                  </p>
                </div>
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
                Des solutions tech, adaptées à vos besoins.
              </p>
            </motion.div>
        </motion.div>
      </motion.div>
      {toastComponent}
    </section>
  );
}
