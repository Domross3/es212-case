import Chat from "@/components/chat";

const stats = [
  "30 business credits",
  "22 entrepreneurship credits (excl. ES 212)",
  "13/13 ES 212 units covered",
  "ELP",
  "Instructional Aide: ENTR 410 & 423",
  "DIS Copenhagen — study abroad + startup internship",
  "ENTR Abroad — past participant ×2",
  "SolStove — $5,500 grant funding",
  "Aalto University — International Strategy",
];

export default function Home() {
  return (
    <main className="flex h-dvh flex-col">
      <header className="border-b border-rule px-5 py-3">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h1 className="text-lg font-semibold tracking-tight text-um-blue">
            ES 212 — Waiver Request
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            Dom Ross · University of Michigan
          </p>
        </div>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          B.S. Computer Science &amp; Cognitive Science · Minors: Business,
          Philosophy · Entrepreneurship minor — in progress
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[13px] leading-tight text-foreground">
          {stats.map((s, i) => (
            <li key={s} className="flex items-center gap-x-2">
              {i > 0 && <span aria-hidden className="text-um-maize">•</span>}
              {s}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid min-h-0 flex-1 lg:grid-cols-2">
        <section
          aria-label="ES 212 syllabus with coverage"
          className="min-h-0 overflow-y-auto border-b border-rule lg:border-b-0 lg:border-r"
        >
          <div className="p-5 text-sm text-muted">
            ES 212 syllabus — unit-by-unit coverage citations. (In progress.)
          </div>
        </section>

        <section aria-label="Ask the syllabi" className="min-h-0">
          <Chat />
        </section>
      </div>
    </main>
  );
}
