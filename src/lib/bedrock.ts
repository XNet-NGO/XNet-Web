import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrock = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  // When using AWS_BEARER_TOKEN_BEDROCK, the SDK handles it automatically if the env var is set.
  // We don't need dummy credentials or manual middleware if the SDK supports it natively.
  // However, the JS SDK v3 might not support it natively yet like Boto3 does.
  // Let's try passing it as a custom credential provider if needed, or rely on the env var.
});

// If the JS SDK doesn't support AWS_BEARER_TOKEN_BEDROCK natively yet, we need to manually inject it.
// Based on the documentation provided, it seems to be a standard Bearer token flow.
const bearerToken = process.env.AWS_BEARER_TOKEN_BEDROCK;

if (bearerToken) {
  bedrock.middlewareStack.add(
    (next) => async (args) => {
      const request = args.request as any;
      if (request.headers) {
        request.headers["Authorization"] = `Bearer ${bearerToken}`;
        // Ensure no AWS signature headers are present
        delete request.headers["x-amz-date"];
        delete request.headers["x-amz-security-token"];
        delete request.headers["x-amz-content-sha256"];
        delete request.headers["authorization"]; // Remove lowercase if present
      }
      return next(args);
    },
    {
      step: "finalize",
      name: "addBearerTokenMiddleware",
    }
  );
  
  // Remove signing middleware
  bedrock.middlewareStack.remove("signing");
}
