import { useEffect, useState } from "react";
import type { SpaceInfoProps } from "../types/spaceInfo.types";

export default function Home() {
    const [spaceData, setSpaceData] = useState<SpaceInfoProps | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        const fetchSpaceData = async () => {
            try {
                const response = await fetch("https://stellarlens-backend.vercel.app/space-news");
                if (!response.ok) throw new Error("Failed to fetch API.");
                const data = await response.json();
                console.log(data)
                console.log('Status: ', response.status)
                setSpaceData(data);
            } catch (error) {
                console.error("Error", error);
                setErrorMsg("Failed to fetch API.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSpaceData();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            {isLoading ? (
                <div className="flex min-h-screen items-center justify-center gap-3 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
                    <p className="text-base sm:text-lg font-medium">Loading Data...</p>
                </div>
            ) : (
                <main className="mx-auto w-full max-w-7xl pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28 xl:pb-32">
                    {errorMsg && (
                        <div className="mx-auto max-w-4xl rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                            <p className="text-sm sm:text-base text-red-300 leading-relaxed">
                                {errorMsg}
                            </p>
                        </div>
                    )}

                    {spaceData && (
                        <article className="mx-auto max-w-5xl space-y-6 sm:space-y-8 lg:space-y-10">
                            {/* Header */}
                            <header className="space-y-4 border-b border-slate-800 pb-5 sm:pb-6">
                                <h1 className="bg-gradient-to-r from-indigo-200 via-slate-100 to-indigo-200 bg-clip-text text-transparent font-extrabold tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                                    {spaceData.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-[#057fb4] px-4 py-2 text-xs sm:text-sm font-medium text-white">
                                        {spaceData.date}
                                    </span>
                                </div>
                            </header>

                            {/* Image / Video */}
                            <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
                                {spaceData.media_type === "image" ? (
                                    <img
                                        src={spaceData.hdurl || spaceData.url}
                                        alt={spaceData.title}
                                        className="h-auto w-full object-cover max-h-[650px]"
                                    />
                                ) : (
                                    <video
                                        controls
                                        autoPlay
                                        muted
                                        className="w-full"
                                    >
                                        <source src={spaceData.url} type="video/mp4" />
                                        Your browser does not support video playback.
                                    </video>
                                )}
                            </section>

                            {/* Content */}
                            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10">
                                <h2 className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-400">
                                    About This Discovery
                                </h2>

                                <p className="mx-auto max-w-none lg:max-w-4xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-300">
                                    {spaceData.explanation}
                                </p>
                            </section>
                        </article>
                    )}
                </main>
            )}
        </div>
    );
}
