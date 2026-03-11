import { GoogleGenAI, Chat } from "@google/genai";

const getGeminiApiKey = (): string => {
  // Vite exposes env vars on import.meta.env and requires the VITE_ prefix
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error(
      "Missing VITE_GEMINI_API_KEY. Please set it in your .env.local file (VITE_GEMINI_API_KEY=your_key_here)."
    );
  }
  return apiKey;
};

export const createChatSession = (): Chat => {
  const ai = new GoogleGenAI({ apiKey: getGeminiApiKey() });
  return ai.chats.create({
    model: 'gemini-2.0-flash',
    config: {
      systemInstruction: `You are a helpful, encouraging, and knowledgeable PCMB + CS Tutor for Pre-University (high school) students. 
      Your goal is to explain complex scientific concepts simply.
      - Use analogies.
      - If a student asks about a lab experiment (Physics, Chem, Bio), explain the theory and safety precautions.
      - For Math and CS, provide step-by-step logic.
      - Keep responses concise but complete.
      - Be friendly and use emojis occasionally to keep the mood light.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};