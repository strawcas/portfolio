"use client";

import Header from "@/_components/Header";
import Star from "@/_components/Star";
import { HiArrowUpRight } from "react-icons/hi2";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function Home() {
    const numStars = 100;
    const headingClassName =
        "w-fit bg-linear-to-b from-white from-20% to-[#b8bacd] pb-2 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl";

    return (
        <div className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-[#040517] p-4 sm:p-8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_55%,rgba(139,92,246,0.13),transparent_60%)]"
            />
            {Array.from({ length: numStars }).map((_, i) => (
                <Star key={`Star#${i}`} />
            ))}
            <Header />

            <main className={`${montserrat.className} relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-2 py-20 text-center sm:px-6 sm:py-28`}>
                <p className={headingClassName}>
                    I&#39;m Joseph Gabriel Castro
                </p>
                <h1 className={`mt-2 ${headingClassName}`}>
                    Software Engineer
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-8">
                    I build fast, scalable web applications using
                    Next.js, Node.js, MongoDB, PHP, and modern
                    full-stack technologies.
                </p>
                <button
                    type="button"
                    className="group mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full border border-purple-200/30 bg-linear-to-r from-violet-600 to-purple-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.25)] transition duration-300 hover:-translate-y-1 hover:border-purple-200/60 hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
                >
                    Explore my work
                    <HiArrowUpRight
                        aria-hidden="true"
                        className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                </button>
            </main>
        </div>
    );
}
