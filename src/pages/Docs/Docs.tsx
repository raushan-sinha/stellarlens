import React from 'react';
import Introduction from './sections/Introduction';
import GettingStarted from './sections/GettingStarted';
import Features from './sections/Features';

const Docs: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 font-sans py-12 px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto space-y-12">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">StellarLens Docs</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore the guides and features to master your astrophotography journey.</p>
                </header>

                <main className="space-y-10">
                    <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 [&>section]:mb-0 transition-transform hover:-translate-y-1 duration-300">
                        <Introduction />
                    </div>

                    <div className="bg-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 [&>section]:mb-0 transition-transform hover:-translate-y-1 duration-300">
                        <GettingStarted />
                    </div>

                    <div className="bg-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200 [&>section]:mb-0 transition-transform hover:-translate-y-1 duration-300">
                        <Features />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Docs;
