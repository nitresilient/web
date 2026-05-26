import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const TOC = [
  { label: "Overview", href: "#overview" },
  { label: "Term Plan", href: "#term-plan" },
  { label: "Per-Semester Planners", href: "#planners" },
  { label: "Prerequisite Chain", href: "#prereqs" },
  { label: "Diploma Rule Compliance", href: "#compliance" },
  { label: "Course Code Notes", href: "#codes" },
];

export const metadata: Metadata = {
  title: "Diploma Term Plan",
  description:
    "Six-semester term-by-term plan for the IIT Madras BS in Data Science diploma level (Sem 3 to Sem 8), with prerequisite chain, workload distribution and May 2024 diploma rule compliance check.",
};

type SemRow = {
  sem: string;
  href: string;
  courses: { code: string; name: string; kind: "course" | "project" }[];
  load: string;
};

const TERMS: SemRow[] = [
  {
    sem: "Sem 3",
    href: "/sem3",
    courses: [
      { code: "BSCS2001", name: "Database Management Systems", kind: "course" },
      { code: "BSCS2002", name: "Programming, Data Structures & Algorithms — Python", kind: "course" },
      { code: "BSCS2004", name: "Machine Learning Foundations", kind: "course" },
    ],
    load: "3 courses",
  },
  {
    sem: "Sem 4",
    href: "/sem4",
    courses: [
      { code: "BSCS2003", name: "Modern Application Development I", kind: "course" },
      { code: "BSSE2001", name: "System Commands", kind: "course" },
      { code: "BSCS2007", name: "Machine Learning Techniques", kind: "course" },
    ],
    load: "3 courses",
  },
  {
    sem: "Sem 5",
    href: "/sem5",
    courses: [
      { code: "BSCS2003P", name: "Modern Application Development I — Project", kind: "project" },
      { code: "BSMS2001", name: "Business Data Management", kind: "course" },
      { code: "BSCS2008", name: "Machine Learning Practice", kind: "course" },
    ],
    load: "2 courses + 1 project",
  },
  {
    sem: "Sem 6",
    href: "/sem6",
    courses: [
      { code: "BSCS2006", name: "Modern Application Development II", kind: "course" },
      { code: "BSSE2002", name: "Tools in Data Science", kind: "course" },
      { code: "BSDA2001", name: "Introduction to Deep Learning & Generative AI", kind: "course" },
    ],
    load: "3 courses",
  },
  {
    sem: "Sem 7",
    href: "/sem7",
    courses: [
      { code: "BSCS2006P", name: "Modern Application Development II — Project", kind: "project" },
      { code: "BSCS2008P", name: "Machine Learning Practice — Project", kind: "project" },
      { code: "BSCS2005", name: "Programming Concepts in Java", kind: "course" },
    ],
    load: "1 course + 2 projects",
  },
  {
    sem: "Sem 8",
    href: "/sem8",
    courses: [
      { code: "BSDA2001P", name: "Deep Learning & Generative AI — Project", kind: "project" },
    ],
    load: "1 project (capstone)",
  },
];

export default function DiplomaPlanPage() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Diploma Term Plan</h1>

      <p>
        A six-semester plan covering the diploma level of the IIT Madras BS in
        Data Science: <strong>Sem 3 through Sem 8</strong>. Load is held at 3
        courses per term for Sem 3, 4 and 6, with projects layered in at Sem 5,
        7 and a capstone-only Sem 8. Every term meets the May 2024 diploma rule
        of <strong>≥3 courses + ≥1 project every 3 terms</strong>, with the
        first project (MAD1-Proj) scheduled in Sem 5 to dodge the warning at
        the 3-term checkpoint.
      </p>

      <h2 id="term-plan">Term Plan</h2>

      <p>
        Click any semester to open its 12-week interactive study planner.
      </p>

      <div className="not-prose mt-4 flex flex-col gap-3">
        {TERMS.map((t) => (
          <div
            key={t.sem}
            className="rounded-xl p-4 sm:p-5"
            style={{
              background: "var(--vp-c-bg-elv)",
              border: "1px solid var(--vp-c-divider)",
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={t.href}
                className="text-[16px] sm:text-[18px] font-bold"
                style={{ color: "var(--vp-c-brand-1)" }}
              >
                {t.sem} ↗
              </a>
              <span
                className="text-[12px] font-semibold"
                style={{ color: "var(--vp-c-text-3)" }}
              >
                {t.load}
              </span>
            </div>
            <ul className="mt-2 mb-0 pl-0 list-none flex flex-col gap-1.5">
              {t.courses.map((c) => (
                <li
                  key={c.code}
                  className="flex items-baseline gap-2 text-[13px] sm:text-[14px] leading-[1.5]"
                  style={{ color: "var(--vp-c-text-2)" }}
                >
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      background:
                        c.kind === "project"
                          ? "var(--vp-c-brand-1)"
                          : "var(--vp-c-bg-alt)",
                      color:
                        c.kind === "project"
                          ? "#fff"
                          : "var(--vp-c-text-3)",
                    }}
                  >
                    {c.kind === "project" ? "Proj" : "Course"}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--vp-c-text-3)" }}>
                    {c.code}
                  </span>
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 id="planners">Per-Semester Planners</h2>

      <p>
        Each semester has a dedicated planner with a 12-week breakdown per
        course, key concepts, weekly practice activities, recommended
        resources, project ideas and exam strategy. Progress is saved per
        browser via localStorage.
      </p>

      <ul>
        <li><a href="/sem3">Semester 3 — DBMS, PDSA, ML Foundations</a></li>
        <li><a href="/sem4">Semester 4 — MAD1, System Commands, MLT</a></li>
        <li><a href="/sem5">Semester 5 — MAD1 Project, BDM, MLP</a></li>
        <li><a href="/sem6">Semester 6 — MAD2, TDS, Intro to DL/GenAI</a></li>
        <li><a href="/sem7">Semester 7 — MAD2 Project, MLP Project, Java</a></li>
        <li><a href="/sem8">Semester 8 — DL/GenAI Capstone Project</a></li>
      </ul>

      <h2 id="prereqs">Prerequisite Chain</h2>

      <p>The plan satisfies every project&apos;s theory prerequisite:</p>

      <ul>
        <li>
          <strong>MAD1</strong> (Sem 4) → <strong>MAD1 Project</strong> (Sem 5)
          → <strong>MAD2</strong> (Sem 6) → <strong>MAD2 Project</strong>
          {" "}(Sem 7)
        </li>
        <li>
          <strong>MLT</strong> (Sem 4) → <strong>MLP</strong> (Sem 5) →{" "}
          <strong>MLP Project</strong> (Sem 7)
        </li>
        <li>
          <strong>Intro to DL/GenAI</strong> (Sem 6) →{" "}
          <strong>DL/GenAI Project</strong> (Sem 8)
        </li>
      </ul>

      <p>
        Standalone courses (no project downstream): <strong>TDS</strong> and{" "}
        <strong>Java</strong>, slotted where workload permits.
      </p>

      <h2 id="compliance">Diploma Rule Compliance (May 2024 onwards)</h2>

      <p>
        <strong>Rule:</strong> every 3 terms must yield ≥3 courses + ≥1
        project. Checkpoints at terms 3 / 6 / 9 / 12. Failure at term 3 →
        warning; at 6/9/12 → removal from program.
      </p>

      <p>
        Since the plan finishes the diploma in 6 terms, only the first two
        checkpoints apply.
      </p>

      <div className="not-prose my-4 overflow-x-auto">
        <table
          className="w-full text-[13px] sm:text-[14px]"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ background: "var(--vp-c-bg-alt)" }}>
              <th className="text-left p-2.5 font-semibold" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>Checkpoint</th>
              <th className="text-left p-2.5 font-semibold" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>Required</th>
              <th className="text-left p-2.5 font-semibold" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>Plan delivers</th>
              <th className="text-left p-2.5 font-semibold" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2.5" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>End of Sem 5 (term 3)</td>
              <td className="p-2.5" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>≥3 courses + ≥1 project</td>
              <td className="p-2.5" style={{ borderBottom: "1px solid var(--vp-c-divider)" }}>8 courses + 1 project (MAD1-Proj)</td>
              <td className="p-2.5 font-semibold" style={{ borderBottom: "1px solid var(--vp-c-divider)", color: "var(--vp-c-brand-1)" }}>OK</td>
            </tr>
            <tr>
              <td className="p-2.5">End of Sem 8 (term 6)</td>
              <td className="p-2.5">≥6 courses + ≥2 projects</td>
              <td className="p-2.5">12 courses + 4 projects</td>
              <td className="p-2.5 font-semibold" style={{ color: "var(--vp-c-brand-1)" }}>OK</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Per-window distribution: <strong>Sem 3–5</strong> ships 8 courses + 1
        project, <strong>Sem 6–8</strong> ships 4 courses + 3 projects. No
        warning risk. No removal risk.
      </p>

      <h2 id="codes">Course Code Notes</h2>

      <p>
        Course codes were verified against live{" "}
        <a href="https://study.iitm.ac.in/ds/" target="_blank" rel="noopener noreferrer">
          study.iitm.ac.in
        </a>{" "}
        course pages (May 2026). A few codes differ from the older portal
        labels and the recommended-plan tool:
      </p>

      <ul>
        <li><strong>BSCS2005</strong> = Programming Concepts in Java (not MLP)</li>
        <li><strong>BSCS2007</strong> = Machine Learning Techniques (not Java)</li>
        <li><strong>BSCS2008</strong> = Machine Learning Practice (not MLT)</li>
        <li><strong>BSCS2008P</strong> = MLP Project (not BSCS2005P)</li>
      </ul>

      <p>
        If you cross-reference older study material, expect these swaps. The
        per-semester planners use the codes above.
      </p>
    </PageShell>
  );
}
