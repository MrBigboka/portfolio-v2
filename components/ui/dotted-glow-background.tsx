'use client';

import React, { useEffect, useRef } from 'react';

interface DottedGlowBackgroundProps {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  glowColor?: string;
  opacity?: number;
  speedMin?: number;
  speedMax?: number;
}

export function DottedGlowBackground({
  className = '',
  gap = 12,
  radius = 2,
  color = 'rgba(255, 255, 255, 0.1)',
  glowColor = 'rgba(139, 92, 246, 0.5)',
  opacity = 0.6,
  speedMin = 0.4,
  speedMax = 1.3,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Array<{
      x: number;
      y: number;
      opacity: number;
      speed: number;
      direction: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(canvas.width / gap);
      const rows = Math.ceil(canvas.height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * gap,
            y: j * gap,
            opacity: Math.random() * opacity,
            speed: speedMin + Math.random() * (speedMax - speedMin),
            direction: Math.random() > 0.5 ? 1 : -1,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.opacity += dot.speed * dot.direction * 0.01;

        if (dot.opacity >= opacity || dot.opacity <= 0) {
          dot.direction *= -1;
        }

        dot.opacity = Math.max(0, Math.min(opacity, dot.opacity));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${dot.opacity})`);
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          radius * 3
        );
        gradient.addColorStop(0, glowColor.replace(/[\d.]+\)$/g, `${dot.opacity * 0.5})`));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gap, radius, color, glowColor, opacity, speedMin, speedMax]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
