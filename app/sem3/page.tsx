import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Sem3Plan } from "@/components/Sem3Plan";

const TOC = [
  { label: "Overview", href: "#overview" },
  { label: "DBMS", href: "#dbms" },
  { label: "PDSA", href: "#pdsa" },
  { label: "ML Foundations", href: "#mlf" },
];

export const metadata: Metadata = {
  title: "Semester 3 Study Planner",
  description:
    "An interactive 12-week study planner for the IIT Madras BS Data Science semester 3 courses: DBMS, PDSA and ML Foundations.",
};

export default function Sem3Page() {
  return (
    <PageShell tocItems={TOC}>
      <h1 id="overview">Semester 3 Study Planner</h1>

      <p>
        An interactive study planner for three core courses of the IIT Madras
        BS in Data Science: Database Management Systems, Programming, Data
        Structures and Algorithms using Python, and Machine Learning
        Foundations. Switch between subjects, expand each week to see its focus,
        key concepts and a concrete practice activity, and tick weeks off as you
        finish them. Your progress is saved in this browser.
      </p>

      <Sem3Plan />
    </PageShell>
  );
}
