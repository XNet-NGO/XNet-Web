export async function invokeBedrockConverse(modelId: string, messages: any[], system?: any[], inferenceConfig?: any) {
  const region = process.env.AWS_REGION || "us-west-2";
  const bearerToken = process.env.AWS_BEARER_TOKEN_BEDROCK;

  if (!bearerToken) {
    throw new Error("AWS_BEARER_TOKEN_BEDROCK environment variable is not set.");
  }

  const url = `https://bedrock-runtime.${region}.amazonaws.com/model/${modelId}/converse`;

  const payload = {
    messages,
    system,
    inferenceConfig
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${bearerToken}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Bedrock API Error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}
