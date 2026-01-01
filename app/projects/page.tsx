'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Mail, Users, BarChart3, Database, FileText, MessageSquare, TrendingUp, UserPlus, Headphones, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { AvatarStack } from '@/components/ui/avatar-stack';
import { IntegrationTooltip } from '@/components/ui/integration-tooltip';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  logo?: string;
  category: 'App' | 'Automation';
  pricing: string;
  url?: string;
  isVertical?: boolean;
  bgColor?: string;
  icon?: string;
  tags?: string[];
  cta?: string;
  benefits?: string[];
  roi?: string;
  technologies?: string[];
  niche?: string;
  problem?: string;
  solution?: string;
  setup?: string;
  integrations?: string[];
}

const automationIcons: Record<string, React.ReactNode> = {
  'crm-auto': <Users className="w-10 h-10" />,
  'lead-gen': <TrendingUp className="w-10 h-10" />,
  'content-auto': <FileText className="w-10 h-10" />,
  'data-sync': <Database className="w-10 h-10" />,
  'email-auto': <Mail className="w-10 h-10" />,
  'invoice-auto': <FileText className="w-10 h-10" />,
  'social-auto': <MessageSquare className="w-10 h-10" />,
  'analytics-auto': <BarChart3 className="w-10 h-10" />,
  'onboarding-auto': <UserPlus className="w-10 h-10" />,
  'support-auto': <Headphones className="w-10 h-10" />
};

const solutions: Solution[] = [
  // Apps
  {
    id: 'sidequest',
    title: 'SideQuest',
    subtitle: 'Organise tes sorties entre amis',
    description: 'App mobile iOS pour organiser des sorties. Crée des événements, découvre des lieux recommandés, invite tes amis et centralise tes activités sociales. Recommandations personnalisées basées sur tes préférences.',
    image: '/projects/sidequest-mockup.png',
    logo: '/projects/sidequest-logo.png',
    category: 'App',
    pricing: 'Gratuit',
    url: 'https://testflight.apple.com/join/wPWFm761',
    isVertical: true,
    cta: 'Rejoindre la bêta',
    niche: 'Social App',
    benefits: [
      'Création d\'événements en 30 secondes',
      'Découverte de lieux via algorithme ML',
      'Invitations et gestion de groupes',
      'Suggestions personnalisées par ville',
      'Calendrier social intégré',
      'Partage d\'itinéraires',
      'Notifications intelligentes',
      'Mode hors-ligne'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Google Maps API', 'PostgreSQL', 'Push Notifications'],
    tags: ['Social', 'Événements', 'Géolocalisation', 'Recommandations', 'iOS']
  },
  {
    id: 'tracksy',
    title: 'Tracksy',
    subtitle: 'Time tracking & facturation freelance',
    description: 'Plateforme SaaS complète pour freelances et consultants. Suivez votre temps avec précision sur chaque tâche et projet, générez automatiquement des factures professionnelles, analysez votre rentabilité avec des KPIs détaillés, et identifiez vos projets les plus profitables. Intégration Stripe pour paiements en ligne.',
    image: '/projects/tracksy-landing.png',
    logo: '/projects/tracksy_icon.png',
    category: 'App',
    pricing: '9$/mois',
    url: 'https://tracksy.me',
    cta: 'S\'inscrire',
    niche: 'SaaS Freelance',
    benefits: [
      'Timer intelligent par tâche et projet',
      'Génération PDF de factures automatique',
      'Dashboard analytics avec graphiques',
      'Calcul automatique de rentabilité',
      'Export comptable (CSV, Excel)',
      'Multi-devises et multi-clients',
      'Rappels de paiement automatiques',
      'Rapports hebdomadaires par email'
    ],
    roi: 'Gagnez 5h/semaine en automatisant votre facturation et économisez 200$/mois en outils',
    technologies: ['Next.js 14', 'Prisma ORM', 'PostgreSQL', 'Stripe API', 'PDF Generation', 'Chart.js', 'TailwindCSS', 'Vercel'],
    tags: ['SaaS', 'Freelance', 'Time Tracking', 'Facturation', 'Analytics', 'B2B']
  },
  {
    id: 'memocall',
    title: 'MemoCall',
    subtitle: 'Transforme tes appels en actions IA',
    description: 'IA vocale pour automatiser tes appels. Transcription temps réel, résumés intelligents, extraction d\'infos clés, remplissage auto de CRM et actions post-appel. Utilise l\'IA pour ne plus jamais perdre d\'informations importantes.',
    image: '/projects/Memocall-landing.png',
    logo: '/projects/memocall_icon.png',
    category: 'App',
    pricing: 'Sur mesure',
    url: 'https://memocall.ai',
    cta: 'Accès anticipé',
    niche: 'IA Vocale',
    benefits: [
      'Transcription temps réel (Whisper)',
      'Résumés structurés par IA',
      'Extraction d\'entités et données clés',
      'Remplissage automatique CRM',
      'Actions post-appel (emails, tasks)',
      'RAG avec votre base de connaissances',
      'Intégration Calendly/Zoom/Teams',
      'Analyse de sentiment et insights'
    ],
    roi: 'Économisez 10h/semaine de saisie manuelle et augmentez la qualité de suivi de 80%',
    technologies: ['OpenAI GPT-4', 'Whisper API', 'RAG', 'Pinecone Vector DB', 'LangChain', 'Webhooks', 'n8n', 'Python', 'FastAPI'],
    tags: ['IA', 'Vocal', 'Transcription', 'Automation', 'CRM', 'B2B', 'Enterprise']
  },
  {
    id: 'coresync',
    title: 'CoreSync',
    subtitle: 'Agent IA encyclopédique interne',
    description: 'Agent IA conversationnel sur mesure pour votre entreprise. Indexe et comprend toute votre documentation, procédures, et données internes. Répond instantanément aux questions de vos équipes avec contexte précis. En évolution vers manufacture: analyse de production, optimisation de processus, prédiction de maintenance, et automatisation de workflows industriels.',
    image: '/projects/coresync.png',
    logo: '/projects/coresyncLogo.png',
    category: 'App',
    pricing: 'Sur mesure',
    url: 'https://coresync.vercel.app',
    cta: 'Découvrir',
    niche: 'Agent IA',
    benefits: [
      'Indexation complète de vos documents',
      'Recherche sémantique avancée',
      'Réponses contextuelles instantanées',
      'Multi-sources (PDF, Notion, Drive)',
      'Formation continue automatique',
      'Interface chat intuitive',
      'Analytics d\'utilisation',
      'Bientôt: analyse manufacture et IoT'
    ],
    roi: 'Réduisez de 70% le temps de recherche d\'information et accélérez l\'onboarding de 3 semaines',
    technologies: ['LangChain', 'Pinecone Vector DB', 'OpenAI GPT-4', 'Next.js 14', 'Vector Search', 'Python', 'PostgreSQL', 'Redis'],
    tags: ['IA', 'Knowledge Base', 'Enterprise', 'RAG', 'Chatbot', 'Manufacture', 'B2B']
  },
  
  // Automatisations
  {
    id: 'crm-auto',
    title: 'CRM Automation',
    subtitle: 'Suivi clients, relances, pipeline et scoring automatisé',
    description: 'Automatisez complètement votre CRM avec relances intelligentes, scoring de leads, et mise à jour automatique du pipeline.',
    image: '',
    category: 'Automation',
    pricing: '299',
    bgColor: '#8B5CF6',
    niche: 'Agences & SaaS',
    problem: 'Perte de leads par manque de suivi',
    solution: 'Relances automatisées et scoring intelligent',
    setup: '2 jours',
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'Gmail'],
    benefits: [
      'Zéro lead oublié',
      'Scoring automatique',
      'Relances personnalisées',
      'Rapports en temps réel'
    ],
    roi: '+40% de conversion sur leads existants'
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    subtitle: 'Extraction, enrichissement et qualification de prospects',
    description: 'Extraction automatique de prospects qualifiés, enrichissement des données avec informations de contact, et export vers votre CRM.',
    image: '',
    category: 'Automation',
    pricing: '399',
    bgColor: '#8B5CF6',
    niche: 'B2B & Sales',
    problem: 'Prospection manuelle chronophage',
    solution: 'Scraping intelligent et enrichissement automatique',
    setup: '1 jour',
    integrations: ['Apollo', 'Hunter', 'LinkedIn', 'Google Sheets'],
    benefits: [
      'Base de prospects qualifiés',
      'Enrichissement automatique',
      'Export CRM direct',
      'Mise à jour continue'
    ],
    roi: 'Générez 500+ leads/mois automatiquement'
  },
  {
    id: 'content-auto',
    title: 'Content Pipeline',
    subtitle: 'Création, planification et publication multi-canal',
    description: 'Pipeline complet de création de contenu avec IA, planification intelligente, et publication automatique sur tous vos canaux.',
    image: '',
    category: 'Automation',
    pricing: '249',
    bgColor: '#8B5CF6',
    niche: 'Marketing & Médias',
    problem: 'Gestion de contenu complexe et chronophage',
    solution: 'Pipeline automatisé de bout en bout',
    setup: '2 jours',
    integrations: ['Buffer', 'Hootsuite', 'WordPress', 'OpenAI'],
    benefits: [
      'Création assistée par IA',
      'Publication multi-canal',
      'Calendrier intelligent',
      'Analytics centralisés'
    ],
    roi: 'Publiez 10x plus de contenu en même temps'
  },
  {
    id: 'data-sync',
    title: 'Data Sync',
    subtitle: 'Synchronisation bidirectionnelle entre vos outils',
    description: 'Synchronisation en temps réel de vos données entre tous vos outils, bidirectionnelle et sans perte d\'information.',
    image: '',
    category: 'Automation',
    pricing: '199',
    bgColor: '#8B5CF6',
    niche: 'Ops & IT',
    problem: 'Données désynchronisées entre outils',
    solution: 'Sync bidirectionnelle en temps réel',
    setup: '1 jour',
    integrations: ['Salesforce', 'HubSpot', 'Airtable', 'PostgreSQL'],
    benefits: [
      'Sync temps réel',
      'Bidirectionnelle',
      'Zéro perte de données',
      'Multi-sources'
    ],
    roi: 'Éliminez 100% des erreurs de saisie'
  },
  {
    id: 'email-auto',
    title: 'Email Automation',
    subtitle: 'Séquences personnalisées et follow-ups intelligents',
    description: 'Séquences d\'emails personnalisées avec follow-ups intelligents basés sur le comportement, A/B testing automatique.',
    image: '',
    category: 'Automation',
    pricing: '149',
    bgColor: '#8B5CF6',
    niche: 'Sales & Marketing',
    problem: 'Follow-ups manuels inefficaces',
    solution: 'Séquences intelligentes automatisées',
    setup: '1 jour',
    integrations: ['Gmail', 'Outlook', 'SendGrid', 'Mailchimp'],
    benefits: [
      'Personnalisation automatique',
      'Follow-ups intelligents',
      'A/B testing intégré',
      'Tracking avancé'
    ],
    roi: '+60% de taux de réponse'
  },
  {
    id: 'invoice-auto',
    title: 'Invoice Flow',
    subtitle: 'Génération et envoi automatique de factures',
    description: 'Génération automatique de factures professionnelles, envoi programmé, relances de paiement, et intégration comptable.',
    image: '',
    category: 'Automation',
    pricing: '179',
    bgColor: '#8B5CF6',
    niche: 'Freelance & PME',
    problem: 'Facturation manuelle et relances oubliées',
    solution: 'Facturation et relances 100% automatiques',
    setup: '1 jour',
    integrations: ['Stripe', 'QuickBooks', 'Xero', 'PayPal'],
    benefits: [
      'Génération automatique',
      'Relances programmées',
      'Suivi des paiements',
      'Export comptable'
    ],
    roi: 'Réduisez les délais de paiement de 40%'
  },
  {
    id: 'social-auto',
    title: 'Social Media Bot',
    subtitle: 'Gestion et publication automatisée sur réseaux sociaux',
    description: 'Gestion complète de vos réseaux sociaux avec publication automatique, engagement intelligent, et analytics centralisés.',
    image: '',
    category: 'Automation',
    pricing: '229',
    bgColor: '#8B5CF6',
    niche: 'Marketing & Influence',
    problem: 'Gestion multi-comptes chronophage',
    solution: 'Bot intelligent multi-plateformes',
    setup: '2 jours',
    integrations: ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'],
    benefits: [
      'Publication automatique',
      'Engagement intelligent',
      'Multi-comptes',
      'Analytics unifiés'
    ],
    roi: 'Gérez 10 comptes en 30min/jour'
  },
  {
    id: 'analytics-auto',
    title: 'Analytics Pipeline',
    subtitle: 'Collecte de données et rapports automatisés',
    description: 'Pipeline complet de collecte de données, génération de rapports automatiques, dashboards en temps réel, et alertes intelligentes.',
    image: '',
    category: 'Automation',
    pricing: '279',
    bgColor: '#8B5CF6',
    niche: 'Data & Analytics',
    problem: 'Rapports manuels et données dispersées',
    solution: 'Pipeline analytics automatisé',
    setup: '2 jours',
    integrations: ['Google Analytics', 'Mixpanel', 'Tableau', 'Slack'],
    benefits: [
      'Collecte automatique',
      'Rapports programmés',
      'Dashboards temps réel',
      'Alertes intelligentes'
    ],
    roi: 'Économisez 15h/semaine de reporting'
  },
  {
    id: 'onboarding-auto',
    title: 'Onboarding Flow',
    subtitle: 'Parcours d\'accueil client entièrement automatisé',
    description: 'Parcours d\'onboarding client complet avec emails de bienvenue, création de tâches, suivi automatique, et expérience personnalisée.',
    image: '',
    category: 'Automation',
    pricing: '199',
    bgColor: '#8B5CF6',
    niche: 'SaaS & Services',
    problem: 'Onboarding manuel et incohérent',
    solution: 'Parcours automatisé et personnalisé',
    setup: '2 jours',
    integrations: ['HubSpot', 'Intercom', 'Notion', 'Slack'],
    benefits: [
      'Parcours personnalisé',
      'Emails automatiques',
      'Tâches créées',
      'Suivi en temps réel'
    ],
    roi: '+50% de rétention client'
  },
  {
    id: 'support-auto',
    title: 'Support Automation',
    subtitle: 'Tickets, réponses IA et escalade intelligente',
    description: 'Système de support automatisé avec réponses IA, escalade intelligente vers humains, et base de connaissances auto-apprenante.',
    image: '',
    category: 'Automation',
    pricing: '349',
    bgColor: '#8B5CF6',
    niche: 'Support & Service Client',
    problem: 'Volume de tickets ingérable',
    solution: 'IA + escalade intelligente',
    setup: '3 jours',
    integrations: ['Zendesk', 'Intercom', 'OpenAI', 'Notion'],
    benefits: [
      'Réponses IA instantanées',
      'Escalade intelligente',
      'Base auto-apprenante',
      'Satisfaction client +'
    ],
    roi: 'Résolvez 70% des tickets automatiquement'
  }
];

const categories = ['Tous', 'Apps', 'Automatisations'];

const filterTags = [
  { label: 'Social App', category: 'App' },
  { label: 'SaaS', category: 'App' },
  { label: 'IA', category: 'App' },
  { label: 'CRM', category: 'Automation' },
  { label: 'Marketing', category: 'Automation' },
  { label: 'Data', category: 'Automation' },
  { label: 'Email', category: 'Automation' },
  { label: 'Ventes', category: 'Automation' },
  { label: 'Support', category: 'Automation' },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Memoize filtered solutions to prevent unnecessary recalculations
  const filteredSolutions = useMemo(() => {
    let filtered = solutions;
    
    // Filter by category
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(s => 
        selectedCategory === 'Apps' ? s.category === 'App' : s.category === 'Automation'
      );
    }
    
    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(s => 
        selectedTags.some(tag => 
          s.niche?.includes(tag) || s.tags?.includes(tag)
        )
      );
    }
    
    return filtered;
  }, [selectedCategory, selectedTags]);

  // Memoize pagination calculations
  const { totalPages, currentSolutions } = useMemo(() => {
    const total = Math.ceil(filteredSolutions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const current = filteredSolutions.slice(startIndex, endIndex);
    return { totalPages: total, currentSolutions: current };
  }, [filteredSolutions, currentPage]);

  // Memoize category change handler
  const handleCategoryChange = useCallback((cat: string) => {
    setSelectedCategory(cat);
    setSelectedTags([]);
    setCurrentPage(1);
  }, []);

  // Toggle tag filter
  const toggleTag = useCallback((tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  }, []);

  // Memoize solution click handler
  const handleSolutionClick = useCallback((solution: Solution) => {
    if (solution.category === 'App' && solution.url) {
      window.open(solution.url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedSolution(solution);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section - Style Netflix */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                Nos Réalisations
              </h1>
              <p className="text-gray-400 text-sm">
                Apps, SaaS et automatisations sur mesure
              </p>
            </div>
            
            {/* Category Tabs - Style Netflix */}
            <div className="flex gap-6 border-b border-white/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`pb-3 text-sm font-medium transition-all duration-300 relative ${
                    selectedCategory === cat
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {filterTags
                .filter(tag => selectedCategory === 'Tous' || 
                  (selectedCategory === 'Apps' && tag.category === 'App') ||
                  (selectedCategory === 'Automatisations' && tag.category === 'Automation'))
                .map((tag) => (
                  <button
                    key={tag.label}
                    onClick={() => toggleTag(tag.label)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedTags.includes(tag.label)
                        ? 'bg-purple-500 text-white border border-purple-400'
                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid - Format Large avec Info Visible */}
      <section className="relative px-6 pb-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {currentSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.015 }}
                  className="group"
                >
                  {/* iOS Style Card */}
                  <div 
                    onClick={() => handleSolutionClick(solution)}
                    className="relative rounded-[28px] overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/10 group h-[480px] flex flex-col cursor-pointer will-change-transform">
                    {solution.category === 'App' ? (
                      <>
                        {/* App Card - iOS Style */}
                        <div className="relative h-56 overflow-hidden flex-shrink-0">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            loading="lazy"
                            className={`transition-transform duration-500 ease-out group-hover:scale-105 ${solution.isVertical ? 'object-cover object-top' : 'object-cover'}`}
                            style={solution.isVertical ? { objectPosition: 'top' } : {}}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
                          
                          {/* Logo floating */}
                          {solution.logo && (
                            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-[18px] bg-black/40 backdrop-blur-xl shadow-2xl p-3 border border-white/10">
                              <Image
                                src={solution.logo}
                                alt={solution.title}
                                width={64}
                                height={64}
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                            {solution.title}
                          </h3>
                          <p className="text-[13px] text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                            {solution.subtitle}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            {solution.niche && (
                              <span className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                                {solution.niche}
                              </span>
                            )}
                          </div>
                          
                          <div className="mt-auto pt-3 border-t border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</span>
                              <span className="text-sm font-semibold text-white">{solution.pricing}</span>
                            </div>
                            {solution.url && (
                              <a
                                href={solution.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[14px] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black hover:from-zinc-700 hover:via-zinc-800 hover:to-zinc-900 border border-white/20 hover:border-white/30 text-white text-sm font-semibold transition-all duration-300 shadow-lg active:scale-95"
                              >
                                <span>{solution.cta || 'Ouvrir'}</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Automation Card - iOS Style */}
                        <div className="relative h-56 overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent">
                            <DottedGlowBackground
                              gap={40}
                              radius={1}
                              color="rgba(255, 255, 255, 0.02)"
                              glowColor="rgba(139, 92, 246, 0.1)"
                              opacity={0.15}
                              speedMin={0.2}
                              speedMax={0.3}
                            />
                          </div>
                          
                          {/* Icon with iOS style */}
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-20 h-20 rounded-[22px] bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-xl border border-purple-400/20 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-200 will-change-transform">
                              <div className="text-purple-400">
                                {automationIcons[solution.id]}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-white tracking-tight">
                              {solution.title}
                            </h3>
                          </div>
                          <p className="text-[13px] text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                            {solution.subtitle}
                          </p>
                          
                          {/* Tags */}
                          {solution.tags && solution.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {solution.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Integrations with icons */}
                          {solution.integrations && solution.integrations.length > 0 && (
                            <div className="mb-3">
                              <AvatarStack integrations={solution.integrations} maxDisplay={4} />
                            </div>
                          )}
                          
                          <div className="mt-auto pt-3 border-t border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">À partir de</span>
                              <span className="text-sm font-semibold text-white">{solution.pricing}$/mois</span>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); setSelectedSolution(solution); }}
                              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[14px] bg-gradient-to-br from-zinc-800/50 via-zinc-900/50 to-black/50 hover:from-zinc-700/60 hover:via-zinc-800/60 hover:to-zinc-900/60 backdrop-blur-xl border border-white/10 hover:border-white/20 text-white text-sm font-semibold transition-all duration-300 active:scale-95"
                            >
                              <span>En savoir plus</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
      <Footer />

      {/* Modal Vue Détaillée */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 rounded-[32px] border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header Image */}
              {selectedSolution.category === 'App' && selectedSolution.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={selectedSolution.image}
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Title & Subtitle */}
                <div className="mb-8">
                  {selectedSolution.logo && (
                    <div className="w-20 h-20 rounded-[22px] bg-white/5 border border-white/10 p-3 mb-6">
                      <Image
                        src={selectedSolution.logo}
                        alt={selectedSolution.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h2 className="text-4xl font-bold text-white mb-3">{selectedSolution.title}</h2>
                  <p className="text-xl text-gray-400 mb-4">{selectedSolution.subtitle}</p>
                  <p className="text-base text-gray-300 leading-relaxed">{selectedSolution.description}</p>
                </div>

                {/* Benefits - Only for Automations */}
                {selectedSolution.category === 'Automation' && selectedSolution.benefits && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Ce que vous obtenez</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSolution.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Automation Details - Simplified */}
                {selectedSolution.category === 'Automation' && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedSolution.niche && (
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">Pour</p>
                        <p className="text-sm font-semibold text-white">{selectedSolution.niche}</p>
                      </div>
                    )}
                    {selectedSolution.setup && (
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">Setup</p>
                        <p className="text-sm font-semibold text-white">{selectedSolution.setup}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Integrations - With Logos */}
                {selectedSolution.integrations && selectedSolution.integrations.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase mb-3">Compatible avec</p>
                    <IntegrationTooltip integrations={selectedSolution.integrations} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
