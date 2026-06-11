"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Citation, SkillRow, Unit } from "@/lib/coverage";
import { SUPPLEMENTARY_SLUGS } from "@/lib/coverage";
import {
  ES212_HEADER,
  ES212_KNOWLEDGE,
  ES212_MODULES,
  ES212_OBJECTIVES_INTRO,
  ES212_OVERVIEW,
  ES212_SKILLS_TEXT,
} from "@/lib/es212-content";

type Doc = { slug: string; title: string; content: string };

function renderInline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((seg, i) =>
    i % 2 === 1 ? <strong key={i}>{seg}</strong> : seg
  );
}

function SyllabusText({
  content,
  highlight,
}: {
  content: string;
  highlight?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [content, highlight]);

  let highlighted = false;
  return (
    <div className="space-y-1 text-sm leading-relaxed">
      {content.split("\n").map((line, i) => {
        const isTarget =
          !highlighted && !!highlight && line.includes(highlight);
        if (isTarget) highlighted = true;

        let node: ReactNode;
        let cls = "";
        if (line.startsWith("# ")) {
          node = renderInline(line.slice(2));
          cls = "pt-2 text-lg font-semibold text-um-blue";
        } else if (line.startsWith("## ")) {
          node = renderInline(line.slice(3));
          cls = "pt-3 text-base font-semibold text-um-blue";
        } else if (line.startsWith("### ")) {
          node = renderInline(line.slice(4));
          cls = "pt-2 font-semibold text-um-blue";
        } else if (line.startsWith("> ")) {
          node = renderInline(line.slice(2));
          cls = "border-l-3 border-um-maize pl-3 text-muted italic";
        } else if (/^\s*- /.test(line)) {
          node = (
            <span className="flex gap-2">
              <span className="text-um-maize">•</span>
              <span>{renderInline(line.replace(/^\s*- /, ""))}</span>
            </span>
          );
          cls = "pl-3";
        } else if (line.trim() === "") {
          return <div key={i} className="h-2" />;
        } else {
          node = renderInline(line);
        }

        return (
          <div
            key={i}
            ref={isTarget ? targetRef : undefined}
            className={`${cls} ${
              isTarget
                ? "rounded bg-um-maize/30 px-1 ring-2 ring-um-maize"
                : ""
            }`}
          >
            {node}
          </div>
        );
      })}
    </div>
  );
}

function Chip({
  citation,
  primary,
  onOpen,
}: {
  citation: Citation;
  primary: boolean;
  onOpen: (c: Citation) => void;
}) {
  const supplementary = SUPPLEMENTARY_SLUGS.includes(citation.slug);
  return (
    <button
      onClick={() => onOpen(citation)}
      title={citation.note}
      className={
        supplementary
          ? "rounded-full border border-dashed border-rule px-2.5 py-0.5 text-xs text-muted hover:border-um-maize"
          : primary
            ? "rounded-full bg-um-blue px-2.5 py-0.5 text-xs font-medium text-white hover:bg-um-blue/85"
            : "rounded-full border border-rule px-2.5 py-0.5 text-xs text-um-blue hover:border-um-maize hover:bg-um-maize/10"
      }
    >
      {citation.course}
    </button>
  );
}

function ChipRow({
  citations,
  onOpen,
}: {
  citations: Citation[];
  onOpen: (c: Citation) => void;
}) {
  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
        covered in
      </span>
      {citations.map((c, i) => (
        <Chip key={c.slug + c.quote} citation={c} primary={i === 0} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default function Evidence({
  units,
  skills,
  docs,
}: {
  units: Unit[];
  skills: SkillRow[];
  docs: Doc[];
}) {
  const [open, setOpen] = useState<Citation | null>(null);
  const docMap = new Map(docs.map((d) => [d.slug, d]));
  const unitMap = new Map(units.map((u) => [u.id, u]));
  const openDoc = open ? docMap.get(open.slug) : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold text-um-blue">
          The ES 212 syllabus, annotated
        </h2>
        <div className="flex gap-3 text-xs">
          <a
            href="/es212-syllabus.pdf"
            target="_blank"
            className="font-medium text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
          >
            Official PDF
          </a>
          <a
            href="/syllabi"
            className="font-medium text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
          >
            All 16 source documents →
          </a>
        </div>
      </div>
      <p className="mt-1 text-sm text-muted">
        The syllabus text below is verbatim from{" "}
        <span className="text-foreground">{ES212_HEADER.course}</span> (
        {ES212_HEADER.term}). Under each section: the completed courses that
        cover it, strongest first. Click a course to see the exact passage.
      </p>

      {/* Course Overview — verbatim */}
      <h3 className="mt-6 border-b-2 border-um-maize pb-1 text-base font-semibold text-um-blue">
        Course Overview
      </h3>
      {ES212_OVERVIEW.map((p) => (
        <p key={p.slice(0, 24)} className="mt-2 text-sm leading-relaxed">
          {p}
        </p>
      ))}

      {/* Learning objectives — verbatim */}
      <h3 className="mt-6 border-b-2 border-um-maize pb-1 text-base font-semibold text-um-blue">
        Learning objectives
      </h3>
      <p className="mt-2 text-sm leading-relaxed">{ES212_OBJECTIVES_INTRO}</p>

      <h4 className="mt-4 font-semibold text-um-blue">Knowledge</h4>
      <ul className="mt-1 space-y-0.5 text-sm">
        {ES212_KNOWLEDGE.map((k) => (
          <li key={k} className="flex gap-2 pl-1">
            <span className="text-um-maize">●</span>
            <span>{k}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1.5 text-xs text-muted">
        Each knowledge area is annotated under the matching course module
        below.
      </p>

      <h4 className="mt-4 font-semibold text-um-blue">Skills</h4>
      <ul className="mt-1 space-y-3 text-sm">
        {ES212_SKILLS_TEXT.map((text, i) => (
          <li key={text} className="pl-1">
            <div className="flex gap-2">
              <span className="text-um-maize">●</span>
              <span>{text}</span>
            </div>
            {skills[i] && (
              <div className="pl-5">
                <ChipRow citations={skills[i].citations} onOpen={setOpen} />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Course Modules and Topics — verbatim, with chips */}
      <h3 className="mt-6 border-b-2 border-um-maize pb-1 text-base font-semibold text-um-blue">
        Course Modules and Topics
      </h3>
      <ol className="mt-3 space-y-3">
        {ES212_MODULES.map((m) => {
          const unit = unitMap.get(m.id);
          return (
            <li key={m.id} className="rounded-lg border border-rule p-3.5">
              <p className="text-sm font-semibold text-foreground">{m.title}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                Topics
              </p>
              <ul className="mt-0.5 space-y-0.5 text-sm">
                {m.topics.map((t) => (
                  <li key={t} className="flex gap-2 pl-1">
                    <span className="text-um-maize">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              {m.materials && (
                <p className="mt-1.5 text-xs text-muted">
                  <span className="font-mono uppercase tracking-wider">
                    Materials:
                  </span>{" "}
                  {m.materials.join(" · ")}
                </p>
              )}
              {unit ? (
                <ChipRow citations={unit.citations} onOpen={setOpen} />
              ) : (
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                  course wrap-up — synthesis of the modules above
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {open && openDoc && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute inset-0 bg-black/30"
          />
          <div className="relative flex h-full w-full max-w-2xl flex-col border-l border-rule bg-background shadow-2xl">
            <div className="flex items-start justify-between gap-3 border-b border-rule p-4">
              <div>
                <p className="text-sm font-semibold text-um-blue">
                  {openDoc.title}
                </p>
                <p className="mt-0.5 text-xs text-muted">{open.note}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <a
                  href={`/syllabi/${openDoc.slug}`}
                  className="text-xs font-medium text-um-blue underline decoration-um-maize decoration-2 underline-offset-2"
                >
                  Open full page ↗
                </a>
                <button
                  onClick={() => setOpen(null)}
                  className="rounded px-2 py-1 text-lg leading-none text-muted hover:bg-rule"
                  aria-label="Close panel"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              <SyllabusText content={openDoc.content} highlight={open.quote} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
