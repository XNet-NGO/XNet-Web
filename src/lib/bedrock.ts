import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrock = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
});

const apiToken = process.env.NOVA_API_TOKEN;

if (apiToken) {
  bedrock.middlewareStack.add(
    (next) => async (args) => {
      const request = args.request as any;
      if (request.headers) {
        request.headers["x-api-token"] = apiToken;
      }
      return next(args);
    },
    {
      step: "build",
      name: "addApiTokenMiddleware",
    }
  );
}
