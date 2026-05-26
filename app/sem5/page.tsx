import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SemPlan } from "@/components/SemPlan";
import { SUBJECTS } from "@/lib/semData/sem5";

const TOC = [
  { label: "Overview", href: "#overview" },
  ...SUBJECTS.map((s) => ({ label: s.short, href: `#${s.id}` })),
];

export const metadata: Metadata = {
  title: "Semester 5 Study Planner",
  description:
    "An interactive 12-week study planner for the IIT Madras BS Data Science semester 5 courses: Modern Application Development I Project, Business Data Management and Machine Learning Practice.",
};

export default function Sem5Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 5 Study Planner</h1>

      <p>
        An interactive study planner for Semester 5: the MAD1 capstone
        project, Business Data Management and Machine Learning Practice.
        Switch between subjects, expand each milestone or week for focus,
        key concepts and a concrete practice activity, and tick them off
        as you finish. Progress is saved in this browser.
      </p>

      <SemPlan subjects={SUBJECTS} storageKey="sem5-progress" />
    </PageShell>
  );
}
