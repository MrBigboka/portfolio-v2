'use client';

import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  opacity?: number;
  overlay?: boolean;
}

export default function VideoBackground({ 
  videoSrc, 
  opacity = 0.8,
  overlay = true 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Assurez-vous que la vidéo se joue automatiquement
    if (videoRef.current) {
      console.log('Tentative de lecture de la vidéo:', videoSrc);
      videoRef.current.play().catch(error => {
        console.error('Erreur lors de la lecture automatique de la vidéo:', error);
      });
    }
  }, [videoSrc]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
      )}
    </div>
  );
}
