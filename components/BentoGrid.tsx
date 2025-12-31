'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, FileText } from 'lucide-react';
import Image from 'next/image';
import { Globe } from '@/components/ui/globe';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Marquee } from '@/components/ui/marquee';
import TechBadge from './TechBadge';

// --- Collaboration Card Component ---
function CollaborationCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 sm:p-6 md:p-10 shadow-2xl backdrop-blur-xl" ref={containerRef}>
            {/* Title at top */}
            <div className="absolute top-4 sm:top-6 left-0 right-0 text-center z-20">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-light">
                    Du problème au système
                </h3>
            </div>
            
            <div className="flex size-full flex-col max-w-md max-h-[140px] sm:max-h-[180px] items-stretch justify-between gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div1Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(255,255,255,0.9)]">
                        <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div ref={div5Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-900/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(168,85,247,0.9)]">
                        <svg className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div2Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(255,255,255,0.9)]">
                        <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                    </div>
                    <div ref={div6Ref} className="z-10 flex size-16 sm:size-20 items-center justify-center rounded-full border-2 border-purple-500/50 bg-white backdrop-blur-xl p-3 sm:p-4 shadow-[0_0_24px_-8px_rgba(168,85,247,0.9)]">
                        <Image src="/logo/smartscaling-logo.png" alt="SmartScaling" width={56} height={56} className="object-contain" />
                    </div>
                    <div ref={div4Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-900/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(168,85,247,0.9)]">
                        <svg className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div3Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(255,255,255,0.9)]">
                        <svg className="text-white w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    <div ref={div7Ref} className="z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 border-purple-500/40 bg-purple-900/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_0_20px_-8px_rgba(168,85,247,0.9)]">
                        <svg className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} curvature={0} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} curvature={50} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} curvature={-50} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} curvature={0} />
            <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div6Ref} curvature={50} />

            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 text-center px-4">
                <p className="text-gray-400 text-xs sm:text-sm">
                    Problème métier → Système logiciel
                </p>
            </div>
        </div>
    );
}

// --- Technologies Card Component (with website preview) ---
function TechnologiesCard() {
    const coreTech = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL'];
    const toolsTech = ['SUPABASE', 'OPENAI', 'N8N', 'VERCEL', 'AWS'];

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-2xl backdrop-blur-xl pt-4 sm:pt-6 pb-4 group/card">
            <h3 className="text-white text-sm sm:text-base md:text-lg font-light mb-3 sm:mb-4 text-center leading-tight px-2">
                Les bons outils,<br />au service du résultat
            </h3>
            
            {/* Tech marquees */}
            <div className="flex w-full flex-col items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4 relative z-10 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s] [--gap:0.25rem] sm:[--gap:0.75rem]">
                    {coreTech.map((tech: string) => (
                        <div key={tech} className="scale-[0.55] sm:scale-[0.65] md:scale-100">
                            <TechBadge name={tech} />
                        </div>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] [--gap:0.25rem] sm:[--gap:0.75rem]">
                    {toolsTech.map((tech: string) => (
                        <div key={tech} className="scale-[0.55] sm:scale-[0.65] md:scale-100">
                            <TechBadge name={tech} />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Glow effect above browser mockup */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-24 sm:h-32 bg-gradient-to-t from-purple-500/20 via-purple-500/10 to-transparent blur-2xl pointer-events-none group-hover/card:from-purple-500/40 group-hover/card:via-purple-500/20 transition-all duration-500"></div>
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>

            {/* Browser mockup preview */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] translate-y-[15%] sm:translate-y-[20%] group-hover/card:translate-y-[8%] sm:group-hover/card:translate-y-[10%] transition-transform duration-500 ease-out">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl relative group-hover/card:border-white/20 transition-colors duration-300">
                    {/* Grid pattern inside browser */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Browser header with URL bar */}
                    <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a]/80 border-b border-white/5 relative z-10">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-[#2a2a2a] rounded-lg px-2 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
                                <svg className="w-2 h-2 sm:w-3 sm:h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="text-[9px] sm:text-[11px] text-white/70">miguelboka.dev</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Browser content */}
                    <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[200px] relative z-10">
                        <div className="text-center">
                            <h4 className="text-white text-base sm:text-2xl font-medium mb-0.5 sm:mb-1">Sites web qui</h4>
                            <h4 className="text-purple-400 text-xl sm:text-3xl font-semibold italic">marquent.</h4>
                        </div>
                        
                        <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-5">
                            <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gray-600 rounded"></div>
                            <div className="h-0.5 sm:h-1 w-8 sm:w-14 bg-gray-700 rounded"></div>
                        </div>
                        
                        <div className="hidden sm:flex gap-3 mt-6">
                            <button className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                                Commencer
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-6 py-2.5 bg-transparent text-gray-400 text-sm font-medium rounded-full border border-gray-600 hover:border-gray-400 hover:text-white transition-colors">
                                Détails
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Globe Card Component ---
function GlobeCard() {
    const [activeLocation, setActiveLocation] = React.useState<'montreal' | 'canada' | 'usa'>('montreal');
    
    const locations = {
        montreal: { name: 'Montréal, Canada', phi: 45.5017, theta: -73.5673 },
        canada: { name: 'Canada', phi: 56.1304, theta: -106.3468 },
        usa: { name: 'USA', phi: 37.0902, theta: -95.7129 },
    };

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-2xl backdrop-blur-xl pt-6 sm:pt-8 pb-6 sm:pb-0">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-light mb-2 text-center z-10 px-2">
                Flexible avec les<br />fuseaux horaires
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 z-10 px-2">
                <button 
                    onClick={() => setActiveLocation('montreal')}
                    className={`px-2 sm:px-3 py-1 rounded-full border text-xs flex items-center gap-1 sm:gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'montreal' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span className="text-white font-medium">Montréal</span>
                </button>
                <button 
                    onClick={() => setActiveLocation('canada')}
                    className={`px-2 sm:px-3 py-1 rounded-full border text-xs flex items-center gap-1 sm:gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'canada' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <span className="text-base">🇨🇦</span>
                    <span className="text-white font-medium">Canada</span>
                </button>
                <button 
                    onClick={() => setActiveLocation('usa')}
                    className={`px-2 sm:px-3 py-1 rounded-full border text-xs flex items-center gap-1 sm:gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'usa' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <span className="text-base">🇺🇸</span>
                    <span className="text-white font-medium">USA</span>
                </button>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] scale-100 sm:scale-110">
                <Globe className="w-full h-full opacity-100" targetPhi={locations[activeLocation].phi} />
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center z-10 px-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-zinc-900/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md border border-white/10">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span className="text-white font-medium">{locations[activeLocation].name}</span>
                </div>
            </div>
        </div>
    );
}

// --- Main Bento Grid Component ---
export default function BentoGrid() {
    return (
        <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6 bg-black z-10">
            {/* Gradient transition depuis Hero */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-black pointer-events-none z-0"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 relative z-10"
                    id="solutions"
                >
                    <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
                        Ce qu&apos;on construit
                    </p>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight px-4 max-w-4xl mx-auto">
                        Sites, apps, SaaS{' '}
                        <br className="sm:hidden" />
                        <span className="text-purple-400 italic">— conçus comme des systèmes</span>
                    </h2>
                </motion.div>

                {/* CSS Grid Layout - Asymmetric with scroll animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[320px] md:auto-rows-[380px]">

                    {/* Row 1, Col 1-2: Collaboration */}
                    <div className="md:col-span-2 md:row-span-1 h-full">
                        <CollaborationCard />
                    </div>

                    {/* Row 1-2, Col 3: Technologies (Spans 2 rows vertically on larger screens) */}
                    <div className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 h-full">
                        <TechnologiesCard />
                    </div>

                    {/* Row 2-3, Col 1: Solutions en production - Carousel dynamique */}
                    <div className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 h-full relative z-10">
                        <div className="h-full w-full flex flex-col rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-gradient-x pointer-events-none"></div>
                            
                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div
                                    className="absolute top-[20%] left-[10%] w-2 h-2 bg-purple-500/30 rounded-full blur-sm"
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <motion.div
                                    className="absolute top-[60%] right-[15%] w-3 h-3 bg-blue-500/30 rounded-full blur-sm"
                                    animate={{
                                        y: [0, 20, 0],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                />
                            </div>
                            
                            <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
                                <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-semibold">Solutions en production</span>
                                <span className="text-[10px] sm:text-xs text-purple-400 font-medium">4</span>
                            </div>

                            <div className="flex-1 flex items-center justify-center relative z-10 py-2">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full px-2">
                                    {/* SideQuest */}
                                    <motion.div 
                                        className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="relative">
                                            <motion.div 
                                                className="absolute inset-0 bg-purple-500/40 rounded-2xl blur-xl"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.4, 0.6, 0.4],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <motion.div 
                                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(139,92,246,0.5)]" 
                                                style={{ backgroundColor: '#8B5CF6' }}
                                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image src="/projects/sidequest-logo.png" alt="SideQuest" width={96} height={96} className="w-full h-full object-cover" />
                                            </motion.div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white text-xs sm:text-sm font-semibold">SideQuest</p>
                                            <p className="text-gray-500 text-[10px] sm:text-xs">Mobile App</p>
                                        </div>
                                    </motion.div>

                                    {/* Tracksy */}
                                    <motion.div 
                                        className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="relative">
                                            <motion.div 
                                                className="absolute inset-0 bg-yellow-400/40 rounded-2xl blur-xl"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.4, 0.6, 0.4],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.5,
                                                }}
                                            />
                                            <motion.div 
                                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(213,255,63,0.5)]" 
                                                style={{ backgroundColor: '#d5ff3f' }}
                                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image src="/projects/tracksy_icon.png" alt="Tracksy" width={96} height={96} className="w-full h-full object-cover" />
                                            </motion.div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white text-xs sm:text-sm font-semibold">Tracksy</p>
                                            <p className="text-gray-500 text-[10px] sm:text-xs">SaaS</p>
                                        </div>
                                    </motion.div>

                                    {/* MemoCall */}
                                    <motion.div 
                                        className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="relative">
                                            <motion.div 
                                                className="absolute inset-0 bg-white/40 rounded-2xl blur-xl"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0.5, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1,
                                                }}
                                            />
                                            <motion.div 
                                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(255,255,255,0.4)] bg-white"
                                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image src="/projects/memocall_icon.png" alt="MemoCall" width={96} height={96} className="w-full h-full object-cover" />
                                            </motion.div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white text-xs sm:text-sm font-semibold">MemoCall</p>
                                            <p className="text-gray-500 text-[10px] sm:text-xs">AI</p>
                                        </div>
                                    </motion.div>

                                    {/* CoreSync */}
                                    <motion.div 
                                        className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="relative">
                                            <motion.div 
                                                className="absolute inset-0 bg-purple-400/40 rounded-2xl blur-xl"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.4, 0.6, 0.4],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1.5,
                                                }}
                                            />
                                            <motion.div 
                                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(157,113,232,0.5)]" 
                                                style={{ backgroundColor: '#9D71E8' }}
                                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image src="/projects/coresyncLogo.png" alt="CoreSync" width={96} height={96} className="w-full h-full object-cover" />
                                            </motion.div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white text-xs sm:text-sm font-semibold">CoreSync</p>
                                            <p className="text-gray-500 text-[10px] sm:text-xs">Platform</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2, Col 2: Travaillons ensemble */}
                    <motion.div 
                        className="md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 h-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="h-full w-full flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 shadow-2xl backdrop-blur-xl text-center group hover:border-purple-500/30 transition-all relative overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                            </div>
                            <motion.div 
                                className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-4 shadow-lg relative z-10 border-2 border-purple-500/30"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image src="/miguelboka.jpg" alt="Miguel Boka" width={80} height={80} className="object-cover w-full h-full" style={{ objectFit: 'cover', aspectRatio: '1/1' }} />
                                </div>
                            </motion.div>
                            <h3 className="text-white text-xl font-light mb-1 leading-tight relative z-10">
                                Miguel Boka
                            </h3>
                            <p className="text-purple-400 text-sm mb-3 relative z-10">
                                Lead Architect & Fondateur
                            </p>
                            <p className="text-gray-500 text-xs mb-4 relative z-10 max-w-[200px]">
                                Architecte de systèmes, pas simple exécutant.
                            </p>
                            <motion.a
                                href="https://www.linkedin.com/in/miguel-boka-51b407223/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs hover:bg-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm shadow-lg relative z-10"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Se connecter</span>
                                <ArrowRight className="w-3 h-3" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Row 3, Col 2-3: Globe horizontal */}
                    <div className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 h-full">
                        <GlobeCard />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
