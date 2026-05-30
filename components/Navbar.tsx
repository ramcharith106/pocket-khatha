
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
    <nav className="fixed top-0 left-0 right-0 bg-brand-cream/80 backdrop-blur-md z-50 border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            className="flex items-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 rounded-lg"
            onClick={() => onNavigate('home')}
            aria-label="Pocket Khata home"
          >
            <Logo className="h-10 sm:h-11" />
          </button>

          <div className="hidden md:flex items-center gap-9 text-[15px] text-ink-500">
            {navItems.map((item) => {
              const active = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-1.5 font-medium transition-colors ${active ? 'text-brand-brown' : 'hover:text-brand-brown'}`}
                >
                  {item.label}
                  {active && <span className="absolute -bottom-0.5 left-0 w-full h-px bg-brand-red"></span>}
                </button>
              );
            })}

            {/* Desktop Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                className="flex items-center gap-1.5 py-1.5 text-ink-500 font-medium hover:text-brand-brown transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 rounded"
              >
                <span>{languages.find(l => l.code === locale)?.label}</span>
                <svg className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isLangOpen && (
                <ul className="absolute right-0 mt-3 w-36 bg-white rounded-xl shadow-soft border border-ink-100 overflow-hidden py-1 animate-fade-in" role="listbox">
                  {languages.map(l => (
                    <li key={l.code} role="option" aria-selected={locale === l.code}>
                      <button onClick={() => { setLocale(l.code); setIsLangOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-brand-peach/20 ${locale === l.code ? 'text-brand-red font-semibold' : 'text-ink-700 font-medium'}`}>
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={onCtaClick}
              className="bg-brand-red text-white px-6 py-2.5 rounded-xl font-medium hover:bg-brand-darkRed transition-all shadow-soft hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
            >
              {t.navGetStarted}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2" ref={dropdownRef}>
            {/* Mobile Language Cycle Button */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'te' : locale === 'te' ? 'hi' : 'en')}
              aria-label="Change language"
              className="px-3 py-2 rounded-lg text-xs font-semibold tracking-wide text-ink-500 border border-ink-100 hover:text-brand-brown transition-colors"
            >
              {locale.toUpperCase()}
            </button>

            <div className="relative">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" aria-expanded={isMobileMenuOpen} className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-colors ${isMobileMenuOpen ? 'bg-brand-brown border-brand-brown text-white' : 'bg-transparent border-ink-100 text-brand-brown'}`}>
                <span>{t.navMenu}</span>
                <svg className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-lift border border-ink-100 overflow-hidden origin-top-right animate-scale-up">
                  <div className="py-2">
                    {navItems.map((item) => (
                      <button key={item.view} onClick={() => { onNavigate(item.view); setIsMobileMenuOpen(false); }} aria-current={currentView === item.view ? 'page' : undefined} className={`w-full text-left px-5 py-3.5 text-[15px] transition-colors ${currentView === item.view ? 'text-brand-red font-semibold bg-brand-peach/15' : 'text-ink-700 font-medium hover:bg-brand-peach/10'}`}>{item.label}</button>
                    ))}
                    <div className="border-t border-ink-100 my-1"></div>
                    <button onClick={() => { onCtaClick(); setIsMobileMenuOpen(false); }} className="w-full text-left px-5 py-3.5 text-[15px] font-semibold text-brand-red">{t.navGetStarted}</button>
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
