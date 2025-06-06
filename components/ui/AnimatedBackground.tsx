'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

// Fonction pour convertir une couleur hexadécimale en format RGB
const hexToRgb = (hex: string): string => {
  // Supprimer le # si présent
  const cleanHex = hex.replace('#', '');
  
  // Convertir en RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  // Retourner au format RGB
  return `${r}, ${g}, ${b}`;
};

interface AnimatedBackgroundProps {
  excludeSelector?: string; // Sélecteur CSS pour les éléments à exclure
  disableInSections?: string[]; // IDs des sections où l'animation doit être désactivée
}

export default function AnimatedBackground({ excludeSelector = '' }: AnimatedBackgroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Animation effect for the canvas
  useEffect(() => {
    // Skip effect execution if not mounted
    if (!isMounted) return;
    
    // Fonction simplifiée pour vérifier si un point est dans une zone exclue
    
    // Fonction pour vérifier si un point est à l'intérieur d'un élément exclu
    const isPointInExcludedElement = (x: number, y: number): boolean => {
      if (!excludeSelector) return false;
      
      const elements = document.querySelectorAll(excludeSelector);
      for (const element of Array.from(elements)) {
        const rect = element.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return true;
        }
      }
      return false;
    };


    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particles
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: boolean;
      pulseSpeed: number;
    }[] = [];
    
    const particleCount = 100;
    const isLightTheme = theme !== 'dark';
    
    // Colors based on theme
    const primaryColor = isLightTheme ? '#0a192f' : '#f5f0e8';
    // Use the dark background color from the theme
    const accentColor = '#d42d1d';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      // Determine if this will be an accent particle
      const isAccent = Math.random() < 0.2;
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.8,
        color: isAccent ? accentColor : (isLightTheme ? primaryColor : '#f5f0e8'),
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() > 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Animation
    let animationFrame: number;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      time += 0.01;
      animationFrame = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Code simplifié - pas de vérification de section

      // Update and draw particles
      particles.forEach(particle => {
        // Add some wave motion
        const waveX = Math.sin(time + particle.x * 0.01) * 0.5;
        const waveY = Math.cos(time + particle.y * 0.01) * 0.5;
        
        particle.x += particle.speedX + waveX * 0.2;
        particle.y += particle.speedY + waveY * 0.2;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Pulse size for some particles
        if (particle.pulse) {
          particle.size += Math.sin(time * 3) * particle.pulseSpeed;
        }
        
        // Vérifier si la particule est dans une zone exclue
        if (!isPointInExcludedElement(particle.x, particle.y)) {
          // Draw particle seulement si elle n'est pas dans une zone exclue
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          // Utiliser directement la couleur si c'est déjà au format rgba ou la convertir si c'est un hex
          ctx.fillStyle = particle.color.startsWith('#') 
            ? `rgba(${hexToRgb(particle.color)}, ${particle.opacity})` 
            : particle.color;
          ctx.fill();
        }

        // Mouse interaction - particles move away from cursor
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 1000;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }

        // Apply some friction
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;

        // Wrap around canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      // Connect particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / 180) * 0.3;
            
            // Determine if this is a connection between accent particles
            const isAccentConnection = 
              particles[i].color === accentColor && 
              particles[j].color === accentColor;
              
            // Choose connection color
            const connectionColor = isAccentConnection ? 
              accentColor : 
              (particles[i].color === accentColor || particles[j].color === accentColor) ? 
                accentColor : primaryColor;
            
            ctx.beginPath();
            ctx.strokeStyle = `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  // Use memoized values for arrays and objects in dependencies to prevent unnecessary re-renders
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, isMounted]); // Removing disableInSections and excludeSelector from dependencies to avoid array size changes

  // Conditionally render the canvas only on the client-side
  if (!isMounted) {
    // Return an empty placeholder with the same dimensions to avoid layout shifts
    return <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
  }
  
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
      style={{ 
        opacity: 0.7,
        zIndex: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
  );
}
