'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SmartButton } from '@/components/ui/smart-button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { 
    name: 'Solutions', 
    href: '/#solutions',
    submenu: [
      { name: 'Apps', href: '/#projects?tab=apps', icon: '📱' },
      { name: 'Automatisations', href: '/#projects?tab=automations', icon: '⚡' },
    ]
  },
  { name: 'Méthode', href: '/#method' },
  { name: 'À propos', href: '/#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="relative z-10 group">
          <Image
            src="/logo/smartscaling.png?v=3"
            alt="Smart Scaling"
            width={140}
            height={35}
            className="opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center Navigation - Minimal & Clean */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              {item.submenu ? (
                <>
                  <button className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group flex items-center gap-1">
                    {item.name}
                    <ChevronDown className="w-3 h-3 transition-transform duration-200" style={{ transform: openSubmenu === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  <AnimatePresence>
                    {openSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <span className="text-lg">{subitem.icon}</span>
                            <span>{subitem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right - CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <SmartButton
              variant="cta"
              size="sm"
              href="https://calendly.com/bokamiguel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un appel
            </SmartButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-zinc-900 via-black to-black border-l border-white/10 z-50 md:hidden overflow-y-auto"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Image
                  src="/logo/smartscaling.png?v=3"
                  alt="Smart Scaling"
                  width={140}
                  height={35}
                  className="opacity-90"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.submenu ? (
                      <div className="space-y-1">
                        <div className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                          {item.name}
                        </div>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <span className="text-lg">{subitem.icon}</span>
                            <span className="flex-1">{subitem.name}</span>
                            <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="p-6 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <SmartButton
                    variant="cta"
                    size="md"
                    href="https://calendly.com/bokamiguel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                  >
                    Réserver un appel
                  </SmartButton>
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
