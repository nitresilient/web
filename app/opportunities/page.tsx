import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Opportunity Radar — nitresilient",
  description:
    "A curated tracker of internships and student programs that fit Yashi Saxena's psychology, economics, and data science path.",
};

const TOC = [
  { label: "Opportunity Radar", href: "#opportunities" },
  { label: "Apply First", href: "#apply-first" },
  { label: "Build the Pipeline", href: "#pipeline" },
  { label: "Conditional Match", href: "#conditional" },
  { label: "Skip List", href: "#skip" },
  { label: "Application Rule", href: "#rule" },
];

type StatusTone = "open" | "join" | "check" | "watch" | "conditional";

type Opportunity = {
  company: string;
  title: string;
  href: string;
  status: string;
  tone: StatusTone;
  why: string;
  move: string;
  tags: string[];
};

const PRIORITIES: Opportunity[] = [
  {
    company: "Goldman Sachs",
    title: "2027 Summer Analyst Program — India",
    href: "https://www.goldmansachs.com/careers/students/programs-and-internships/india/summer-analyst-program",
    status: "Apply now",
    tone: "open",
    why:
      "The program accepts bachelor's or master's students graduating in 2028 without restricting the degree field. My B.A. timeline is a direct match.",
    move:
      "Prioritise Global Investment Research, Risk, Asset Management, Human Capital Management, and Operations. Treat Engineering as a stretch track.",
    tags: ["Internship", "India", "Class of 2028"],
  },
  {
    company: "Amazon",
    title: "Women of the World",
    href: "https://amazon.jobs/content/en-gb/career-programs/university/women-of-the-world",
    status: "Join now",
    tone: "join",
    why:
      "This community supports women university students in technology and other career paths, so neither of my degree titles creates a barrier.",
    move:
      "Register for career events and use the machine-learning, DSA, resume, and online-assessment sessions as preparation for later Amazon applications.",
    tags: ["Women in tech", "Career community", "Open sign-up"],
  },
  {
    company: "JPMorganChase",
    title: "Code for Good — India",
    href: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/tfsg-hackathons",
    status: "Check portal",
    tone: "check",
    why:
      "The main program accepts students enrolled in a bachelor's degree and lists India as a program location. Python, SQL, and data projects give me a relevant base.",
    move:
      "Open the local application and confirm its cohort rules before applying. Prepare Python problem solving, DSA fundamentals, and a clear project walkthrough.",
    tags: ["Hackathon", "India", "Bachelor's students"],
  },
];

const PIPELINE: Opportunity[] = [
  {
    company: "JPMorganChase",
    title: "Winning Women",
    href: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/winning-women-ba",
    status: "Watch",
    tone: "watch",
    why:
      "The program looks for undergraduates with analytical thinking, communication, and attention to detail — a strong match for psychology, economics, and research.",
    move:
      "Join student alerts and apply when an India cohort appears. The official page only shows locations while they are actively recruiting.",
    tags: ["Women", "Financial services", "Undergraduate"],
  },
  {
    company: "Intuit",
    title: "India Internship Program",
    href: "https://www.intuit.com/in/careers/internships/",
    status: "Join alerts",
    tone: "watch",
    why:
      "At program level, Intuit asks only that interns are enrolled in an accredited degree and return to university afterward. Data science and product are named hiring areas.",
    move:
      "Join the talent community and watch for India data science, product, analytics, or research-facing roles rather than engineering-only openings.",
    tags: ["Internship", "Bengaluru", "Data science"],
  },
  {
    company: "Goldman Sachs",
    title: "Catalyst Program",
    href: "https://www.goldmansachs.com/worldwide/india/careers/catalyst-program",
    status: "Conditional",
    tone: "conditional",
    why:
      "It supports women undergraduates from low-income communities across India through mentorship and preparation for Goldman Sachs internships.",
    move:
      "Check eligibility and access through Goldman Sachs' partner organisations, Empower Ananya and Katalyst; this is not a standard open internship application.",
    tags: ["Women", "India", "Mentorship"],
  },
];

const SKIP = [
  {
    name: "Salesforce Summer 2027 SWE",
    reason: "Requires a B.E./B.Tech in CS, IT, or a circuit branch graduating in 2028.",
    href: "https://careers.salesforce.com/en/jobs/jr337715/summer-2027-intern-software-engineer/",
  },
  {
    name: "Amazon Applied Scientist Intern — India",
    reason: "The Data Science subject fits, but that degree graduates in 2029 rather than the required June 2027–June 2028 window.",
    href: "https://www.amazon.jobs/en/jobs/10477346/applied-scientist-i-intern-jan-2027-6-months",
  },
  {
    name: "Uber She++ India",
    reason: "Requires CS or engineering-related students attending an accredited engineering college.",
    href: "https://www.uber.com/nz/en/careers/sheplusplus/",
  },
  {
    name: "Google STEP India",
    reason: "No live official India 2027 listing was verified on the latest check. Avoid old application forms circulating online.",
    href: "https://www.google.com/about/careers/applications/jobs/results/?employment_type=INTERN",
  },
];

function OpportunityCard({ item, rank }: { item: Opportunity; rank?: number }) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-card__topline">
        <div className="opportunity-card__identity">
          {rank ? <span className="opportunity-rank">{String(rank).padStart(2, "0")}</span> : null}
          <span className="opportunity-company">{item.company}</span>
        </div>
        <span className={"opportunity-status opportunity-status--" + item.tone}>
          {item.status}
        </span>
      </div>

      <h3>{item.title}</h3>

      <div className="opportunity-tags" aria-label="Opportunity details">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <dl className="opportunity-notes">
        <div>
          <dt>Why it fits</dt>
          <dd>{item.why}</dd>
        </div>
        <div>
          <dt>Next move</dt>
          <dd>{item.move}</dd>
        </div>
      </dl>

      <a
        className="opportunity-link"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open official page <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function OpportunitiesPage() {
  return (
    <PageShell tocItems={TOC}>
      <div className="opportunity-page">
        <section id="opportunities" className="opportunity-hero">
          <div className="opportunity-hero__copy">
            <p className="opportunity-eyebrow">Career field notes · 08 Sep 2026</p>
            <h1>The doors worth knocking on.</h1>
            <p className="opportunity-intro">
              A curated opportunity radar for my Psychology + Economics + Data
              Science path — filtered by degree, graduation year, geography,
              and actual eligibility.
            </p>
          </div>

          <div className="opportunity-radar" aria-hidden="true">
            <span className="opportunity-radar__ring opportunity-radar__ring--one" />
            <span className="opportunity-radar__ring opportunity-radar__ring--two" />
            <span className="opportunity-radar__ring opportunity-radar__ring--three" />
            <span className="opportunity-radar__sweep" />
            <span className="opportunity-radar__dot opportunity-radar__dot--one" />
            <span className="opportunity-radar__dot opportunity-radar__dot--two" />
            <span className="opportunity-radar__dot opportunity-radar__dot--three" />
            <span className="opportunity-radar__core" />
          </div>
        </section>

        <div className="opportunity-summary" aria-label="Opportunity summary">
          <div><strong>03</strong><span>act now</span></div>
          <div><strong>03</strong><span>build pipeline</span></div>
          <div><strong>04</strong><span>skip for now</span></div>
        </div>

        <section id="apply-first">
          <div className="opportunity-section-heading">
            <p>Priority queue</p>
            <h2>Apply first</h2>
          </div>
          <p>
            These are the highest-value actions: one direct internship, one
            women&apos;s career community, and one hiring pathway with an India
            route.
          </p>
          <div className="opportunity-stack">
            {PRIORITIES.map((item, index) => (
              <OpportunityCard key={item.title} item={item} rank={index + 1} />
            ))}
          </div>
        </section>

        <section id="pipeline">
          <div className="opportunity-section-heading">
            <p>Keep warm</p>
            <h2>Build the pipeline</h2>
          </div>
          <p>
            Good profile matches where the next India opening, cohort, or
            eligibility check still determines whether an application is possible.
          </p>
          <div className="opportunity-stack opportunity-stack--compact">
            {PIPELINE.map((item) => (
              <OpportunityCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="conditional">
          <div className="opportunity-section-heading">
            <p>Farther afield</p>
            <h2>A conditional research match</h2>
          </div>
          <div className="opportunity-callout opportunity-callout--research">
            <div>
              <span className="opportunity-status opportunity-status--conditional">
                North America only
              </span>
              <h3>Microsoft Undergraduate Research Internship</h3>
              <p>
                The academic fit is unusually strong: related bachelor&apos;s
                students can qualify through statistics, machine learning, or
                social-science methodology, and the program explicitly encourages
                women. Its research areas include health, HCI, economics, and
                computational social science.
              </p>
              <p>
                Before investing in the essays, confirm work authorisation and
                the cycle year. The official page currently labels the opportunity
                “Summer 2026” while accepting applications until 5 October 2026.
              </p>
            </div>
            <a
              className="opportunity-link"
              href="https://www.microsoft.com/en-us/research/academic-program/undergraduate-research-internship-computing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Review official details <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section id="skip">
          <div className="opportunity-section-heading">
            <p>Protect the time</p>
            <h2>Skip list</h2>
          </div>
          <p>
            Attractive names are not automatically useful applications. These
            currently fail the degree, year, or verified-opening test.
          </p>
          <ul className="opportunity-skip-list">
            {SKIP.map((item) => (
              <li key={item.name}>
                <span aria-hidden="true">×</span>
                <div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                  <p>{item.reason}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="rule" className="opportunity-rule">
          <p className="opportunity-eyebrow">The application rule</p>
          <h2>Degree and graduation year travel together.</h2>
          <p>
            For broad “Class of 2028” roles, my B.A. can establish eligibility.
            For technical-degree roles graduating in 2028, I cannot combine the
            B.A. year with the B.S. subject. Every application should show both
            dates accurately: <strong>B.A. — 2028</strong> and{" "}
            <strong>B.S. Data Science — 2029</strong>.
          </p>
        </section>

        <p className="opportunity-footnote">
          Last verified against official company pages on 08 September 2026.
          Program availability and local eligibility can change; re-check the
          linked page before applying.
        </p>
      </div>
    </PageShell>
  );
}
