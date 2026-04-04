import { GoogleGenAI, Chat } from "@google/genai";

const getGeminiApiKey = (): string => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  if (!apiKey) {
    throw new Error(
      "Missing VITE_GEMINI_API_KEY. Please set it in your .env.local file (VITE_GEMINI_API_KEY=your_key_here)."
    );
  }
  return apiKey;
};

/**
 * Build the full system instruction for the Gemini AI tutor.
 * When `labContext` is provided, the AI is anchored to that specific
 * experiment and will prioritise it when answering. If the user
 * explicitly asks about a *different* experiment, the AI should
 * answer that instead — but always defaults back to the active lab.
 */
const buildSystemInstruction = (labContext?: string): string => {
  const base = `You are **Vijnana Lab AI Tutor** — a friendly, knowledgeable science tutor for Pre-University (Class 11 & 12) students across CBSE, ICSE and Karnataka PUC boards.

CORE BEHAVIOUR RULES:
1. **Be concise by default.** Give short, accurate answers of 2-4 sentences. Only expand into a full detailed explanation if the student explicitly asks for more detail, elaboration, or says "explain in detail".
2. Use simple language and real-world analogies. Avoid jargon unless explaining it.
3. Use emojis sparingly to keep the tone warm (🔬 ⚡ 🧪).
4. For lab experiments: cover aim, theory, procedure, formula, and common viva questions briefly.
5. For Math/CS: provide step-by-step logic.
6. Always cite the correct formula with units.
7. If the student asks about safety, always mention safety precautions relevant to the experiment.
8. If you are unsure, say so honestly rather than guessing.`;

  if (labContext) {
    return `${base}

ACTIVE EXPERIMENT CONTEXT:
The student currently has the following experiment open in their lab workspace. When they ask a question, assume it relates to THIS experiment unless they explicitly mention a different one. If they ask about a different experiment, answer that question, but then gently remind them which lab they are currently working on.

--- BEGIN LAB CONTEXT ---
${labContext}
--- END LAB CONTEXT ---`;
  }

  return `${base}

The student is not currently viewing any specific experiment. Help them with any PCMB or CS topic they ask about.`;
};

/**
 * Creates a new Gemini chat session.
 * @param labContext – Optional stringified context about the active lab experiment.
 *                     When provided the tutor will prioritise that experiment.
 */
export const createChatSession = (labContext?: string): Chat => {
  const ai = new GoogleGenAI({ apiKey: getGeminiApiKey() });
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: buildSystemInstruction(labContext),
    },
  });
};

/**
 * Helper: sleep for `ms` milliseconds.
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Send a message to Gemini with automatic retry on 429 (rate-limit) errors.
 * Retries up to 3 times with exponential backoff (3s → 6s → 12s).
 */
export const sendMessageToGemini = async (chat: Chat, message: string, maxRetries = 3) => {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await chat.sendMessageStream({ message });
    } catch (error: any) {
      const isRateLimit = error?.message?.includes('429') || error?.message?.includes('Quota');
      if (isRateLimit && attempt < maxRetries) {
        const delay = 3000 * Math.pow(2, attempt); // 3s, 6s, 12s
        console.warn(`Rate limited (429). Retrying in ${delay / 1000}s... (attempt ${attempt + 1}/${maxRetries})`);
        await sleep(delay);
        continue;
      }
      throw error; // Not a rate limit error, or retries exhausted — propagate
    }
  }
  throw new Error('Max retries exceeded for Gemini API.');
};