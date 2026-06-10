"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { sampleQuestions } from "@/lib/suggested-questions";
import { MAX_MESSAGE_CHARS } from "@/lib/validate-chat";

function messageText(parts: { type: string; text?: string }[]): string {
  return parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function Chat() {
  const { messages, sendMessage, status, error, regenerate } = useChat();
  const [input, setInput] = useState("");
  const [starters, setStarters] = useState<string[]>([]);
  const [followUps, setFollowUps] = useState<string[]>([]);
  const usedRef = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStarters(sampleQuestions(4));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const busy = status === "submitted" || status === "streaming";

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || trimmed.length > MAX_MESSAGE_CHARS || busy) return;
    usedRef.current = [...usedRef.current, trimmed];
    sendMessage({ text: trimmed });
    setInput("");
    setFollowUps(sampleQuestions(2, usedRef.current));
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto p-5">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col justify-center">
            <h2 className="text-xl font-semibold text-um-blue">
              Ask the syllabi
            </h2>
            <p className="mt-1 text-sm text-muted">
              Answers come only from the 16 course documents, with the source
              named for every claim.
            </p>
            <div className="mt-5 flex flex-col items-start gap-2">
              {starters.map((q) => (
                <button
                  key={q}
                  onClick={() => ask(q)}
                  className="rounded-full border border-rule px-4 py-2 text-left text-sm text-um-blue transition-colors hover:border-um-maize hover:bg-um-maize/10"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-um-blue px-4 py-2.5 text-sm text-white"
                    : "chat-markdown max-w-[95%] text-sm leading-relaxed text-foreground"
                }
              >
                {m.role === "assistant" ? (
                  <Markdown>{messageText(m.parts)}</Markdown>
                ) : (
                  messageText(m.parts)
                )}
                {m.role === "assistant" &&
                  busy &&
                  m.id === messages[messages.length - 1].id && (
                    <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-um-maize align-middle" />
                  )}
              </div>
            ))}
            {error && (
              <div className="text-sm text-red-700">
                Something went wrong.{" "}
                <button onClick={() => regenerate()} className="underline">
                  Retry
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-rule p-4">
        {messages.length > 0 && followUps.length > 0 && !busy && (
          <div className="mb-3 flex flex-wrap gap-2">
            {followUps.map((q) => (
              <button
                key={q}
                onClick={() => ask(q)}
                className="rounded-full border border-rule px-3 py-1.5 text-left text-xs text-um-blue transition-colors hover:border-um-maize hover:bg-um-maize/10"
              >
                {q}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex items-end gap-2"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                ask(input);
              }
            }}
            rows={2}
            maxLength={MAX_MESSAGE_CHARS}
            placeholder="Ask anything about the syllabi…"
            className="min-h-0 flex-1 resize-none rounded-lg border border-rule bg-white px-3 py-2 text-sm outline-none focus:border-um-blue"
          />
          <button
            type="submit"
            disabled={busy || input.trim().length === 0}
            className="rounded-lg bg-um-blue px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            {busy ? "…" : "Ask"}
          </button>
        </form>
        <p className="mt-1.5 text-right text-[11px] text-muted">
          {input.length}/{MAX_MESSAGE_CHARS}
        </p>
      </div>
    </div>
  );
}
