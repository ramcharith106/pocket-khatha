
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, t }) => {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2.5 mb-9 text-[12px] font-semibold uppercase tracking-label text-brand-red animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          {t.heroBadge}
        </div>

        <h1
          className="text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-[-0.02em] mb-7 animate-fade-in-up"
          style={{ animationDelay: '60ms', textWrap: 'balance' as any }}
        >
          <span className="text-brand-brown">{t.heroTitle1}</span>
          <br className="hidden sm:block" />{' '}
          <span className="text-brand-red">{t.heroTitle2}</span>
        </h1>

        <p
          className="max-w-xl mx-auto text-lg sm:text-xl text-ink-500 mb-11 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '120ms', textWrap: 'pretty' as any }}
        >
          {t.heroSub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '180ms' }}>
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-base font-medium rounded-xl shadow-soft hover:bg-brand-darkRed hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
          >
            {t.heroCta1}
          </button>
          <button className="group inline-flex items-center gap-2 text-base font-medium text-brand-brown hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 rounded-lg px-2 py-2">
            {t.heroCta2}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>

        <figure className="mt-20 lg:mt-24 relative mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '260ms' }}>
          <div className="rounded-2xl overflow-hidden border border-ink-100 bg-white p-2 shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000"
              alt="A shop owner reviewing the Pocket Khata ledger dashboard on a laptop"
              className="rounded-xl w-full"
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
