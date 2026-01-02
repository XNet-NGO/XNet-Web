'use server';

import { bedrock } from '@/lib/bedrock';
import { ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
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

  const command = new ConverseCommand({
    modelId: "amazon.nova-micro-v1:0",
    messages: [
      {
        role: "user",
        content: [{ text: question }],
      },
    ],
    system: [{ text: systemPrompt }],
    inferenceConfig: {
      maxTokens: 1000,
      temperature: 0.7,
    },
  });

  try {
    const response = await bedrock.send(command);
    const outputText = response.output?.message?.content?.[0]?.text || "I'm sorry, I couldn't generate a response.";
    return { answer: outputText };
  } catch (error) {
    console.error("Bedrock error:", error);
    return { answer: "I'm sorry, I'm having trouble connecting to my brain right now." };
  }
}
