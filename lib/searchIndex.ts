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

  { title: "Diploma Term Plan", path: "/diplomaplan", hash: "overview", text: "diploma term plan iit madras bs data science sem 3 4 5 6 7 8 schedule prerequisite chain compliance rule may 2024 checkpoint warning removal" },
  { title: "Term Plan Table", section: "Diploma", path: "/diplomaplan", hash: "term-plan", text: "term plan six semesters courses projects load distribution" },
  { title: "Per-Semester Planners", section: "Diploma", path: "/diplomaplan", hash: "planners", text: "per semester planners interactive 12 week study sem3 sem4 sem5 sem6 sem7 sem8" },
  { title: "Prerequisite Chain", section: "Diploma", path: "/diplomaplan", hash: "prereqs", text: "prerequisite chain mad1 mad2 mlt mlp dl genai project dependencies" },
  { title: "Diploma Rule Compliance", section: "Diploma", path: "/diplomaplan", hash: "compliance", text: "diploma rule compliance may 2024 checkpoint 3 6 9 12 terms warning removal courses projects" },
  { title: "Course Code Notes", section: "Diploma", path: "/diplomaplan", hash: "codes", text: "course code notes bscs2005 java bscs2007 mlt bscs2008 mlp bscs2008p portal labels" },

  { title: "Semester 3 Study Planner", path: "/sem3", hash: "overview", text: "sem3 semester 3 study planner iit madras bs data science 12 week interactive progress tracker dbms pdsa machine learning" },
  { title: "DBMS", section: "Semester 3", path: "/sem3", hash: "dbms", text: "database management systems bscs2001 sql relational model normalization indexing transactions recovery query optimization er model functional dependency bcnf b+ tree acid" },
  { title: "PDSA", section: "Semester 3", path: "/sem3", hash: "pdsa", text: "programming data structures algorithms python bscs2002 complexity sorting searching graphs dynamic programming greedy divide and conquer heaps trees pattern matching network flow" },
  { title: "ML Foundations", section: "Semester 3", path: "/sem3", hash: "mlf", text: "machine learning foundations bscs2004 calculus linear algebra eigenvalues svd pca optimization convex lagrange probability exponential family expectation maximization" },

  { title: "Semester 4 Study Planner", path: "/sem4", hash: "overview", text: "sem4 semester 4 study planner mad1 modern application development html css javascript flask jinja system commands bash linux shell mlt machine learning techniques regression classification svm trees" },
  { title: "MAD1", section: "Semester 4", path: "/sem4", hash: "mad1", text: "modern application development 1 bscs2003 html css javascript flask jinja sqlite forms templates routing rest" },
  { title: "System Commands", section: "Semester 4", path: "/sem4", hash: "sc", text: "system commands bsse2001 linux shell bash unix grep awk sed find ssh permissions piping scripting" },
  { title: "MLT", section: "Semester 4", path: "/sem4", hash: "mlt", text: "machine learning techniques bscs2007 linear regression logistic regression svm decision trees ensemble bagging boosting" },

  { title: "Semester 5 Study Planner", path: "/sem5", hash: "overview", text: "sem5 semester 5 study planner mad1 project business data management mlp machine learning practice scikit-learn case study deployment" },
  { title: "MAD1 Project", section: "Semester 5", path: "/sem5", hash: "mad1-proj", text: "modern application development 1 project bscs2003p flask app deployment evaluation viva demo" },
  { title: "Business Data Management", section: "Semester 5", path: "/sem5", hash: "bdm", text: "business data management bsms2001 business analytics case study tableau dashboards descriptive prescriptive" },
  { title: "MLP", section: "Semester 5", path: "/sem5", hash: "mlp", text: "machine learning practice bscs2008 scikit-learn feature engineering cross validation hyperparameter tuning pipeline" },

  { title: "Semester 6 Study Planner", path: "/sem6", hash: "overview", text: "sem6 semester 6 study planner mad2 modern application development vue tools in data science tds intro deep learning generative ai pytorch transformers" },
  { title: "MAD2", section: "Semester 6", path: "/sem6", hash: "mad2", text: "modern application development 2 bscs2006 vue spa state pinia api full stack frontend" },
  { title: "TDS", section: "Semester 6", path: "/sem6", hash: "tds", text: "tools in data science bsse2002 git github actions docker streamlit pandas plotly scraping apis" },
  { title: "Intro DL/GenAI", section: "Semester 6", path: "/sem6", hash: "introdl", text: "introduction deep learning generative ai bsda2001 neural networks backpropagation cnn rnn transformers attention diffusion" },

  { title: "Semester 7 Study Planner", path: "/sem7", hash: "overview", text: "sem7 semester 7 study planner mad2 project mlp project java programming concepts capstone deployment" },
  { title: "MAD2 Project", section: "Semester 7", path: "/sem7", hash: "mad2-proj", text: "modern application development 2 project bscs2006p vue app deployment scope rubric" },
  { title: "MLP Project", section: "Semester 7", path: "/sem7", hash: "mlp-proj", text: "machine learning practice project bscs2008p end to end ml mlflow wandb dvc pipeline" },
  { title: "Java", section: "Semester 7", path: "/sem7", hash: "java", text: "programming concepts in java bscs2005 oop classes objects inheritance interfaces generics collections jvm" },

  { title: "Semester 8 Study Planner", path: "/sem8", hash: "overview", text: "sem8 semester 8 study planner deep learning generative ai project capstone rag fine tuning diffusion llm" },
  { title: "DL/GenAI Capstone Project", section: "Semester 8", path: "/sem8", hash: "dl-proj", text: "deep learning generative ai project bsda2001p capstone rag fine tuning diffusion llm transformers huggingface evaluation viva report" },
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
