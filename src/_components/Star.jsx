"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Star() {
    const starRef = useRef(null);

    useEffect(() => {
        const startOpacity = gsap.utils.random(0.5, 1, 0.01);
        const startScale = gsap.utils.random(0.6, 0.8, 0.01);
        const duration = gsap.utils.random(0.5, 3, 0.01);

        gsap.set(starRef.current, {
            left: `${gsap.utils.random(0, 100)}%`,
            top: `${gsap.utils.random(0, 100)}%`,
            opacity: startOpacity,
            scale: startScale,
        });

        gsap.to(starRef.current, {
            opacity: 1,
            duration: duration,
            onComplete: () => {
                gsap.to(starRef.current, {
                    opacity: 0.5,
                    duration: duration,
                    repeat: -1,
                    yoyo: true,
                });
            },
        });
    }, []);

    return (
        <div
            ref={starRef}
            className="absolute w-[3px] h-[3px] bg-white"
        />
    );
}
