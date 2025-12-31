'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Calendar, Sparkles, TrendingUp, Users, Briefcase, ShoppingBag, Headphones, MessageSquare, BarChart3, Mail, MapPin, Brain, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Enhanced Types with detailed taxonomy
type AppType = 'iOS' | 'SaaS' | 'Widget' | 'Platform';
type Stage = 'Beta' | 'Production' | 'Live';

// Detailed categories (not just "Freelance")
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

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  label?: string;
  highlight?: boolean;
  features?: string[];
}

interface App {
  id: string;
  type: 'app';
  name: string;
  tagline: string; // Short catchy phrase
  description: string;
  appType: AppType;
  stage: Stage;
  categories: DetailedCategory[];
  tags: string[];
  logo: string;
  banner: string;
  screenshots?: string[];
  accentColor: string;
  pricing?: PricingTier[];
  features?: string[];
  stats?: {
    users?: string;
    rating?: number;
    reviews?: number;
  };
  cta: {
    text: string;
    url: string;
  };
  ctaSecondary?: {
    text: string;
    url: string;
  };
}

interface Automation {
  id: string;
  type: 'automation';
  name: string;
  tagline: string;
  description: string;
  categories: DetailedCategory[];
  flow: string;
  integrations: string[];
  pricing: string;
  color: string;
  icon: React.ReactNode;
  features?: string[];
  cta: {
    text: string;
    url: string;
  };
}

// Category icons mapping
const categoryIcons: Record<DetailedCategory, React.ReactNode> = {
  'Consultant': <Briefcase className="w-4 h-4" />,
  'Vidéo': <Sparkles className="w-4 h-4" />,
  'Coach': <Users className="w-4 h-4" />,
  'E-commerce': <ShoppingBag className="w-4 h-4" />,
  'Retail': <ShoppingBag className="w-4 h-4" />,
  'Logistique': <TrendingUp className="w-4 h-4" />,
  'RH': <Users className="w-4 h-4" />,
  'Support client': <Headphones className="w-4 h-4" />,
  'Sales': <TrendingUp className="w-4 h-4" />,
  'Marketing': <BarChart3 className="w-4 h-4" />,
  'Opérations': <Briefcase className="w-4 h-4" />,
  'Social': <MessageSquare className="w-4 h-4" />
};

export default function AppStoreSection() {
  const [activeTab, setActiveTab] = useState<'apps' | 'automations'>('apps');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  // Apps with enhanced taxonomy
  const apps: App[] = [
    {
      id: 'sidequest',
      type: 'app',
      name: 'SideQuest',
      tagline: 'Sorties organisées, zéro chaos',
      description: 'Découvre des événements par catégories et région, sauvegarde tes lieux favoris, et reçois des recommandations personnalisées.',
      appType: 'iOS',
      stage: 'Beta',
      categories: ['Social', 'Vidéo'],
      tags: ['Événements', 'Recommandations IA', 'Géolocalisation'],
      logo: '/projects/sidequest-logo.png',
      banner: '/projects/sidequest-mockup.png',
      accentColor: '#8B5CF6',
      stats: {
        users: '500+',
        rating: 4.8,
        reviews: 42
      },
      features: [
        'Événements par catégories',
        'Recommandations "For You"',
        'Lieux favoris',
        'Filtres par région'
      ],
      cta: {
        text: 'Rejoindre la bêta',
        url: 'https://testflight.apple.com/join/wPWFm761'
      }
    },
    {
      id: 'tracksy',
      type: 'app',
      name: 'Tracksy',
      tagline: 'Facturation automatique pour consultants',
      description: 'Suivi du temps, génération de factures, export comptable. Tout automatisé pour les consultants et freelances.',
      appType: 'SaaS',
      stage: 'Production',
      categories: ['Consultant', 'Coach'],
      tags: ['Facturation', 'Time tracking', 'Comptabilité', 'Automatisation'],
      logo: '/projects/tracksy_icon.png',
      banner: '/projects/tracksy-landing.png',
      accentColor: '#d5ff3f',
      stats: {
        users: '1,200+',
        rating: 4.9,
        reviews: 156
      },
      pricing: [
        {
          name: 'À vie',
          price: '39$',
          period: 'one-time',
          label: 'Offre limitée aux 100 premiers',
          highlight: true,
          features: ['Facturation illimitée', 'Export comptable', 'Support prioritaire']
        },
        {
          name: 'Annuel',
          price: '6,58$/mois',
          period: 'payé 79$/an',
          label: '2 mois gratuits',
          features: ['Facturation illimitée', 'Export comptable']
        },
        {
          name: 'Mensuel',
          price: '7,99$/mois',
          label: '14 jours d\'essai gratuit',
          features: ['Facturation illimitée']
        }
      ],
      features: [
        'Suivi du temps automatique',
        'Génération de factures',
        'Export comptable',
        'Rapports détaillés'
      ],
      cta: {
        text: 'Commencer l\'essai gratuit',
        url: 'https://tracksy.me'
      },
      ctaSecondary: {
        text: 'Voir le pricing',
        url: 'https://tracksy.me/pricing'
      }
    },
    {
      id: 'memocall',
      type: 'app',
      name: 'MemoCall',
      tagline: 'Vos appels → actions concrètes',
      description: 'Assistant IA qui transforme vos appels en résumés, actions et documents pré-remplis. Pour retail, logistique et support.',
      appType: 'SaaS',
      stage: 'Production',
      categories: ['Retail', 'Logistique', 'Support client'],
      tags: ['IA vocale', 'Transcription', 'Automatisation', 'CRM'],
      logo: '/projects/memocall_icon.png',
      banner: '/projects/Memocall-landing.png',
      accentColor: '#FFFFFF',
      stats: {
        users: '800+',
        rating: 4.7,
        reviews: 89
      },
      features: [
        'Transcription automatique',
        'Résumé IA',
        'Extraction d\'actions',
        'Pré-remplissage de documents',
        'Export CRM'
      ],
      cta: {
        text: 'Réserver une démo',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'coresync',
      type: 'app',
      name: 'CoreSync',
      tagline: 'Base de connaissances + agent IA',
      description: 'Centralisez votre documentation et processus internes. Agent IA qui répond instantanément aux questions de votre équipe.',
      appType: 'Widget',
      stage: 'Live',
      categories: ['RH', 'Support client', 'Opérations'],
      tags: ['Knowledge base', 'IA', 'RAG', 'Onboarding'],
      logo: '/projects/coresyncLogo.png',
      banner: '/projects/coresync.png',
      accentColor: '#9D71E8',
      stats: {
        users: '300+',
        rating: 4.6,
        reviews: 34
      },
      pricing: [
        {
          name: 'Gratuit',
          price: 'Sur demande',
          label: 'Accès anticipé'
        }
      ],
      features: [
        'Base de connaissances centralisée',
        'Agent IA conversationnel',
        'Recherche sémantique',
        'Intégration Slack/Teams'
      ],
      cta: {
        text: 'Demander l\'accès',
        url: 'https://coresync.vercel.app'
      }
    }
  ];

  // Automations with enhanced details
  const automations: Automation[] = [
    {
      id: 'form-to-meeting',
      type: 'automation',
      name: 'Form → Meeting Auto',
      tagline: 'Réservation automatique de rendez-vous',
      description: 'Formulaire rempli → meeting créé automatiquement dans votre calendrier avec confirmation email',
      categories: ['Sales', 'Consultant', 'Coach'],
      flow: 'Form → Calendrier + Email confirmation',
      integrations: ['Google Calendar', 'Calendly', 'Gmail', 'Slack'],
      pricing: 'À partir de 299$',
      color: '#3B82F6',
      icon: <Calendar className="w-6 h-6" />,
      features: [
        'Synchronisation calendrier',
        'Email de confirmation auto',
        'Rappels automatiques',
        'Intégration CRM'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'call-summary-crm',
      type: 'automation',
      name: 'Résumé d\'appel + CRM',
      tagline: 'Post-call automation intelligente',
      description: 'Appel terminé → résumé IA + tâches créées + CRM mis à jour automatiquement',
      categories: ['Sales', 'Support client'],
      flow: 'Appel → Résumé + Tâches + CRM update',
      integrations: ['OpenAI', 'HubSpot', 'Salesforce', 'Notion', 'Slack'],
      pricing: 'À partir de 499$',
      color: '#8B5CF6',
      icon: <MessageSquare className="w-6 h-6" />,
      features: [
        'Transcription + résumé IA',
        'Extraction d\'actions',
        'Update CRM automatique',
        'Notifications équipe'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'auto-quote',
      type: 'automation',
      name: 'Devis automatique',
      tagline: 'Génération de devis instantanée',
      description: 'Email reçu → devis généré et envoyé automatiquement avec votre branding',
      categories: ['Consultant', 'E-commerce', 'Sales'],
      flow: 'Email → Devis PDF + Envoi auto',
      integrations: ['Gmail', 'Google Docs', 'Stripe', 'QuickBooks'],
      pricing: 'À partir de 399$',
      color: '#10B981',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Génération PDF automatique',
        'Branding personnalisé',
        'Calcul prix automatique',
        'Suivi des devis'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'client-onboarding',
      type: 'automation',
      name: 'Onboarding client',
      tagline: 'Automatisation de l\'onboarding',
      description: 'Nouveau client → séquence d\'emails + tâches créées + accès configuré automatiquement',
      categories: ['Consultant', 'Coach', 'Support client'],
      flow: 'Nouveau client → Emails + Tâches + Accès',
      integrations: ['HubSpot', 'Gmail', 'Slack', 'Notion', 'Airtable'],
      pricing: 'À partir de 599$',
      color: '#F59E0B',
      icon: <Users className="w-6 h-6" />,
      features: [
        'Séquence email automatique',
        'Création de tâches',
        'Configuration d\'accès',
        'Suivi progression'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'gmail-outreach',
      type: 'automation',
      name: 'Gmail Outreach',
      tagline: 'Prospection email automatisée',
      description: 'Liste de prospects → emails personnalisés + follow-ups automatiques basés sur l\'engagement',
      categories: ['Sales', 'Marketing'],
      flow: 'Liste → Emails + Follow-ups auto',
      integrations: ['Gmail', 'Google Sheets', 'OpenAI', 'HubSpot'],
      pricing: 'À partir de 449$',
      color: '#EF4444',
      icon: <Mail className="w-6 h-6" />,
      features: [
        'Personnalisation IA',
        'Follow-ups intelligents',
        'Tracking d\'engagement',
        'A/B testing'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'sheets-crm-sync',
      type: 'automation',
      name: 'Sheets → CRM Sync',
      tagline: 'Synchronisation bidirectionnelle',
      description: 'Google Sheets → Salesforce/HubSpot synchronisation bidirectionnelle en temps réel',
      categories: ['Sales', 'Opérations'],
      flow: 'Sheets ↔ CRM sync temps réel',
      integrations: ['Google Sheets', 'Salesforce', 'HubSpot', 'Airtable'],
      pricing: 'À partir de 399$',
      color: '#06B6D4',
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        'Sync bidirectionnelle',
        'Temps réel',
        'Mapping personnalisé',
        'Logs d\'erreurs'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'google-maps-leads',
      type: 'automation',
      name: 'Lead Gen Google Maps',
      tagline: 'Extraction de leads locaux',
      description: 'Recherche Google Maps → extraction des leads + enrichissement + export CRM',
      categories: ['Sales', 'Marketing'],
      flow: 'Maps → Leads enrichis + CRM',
      integrations: ['Google Maps', 'OpenAI', 'HubSpot', 'Apollo'],
      pricing: 'À partir de 549$',
      color: '#14B8A6',
      icon: <MapPin className="w-6 h-6" />,
      features: [
        'Scraping Google Maps',
        'Enrichissement données',
        'Validation emails',
        'Export CRM'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'email-discovery',
      type: 'automation',
      name: 'Email Discovery',
      tagline: 'Trouvez les décideurs',
      description: 'Domaine d\'entreprise → emails des décideurs trouvés et vérifiés automatiquement',
      categories: ['Sales', 'Marketing'],
      flow: 'Domaine → Emails vérifiés',
      integrations: ['Hunter.io', 'Apollo', 'Google Sheets', 'HubSpot'],
      pricing: 'À partir de 349$',
      color: '#6366F1',
      icon: <Mail className="w-6 h-6" />,
      features: [
        'Recherche d\'emails',
        'Vérification validité',
        'Enrichissement profil',
        'Export CRM'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'ai-lead-research',
      type: 'automation',
      name: 'AI Lead Research',
      tagline: 'Prospection intelligente par IA',
      description: 'Lead → recherche IA approfondie + email personnalisé généré automatiquement',
      categories: ['Sales', 'Marketing'],
      flow: 'Lead → Research + Email personnalisé',
      integrations: ['OpenAI', 'Perplexity', 'Gmail', 'HubSpot'],
      pricing: 'À partir de 499$',
      color: '#EC4899',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'Recherche IA approfondie',
        'Email hyper-personnalisé',
        'Analyse de l\'entreprise',
        'Suivi engagement'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'pre-call-briefing',
      type: 'automation',
      name: 'News Pre-Call',
      tagline: 'Intelligence pré-appel',
      description: 'Appel prévu → briefing automatique avec actualités et contexte du prospect',
      categories: ['Sales'],
      flow: 'Calendrier → Briefing avant call',
      integrations: ['Google Calendar', 'Perplexity', 'Slack', 'Notion'],
      pricing: 'À partir de 399$',
      color: '#8B5CF6',
      icon: <Clock className="w-6 h-6" />,
      features: [
        'Actualités du prospect',
        'Contexte entreprise',
        'Points de discussion',
        'Notification Slack'
      ],
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    }
  ];

  // Get all unique categories
  const allCategories = Array.from(new Set([
    ...apps.flatMap(app => app.categories),
    ...automations.flatMap(auto => auto.categories)
  ])).sort();

  // Filter logic
  const filteredApps = selectedCategory === 'all' 
    ? apps 
    : apps.filter(app => app.categories.includes(selectedCategory as DetailedCategory));

  const filteredAutomations = selectedCategory === 'all'
    ? automations
    : automations.filter(auto => auto.categories.includes(selectedCategory as DetailedCategory));

  const currentItems = activeTab === 'apps' ? filteredApps : filteredAutomations;

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Full-width container */}
      <div className="w-full">
        {/* Hero section - Full width with liquid glass effect */}
        <div className="relative pt-32 pb-20 px-6 md:px-12">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300 font-medium">App Store</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Solutions & Automatisations
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-4">
                Découvrez des solutions prêtes à déployer ou automatisez vos processus sur mesure
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>4 Apps en production</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span>10 Automatisations disponibles</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs & Filters - Sticky with glass effect */}
        <div className="sticky top-0 z-40 backdrop-blur-2xl bg-black/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setActiveTab('apps')}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all ${
                  activeTab === 'apps'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === 'apps' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Apps ({apps.length})
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('automations')}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all ${
                  activeTab === 'automations'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === 'automations' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Automatisations ({automations.length})
                </span>
              </button>
            </div>

            {/* Category filters - Horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Toutes
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {categoryIcons[category as DetailedCategory]}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content - Full width grid */}
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${selectedCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {currentItems.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-400 text-lg">Aucune solution trouvée dans cette catégorie</p>
                </div>
              ) : (
                currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredApp(item.id)}
                    onMouseLeave={() => setHoveredApp(null)}
                  >
                    {item.type === 'app' ? (
                      <PremiumAppCard app={item} isHovered={hoveredApp === item.id} />
                    ) : (
                      <PremiumAutomationCard automation={item} isHovered={hoveredApp === item.id} />
                    )}
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Premium App Card with liquid glass effect
function PremiumAppCard({ app }: { app: App; isHovered: boolean }) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <motion.div
      className="group relative h-full"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Liquid glass container */}
      <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/10">
        {/* Animated gradient on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${app.accentColor}20, transparent 70%)`
          }}
        />

        {/* Banner - Larger and more visual, iPhone format for SideQuest */}
        <div className={`relative overflow-hidden ${
          app.id === 'sidequest' ? 'h-96 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-black' : 'h-72'
        }`}>
          {app.id === 'sidequest' ? (
            <div className="relative w-56 h-full flex items-center justify-center">
              <Image
                src={app.banner}
                alt={app.name}
                width={500}
                height={1000}
                className="h-[95%] w-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ) : (
            <Image
              src={app.banner}
              alt={app.name}
              width={1000}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Stage badge */}
          <div className="absolute top-4 right-4">
            <div
              className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-xl border-2"
              style={{
                backgroundColor: `${app.accentColor}30`,
                borderColor: app.accentColor,
                color: app.accentColor,
                boxShadow: `0 0 20px ${app.accentColor}40`
              }}
            >
              {app.stage}
            </div>
          </div>

          {/* Logo */}
          <div className="absolute bottom-0 left-6 transform translate-y-1/2">
            <motion.div
              className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-black shadow-2xl"
              style={{ backgroundColor: app.accentColor }}
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={app.logo} alt={app.name} width={96} height={96} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 pt-16">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">{app.name}</h3>
              {app.stats?.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-semibold text-white">{app.stats.rating}</span>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-400 mb-3">{app.tagline}</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {app.categories.map(cat => (
                <span
                  key={cat}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl"
                  style={{
                    backgroundColor: `${app.accentColor}20`,
                    color: app.accentColor,
                    border: `1px solid ${app.accentColor}40`
                  }}
                >
                  {categoryIcons[cat]}
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          {app.stats && (
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              {app.stats.users && (
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{app.stats.users}</span>
                </div>
              )}
              {app.stats.reviews && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{app.stats.reviews} avis</span>
                </div>
              )}
            </div>
          )}

          {/* Features */}
          {app.features && (
            <div className="mb-4 space-y-2">
              {app.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: app.accentColor }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pricing toggle */}
          {app.pricing && app.pricing.length > 0 && (
            <div className="mb-4">
              <button
                onClick={() => setShowPricing(!showPricing)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
              >
                <span className="text-sm font-semibold text-white">Voir le pricing</span>
                <motion.span
                  animate={{ rotate: showPricing ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {showPricing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    {app.pricing.map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-xl backdrop-blur-xl ${
                          tier.highlight ? 'border-2' : 'border'
                        }`}
                        style={{
                          backgroundColor: tier.highlight ? `${app.accentColor}15` : 'rgba(255, 255, 255, 0.03)',
                          borderColor: tier.highlight ? app.accentColor : 'rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {tier.highlight && (
                          <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-2" style={{ backgroundColor: app.accentColor, color: '#000' }}>
                            POPULAIRE
                          </div>
                        )}
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-sm font-semibold text-white">{tier.name}</span>
                          <span className="text-xl font-bold" style={{ color: app.accentColor }}>{tier.price}</span>
                        </div>
                        {tier.period && <p className="text-xs text-gray-400 mb-2">{tier.period}</p>}
                        {tier.label && (
                          <div className="flex items-center gap-1">
                            <span className="text-xs" style={{ color: app.accentColor }}>✓</span>
                            <p className="text-xs" style={{ color: app.accentColor }}>{tier.label}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* CTA */}
          <div className="space-y-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={app.cta.url}
                target="_blank"
                className="block w-full py-4 rounded-2xl font-bold text-center relative overflow-hidden group/cta"
                style={{
                  backgroundColor: app.accentColor,
                  color: app.accentColor === '#FFFFFF' ? '#000' : '#FFF',
                  boxShadow: `0 8px 32px ${app.accentColor}50`
                }}
              >
                <span className="relative z-10">{app.cta.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </motion.div>
            {app.ctaSecondary && (
              <Link
                href={app.ctaSecondary.url}
                target="_blank"
                className="block w-full py-3 rounded-2xl font-medium text-center bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10"
              >
                {app.ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Premium Automation Card
function PremiumAutomationCard({ automation }: { automation: Automation; isHovered: boolean }) {
  return (
    <motion.div
      className="group relative h-full"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Liquid glass container */}
      <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/10">
        {/* Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className="px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Zap className="w-3.5 h-3.5" />
            Système
          </motion.div>
        </div>

        {/* Hero with n8n logo */}
        <div
          className="relative h-56 flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${automation.color}20 0%, ${automation.color}05 50%, transparent 100%)`
          }}
        >
          {/* Animated orbs */}
          <motion.div
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: automation.color }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl border-2 backdrop-blur-xl"
              style={{
                backgroundColor: `${automation.color}20`,
                borderColor: automation.color,
                boxShadow: `0 0 40px ${automation.color}40`
              }}
            >
              <div style={{ color: automation.color }}>
                {automation.icon}
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: automation.color }} />
              <span className="text-xs text-gray-300 font-medium">n8n Automation</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{automation.tagline}</h3>
            <p className="text-xs text-gray-500 font-mono mb-3">{automation.name}</p>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {automation.categories.map(cat => (
                <span
                  key={cat}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${automation.color}20`,
                    color: automation.color,
                    border: `1px solid ${automation.color}40`
                  }}
                >
                  {categoryIcons[cat]}
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{automation.description}</p>

          {/* Flow */}
          <motion.div
            className="mb-4 p-4 rounded-2xl border relative overflow-hidden"
            style={{
              backgroundColor: `${automation.color}10`,
              borderColor: `${automation.color}30`
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: automation.color }} />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: automation.color }}>⚡ Flow</p>
              <p className="text-sm text-white font-mono">{automation.flow}</p>
            </div>
          </motion.div>

          {/* Integrations */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Intégrations</p>
            <div className="flex flex-wrap gap-2">
              {automation.integrations.slice(0, 3).map(integration => (
                <motion.span
                  key={integration}
                  className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs rounded-lg border border-white/10 font-medium backdrop-blur-xl"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  {integration}
                </motion.span>
              ))}
              {automation.integrations.length > 3 && (
                <span className="px-3 py-1.5 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/10">
                  +{automation.integrations.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          {automation.features && (
            <div className="mb-4 space-y-2">
              {automation.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: automation.color }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pricing & CTA */}
          <div className="space-y-3">
            <div
              className="flex items-center justify-between p-4 rounded-2xl border-2 relative overflow-hidden backdrop-blur-xl"
              style={{
                backgroundColor: `${automation.color}15`,
                borderColor: `${automation.color}50`
              }}
            >
              <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: automation.color }}>Prix</span>
              <span className="text-xl font-bold" style={{ color: automation.color }}>{automation.pricing}</span>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={automation.cta.url}
                target="_blank"
                className="block w-full py-4 rounded-2xl font-bold text-center relative overflow-hidden group/cta"
                style={{
                  backgroundColor: automation.color,
                  color: '#FFF',
                  boxShadow: `0 8px 32px ${automation.color}50`
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {automation.cta.text}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
