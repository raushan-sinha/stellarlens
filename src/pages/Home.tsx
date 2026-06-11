import { useEffect, useState } from "react"
import type { SpaceInfoProps } from "../types/spaceInfo.types";

export default function Home() {
    const [spaceData, setSpaceData] = useState<SpaceInfoProps | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        const fetchSpaceData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/space-data');
                if (!response.ok) throw new Error("Failed to fetch API.");
                const data = await response.json();
                setSpaceData(data);
            } catch (error) {
                console.error('Error', error);
                setErrorMsg('Failed to fetch API.');
            }
        }

        fetchSpaceData();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
            <main className="mx-auto max-w-4xl px-4 py-20 md:py-20">
                {errorMsg && (
                    <p className="text-base md:text-lg leading-relaxed text-red-300 text-justify font-normal">
                        {errorMsg}
                    </p>
                )}

                {spaceData && (
                    <article className="space-y-8">
                        {/* Header Section */}
                        <header className="space-y-3 border-b border-slate-800 pb-6">
                            <h1 className="text-3xl font-extrabold tracking-tight text-[#fb9d6b] sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-200 via-slate-100 to-indigo-200 bg-clip-text">
                                {spaceData.title}
                            </h1>
                            <div className="flex items-center gap-3 text-sm font-medium text-indigo-400">
                                <span className="rounded-full bg-[#057fb4] text-white px-3 py-1 border border-indigo-500/20">
                                    {spaceData.date}
                                </span>
                            </div>
                        </header>

                        {/* Media Container (Handles Responsive Aspect Ratios) */}
                        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-indigo-950/20">
                            {spaceData.media_type === 'image' ? (
                                <img
                                    src={spaceData.hdurl}
                                    alt={spaceData.title}
                                    className="max-h-96 w-full object-cover md:max-h-[30rem] transition-transform duration-500 hover:scale-[1.01]"
                                />
                            ) : (
                                <div className="aspect-video w-full">
                                    <iframe
                                        title="space-video"
                                        src={spaceData.hdurl}
                                        allowFullScreen
                                        className="h-full w-full border-0"
                                    />
                                </div>
                            )}
                        </section>

                        {/* Content Section */}
                        <section className="rounded-2xl border border-slate-900 bg-slate-900/40 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <h3 className="text-xl font-bold tracking-wide text-indigo-400 uppercase text-sm">
                                About This Discovery
                            </h3>

                            <p className="text-base md:text-lg leading-relaxed text-slate-300 text-justify font-normal">
                                {spaceData.explanation}
                            </p>
                        </section>
                    </article>
                )}
            </main>
        </div>
    )
}