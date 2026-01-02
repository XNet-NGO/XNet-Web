import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrock = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
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
      }
      return next(args);
    },
    {
      step: "finalize",
      name: "addBearerTokenMiddleware",
    }
  );
}
