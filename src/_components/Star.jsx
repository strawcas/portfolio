"use client";

import { gsap } from "gsap";
import { useContext, useEffect, useRef } from "react";
import { MotionEnabledContext } from "./PortfolioMotion";

export default function Star() {
    const starRef = useRef(null);
    const enabled = useContext(MotionEnabledContext);

    useEffect(() => {
        gsap.set(starRef.current, {
            left: `${gsap.utils.random(0, 100)}%`,
            top: `${gsap.utils.random(0, 100)}%`,
            opacity: gsap.utils.random(0.3, 0.7),
            scale: gsap.utils.random(0.6, 0.8),
        });
    }, []);

    useEffect(() => {
        if (!enabled) return;
        const media = gsap.matchMedia();
        media.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to(starRef.current, {
                opacity: 0.9,
                duration: gsap.utils.random(1.5, 3),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });
        return () => media.revert();
    }, [enabled]);

    return (
        <div
            ref={starRef}
            aria-hidden="true"
            className="absolute w-[3px] h-[3px] bg-white"
        />
    );
}
