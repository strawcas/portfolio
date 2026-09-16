"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function MagneticButton({ children }) {
    const magneticZoneRef = useRef(null);
    const exploreButtonRef = useRef(null);
    const magnetStrength = 0.4;

    useEffect(() => {
        const media = gsap.matchMedia();

        media.add(
            "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
            () => {
                const zone = magneticZoneRef.current;
                const button = exploreButtonRef.current;
                let tween;

                gsap.set(button, { x: 0, y: 0 });

                const reset = () => {
                    tween = gsap.to(button, {
                        x: 0,
                        y: 0,
                        duration: 0.55,
                        ease: "elastic.out(1, 0.5)",
                        overwrite: true,
                    });
                };

                const move = (event) => {
                    if (
                        event.pointerType === "touch" ||
                        button.matches(":focus-visible")
                    )
                        return;

                    const bounds = zone.getBoundingClientRect();

                    const x =
                        event.clientX -
                        bounds.left -
                        bounds.width / 2;

                    const y =
                        event.clientY -
                        bounds.top -
                        bounds.height / 2;

                    if (
                        Math.hypot(
                            x / (bounds.width / 2),
                            y / (bounds.height / 2),
                        ) > 1
                    ) {
                        reset();
                        return;
                    }

                    tween = gsap.to(button, {
                        x: x * magnetStrength,
                        y: y * magnetStrength,
                        duration: 0.2,
                        ease: "power3.out",
                        overwrite: true,
                    });
                };

                zone.addEventListener("pointermove", move);
                zone.addEventListener("pointerleave", reset);
                zone.addEventListener("pointercancel", reset);
                button.addEventListener("focus", reset);
                window.addEventListener("blur", reset);

                return () => {
                    zone.removeEventListener("pointermove", move);
                    zone.removeEventListener("pointerleave", reset);
                    zone.removeEventListener("pointercancel", reset);
                    button.removeEventListener("focus", reset);
                    window.removeEventListener("blur", reset);

                    tween?.kill();
                };
            },
        );

        return () => media.revert();
    }, []);

    return (
        <div
            ref={magneticZoneRef}
            className="
                mt-8 flex w-fit max-w-full items-center justify-center
                lg:aspect-square
                lg:w-[22rem]
                lg:rounded-full
                lg:border
                lg:border-white/15
            "
        >
            <button
                ref={exploreButtonRef}
                type="button"
                className="
                    relative isolate inline-flex shrink-0 cursor-pointer
                    items-center gap-3 rounded-full bg-white px-7 py-3.5
                    text-sm font-medium text-[#040517]
                    transition-colors duration-150
                    hover:bg-slate-200
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                    active:bg-slate-300
                    motion-reduce:transition-none

                    before:pointer-events-none
                    before:absolute
                    before:-inset-x-12
                    before:-inset-y-16
                    before:z-[-1]
                    before:content-['']
                    before:bg-[radial-gradient(ellipse_at_center,rgb(170_163_225/22%)_0%,rgb(139_130_205/10%)_35%,transparent_70%)]
                "
            >
                {children}
            </button>
        </div>
    );
}
