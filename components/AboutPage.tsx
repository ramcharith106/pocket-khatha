
import React from 'react';

interface AboutPageProps {
  t: any;
}

const AboutPage: React.FC<AboutPageProps> = ({ t }) => {
  return (
    <div className="pt-20">
      <section className="bg-brand-peach/15 border-b border-ink-100 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-[-0.02em] mb-7" style={{ textWrap: 'balance' as any }}>
              <span className="text-brand-brown">{t.aboutHero1}</span>{' '}
              <span className="text-brand-red">{t.aboutHero2}</span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-500 max-w-2xl leading-relaxed" style={{ textWrap: 'pretty' as any }}>
              {t.aboutHeroSub}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.aboutStoryTitle}</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown mb-6 tracking-[-0.01em]">{t.aboutStoryHead}</h2>
              <div className="space-y-4 text-[16px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
                <p>{t.aboutStoryP1}</p>
                <p>{t.aboutStoryP2}</p>
                <p>{t.aboutStoryP3}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-ink-100 shadow-soft">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" alt="A bustling traditional kirana market lane in Hyderabad" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-brand-brown text-white px-7 py-5 rounded-xl shadow-lift">
                <div className="text-3xl font-semibold tnum mb-0.5">{t.aboutImpactVal}</div>
                <div className="text-[11px] font-medium text-brand-cream/80 uppercase tracking-label">{t.aboutImpactDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.aboutPeopleTitle}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown tracking-[-0.01em]">{t.aboutPeopleHead}</h2>
          </div>
          <div className="max-w-sm mx-auto">
            <figure className="bg-white rounded-2xl overflow-hidden border border-ink-100 shadow-soft">
              <div className="h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" alt={`Portrait of ${t.aboutFounderName}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <figcaption className="p-7">
                <h3 className="text-xl font-semibold text-brand-brown mb-0.5">{t.aboutFounderName}</h3>
                <p className="text-brand-red text-[14px] font-medium mb-4">{t.aboutFounderRole}</p>
                <p className="text-[15px] text-ink-500 leading-relaxed">{t.aboutFounderQuote}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.4" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="text-[11px] font-semibold uppercase tracking-label text-brand-gold">{t.aboutGoalTitle}</span>
          <blockquote className="mt-6 text-2xl sm:text-4xl font-semibold leading-snug tracking-[-0.01em]" style={{ textWrap: 'balance' as any }}>
            {t.aboutGoalQuote}
          </blockquote>
          <div className="w-12 h-px bg-brand-gold mx-auto my-8"></div>
          <p className="text-brand-cream/85 text-[16px]">
            {t.aboutGoalDesc}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
