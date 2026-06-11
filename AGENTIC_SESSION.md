# Building the ES 212 Waiver Case — an Agentic AI Session

**One sitting, one agent, one shipped product.** This document chronicles a single
Claude Code (Fable 5) session in which Dom Ross — CS & Cognitive Science major at the
University of Michigan — directed an AI agent to design, build, test, and deploy a
complete web application supporting his petition to waive ES 212 (Entrepreneurial
Business Basics), the final requirement of his entrepreneurship minor.

- **Live site:** https://es212-case.vercel.app
- **Repository:** https://github.com/Domross3/es212-case
- **Stack:** Next.js 16 · TypeScript · Tailwind 4 · Vercel AI SDK v6 · Claude Sonnet 4.6 · Vitest · Vercel

---

## The problem

Dom is graduating a semester early. He has gone far beyond the entrepreneurship
minor's requirements — 22 entrepreneurship credits, 30 business credits, the
competitive two-semester Entrepreneurial Leadership Program, an Instructional Aide
role for ENTR 410 & 423, a startup practicum in Copenhagen, and a funded startup
(SolStove, $5,500 in grants) — but never took the *introductory* course, ES 212.
There is no waiver precedent. The audience: entrepreneurship faculty he has never met.

The thesis: don't write a pleading email. **Build evidence.** A page where the
faculty's own syllabus is the scaffold, every unit annotated with the completed
courses that cover it, every claim one click away from the verbatim source passage —
plus an AI agent grounded in all 16 syllabi that faculty can interrogate directly.
The artifact itself is the entrepreneurship demonstration.

## What got built

1. **Newsroom masthead** — eyebrow, title, and a conveyor-belt slider of credentials
   (degree, minors, credits, ELP, IA roles, DIS Copenhagen, SolStove, Aalto).
2. **The annotated syllabus** — the *verbatim* ES 212 syllabus (overview, learning
   objectives, all 13 knowledge areas, all 6 skills, all 14 course modules), with
   ranked "covered in" course chips attached directly under the real text.
   Clicking a chip opens the source syllabus scrolled to the exact highlighted quote.
3. **Dom's Course Agent** — Claude Sonnet 4.6 grounded in the full text of 16
   syllabi with strict librarian rules: cite a course for every claim, quote the
   source, concede what the documents don't show, never advocate. Suggested
   questions rotate to guarantee a one-click path in. Prompt caching, per-IP rate
   limiting, message-length and conversation-length guards.
4. **Source-document library** — `/syllabi` route with the full text of every
   syllabus, plus the official ES 212 PDF embedded for total transparency.
5. **A test harness that polices honesty** — 20 unit tests including a citation-
   integrity suite (every quoted passage must exist *verbatim* in its source file;
   a supplementary pass/fail course may never rank as primary evidence), plus 6
   live model evals (grounding, honest concession, jailbreak refusal,
   no-comparative-advocacy).

## Coverage result

All **13 ES 212 course units** and all **6 skills objectives** mapped to completed
coursework — most units 2–4 times over, anchored by the departments that own each
subject (ECON 101 for economics, ACC 471 + FIN 302 for financials, MO 302 for
teams, STRAT 400/445 for strategy and social impact) layered with applied
entrepreneurship (ELP, ENTR 410, EECS 441, DIS Copenhagen, PSYCH 223, Aalto).

## How the session ran

| Phase | What happened |
|---|---|
| **Brainstorm → PRD** | Product-thinking dialogue: audience analysis (cold faculty, 90-second skim), tone decision ("stats and facts only — Dom does the talking"), and a PRD with milestones before any code. |
| **Evidence intake** | 16 syllabi pasted in conversationally; the agent distilled each into structured markdown, tracked unit coverage live, and flagged the one gap (microeconomics) until ECON 101 closed it. |
| **Build** | Scaffolded the repo, shipped the hero, wired the grounded chat (AI SDK v6 + Anthropic), built the citation drawer and syllabus library — each layer verified in a live browser preview before moving on. |
| **Test & eval** | Unit tests written alongside features; live evals red-teamed the agent ("Has Dom taken ES 212?" → honest *no*; "Write a poem about cats" → declined; "Is Dom more qualified?" → deferred to faculty). 6/6 passed. |
| **Deploy** | Vercel CLI, env vars handled without secrets ever entering chat or git; multiple production deploys with post-deploy smoke tests against the live API. |
| **Incident response** | Mid-session, the laptop's disk hit 99% and iCloud began evicting project files — every local process froze on blocking `read()` calls. The agent diagnosed it via process sampling and `lsof`, identified the root cause (disk-full + wedged sync daemon), freed 13 GB by auditing Xcode caches, force-rematerialized the project, and pivoted builds to Vercel's cloud so shipping never stopped. |
| **Design** | A separately crafted Claude-design artifact (dark Michigan-navy theme) was decoded from its single-file export, its design tokens extracted, and applied style-only — verbatim content untouched, verified by tests. |

## Why this is a strong agentic showcase

- **The artifact argues for itself.** A waiver petition for an entrepreneurship
  minor, delivered as a shipped product with an AI agent — built by the petitioner
  directing an AI agent.
- **Honesty as architecture.** The system prompt forbids advocacy; the eval suite
  *tests* for it; the citation tests make it impossible for the page to claim
  anything its source documents don't say.
- **Real-world resilience.** A filesystem catastrophe mid-build was diagnosed at
  the syscall level and routed around without losing the shipping cadence.
- **Tight human-agent loop.** Every design and content judgment (which facts to
  claim, which IA role to drop as overreach, how minors must be presented) came
  from Dom; the agent handled synthesis, implementation, verification, and ops.

---

*Built June 10–11, 2026 in a single Claude Code session. Eight commits from
`create-next-app` to the final newsroom header, each tested and deployed.*
