'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Layers, Code2, Rocket } from 'lucide-react';
import { SmartButton } from '@/components/ui/smart-button';

const steps = [
  {
    number: '01',
    title: 'Diagnostic',
    outcome: 'Clarté totale sur le problème et le scope — pas de surprise.',
    deliverable: 'Scope défini + estimation fixée',
    duration: '1-2 appels',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Prototype',
    outcome: 'Vous décidez sur du concret, pas sur des promesses.',
    deliverable: 'Prototype testable avant investissement',
    duration: '1-2 semaines',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Build',
    outcome: 'Un produit exploitable, pas un POC qui prend la poussière.',
    deliverable: 'Système déployé en production',
    duration: '4-12 semaines',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Itérations',
    outcome: 'Ajustements basés sur l\'usage réel, pas sur des hypothèses.',
    deliverable: 'Améliorations continues post-launch',
    duration: 'Ongoing',
    icon: Rocket,
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="relative z-10 py-24 px-6 md:px-12 overflow-hidden bg-black">

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
            Comment on travaille
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-light tracking-tight mb-4"
          >
            La méthode{' '}
            <span className="text-purple-400 italic">SmartScaling</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Chaque étape est conçue pour vous faire gagner du temps et de la clarté.
            Zéro surprise, zéro scope creep.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-light text-purple-500/50 group-hover:text-purple-400 transition-colors">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-medium mb-3">
                  {step.title}
                </h3>

                {/* Outcome */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {step.outcome}
                </p>

                {/* Deliverable & Duration */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-xs">→</span>
                    <span className="text-gray-500 text-xs">{step.deliverable}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-xs">Durée:</span>
                    <span className="text-gray-400 text-xs font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA secondaire - plus doux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <SmartButton
            variant="ghost"
            size="md"
            icon="arrow"
            href="https://calendly.com/bokamiguel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorer la faisabilité
          </SmartButton>
        </motion.div>
      </div>
    </section>
  );
}
