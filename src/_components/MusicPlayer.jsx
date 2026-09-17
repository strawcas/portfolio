"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { HiMiniPlay, HiMiniPause } from "react-icons/hi2";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlay() {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <audio ref={audioRef} src="/song.mp3" loop />

            <button
                onClick={handlePlay}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#080918]/80 p-2 pr-4 text-white shadow-xl backdrop-blur-xl transition hover:border-white/20 hover:bg-[#0d0e22]"
            >
                <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                    <Image
                        src="/song_image.jpg"
                        alt="Album cover"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                        {isPlaying ? (
                            <HiMiniPause size={20} />
                        ) : (
                            <HiMiniPlay size={20} />
                        )}
                    </div>
                </div>

                <div className="text-left">
                    <p className="text-sm font-medium">Space Song</p>

                    <p className="text-xs text-white/40">
                        Beach House
                    </p>
                </div>

                {isPlaying && (
                    <div className="ml-3 flex h-5 items-end gap-[2px]">
                        <span className="h-2 w-[2px] animate-pulse bg-white" />
                        <span className="h-4 w-[2px] animate-pulse bg-white" />
                        <span className="h-3 w-[2px] animate-pulse bg-white" />
                        <span className="h-5 w-[2px] animate-pulse bg-white" />
                    </div>
                )}
            </button>
        </div>
    );
}
