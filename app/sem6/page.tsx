import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SemPlan } from "@/components/SemPlan";
import { SUBJECTS } from "@/lib/semData/sem6";

const TOC = [
  { label: "Overview", href: "#overview" },
  ...SUBJECTS.map((s) => ({ label: s.short, href: `#${s.id}` })),
];

export const metadata: Metadata = {
  title: "Semester 6 Study Planner",
  description:
    "An interactive 12-week study planner for the IIT Madras BS Data Science semester 6 courses: Modern Application Development II, Tools in Data Science and Introduction to Deep Learning & Generative AI.",
};

export default function Sem6Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 6 Study Planner</h1>

      <p>
        An interactive study planner for Semester 6: Modern Application
        Development II, Tools in Data Science, and Introduction to Deep
        Learning &amp; Generative AI. Switch between subjects, expand each
        week for focus, key concepts and a concrete practice activity, and
        tick weeks off as you finish. Progress is saved in this browser.
      </p>

      <SemPlan subjects={SUBJECTS} storageKey="sem6-progress" />
    </PageShell>
  );
}
