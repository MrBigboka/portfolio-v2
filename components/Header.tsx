'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { SmartButton } from '@/components/ui/smart-button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const navigation = [
  { 
    name: 'Solutions', 
    href: '/#solutions',
    submenu: [
      { name: 'Apps', href: '/#projects', description: 'Applications web & mobile' },
      { name: 'Automatisations', href: '/projects?tab=automations', description: 'Systèmes n8n & workflows' },
    ]
  },
  { name: 'Méthode', href: '/#method' },
  { name: 'Collaborations', href: '/#collaborations' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Scroll-driven (continuous) header animation for a smooth, progressive shrink
  const { scrollY } = useScroll();
  const SCROLL_RANGE = [0, 160];
  const headerMaxWidth = useTransform(scrollY, SCROLL_RANGE, [3000, 1200]); // PC: bar becomes a bit less wide
  const containerMarginTop = useTransform(scrollY, SCROLL_RANGE, [0, 12]); // floats away from the top edge
  const containerPaddingX = useTransform(scrollY, SCROLL_RANGE, [0, 16]); // insets on mobile
  const barPaddingY = useTransform(scrollY, SCROLL_RANGE, [16, 10]);
  const barRadius = useTransform(scrollY, SCROLL_RANGE, [0, 18]);
  const barBlur = useTransform(scrollY, SCROLL_RANGE, [0, 14]);
  const bgAlpha = useTransform(scrollY, SCROLL_RANGE, [0, 0.72]);
  const borderAlpha = useTransform(scrollY, SCROLL_RANGE, [0, 0.1]);
  const shadowAlpha = useTransform(scrollY, SCROLL_RANGE, [0, 0.35]);
  const logoScale = useTransform(scrollY, SCROLL_RANGE, [1, 0.9]);
  const barBackgroundColor = useMotionTemplate`rgba(24, 24, 27, ${bgAlpha})`;
  const barBorderColor = useMotionTemplate`rgba(255, 255, 255, ${borderAlpha})`;
  const barBackdropFilter = useMotionTemplate`blur(${barBlur}px)`;
  const barBoxShadow = useMotionTemplate`0 10px 30px -10px rgba(0, 0, 0, ${shadowAlpha})`;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const mobileMenuContent = mobileMenuOpen && mounted ? (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden"
        style={{ zIndex: 99998 }}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-zinc-900 via-black to-black border-l border-white/10 md:hidden overflow-y-auto"
        style={{ zIndex: 99999 }}
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
                      className="group flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <span className="text-white font-medium">{subitem.name}</span>
                      <span className="text-xs text-gray-500">{subitem.description}</span>
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
  ) : null;

  return (
    <>
    <header className="fixed top-0 left-0 right-0" style={{ zIndex: 9997 }}>
      <motion.div
        style={{ maxWidth: headerMaxWidth, marginTop: containerMarginTop, paddingLeft: containerPaddingX, paddingRight: containerPaddingX }}
        className="mx-auto w-full"
      >
        <motion.div
          style={{
            paddingTop: barPaddingY,
            paddingBottom: barPaddingY,
            borderRadius: barRadius,
            backgroundColor: barBackgroundColor,
            borderColor: barBorderColor,
            backdropFilter: barBackdropFilter,
            WebkitBackdropFilter: barBackdropFilter,
            boxShadow: barBoxShadow,
          }}
          className="flex items-center justify-between border px-6 md:px-10"
        >
        {/* Logo - Left */}
        <Link href="/" className="relative z-10 group">
          <motion.div style={{ scale: logoScale }} className="origin-left">
            <Image
              src="/logo/smartscaling.png?v=3"
              alt="Smart Scaling"
              width={140}
              height={35}
              className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
              priority
            />
          </motion.div>
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
                            className="flex flex-col px-4 py-3 text-sm hover:bg-white/5 transition-all"
                          >
                            <span className="text-white font-medium">{subitem.name}</span>
                            <span className="text-xs text-gray-500">{subitem.description}</span>
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
        </motion.div>
      </motion.div>
    </header>
    
    {/* Mobile Menu Portal - Rendered outside header */}
    {mounted && createPortal(
      <AnimatePresence>
        {mobileMenuContent}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
