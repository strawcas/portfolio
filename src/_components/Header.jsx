"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import Image from "next/image";

export default function Header() {
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
                    const animation = gsap.timeline({ paused: true })
                        .to(icon, {
                            scale: reduced ? 1 : 1.18,
                            duration: reduced ? 0 : 0.16,
                            ease: "power2.out",
                        }, 0)
                        .fromTo(tooltip, {
                            opacity: 0,
                            y: reduced ? 0 : 4,
                            scale: reduced ? 1 : 0.94,
                        }, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: reduced ? 0 : 0.12,
                            ease: "power2.out",
                        }, 0);

                    const update = () => {
                        if (link.matches(":hover, :focus-visible")) {
                            animation.play();
                        } else {
                            animation.reverse();
                        }
                    };
                    const events = ["pointerenter", "pointerleave", "focus", "blur"];
                    events.forEach((event) => link.addEventListener(event, update));
                    return () => events.forEach((event) => link.removeEventListener(event, update));
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
        <header className="relative z-20 w-full py-2 sm:py-4 xl:px-8 2xl:px-24">
            <div className="relative flex flex-wrap items-center justify-between gap-y-6">

                
                <div className="relative h-12 w-28 shrink-0 overflow-hidden sm:w-32">
                    <Image
                        src="/logo.png"
                        alt="Joseph Gabriel Castro logo"
                        fill
                        sizes="(min-width: 640px) 128px, 112px"
                        className="object-cover"
                    />
                </div>

                {/* NAV */}
                <nav aria-label="Main navigation" className="order-last w-full xl:absolute xl:left-1/2 xl:order-none xl:w-auto xl:-translate-x-1/2">
                    <ul className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/80 backdrop-blur-md sm:gap-x-6 sm:px-6 sm:text-sm xl:flex-nowrap xl:gap-x-8 xl:rounded-full [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center">
                        <li>
                            <a
                                href="#skills"
                                className="relative transition hover:text-white"
                            >
                                SKILLSET
                                <span className="absolute bottom-0 left-1/2 h-[2px] w-10 -translate-x-1/2 bg-pink-500" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experience"
                                className="transition hover:text-white"
                            >
                                EXPERIENCE
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="transition hover:text-white"
                            >
                                PROJECTS
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="transition hover:text-white"
                            >
                                ABOUT-ME
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="transition hover:text-white"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* SOCIAL LINKS */}
                <div ref={socialLinksRef} className="flex items-center gap-1 text-3xl text-white sm:gap-3 sm:text-4xl">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={socialLinkClassName}
                    >
                        <FaGithub aria-hidden="true" />
                        <span aria-hidden="true" className={tooltipClassName}>
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={socialLinkClassName}
                    >
                        <FaLinkedinIn aria-hidden="true" />
                        <span aria-hidden="true" className={tooltipClassName}>
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                        className={socialLinkClassName}
                    >
                        <HiDocument aria-hidden="true" />
                        <span aria-hidden="true" className={tooltipClassName}>
                            Resume
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
