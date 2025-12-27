
import React, { useState } from 'react';
import { Locale } from '../constants/translations';

// Fix error: Property 'locale' does not exist on type 'IntrinsicAttributes & RecoveryModalProps'.
interface RecoveryModalProps {
  onClose: () => void;
  locale: Locale;
}

const RecoveryModal: React.FC<RecoveryModalProps> = ({ onClose, locale }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-scale-up">
        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600">Our senior field agent will call you within 2 hours to discuss your recovery case.</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark">Request a Recovery Agent</h3>
                <p className="text-slate-500">Quick dispatch across Hyderabad.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Owner Name</label>
                <input required type="text" className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-red outline-none" placeholder="e.g. Ramesh Reddy" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Shop Name & Area</label>
                <input required type="text" className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-red outline-none" placeholder="e.g. Sri Sai Store, Ameerpet" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile Number</label>
                <input required type="tel" className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-red outline-none" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-brand-red text-white font-bold rounded-xl shadow-lg hover:bg-brand-dark transition-all transform active:scale-95">
                  Request Dispatch
                </button>
                <p className="text-center text-xs text-slate-500 mt-4 italic">
                  *By requesting, you authorize Pocket Khata to contact you via Phone/WhatsApp.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecoveryModal;
