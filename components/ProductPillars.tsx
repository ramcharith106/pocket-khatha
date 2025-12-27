
import React from 'react';

const pillars = [
  {
    title: 'AI Estimate Generator',
    subtitle: 'The Speed',
    headline: 'Bills in Seconds, Not Minutes.',
    description: 'Just type items roughly (e.g., "2kg Rice, 1 Oil"). Our AI formats it into a professional GST-ready invoice instantly.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-brand-red'
  },
  {
    title: 'The "Munim" Insight',
    subtitle: 'The Brain',
    headline: 'Know Your Business.',
    description: 'Daily sales analysis in simple language. We tell you what is selling and who is buying, so you stock smarter.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-brand-gold'
  },
  {
    title: 'Voice & Vernacular',
    subtitle: 'The Voice',
    headline: 'Talk to Your Khata.',
    description: "Don't type. Just speak in Hindi, Telugu, or Hinglish. We summarize your day in your language.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    color: 'bg-brand-brown'
  }
];

const ProductPillars: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-red tracking-wide uppercase mb-2">Advanced Intelligence</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-brown">The 3 Pillars of AI Recovery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/40 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform`}>
                  {pillar.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-red transition-colors">
                  {pillar.subtitle}
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-brand-red uppercase mb-1">{pillar.title}</h3>
              <h4 className="text-2xl font-extrabold text-brand-brown mb-4 leading-tight">{pillar.headline}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {pillar.description}
              </p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-transparent group-hover:bg-brand-gold rounded-t-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPillars;
