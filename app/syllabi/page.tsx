import Link from "next/link";
import { ES212_SLUG, loadSyllabi } from "@/lib/syllabi";

export const metadata = { title: "Source documents | ES 212 Case" };

export default function SyllabiIndex() {
  const syllabi = loadSyllabi();
  const anchor = syllabi.find((s) => s.slug === ES212_SLUG);
  const rest = syllabi.filter((s) => s.slug !== ES212_SLUG);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/" className="text-sm text-um-blue underline decoration-um-maize decoration-2 underline-offset-2">
        ← Back to the case
      </Link>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-um-blue">
        Source documents
      </h1>
      <p className="mt-1 text-sm text-muted">
        The full text of every syllabus this case is based on. The chat answers
        only from these documents.{" "}
        <a
          href="/es212-syllabus.pdf"
          target="_blank"
          className="text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
        >
          Official ES 212 syllabus (PDF)
        </a>
      </p>

      {anchor && (
        <Link
          href={`/syllabi/${anchor.slug}`}
          className="mt-6 block rounded-lg border-2 border-um-maize bg-um-maize/10 p-4 hover:bg-um-maize/20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            The course in question
          </p>
          <p className="mt-1 font-semibold text-um-blue">{anchor.title}</p>
        </Link>
      )}

      <ul className="mt-4 space-y-2">
        {rest.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/syllabi/${s.slug}`}
              className="block rounded-lg border border-rule p-4 hover:border-um-maize hover:bg-um-maize/5"
            >
              <p className="text-sm font-medium text-um-blue">{s.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
