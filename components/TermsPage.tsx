
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
          <p className="text-slate-500 font-medium font-sans">Effective Date: June 2025</p>
        </header>

        <div className="space-y-12">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-bold text-brand-brown mb-4 uppercase tracking-wider text-sm">01. Service Scope</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Pocket Khata provides two primary services: (a) A Digital Ledger platform which is provided free of charge for recording business transactions, and (b) Professional Field Recovery Services which are paid services designed to assist merchants in collecting outstanding debts.
            </p>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">02. Recovery Policy (Plan C)</h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              All physical recovery requests are subject to an internal verification process. Pocket Khata reserves the right to decline cases involving disputes or lack of verifiable proof.
            </p>
            <div className="bg-brand-red/5 border-l-4 border-brand-red p-6 rounded-r-2xl">
              <p className="text-brand-brown font-extrabold text-lg">
                Success Fee: 10-15%
              </p>
              <p className="text-slate-600 font-medium text-sm mt-1">
                Pocket Khata charges a success fee only upon successful settlement of the debt. The specific percentage is determined by the age and amount of the debt.
              </p>
            </div>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">03. User Responsibility</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              By entering a record, the Merchant certifies that the debt is real, legally valid, and resulting from a bona fide business transaction. Verification of entries is the sole responsibility of the user. Pocket Khata maintains a zero-tolerance policy for fraudulent entries; fake records or malicious use of the platform will lead to immediate account termination and potential legal action.
            </p>
          </section>

          <section className="p-2">
            <h2 className="text-2xl font-bold text-brand-brown mb-4">04. Liability & Intermediary Status</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Pocket Khata acts strictly as an intermediary platform providing digital tools and agency services. We are <strong>not a bank</strong>, financial institution, or licensed NBFC. We do not provide loans or credit. Pocket Khata shall not be held liable for the inability to recover specific debts or for disputes arising between the merchant and their customers.
            </p>
          </section>
          
          <div className="pt-8 border-t border-slate-100 mt-12">
            <p className="text-slate-500 text-sm font-medium">
              For any legal inquiries, please contact <span className="text-brand-red">legal@pocketkhata.in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
