
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import ProductPillars from './components/ProductPillars';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RecoveryModal from './components/RecoveryModal';
import AIInsightSection from './components/AIInsightSection';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'about' | 'contact'>('home');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCtaClick={openModal} 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onCtaClick={openModal} />
            <SocialProof />
            <Features />
            <ProductPillars />
            <AIInsightSection />
            <CTASection onCtaClick={openModal} />
          </>
        )}
        {currentView === 'services' && (
          <ServicesPage onCtaClick={openModal} />
        )}
        {currentView === 'about' && (
          <AboutPage />
        )}
        {currentView === 'contact' && (
          <ContactPage />
        )}
      </main>
      
      <Footer />
      
      {isModalOpen && <RecoveryModal onClose={closeModal} />}
    </div>
  );
};

export default App;
