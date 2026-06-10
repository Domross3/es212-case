import { createAnthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { buildSystemPrompt } from "@/lib/system-prompt";
import { rateLimit } from "@/lib/rate-limit";
import { validateChatBody } from "@/lib/validate-chat";

export const maxDuration = 60;

// Pin the official endpoint: ambient ANTHROPIC_BASE_URL (e.g. from local
// tooling) must not redirect this app's API calls.
const anthropic = createAnthropic({
  baseURL: "https://api.anthropic.com/v1",
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!rateLimit(ip).allowed) {
    return Response.json(
      { error: "Too many requests — try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Malformed request body" }, { status: 400 });
  }
  const validation = validateChatBody(body);
  if (!validation.ok) {
    return Response.json(
      { error: validation.error },
      { status: validation.status }
    );
  }

  const modelMessages = await convertToModelMessages(
    validation.messages as UIMessage[]
  );
  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    allowSystemInMessages: true,
    messages: [
      {
        role: "system",
        content: buildSystemPrompt(),
        providerOptions: {
          anthropic: { cacheControl: { type: "ephemeral" } },
        },
      },
      ...modelMessages,
    ],
    maxOutputTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
