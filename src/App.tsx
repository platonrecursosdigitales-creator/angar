import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ConstructionSection } from './components/ConstructionSection';
import { StickyServices } from './components/StickyServices';
import { RealEstateSection } from './components/RealEstateSection';
import { LuxuryMarqueeSection } from './components/LuxuryMarqueeSection';
import { CreditsSection } from './components/CreditsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-main text-main font-sans selection:bg-brand selection:text-white overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ConstructionSection />
        <StickyServices />
        <LuxuryMarqueeSection />
        <RealEstateSection />
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
