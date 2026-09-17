"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import Image from "next/image";
import { contactLinks } from "@/_data/contact";
import Navigation from "@/_components/Navigation";

export default function Header({ ref }) {
    const socialLinksRef = useRef(null);

    useEffect(() => {
        const media = gsap.matchMedia();

        media.add(
            {
                motion: "(prefers-reduced-motion: no-preference)",
                reduced: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                const reduced = context.conditions.reduced;
                const cleanups = Array.from(
                    socialLinksRef.current.querySelectorAll("a"),
                ).map((link) => {
                    const icon = link.querySelector("svg");
                    const tooltip = link.querySelector("span");
                    const animation = gsap
                        .timeline({ paused: true })
                        .to(
                            icon,
                            {
                                scale: reduced ? 1 : 1.18,
                                duration: reduced ? 0 : 0.16,
                                ease: "power2.out",
                            },
                            0,
                        )
                        .fromTo(
                            tooltip,
                            {
                                opacity: 0,
                                y: reduced ? 0 : 4,
                                scale: reduced ? 1 : 0.94,
                            },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: reduced ? 0 : 0.12,
                                ease: "power2.out",
                            },
                            0,
                        );

                    const update = () => {
                        if (link.matches(":hover, :focus-visible")) {
                            animation.play();
                        } else {
                            animation.reverse();
                        }
                    };
                    const events = [
                        "pointerenter",
                        "pointerleave",
                        "focus",
                        "blur",
                    ];
                    events.forEach((event) =>
                        link.addEventListener(event, update),
                    );
                    return () =>
                        events.forEach((event) =>
                            link.removeEventListener(event, update),
                        );
                });

                return () => cleanups.forEach((cleanup) => cleanup());
            },
        );

        return () => media.revert();
    }, []);

    const socialLinkClassName =
        "relative inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
    const tooltipClassName =
        "pointer-events-none absolute top-full left-1/2 mt-3 -translate-x-1/2 origin-top whitespace-nowrap rounded-xl bg-[#090914] px-3 py-2 text-xs leading-none font-medium text-white opacity-0 shadow-lg";

    return (
        <header
            ref={ref}
            className="relative z-20 w-full py-2 sm:py-4 xl:px-8 2xl:px-24"
        >
            <div className="relative flex flex-wrap items-center justify-between gap-y-6">
                <a
                    href="#top"
                    aria-label="Joseph Gabriel Castro — home"
                    className="relative h-12 w-28 shrink-0 overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-32"
                >
                    <Image
                        src="/logo.png"
                        alt="Joseph Gabriel Castro logo"
                        fill
                        sizes="(min-width: 640px) 128px, 112px"
                        className="object-cover"
                    />
                </a>

                {/* NAV */}
                <Navigation />

                {/* SOCIAL LINKS */}
                <div
                    ref={socialLinksRef}
                    className="flex items-center gap-1 text-3xl text-white sm:gap-3 sm:text-4xl"
                >
                    <a
                        href={contactLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={socialLinkClassName}
                    >
                        <FaGithub aria-hidden="true" />
                        <span
                            aria-hidden="true"
                            className={tooltipClassName}
                        >
                            GitHub
                        </span>
                    </a>

                    <a
                        href={contactLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={socialLinkClassName}
                    >
                        <FaLinkedinIn aria-hidden="true" />
                        <span
                            aria-hidden="true"
                            className={tooltipClassName}
                        >
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href={contactLinks.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                        className={socialLinkClassName}
                    >
                        <HiDocument aria-hidden="true" />
                        <span
                            aria-hidden="true"
                            className={tooltipClassName}
                        >
                            Resume
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
