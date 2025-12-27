
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-brand-brown text-brand-cream/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-10" textColor="text-white" />
            </div>
            <p className="max-w-xs leading-relaxed text-brand-cream/90 font-medium">
              {t.footerAbout}
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">{t.footerResources}</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Agent Training</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Legal Framework</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Merchant Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">{t.footerContact}</h4>
            <ul className="space-y-4 text-sm text-brand-cream font-medium">
              <li>T-Hub Phase 2, Knowledge City, Hyderabad</li>
              <li>+91 90000 XXXXX</li>
              <li>support@pocketkhata.in</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase font-bold tracking-widest text-brand-cream/40">
          <p>{t.footerIncubated}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footerTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
