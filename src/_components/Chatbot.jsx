"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { HiMiniPaperAirplane, HiMiniXMark } from "react-icons/hi2";
import styles from "./Chatbot.module.css";

const greetings = [
    "Hi, I'm Chocnut, Joseph's cat.",
    "I'm here to help you.",
    "What do you need to know?",
];
const greetingDuration = 3500;

export default function Chatbot() {
    const panelId = useId();
    const titleId = useId();
    const inputId = useId();
    const launcherRef = useRef(null);
    const inputRef = useRef(null);
    const messagesRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (hasOpened) return;

        const timers = greetings.map((_, index) =>
            window.setTimeout(
                () => setGreetingIndex(index + 1),
                greetingDuration * (index + 1),
            ),
        );

        return () => timers.forEach((timer) => window.clearTimeout(timer));
    }, [hasOpened]);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    useEffect(() => {
        const container = messagesRef.current;

        if (isOpen && container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [isOpen, messages, isLoading, error]);

    function openChat() {
        setHasOpened(true);
        setIsOpen(true);
    }

    function closeChat() {
        setIsOpen(false);
        launcherRef.current?.focus();
    }

    async function sendMessage(event) {
        event.preventDefault();
        const text = input.trim();

        if (!text || isLoading) return;

        const nextMessages = [...messages, { role: "user", text }];
        setMessages(nextMessages);
        setInput("");
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: nextMessages.slice(-19) }),
            });
            const data = await response.json();

            if (!response.ok || typeof data.reply !== "string") {
                throw new Error("Chat request failed");
            }

            setMessages((previous) => [
                ...previous,
                { role: "model", text: data.reply },
            ]);
        } catch {
            setError("I couldn't reply just now. Please try again in a moment.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div
            className="pointer-events-none fixed right-4 bottom-[var(--floating-control-bottom)] z-[60] flex w-[calc(100%-2rem)] max-w-[23rem] flex-col items-end gap-3 font-sans sm:right-6 sm:w-[calc(100%-3rem)]"
            onKeyDown={(event) => {
                if (event.key === "Escape" && isOpen) {
                    event.stopPropagation();
                    closeChat();
                }
            }}
        >
            {isOpen && (
                <section
                    id={panelId}
                    role="dialog"
                    aria-labelledby={titleId}
                    className="pointer-events-auto flex h-[min(28rem,calc(100dvh-var(--floating-control-bottom)-5.5rem))] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--portfolio-background)] text-[var(--portfolio-text)] shadow-2xl"
                >
                    <header className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3">
                        <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center"
                        >
                            <Image
                                src="/chocnut.gif"
                                alt=""
                                width={34}
                                height={34}
                                unoptimized
                                draggable={false}
                                className={styles.pixelArt}
                            />
                        </span>
                        <div className="min-w-0 flex-1">
                            <h2 id={titleId} className="text-sm font-semibold">
                                Chocnut
                            </h2>
                            <p className="mt-0.5 text-xs text-[var(--portfolio-muted)]">
                                Joseph&apos;s cat &amp; assistant
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={closeChat}
                            aria-label="Close chat"
                            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[var(--portfolio-muted)] transition hover:bg-white/5 hover:text-[var(--portfolio-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portfolio-accent)]"
                        >
                            <HiMiniXMark size={22} aria-hidden="true" />
                        </button>
                    </header>

                    <div
                        ref={messagesRef}
                        role="log"
                        aria-label="Chat messages"
                        aria-live="polite"
                        aria-relevant="additions text"
                        className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-4 text-sm leading-relaxed"
                    >
                        <p className="mr-7 w-fit rounded-2xl rounded-bl-sm bg-[var(--portfolio-surface)] px-3 py-2.5 text-[var(--portfolio-text-soft)]">
                            Hi, I&apos;m Chocnut, Joseph&apos;s cat and portfolio
                            assistant. What would you like to know about his
                            skills, projects, or experience?
                        </p>

                        {messages.map((message, index) => (
                            <p
                                key={index}
                                className={`w-fit max-w-[90%] rounded-2xl px-3 py-2.5 whitespace-pre-wrap [overflow-wrap:anywhere] ${
                                    message.role === "user"
                                        ? "ml-auto rounded-br-sm bg-[var(--portfolio-accent)] text-[var(--portfolio-background)]"
                                        : "mr-auto rounded-bl-sm bg-[var(--portfolio-surface)] text-[var(--portfolio-text-soft)]"
                                }`}
                            >
                                <span className="sr-only">
                                    {message.role === "user" ? "You: " : "Chocnut: "}
                                </span>
                                {message.text}
                            </p>
                        ))}

                        {isLoading && (
                            <p role="status" className="text-xs text-[var(--portfolio-muted)]">
                                Thinking...
                            </p>
                        )}
                        {error && (
                            <p role="alert" className="text-xs text-red-300">
                                {error}
                            </p>
                        )}
                    </div>

                    <form
                        onSubmit={sendMessage}
                        className="flex shrink-0 items-center gap-2 border-t border-white/10 p-3"
                    >
                        <label htmlFor={inputId} className="sr-only">
                            Your message
                        </label>
                        <input
                            ref={inputRef}
                            id={inputId}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="What do you want to know?"
                            maxLength={4000}
                            autoComplete="off"
                            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[var(--portfolio-surface)] px-3 py-2.5 text-base text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-subtle)] focus:border-[var(--portfolio-accent)] focus:outline-none"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            aria-label="Send message"
                            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[var(--portfolio-accent)] text-[var(--portfolio-background)] transition hover:bg-[var(--portfolio-text-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portfolio-accent)] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <HiMiniPaperAirplane size={19} aria-hidden="true" />
                        </button>
                    </form>
                </section>
            )}

            {!hasOpened && greetingIndex < greetings.length && (
                <div className="pointer-events-auto relative max-w-full" aria-live="polite">
                    <button
                        type="button"
                        onClick={openChat}
                        className="cursor-pointer rounded-2xl border border-white/10 bg-[var(--portfolio-surface)] px-4 py-3 text-left text-sm text-[var(--portfolio-text-soft)] shadow-xl transition hover:border-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
                    >
                        {greetings[greetingIndex]}
                    </button>
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-r border-b border-white/10 bg-[var(--portfolio-surface)]"
                    />
                </div>
            )}

            <button
                ref={launcherRef}
                type="button"
                onClick={isOpen ? closeChat : openChat}
                aria-label={isOpen ? "Close chat" : "Open Chocnut's chat"}
                aria-expanded={isOpen}
                aria-controls={isOpen ? panelId : undefined}
                aria-haspopup="dialog"
                title={isOpen ? "Close chat" : "Chat with Chocnut"}
                className={`${styles.launcher} pointer-events-auto flex h-[68px] w-[68px] shrink-0 cursor-pointer items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]`}
            >
                <Image
                    src="/chocnut.gif"
                    alt=""
                    width={34}
                    height={34}
                    unoptimized
                    draggable={false}
                    className={`${styles.pixelArt} h-[68px] w-[68px]`}
                />
            </button>
        </div>
    );
}
