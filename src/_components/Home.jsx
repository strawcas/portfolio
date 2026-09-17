"use client";

import Header from "@/_components/Header";
import Star from "@/_components/Star";
import MagneticButton from "@/_components/MagneticButton";
import motion from "./PortfolioMotion.module.css";
import { Montserrat } from "next/font/google";
import { HiArrowUpRight } from "react-icons/hi2";
import useShootingStars from "@/_hooks/useShootingStar";
import ShootingStar from "@/_components/ShootingStar";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function Home() {
    const numStars = 100;

    const headingClassName =
        "w-fit max-w-full bg-linear-to-b from-white from-20% to-[#b8bacd] bg-clip-text pb-2 text-[clamp(1.75rem,5vw,3.75rem)] leading-tight font-extrabold tracking-tight text-balance text-transparent";

    const { stars, deleteStar } = useShootingStars({ speed: 1000 });

    return (
        <div
            id="top"
            className="
                relative isolate
                flex min-h-svh w-full flex-col
                gap-6 overflow-hidden
                bg-[#040517] p-4
                sm:gap-8 sm:p-8
            "
            style={{
                backgroundImage: `
                    radial-gradient(
                        ellipse 55% 70% at 50% 0%,
                        rgb(255 255 255 / 0.13) 0%,
                        transparent 100%
                    ),
                    radial-gradient(
                        ellipse 45% 55% at 100% 0%,
                        rgb(167 139 250 / 0.2) 0%,
                        transparent 100%
                    )
                `,
            }}
        >
            {Array.from({ length: numStars }).map((_, i) => (
                <Star key={`Star#${i}`} />
            ))}
            {stars.map((val) => (
                <ShootingStar
                    key={`shootingStar#${val.id}`}
                    id={val.id}
                    x={val.x}
                    y={val.y}
                    onDone={deleteStar}
                />
            ))}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-linear-to-b from-transparent to-[#040517]"
            />

            <Header />

            <main
                className={`${montserrat.className} relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center`}
            >
                <div className="flex min-h-[calc(100svh-14rem)] w-full flex-col items-center justify-center py-10 sm:min-h-[calc(100svh-16rem)]">
                    <div className="relative isolate flex w-full flex-col items-center">
                        <h1 className={`mt-2 ${headingClassName}`}>
                            I&apos;m Joseph Gabriel Castro
                            <br />
                            Software Engineer
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-8">
                            I build fast, scalable web applications
                            using Next.js, Node.js, MongoDB, PHP, and
                            modern full-stack technologies.
                        </p>
                    </div>

                    <MagneticButton>
                        Explore my work
                        <HiArrowUpRight
                            aria-hidden="true"
                            className="size-4"
                        />
                    </MagneticButton>
                </div>
            </main>
        </div>
    );
}
