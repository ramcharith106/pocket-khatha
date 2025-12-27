
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIInsightSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyticRequest = async () => {
    if (!query) return;
    setLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Act as a senior debt recovery specialist for small Indian retailers. 
      The user asks: "${query}". 
      Give a concise, professional, and actionable tip in 2-3 sentences. 
      Focus on Hyderabad retail context. Use terms like 'Kirana' and 'Bazaar'.`;
      
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || 'Unable to generate insight at this time.');
    } catch (error) {
      console.error(error);
      setResponse("Our AI advisor is currently analyzing markets. Please try again soon.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-insights" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-dark mb-6">
              Powered by <span className="text-brand-red">Gemini AI</span> Intelligence
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our system doesn't just track debt—it analyzes payment patterns. Predict defaults before they happen and get AI-driven advice on when to send an agent versus a reminder.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-cream">
              <label className="block text-sm font-bold text-slate-700 mb-2">Ask the AI Recovery Advisor</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. How to recover 5k from a regular?" 
                  className="flex-grow p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-red outline-none"
                />
                <button 
                  onClick={handleAnalyticRequest}
                  disabled={loading}
                  className="bg-brand-red text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-dark disabled:opacity-50"
                >
                  {loading ? '...' : 'Ask'}
                </button>
              </div>
              
              {response && (
                <div className="mt-4 p-4 bg-brand-red/5 rounded-lg border-l-4 border-brand-red animate-fade-in">
                  <p className="text-brand-dark text-sm italic">"{response}"</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-gold/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-brand-cream">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-brand-dark">Live Recovery Dashboard</h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold uppercase">System Healthy</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Sri Sai Kirana", area: "Kukatpally", status: "In Progress", color: "red" },
                  { name: "Metro General", area: "Madhapur", status: "Recovered", color: "green" },
                  { name: "Balaji Store", area: "Gachibowli", status: "Agent Assigned", color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.area}</div>
                    </div>
                    <span className={`text-xs font-bold ${item.color === 'red' ? 'text-brand-red bg-brand-red/10' : item.color === 'green' ? 'text-green-700 bg-green-50' : 'text-amber-700 bg-amber-50'} px-3 py-1 rounded-full`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsightSection;
