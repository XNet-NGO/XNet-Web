'use server';

import { invokeBedrockConverse } from '@/lib/bedrock';
import { z } from 'zod';

const AIChatAnswerQuestionsInputSchema = z.object({
  question: z.string().describe('The question to answer about XNet.'),
});
export type AIChatAnswerQuestionsInput = z.infer<typeof AIChatAnswerQuestionsInputSchema>;

const AIChatAnswerQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about XNet.'),
});
export type AIChatAnswerQuestionsOutput = z.infer<typeof AIChatAnswerQuestionsOutputSchema>;

export async function aiChatAnswerQuestions(
  input: AIChatAnswerQuestionsInput
): Promise<AIChatAnswerQuestionsOutput> {
  const { question } = input;

  const systemPrompt = `You are Alfred, the AI chatbot representative of XNet. Answer the following question about XNet.`;

  try {
    const response = await invokeBedrockConverse(
      "amazon.nova-micro-v1:0",
      [
        {
          role: "user",
          content: [{ text: question }],
        },
      ],
      [{ text: systemPrompt }],
      {
        maxTokens: 1000,
        temperature: 0.7,
      }
    );

    const outputText = response.output?.message?.content?.[0]?.text || "I'm sorry, I couldn't generate a response.";
    return { answer: outputText };
  } catch (error: any) {
    console.error("Bedrock error:", error);
    return { answer: `I'm sorry, I'm having trouble connecting to my brain right now. Error details: ${error.message}` };
  }
}
