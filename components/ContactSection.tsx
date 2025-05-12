'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';
// AnimatedBackground removed as per user preference

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isHovered, setIsHovered] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formState);
    alert('Message envoyé ! Je vous répondrai dès que possible.');
    setFormState({ name: '', email: '', message: '' });
  };
  
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 border-t border-white/10 shadow-inner transition-colors duration-300">
      {/* AnimatedBackground removed as per user preference */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Static background styling */}
      </div>
      
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Échangeons" 
          subtitle="CONTACT" 
          accentWord="Échangeons" 
          align="center" 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Élément décoratif */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full opacity-20 bg-[#D9A441]/30 blur-xl"></div>
            
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dea9ff]/50 focus:border-transparent text-white placeholder-white/40 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dea9ff]/50 focus:border-transparent text-white placeholder-white/40 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A441]/50 focus:border-transparent text-white placeholder-white/40 transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-[#101B2E] to-[#0A1422] hover:from-[#0A1422] hover:to-[#101B2E] text-[#F7E3C5] font-medium rounded-lg border border-[#D9A441]/50 transition-all duration-300 flex items-center justify-center gap-2"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                  >
                    <Send size={18} />
                  </motion.div>
                  Envoyer
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Partie droite - Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">Discutons de votre <span className="text-[#D9A441]">projet</span></h3>
            
            <p className="text-white/80 leading-relaxed">
              Vous avez un projet en tête ou vous souhaitez simplement échanger ? N&apos;hésitez pas à me contacter, je serai ravi de discuter avec vous.
            </p>
            
            <div className="space-y-5">
              <a 
                href="mailto:bokamiguel@gmail.com" 
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D9A441]/20 flex items-center justify-center group-hover:bg-[#D9A441]/30 transition-all duration-300">
                  <Mail size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-medium">bokamiguel@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/miguelboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D9A441]/20 flex items-center justify-center group-hover:bg-[#D9A441]/30 transition-all duration-300">
                  <Linkedin size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/miguelboka</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/MrBigboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D9A441]/20 flex items-center justify-center group-hover:bg-[#D9A441]/30 transition-all duration-300">
                  <Github size={20} className="text-[#D9A441]" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">GitHub</p>
                  <p className="text-white font-medium">github.com/MrBigboka</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
