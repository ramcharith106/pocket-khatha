
import React from 'react';

interface ServicesPageProps {
  onCtaClick: () => void;
  t: any;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onCtaClick, t }) => {
  const steps = [
    {
      title: t.servStep1,
      badge: 'Free',
      description: t.servStep1Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t.servStep2,
      badge: 'Free',
      description: t.servStep2Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t.servStep3,
      badge: 'Premium',
      description: t.servStep3Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: t.servStep4,
      badge: 'Direct',
      description: t.servStep4Desc,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-peach/15 border-b border-ink-100 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-brown mb-5 tracking-[-0.02em]" style={{ textWrap: 'balance' as any }}>{t.servTitle}</h1>
          <p className="max-w-2xl mx-auto text-lg text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
            {t.servSub}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.servWorkflow}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown tracking-[-0.01em]">{t.servWorkflowSub}</h2>
          </div>

          <ol className="relative border-l border-ink-100 ml-3 space-y-12">
            {steps.map((step, idx) => (
              <li key={idx} className="relative pl-10">
                <span className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white border-2 border-brand-red"></span>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand-red">{step.icon}</span>
                  <span className="text-[11px] font-medium tnum text-ink-300">0{idx + 1}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${step.badge === 'Premium' ? 'bg-brand-red/10 text-brand-red' : 'bg-emerald-50 text-emerald-700'}`}>
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-brown mb-1.5">{step.title}</h3>
                <p className="text-[15px] text-ink-500 leading-relaxed max-w-xl" style={{ textWrap: 'pretty' as any }}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-16 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.servPriceTitle}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown tracking-[-0.01em]">{t.servPriceSub}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            <div className="bg-white p-9 rounded-2xl border border-ink-100 shadow-soft flex flex-col">
              <div className="min-h-[150px]">
                <h3 className="text-lg font-semibold text-brand-brown mb-3">{t.servBasic}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-brand-brown tnum">₹0</span>
                  <span className="text-ink-500 text-[15px]">/month</span>
                </div>
                <p className="mt-4 text-[15px] text-ink-500 leading-relaxed">{t.servBasicDesc}</p>
              </div>
              <ul className="space-y-3 my-8 flex-grow border-t border-ink-100 pt-6">
                {['Digital Khata (Face-Based)', 'Unlimited Customers', 'Silent WhatsApp Receipts', 'Daily Summary Reports'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] text-ink-700">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={onCtaClick} className="w-full py-3.5 bg-brand-cream text-brand-brown font-medium rounded-xl border border-ink-100 hover:bg-brand-peach/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40">
                {t.servBasicBtn}
              </button>
            </div>

            <div className="relative bg-brand-red p-9 rounded-2xl shadow-lift flex flex-col text-white">
              <span className="absolute top-9 right-9 text-[10px] font-semibold uppercase tracking-label text-brand-gold">Risk free</span>
              <div className="min-h-[150px]">
                <h3 className="text-lg font-semibold mb-3">{t.servRecovery}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white tnum">10–15%</span>
                  <span className="text-brand-gold ml-1 text-[15px] font-medium">{t.servSuccessFee}</span>
                </div>
                <p className="mt-4 text-[15px] text-white/85 leading-relaxed">{t.servRecoveryDesc}</p>
              </div>
              <ul className="space-y-3 my-8 flex-grow border-t border-white/15 pt-6">
                {['Verified Local Agents', 'Khata Graph Debt Netting', 'Notarised Mediation Consent', 'No Recovery, No Fee'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] text-white/95">
                    <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={onCtaClick} className="w-full py-3.5 bg-brand-gold text-brand-brown font-semibold rounded-xl hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red">
                {t.servRecoveryBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
