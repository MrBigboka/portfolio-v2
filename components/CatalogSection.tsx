'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Types
type AppType = 'iOS' | 'SaaS' | 'Widget';
type Stage = 'Beta' | 'Production' | 'Live';
type Niche = 'Social' | 'Freelance' | 'Retail' | 'Logistique' | 'RH' | 'Support' | 'Sales' | 'Marketing' | 'Operations';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  label?: string;
  highlight?: boolean;
}

interface App {
  id: string;
  type: 'app';
  name: string;
  description: string;
  shortDesc: string;
  appType: AppType;
  stage: Stage;
  niche: Niche[];
  tags: string[];
  logo: string;
  image: string;
  accentColor: string;
  pricing?: PricingTier[];
  output?: string;
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
  marketingName: string;
  description: string;
  niche: Niche[];
  output: string;
  integrations: string[];
  pricing: string;
  thumbnail: string;
  cta: {
    text: string;
    url: string;
  };
}


export default function CatalogSection() {
  const [activeTab, setActiveTab] = useState<'apps' | 'automations'>('apps');
  const [selectedNiche, setSelectedNiche] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');

  // Apps Data (4 only)
  const apps: App[] = [
    {
      id: 'sidequest',
      type: 'app',
      name: 'SideQuest',
      description: 'Organiser des sorties entre amis = chaos de messages et d\'indécision. SideQuest centralise événements, favoris et recommandations personnalisées.',
      shortDesc: 'Sorties organisées, zéro chaos',
      appType: 'iOS',
      stage: 'Beta',
      niche: ['Social'],
      tags: ['Social', 'Événements', 'iOS'],
      logo: '/projects/sidequest-logo.png',
      image: '/projects/sidequest-mockup.png',
      accentColor: '#8B5CF6',
      cta: {
        text: 'Rejoindre la bêta',
        url: 'https://testflight.apple.com/join/wPWFm761'
      }
    },
    {
      id: 'tracksy',
      type: 'app',
      name: 'Tracksy',
      description: 'Les freelances perdent 3-5h/semaine à tracker leurs heures et générer des factures. Tracksy automatise tout le cycle: suivi du temps → génération de factures → export comptable.',
      shortDesc: 'Facturation automatique pour freelances',
      appType: 'SaaS',
      stage: 'Production',
      niche: ['Freelance'],
      tags: ['Freelance', 'Facturation', 'Temps'],
      logo: '/projects/tracksy_icon.png',
      image: '/projects/tracksy-landing.png',
      accentColor: '#d5ff3f',
      pricing: [
        {
          name: 'À vie',
          price: '39$',
          period: 'one-time',
          label: 'Offre limitée aux 100 premiers',
          highlight: true
        },
        {
          name: 'Annuel',
          price: '6,58$/mois',
          period: 'payé 79$/an',
          label: '2 mois gratuits'
        },
        {
          name: 'Mensuel',
          price: '7,99$/mois',
          label: '14 jours d\'essai gratuit'
        }
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
      description: 'Les PME perdent des informations critiques après chaque appel client. MemoCall transcrit, résume, extrait les actions et pré-remplit les documents automatiquement.',
      shortDesc: 'Vos appels → actions concrètes',
      appType: 'SaaS',
      stage: 'Production',
      niche: ['Retail', 'Logistique'],
      tags: ['Retail', 'Logistique', 'Agent vocal IA', 'RAG', 'Automatisation'],
      logo: '/projects/memocall_icon.png',
      image: '/projects/Memocall-landing.png',
      accentColor: '#FFFFFF',
      output: 'Appels → résumé → actions → document → export CRM',
      cta: {
        text: 'Réserver une démo',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'coresync',
      type: 'app',
      name: 'CoreSync',
      description: 'Les équipes perdent du temps à chercher documentation et processus internes. CoreSync centralise tout avec un agent IA qui répond instantanément.',
      shortDesc: 'Base de connaissances + agent IA',
      appType: 'Widget',
      stage: 'Live',
      niche: ['RH', 'Support'],
      tags: ['RH', 'Connaissance interne', 'Support'],
      logo: '/projects/coresyncLogo.png',
      image: '/projects/coresync.png',
      accentColor: '#9D71E8',
      pricing: [
        {
          name: 'Gratuit',
          price: 'Sur demande',
          label: 'Accès anticipé'
        }
      ],
      cta: {
        text: 'Demander l\'accès',
        url: 'https://coresync.vercel.app'
      }
    }
  ];

  // Automations Data (10)
  const automations: Automation[] = [
    {
      id: 'form-to-meeting',
      type: 'automation',
      name: 'Form → Meeting Auto',
      marketingName: 'Réservation automatique',
      description: 'Formulaire rempli → meeting créé automatiquement dans votre calendrier',
      niche: ['Sales', 'Marketing'],
      output: 'Form → Calendrier + Email confirmation',
      integrations: ['Google Calendar', 'Calendly', 'Gmail'],
      pricing: 'À partir de 299$',
      thumbnail: '/automations/form-meeting.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'call-summary-crm',
      type: 'automation',
      name: 'Résumé d\'appel + CRM',
      marketingName: 'Post-call automation',
      description: 'Appel terminé → résumé IA + tâches créées + CRM mis à jour automatiquement',
      niche: ['Sales', 'Support'],
      output: 'Appel → Résumé + Tâches + CRM update',
      integrations: ['OpenAI', 'HubSpot', 'Salesforce', 'Notion'],
      pricing: 'À partir de 499$',
      thumbnail: '/automations/call-crm.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'auto-quote',
      type: 'automation',
      name: 'Devis automatique',
      marketingName: 'Quote generator',
      description: 'Email reçu → devis généré et envoyé automatiquement avec votre branding',
      niche: ['Sales', 'Operations'],
      output: 'Email → Devis PDF + Envoi auto',
      integrations: ['Gmail', 'Google Docs', 'Stripe'],
      pricing: 'À partir de 399$',
      thumbnail: '/automations/auto-quote.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'client-onboarding',
      type: 'automation',
      name: 'Onboarding client',
      marketingName: 'Client onboarding flow',
      description: 'Nouveau client → séquence d\'emails + tâches créées + accès configuré',
      niche: ['Operations', 'Support'],
      output: 'Nouveau client → Emails + Tâches + Accès',
      integrations: ['HubSpot', 'Gmail', 'Slack', 'Notion'],
      pricing: 'À partir de 599$',
      thumbnail: '/automations/onboarding.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'gmail-outreach',
      type: 'automation',
      name: 'Gmail Outreach + Follow-ups',
      marketingName: 'Email outreach automation',
      description: 'Liste de prospects → emails personnalisés + follow-ups automatiques',
      niche: ['Sales', 'Marketing'],
      output: 'Liste → Emails + Follow-ups auto',
      integrations: ['Gmail', 'Google Sheets', 'OpenAI'],
      pricing: 'À partir de 449$',
      thumbnail: '/automations/outreach.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'sheets-crm-sync',
      type: 'automation',
      name: 'Sheets → CRM Sync',
      marketingName: 'Data sync automation',
      description: 'Google Sheets → Salesforce/HubSpot synchronisation bidirectionnelle en temps réel',
      niche: ['Sales', 'Operations'],
      output: 'Sheets ↔ CRM sync temps réel',
      integrations: ['Google Sheets', 'Salesforce', 'HubSpot'],
      pricing: 'À partir de 399$',
      thumbnail: '/automations/sheets-sync.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'google-maps-leads',
      type: 'automation',
      name: 'Lead Gen Google Maps',
      marketingName: 'Local lead scraper',
      description: 'Recherche Google Maps → extraction des leads + enrichissement + export CRM',
      niche: ['Sales', 'Marketing'],
      output: 'Maps → Leads enrichis + CRM',
      integrations: ['Google Maps', 'OpenAI', 'HubSpot'],
      pricing: 'À partir de 549$',
      thumbnail: '/automations/maps-leads.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'email-discovery',
      type: 'automation',
      name: 'Email Discovery',
      marketingName: 'Contact finder',
      description: 'Domaine d\'entreprise → emails des décideurs trouvés et vérifiés',
      niche: ['Sales', 'Marketing'],
      output: 'Domaine → Emails vérifiés',
      integrations: ['Hunter.io', 'Apollo', 'Google Sheets'],
      pricing: 'À partir de 349$',
      thumbnail: '/automations/email-discovery.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'ai-lead-research',
      type: 'automation',
      name: 'AI Lead Research',
      marketingName: 'Intelligent prospecting',
      description: 'Lead → recherche IA + email personnalisé généré automatiquement',
      niche: ['Sales', 'Marketing'],
      output: 'Lead → Research + Email personnalisé',
      integrations: ['OpenAI', 'Perplexity', 'Gmail'],
      pricing: 'À partir de 499$',
      thumbnail: '/automations/ai-research.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    },
    {
      id: 'pre-call-briefing',
      type: 'automation',
      name: 'News Pre-Call',
      marketingName: 'Pre-call intelligence',
      description: 'Appel prévu → briefing automatique avec actualités du prospect',
      niche: ['Sales'],
      output: 'Calendrier → Briefing avant call',
      integrations: ['Google Calendar', 'Perplexity', 'Slack'],
      pricing: 'À partir de 399$',
      thumbnail: '/automations/pre-call.png',
      cta: {
        text: 'Configurer chez moi',
        url: 'https://calendly.com/bokamiguel'
      }
    }
  ];

  // Get unique niches
  const allNiches = Array.from(new Set([
    ...apps.flatMap(app => app.niche),
    ...automations.flatMap(auto => auto.niche)
  ])).sort();

  // Filter logic
  const filteredApps = apps.filter(app => {
    if (selectedNiche !== 'all' && !app.niche.includes(selectedNiche as Niche)) return false;
    if (selectedStage !== 'all' && app.stage !== selectedStage) return false;
    return true;
  });

  const filteredAutomations = automations.filter(auto => {
    if (selectedNiche !== 'all' && !auto.niche.includes(selectedNiche as Niche)) return false;
    return true;
  });

  const currentItems = activeTab === 'apps' ? filteredApps : filteredAutomations;

  return (
    <section id="projects" className="relative pt-32 pb-32 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-3">
            Catalogue de solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Apps & Automatisations{' '}
            <span className="text-purple-400 italic">prêtes à déployer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Choisissez une solution et réservez un appel pour la configurer chez vous
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('apps')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'apps'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            Apps ({apps.length})
          </button>
          <button
            onClick={() => setActiveTab('automations')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'automations'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            Automatisations ({automations.length})
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {/* Niche filter */}
          <select
            value={selectedNiche}
            onChange={(e) => setSelectedNiche(e.target.value)}
            className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="all">Toutes les niches</option>
            {allNiches.map(niche => (
              <option key={niche} value={niche}>{niche}</option>
            ))}
          </select>

          {/* Stage filter (Apps only) */}
          {activeTab === 'apps' && (
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="all">Tous les stades</option>
              <option value="Beta">Beta</option>
              <option value="Production">Production</option>
              <option value="Live">Live</option>
            </select>
          )}

          {/* Reset filters */}
          {(selectedNiche !== 'all' || selectedStage !== 'all') && (
            <button
              onClick={() => {
                setSelectedNiche('all');
                setSelectedStage('all');
              }}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-700 transition-all"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === 'app' ? (
                  <AppCard app={item} />
                ) : (
                  <AutomationCard automation={item} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {currentItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Aucune solution trouvée avec ces filtres</p>
          </div>
        )}
      </div>
    </section>
  );
}

// App Card Component
function AppCard({ app }: { app: App }) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <motion.div 
      className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Banner Image - Full width at top */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={app.image} 
          alt={app.name} 
          width={600} 
          height={300} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        
        {/* Badge floating on banner */}
        <div className="absolute top-4 right-4 z-10">
          <motion.span 
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-xl"
            style={{ 
              backgroundColor: `${app.accentColor}30`,
              color: app.accentColor,
              border: `2px solid ${app.accentColor}`,
              boxShadow: `0 0 20px ${app.accentColor}40`
            }}
            whileHover={{ scale: 1.1 }}
          >
            {app.stage}
          </motion.span>
        </div>

        {/* Logo floating on banner */}
        <div className="absolute bottom-0 left-6 transform translate-y-1/2 z-10">
          <motion.div 
            className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-900"
            style={{ backgroundColor: app.accentColor }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Image src={app.logo} alt={app.name} width={80} height={80} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 pt-14 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-white">{app.name}</h3>
            {app.appType === 'iOS' && <span className="text-lg">📱</span>}
          </div>
          <p className="text-sm text-gray-500">{app.appType}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{app.shortDesc}</p>

        {/* Output (if exists) */}
        {app.output && (
          <motion.div 
            className="mb-4 p-3 rounded-xl border relative overflow-hidden"
            style={{ 
              backgroundColor: `${app.accentColor}10`,
              borderColor: `${app.accentColor}30`
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20" style={{ backgroundColor: app.accentColor }} />
            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: app.accentColor }}>Flow</p>
            <p className="text-sm text-white font-mono">{app.output}</p>
          </motion.div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.niche.map(niche => (
            <span 
              key={niche} 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: `${app.accentColor}20`,
                color: app.accentColor,
                border: `1px solid ${app.accentColor}40`
              }}
            >
              {niche}
            </span>
          ))}
        </div>

        {/* Pricing - Interactive */}
        {app.pricing && app.pricing.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all mb-2 border border-zinc-700 hover:border-zinc-600"
            >
              <span className="text-sm font-semibold text-white">Voir le pricing</span>
              <motion.span
                animate={{ rotate: showPricing ? 180 : 0 }}
                transition={{ duration: 0.3 }}
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
                  transition={{ duration: 0.3 }}
                  className="space-y-2 overflow-hidden"
                >
                  {app.pricing.map((tier, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-4 rounded-xl border relative overflow-hidden ${
                        tier.highlight 
                          ? 'border-2' 
                          : 'border'
                      }`}
                      style={{
                        backgroundColor: tier.highlight ? `${app.accentColor}15` : 'rgba(24, 24, 27, 0.5)',
                        borderColor: tier.highlight ? app.accentColor : 'rgba(63, 63, 70, 0.5)'
                      }}
                    >
                      {tier.highlight && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ backgroundColor: app.accentColor, color: '#000' }}>
                          POPULAIRE
                        </div>
                      )}
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm font-semibold text-white">{tier.name}</span>
                        <span className="text-2xl font-bold" style={{ color: app.accentColor }}>{tier.price}</span>
                      </div>
                      {tier.period && <p className="text-xs text-gray-400 mb-1">{tier.period}</p>}
                      {tier.label && (
                        <div className="flex items-center gap-1 mt-2">
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
        <div className="mt-auto space-y-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={app.cta.url}
              target="_blank"
              className="block w-full py-4 rounded-xl font-bold text-center transition-all relative overflow-hidden group/cta"
              style={{ 
                backgroundColor: app.accentColor,
                color: app.accentColor === '#FFFFFF' ? '#000' : '#FFF',
                boxShadow: `0 8px 24px ${app.accentColor}50`
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
              className="block w-full py-3 rounded-xl font-medium text-center bg-zinc-800/50 text-white hover:bg-zinc-800 transition-all border border-zinc-700 hover:border-zinc-600"
            >
              {app.ctaSecondary.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Automation Card Component
function AutomationCard({ automation }: { automation: Automation }) {
  // Color mapping based on automation type
  const getAutomationColor = (id: string) => {
    const colorMap: Record<string, string> = {
      'form-to-meeting': '#3B82F6',      // blue
      'call-summary-crm': '#8B5CF6',     // purple
      'auto-quote': '#10B981',           // green
      'client-onboarding': '#F59E0B',    // amber
      'gmail-outreach': '#EF4444',       // red
      'sheets-crm-sync': '#06B6D4',      // cyan
      'google-maps-leads': '#14B8A6',    // teal
      'email-discovery': '#6366F1',      // indigo
      'ai-lead-research': '#EC4899',     // pink
      'pre-call-briefing': '#8B5CF6',    // purple
    };
    return colorMap[id] || '#9333EA';
  };

  const accentColor = getAutomationColor(automation.id);

  return (
    <motion.div 
      className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Badge "Système" */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div 
          className="px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Zap className="w-3.5 h-3.5" />
          Système
        </motion.div>
      </div>

      {/* Hero section with gradient background and centered title */}
      <div 
        className="relative h-48 flex items-center justify-center overflow-hidden p-8"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40 0%, ${accentColor}20 50%, ${accentColor}10 100%)`
        }}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: accentColor }}
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
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: accentColor }}
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Centered title */}
        <motion.div 
          className="relative z-10 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
            {automation.marketingName}
          </h3>
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 mx-auto w-fit">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span className="text-xs text-white font-medium">Automatisation</span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{automation.description}</p>

        {/* Output/Flow - Visual */}
        <motion.div 
          className="mb-4 p-4 rounded-xl border relative overflow-hidden"
          style={{ 
            backgroundColor: `${accentColor}10`,
            borderColor: `${accentColor}30`
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: accentColor }} />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: accentColor }}>⚡ Flow</p>
            <p className="text-sm text-white font-mono leading-relaxed">{automation.output}</p>
          </div>
        </motion.div>

        {/* Integrations - Modern badges */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Intégrations</p>
          <div className="flex flex-wrap gap-2">
            {automation.integrations.slice(0, 3).map(integration => (
              <motion.span 
                key={integration} 
                className="px-3 py-1.5 bg-zinc-800/80 text-gray-300 text-xs rounded-lg border border-zinc-700 font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(39, 39, 42, 1)' }}
              >
                {integration}
              </motion.span>
            ))}
            {automation.integrations.length > 3 && (
              <span className="px-3 py-1.5 bg-zinc-800/50 text-gray-400 text-xs rounded-lg border border-zinc-700">
                +{automation.integrations.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Niches - Colored badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {automation.niche.map(niche => (
            <span 
              key={niche} 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: `${accentColor}20`,
                color: accentColor,
                border: `1px solid ${accentColor}40`
              }}
            >
              {niche}
            </span>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-auto space-y-3">
          <div 
            className="flex items-center justify-between p-4 rounded-xl border-2 relative overflow-hidden"
            style={{ 
              backgroundColor: `${accentColor}15`,
              borderColor: `${accentColor}50`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: accentColor }}>Prix</span>
            <span className="text-xl font-bold" style={{ color: accentColor }}>{automation.pricing}</span>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={automation.cta.url}
              target="_blank"
              className="block w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 relative overflow-hidden group/cta"
              style={{ 
                backgroundColor: accentColor,
                color: '#FFF',
                boxShadow: `0 8px 24px ${accentColor}50`
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {automation.cta.text}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
