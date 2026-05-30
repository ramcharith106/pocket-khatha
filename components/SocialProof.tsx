
import React from 'react';

const SocialProof: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section className="border-y border-ink-100 bg-brand-peach/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.socialImpact}</span>
          <p className="text-xl sm:text-2xl font-medium text-brand-brown max-w-2xl" style={{ textWrap: 'balance' as any }}>
            {t.socialTrusted}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
