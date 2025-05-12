'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
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
      <div id="awards-section" className="absolute inset-0 -z-10 overflow-hidden" style={{ zIndex: -1 }}>
        <AnimatedBackground excludeSelector="#projects-section, #expertise-section" />
      </div>
      {/* Div de séparation pour bloquer le contenu de la section précédente */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#64FFDA]/30 z-50"></div>
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
            <div className="absolute inset-0 rounded-xl blur-2xl opacity-40 bg-[#64FFDA]/30 group-hover:opacity-60 transition-opacity duration-500"></div>
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
              <Trophy size={28} className="text-[#64FFDA]" />
              <h3 className="text-white text-2xl md:text-3xl font-bold">Bourse CPMT</h3>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed">
              J&apos;ai eu l&apos;honneur d&apos;être titulaire d&apos;une bourse de la Commission des partenaires du marché du travail (CPMT), 
              reconnaissant l&apos;excellence académique et le potentiel professionnel dans le domaine du développement web.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#64FFDA]"></div>
                <p className="text-white/80">Reconnaissance d&apos;excellence académique</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#64FFDA]"></div>
                <p className="text-white/80">Soutien au développement professionnel</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#64FFDA]"></div>
                <p className="text-white/80">Promotion des talents dans le numérique</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-fit mt-4 border-[#64FFDA] text-white hover:bg-[#64FFDA]/20"
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
