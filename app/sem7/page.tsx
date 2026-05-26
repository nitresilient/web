import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SemPlan } from "@/components/SemPlan";
import { SUBJECTS } from "@/lib/semData/sem7";

const TOC = [
  { label: "Overview", href: "#overview" },
  ...SUBJECTS.map((s) => ({ label: s.short, href: `#${s.id}` })),
];

export const metadata: Metadata = {
  title: "Semester 7 Study Planner",
  description:
    "An interactive 12-week study planner for the IIT Madras BS Data Science semester 7 courses: Modern Application Development II Project, Machine Learning Practice Project and Programming Concepts in Java.",
};

export default function Sem7Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 7 Study Planner</h1>

      <p>
        An interactive study planner for Semester 7: MAD2 project, MLP
        project and Programming Concepts in Java. Switch between subjects,
        expand each milestone or week for focus, key concepts and a
        concrete practice activity, and tick them off as you finish.
        Progress is saved in this browser.
      </p>

      <SemPlan subjects={SUBJECTS} storageKey="sem7-progress" />
    </PageShell>
  );
}
