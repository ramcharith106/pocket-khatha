
import React from 'react';

interface PrivacyPolicyProps {
  t: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ t }) => {
  const sections = [
    { title: t.privacySection1Title, content: t.privacySection1Content },
    { title: t.privacySection2Title, content: t.privacySection2Content },
    { title: t.privacySection3Title, content: t.privacySection3Content },
  ];

  return (
    <div className="pt-28 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <header className="mb-14 pb-8 border-b border-ink-100">
          <h1 className="text-4xl font-semibold text-brand-brown mb-3 tracking-[-0.02em]">{t.footerPrivacy}</h1>
          <p className="text-[14px] text-ink-500">{t.privacyLastUpdated}</p>
        </header>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <section key={i}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-[13px] font-medium tnum text-brand-red/70">0{i + 1}</span>
                <h2 className="text-xl font-semibold text-brand-brown">{s.title}</h2>
              </div>
              <p className="text-[16px] text-ink-500 leading-relaxed" style={{ textWrap: 'pretty' as any }}>
                {s.content}
              </p>
            </section>
          ))}

          <section>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-[13px] font-medium tnum text-brand-red/70">04</span>
              <h2 className="text-xl font-semibold text-brand-brown">{t.privacySection4Title}</h2>
            </div>
            <div className="bg-brand-peach/15 border border-ink-100 p-6 rounded-xl">
              <p className="text-[15px] font-semibold text-brand-brown flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.privacySection4Subtitle}
              </p>
              <p className="text-[15px] text-ink-500 leading-relaxed mt-2">
                {t.privacySection4Content}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
