# Catalogue de Solutions - Documentation

## Vue d'ensemble

La section "Projets" a été transformée en un **Catalogue de Solutions** orienté conversion avec 2 catégories distinctes:
1. **APPS** (4 produits)
2. **AUTOMATISATIONS** (10 systèmes n8n)

## Structure des données

### Apps (4)
- **SideQuest** - iOS Beta, Social
- **Tracksy** - SaaS Production, Freelance (avec 3 tiers de pricing)
- **MemoCall** - SaaS Production, Retail/Logistique
- **CoreSync** - Widget Live, RH/Support

### Automatisations (10)
1. Form → Meeting Auto
2. Résumé d'appel + CRM
3. Devis automatique
4. Onboarding client
5. Gmail Outreach + Follow-ups
6. Sheets → CRM Sync
7. Lead Gen Google Maps
8. Email Discovery
9. AI Lead Research
10. News Pre-Call

## Fonctionnalités

### Filtres
- **Par niche**: Social, Freelance, Retail, Logistique, RH, Support, Sales, Marketing, Operations
- **Par stade** (Apps uniquement): Beta, Production, Live
- Bouton "Réinitialiser" pour effacer tous les filtres

### Onglets
- Basculer entre Apps et Automatisations
- Compteur du nombre d'items dans chaque catégorie

### Cards

#### App Card
- Logo + nom + type (iOS/SaaS/Widget)
- Badge de stade (Beta/Production/Live)
- Description courte
- Output (si applicable)
- Tags (max 4 visibles + compteur)
- Pricing détaillé (pour Tracksy: 3 tiers avec labels)
- CTA principal + CTA secondaire (optionnel)
- Glow effect au hover avec couleur d'accent

#### Automation Card
- Badge "Système" avec icône Zap
- Thumbnail avec logo n8n
- Nom marketing + nom technique
- Description
- Flow (Input → Output)
- Intégrations (max 3 visibles + compteur)
- Badges de niche
- Prix "À partir de X$"
- CTA unique "Configurer chez moi"

## Éléments retirés

Les projets suivants ont été **retirés du catalogue public**:
- ❌ NoCaseMTL (boutique/cv)
- ❌ EconoME (prototype non prêt)
- ❌ Portfolio V1

## Images requises

### Automatisations (à créer dans `/public/automations/`)
Les images suivantes sont référencées mais doivent être créées:
- `form-meeting.png`
- `call-crm.png`
- `auto-quote.png`
- `onboarding.png`
- `outreach.png`
- `sheets-sync.png`
- `maps-leads.png`
- `email-discovery.png`
- `ai-research.png`
- `pre-call.png`

**Note**: Pour l'instant, les cards automatisations affichent un placeholder avec le logo "n8n" en attendant les vraies images.

## Pricing Tracksy (détaillé)

### À vie
- **Prix**: 39$ (one-time)
- **Label**: "Offre limitée aux 100 premiers"
- **Highlight**: Oui (fond purple)

### Annuel
- **Prix**: 6,58$/mois
- **Période**: payé 79$/an
- **Label**: "2 mois gratuits"

### Mensuel
- **Prix**: 7,99$/mois
- **Label**: "14 jours d'essai gratuit"

## CTA par solution

| Solution | CTA Principal | CTA Secondaire |
|----------|--------------|----------------|
| SideQuest | Rejoindre la bêta | - |
| Tracksy | Commencer l'essai gratuit | Voir le pricing |
| MemoCall | Réserver une démo | - |
| CoreSync | Demander l'accès | - |
| Automatisations | Configurer chez moi | - |

## Design

### Couleurs d'accent
- SideQuest: `#8B5CF6` (purple)
- Tracksy: `#d5ff3f` (lime)
- MemoCall: `#FFFFFF` (white)
- CoreSync: `#9D71E8` (light purple)
- Automatisations: `#9333EA` (purple-600)

### Contraste amélioré
- Texte blanc sur fond zinc-900
- Borders zinc-800 → purple-500/50 au hover
- CTA avec couleur d'accent pleine opacité
- Labels et badges avec backgrounds semi-transparents

### Responsive
- Grid: 1 col (mobile) → 2 cols (md) → 3 cols (lg)
- Cards en hauteur complète avec flex-col
- CTA toujours en bas (mt-auto)

## Acceptance Criteria

✅ Différence claire entre Apps et Automatisations (onglets)
✅ Filtres fonctionnels (niche + stade)
✅ NoCaseMTL et EconoME retirés
✅ Tracksy affiche 3 options de pricing
✅ Automatisations avec badge "Système" + logo n8n
✅ Pricing "À partir de X$" pour automatisations
✅ CTA unique "Configurer chez moi" pour automatisations
✅ Contraste amélioré pour lisibilité
✅ Tags limités à 4 max visibles + compteur
✅ Output/Flow affiché pour chaque solution

## Prochaines étapes

1. Créer les images pour les automatisations dans `/public/automations/`
2. Tester le catalogue sur mobile et ajuster si nécessaire
3. Ajouter des animations d'entrée plus sophistiquées (optionnel)
4. Intégrer le tracking analytics pour les clics CTA
