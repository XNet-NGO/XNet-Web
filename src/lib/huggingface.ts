import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_TOKEN, {
  baseUrl: "https://router.huggingface.co"
});

export async function invokeHuggingFaceChat(messages: any[], systemPrompt?: string) {
  try {
    const chatMessages = [
      ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
      ...messages
    ];

    const response = await hf.chatCompletion({
      model: "meta-llama/Llama-3.2-1B-Instruct",
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
    return {
      output: {
        message: {
          content: [{
            text: "Hello! I am Alfred, XNet AI assistant. I am currently having trouble connecting to my brain (Hugging Face). Please try again later."
          }]
        }
      }
    };
  }
}
