"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skills from "./Skillset.module.css";
import experience from "./Experience.module.css";
import projects from "./Projects.module.css";
import about from "./About.module.css";
import contact from "./Contact.module.css";
import motion from "./PortfolioMotion.module.css";

export const MotionEnabledContext = createContext(true);

// Keep the content server-rendered; this boundary only adds progressive motion.
export default function PortfolioMotion({ children }) {
    const root = useRef(null);
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!enabled) return;
        const media = gsap.matchMedia();
        media.add(
            "(prefers-reduced-motion: no-preference)",
            () => {
                const select = gsap.utils.selector(root.current);
                gsap.to(select(`.${motion.progress}`), {
                    scaleX: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: root.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.2,
                    },
                });
                select(`.${experience.details}`).forEach((line) => {
                    gsap.fromTo(
                        line,
                        { "--timeline-progress": 0 },
                        {
                            "--timeline-progress": 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: line,
                                start: "top 75%",
                                end: "bottom 75%",
                                scrub: 0.4,
                            },
                        },
                    );
                });
                // Ambient artwork only runs while its card is visible.
                select(`.${projects.orbitArt}`).forEach((art) => {
                    const float = gsap.timeline({
                        paused: true,
                        repeat: -1,
                        yoyo: true,
                    });
                    float
                        .to(
                            art.querySelector(`.${projects.subCore}`),
                            {
                                y: -10,
                                rotation: -3,
                                duration: 3,
                                ease: "sine.inOut",
                            },
                            0,
                        )
                        .to(
                            art.querySelectorAll(
                                `.${projects.orbitToken}`,
                            ),
                            {
                                y: -7,
                                duration: 2.5,
                                stagger: 0.2,
                                ease: "sine.inOut",
                            },
                            0,
                        );
                    ScrollTrigger.create({
                        trigger: art,
                        start: "top bottom",
                        end: "bottom top",
                        onToggle: (self) =>
                            self.isActive
                                ? float.play()
                                : float.pause(),
                    });
                });
                const reveal = (elements, trigger, stagger = 0) => {
                    gsap.from(elements, {
                        y: 28,
                        opacity: 0.25,
                        duration: 0.85,
                        stagger,
                        ease: "power3.out",
                        clearProps: "transform,opacity",
                        scrollTrigger: {
                            trigger,
                            start: "top 90%",
                            once: true,
                        },
                    });
                };

                // Move the outer container so entrance and button hover motion
                // on its children can run independently of the scroll exit.
                const heroSection = select("#top")[0];
                const heroContent = select("[data-hero-content]")[0];
                if (heroSection && heroContent) {
                    gsap.to(heroContent, {
                        y: () =>
                            -Math.min(window.innerHeight * 0.2, 180),
                        autoAlpha: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: heroSection,
                            start: "top top",
                            end: "45% top",
                            scrub: 0.35,
                            invalidateOnRefresh: true,
                        },
                    });
                }

                const hero = select(
                    "[data-hero-content] h1, [data-hero-content] p",
                );
                if (hero.length) {
                    gsap.from(hero, {
                        y: 22,
                        opacity: 0.25,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        clearProps: "transform,opacity",
                    });
                }

                [
                    skills.header,
                    experience.heading,
                    projects.heading,
                    contact.heading,
                ].forEach((className) => {
                    select(`.${className}`).forEach((heading) =>
                        reveal(heading.children, heading, 0.12),
                    );
                });
                select(`.${skills.group}`).forEach((group) => {
                    reveal(
                        group.querySelector(
                            `.${skills.groupHeading}`,
                        ),
                        group,
                    );
                    // Animate the icon contents so tile hover transforms stay independent.
                    const icons = group.querySelectorAll(
                        `.${skills.tech} > *`,
                    );
                    reveal(icons, group, 0.035);
                });
                select(`.${experience.entry}`).forEach((entry) =>
                    reveal(entry.children, entry, 0.15),
                );
                select(`.${experience.highlights} li`).forEach(
                    (item) => reveal(item, item),
                );
                select(`.${projects.card}`).forEach((card) =>
                    reveal(card, card),
                );
                select(`.${projects.bridge}`).forEach((bridge) =>
                    reveal(bridge.children, bridge, 0.12),
                );
                select(`.${about.portrait}`).forEach((portrait) =>
                    reveal(portrait, portrait),
                );
                select(`.${about.content}`).forEach((content) =>
                    reveal(content.children, content, 0.1),
                );
                select(`.${contact.email}`).forEach((email) =>
                    reveal(email.children, email, 0.1),
                );
                select(`.${contact.profiles}`).forEach((profiles) =>
                    reveal(profiles.children, profiles, 0.1),
                );

                // A restrained push into each illustration as it enters the viewport.
                select(`.${projects.visual}`).forEach((visual) => {
                    gsap.fromTo(
                        visual.firstElementChild,
                        { scale: 1.06 },
                        {
                            scale: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: visual,
                                start: "top bottom",
                                end: "center center",
                                scrub: 0.7,
                            },
                        },
                    );
                });
            },
            root,
        );

        media.add(
            "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
            () => {
                const cleanups = [];
                root.current
                    .querySelectorAll(`.${projects.card}`)
                    .forEach((card) => {
                        const visual = card.querySelector(
                            `.${projects.visual}`,
                        );
                        const rotateX = gsap.quickTo(
                            visual,
                            "rotationX",
                            { duration: 0.6, ease: "power3.out" },
                        );
                        const rotateY = gsap.quickTo(
                            visual,
                            "rotationY",
                            { duration: 0.6, ease: "power3.out" },
                        );
                        gsap.set(visual, {
                            transformPerspective: 900,
                            transformOrigin: "center",
                        });
                        const move = (event) => {
                            const bounds =
                                card.getBoundingClientRect();
                            const x =
                                (event.clientX - bounds.left) /
                                bounds.width;
                            const y =
                                (event.clientY - bounds.top) /
                                bounds.height;
                            rotateX((0.5 - y) * 8);
                            rotateY((x - 0.5) * 10);
                            card.style.setProperty(
                                "--pointer-x",
                                `${x * 100}%`,
                            );
                            card.style.setProperty(
                                "--pointer-y",
                                `${y * 100}%`,
                            );
                        };
                        const reset = () => {
                            rotateX(0);
                            rotateY(0);
                        };
                        card.addEventListener("pointermove", move);
                        card.addEventListener("pointerleave", reset);
                        cleanups.push(() => {
                            card.removeEventListener(
                                "pointermove",
                                move,
                            );
                            card.removeEventListener(
                                "pointerleave",
                                reset,
                            );
                            card.style.removeProperty("--pointer-x");
                            card.style.removeProperty("--pointer-y");
                        });
                    });
                return () => cleanups.forEach((cleanup) => cleanup());
            },
            root,
        );

        // Expanding project details changes downstream scroll positions.
        let refreshFrame;
        const observer = new ResizeObserver(() => {
            cancelAnimationFrame(refreshFrame);
            refreshFrame = requestAnimationFrame(() =>
                ScrollTrigger.refresh(),
            );
        });
        observer.observe(root.current);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(refreshFrame);
            media.revert();
        };
    }, [enabled]);

    return (
        <MotionEnabledContext.Provider value={enabled}>
            <div
                ref={root}
                className={motion.shell}
                data-motion={enabled ? "on" : "off"}
            >
                <div className={motion.progress} aria-hidden="true" />
                {children}
            </div>
        </MotionEnabledContext.Provider>
    );
}
