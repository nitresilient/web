import { PageShell } from "@/components/PageShell";

const TOC = [
  { label: "Welcome", href: "#welcome" },
  { label: "Explore the Site", href: "#explore" },
  { label: "What I'm Doing Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="welcome">Welcome to my website :)</h1>

      <div className="flex flex-col sm:flex-row items-start gap-6 my-6">
        <img
          src="/logo.svg"
          alt="nitresilient"
          className="rounded-xl border border-[var(--vp-c-divider)] shadow-sm shrink-0"
          style={{ width: 220, height: 220 }}
        />
        <p className="flex-1 m-0">
          I&apos;m <strong>Yashi Saxena</strong>, a dual-degree student studying{" "}
          <strong>Psychology with Economics</strong> at Gargi College, University of
          Delhi, and <strong>Data Science and Applications</strong> at IIT Madras.
          A multidisciplinary student weaving together technology, economics,
          biology, and psychology. This site collects my resume, research notes,
          and a small blog in one place.
        </p>
      </div>

      <h2 id="explore">Explore the Site</h2>

      <p>
        Pick a path. The site is divided into a resume, research notes, an
        opportunity radar, and a blog.
      </p>

      <div className="card-grid">
        <a href="/about" className="card">
          <h3>Resume</h3>
          <p>Education, subjects studied, interests, and achievements.</p>
        </a>
        <a href="/research" className="card">
          <h3>Research</h3>
          <p>Current focus on ML and DSA, and broader areas of interest.</p>
        </a>
        <a href="/opportunities" className="card">
          <h3>Opportunity Radar</h3>
          <p>A checked shortlist of internships and student programs that fit.</p>
        </a>
        <a href="/blog" className="card">
          <h3>Blog</h3>
          <p>Short notes on things I&apos;m learning or thinking about.</p>
        </a>
      </div>

      <h2 id="now">What I&apos;m Doing Now</h2>

      <p>Here is what I&apos;m focused on right now:</p>

      <ul className="index-list">
        <li>
          <strong>Machine Learning</strong>, building intuition for the math
          behind models and how they learn from data.
        </li>
        <li>
          <strong>DSA in Python</strong>, practicing on{" "}
          <a
            href="https://leetcode.com/u/nitresilient"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          .
        </li>
        <li>
          <strong>Psychology + Economics</strong>, reading across cognition,
          decision making, and market behaviour.
        </li>
        <li>
          <strong>Plants, poems, dance</strong>, the things that keep the rest
          of the week sane.
        </li>
      </ul>

      <h2 id="contact">Contact</h2>

      <p>The fastest ways to reach me:</p>

      <ul className="index-list">
        <li>
          <strong>Website</strong>:{" "}
          <a href="https://nitresilient.me" target="_blank" rel="noopener noreferrer">
            nitresilient.me
          </a>
        </li>
        <li>
          <strong>GitHub</strong>:{" "}
          <a
            href="https://github.com/nitresilient"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nitresilient
          </a>
        </li>
        <li>
          <strong>LinkedIn</strong>:{" "}
          <a
            href="https://linkedin.com/in/nitresilient"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nitresilient
          </a>
        </li>
        <li>
          <strong>LeetCode</strong>:{" "}
          <a
            href="https://leetcode.com/u/nitresilient"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/u/nitresilient
          </a>
        </li>
      </ul>
    </PageShell>
  );
}
