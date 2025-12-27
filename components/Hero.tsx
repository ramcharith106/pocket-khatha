
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, t }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-brand-peach/60 rounded-full blur-[60px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full bg-brand-peach/30 border border-brand-red/20 text-brand-red text-sm font-bold shadow-sm">
          <span className="mr-2">🚀</span> {t.heroBadge}
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-brand-brown leading-[1.1] mb-2 tracking-tight">
          {t.heroTitle1}
        </h1>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-brand-red leading-[1.1] mb-10 tracking-tight">
          {t.heroTitle2}
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-500 mb-14 leading-relaxed font-medium">
          {t.heroSub}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-brand-red text-white text-xl font-bold rounded-2xl shadow-xl hover:bg-brand-darkRed transition-all transform hover:-translate-y-1"
          >
            {t.heroCta1}
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-red text-xl font-bold rounded-2xl border-2 border-slate-100 hover:border-brand-red transition-all">
            {t.heroCta2}
          </button>
        </div>
        
        <div className="mt-24 relative mx-auto max-w-5xl px-4">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white bg-white p-1">
            <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000" alt="Dashboard" className="rounded-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
