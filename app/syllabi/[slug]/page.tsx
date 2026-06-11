import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { loadSyllabi } from "@/lib/syllabi";

export function generateStaticParams() {
  return loadSyllabi().map((s) => ({ slug: s.slug }));
}

export default async function SyllabusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = loadSyllabi().find((s) => s.slug === slug);
  if (!doc) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex flex-wrap gap-4 text-sm">
        <Link
          href="/syllabi"
          className="text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
        >
          ← All source documents
        </Link>
        <Link
          href="/"
          className="text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
        >
          Back to the case
        </Link>
      </div>
      <article className="doc-markdown mt-6">
        <Markdown>{doc.content}</Markdown>
      </article>
    </main>
  );
}
