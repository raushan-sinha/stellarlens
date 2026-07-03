import React from 'react';
import Introduction from './sections/Introduction';
import GettingStarted from './sections/GettingStarted';
import Features from './sections/Features';

const Docs: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="mx-auto w-full max-w-5xl pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 xl:pb-32">
                <header className="mb-10 text-center sm:mb-12 md:mb-16">
                    <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:mb-4 sm:text-4xl md:text-5xl">StellarLens Docs</h1>
                    <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">Explore the guides and features to master your astrophotography journey.</p>
                </header>

                <main className="space-y-6 sm:space-y-8 lg:space-y-10">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12 [&>section]:mb-0">
                        <Introduction />
                    </div>

                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12 [&>section]:mb-0">
                        <GettingStarted />
                    </div>

                    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12 [&>section]:mb-0">
                        <Features />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Docs;
