import { GoogleGenAI } from "@google/genai";
import { chatbotSystemInstruction } from "@/_data/chatbot-profile";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
    try {
        const { messages } = await request.json();

        if (
            !Array.isArray(messages) ||
            messages.length === 0 ||
            messages.length > 20 ||
            messages.some(
                (message) =>
                    !["user", "model"].includes(message.role) ||
                    typeof message.text !== "string" ||
                    message.text.length > 4000,
            )
        ) {
            return Response.json(
                { error: "Invalid messages" },
                { status: 400 },
            );
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            config: {
                systemInstruction: chatbotSystemInstruction,
            },
            contents: messages.map((message) => ({
                role: message.role,
                parts: [{ text: message.text }],
            })),
        });

        return Response.json({
            reply: response.text ?? "No response generated.",
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 },
        );
    }
}
