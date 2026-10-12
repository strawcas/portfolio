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
        <div className="fixed bottom-[var(--floating-control-bottom)] left-4 z-50 sm:left-6">
            <audio ref={audioRef} src="/song.mp3" loop />

            <button
                type="button"
                onClick={handlePlay}
                aria-label={`${isPlaying ? "Pause" : "Play"} Can You Hear The Whistle Blow`}
                aria-pressed={isPlaying}
                title="Can You Hear The Whistle Blow — 缺省"
                className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-[#080918]/80 p-1.5 text-white shadow-xl backdrop-blur-xl transition hover:border-white/20 hover:bg-[#0d0e22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:p-2 sm:pr-4"
            >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-12 sm:w-12">
                    <Image
                        src="/song_image.jpg"
                        alt="Album cover"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                        {isPlaying ? (
                            <HiMiniPause size={20} />
                        ) : (
                            <HiMiniPlay size={20} />
                        )}
                    </div>
                </div>

                <div className="hidden min-w-0 text-left sm:block">
                    <p className="truncate text-xs font-medium sm:max-w-[230px] sm:text-sm">
                        Can You Hear The Whistle Blow
                    </p>

                    <p className="truncate text-[11px] text-white/40 sm:text-xs">
                        缺省
                    </p>
                </div>

                {isPlaying && (
                    <div className="ml-3 hidden h-5 shrink-0 items-end gap-[2px] sm:flex">
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
