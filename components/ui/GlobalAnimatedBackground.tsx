'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

// Palette de couleurs du portfolio
const colors = {
  bleuNuit: '#0E1A2B',
  cremeClair: '#F8EBD7',
  rougeBrique: '#C3513B',
  beigeFonce: '#D2B28D',
  bleuArdoise: '#2C3E50',
  jauneDoux: '#F4C065'
};

// Couleurs spécifiques pour chaque section
type SectionId = 'projects-section' | 'expertise-section' | 'awards-section' | 'contact-section' | 'default';

const sectionColors: Record<SectionId, string[]> = {
  'projects-section': [colors.bleuArdoise, colors.rougeBrique, colors.jauneDoux],
  'expertise-section': [colors.bleuNuit, colors.bleuArdoise, colors.jauneDoux],
  'awards-section': [colors.bleuNuit, colors.beigeFonce, colors.cremeClair],
  'contact-section': [colors.bleuArdoise, colors.rougeBrique, colors.cremeClair],
  'default': [colors.bleuNuit, colors.bleuArdoise, colors.jauneDoux]
};

interface GlobalAnimatedBackgroundProps {
  sectionId: string;
  opacity?: number;
}

// Helper function to safely get section colors
function getSectionColors(id: string): string[] {
  if (id === 'projects-section' || 
      id === 'expertise-section' || 
      id === 'awards-section' || 
      id === 'contact-section') {
    return sectionColors[id as SectionId];
  }
  return sectionColors['default'];
}

export default function GlobalAnimatedBackground({ 
  sectionId,
  opacity = 0.6
}: GlobalAnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  // Animation effect for the canvas
  useEffect(() => {
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
    
    const particleCount = 80;
    const isLightTheme = theme !== 'dark';
    
    // Get colors for this specific section
    const sectionColorSet = getSectionColors(sectionId);
    
    // Colors based on theme and section
    const primaryColor = isLightTheme ? sectionColorSet[0] : colors.cremeClair;
    const accentColor = sectionColorSet[1] || colors.rougeBrique;
    const accentColor2 = sectionColorSet[2] || colors.jauneDoux;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      // Determine if this will be an accent particle
      const isAccent = Math.random() < 0.15;
      const isAccent2 = !isAccent && Math.random() < 0.1;
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        color: isAccent ? accentColor : isAccent2 ? accentColor2 : primaryColor,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
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
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

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
      });

      // Connect particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / 150) * 0.2;
            
            // Determine if this is a connection between accent particles
            const isAccentConnection = 
              particles[i].color === accentColor && 
              particles[j].color === accentColor;
              
            const isAccent2Connection = 
              particles[i].color === accentColor2 && 
              particles[j].color === accentColor2;
            
            // Choose connection color
            let connectionColor;
            
            if (isAccentConnection) {
              connectionColor = accentColor;
            } else if (isAccent2Connection) {
              connectionColor = accentColor2;
            } else if (particles[i].color === accentColor || particles[j].color === accentColor) {
              connectionColor = accentColor;
            } else if (particles[i].color === accentColor2 || particles[j].color === accentColor2) {
              connectionColor = accentColor2;
            } else {
              connectionColor = primaryColor;
            }
            
            ctx.beginPath();
            ctx.strokeStyle = `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.8;
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
  }, [theme, opacity, sectionId]);
  
  return (
    <div id={sectionId} className="absolute inset-0 -z-10 overflow-hidden" style={{ zIndex: -1 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{ 
          opacity,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
    </div>
  );
}
