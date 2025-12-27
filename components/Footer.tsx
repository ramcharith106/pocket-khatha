
import React from 'react';

// Fix error: Property 't' does not exist on type 'IntrinsicAttributes'.
interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-brand-dark text-white/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=pocket-khata&backgroundColor=D23430" alt="Logo" className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Pocket Khata</span>
            </div>
            <p className="max-w-xs leading-relaxed text-white/80">
              Empowering small businesses in Hyderabad with modern digital tools and professional field recovery services.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Agent Training</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Legal Framework</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Merchant Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-gold font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>T-Hub Phase 2, Knowledge City, Hyderabad</li>
              <li>+91 90000 XXXXX</li>
              <li>support@pocketkhata.in</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase font-semibold tracking-widest">
          <p>Incubated in Hyderabad. Copyright &copy; 2025 Pocket Khata.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
