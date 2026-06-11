import { describe, expect, it } from "vitest";
import {
  SKILLS,
  SUPPLEMENTARY_SLUGS,
  UNITS,
  type Citation,
} from "../lib/coverage";
import { ES212_SLUG, loadSyllabi } from "../lib/syllabi";
import { ES212_MODULES, ES212_SKILLS_TEXT } from "../lib/es212-content";

const docs = new Map(loadSyllabi().map((s) => [s.slug, s]));
const allRows: { label: string; citations: Citation[] }[] = [
  ...UNITS.map((u) => ({ label: `unit ${u.id}: ${u.title}`, citations: u.citations })),
  ...SKILLS.map((s) => ({ label: `skill: ${s.skill}`, citations: s.citations })),
];

describe("coverage map", () => {
  it("covers all 13 ES 212 units and all 6 skills", () => {
    expect(UNITS).toHaveLength(13);
    expect(UNITS.map((u) => u.id)).toEqual(
      Array.from({ length: 13 }, (_, i) => i + 1)
    );
    expect(SKILLS).toHaveLength(6);
  });

  it("every unit and skill has at least one citation", () => {
    for (const row of allRows) {
      expect(row.citations.length, row.label).toBeGreaterThan(0);
    }
  });

  it("every citation points at a real syllabus (never the ES 212 anchor)", () => {
    for (const row of allRows) {
      for (const c of row.citations) {
        expect(docs.has(c.slug), `${row.label} → ${c.slug}`).toBe(true);
        expect(c.slug, `${row.label} cites the anchor`).not.toBe(ES212_SLUG);
      }
    }
  });

  it("every quote appears verbatim in its source syllabus", () => {
    for (const row of allRows) {
      for (const c of row.citations) {
        const doc = docs.get(c.slug)!;
        expect(
          doc.content.includes(c.quote),
          `${row.label} → ${c.course}: quote not found verbatim: "${c.quote}"`
        ).toBe(true);
      }
    }
  });

  it("quotes are matchable on a single line (for highlight rendering)", () => {
    for (const row of allRows) {
      for (const c of row.citations) {
        const doc = docs.get(c.slug)!;
        const onOneLine = doc.content
          .split("\n")
          .some((line) => line.includes(c.quote));
        expect(onOneLine, `${row.label} → ${c.course}: quote spans lines`).toBe(
          true
        );
      }
    }
  });

  it("syllabus modules align with coverage units", () => {
    // Modules 1-13 each map to a unit; module 14 is the wrap-up with no mapping.
    expect(ES212_MODULES.map((m) => m.id)).toEqual(
      Array.from({ length: 14 }, (_, i) => i + 1)
    );
    const unitIds = new Set(UNITS.map((u) => u.id));
    for (const m of ES212_MODULES.filter((m) => m.id <= 13)) {
      expect(unitIds.has(m.id), `module ${m.id} has no coverage unit`).toBe(true);
    }
    // Every verbatim skill bullet has a chips row.
    expect(ES212_SKILLS_TEXT).toHaveLength(SKILLS.length);
  });

  it("a supplementary course is never the primary (first) citation", () => {
    for (const row of allRows) {
      expect(
        SUPPLEMENTARY_SLUGS.includes(row.citations[0].slug),
        `${row.label} leads with a supplementary source`
      ).toBe(false);
    }
  });
});
