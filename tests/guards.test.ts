import { beforeEach, describe, expect, it } from "vitest";
import {
  MAX_MESSAGE_CHARS,
  MAX_MESSAGES,
  validateChatBody,
} from "../lib/validate-chat";
import { rateLimit, resetRateLimits } from "../lib/rate-limit";

function userMessage(text: string) {
  return { role: "user", parts: [{ type: "text", text }] };
}

describe("validateChatBody", () => {
  it("rejects malformed bodies", () => {
    for (const body of [null, "hi", {}, { messages: "nope" }]) {
      const r = validateChatBody(body);
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.status).toBe(400);
    }
  });

  it("rejects empty and over-long conversations", () => {
    const empty = validateChatBody({ messages: [] });
    expect(empty.ok).toBe(false);

    const tooMany = validateChatBody({
      messages: Array.from({ length: MAX_MESSAGES + 1 }, () =>
        userMessage("hi")
      ),
    });
    expect(tooMany.ok).toBe(false);
    if (!tooMany.ok) expect(tooMany.status).toBe(400);
  });

  it("rejects messages over the char cap with 413", () => {
    const r = validateChatBody({
      messages: [userMessage("x".repeat(MAX_MESSAGE_CHARS + 1))],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(413);
  });

  it("accepts a normal conversation", () => {
    const r = validateChatBody({
      messages: [userMessage("Where did Dom learn financial statements?")],
    });
    expect(r.ok).toBe(true);
  });
});

describe("rateLimit", () => {
  beforeEach(() => resetRateLimits());

  it("blocks the 21st request in the window", () => {
    const t0 = 1_000_000;
    for (let i = 0; i < 20; i++) {
      expect(rateLimit("1.2.3.4", t0 + i).allowed).toBe(true);
    }
    expect(rateLimit("1.2.3.4", t0 + 21).allowed).toBe(false);
  });

  it("does not affect other IPs", () => {
    const t0 = 1_000_000;
    for (let i = 0; i < 21; i++) rateLimit("1.2.3.4", t0 + i);
    expect(rateLimit("5.6.7.8", t0 + 22).allowed).toBe(true);
  });

  it("resets after the window expires", () => {
    const t0 = 1_000_000;
    for (let i = 0; i < 20; i++) rateLimit("1.2.3.4", t0 + i);
    expect(rateLimit("1.2.3.4", t0 + 21).allowed).toBe(false);
    const later = t0 + 10 * 60 * 1000 + 50;
    expect(rateLimit("1.2.3.4", later).allowed).toBe(true);
  });
});
