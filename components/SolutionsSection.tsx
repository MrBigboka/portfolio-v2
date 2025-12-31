'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import TechBadge from './TechBadge';
import Link from 'next/link';
import { AnimatedButton } from './ui/animated-button';

interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  logo: string;
  accentColor: string;
  tags: string[];
  demoUrl?: string;
}

const solutions: Solution[] = [
  {
    id: 'sidequest',
    title: 'SideQuest',
    shortDesc: 'Organise des plans entre amis et trouve des événements selon tes goûts',
    description: 'SideQuest simplifie l\'organisation de sorties entre amis et la découverte d\'événements et activités basés sur tes goûts et lieux déjà fréquentés.',
    image: '/projects/sidequest-mockup.png',
    logo: '/projects/sidequest-logo.png',
    accentColor: '#8B5CF6',
    tags: ['REACT NATIVE', 'EXPO', 'TYPESCRIPT', 'SUPABASE'],
    demoUrl: 'https://testflight.apple.com/join/wPWFm761'
  },
  {
    id: 'tracksy',
    title: 'Tracksy',
    shortDesc: 'SaaS de suivi de temps et comptes rendus pour freelances',
    description: 'Le problème : Les freelances et petites équipes perdent du temps à suivre leurs heures, résumer leur travail, et produire des comptes rendus propres pour les clients. La solution : Tracksy centralise le suivi du temps, les notes par projet et génère des exports clairs (heures, période, totaux, résumé). Un outil rapide pour tracker tes heures, organiser tes projets et sortir un rapport "client-ready" en quelques clics.',
    image: '/projects/tracksy-landing.png',
    logo: '/projects/tracksy_icon.png',
    accentColor: '#d5ff3f',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA', 'POSTGRESQL'],
    demoUrl: 'https://tracksy.me'
  },
  {
    id: 'memocall',
    title: 'MemoCall',
    shortDesc: 'IA qui transforme les appels en actions concrètes',
    description: 'Le problème : En PME (logistique, location, services), les appels contiennent des infos critiques… mais elles se perdent : oublis, erreurs, mauvais suivi, formulaires remplis à la main. La solution : MemoCall écoute les appels, transcrit, résume, extrait les infos importantes et remplit automatiquement des documents (ex : bon de commande) pour accélérer l\'exécution. Une IA qui ne fait pas juste "prendre des notes" — elle comprend le contexte et prépare l\'action à valider et envoyer.',
    image: '/projects/Memocall-landing.png',
    logo: '/projects/memocall_icon.png',
    accentColor: '#FFFFFF',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'OPENAI', 'SUPABASE', 'TWILIO'],
    demoUrl: 'https://memocall.ai'
  },
  {
    id: 'coresync',
    title: 'CoreSync',
    shortDesc: 'Système de synchronisation et source de vérité',
    description: 'Le problème : Les entreprises et projets accumulent des outils (CRM, fichiers, emails, formulaires, notes). Résultat : infos en double, pertes, confusion, aucune "source de vérité". La solution : CoreSync connecte et centralise les données importantes pour garder un système cohérent, searchable, et plus facile à automatiser. Un socle d\'organisation qui synchronise les infos critiques et réduit le chaos opérationnel.',
    image: '/projects/coresync.png',
    logo: '/projects/coresyncLogo.png',
    accentColor: '#9D71E8',
    tags: ['NEXT.JS', 'FIRESTORE', 'N8N', 'OPENAI'],
    demoUrl: 'https://coresync.vercel.app'
  }
];

export default function SolutionsSection() {
  const goToSolutionURL = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 sm:px-6 bg-black z-10" id="solutions">
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

        {/* Solutions Cards - Same style as mobile projects */}
        <div className="space-y-8">
          {solutions.map((solution) => (
            <motion.div 
              key={solution.id} 
              className={`rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/[0.07] to-white/[0.02] flex flex-col shadow-2xl border backdrop-blur-xl ${solution.demoUrl && solution.demoUrl !== '#' ? 'cursor-pointer' : ''}`}
              style={{
                borderColor: `${solution.accentColor}40`,
                boxShadow: `0 20px 40px -10px ${solution.accentColor}30`
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => solution.demoUrl && solution.demoUrl !== '#' ? goToSolutionURL(solution.demoUrl) : null}
            >
              {/* Image avec ratio 16:9 */}
              <div className="relative overflow-hidden bg-black/20" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Contenu */}
              <div className="flex-1 p-6">
                {/* En-tête avec logo et titre */}
                <div className="flex items-start gap-4 mb-4">
                  {solution.logo && (
                    <div className="w-14 h-14 rounded-2xl p-2.5 flex items-center justify-center relative flex-shrink-0 border" style={{ 
                      backgroundColor: `${solution.accentColor}10`,
                      borderColor: `${solution.accentColor}30`
                    }}>
                      <Image 
                        src={solution.logo} 
                        alt={`${solution.title} logo`}
                        className="w-full h-full object-contain" 
                        width={56}
                        height={56}
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {solution.shortDesc}
                    </p>
                  </div>
                  <ArrowRight 
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: solution.accentColor }}
                  />
                </div>
                
                {/* Technologies utilisées */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <TechBadge key={`solution-${solution.id}-${tag}`} name={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link href="/projects">
            <AnimatedButton variant="purple">
              Voir toutes les solutions
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
