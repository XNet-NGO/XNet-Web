'use server';

/**
 * @fileOverview AI chatbot answering questions in the persona of Alfred.
 */

import { invokeBedrockConverse } from '@/lib/bedrock';
import { mission, nonprofit, values } from '@/lib/company-info';
import { articles } from '@/lib/articles-data';
import { z } from 'zod';

const AiChatPersonaInputSchema = z.object({
  query: z.string().describe('The query from the user.'),
});
export type AiChatPersonaInput = z.infer<typeof AiChatPersonaInputSchema>;

const AiChatPersonaOutputSchema = z.object({
  answer: z.string().describe('The answer to the query in the persona of Alfred.'),
});
export type AiChatPersonaOutput = z.infer<typeof AiChatPersonaOutputSchema>;

export async function aiChatPersona(input: AiChatPersonaInput): Promise<AiChatPersonaOutput> {
  const { query } = input;

  // Convert values and articles to a string format for the prompt
  const valuesString = values.map(v => `${v.title}: ${v.description} ${v.details}`).join('\n');
  const articlesString = articles.map(a => `Title: ${a.title}\nContent: ${a.content.map(c => c.text).join(' ')}`).join('\n\n');

  const systemPrompt = `You are Alfred, the AI chatbot representative of XNet, a nonprofit organization. Your purpose is to assist users by answering their questions about XNet based on the information provided below. Be helpful, friendly, and maintain a professional tone.

Here is the information about XNet:

**Mission:**
${mission.title}: ${mission.description}

**Nonprofit Status:**
${nonprofit.title}: ${nonprofit.description}

**Core Values:**
${valuesString}

**Articles:**
${articlesString}
`;

  try {
    const response = await invokeBedrockConverse(
      "amazon.nova-micro-v1:0",
      [
        {
          role: "user",
          content: [{ text: query }],
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
    return { answer: `I'm sorry, I'm having trouble connecting to my brain right now. Error: ${error.message}` };
  }
}
