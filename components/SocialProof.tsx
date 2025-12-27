
import React from 'react';

const SocialProof: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section className="py-12 bg-brand-red border-y border-brand-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">{t.socialImpact}</span>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-8">
            {t.socialTrusted}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
