'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { LineShadowText } from './ui/line-shadow-text';
import { SmartButton } from './ui/smart-button';
import DarkVeil from './DarkVeil';


export default function Hero() {
    const { scrollY } = useScroll();
      // Parallax effects
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);



    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* DarkVeil Background - Full Screen */}
            <div className="absolute inset-0 w-full h-full">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0.06}
                    scanlineIntensity={0.08}
                    speed={0.3}
                    scanlineFrequency={1.5}
                    warpAmount={0.25}
                    resolutionScale={1.0}
                />
            </div>
            
            {/* Gradient Transition vers section Solutions - Amélioration */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none z-10"></div>

            {/* Content with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col items-center justify-center"
            >
                {/* Surtitre - Studio Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                        Studio technologique pour projets ambitieux
                    </span>
                </motion.div>

                {/* Title - Headline orienté outcome */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 text-center"
                >
                    <span className="block text-white text-2xl sm:text-3xl md:text-5xl font-serif font-normal leading-tight tracking-tight">
                        On conçoit et livre des SaaS
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-5xl font-serif italic font-light leading-tight tracking-tight mt-1">
                        <span className="text-white">qui tournent en </span>
                        <LineShadowText className="text-purple-400" shadowColor="#a855f7">
                            production.
                        </LineShadowText>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center leading-relaxed"
                >
                    Systèmes robustes, interfaces soignées, déploiement rapide.<br className="hidden sm:block" />
                    Pour fondateurs et équipes qui veulent shipper, pas expérimenter.
                </motion.p>

                {/* Proof Line with Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    <span className="text-gray-500 text-xs sm:text-sm">
                        Fondé par <span className="text-white">Miguel Boka</span>
                    </span>
                    <a 
                        href="https://www.linkedin.com/in/miguel-boka-51b407223/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/40 hover:border-purple-400 hover:scale-105 transition-all cursor-pointer"
                    >
                        <Image
                            src="/miguelboka.jpg"
                            alt="Miguel Boka"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </a>
                    <span className="text-gray-500 text-xs sm:text-sm">
                        — Lead Architect & Full-Stack Developer
                    </span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                >
                    <SmartButton
                        variant="cta"
                        size="lg"
                        icon="arrow"
                        href="https://calendly.com/bokamiguel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Discutons de votre projet
                    </SmartButton>

                    <SmartButton
                        variant="outline"
                        size="lg"
                        href="/projects"
                    >
                        Voir les projets
                    </SmartButton>
                </motion.div>

                {/* Micro-copy sous CTA */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-600 text-xs mt-4"
                >
                    30 min pour cadrer votre projet — sans engagement
                </motion.p>
            </motion.div>
        </section>
    );
}
