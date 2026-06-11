import Link from "next/link";
import { ES212_SLUG, loadSyllabi } from "@/lib/syllabi";

export const metadata = { title: "Source documents | ES 212 Case" };

export default function SyllabiIndex() {
  const syllabi = loadSyllabi();
  const anchor = syllabi.find((s) => s.slug === ES212_SLUG);
  const rest = syllabi.filter((s) => s.slug !== ES212_SLUG);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/"
        className="text-sm text-um-maize-2 underline underline-offset-2 hover:text-um-maize"
      >
        ← Back to the case
      </Link>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
        Source documents
      </h1>
      <p className="mt-1 text-sm text-muted">
        The full text of every syllabus this case is based on. The chat answers
        only from these documents.{" "}
        <a
          href="/es212-syllabus.pdf"
          target="_blank"
          className="text-um-maize-2 underline underline-offset-2 hover:text-um-maize"
        >
          Official ES 212 syllabus (PDF)
        </a>
      </p>

      {anchor && (
        <Link
          href={`/syllabi/${anchor.slug}`}
          className="lift mt-6 flex items-center gap-3 rounded-[13px] border border-um-maize/30 bg-um-maize/[0.06] p-4"
        >
          <span className="flex-1">
            <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              The course in question
            </span>
            <span className="mt-1 block font-semibold text-foreground">
              {anchor.title}
            </span>
          </span>
          <span className="shrink-0 text-[15px] text-um-maize">↗</span>
        </Link>
      )}

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {rest.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/syllabi/${s.slug}`}
              className="lift flex min-h-[70px] items-center gap-3 rounded-[13px] border border-rule bg-white/[0.03] p-4"
            >
              <p className="flex-1 text-[13.5px] font-medium leading-snug text-foreground">
                {s.title}
              </p>
              <span className="shrink-0 text-[15px] text-um-maize">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
