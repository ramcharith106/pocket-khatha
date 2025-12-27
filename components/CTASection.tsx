
import React from 'react';

interface CTASectionProps {
  onCtaClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-brand-red">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">
          Ready to clear your books?
        </h2>
        <p className="text-xl text-brand-cream/80 mb-10">
          Join hundreds of Hyderabad merchants who have recovered over ₹50 Lakhs using Pocket Khata.
        </p>
        <button 
          onClick={onCtaClick}
          className="px-10 py-5 bg-brand-gold text-brand-dark text-xl font-extrabold rounded-2xl shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
        >
          Request Your Recovery Agent Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
