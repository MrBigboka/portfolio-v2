
import React from 'react';
import { motion } from 'framer-motion';
import TechBadge from './TechBadge';

interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = '' }) => {
  const technologies = [
    'SHOPIFY',
    'TAILWIND CSS',
    'NEXT.JS',
    'REACT',
    'TYPESCRIPT',
    'FRAMER MOTION',
    'NODE.JS',
    'EXPRESS.JS',
    'FIRESTORE',
    'AWS',
    'N8N',
    'MAKE.COM',
    'LLM',
    'MIDJOURNEY',
    'ZUSTAND',
    'ZOD',
    'POSTGRESQL',
    'MONGODB',
    'PRISMA',
    'GIT',
    'GITHUB',
    'VERCEL',
  ];

  return (
    <div className={`${className}`}>
      <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">TECHNOLOGIES UTILISÉES</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <TechBadge name={tech} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
