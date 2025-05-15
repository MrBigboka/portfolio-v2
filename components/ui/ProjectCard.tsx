'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Type pour les projets
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  bgColor?: string;
  logo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isLarge?: boolean;
}

export default function ProjectCard({ project, index, isLarge = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Déterminer la couleur de fond en fonction de l'index ou utiliser celle fournie
  const getBgColor = () => {
    if (project.bgColor) return project.bgColor;
    
    const colors = ['#3a1e2e', '#1e2a3a', '#2a1e3a'];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden group ${isLarge ? 'md:col-span-2' : ''}`}
      style={{ backgroundColor: getBgColor() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 md:p-10 flex flex-col h-full">
        {/* En-tête du projet */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            {project.logo && (
              <div className="w-10 h-10 rounded-full bg-black/30 p-1 flex items-center justify-center relative">
                <Image 
                  src={project.logo} 
                  alt={`${project.title} logo`}
                  className="w-full h-full object-contain" 
                  width={40}
                  height={40}
                />
              </div>
            )}
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            className="bg-white/10 p-2 rounded-full"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        {/* Description du projet */}
        <p className="text-white/80 mb-6">{project.description}</p>

        {/* Image du projet */}
        <div className="relative rounded-xl overflow-hidden mb-6 flex-grow">
          <div className="aspect-[16/9] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Tags et lien */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Bouton de lien supprimé */}
        </div>
      </div>
    </motion.div>
  );
}
