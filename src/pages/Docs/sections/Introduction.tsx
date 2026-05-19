import React from 'react';

const Introduction: React.FC = () => {
    return (
        <section id="introduction" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Introduction</h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                    Welcome to the official documentation for <strong>StellarLens</strong>.
                    StellarLens is a premier platform designed for astrophotographers, astronomers, and space enthusiasts.
                    Our mission is to provide cutting-edge digital tools to explore, capture, and share the wonders of the cosmos.
                </p>
                <p>
                    Whether you are a seasoned astronomer or just starting your stargazing journey, this documentation will guide you through all the features, equipment integrations, and community capabilities of the StellarLens ecosystem.
                </p>
            </div>
        </section>
    );
};

export default Introduction;