import React from 'react';
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
      'MIDJOURNEY': 'https://cdn.simpleicons.org/midjourney/8A2BE2',
      'GIT': 'https://cdn.simpleicons.org/git/F05032',
      'GITHUB': 'https://cdn.simpleicons.org/github/FFFFFF',
      'FIRESTORE': 'https://cdn.simpleicons.org/firebase/FFCA28',
      'AWS': 'https://cdn.simpleicons.org/amazonaws/FF9900',
      'HUGGING FACE': 'https://cdn.simpleicons.org/huggingface/FFBD4F',
      'K8': 'https://cdn.simpleicons.org/kubernetes/326CE5',
      'PYTHON': 'https://cdn.simpleicons.org/python/3776AB',
      'C#': 'https://cdn.simpleicons.org/csharp/239120',
      '.NET': 'https://cdn.simpleicons.org/dotnet/512BD4',
      'DOTNET': 'https://cdn.simpleicons.org/dotnet/512BD4',
      'KOTLIN': 'https://cdn.simpleicons.org/kotlin/7F52FF',
      'SCALA': 'https://cdn.simpleicons.org/scala/DC322F',
      'DOCKER': 'https://cdn.simpleicons.org/docker/2496ED',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'JAVASCRIPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
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

  // Utiliser l'image locale pour AWS, MAKE.COM et C#
  const useLocalImage = name === 'AWS' || name === 'MAKE.COM' || name === 'C#';
  
  // Fonction pour générer une couleur gradient aléatoire pour chaque badge
  const getRandomGradient = (techName: string) => {
    // Déterministe basé sur le nom de la technologie
    const hash = techName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Palette de couleurs pour les gradients (couleurs vives et attrayantes)
    const gradients = [
      'from-[#D9A441] to-[#B74134]', // Or -> Rouge brique
      'from-[#64FFDA] to-[#0055FF]', // Turquoise -> Bleu
      'from-[#FF6B6B] to-[#FF8E53]', // Rouge -> Orange
      'from-[#4158D0] to-[#C850C0]', // Bleu -> Violet
      'from-[#43E97B] to-[#38F9D7]', // Vert -> Turquoise
      'from-[#FA8BFF] to-[#2BD2FF]', // Rose -> Bleu clair
      'from-[#FBDA61] to-[#FF5ACD]', // Jaune -> Rose
      'from-[#0BA360] to-[#3CBA92]', // Vert foncé -> Vert clair
    ];
    
    return gradients[hash % gradients.length];
  };
  
  const gradientClass = getRandomGradient(name);
  
  // Extraire les couleurs du dégradé pour les utiliser dans l'animation de l'icône
  const extractGradientColors = (gradientClass: string) => {
    const fromMatch = gradientClass.match(/from-\[(#[0-9A-F]+)\]/i);
    const toMatch = gradientClass.match(/to-\[(#[0-9A-F]+)\]/i);
    
    return {
      from: fromMatch ? fromMatch[1] : '#FFFFFF',
      to: toMatch ? toMatch[1] : '#FFFFFF'
    };
  };
  
  const gradientColors = extractGradientColors(gradientClass);
  
  // Fonction pour obtenir une couleur de bordure assortie au dégradé
  const getBorderColor = (gradientClass: string) => {
    const fromMatch = gradientClass.match(/from-\[(#[0-9A-F]+)\]/i);
    return fromMatch ? fromMatch[1] : '#FFFFFF';
  };
  
  const borderColor = getBorderColor(gradientClass);
  
  return (
    <div 
      className={`px-4 py-2 bg-[#0B1221] rounded-full transition-all duration-200 ease-in-out flex items-center gap-2 group ${className}`}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        transition: 'all 0.2s ease-in-out',
      }}
      data-component-name="TechBadge"
      onMouseEnter={(e) => {
        // Animation du badge au survol
        const target = e.currentTarget;
        target.style.backgroundColor = '#131F35';
        target.style.borderColor = `${borderColor}80`; // Ajouter transparence
        target.style.boxShadow = `0 0 10px rgba(${parseInt(borderColor.slice(1, 3), 16)}, ${parseInt(borderColor.slice(3, 5), 16)}, ${parseInt(borderColor.slice(5, 7), 16)}, 0.2)`;
        target.style.transform = 'translateY(-2px)';
        
        // Appliquer le dégradé au texte
        const textElement = target.querySelector('span > span') as HTMLElement;
        if (textElement) {
          const gradientClass = textElement.getAttribute('data-gradient-class');
          textElement.style.color = 'transparent';
          textElement.style.background = `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`;
          textElement.style.webkitBackgroundClip = 'text';
          textElement.style.backgroundClip = 'text';
        }
      }}
      onMouseLeave={(e) => {
        // Réinitialisation du badge
        const target = e.currentTarget;
        target.style.backgroundColor = '#0B1221';
        target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        target.style.boxShadow = 'none';
        target.style.transform = 'translateY(0)';
        
        // Réinitialiser le texte
        const textElement = target.querySelector('span > span') as HTMLElement;
        if (textElement) {
          textElement.style.color = 'white';
          textElement.style.background = 'transparent';
        }
      }}
    >
      {/* Container pour l'icône avec animation */}
      <div className="relative w-4 h-4 transition-all duration-200 ease-in-out overflow-hidden group-hover:scale-110">
        {useLocalImage ? (
          <>
            {/* Image normale */}
            <div className="absolute inset-0 transition-opacity duration-200 ease-in-out group-hover:opacity-0">
              <Image 
                src={
                  name === 'MAKE.COM' ? "/stack/make-icon.png" : 
                  name === 'C#' ? "/stack/c-sharp.png" : 
                  "/stack/aws.png"
                } 
                alt={`${name} logo`} 
                width={16} 
                height={16}
                className="object-contain"
              />
            </div>
            
            {/* Image avec effet au survol */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <Image 
                src={
                  name === 'MAKE.COM' ? "/stack/make-icon.png" : 
                  name === 'C#' ? "/stack/c-sharp.png" : 
                  "/stack/aws.png"
                } 
                alt={`${name} logo`} 
                width={16} 
                height={16}
                className="object-contain"
                style={{
                  filter: `drop-shadow(0 0 2px ${gradientColors.from})`,
                }}
              />
            </div>
          </>
        ) : logoUrl ? (
          <>
            {/* Logo normal */}
            <img 
              src={logoUrl} 
              alt={`${name} logo`} 
              className="absolute inset-0 w-4 h-4 object-contain transition-opacity duration-200 ease-in-out group-hover:opacity-0"
              style={{ filter: name === 'VERCEL' || name === 'SHADCN UI' ? 'invert(1)' : 'none' }}
              onError={(e) => {
                // Fallback en cas d'erreur de chargement
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Logo avec effet au survol */}
            <img 
              src={logoUrl} 
              alt={`${name} logo`} 
              className="absolute inset-0 w-4 h-4 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
              style={{
                filter: `${name === 'VERCEL' || name === 'SHADCN UI' ? 'invert(1) ' : ''}drop-shadow(0 0 2px ${gradientColors.from})`,
              }}
              onError={(e) => {
                // Fallback en cas d'erreur de chargement
                e.currentTarget.style.display = 'none';
              }}
            />
          </>
        ) : null}
      </div>
      <span className="relative overflow-hidden">
        {/* Texte unique avec transition de couleur au survol */}
        <span 
          className="text-xs font-medium tracking-wide transition-all duration-200 ease-in-out"
          style={{ 
            color: 'white',
            transition: 'all 0.2s ease-in-out',
            background: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}
          data-gradient-class={gradientClass}
        >
          {name}
        </span>
      </span>
    </div>
  );
};

export default TechBadge;
