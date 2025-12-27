
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
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t.servStep2,
      badge: 'Free',
      description: t.servStep2Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t.servStep3,
      badge: 'Premium',
      description: t.servStep3Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: t.servStep4,
      badge: 'Direct',
      description: t.servStep4Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-cream/20 py-20 border-b border-brand-peach/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-brown mb-6">{t.servTitle}</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed font-medium">
            {t.servSub}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-brand-red tracking-wide uppercase">{t.servWorkflow}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-brown">{t.servWorkflowSub}</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden sm:block"></div>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="absolute left-8 sm:left-1/2 w-8 h-8 rounded-full bg-brand-red border-4 border-white shadow-lg -translate-x-1/2 z-10"></div>
                  <div className="w-full sm:w-1/2 px-12 pb-4 sm:pb-0">
                    <div className="p-8 bg-brand-peach/10 rounded-2xl border border-brand-peach/30 hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-brand-red/10 text-brand-red rounded-lg">
                          {step.icon}
                        </div>
                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded-md ${step.badge === 'Free' ? 'bg-green-100 text-green-700' : 'bg-brand-red/10 text-brand-red'}`}>
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-brown mb-2">{idx + 1}. {step.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-brand-red tracking-wide uppercase">{t.servPriceTitle}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-brown">{t.servPriceSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl border border-brand-peach/30 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-brown mb-2">{t.servBasic}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-brand-brown">₹0</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <p className="mt-4 text-slate-500 font-medium">{t.servBasicDesc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Digital Ledger (Khata)', 'Unlimited Customers', 'Manual WhatsApp Reminders', 'Daily Reports'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={onCtaClick} className="w-full py-4 bg-slate-100 text-brand-brown font-bold rounded-xl hover:bg-brand-peach/30 transition-colors">
                {t.servBasicBtn}
              </button>
            </div>

            <div className="relative bg-brand-red p-10 rounded-3xl border-4 border-brand-gold shadow-2xl flex flex-col text-white transform md:scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold rounded-full text-brand-brown text-sm font-bold uppercase tracking-wider">
                Risk Free
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{t.servRecovery}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">10-15%</span>
                  <span className="text-brand-gold ml-2 font-bold">{t.servSuccessFee}</span>
                </div>
                <p className="mt-4 text-white/90 font-medium">{t.servRecoveryDesc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Professional Field Agents', 'AI Risk Prediction', 'Legal Authorization Slips', 'No Recovery No Fee'].map((item, i) => (
                  <li key={i} className="flex items-center font-medium">
                    <svg className="w-5 h-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={onCtaClick} className="w-full py-4 bg-white text-brand-red font-bold rounded-xl hover:bg-brand-cream transition-all shadow-lg">
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
