
import React from 'react';

const ProductPillars: React.FC<{ t: any }> = ({ t }) => {
  const pillars = [
    { title: t.pillar1Title, subtitle: t.pillar1Sub, headline: t.pillar1Head, description: t.pillar1Desc, color: 'bg-brand-red', icon: "⚡" },
    { title: t.pillar2Title, subtitle: t.pillar2Sub, headline: t.pillar2Head, description: t.pillar2Desc, color: 'bg-brand-gold', icon: "🧠" },
    { title: t.pillar3Title, subtitle: t.pillar3Sub, headline: t.pillar3Head, description: t.pillar3Desc, color: 'bg-brand-brown', icon: "🎙️" }
  ];

  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-red tracking-wide uppercase mb-2">{t.pillarTitle}</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-brown">{t.pillarHeading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group relative bg-white border border-slate-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6 transform group-hover:rotate-6 transition-transform`}>
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-brand-red uppercase mb-1">{pillar.title}</h3>
              <h4 className="text-2xl font-extrabold text-brand-brown mb-4 leading-tight">{pillar.headline}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;
