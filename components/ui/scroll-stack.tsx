'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ScrollStackItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  status?: string;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
}

export default function ScrollStack({ items, className = '' }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const { top } = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, -top / (container.scrollHeight - window.innerHeight));
      const newIndex = Math.min(
        items.length - 1,
        Math.floor(scrollProgress * items.length)
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items.length]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl mx-auto px-4">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const isFuture = index > activeIndex;

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full"
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  y: isPast ? -100 : isFuture ? 100 : 0,
                  opacity: isActive ? 1 : 0.3,
                  zIndex: isActive ? 10 : isPast ? items.length - index : index,
                  rotateX: isActive ? 0 : isFuture ? 10 : -10,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000,
                }}
              >
                <div className="relative rounded-3xl bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent border border-white/10 p-8 backdrop-blur-sm overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Status Badge */}
                    {item.status && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        {item.status}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                      >
                        Voir le projet
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-purple-500 scale-150'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
