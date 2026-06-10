export const MAX_MESSAGES = 30;
export const MAX_MESSAGE_CHARS = 1000;

type UIMessageLike = {
  role?: string;
  parts?: { type?: string; text?: string }[];
};

export type ValidationResult =
  | { ok: true; messages: UIMessageLike[] }
  | { ok: false; status: number; error: string };

export function validateChatBody(body: unknown): ValidationResult {
  if (
    typeof body !== "object" ||
    body === null ||
    !Array.isArray((body as { messages?: unknown }).messages)
  ) {
    return { ok: false, status: 400, error: "Malformed request body" };
  }
  const messages = (body as { messages: UIMessageLike[] }).messages;
  if (messages.length === 0 || messages.length > MAX_MESSAGES) {
    return { ok: false, status: 400, error: "Conversation length limit reached" };
  }
  const last = messages[messages.length - 1];
  const text = (last?.parts ?? [])
    .filter((p) => p?.type === "text")
    .map((p) => p?.text ?? "")
    .join("");
  if (text.length > MAX_MESSAGE_CHARS) {
    return { ok: false, status: 413, error: "Message too long" };
  }
  return { ok: true, messages };
}
