'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Handshake, Check } from 'lucide-react';
import { SmartButton } from '@/components/ui/smart-button';

export default function WorkWithUs() {
  return (
    <section id="collaborations" className="relative z-10 py-24 px-6 md:px-12 overflow-hidden bg-black">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.3em] text-xs font-medium text-gray-500 mb-4"
          >
            Collaboration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight mb-4"
          >
            Deux façons de travailler avec{' '}
            <span className="text-purple-400 italic">SmartScaling</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Selon votre situation, on adapte notre approche pour maximiser la valeur créée.
          </motion.p>
        </div>

        {/* Two Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Option 1: Service SaaS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <span className="text-purple-400 text-xs font-medium uppercase tracking-wider">Option 1</span>
                  <h3 className="text-white text-2xl font-medium">Service SaaS</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vous avez un besoin clair et un budget défini. On conçoit et livre un système complet, 
                prêt pour la production.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Scope défini ensemble dès le départ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Prix fixe, pas de surprise</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Système livré en production</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Support post-lancement inclus</span>
                </li>
              </ul>

              {/* Ideal for */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Idéal pour</p>
                <p className="text-gray-300 text-sm">
                  PME, équipes internes, fondateurs avec un problème opérationnel identifié
                </p>
              </div>
            </div>
          </motion.div>

          {/* Option 2: Co-création produit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="h-full p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
              {/* Badge "Nouveau" */}
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                  Partenariat
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-purple-500/30 flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-purple-300" />
                </div>
                <div>
                  <span className="text-purple-300 text-xs font-medium uppercase tracking-wider">Option 2</span>
                  <h3 className="text-white text-2xl font-medium">Co-création produit</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Vous avez identifié un problème métier réel dans une niche. On développe ensemble 
                un produit avec une vision partagée.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">Pas de facturation initiale</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">Partage de la valeur créée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">Vision produit commune</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm">Engagement long terme</span>
                </li>
              </ul>

              {/* Ideal for */}
              <div className="pt-6 border-t border-purple-500/20">
                <p className="text-purple-300/70 text-xs uppercase tracking-wider mb-2">Idéal pour</p>
                <p className="text-gray-200 text-sm">
                  Experts métier avec une vraie connaissance terrain et une niche identifiée
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA secondaire - plus doux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <SmartButton
            variant="outline"
            size="md"
            icon="arrow"
            href="https://calendly.com/bokamiguel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuter d&apos;un cas réel
          </SmartButton>
        </motion.div>
      </div>
    </section>
  );
}
