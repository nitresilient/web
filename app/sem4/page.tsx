import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SemPlan } from "@/components/SemPlan";
import { SUBJECTS } from "@/lib/semData/sem4";

const TOC = [
  { label: "Overview", href: "#overview" },
  ...SUBJECTS.map((s) => ({ label: s.short, href: `#${s.id}` })),
];

export const metadata: Metadata = {
  title: "Semester 4 Study Planner",
  description:
    "An interactive 12-week study planner for the IIT Madras BS Data Science semester 4 courses: Modern Application Development I, System Commands and Machine Learning Techniques.",
};

export default function Sem4Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 4 Study Planner</h1>

      <p>
        An interactive study planner for Semester 4 of the IIT Madras BS in
        Data Science: Modern Application Development I, System Commands and
        Machine Learning Techniques. Switch between subjects, expand each week
        for focus, key concepts and a concrete practice activity, and tick
        weeks off as you finish. Progress is saved in this browser.
      </p>

      <SemPlan subjects={SUBJECTS} storageKey="sem4-progress" />
    </PageShell>
  );
}
