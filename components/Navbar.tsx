
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { Locale, translations } from '../constants/translations';

interface NavbarProps {
  onCtaClick: () => void;
  currentView: 'home' | 'services' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'services' | 'about' | 'contact') => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, currentView, onNavigate, locale, setLocale }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const t = translations[locale];

  const navItems: { label: string; view: 'home' | 'services' | 'about' | 'contact' }[] = [
    { label: t.navHome, view: 'home' },
    { label: t.navServices, view: 'services' },
    { label: t.navAbout, view: 'about' },
    { label: t.navContact, view: 'contact' },
  ];

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-brand-peach/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer transform hover:scale-105 transition-transform" onClick={() => onNavigate('home')}>
            <Logo className="h-10 sm:h-12" />
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-semibold text-slate-500">
            {navItems.map((item) => (
              <button key={item.view} onClick={() => onNavigate(item.view)} className={`relative py-2 ${currentView === item.view ? 'text-brand-red' : 'hover:text-brand-red'}`}>
                {item.label}
                {currentView === item.view && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red rounded-full"></span>}
              </button>
            ))}
            
            {/* Desktop Language Switcher */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-1 bg-brand-peach/20 rounded-full border border-brand-peach/50 text-brand-red text-sm font-bold hover:bg-brand-peach/40 transition-all"
              >
                <span>{languages.find(l => l.code === locale)?.label}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-brand-peach/30 overflow-hidden">
                  {languages.map(l => (
                    <button key={l.code} onClick={() => { setLocale(l.code); setIsLangOpen(false); }} className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-brand-peach/10 ${locale === l.code ? 'text-brand-red' : 'text-slate-600'}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <button onClick={onCtaClick} className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:bg-brand-darkRed transition-all shadow-lg">{t.navGetStarted}</button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2" ref={dropdownRef}>
            {/* Mobile Language Cycle Button */}
            <button 
              onClick={() => setLocale(locale === 'en' ? 'te' : locale === 'te' ? 'hi' : 'en')}
              className="px-3 py-2 bg-brand-peach/20 rounded-full text-xs font-black text-brand-red border border-brand-peach/50"
            >
              {locale.toUpperCase()}
            </button>
            
            <div className="relative">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 font-bold text-sm ${isMobileMenuOpen ? 'bg-brand-red border-brand-red text-white' : 'bg-brand-peach/20 border-brand-peach/50 text-brand-red'}`}>
                <span>{t.navMenu}</span>
                <svg className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-brand-peach/50 overflow-hidden origin-top-right">
                  <div className="py-2">
                    {navItems.map((item) => (
                      <button key={item.view} onClick={() => { onNavigate(item.view); setIsMobileMenuOpen(false); }} className={`w-full text-left px-6 py-4 text-sm font-bold ${currentView === item.view ? 'bg-brand-red text-white' : 'text-slate-700 hover:bg-brand-peach/20'}`}>{item.label}</button>
                    ))}
                    <div className="border-t border-slate-100 my-1"></div>
                    <button onClick={() => { onCtaClick(); setIsMobileMenuOpen(false); }} className="w-full text-left px-6 py-4 text-sm font-extrabold text-brand-red bg-brand-peach/10">{t.navGetStarted}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
