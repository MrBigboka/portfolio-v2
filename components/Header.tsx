'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Linkedin, Github } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Détecter le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 dark:text-white ${
      scrolled ? 'bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm shadow-md border-b border-gray-200/50 dark:border-white/10' : 'bg-transparent border-transparent'
    }`}>
      <div className="absolute inset-0 transition-colors duration-300 -z-10 bg-transparent"></div>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo minimaliste */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/logo-miguel-transp.png" 
            alt="Miguel" 
            width={50} 
            height={50}
            className="relative z-10"
            priority
          />
        </motion.div>
        
        {/* Navigation */}
        <motion.nav 
          className="flex gap-6 items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            href="/cv/cv 2025.pdf" 
            target="_blank"
            className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
            aria-label="Télécharger mon CV 2025"
          >
            <FileText size={18} />
            <span className="font-medium tracking-wide hidden md:inline">CV 2025</span>
          </Link>
          <Link 
            href="https://linkedin.com/in/miguel-boka" 
            target="_blank"
            className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <Linkedin size={18} />
            <span className="font-medium tracking-wide hidden md:inline">LINKEDIN</span>
          </Link>
          <Link 
            href="https://github.com/MrBigboka" 
            target="_blank"
            className="text-[#0a192f] dark:text-[#f5f0e8] hover:text-[#d42d1d] dark:hover:text-[#d42d1d] font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <Github size={18} />
            <span className="font-medium tracking-wide hidden md:inline">GITHUB</span>
          </Link>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
