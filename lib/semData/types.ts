export type Week = {
  n: number;
  topic: string;
  focus: string;
  concepts: string[];
  practice: string;
};

export type Resource = {
  name: string;
  kind: string;
  note: string;
  url?: string;
};

export type CoverageRow = {
  source: string;
  url?: string;
  covers: string;
  gaps: string;
};

export type Coverage = {
  title: string;
  intro: string;
  rows: CoverageRow[];
  gaps: string[];
  verdict: string;
};

export type Subject = {
  id: string;
  code: string;
  name: string;
  short: string;
  url: string;
  credits: number;
  blurb: string;
  weeks: Week[];
  resources: Resource[];
  projects: string[];
  exam: string[];
  coverage?: Coverage;
};
