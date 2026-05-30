
import React from 'react';

const ProductPillars: React.FC<{ t: any }> = ({ t }) => {
  const pillars = [
    { sub: t.pillar1Sub, headline: t.pillar1Head, description: t.pillar1Desc },
    { sub: t.pillar2Sub, headline: t.pillar2Head, description: t.pillar2Desc },
    { sub: t.pillar3Sub, headline: t.pillar3Head, description: t.pillar3Desc },
  ];

  return (
    <section className="py-24 lg:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.pillarTitle}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown leading-tight tracking-[-0.01em]" style={{ textWrap: 'balance' as any }}>
            {t.pillarHeading}
          </h2>
        </div>

        <div className="border-t border-ink-100">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-3 py-9 border-b border-ink-100 group"
            >
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="text-3xl font-light tnum text-brand-red/70 leading-none">0{idx + 1}</span>
                <span className="text-[11px] font-semibold uppercase tracking-label text-ink-500 pt-1">{pillar.sub}</span>
              </div>
              <h3 className="md:col-span-4 text-xl sm:text-2xl font-semibold text-brand-brown leading-snug">
                {pillar.headline}
              </h3>
              <p className="md:col-span-5 text-[15px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;
