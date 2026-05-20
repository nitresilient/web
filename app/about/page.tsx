import { PageShell } from "@/components/PageShell";

const TOC = [
  { label: "Resume", href: "#resume" },
  { label: "Education", href: "#education" },
  { label: "Subjects", href: "#subjects" },
  { label: "Interests", href: "#interests" },
  { label: "Achievements", href: "#achievements" },
  { label: "Now Learning", href: "#now-learning" },
];

const SUBJECTS: { title: string; body: string }[] = [
  {
    title: "Maths",
    body:
      "Algebra, functions, graphs, quadratic equations, logarithms, limits, differentiation, multivariable calculus, vectors, matrices, linear algebra, vector spaces, eigen concepts, Gaussian elimination, linear transformations, partial derivatives, optimization, gradients, the Hessian matrix, integration, and graph theory algorithms like BFS, DFS, shortest paths, and topological sort.",
  },
  {
    title: "Statistics",
    body:
      "Descriptive statistics, probability, permutations and combinations, Bayes theorem, conditional probability, random variables, probability distributions (Binomial, Poisson, Gaussian, Exponential), expectation, covariance, correlation, estimation, hypothesis testing, inference, multivariable distributions, regression, and limit theorems.",
  },
  {
    title: "Computational Thinking",
    body:
      "Algorithms, pseudocode, logical operators, iteration, recursion, problem solving, graphs, trees, matrices, insertion sort, adjacency matrices, DFS/backtracking, concurrency, multithreading, producer–consumer problems, OOP, abstraction, and encapsulation.",
  },
  {
    title: "Python",
    body:
      "Python basics, conditionals, loops, functions, recursion, collections (lists, tuples, dictionaries), file handling, modules, algorithmic thinking, NumPy, Pandas, and basic data processing and analysis.",
  },
  {
    title: "Microeconomics",
    body:
      "Economic trade-offs, resources and opportunities, gains from trade, individual and society, supply and demand, price and resource allocation, elasticity, market trade and welfare, taxation, public goods, inequality and poverty, individual decision making, strategic interaction, and strategic thinking.",
  },
  {
    title: "Macroeconomics",
    body:
      "National income accounting, GDP, income and expenditure, the circular flow of income, real vs nominal GDP, price indices, open economy, balance of payments, current and capital accounts, money supply and demand, credit creation, monetary policy, classical and Keynesian systems, IS–LM analysis, fiscal and monetary multipliers, and aggregate demand.",
  },
  {
    title: "Cognitive Psychology and its Applications",
    body:
      "Cognitive psychology, the cognitive revolution, methods and scope, culture and cognition, attention, theories of attention, perception, laws of perception, perceptual illusions, problem solving, algorithms and heuristics, barriers in problem solving, convergent and divergent thinking, and creativity. Plus psychology as a science, major schools, the evolution of psychology in India, subfields, bottom-up and top-down processing, perceptual organization, learning by association, and social cognitive learning.",
  },
];

export default function ResumePage() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="resume">Resume</h1>

      <ul className="index-list">
        <li>
          <strong>Name</strong>: Yashi Saxena
        </li>
        <li>
          <strong>Website</strong>:{" "}
          <a href="https://nitresilient.me" target="_blank" rel="noopener noreferrer">
            nitresilient.me
          </a>
        </li>
        <li>
          <strong>GitHub</strong>:{" "}
          <a href="https://github.com/nitresilient" target="_blank" rel="noopener noreferrer">
            github.com/nitresilient
          </a>
        </li>
        <li>
          <strong>LinkedIn</strong>:{" "}
          <a href="https://linkedin.com/in/nitresilient" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/nitresilient
          </a>
        </li>
        <li>
          <strong>LeetCode</strong>:{" "}
          <a href="https://leetcode.com/u/nitresilient" target="_blank" rel="noopener noreferrer">
            leetcode.com/u/nitresilient
          </a>
        </li>
      </ul>

      <h2 id="education">Education</h2>

      <p>
        <strong>Gargi College, University of Delhi</strong>
        <br />
        Bachelor&apos;s, Psychology (Major) with Economics (Minor)
      </p>

      <p>
        <strong>Indian Institute of Technology Madras</strong>
        <br />
        BS in Data Science and Applications
      </p>

      <p>
        <strong>Senior Secondary</strong>
        <br />
        Science stream (Biology).
      </p>

      <p>
        A multidisciplinary student integrating technology, economics, biology,
        and psychology, and trying to make those fields actually talk to each
        other.
      </p>

      <h2 id="subjects">Subjects I&apos;ve Studied</h2>

      <p>
        Courses I&apos;ve completed across the two degrees, grouped by area.
      </p>

      <div className="card-grid">
        {SUBJECTS.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <h2 id="interests">Interests</h2>

      <ul>
        <li>
          <strong>Dance</strong>: contemporary, freestyle, hip hop, and
          semi-classical. Performed in school events and college societies and
          workshops.
        </li>
        <li>
          <strong>Writing and reading</strong>: poems mostly, both reading and
          writing them.
        </li>
        <li>
          <strong>Watching</strong>: k-drama, anime, horror-thriller web series,
          and documentaries. Naruto was my first anime, watched every season and
          movie and learned a lot from it. Favourite k-drama is{" "}
          <em>Twenty-Five Twenty-One</em>, a couple chasing their dreams in
          swimming and fencing while holding each other up.
        </li>
        <li>
          <strong>Nature</strong>: time outdoors, growing plants, watering them,
          nurturing them, learning about them.
        </li>
      </ul>

      <h2 id="achievements">Achievements</h2>

      <ul className="index-list">
        <li>
          Won several school and college competitions in <strong>debates</strong>,{" "}
          <strong>extempore</strong>, and <strong>quizzes</strong>.
        </li>
        <li>
          Wins in <strong>poem recitation</strong> and <strong>story telling</strong>{" "}
          across school and college events.
        </li>
      </ul>

      <h2 id="now-learning">Now Learning</h2>

      <ul>
        <li>
          <strong>Machine Learning</strong>, working through the foundations and
          how models actually learn.
        </li>
        <li>
          <strong>DSA in Python</strong>, practicing daily on{" "}
          <a href="https://leetcode.com/u/nitresilient" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          .
        </li>
      </ul>
    </PageShell>
  );
}
