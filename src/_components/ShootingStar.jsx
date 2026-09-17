"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ShootingStar({ id, x, y, onDone }) {
    const containerRef = useRef(null);

    // Randomized ONCE when this star is created
    const angle = useRef(gsap.utils.random(35, 55)).current;
    const duration = useRef(gsap.utils.random(0.8, 1.5)).current;
    const distance = useRef(gsap.utils.random(500, 800)).current;

    useEffect(() => {
        const radians = (angle * Math.PI) / 180;

        const moveX = Math.cos(radians) * distance;
        const moveY = Math.sin(radians) * distance;

        const tween = gsap.fromTo(
            containerRef.current,
            {
                x: 0,
                y: 0,
                opacity: 1,
            },
            {
                x: moveX,
                y: moveY,
                opacity: 0,
                duration,
                ease: "none",
                onComplete: () => onDone(id),
            },
        );

        return () => tween.kill();
    }, [id, onDone, angle, duration, distance]);

    return (
        <div
            ref={containerRef}
            className="absolute h-[2px] w-[2px]"
            style={{
                left: `${x}%`,
                top: `${y}%`,
            }}
        >
            {/* Trail */}
            <div
                className="
                    absolute
                    right-0 top-1/2
                    h-px w-40
                    origin-right
                    -translate-y-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-white/80
                "
                style={{
                    rotate: `${angle}deg`,
                }}
            />

            {/* Star */}
            <div className="absolute h-[2px] w-[2px] rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.8)]" />
        </div>
    );
}
