import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_TOKEN);

export async function invokeHuggingFaceChat(messages: any[], systemPrompt?: string) {
  try {
    // Combine system prompt with the first user message if possible, or just prepend it
    // Hugging Face chat completion usually takes a list of messages.
    // Some models support 'system' role, others don't. 
    // Let's assume a standard chat structure.
    
    const chatMessages = [
      ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
      ...messages
    ];

    const response = await hf.chatCompletion({
      model: "google/gemma-2-2b-it",
      messages: chatMessages,
      max_tokens: 500,
      temperature: 0.7
    });

    return {
      output: {
        message: {
          content: [{
            text: response.choices[0].message.content
          }]
        }
      }
    };
  } catch (error) {
    console.error("Hugging Face API Error:", error);
    // Fallback response
    return {
      output: {
        message: {
          content: [{
            text: "Hello! I'm Alfred, XNet's AI assistant. I'm currently having trouble connecting to my brain (Hugging Face). Please try again later."
          }]
        }
      }
    };
  }
}
