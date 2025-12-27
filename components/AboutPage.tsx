
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red opacity-10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
              Built in Hyderabad, <br />
              <span className="text-brand-gold">For Hyderabad.</span>
            </h1>
            <p className="text-xl text-brand-cream/80 leading-relaxed">
              Bridging the gap between traditional Kirana values and modern credit security. We are on a mission to professionalize debt recovery for the local merchant.
            </p>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-bold text-brand-red tracking-wide uppercase mb-2">Our Story</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-6">How it all started</h3>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Walking through the narrow lanes of Ameerpet and Kukatpally, our founder witnessed a recurring struggle. Shopkeepers spent more time chasing "Udhaar" than managing their inventory.
                </p>
                <p>
                  The manual ledger (Khata) was full of promises, but the cash register was empty. Traditional banks wouldn't help, and local recovery was unorganized.
                </p>
                <p>
                  Pocket Khata was born from a simple idea: What if we could combine a digital ledger with a professional, legal, and local field team? Today, we are that bridge.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Traditional Indian Market" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-sm font-medium text-white/90">Daily Recoveries Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 bg-brand-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-brand-red tracking-wide uppercase">The People</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">Led by Visionaries</p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-cream group">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Founder" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-brand-dark mb-1">Ram Charith Reddy Alluru</h4>
                <p className="text-brand-red font-semibold mb-4">Founder & Product Lead</p>
                <p className="text-slate-600 leading-relaxed italic">
                  "A digital native focused on solving the last-mile credit problem for India's massive retail ecosystem."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-brand-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-base font-bold text-brand-gold tracking-wide uppercase mb-6">Our 2026 Goal</h2>
          <blockquote className="text-3xl sm:text-5xl font-extrabold leading-tight mb-8">
            "To recover ₹10 Crore of stuck capital for Hyderabad's small businesses by 2030."
          </blockquote>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="mt-8 text-brand-cream/80 text-lg">
            We are more than an app. We are the guardians of your cash flow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
