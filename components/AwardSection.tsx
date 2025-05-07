'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function AwardSection() {
  const controls = useAnimation();
  
  useEffect(() => {
    // Animation de flottement pour le diplôme
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    });
  }, [controls]);
  return (
    <section className="relative z-50 py-20 px-6 md:px-12 border-t border-b border-white/10 shadow-inner transition-colors duration-300" style={{ position: 'relative', isolation: 'isolate', backgroundColor: '#0A1220' }}>
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ zIndex: -1 }}>
        <AnimatedBackground />
      </div>
      {/* Div de séparation pour bloquer le contenu de la section précédente */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#dea9ff]/30 z-50"></div>
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Reconnaissance" 
          subtitle="DISTINCTION ACADÉMIQUE" 
          accentWord="Reconnaissance" 
          align="center" 
        />
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Partie gauche - Image du diplôme flottante */}
          <motion.div 
            className="relative group"
            animate={controls}
          >
            <div className="absolute inset-0 rounded-xl blur-2xl opacity-40 bg-[#9D71E8]/30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src="/diploma.png" 
                alt="Bourse CPMT" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
          
          {/* Partie droite - Description */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <Award size={28} className="text-[#dea9ff]" />
              <h3 className="text-white text-2xl md:text-3xl font-bold">Bourse CPMT</h3>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed">
              J'ai eu l'honneur d'être titulaire d'une bourse de la Commission des partenaires du marché du travail (CPMT), 
              reconnaissant l'excellence académique et le potentiel professionnel dans le domaine du développement web.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#dea9ff]"></div>
                <p className="text-white/80">Reconnaissance d'excellence académique</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#dea9ff]"></div>
                <p className="text-white/80">Soutien au développement professionnel</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#dea9ff]"></div>
                <p className="text-white/80">Promotion des talents dans le numérique</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-fit mt-4 border-[#dea9ff] text-white hover:bg-[#dea9ff]/20"
              onClick={() => window.open('https://www.cpmt.gouv.qc.ca/', '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              En savoir plus sur la CPMT
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
