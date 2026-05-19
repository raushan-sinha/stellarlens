import React from 'react';

const GettingStarted: React.FC = () => {
    return (
        <section id="getting-started" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Getting Started</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
                Follow these quick steps to set up your StellarLens environment and begin your journey into deep space imaging.
            </p>

            <ol className="space-y-6 text-slate-700">
                <li className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold">1</span>
                    <div>
                        <strong className="block text-slate-900 text-lg">Create an Account</strong>
                        Sign up using your email to join the StellarLens network and get your free cloud storage allocation.
                    </div>
                </li>
                <li className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold">2</span>
                    <div>
                        <strong className="block text-slate-900 text-lg">Connect Your Equipment</strong>
                        Navigate to the 'Devices' tab in your dashboard to pair your smart telescopes, star trackers, or DSLR cameras via our secure bridge.
                    </div>
                </li>
                <li className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold">3</span>
                    <div>
                        <strong className="block text-slate-900 text-lg">Capture & Share</strong>
                        Take your first photo, run it through our AI-assisted post-processor, and publish it to the global feed!
                    </div>
                </li>
            </ol>
        </section>
    );
};

export default GettingStarted;