"use client";

import ShootingStar from "@/_components/ShootingStar";
import useShootingStars from "@/_hooks/useShootingStar";

export default function Page() {
    const { stars, deleteStar } = useShootingStars({ speed: 1000 });

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {stars.map((val) => (
                <ShootingStar
                    key={`shootingStar#${val.id}`}
                    id={val.id}
                    x={val.x}
                    y={val.y}
                    onDone={deleteStar}
                />
            ))}
        </div>
    );
}
