
import React from 'react';

interface CTASectionProps {
  onCtaClick: () => void;
  t: any;
}

const CTASection: React.FC<CTASectionProps> = ({ onCtaClick, t }) => {
  return (
    <section className="py-20 bg-brand-red">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
          {t.ctaTitle}
        </h2>
        <p className="text-xl text-brand-cream/80 mb-10">
          {t.ctaDesc}
        </p>
        <button 
          onClick={onCtaClick}
          className="px-10 py-5 bg-brand-gold text-brand-brown text-xl font-extrabold rounded-2xl shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
        >
          {t.ctaBtn}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
