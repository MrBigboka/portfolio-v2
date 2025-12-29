'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import ProjectsSection from '@/components/ProjectsSection';
import WorkWithUs from '@/components/WorkWithUs';
import MethodSection from '@/components/MethodSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <BentoGrid />
      <ProjectsSection />
      <WorkWithUs />
      <MethodSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}