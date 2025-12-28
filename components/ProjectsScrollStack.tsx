'use client';

import React from 'react';
import ScrollStack from './ui/scroll-stack';

export default function ProjectsScrollStack() {
  const projects = [
    {
      id: 'sidequest',
      title: 'SideQuest',
      description: 'L\'app qui rend l\'organisation de sorties simple et rapide. Découvre des événements par catégories et région, sauvegarde tes lieux favoris, et reçois des recommandations "For You" basées sur tes goûts.',
      image: '/projects/sidequest-mockup.png',
      technologies: ['React Native', 'TypeScript', 'Supabase'],
      link: 'https://testflight.apple.com/join/wPWFm761',
      status: 'Bêta publique',
    },
    {
      id: 'tracksy',
      title: 'Tracksy',
      description: 'Suivi du temps et facturation automatique pour freelances. Tracksy automatise tout: suivi du temps, génération de factures, comptabilité intégrée.',
      image: '/projects/tracksy-landing.png',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: 'https://tracksy.me',
      status: 'Production',
    },
    {
      id: 'memocall',
      title: 'MemoCall',
      description: 'Assistant IA qui transforme vos appels en actions concrètes. Transcription, résumé, extraction des besoins client, génération de to-do et pré-remplissage de documents.',
      image: '/projects/Memocall-landing.png',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase', 'Twilio'],
      link: 'https://memocall.ai',
      status: 'Production',
    },
    {
      id: 'coresync',
      title: 'CoreSync',
      description: 'Centralise la documentation et processus internes avec un agent IA pour interroger la base de connaissances. Parfait pour les grandes équipes.',
      image: '/projects/coresync.png',
      technologies: ['Next.js', 'Firestore', 'N8N', 'OpenAI'],
      link: 'https://coresync.vercel.app',
      status: 'Production',
    },
    {
      id: 'nocase',
      title: 'NoCaseMTL',
      description: 'Plateforme e-commerce pour accessoires de téléphone avec système de paiement intégré et gestion d\'inventaire en temps réel.',
      image: '/projects/nocase1.png',
      technologies: ['Next.js', 'Stripe', 'Supabase'],
      link: '#',
      status: 'Production',
    },
  ];

  return (
    <section className="relative bg-black" id="projects">
      {/* Section Header */}
      <div className="relative z-20 pt-20 pb-10 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
          Mes Projets
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
          Produits en{' '}
          <span className="text-purple-400 italic">production</span>
        </h2>
      </div>

      {/* ScrollStack Component */}
      <ScrollStack items={projects} />
    </section>
  );
}
