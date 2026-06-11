import Chat from "@/components/chat";
import Evidence from "@/components/evidence";
import { SKILLS, UNITS } from "@/lib/coverage";
import { loadSyllabi } from "@/lib/syllabi";

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
      <header className="relative overflow-hidden border-b border-rule px-5 py-3">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[60rem] max-w-full -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,203,5,0.12), transparent 68%)",
          }}
        />
        <div className="relative flex flex-wrap items-baseline gap-x-3">
          <h1 className="text-lg font-bold tracking-tight text-foreground">
            ES 212 — <span className="text-um-maize">Waiver Request</span>
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            Dom Ross · University of Michigan
          </p>
        </div>
        <p className="relative mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          B.S. Computer Science &amp; Cognitive Science · Minors: Business,
          Philosophy · Entrepreneurship minor
        </p>
        <div className="marquee relative mt-2">
          <div className="marquee-track gap-x-3 text-[13px] leading-tight text-foreground">
            {[false, true].map((dup) => (
              <ul
                key={dup ? "dup" : "main"}
                aria-hidden={dup || undefined}
                className={`flex shrink-0 items-center gap-x-3 ${dup ? "marquee-dup" : ""}`}
              >
                {stats.map((s) => (
                  <li key={s} className="flex items-center gap-x-3">
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
