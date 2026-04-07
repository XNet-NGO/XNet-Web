const GATEWAY_URL = process.env.GATEWAY_URL || "https://inf.xnet.ngo";
const GATEWAY_KEY = process.env.GATEWAY_KEY || "aiope-gateway-key";
const MODEL = process.env.GATEWAY_MODEL || "llama/qwen3.5-2b-heretic";

export async function invokeHuggingFaceChat(messages: any[], systemPrompt?: string) {
  try {
    const chatMessages = [
      ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
      ...messages
    ];

    const res = await fetch(`${GATEWAY_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GATEWAY_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: chatMessages,
        max_tokens: 8000,
        temperature: 0.7,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    const data = await res.json();

    return {
      output: {
        message: {
          content: [{
            text: data.choices[0].message.content || data.choices[0].message.reasoning_content || "I couldn't generate a response."
          }]
        }
      }
    };
  } catch (error) {
    console.error("Gateway API Error:", error);
    return {
      output: {
        message: {
          content: [{
            text: "Hello! I am Alfred, XNet AI assistant. I am currently having trouble connecting. Please try again later."
          }]
        }
      }
    };
  }
}
