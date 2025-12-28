'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Briefcase, MapPin, FileText, Server, Code } from 'lucide-react';
import { AutomationIcon } from './icons/TechIcons';
import Image from 'next/image';
import { Globe } from '@/components/ui/globe';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Marquee } from '@/components/ui/marquee';
import TechBadge from './TechBadge';
import { LineShadowText } from './ui/line-shadow-text';
import { Ripple } from '@/components/ui/ripple';

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
                    De l&apos;idée à la production
                </h3>
            </div>
            
            <div className="flex size-full flex-col max-w-md max-h-[140px] sm:max-h-[180px] items-stretch justify-between gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div1Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 p-2 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]">
                        <FileText className="text-white w-4 h-4" />
                    </div>
                    <div ref={div5Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-purple-500/30 bg-purple-500/10 p-2 shadow-[0_0_20px_-12px_rgba(168,85,247,0.8)]">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.4850 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div2Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-purple-500/30 bg-purple-500/10 p-2 shadow-[0_0_20px_-12px_rgba(168,85,247,0.8)]">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                            <path d="M13.3 18.4c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm-6.4 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm12.8 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm-6.4-6.4c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm-6.4 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm12.8 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm-6.4-6.4c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm-6.4 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6zm12.8 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.7 1.6 1.6 1.6 1.6-.7 1.6-1.6z"/>
                        </svg>
                    </div>
                    <div ref={div6Ref} className="z-10 flex size-14 items-center justify-center rounded-full border-2 border-purple-500/40 bg-white p-2 shadow-[0_0_20px_-12px_rgba(168,85,247,0.8)]">
                        <Image src="/logo/smartscaling-logo.png" alt="SmartScaling" width={40} height={40} className="object-contain" />
                    </div>
                    <div ref={div4Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 p-2 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]">
                        <Server className="text-white w-4 h-4" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between px-4">
                    <div ref={div3Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 p-2 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]">
                        <Code className="text-white w-4 h-4" />
                    </div>
                    <div ref={div7Ref} className="z-10 flex size-10 items-center justify-center rounded-full border-2 border-purple-500/30 bg-purple-500/10 p-2 shadow-[0_0_20px_-12px_rgba(168,85,247,0.8)]">
                        <AutomationIcon className="text-purple-400" size={18} />
                    </div>
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div6Ref} />

            <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 text-center px-4">
                <p className="text-gray-400 text-xs sm:text-sm">
                    → AI & automatisation pour livrer plus vite
                </p>
            </div>
        </div>
    );
}

// --- Technologies Card Component (with website preview) ---
function TechnologiesCard() {
    // Stack condensé - 10 technologies clés max
    const coreTech = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL'];
    const toolsTech = ['SUPABASE', 'OPENAI', 'N8N', 'VERCEL', 'AWS'];

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-2xl backdrop-blur-xl pt-4 sm:pt-6 group/card">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-light mb-3 sm:mb-4 text-center leading-tight">
                Stack moderne,<br />résultats concrets
            </h3>
            
            {/* Tech marquees - Simplifié */}
            <div className="flex w-full flex-col items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {/* Row 1: Core stack */}
                <Marquee pauseOnHover className="[--duration:20s] [--gap:0.75rem]">
                    {coreTech.map((tech: string) => (
                        <div key={tech}>
                            <TechBadge name={tech} />
                        </div>
                    ))}
                </Marquee>
                {/* Row 2: Tools & AI */}
                <Marquee reverse pauseOnHover className="[--duration:20s] [--gap:0.75rem]">
                    {toolsTech.map((tech: string) => (
                        <div key={tech}>
                            <TechBadge name={tech} />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Glow effect above browser mockup - Circular */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-32 bg-gradient-to-t from-purple-500/20 via-purple-500/10 to-transparent blur-2xl pointer-events-none group-hover/card:from-purple-500/40 group-hover/card:via-purple-500/20 transition-all duration-500"></div>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>

            {/* Browser mockup preview - positioned at bottom, partially visible */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] translate-y-[20%] group-hover/card:translate-y-[10%] transition-transform duration-500 ease-out">
                {/* Ripple effect behind the browser */}
                <div className="absolute inset-0 -top-20 pointer-events-none">
                    <Ripple mainCircleSize={180} mainCircleOpacity={0.15} numCircles={6} />
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl relative group-hover/card:border-white/20 transition-colors duration-300">
                    {/* Grid pattern inside browser - subtle */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                    
                    {/* Browser header with URL bar */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a]/80 border-b border-white/5 relative z-10">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="bg-[#2a2a2a] rounded-lg px-4 py-1.5 flex items-center gap-2">
                                <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="text-[11px] text-white/70">miguelboka.dev</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Browser content - Website preview */}
                    <div className="p-8 flex flex-col items-center justify-center min-h-[200px] relative z-10">
                        {/* Main text */}
                        <div className="text-center">
                            <h4 className="text-white text-2xl font-medium mb-1">Sites web qui</h4>
                            <h4 className="text-purple-400 text-3xl font-semibold italic">marquent.</h4>
                        </div>
                        
                        {/* Decorative lines */}
                        <div className="flex gap-3 mt-5">
                            <div className="h-1 w-20 bg-gray-600 rounded"></div>
                            <div className="h-1 w-14 bg-gray-700 rounded"></div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex gap-3 mt-6">
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
        montreal: { name: 'Montréal, Canada', phi: 4.5 },
        canada: { name: 'Canada', phi: 4.3 },
        usa: { name: 'USA', phi: 5.2 },
    };

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-2xl backdrop-blur-xl pt-6 sm:pt-8">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 text-center z-10">
                Flexible avec les<br />fuseaux horaires
            </h3>
            <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4 z-10">
                <button 
                    onClick={() => setActiveLocation('montreal')}
                    className={`px-3 py-1 rounded-full border text-xs flex items-center gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'montreal' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span className="text-white font-medium">Montréal</span>
                </button>
                <button 
                    onClick={() => setActiveLocation('canada')}
                    className={`px-3 py-1 rounded-full border text-xs flex items-center gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'canada' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <span className="text-base">🇨🇦</span>
                    <span className="text-white font-medium">Canada</span>
                </button>
                <button 
                    onClick={() => setActiveLocation('usa')}
                    className={`px-3 py-1 rounded-full border text-xs flex items-center gap-2 backdrop-blur-sm transition-all cursor-pointer ${activeLocation === 'usa' ? 'bg-purple-500/30 border-purple-400/50' : 'bg-white/10 border-white/20 hover:bg-white/20'}`}
                >
                    <span className="text-base">🇺🇸</span>
                    <span className="text-white font-medium">USA</span>
                </button>
            </div>

            <div className="absolute inset-0 top-10 w-full h-full scale-125">
                <Globe className="w-full h-full opacity-100" targetPhi={locations[activeLocation].phi} />
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
                <div className="flex items-center gap-2 text-sm bg-zinc-900/70 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium">{locations[activeLocation].name}</span>
                </div>
            </div>
        </div>
    );
}

// --- Main Bento Grid Component ---
export default function BentoGrid() {
    return (
        <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6">
            {/* Gradient transition depuis Hero */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-0"></div>
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                    id="solutions"
                >
                    <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
                        Nos solutions
                    </p>
                    <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
                        Ce qu&apos;on{' '}
                        <LineShadowText className="text-purple-400 italic" shadowColor="#a855f7">livre</LineShadowText>
                    </h2>
                </motion.div>

                {/* CSS Grid Layout - Asymmetric with scroll animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">

                    {/* Row 1, Col 1-2: Collaboration */}
                    <div className="sm:col-span-2 sm:row-span-1">
                        <CollaborationCard />
                    </div>

                    {/* Row 1-2, Col 3: Technologies (Spans 2 rows vertically on larger screens) */}
                    <div className="sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2">
                        <TechnologiesCard />
                    </div>

                    {/* Row 2-3, Col 1: Globe (Spans 2 rows vertically on larger screens) */}
                    <div className="sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2">
                        <GlobeCard />
                    </div>

                    {/* Row 2, Col 2: Travaillons ensemble */}
                    <motion.div 
                        className="sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="h-full w-full flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 shadow-2xl backdrop-blur-xl text-center group hover:border-purple-500/30 transition-all relative overflow-hidden">
                            {/* Animated glow background */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                            </div>
                            
                            <motion.div 
                                className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-4 shadow-lg relative z-10 border-2 border-purple-500/30"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image src="/miguelboka.jpg" alt="Miguel Boka" width={80} height={80} className="object-cover w-full h-full" />
                            </motion.div>
                            <h3 className="text-white text-xl font-light mb-1 leading-tight relative z-10">
                                Miguel Boka
                            </h3>
                            <p className="text-purple-400 text-sm mb-3 relative z-10">
                                Lead Architect & Fondateur
                            </p>
                            <p className="text-gray-500 text-xs mb-4 relative z-10 max-w-[200px]">
                                Chaque projet SmartScaling passe par mes mains.
                            </p>
                            <motion.a
                                href="https://www.linkedin.com/in/miguel-boka-51b407223/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs hover:bg-purple-500/20 hover:border-purple-500/40 transition-all backdrop-blur-sm shadow-lg relative z-10"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Voir LinkedIn</span>
                                <ArrowRight className="w-3 h-3" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Row 3, Col 2-3: Mes Projets (Spans 2 cols horizontal) */}
                    <div className="sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1">
                        <div className="h-full w-full flex flex-col rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 sm:p-6 shadow-2xl backdrop-blur-xl hover:border-white/20 transition-all">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">PRODUITS LIVE</span>
                                    <h3 className="text-white text-sm sm:text-base lg:text-lg font-light">Preuve de capacité, pas de promesses</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 flex-1">
                                {[
                                    { name: 'Tracksy', desc: 'Suivi du temps & facturation automatique pour freelances', status: 'Production', color: 'from-yellow-400 to-lime-500', icon: '/projects/tracksy_icon.png' },
                                    { name: 'MemoCall', desc: 'Assistant vocal IA qui transcrit et analyse vos appels', status: 'Production', color: 'from-green-500 to-emerald-600', icon: '/projects/memocall_icon.png' },
                                    { name: 'SideQuest', desc: 'App sociale pour découvrir des lieux et événements', status: 'Bêta', color: 'from-purple-500 to-violet-500', icon: '/projects/sidequest-logo.png' },
                                ].map((project) => (
                                    <motion.div 
                                        key={project.name} 
                                        className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between h-full group cursor-pointer"
                                        whileHover={{ y: -4 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                            {project.icon ? (
                                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-zinc-900/50">
                                                    <Image src={project.icon} alt={project.name} width={32} height={32} className="object-cover" />
                                                </div>
                                            ) : (
                                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                </div>
                                            )}
                                            <h4 className="text-white text-sm sm:text-base font-medium">{project.name}</h4>
                                        </div>
                                        <p className="text-gray-400 text-xs mb-2 sm:mb-3 line-clamp-2">{project.desc}</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                                                {project.status}
                                            </span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
