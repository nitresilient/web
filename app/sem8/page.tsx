import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SemPlan } from "@/components/SemPlan";
import { SUBJECTS } from "@/lib/semData/sem8";

const TOC = [
  { label: "Overview", href: "#overview" },
  ...SUBJECTS.map((s) => ({ label: s.short, href: `#${s.id}` })),
];

export const metadata: Metadata = {
  title: "Semester 8 Capstone Planner",
  description:
    "An interactive 12-milestone planner for the IIT Madras BS Data Science semester 8 capstone: Deep Learning & Generative AI Project.",
};

export default function Sem8Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 8 Capstone Planner</h1>

      <p>
        An interactive planner for the Sem 8 capstone — the Deep Learning
        &amp; Generative AI Project. The 12 milestones walk from problem
        scoping through literature review, dataset acquisition, baselining,
        training, evaluation, deployment and viva. Tick milestones off as
        you finish; progress is saved in this browser.
      </p>

      <SemPlan subjects={SUBJECTS} storageKey="sem8-progress" />
    </PageShell>
  );
}
