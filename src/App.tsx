import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ConstructionSection } from './components/ConstructionSection';
import { StickyServices } from './components/StickyServices';
import { RealEstateSection } from './components/RealEstateSection';
import { LandSection } from './components/LandSection';
import { HousesSection } from './components/HousesSection';
import { CreditsSection } from './components/CreditsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  return (
    <div className="relative min-h-screen bg-main text-main font-sans selection:bg-brand selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ConstructionSection />
        <StickyServices />
        <RealEstateSection />
        <LandSection />
        <HousesSection />
        <CreditsSection />
        <ProcessSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
