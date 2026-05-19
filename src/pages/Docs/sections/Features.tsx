import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Core Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Star Tracking</h3>
          <p className="text-slate-600 leading-relaxed">Integrate natively with supported mounts to get real-time positional data and automatic celestial tracking.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">High-Resolution Processing</h3>
          <p className="text-slate-600 leading-relaxed">Utilize our cloud-based AI to stack, denoise, and process your raw FIT files into breathtaking deep-space images.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Community</h3>
          <p className="text-slate-600 leading-relaxed">Share your observations, exchange acquisition details, and collaborate on global astronomical events with users worldwide.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Interactive Sky Map</h3>
          <p className="text-slate-600 leading-relaxed">Plan your sessions with our interactive, high-precision AR sky map tailored to your exact geographical coordinates.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
