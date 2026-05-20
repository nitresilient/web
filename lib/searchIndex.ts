export type SearchEntry = {
  title: string;
  section?: string;
  path: string;
  hash?: string;
  text: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  { title: "Welcome", path: "/", hash: "welcome", text: "home welcome yashi saxena nitresilient psychology economics data science" },
  { title: "Explore the Site", path: "/", hash: "explore", text: "explore resume research blog" },
  { title: "What I'm Doing Now", path: "/", hash: "now", text: "machine learning dsa python leetcode" },
  { title: "Contact", path: "/", hash: "contact", text: "email github linkedin leetcode nitresilient" },

  { title: "Resume", path: "/about", hash: "resume", text: "resume contact yashi saxena gargi iit madras" },
  { title: "Education", section: "Resume", path: "/about", hash: "education", text: "gargi college delhi university psychology economics iit madras data science" },
  { title: "Subjects", section: "Resume", path: "/about", hash: "subjects", text: "maths statistics computational thinking python microeconomics macroeconomics cognitive psychology" },
  { title: "Interests", section: "Resume", path: "/about", hash: "interests", text: "dance contemporary freestyle hip hop semiclassical kdrama anime naruto poems nature plants" },
  { title: "Achievements", section: "Resume", path: "/about", hash: "achievements", text: "debates extempore quizzes poem story recitation competitions" },

  { title: "Research", path: "/research", hash: "research", text: "research interests areas multidisciplinary" },
  { title: "Current Focus", section: "Research", path: "/research", hash: "current", text: "machine learning dsa python" },
  { title: "Interest Areas", section: "Research", path: "/research", hash: "areas", text: "psychology economics data science machine learning cognitive perception" },

  { title: "Blog", path: "/blog", hash: "blog", text: "blog posts notes thoughts" },
];

export function searchEntries(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/);
  return SEARCH_INDEX
    .map((e) => {
      const hay = `${e.title} ${e.section ?? ""} ${e.text}`.toLowerCase();
      let score = 0;
      for (const t of tokens) {
        const idx = hay.indexOf(t);
        if (idx === -1) return { e, score: -1 };
        score += 100 - Math.min(idx, 50);
        if (e.title.toLowerCase().includes(t)) score += 50;
      }
      return { e, score };
    })
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((r) => r.e);
}
