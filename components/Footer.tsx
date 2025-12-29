'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const generalLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Projets', href: '#projects' },
    { name: 'Méthode', href: '#method' },
    { name: 'Contact', href: '#contact' },
  ];

  const projectLinks = [
    { name: 'Tracksy', href: 'https://tracksy.me' },
    { name: 'MemoCall', href: 'https://memocall.ai' },
    { name: 'CoreSync', href: 'https://coresync.vercel.app' },
    { name: 'SideQuest', href: '#' },
  ];

  const moreLinks = [
    { name: 'GitHub', href: 'https://github.com/MrBigboka' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/miguel-boka-51b407223' },
    { name: 'Email', href: 'mailto:miguel.boka@smartscaling.dev' },
  ];

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Left - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="mb-4">
              <Image 
                src="/logo/smartscaling.png" 
                alt="Smart Scaling" 
                width={160} 
                height={40} 
                className="opacity-90"
              />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
              Studio technologique fondé par Miguel Boka. On conçoit et livre des SaaS qui tournent en production.
            </p>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span className="text-gray-400 text-xs">Montréal, Québec</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-3 sm:mb-4">Général</h4>
            <ul className="space-y-3">
              {generalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-3 sm:mb-4">Projets</h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-3 sm:mb-4">Plus</h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-2 flex lg:justify-end items-start"
          >
            <div className="flex gap-3">
              <a
                href="https://github.com/MrBigboka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/miguel-boka-51b407223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-xs sm:text-sm">
            © {currentYear} SmartScaling Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 text-xs sm:text-sm hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 text-xs sm:text-sm hover:text-gray-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
