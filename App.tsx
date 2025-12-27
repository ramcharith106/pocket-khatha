
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsPage from './components/TermsPage';
import { Locale, translations } from './constants/translations';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms'>('home');
  const [locale, setLocale] = useState<Locale>('en');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const t = translations[locale];

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar 
        onCtaClick={openModal} 
        currentView={currentView as any} 
        onNavigate={(view) => setCurrentView(view as any)} 
        locale={locale}
        setLocale={setLocale}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onCtaClick={openModal} t={t} />
            <SocialProof t={t} />
            <Features t={t} />
            <ProductPillars t={t} />
            <AIInsightSection locale={locale} t={t} />
            <CTASection onCtaClick={openModal} t={t} />
          </>
        )}
        {currentView === 'services' && (
          <ServicesPage onCtaClick={openModal} t={t} />
        )}
        {currentView === 'about' && (
          <AboutPage t={t} />
        )}
        {currentView === 'contact' && (
          <ContactPage t={t} />
        )}
        {currentView === 'privacy' && (
          <PrivacyPolicy t={t} />
        )}
        {currentView === 'terms' && (
          <TermsPage t={t} />
        )}
      </main>
      
      <Footer t={t} onNavigate={(view) => setCurrentView(view as any)} />
      
      {isModalOpen && <RecoveryModal onClose={closeModal} t={t} locale={locale} />}
    </div>
  );
};

export default App;
