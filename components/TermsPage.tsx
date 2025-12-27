
import React from 'react';

interface TermsPageProps {
  t: any;
}

const TermsPage: React.FC<TermsPageProps> = ({ t }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-extrabold text-brand-brown mb-4 tracking-tight">{t.footerTerms}</h1>
          <p className="text-slate-500 font-medium font-sans">{t.termsEffectiveDate}</p>
        </header>

        <div className="space-y-12">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-bold text-brand-brown mb-4 uppercase tracking-wider text-sm">{t.termsSection1Title}</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.termsSection1Content}
            </p>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">{t.termsSection2Title}</h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              {t.termsSection2Content}
            </p>
            <div className="bg-brand-red/5 border-l-4 border-brand-red p-6 rounded-r-2xl">
              <p className="text-brand-brown font-extrabold text-lg">
                {t.termsSection2FeeTitle}
              </p>
              <p className="text-slate-600 font-medium text-sm mt-1">
                {t.termsSection2FeeDesc}
              </p>
            </div>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">{t.termsSection3Title}</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.termsSection3Content}
            </p>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">{t.termsSection4Title}</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.termsSection4Content}
            </p>
          </section>
          
          <div className="pt-8 border-t border-slate-100 mt-12">
            <p className="text-slate-500 text-sm font-medium">
              {t.termsLegalInquiry} <span className="text-brand-red">legal@pocketkhata.in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
