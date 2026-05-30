
import React, { useState } from 'react';

interface ContactPageProps {
  t: any;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-ink-100 bg-brand-cream/40 text-brand-brown placeholder:text-ink-300 focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15 outline-none transition-colors";

const ContactPage: React.FC<ContactPageProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-brand-peach/15 border-b border-ink-100 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold text-brand-brown mb-6 tracking-[-0.02em]" style={{ textWrap: 'balance' as any }}>
            {t.contGetInTouch}
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
            {t.contHeroSub}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14">
            <div className="space-y-10">
              <p className="text-lg text-ink-500 leading-relaxed max-w-md" style={{ textWrap: 'pretty' as any }}>
                {t.contDesc}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-t border-ink-100 pt-6">
                  <span className="text-brand-red mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-brand-brown">{t.contOffice}</h4>
                    <p className="text-[15px] text-ink-500 mt-1 leading-relaxed">T-Hub Phase 2, Knowledge City,<br />Hyderabad, Telangana 500081</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-ink-100 pt-6">
                  <span className="text-brand-red mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-brand-brown">{t.contEmail}</h4>
                    <a href="mailto:partnerships@pocketkhata.in" className="text-[15px] text-ink-500 mt-1 inline-block hover:text-brand-red transition-colors">partnerships@pocketkhata.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-ink-100 shadow-soft p-7 sm:p-9">
              {submitted ? (
                <div className="py-10 text-center" aria-live="polite">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-brown mb-2">{t.contSuccess}</h3>
                  <p className="text-[15px] text-ink-500">{t.contSuccessMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.contShopName}</label>
                      <input required type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.contOwnerName}</label>
                      <input required type="text" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.contPhone}</label>
                    <input required type="tel" pattern="[0-9 +]{10,15}" className={`${inputClass} tnum`} />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-brand-red text-white font-medium rounded-xl shadow-soft hover:bg-brand-darkRed transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2">
                    {t.contRequestBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
