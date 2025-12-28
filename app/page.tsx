'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import ProjectsSection from '@/components/ProjectsSection';
import MethodSection from '@/components/MethodSection';
import AboutFounder from '@/components/AboutFounder';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BentoGrid />
      <ProjectsSection />
      <MethodSection />
      <AboutFounder />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}