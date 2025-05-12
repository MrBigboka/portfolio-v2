import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechBadgeProps {
  name: string;
  className?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '' }) => {
  // Fonction pour obtenir l'URL du logo officiel
  const getLogoUrl = (techName: string): string | null => {
    const techMap: Record<string, string> = {
      'REACT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'NEXT.JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'TYPESCRIPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'TAILWIND': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'TAILWIND CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'NODE.JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'EXPRESS.JS': 'https://cdn.simpleicons.org/express/FFFFFF',
      'MONGODB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      'POSTGRESQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      'SUPABASE': 'https://cdn.simpleicons.org/supabase/3ECF8E',
      'FRAMER': 'https://cdn.simpleicons.org/framer/0055FF',
      'FRAMER MOTION': 'https://cdn.simpleicons.org/framer/0055FF',
      'SHOPIFY': 'https://cdn.simpleicons.org/shopify/7AB55C',
      'N8N': 'https://cdn.simpleicons.org/n8n/FF6D00',
      'MAKE.COM': 'https://cdn.simpleicons.org/integromat/2F8CBB',
      'VERCEL': 'https://cdn.simpleicons.org/vercel/000000',
      'SHADCN': 'https://cdn.simpleicons.org/shadcnui/000000',
      'SHADCN UI': 'https://cdn.simpleicons.org/shadcnui/000000',
      'PRISMA': 'https://cdn.simpleicons.org/prisma/2D3748',
      'MIDJOURNEY': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/midjourney.svg',
      'GIT': 'https://cdn.simpleicons.org/git/F05032',
      'GITHUB': 'https://cdn.simpleicons.org/github/FFFFFF',
      'FIRESTORE': 'https://cdn.simpleicons.org/firebase/FFCA28',
      'AWS': 'https://cdn.simpleicons.org/amazonaws/FF9900',
      'HUGGING FACE': 'https://cdn.simpleicons.org/huggingface/FFBD4F',
      'K8': 'https://cdn.simpleicons.org/kubernetes/326CE5',
      'PYTHON': 'https://cdn.simpleicons.org/python/3776AB',
    };

    // Recherche exacte
    if (techMap[techName]) {
      return techMap[techName];
    }

    // Recherche partielle
    for (const [key, url] of Object.entries(techMap)) {
      if (techName.includes(key)) {
        return url;
      }
    }

    return null;
  };

  const logoUrl = getLogoUrl(name);

  // Utiliser l'image locale pour AWS
  const useLocalImage = name === 'AWS';
  
  return (
    <div 
      className={`px-4 py-2 bg-[#0B1221] hover:bg-[#131F35] border border-white/10 rounded-full transition-colors duration-300 flex items-center gap-2 ${className}`}
      data-component-name="TechBadge"
    >
      {useLocalImage ? (
        <div className="relative w-4 h-4">
          <Image 
            src="/stack/aws.png" 
            alt="AWS logo" 
            width={16} 
            height={16}
            className="object-contain"
          />
        </div>
      ) : logoUrl ? (
        <img 
          src={logoUrl} 
          alt={`${name} logo`} 
          className="w-4 h-4 object-contain"
          style={{ filter: name === 'VERCEL' || name === 'SHADCN UI' ? 'invert(1)' : 'none' }}
          onError={(e) => {
            // En cas d'erreur de chargement, masquer l'image
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : null}
      <span className="text-xs font-medium text-white tracking-wide">{name}</span>
    </div>
  );
};

export default TechBadge;
