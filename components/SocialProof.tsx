
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-brand-red border-y border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Local Impact</span>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Trusted by <span className="text-brand-gold">50+ Kirana Stores</span> across Hyderabad
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all text-white">
             <div className="font-bold text-xl tracking-tighter italic">Secunderabad Retailers</div>
             <div className="font-bold text-xl tracking-tighter italic">Banjara Merchants</div>
             <div className="font-bold text-xl tracking-tighter italic">Charminar Goods Co.</div>
             <div className="font-bold text-xl tracking-tighter italic">Hitech City Mart</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
