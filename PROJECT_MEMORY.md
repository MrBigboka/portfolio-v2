# Project Memory

## App Overview
Portfolio personnel (v2) de Miguel présentant ses applications et automatisations. Vitrine de produits SaaS/IA construits, avec landing animée et page dédiée listant toutes les solutions filtrables.

## Tech Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS, shadcn/ui (`components/ui`)
- Framer Motion + GSAP (ScrollTrigger) pour les animations
- Lucide pour les icônes

## Architecture
- `app/` — routes App Router. `app/projects/page.tsx` = page complète des solutions (filtres par catégorie/tags, pagination, modal détail).
- `components/` — composants partagés. `ProjectsSection.tsx` = section projets de la landing (cartes scrollées + panneau détail épinglé). `TechBadge.tsx` = badge techno avec logos distants. `components/ui/` = primitives shadcn.
- `public/projects/` = visuels des projets, `public/logo/` = logos/icônes de marque.

## Core Features
- Landing avec sections animées (Home a l'`AnimatedBackground`, pas la section Projects).
- `ProjectsSection` : liste les projets phares (format Problème → Système → Impact), cartes cliquables vers `demoUrl`, styles thématiques par `project.id`.
- Page `/projects` : catalogue data-driven (apps + automatisations), filtres et pagination.

## Data Model
Deux sources de données de projets, à garder synchronisées manuellement :
- `ProjectsSection.tsx` → tableau `projects: ExtendedProject[]` (champs: id, title, description, image, hoverImage, tags, demoUrl, githubUrl, bgColor, shortDesc, features, accentColor, logo, status).
- `app/projects/page.tsx` → tableau `solutions: Solution[]` (champs: id, title, subtitle, description, image, logo, category, pricing, url, cta, niche, benefits, roi, technologies, tags, isVertical, bgColor).

Important : dans `ProjectsSection.tsx`, plusieurs styles sont conditionnés par `project.id` (backgroundColor, gradient de fond, lueur de miniature, boxShadow). Ajouter un nouveau projet nécessite d'ajouter ses cas de couleur dans ces switches.

`TechBadge` mappe des noms de tech (MAJUSCULES) vers des logos. Utiliser des tags reconnus (ex: NEXT.JS, TYPESCRIPT, SUPABASE, OPENAI) pour afficher l'icône.

## Integrations
Pas d'intégration backend dans le portfolio lui-même ; les projets pointent vers leurs sites de production via `demoUrl`/`url`.

## Important Flows
Ajout d'un projet : ajouter l'entrée dans `projects` (`ProjectsSection.tsx`) et dans `solutions` (`app/projects/page.tsx`), déposer image dans `public/projects/` et logo dans `public/logo/`, puis ajouter les cas de style par `id` dans `ProjectsSection.tsx`.

## Recent Major Changes

### 2026-06-20 — Ajout du projet AdFrame
- Nouveau projet phare AdFrame (plateforme IA générative pour pubs e-commerce, getadframe.com).
- Ajouté en tête de `projects` dans `components/ProjectsSection.tsx` (thème orange `#FF5722`, status `Live`) et des cas de style par `id='adframe'` (backgroundColor, gradient, lueur, boxShadow).
- Ajouté en tête des Apps dans `app/projects/page.tsx` (`solutions`).
- Assets : `public/projects/AdFrame.png` (screenshot), `public/logo/adframe_icon.png` (icône), `public/logo/adframe_logo_light.png` (logo long disponible).

## Known Limitations
- Les données de projets sont dupliquées entre `ProjectsSection.tsx` et `app/projects/page.tsx` (pas de source unique).
- Les styles thématiques par projet sont codés en dur via des switches sur `project.id` dans `ProjectsSection.tsx`.

## Future Improvements
- Centraliser les données de projets dans un module partagé pour éviter la duplication.
- Dériver les styles thématiques depuis `accentColor` plutôt que des switches par `id`.
