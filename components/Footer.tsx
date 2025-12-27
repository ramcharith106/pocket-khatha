
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  t: any;
  onNavigate: (view: 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ t, onNavigate }) => {
  return (
    <footer className="bg-brand-brown text-brand-cream/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo className="h-10" textColor="text-white" />
            </div>
            <p className="max-w-xs leading-relaxed text-brand-cream/90 font-medium">
              {t.footerAbout}
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">{t.footerResources}</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-gold transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-gold transition-colors">Agent Training</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-brand-gold transition-colors">Legal Framework</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-gold transition-colors">Merchant Support</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">{t.footerContact}</h4>
            <ul className="space-y-4 text-sm text-brand-cream font-medium">
              <li>T-Hub Phase 2, Knowledge City, Hyderabad</li>
              <li>+91 9032910399</li>
              <li>allurucharith@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase font-bold tracking-widest text-brand-cream/40">
          <p>{t.footerIncubated}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors uppercase">{t.footerPrivacy}</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors uppercase">{t.footerTerms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
