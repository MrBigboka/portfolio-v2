'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Layers, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Diagnostic & Scope',
    outcome: 'On comprend votre objectif business et on définit le périmètre exact.',
    deliverable: 'Document de scope + estimation claire',
    duration: '1-2 appels',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Prototype décisionnel',
    outcome: 'Vous voyez et testez avant de construire. On valide ensemble.',
    deliverable: 'Prototype cliquable + specs techniques',
    duration: '1-2 semaines',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Build & Qualité',
    outcome: 'Code propre, tests, architecture scalable. On construit pour durer.',
    deliverable: 'Application déployée + documentation',
    duration: '4-12 semaines',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Lancement & Suivi',
    outcome: 'On vous accompagne post-launch pour ajuster et optimiser.',
    deliverable: 'Support + itérations basées sur feedback',
    duration: 'Ongoing',
    icon: Rocket,
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="relative z-10 py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle purple glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

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
            Un process éprouvé pour passer de l&apos;idée au produit live.
            Pas de surprise, pas de scope creep — juste des résultats.
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Prêt à démarrer?</p>
          <a
            href="https://calendly.com/bokamiguel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
          >
            <span>Réserver un appel découverte</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
