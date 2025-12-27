
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero Section - Updated for visibility and to match screenshot theme */}
      <section className="relative bg-brand-cream/20 py-24 sm:py-32 overflow-hidden">
        {/* Background Graphic - Peach circles from screenshot */}
        <div className="absolute top-0 right-[-5%] w-[500px] h-[500px] bg-brand-peach/50 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-brand-brown mb-2 tracking-tight">
            Let’s Get Your
          </h1>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-brand-gold mb-8 tracking-tight">
            Money Back.
          </h1>
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-slate-500 leading-relaxed font-medium">
            Whether you need a digital nudge or an on-ground recovery agent, we are here to help your shop grow.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-brown mb-8">Get In Touch</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our regional headquarters are located in the heart of Hyderabad's tech ecosystem. Drop by for a discussion about your business cash flow.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-brown">Office Address</h4>
                    <p className="text-slate-600 mt-1">
                      T-Hub Phase 2, Knowledge City,<br />
                      Hyderabad, Telangana - 500081
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-brown">Email Us</h4>
                    <p className="text-slate-600 mt-1">partnerships@pocketkhata.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-brand-peach/30 p-8 sm:p-10 relative z-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                    <p className="text-slate-600">Our partnership team will call you back shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Shop Name</label>
                        <input required type="text" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none bg-slate-50 transition-all font-medium" placeholder="e.g. Mahavir Sweets" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Owner Name</label>
                        <input required type="text" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none bg-slate-50 transition-all font-medium" placeholder="e.g. Anil Kumar" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-red outline-none bg-slate-50 transition-all font-medium" placeholder="+91 9XXXX XXXXX" />
                    </div>
                    <button type="submit" className="w-full py-5 bg-brand-red text-white font-bold rounded-xl shadow-xl hover:bg-brand-darkRed transition-all transform active:scale-[0.98]">
                      Request Call Back
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      Standard callback time is within 30 minutes.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
