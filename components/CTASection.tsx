
import React from 'react';

interface CTASectionProps {
  onCtaClick: () => void;
  t: any;
}

const CTASection: React.FC<CTASectionProps> = ({ onCtaClick, t }) => {
  return (
    <section className="bg-brand-red">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 lg:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[-0.01em] mb-5" style={{ textWrap: 'balance' as any }}>
          {t.ctaTitle}
        </h2>
        <p className="text-lg text-brand-cream/85 mb-10 max-w-xl mx-auto leading-relaxed" style={{ textWrap: 'pretty' as any }}>
          {t.ctaDesc}
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 bg-brand-gold text-brand-brown text-base font-semibold rounded-xl shadow-lift hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
        >
          {t.ctaBtn}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
