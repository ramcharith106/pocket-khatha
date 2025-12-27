
import React from 'react';

const features = [
  {
    title: 'Digital Khata',
    description: 'Replace paper books with our secure ledger. Set automated WhatsApp and SMS reminders to customers instantly.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Recovery Service',
    description: 'Professional field agents visit customers across Hyderabad to ensure recovery. We visit the shop so you don’t have to.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Legal Protection',
    description: 'Stay legally compliant. We handle all documentation, including legally binding authorization slips for every recovery.',
    icon: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-brand-red tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Engineered for the Modern Merchant
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-[#FDF2D9]/10 border border-brand-cream hover:border-brand-red hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
