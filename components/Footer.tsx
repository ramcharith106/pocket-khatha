
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  t: any;
  onNavigate: (view: 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ t, onNavigate }) => {
  return (
    <footer className="bg-brand-brown text-brand-cream/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">
          <div className="md:col-span-5">
            <button className="mb-5 inline-flex" onClick={() => onNavigate('home')} aria-label="Pocket Khata home">
              <Logo className="h-10" textColor="text-white" />
            </button>
            <p className="max-w-sm leading-relaxed text-brand-cream/70 text-[15px]" style={{ textWrap: 'pretty' as any }}>
              {t.footerAbout}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-brand-gold font-semibold mb-5 uppercase tracking-label text-[11px]">{t.footerResources}</h4>
            <ul className="space-y-3.5 text-[15px]">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Agent training</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Legal framework</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Merchant support</button></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-brand-gold font-semibold mb-5 uppercase tracking-label text-[11px]">{t.footerContact}</h4>
            <ul className="space-y-3.5 text-[15px] not-italic text-brand-cream/80">
              <li>T-Hub Phase 2, Knowledge City, Hyderabad</li>
              <li><a href="tel:+919032910399" className="tnum hover:text-white transition-colors">+91 90329 10399</a></li>
              <li><a href="mailto:allurucharith@gmail.com" className="hover:text-white transition-colors break-all">allurucharith@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-brand-cream/50">
          <p>{t.footerIncubated}</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">{t.footerPrivacy}</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">{t.footerTerms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
