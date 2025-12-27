
import React from 'react';

const Features: React.FC<{ t: any }> = ({ t }) => {
  const features = [
    { title: t.featTitle, description: t.featDesc, icon: "📖" },
    { title: t.featTitle2, description: t.featDesc2, icon: "📍" },
    { title: t.featTitle3, description: t.featDesc3, icon: "⚖️" },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-brand-peach/10 border border-brand-peach/30 hover:border-brand-red hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-brown mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
