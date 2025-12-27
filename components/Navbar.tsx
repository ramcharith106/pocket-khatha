
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onCtaClick: () => void;
  currentView: 'home' | 'services' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'services' | 'about' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: { label: string; view: 'home' | 'services' | 'about' | 'contact' }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMobileNavigate = (view: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-brand-peach/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer transform hover:scale-105 transition-transform" 
            onClick={() => onNavigate('home')}
          >
            <Logo className="h-10 sm:h-12" />
          </div>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex space-x-10 items-center font-semibold text-slate-500">
            {navItems.map((item) => (
              <button 
                key={item.view}
                onClick={() => onNavigate(item.view)} 
                className={`relative transition-colors py-2 ${currentView === item.view ? 'text-brand-red' : 'hover:text-brand-red'}`}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={onCtaClick}
              className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:bg-brand-darkRed transition-all shadow-lg active:scale-95"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Only: Navigation Tag & Dropdown */}
          <div className="md:hidden flex items-center space-x-3" ref={dropdownRef}>
            <div className="relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all font-bold text-sm ${
                  isMobileMenuOpen 
                    ? 'bg-brand-red border-brand-red text-white shadow-md' 
                    : 'bg-brand-peach/20 border-brand-peach/50 text-brand-red'
                }`}
              >
                <span>Menu</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Dropdown Menu */}
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-brand-peach/50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                  <div className="py-2">
                    {navItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => handleMobileNavigate(item.view)}
                        className={`w-full text-left px-6 py-4 text-sm font-bold transition-colors ${
                          currentView === item.view 
                            ? 'bg-brand-red text-white' 
                            : 'text-slate-700 hover:bg-brand-peach/20 hover:text-brand-red'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="border-t border-slate-100 my-1"></div>
                    <button
                      onClick={() => { onCtaClick(); setIsMobileMenuOpen(false); }}
                      className="w-full text-left px-6 py-4 text-sm font-extrabold text-brand-red bg-brand-peach/10 hover:bg-brand-peach/30 transition-colors"
                    >
                      Get Started
                    </button>
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
