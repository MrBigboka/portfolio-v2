'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';

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
    <section className="relative z-10 min-h-screen py-24 px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#101B2E' }}>
      {/* Animated background avec les particules */}
      <GlobalAnimatedBackground sectionId="awards-section" opacity={0.8} />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#D9A441]/20 to-[#B74134]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#0E1A2B]/30 to-[#F7E3C5]/20 blur-3xl"></div>
      </div>
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
            <div className="absolute inset-0 rounded-xl blur-2xl opacity-40 bg-gradient-to-r from-[#D9A441]/30 to-[#B74134]/30 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-xl border border-[#D9A441]/20 shadow-lg shadow-[#D9A441]/10 group-hover:shadow-xl group-hover:shadow-[#D9A441]/20 transition-all duration-500">
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold">Bourse <span className="text-[#D9A441]">CPMT</span></h3>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed">
              J&apos;ai eu l&apos;honneur d&apos;être titulaire d&apos;une bourse de la Commission des partenaires du marché du travail (CPMT), 
              reconnaissant l&apos;excellence académique et le potentiel professionnel dans le domaine du développement web.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B74134]"></div>
                <p className="text-white/80">Reconnaissance d&apos;excellence académique</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B74134]"></div>
                <p className="text-white/80">Soutien au développement professionnel</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B74134]"></div>
                <p className="text-white/80">Promotion des talents dans le numérique</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-fit mt-4 bg-[#0B1221]/80 border-[#D9A441]/40 text-white hover:bg-[#0B1221] hover:border-[#D9A441] hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open('https://www.cpmt.gouv.qc.ca/', '_blank')}
            >
              <ExternalLink size={16} className="mr-2 text-[#D9A441]" />
              En savoir plus sur la CPMT
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
