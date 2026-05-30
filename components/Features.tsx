
import React from 'react';

const icons = [
  // Ledger
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H18a2 2 0 0 1 2 2v13.5" />
      <path d="M4 5.5V18a2 2 0 0 0 2 2h14" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  // Field agent / location
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  // Legal / balance
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 4v16M7 20h10M5 8l-2.5 5a3 3 0 0 0 5 0L5 8Zm0 0 7-1.5M19 8l-2.5 5a3 3 0 0 0 5 0L19 8Zm0 0L12 6.5" />
    </svg>
  ),
];

const Features: React.FC<{ t: any }> = ({ t }) => {
  const features = [
    { title: t.featTitle, description: t.featDesc },
    { title: t.featTitle2, description: t.featDesc2 },
    { title: t.featTitle3, description: t.featDesc3 },
  ];

  return (
    <section id="features" className="py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.featKicker || 'What you get'}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown leading-tight tracking-[-0.01em]" style={{ textWrap: 'balance' as any }}>
              {t.featHeading || t.featTitle}
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <article key={idx} className="border-t border-ink-100 pt-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-brand-red">{icons[idx]}</span>
                  <span className="text-sm font-medium tnum text-ink-300">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-brown mb-2.5">{feature.title}</h3>
                <p className="text-[15px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
