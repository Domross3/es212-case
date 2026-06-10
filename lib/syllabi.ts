import fs from "node:fs";
import path from "node:path";

export type Syllabus = {
  slug: string;
  title: string;
  content: string;
};

export const ES212_SLUG = "es-212-entrepreneurial-business-basics-ANCHOR";

let cache: Syllabus[] | null = null;

export function loadSyllabi(): Syllabus[] {
  if (cache) return cache;
  const dir = path.join(process.cwd(), "syllabi");
  cache = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const content = fs.readFileSync(path.join(dir, file), "utf-8");
      const heading = content.match(/^# (.+)$/m);
      return {
        slug: file.replace(/\.md$/, ""),
        title: heading ? heading[1].trim() : file,
        content,
      };
    });
  return cache;
}

export function getEs212(): Syllabus {
  const found = loadSyllabi().find((s) => s.slug === ES212_SLUG);
  if (!found) throw new Error("ES 212 anchor syllabus missing");
  return found;
}
