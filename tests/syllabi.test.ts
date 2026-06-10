import { describe, expect, it } from "vitest";
import { ES212_SLUG, getEs212, loadSyllabi } from "../lib/syllabi";
import { buildSystemPrompt } from "../lib/system-prompt";
import { QUESTION_BANK, sampleQuestions } from "../lib/suggested-questions";

describe("syllabi corpus", () => {
  it("loads all 16 syllabi with titles and content", () => {
    const syllabi = loadSyllabi();
    expect(syllabi).toHaveLength(16);
    for (const s of syllabi) {
      expect(s.title.length).toBeGreaterThan(0);
      expect(s.content.length).toBeGreaterThan(200);
    }
  });

  it("includes the ES 212 anchor", () => {
    expect(loadSyllabi().some((s) => s.slug === ES212_SLUG)).toBe(true);
    expect(getEs212().title).toMatch(/ES 212/);
  });
});

describe("system prompt", () => {
  const prompt = buildSystemPrompt();

  it("contains every course title", () => {
    for (const s of loadSyllabi()) {
      expect(prompt).toContain(`<syllabus title="${s.title}">`);
    }
  });

  it("contains the hard rules", () => {
    expect(prompt).toContain("Answer ONLY from the provided syllabi");
    expect(prompt).toContain("librarian, not a lawyer");
    expect(prompt).toContain("supplementary breadth");
    expect(prompt).toContain("Dom has not taken ES 212 itself");
  });
});

describe("suggested questions", () => {
  it("samples N unique questions from the bank", () => {
    const qs = sampleQuestions(4);
    expect(qs).toHaveLength(4);
    expect(new Set(qs).size).toBe(4);
    for (const q of qs) expect(QUESTION_BANK).toContain(q);
  });

  it("respects exclusions", () => {
    const exclude = QUESTION_BANK.slice(0, 8);
    const qs = sampleQuestions(4, exclude);
    expect(qs.length).toBe(2);
    for (const q of qs) expect(exclude).not.toContain(q);
  });
});
