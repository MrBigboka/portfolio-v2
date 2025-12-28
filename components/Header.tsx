'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SmartButton } from '@/components/ui/smart-button';

const navigation = [
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Projets', href: '/#projects' },
  { name: 'Méthode', href: '/#method' },
  { name: 'À propos', href: '/#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Right - CTA */}
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}
