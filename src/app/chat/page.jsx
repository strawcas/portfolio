"use client";

import { useState } from "react";

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function sendMessage(e) {
        e.preventDefault();

        if (!input.trim() || loading) return;

        const nextMessages = [
            ...messages,
            { role: "user", text: input.trim() },
        ];

        setMessages(nextMessages);
        setInput("");
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: nextMessages.slice(-19),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Request failed");
            }

            setMessages((prev) => [
                ...prev,
                { role: "model", text: data.reply },
            ]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="mx-auto flex h-screen max-w-2xl flex-col p-6">
            <h1 className="mb-6 text-2xl font-bold">
                Gemini Chatbot
            </h1>

            <div className="flex-1 space-y-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-4 whitespace-pre-wrap ${
                            message.role === "user"
                                ? "ml-12 bg-blue-600 text-white"
                                : "mr-12 bg-zinc-800 text-white"
                        }`}
                    >
                        {message.text}
                    </div>
                ))}

                {loading && <p>Gemini is thinking...</p>}
                {error && <p className="text-red-500">{error}</p>}
            </div>

            <form onSubmit={sendMessage} className="mt-4 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Gemini anything..."
                    maxLength={4000}
                    className="flex-1 rounded-lg border p-3 text-black"
                />

                <button
                    disabled={loading}
                    className="rounded-lg bg-blue-600 px-5 text-white disabled:opacity-50"
                >
                    Send
                </button>
            </form>
        </main>
    );
}
