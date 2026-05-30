
import React from 'react';

interface TermsPageProps {
  t: any;
}

const TermsPage: React.FC<TermsPageProps> = ({ t }) => {
  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <header className="mb-14 pb-8 border-b border-ink-100">
          <h1 className="text-4xl font-semibold text-brand-brown mb-3 tracking-[-0.02em]">{t.footerTerms}</h1>
          <p className="text-[14px] text-ink-500">{t.termsEffectiveDate}</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-brand-brown mb-3">{t.termsSection1Title}</h2>
            <p className="text-[16px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
              {t.termsSection1Content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-brown mb-3">{t.termsSection2Title}</h2>
            <p className="text-[16px] text-ink-500 leading-relaxed mb-5" style={{ textWrap: 'pretty' as any }}>
              {t.termsSection2Content}
            </p>
            <div className="bg-brand-peach/15 border-l-2 border-brand-red p-5 rounded-r-xl">
              <p className="text-brand-brown font-semibold">
                {t.termsSection2FeeTitle}
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed mt-1">
                {t.termsSection2FeeDesc}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-brown mb-3">{t.termsSection3Title}</h2>
            <p className="text-[16px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
              {t.termsSection3Content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-brown mb-3">{t.termsSection4Title}</h2>
            <p className="text-[16px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
              {t.termsSection4Content}
            </p>
          </section>

          <div className="pt-8 border-t border-ink-100">
            <p className="text-[15px] text-ink-500">
              {t.termsLegalInquiry} <a href="mailto:legal@pocketkhata.in" className="text-brand-red font-medium hover:text-brand-darkRed transition-colors">legal@pocketkhata.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
