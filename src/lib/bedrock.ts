import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrock = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.BEDROCK_ENDPOINT,
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
});

const bearerToken = process.env.AWS_BEARER_TOKEN_BEDROCK;

if (bearerToken) {
  bedrock.middlewareStack.add(
    (next) => async (args) => {
      const request = args.request as any;
      if (request.headers) {
        request.headers["Authorization"] = `Bearer ${bearerToken}`;
        // Remove AWS specific headers that might conflict
        delete request.headers["x-amz-date"];
        delete request.headers["x-amz-security-token"];
        delete request.headers["x-amz-content-sha256"];
      }
      return next(args);
    },
    {
      step: "finalize",
      name: "addBearerTokenMiddleware",
    }
  );
  
  // Remove the signing middleware to prevent SigV4 signing with dummy credentials
  bedrock.middlewareStack.remove("signing");
}
