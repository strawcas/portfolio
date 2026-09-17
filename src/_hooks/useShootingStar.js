"use client";

import { useCallback, useEffect, useState } from "react";

export default function useShootingStars({ speed }) {
    const [stars, setStars] = useState([]);

    const deleteStar = useCallback((id) => {
        setStars((prevState) =>
            prevState.filter((star) => star.id !== id),
        );
    }, []);

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            if (document.hidden) return;

            i++;

            const newStar = {
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
            };

            setStars((prevState) => [...prevState, newStar]);
        }, speed);

        return () => clearInterval(interval);
    }, []);

    return {
        stars,
        deleteStar,
    };
}
