
import React, { useState, useEffect } from 'react';
import { Locale } from '../constants/translations';

interface RecoveryModalProps {
  onClose: () => void;
  locale: Locale;
  t: any;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-ink-100 bg-brand-cream/40 text-brand-brown placeholder:text-ink-300 focus:border-brand-red/40 focus:ring-2 focus:ring-brand-red/15 outline-none transition-colors";

const RecoveryModal: React.FC<RecoveryModalProps> = ({ onClose, locale, t }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={t.modalTitle}>
      <div className="absolute inset-0 bg-brand-brown/70 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-lift overflow-hidden animate-scale-up">
        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-brown mb-2">{t.modalSuccess}</h3>
            <p className="text-[15px] text-ink-500 leading-relaxed">{t.modalSuccessMsg}</p>
          </div>
        ) : (
          <div className="p-7">
            <div className="flex justify-between items-start mb-7">
              <div>
                <h3 className="text-xl font-semibold text-brand-brown">{t.modalTitle}</h3>
                <p className="text-[14px] text-ink-500 mt-1">{t.modalSub}</p>
              </div>
              <button onClick={onClose} aria-label="Close" className="p-2 -mr-2 -mt-1 text-ink-300 hover:text-brand-brown hover:bg-brand-cream/60 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.modalOwnerLabel}</label>
                <input required type="text" autoFocus className={inputClass} placeholder="e.g. Ramesh Reddy" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.modalShopLabel}</label>
                <input required type="text" className={inputClass} placeholder="e.g. Sri Sai Store, Ameerpet" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink-700 mb-1.5">{t.modalPhoneLabel}</label>
                <input required type="tel" pattern="[0-9 +]{10,15}" className={`${inputClass} tnum`} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="pt-3">
                <button type="submit" className="w-full py-3.5 bg-brand-red text-white font-medium rounded-xl shadow-soft hover:bg-brand-darkRed transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2">
                  {t.modalDispatchBtn}
                </button>
                <p className="text-center text-[12px] text-ink-300 mt-4 leading-relaxed">
                  {t.modalDisclaimer}
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
