import Chat from "@/components/chat";
import Evidence from "@/components/evidence";
import { SKILLS, UNITS } from "@/lib/coverage";
import { loadSyllabi } from "@/lib/syllabi";

const stats = [
  "B.S. Computer Science & Cognitive Science",
  "Minors: Business, Philosophy, Entrepreneurship",
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
      <header className="relative overflow-hidden border-b border-rule px-6 py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[64rem] max-w-full -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,203,5,0.12), transparent 68%)",
          }}
        />
        <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Dom Ross · University of Michigan
        </p>
        <h1 className="relative mt-1.5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          ES 212 — <span className="text-um-maize">Waiver Request</span>
        </h1>
        <div className="marquee relative mt-4">
          <div className="marquee-track gap-x-4 text-sm leading-tight text-foreground">
            {[false, true].map((dup) => (
              <ul
                key={dup ? "dup" : "main"}
                aria-hidden={dup || undefined}
                className={`flex shrink-0 items-center gap-x-4 ${dup ? "marquee-dup" : ""}`}
              >
                {stats.map((s) => (
                  <li key={s} className="flex items-center gap-x-4">
                    {s}
                    <span aria-hidden className="text-um-maize">
                      •
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 lg:grid-cols-2">
        <section
          aria-label="ES 212 syllabus with coverage"
          className="min-h-0 overflow-y-auto border-b border-rule lg:border-b-0 lg:border-r"
        >
          <Evidence units={UNITS} skills={SKILLS} docs={loadSyllabi()} />
        </section>

        <section aria-label="Dom's Course Agent" className="min-h-0">
          <Chat />
        </section>
      </div>
    </main>
  );
}
