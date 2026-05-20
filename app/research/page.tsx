import { PageShell } from "@/components/PageShell";

const TOC = [
  { label: "Research", href: "#research" },
  { label: "Current Focus", href: "#current" },
  { label: "Interest Areas", href: "#areas" },
  { label: "Notes", href: "#notes" },
];

const AREAS: { title: string; status: "Studying" | "Interested"; body: string }[] = [
  {
    title: "Machine Learning & Data Science",
    status: "Studying",
    body:
      "Foundations of ML, model evaluation, and how data shapes the algorithms we build on top of it. Currently the active learning track.",
  },
  {
    title: "Cognitive Psychology",
    status: "Studying",
    body:
      "Attention, perception, problem solving, and creativity — both the classical theories and how they translate into modern HCI and ML interfaces.",
  },
  {
    title: "Behavioural Economics",
    status: "Interested",
    body:
      "Where psychology and economics overlap: decision-making under uncertainty, heuristics, and the limits of the rational-actor model.",
  },
  {
    title: "Statistics and Inference",
    status: "Studying",
    body:
      "Probability, estimation, hypothesis testing, and regression — the toolkit underneath every ML claim.",
  },
  {
    title: "Neuroscience-informed Computing",
    status: "Interested",
    body:
      "Neural coding, perception, and what computational ideas from neuroscience can lend back to data science.",
  },
  {
    title: "Macro & Microeconomics",
    status: "Studying",
    body:
      "Markets, welfare, monetary and fiscal policy, and how aggregate behaviour emerges from individual decisions.",
  },
];

export default function ResearchPage() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="research">Research</h1>

      <p>
        A working snapshot of what I&apos;m studying, what I&apos;d like to explore
        further, and the threads that connect them. The common pull is across
        psychology, economics, and data science — the same questions, asked in
        different vocabularies.
      </p>

      <h2 id="current">Current Focus</h2>

      <p>
        Right now I&apos;m focused on <strong>machine learning</strong> and{" "}
        <strong>data structures and algorithms in Python</strong>, alongside
        coursework in cognitive psychology and macroeconomics. The goal is to
        build a solid base — math, statistics, and code — before specializing.
      </p>

      <h2 id="areas">Interest Areas</h2>

      <p>
        A snapshot of areas I either already work in or want to explore further.
      </p>

      <div className="card-grid">
        {AREAS.map((a) => (
          <div key={a.title} className="card" style={{ position: "relative" }}>
            <span
              className="absolute top-3 right-3 px-2 py-0.5 text-[11px] font-medium rounded"
              style={{
                background:
                  a.status === "Studying"
                    ? "linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2))"
                    : "var(--vp-c-bg-alt)",
                color:
                  a.status === "Studying" ? "#fff" : "var(--vp-c-text-2)",
                border:
                  a.status === "Studying"
                    ? "none"
                    : "1px solid var(--vp-c-divider)",
              }}
            >
              {a.status}
            </span>
            <h3 style={{ paddingRight: 110 }}>{a.title}</h3>
            <p>{a.body}</p>
          </div>
        ))}
      </div>

      <h2 id="notes">Notes</h2>

      <p>
        This page will grow as the reading list does. If you&apos;d like to
        compare notes on any of these areas, the contact links are on the home
        page.
      </p>
    </PageShell>
  );
}
