'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, TrendingUp, Users, Briefcase, ShoppingBag, Headphones, MessageSquare, BarChart3, Mail, MapPin, Brain, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WobbleCard } from '@/components/ui/wobble-card';

// Types
type DetailedCategory = 
  | 'Consultant' 
  | 'Vidéo' 
  | 'Coach' 
  | 'E-commerce' 
  | 'Retail' 
  | 'Logistique' 
  | 'RH' 
  | 'Support client' 
  | 'Sales' 
  | 'Marketing' 
  | 'Opérations'
  | 'Social';

interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  categories: DetailedCategory[];
  logo: string;
  banner: string;
  accentColor: string;
  stats?: {
    users?: string;
    rating?: number;
  };
  cta: {
    text: string;
    url: string;
  };
}

interface Automation {
  id: string;
  name: string;
  tagline: string;
  categories: DetailedCategory[];
  flow: string;
  pricing: string;
  color: string;
  icon: React.ReactNode;
  cta: {
    text: string;
    url: string;
  };
}

const categoryIcons: Record<DetailedCategory, React.ReactNode> = {
  'Consultant': <Briefcase className="w-3.5 h-3.5" />,
  'Vidéo': <Sparkles className="w-3.5 h-3.5" />,
  'Coach': <Users className="w-3.5 h-3.5" />,
  'E-commerce': <ShoppingBag className="w-3.5 h-3.5" />,
  'Retail': <ShoppingBag className="w-3.5 h-3.5" />,
  'Logistique': <TrendingUp className="w-3.5 h-3.5" />,
  'RH': <Users className="w-3.5 h-3.5" />,
  'Support client': <Headphones className="w-3.5 h-3.5" />,
  'Sales': <TrendingUp className="w-3.5 h-3.5" />,
  'Marketing': <BarChart3 className="w-3.5 h-3.5" />,
  'Opérations': <Briefcase className="w-3.5 h-3.5" />,
  'Social': <MessageSquare className="w-3.5 h-3.5" />
};

export default function PremiumProjectsSection() {
  const [activeTab, setActiveTab] = useState<'apps' | 'automations'>('apps');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const apps: App[] = [
    {
      id: 'sidequest',
      name: 'SideQuest',
      tagline: 'Sorties organisées, zéro chaos',
      description: 'Découvre des événements par catégories et région, sauvegarde tes lieux favoris, et reçois des recommandations personnalisées.',
      categories: ['Social', 'Vidéo'],
      logo: '/projects/sidequest-logo.png',
      banner: '/projects/sidequest-mockup.png',
      accentColor: '#8B5CF6',
      stats: { users: '500+', rating: 4.8 },
      cta: { text: 'Rejoindre la bêta', url: 'https://testflight.apple.com/join/wPWFm761' }
    },
    {
      id: 'tracksy',
      name: 'Tracksy',
      tagline: 'Facturation automatique pour consultants',
      description: 'Suivi du temps, génération de factures, export comptable. Tout automatisé.',
      categories: ['Consultant', 'Coach'],
      logo: '/projects/tracksy_icon.png',
      banner: '/projects/tracksy-landing.png',
      accentColor: '#d5ff3f',
      stats: { users: '1,200+', rating: 4.9 },
      cta: { text: 'Essai gratuit', url: 'https://tracksy.me' }
    },
    {
      id: 'memocall',
      name: 'MemoCall',
      tagline: 'Vos appels → actions concrètes',
      description: 'Assistant IA qui transforme vos appels en résumés, actions et documents.',
      categories: ['Retail', 'Logistique', 'Support client'],
      logo: '/projects/memocall_icon.png',
      banner: '/projects/Memocall-landing.png',
      accentColor: '#FFFFFF',
      stats: { users: '800+', rating: 4.7 },
      cta: { text: 'Réserver une démo', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'coresync',
      name: 'CoreSync',
      tagline: 'Base de connaissances + agent IA',
      description: 'Centralisez votre documentation. Agent IA qui répond instantanément.',
      categories: ['RH', 'Support client', 'Opérations'],
      logo: '/projects/coresyncLogo.png',
      banner: '/projects/coresync.png',
      accentColor: '#9D71E8',
      stats: { users: '300+', rating: 4.6 },
      cta: { text: 'Demander l\'accès', url: 'https://coresync.vercel.app' }
    }
  ];

  const automations: Automation[] = [
    {
      id: 'form-to-meeting',
      name: 'Form → Meeting Auto',
      tagline: 'Réservation automatique',
      categories: ['Sales', 'Consultant'],
      flow: 'Form → Calendrier + Email',
      pricing: '299$',
      color: '#3B82F6',
      icon: <Calendar className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'call-summary-crm',
      name: 'Résumé d\'appel + CRM',
      tagline: 'Post-call automation',
      categories: ['Sales', 'Support client'],
      flow: 'Appel → Résumé + CRM',
      pricing: '499$',
      color: '#8B5CF6',
      icon: <MessageSquare className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'auto-quote',
      name: 'Devis automatique',
      tagline: 'Génération instantanée',
      categories: ['Consultant', 'Sales'],
      flow: 'Email → Devis PDF',
      pricing: '399$',
      color: '#10B981',
      icon: <BarChart3 className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'gmail-outreach',
      name: 'Gmail Outreach',
      tagline: 'Prospection automatisée',
      categories: ['Sales', 'Marketing'],
      flow: 'Liste → Emails + Follow-ups',
      pricing: '449$',
      color: '#EF4444',
      icon: <Mail className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'google-maps-leads',
      name: 'Lead Gen Google Maps',
      tagline: 'Extraction de leads',
      categories: ['Sales', 'Marketing'],
      flow: 'Maps → Leads + CRM',
      pricing: '549$',
      color: '#14B8A6',
      icon: <MapPin className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    },
    {
      id: 'ai-lead-research',
      name: 'AI Lead Research',
      tagline: 'Prospection intelligente',
      categories: ['Sales', 'Marketing'],
      flow: 'Lead → Research + Email',
      pricing: '499$',
      color: '#EC4899',
      icon: <Brain className="w-8 h-8" />,
      cta: { text: 'Configurer', url: 'https://calendly.com/bokamiguel' }
    }
  ];

  const allCategories = Array.from(new Set([
    ...apps.flatMap(app => app.categories),
    ...automations.flatMap(auto => auto.categories)
  ])).sort();

  const filteredApps = selectedCategory === 'all' 
    ? apps 
    : apps.filter(app => app.categories.includes(selectedCategory as DetailedCategory));

  const filteredAutomations = selectedCategory === 'all'
    ? automations
    : automations.filter(auto => auto.categories.includes(selectedCategory as DetailedCategory));


  return (
    <section id="projects" className="relative min-h-screen bg-black text-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300 font-medium">Solutions & Automatisations</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Prêtes à déployer
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez des solutions en production ou automatisez vos processus
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('apps')}
            className={`relative px-8 py-4 rounded-2xl font-semibold transition-all ${
              activeTab === 'apps' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeTab === 'apps' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Apps ({apps.length})</span>
          </button>
          
          <button
            onClick={() => setActiveTab('automations')}
            className={`relative px-8 py-4 rounded-2xl font-semibold transition-all ${
              activeTab === 'automations' ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeTab === 'automations' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Automatisations ({automations.length})</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Toutes
          </button>
          {allCategories.slice(0, 8).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {categoryIcons[category as DetailedCategory]}
              {category}
            </button>
          ))}
        </div>

        {/* Grid with Wobble Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {activeTab === 'apps' ? (
              filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <WobbleCard
                    containerClassName={app.id === 'sidequest' ? 'col-span-1 lg:row-span-2 min-h-[600px]' : 'col-span-1 min-h-[400px]'}
                    className="relative"
                  >
                    <div className="relative z-10 h-full flex flex-col">
                      {/* iPhone format for SideQuest */}
                      {app.id === 'sidequest' ? (
                        <div className="flex-1 flex items-center justify-center mb-6">
                          <div className="relative w-48 h-96">
                            <Image
                              src={app.banner}
                              alt={app.name}
                              width={400}
                              height={800}
                              className="w-full h-full object-contain drop-shadow-2xl"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                          <Image
                            src={app.banner}
                            alt={app.name}
                            width={800}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden" style={{ backgroundColor: app.accentColor }}>
                          <Image src={app.logo} alt={app.name} width={56} height={56} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                          {app.stats?.rating && (
                            <div className="flex items-center gap-1 text-sm text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span>{app.stats.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-white/90 mb-2">{app.tagline}</p>
                      <p className="text-sm text-white/70 mb-4">{app.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {app.categories.map(cat => (
                          <span
                            key={cat}
                            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
                          >
                            {categoryIcons[cat]}
                            {cat}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={app.cta.url}
                        target="_blank"
                        className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all hover:scale-105"
                        style={{ backgroundColor: app.accentColor }}
                      >
                        {app.cta.text}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </WobbleCard>
                </motion.div>
              ))
            ) : (
              filteredAutomations.map((auto, index) => (
                <motion.div
                  key={auto.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <WobbleCard containerClassName="col-span-1 min-h-[400px]">
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: `${auto.color}20`, color: auto.color }}>
                        {auto.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{auto.tagline}</h3>
                      <p className="text-sm text-white/70 mb-4">{auto.name}</p>

                      <div className="p-4 rounded-xl mb-4" style={{ backgroundColor: `${auto.color}20` }}>
                        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: auto.color }}>Flow</p>
                        <p className="text-sm text-white font-mono">{auto.flow}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {auto.categories.map(cat => (
                          <span
                            key={cat}
                            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
                          >
                            {categoryIcons[cat]}
                            {cat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="text-xs text-white/50">À partir de</p>
                          <p className="text-2xl font-bold" style={{ color: auto.color }}>{auto.pricing}</p>
                        </div>
                        <Link
                          href={auto.cta.url}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                          style={{ backgroundColor: auto.color }}
                        >
                          {auto.cta.text}
                          <Calendar className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </WobbleCard>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
