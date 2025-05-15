'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobalAnimatedBackground from '@/components/ui/GlobalAnimatedBackground';

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
    <section className="relative z-10 min-h-screen pt-32 pb-16 px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#101B2E' }}>
      {/* Animated background avec les particules */}
      <GlobalAnimatedBackground sectionId="contact-section" opacity={0.8} />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#D9A441]/20 to-[#B74134]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#F7E3C5]/20 to-[#D9A441]/20 blur-3xl"></div>
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
            
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#D9A441] mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1221]/80 border border-[#D9A441]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A441]/50 text-white transition-all duration-200 hover:border-[#D9A441]/40"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#D9A441] mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1221]/80 border border-[#D9A441]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A441]/50 text-white transition-all duration-200 hover:border-[#D9A441]/40"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#D9A441] mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0B1221]/80 border border-[#D9A441]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A441]/50 text-white resize-none transition-all duration-200 hover:border-[#D9A441]/40"
                    placeholder="Votre message ici..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#D9A441] to-[#B74134] hover:from-[#B74134] hover:to-[#D9A441] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#D9A441]/20 hover:shadow-xl hover:-translate-y-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span>Envoyer</span>
                    <Send size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </Button>
                </div>
              </form>
            </div>
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
                className="flex items-center gap-4 p-4 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Mail size={20} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">Email</p>
                  <p className="text-white font-medium">bokamiguel@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/miguelboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/miguelboka</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/MrBigboka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0B1221]/80 hover:bg-[#0B1221] backdrop-blur-sm rounded-xl border border-[#D9A441]/20 hover:border-[#D9A441]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#D9A441]/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9A441]/30 to-[#B74134]/30 flex items-center justify-center group-hover:from-[#D9A441]/40 group-hover:to-[#B74134]/40 transition-all duration-300">
                  <Github size={20} className="text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-[#D9A441] text-sm font-medium">GitHub</p>
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
