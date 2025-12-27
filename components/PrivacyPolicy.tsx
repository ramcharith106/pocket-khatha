
import React from 'react';

interface PrivacyPolicyProps {
  t: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ t }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-extrabold text-brand-brown mb-4 tracking-tight">{t.footerPrivacy}</h1>
          <p className="text-slate-500 font-medium">Last Updated: May 2025</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-brand-brown mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-brand-peach/30 text-brand-red flex items-center justify-center mr-3 text-sm">01</span>
              Data Collection
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Pocket Khata collects specific transaction data including customer purchase history, outstanding balances, and repayment schedules to facilitate the digital ledger services. For accurate entry, we also collect audio recordings and voice transcripts for ledger creation via our vernacular voice feature.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-brown mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-brand-peach/30 text-brand-red flex items-center justify-center mr-3 text-sm">02</span>
              Recovery Authorization
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              By using our Recovery Services, the User explicitly grants Pocket Khata and its authorized partners the right to use provided debtor details (including Name, Phone Number, and Address) for professional debt recovery purposes. This includes the right to visit the debtor's location with legal authorization slips.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-brown mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-brand-peach/30 text-brand-red flex items-center justify-center mr-3 text-sm">03</span>
              Third-Party Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Your data is sensitive. We share necessary debtor information strictly with 'Verified Field Agents' assigned to your specific case. We do not sell your transactional data to advertisers or third-party marketing firms. Information is shared solely for the purpose of operational debt recovery and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-brown mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-brand-peach/30 text-brand-red flex items-center justify-center mr-3 text-sm">04</span>
              Data Security
            </h2>
            <div className="bg-brand-cream/30 p-6 rounded-2xl border border-brand-peach/30">
              <p className="text-slate-700 leading-relaxed font-bold flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                256-bit AES Encryption
              </p>
              <p className="text-slate-600 leading-relaxed font-medium mt-2">
                All financial data and transaction records are protected using industry-standard 256-bit encryption during transit and at rest on our secure cloud servers.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
