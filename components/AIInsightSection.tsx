
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Locale } from '../constants/translations';

interface AIInsightSectionProps {
  locale: Locale;
  t: any;
}

const ledger = [
  { name: "Sri Sai Kirana", area: "Kukatpally", amount: "4,820", status: "In Progress", tone: "amber" },
  { name: "Metro General Store", area: "Madhapur", amount: "12,150", status: "Recovered", tone: "green" },
  { name: "Balaji Provisions", area: "Gachibowli", amount: "7,300", status: "Agent Assigned", tone: "red" },
];

const toneDot: Record<string, string> = {
  amber: "bg-brand-gold",
  green: "bg-emerald-500",
  red: "bg-brand-red",
};

const AIInsightSection: React.FC<AIInsightSectionProps> = ({ locale, t }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleAnalyticRequest = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setIsError(false);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a senior debt recovery specialist for small Indian retailers.
      The user asks: "${query}".
      Give a concise, professional, and actionable tip in 2-3 sentences.
      Focus on Hyderabad retail context. Use terms like 'Kirana' and 'Bazaar'.
      The current user language preference is ${locale}. Please respond in ${locale}.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || 'No insight was returned. Please rephrase your question and try again.');
    } catch (error) {
      console.error(error);
      setIsError(true);
      setResponse("We couldn't reach the advisor right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-insights" className="py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14 items-start">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-label text-brand-red">{t.aiTitle} {t.aiSubtitle}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-brand-brown leading-tight tracking-[-0.01em] mb-5" style={{ textWrap: 'balance' as any }}>
              {t.aiDesc}
            </h2>

            <div className="mt-8">
              <label htmlFor="ai-query" className="block text-[13px] font-medium text-ink-700 mb-2.5">{t.aiLabel}</label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  id="ai-query"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleAnalyticRequest(); }}
                  placeholder={t.aiPlaceholder}
                  className="flex-grow px-4 py-3 rounded-xl border border-ink-100 bg-brand-cream/40 text-brand-brown placeholder:text-ink-300 focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15 outline-none transition-colors"
                />
                <button
                  onClick={handleAnalyticRequest}
                  disabled={loading}
                  className="shrink-0 bg-brand-red text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-darkRed disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
                >
                  {t.aiButton}
                </button>
              </div>

              <div aria-live="polite" className="min-h-[1px]">
                {loading && (
                  <div className="mt-5 p-5 rounded-xl bg-brand-peach/15 border border-ink-100 space-y-2.5 animate-fade-in" aria-hidden="true">
                    <div className="h-3 rounded bg-ink-100 w-[92%]"></div>
                    <div className="h-3 rounded bg-ink-100 w-[78%]"></div>
                    <div className="h-3 rounded bg-ink-100 w-[55%]"></div>
                  </div>
                )}
                {!loading && response && (
                  <div className={`mt-5 p-5 rounded-xl border-l-2 animate-fade-in ${isError ? 'bg-brand-red/5 border-brand-red' : 'bg-brand-peach/15 border-brand-gold'}`}>
                    <p className={`text-[15px] leading-relaxed ${isError ? 'text-brand-darkRed font-medium' : 'text-brand-brown'}`}>{response}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-ink-100 shadow-soft overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-ink-100">
              <h3 className="text-sm font-semibold text-brand-brown">Live recovery ledger</h3>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Synced
              </span>
            </div>
            <ul className="divide-y divide-ink-100">
              {ledger.map((item, i) => (
                <li key={i} className="flex items-center justify-between px-6 py-4 hover:bg-brand-cream/40 transition-colors">
                  <div className="min-w-0">
                    <div className="font-medium text-brand-brown truncate">{item.name}</div>
                    <div className="text-[13px] text-ink-500">{item.area}</div>
                  </div>
                  <div className="flex items-center gap-5 pl-4">
                    <span className="tnum font-medium text-brand-brown">₹{item.amount}</span>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-500 whitespace-nowrap w-[112px] justify-end">
                      <span className={`w-1.5 h-1.5 rounded-full ${toneDot[item.tone]}`}></span>
                      {item.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 py-4 border-t border-ink-100 flex items-center justify-between text-[13px]">
              <span className="text-ink-500">Outstanding this week</span>
              <span className="tnum font-semibold text-brand-brown">₹24,270</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsightSection;
