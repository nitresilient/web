import { PageShell } from "@/components/PageShell";

const POSTS = [
  {
    id: "starting-ml",
    title: "starting ml, properly this time",
    date: "May 2026",
    body:
      "Picking up machine learning with a real plan instead of jumping between tutorials. Linear algebra and statistics first, then the actual models. I want to be able to read a paper without skipping the math.",
  },
  {
    id: "two-degrees",
    title: "what dual-degree actually feels like",
    date: "April 2026",
    body:
      "Psychology in the morning, data science assignments in the evening. The funny part is how often the two sides answer the same question — just with different tools.",
  },
  {
    id: "plants-and-people",
    title: "plants, people, and patience",
    date: "March 2026",
    body:
      "Growing plants taught me more about steadiness than anything else this year. Some things you cannot rush, you can only show up for.",
  },
];

const TOC = [
  { label: "Blog", href: "#blog" },
  ...POSTS.map((p) => ({ label: p.title, href: `#${p.id}` })),
];

export default function BlogPage() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="blog">Blog</h1>

      <p>Short notes on what I&apos;m learning, building, or thinking about.</p>

      {POSTS.map((p) => (
        <section key={p.id}>
          <h2 id={p.id}>{p.title}</h2>
          <p
            style={{
              color: "var(--vp-c-text-3)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
            }}
          >
            {p.date}
          </p>
          <p>{p.body}</p>
        </section>
      ))}
    </PageShell>
  );
}
