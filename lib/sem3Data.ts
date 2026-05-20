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
};

export const SUBJECTS: Subject[] = [
  {
    id: "dbms",
    code: "BSCS2001",
    name: "Database Management Systems",
    short: "DBMS",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2001.html",
    credits: 4,
    blurb:
      "How data is modelled, queried, stored, indexed, and kept consistent. Two halves: SQL and design (weeks 1–7), then internals — storage, indexing, transactions, recovery, optimization (weeks 8–12). Both halves are tested heavily.",
    weeks: [
      {
        n: 1,
        topic: "Course Overview",
        focus:
          "Why databases exist: the drawbacks of flat file systems and what a DBMS adds.",
        concepts: [
          "Drawbacks of file processing: redundancy, inconsistency, poor concurrency, weak security",
          "Three-schema architecture: physical, logical, view levels",
          "Schema vs instance; physical vs logical data independence",
          "DBMS components: storage manager, query processor; roles of the DBA",
        ],
        practice:
          "Install PostgreSQL locally and connect with a client (psql or DBeaver). Write a one-page file-system vs DBMS comparison.",
      },
      {
        n: 2,
        topic: "Relational Model and Basic SQL",
        focus: "The relational model and the SELECT/INSERT/UPDATE/DELETE core.",
        concepts: [
          "Relation, tuple, attribute, domain, degree, cardinality",
          "Keys: super key, candidate key, primary key, foreign key",
          "DDL (CREATE/ALTER/DROP) and basic DML; WHERE, ORDER BY, DISTINCT",
          "Three-valued logic and NULL handling",
        ],
        practice:
          "Create a students/courses/enrollments schema. Write 15–20 basic queries. Do SQLZoo 'SELECT basics' through 'SELECT within SELECT'.",
      },
      {
        n: 3,
        topic: "Intermediate and Advanced SQL",
        focus: "Joins, aggregation, subqueries, views, triggers.",
        concepts: [
          "Inner / outer / self / cross joins and their NULL semantics",
          "Aggregates, GROUP BY, HAVING; WHERE vs HAVING execution order",
          "Correlated vs uncorrelated subqueries; IN vs EXISTS",
          "Set operations, views, triggers, GRANT/REVOKE",
        ],
        practice:
          "Solve 25+ join and aggregation problems. Work the HackerRank SQL track and LeetCode SQL 50.",
      },
      {
        n: 4,
        topic: "Relational Query Languages and Database Design",
        focus: "Relational algebra/calculus and ER modelling.",
        concepts: [
          "Relational algebra: σ, π, ∪, −, ×, ρ, joins, division",
          "Tuple and domain relational calculus; expressive equivalence",
          "ER model: entities, relationships, cardinality, weak entities",
          "ER-to-relational mapping",
        ],
        practice:
          "Draw ER diagrams for library, hospital, e-commerce; convert each to schemas. Write 15 relational-algebra expressions with SQL equivalents.",
      },
      {
        n: 5,
        topic: "Functional Dependency and Normal Forms",
        focus: "Functional dependencies, closures, candidate keys.",
        concepts: [
          "Functional dependencies and Armstrong's axioms",
          "Attribute closure (X⁺) and computing all candidate keys",
          "Equivalence of FD sets; minimal / canonical cover",
          "1NF, 2NF, 3NF and the dependencies they remove",
        ],
        practice:
          "Work 20 closure and candidate-key problems. Practice deriving minimal covers step by step.",
      },
      {
        n: 6,
        topic: "Functional Dependency and Normal Forms (cont.)",
        focus: "BCNF, decomposition properties, higher normal forms.",
        concepts: [
          "BCNF and the trade-off vs 3NF",
          "Lossless-join decomposition and dependency preservation",
          "Multivalued dependencies and 4NF; join dependencies and 5NF (overview)",
          "Identifying the highest normal form of a relation",
        ],
        practice:
          "Take 8–10 unnormalized relations, decompose each to BCNF, and verify lossless join + dependency preservation.",
      },
      {
        n: 7,
        topic: "Application Development",
        focus: "Connecting application code to a database safely.",
        concepts: [
          "Embedded vs dynamic SQL; JDBC / ODBC; API-based access",
          "Stored procedures, functions, cursors",
          "Two-tier vs three-tier architectures",
          "SQL injection and parameterized queries",
        ],
        practice:
          "Build a CRUD app (Python + psycopg2) over your week-2 schema. Write one stored procedure and call it from code.",
      },
      {
        n: 8,
        topic: "Storage Management",
        focus: "How data physically lives on disk.",
        concepts: [
          "Storage hierarchy; seek time, rotational latency, transfer time",
          "RAID levels 0/1/5/6/10 and their trade-offs",
          "File and record organization; fixed vs variable length records",
          "Buffer manager and replacement policies (LRU, MRU)",
        ],
        practice:
          "Build a RAID comparison table. Compute disk access times for sample parameters. Sketch a slotted-page layout.",
      },
      {
        n: 9,
        topic: "Indexing and Hashing",
        focus: "Speeding up lookups with index structures.",
        concepts: [
          "Ordered indices: primary/clustering, secondary, dense, sparse",
          "B-tree and B+-tree structure; insertion/deletion with splits and merges",
          "Static and dynamic (extendible) hashing",
          "Multi-key and bitmap indices",
        ],
        practice:
          "Hand-trace 5 sequences of B+-tree insert/delete. Trace an extendible-hashing example through several bucket splits.",
      },
      {
        n: 10,
        topic: "Transactions",
        focus: "Keeping concurrent access correct.",
        concepts: [
          "ACID properties and transaction states",
          "Conflict vs view serializability; precedence graphs",
          "Two-phase locking (basic / strict / rigorous); timestamp ordering",
          "Recoverable, cascadeless, strict schedules; deadlock handling",
        ],
        practice:
          "Classify 10 schedules (serializable? recoverable? cascadeless?) and draw their precedence graphs.",
      },
      {
        n: 11,
        topic: "Backup and Recovery",
        focus: "Surviving crashes without losing or corrupting data.",
        concepts: [
          "Failure classification; log-based recovery",
          "Deferred vs immediate modification; undo/redo",
          "Checkpoints and the ARIES algorithm (analysis, redo, undo)",
          "Shadow paging; remote backup systems",
        ],
        practice:
          "Given a log with checkpoints and a crash point, list the transactions to undo vs redo for 5 scenarios.",
      },
      {
        n: 12,
        topic: "Query Optimization and Conclusion",
        focus: "Choosing a fast plan for a query, then full revision.",
        concepts: [
          "Query processing pipeline; measures of query cost",
          "Join algorithms: nested-loop, block nested-loop, indexed, merge, hash",
          "Equivalence rules; cost-based vs heuristic optimization",
          "Selectivity estimation from statistics",
        ],
        practice:
          "Cost a multi-way join under different algorithms and orderings. Do a timed mock end-term covering all 12 weeks.",
      },
    ],
    resources: [
      {
        name: "Database System Concepts — Silberschatz, Korth, Sudarshan (7th ed.)",
        kind: "Primary textbook",
        note: "The official course text; covers every week. Free slides and exercises at db-book.com.",
        url: "https://www.db-book.com/",
      },
      {
        name: "Database Management Systems — Ramakrishnan & Gehrke",
        kind: "Reference book",
        note: "Strong on storage, indexing, and query processing (weeks 8–12).",
      },
      {
        name: "NPTEL Database Management System",
        kind: "Free course",
        note: "Same instructor lineage as this course — closest match to the syllabus.",
        url: "https://nptel.ac.in/courses/106105175",
      },
      {
        name: "CMU 15-445 Intro to Database Systems",
        kind: "Free course",
        note: "Andy Pavlo's lectures — excellent for storage, transactions, optimization.",
        url: "https://15445.courses.cs.cmu.edu/",
      },
      {
        name: "SQLZoo",
        kind: "SQL practice",
        note: "Best starting point — tutorial-style, browser-based, no setup.",
        url: "https://sqlzoo.net/",
      },
      {
        name: "pgexercises.com",
        kind: "SQL practice",
        note: "PostgreSQL-based, progressively harder, with hints and answers.",
        url: "https://pgexercises.com/",
      },
      {
        name: "LeetCode SQL 50 / Database track",
        kind: "SQL practice",
        note: "Solve Easy then Medium — joins, subqueries, window functions.",
        url: "https://leetcode.com/studyplan/top-sql-50/",
      },
      {
        name: "Gate Smashers — DBMS playlist",
        kind: "YouTube",
        note: "Exam-friendly coverage of FDs, normalization, transactions, indexing.",
      },
      {
        name: "use-the-index-luke.com",
        kind: "Reference",
        note: "Practical, deep explanation of how indexes really work.",
        url: "https://use-the-index-luke.com/",
      },
    ],
    projects: [
      "Library Management System: ER design → BCNF schema → PostgreSQL with views, triggers (auto-update availability), and issue/return stored procedures.",
      "E-commerce Order Database: customers/products/orders/payments/inventory with referential integrity; place orders inside a transaction to demonstrate ACID; benchmark a query with and without an index.",
      "University Course Registration: students/courses/sections/prerequisites; enforce seat limits and prerequisite checks via triggers; build a CRUD app over it.",
      "SQL analytics on the sakila/pagila sample DB: 25–30 analytical queries using joins, grouping, window functions, and CTEs.",
      "Normalization case study: take a deliberately bad spreadsheet-style table and document the full decomposition to BCNF, proving lossless join and dependency preservation.",
    ],
    exam: [
      "Quiz 1 (weeks 1–5/6): SQL fluency, relational algebra, ER modelling, FD closure, candidate keys — mechanical once practiced, so train for speed.",
      "Quiz 2 (middle weeks): normalization to BCNF, storage/RAID, indexing, B+-trees. Rehearse B+-tree and extendible-hashing tracing under time pressure.",
      "End-term (cumulative): weighted toward transactions, recovery, and query optimization — don't under-prepare the last weeks.",
      "Weekly assignments are the best predictor of exam questions — re-solve every one before quizzes.",
      "Pitfall: confusing WHERE vs HAVING, mishandling NULL (NULL = NULL is unknown), candidate key vs superkey.",
      "Pitfall: assuming BCNF decomposition is always dependency-preserving (3NF guarantees it, BCNF does not); mixing up conflict vs view serializability.",
    ],
  },
  {
    id: "pdsa",
    code: "BSCS2002",
    name: "Programming, Data Structures and Algorithms using Python",
    short: "PDSA",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2002.html",
    credits: 4,
    blurb:
      "The algorithmic core of the degree. Build every data structure and algorithm paradigm from scratch in Python, reason about their complexity, and apply them. Theory quizzes plus timed programming assignments — practice both.",
    weeks: [
      {
        n: 1,
        topic: "Python Refresher",
        focus: "Solidify the Python you'll use for every other week.",
        concepts: [
          "Data types, control flow, functions, recursion",
          "Lists, tuples, dictionaries, sets; comprehensions",
          "Classes and objects; basic OOP",
          "File I/O and modules",
        ],
        practice:
          "Solve 10–15 easy LeetCode problems to rebuild fluency. Re-implement a few earlier exercises cleanly.",
      },
      {
        n: 2,
        topic: "Complexity, Notations, Sorting and Searching",
        focus: "Measuring algorithms and the classic sort/search set.",
        concepts: [
          "Big-O, Θ, Ω; time and space complexity; best/average/worst case",
          "Linear search and binary search",
          "Selection, insertion, bubble sort (O(n²))",
          "Merge sort and quicksort (O(n log n))",
        ],
        practice:
          "Implement every sort from scratch. Hand-trace binary search to nail the off-by-one boundaries.",
      },
      {
        n: 3,
        topic: "Arrays, Lists, Stacks, Queues, Hashing",
        focus: "The linear data structures.",
        concepts: [
          "Dynamic arrays; singly/doubly linked lists",
          "Stack and queue; deque",
          "Hash tables; hash functions and collision handling (chaining, open addressing)",
          "When each structure wins — time/space trade-offs",
        ],
        practice:
          "Implement a linked list, stack, queue, and hash table from scratch. Solve stack/queue problems on LeetCode.",
      },
      {
        n: 4,
        topic: "Graph Algorithms",
        focus: "Representing graphs and traversing them.",
        concepts: [
          "Adjacency list vs adjacency matrix",
          "Breadth-first search (BFS)",
          "Depth-first search (DFS); recursion and explicit stack",
          "Connected components; cycle detection",
        ],
        practice:
          "Implement BFS and DFS. Solve LeetCode grid/graph traversal problems (number of islands, flood fill).",
      },
      {
        n: 5,
        topic: "Graph Algorithms (continued)",
        focus: "Ordering and shortest paths.",
        concepts: [
          "Topological sort on a DAG",
          "Dijkstra's shortest path (non-negative weights)",
          "Bellman-Ford (handles negative edges, detects negative cycles)",
          "Shortest paths in DAGs",
        ],
        practice:
          "Implement Dijkstra with a heap and Bellman-Ford. Trace each on a small weighted graph by hand.",
      },
      {
        n: 6,
        topic: "Union-Find, Priority Queue, Heap, BST",
        focus: "Tree-shaped and disjoint-set structures.",
        concepts: [
          "Disjoint-set / union-find with union by rank and path compression",
          "Binary heap; heap operations and heapsort",
          "Priority queue",
          "Binary search tree: search, insert, delete",
        ],
        practice:
          "Implement union-find, a binary heap, and a BST. Note why an unbalanced BST degrades to O(n).",
      },
      {
        n: 7,
        topic: "Balanced Search Trees, Greedy Algorithms",
        focus: "Keeping trees balanced; the greedy paradigm.",
        concepts: [
          "AVL trees; rotations and rebalancing",
          "Greedy strategy and when it is provably optimal",
          "Interval scheduling; Huffman coding",
          "Minimum spanning trees: Prim's and Kruskal's",
        ],
        practice:
          "Trace AVL rotations. Implement Kruskal's MST using your week-6 union-find.",
      },
      {
        n: 8,
        topic: "Divide and Conquer",
        focus: "Split, solve, combine — and analyse the recurrence.",
        concepts: [
          "Recurrence relations; the Master Theorem",
          "Merge sort and quickselect revisited",
          "Closest pair of points",
          "Fast multiplication (Karatsuba)",
        ],
        practice:
          "Solve 10 recurrences with the Master Theorem. Implement quickselect and the closest-pair algorithm.",
      },
      {
        n: 9,
        topic: "Dynamic Programming",
        focus: "Reusing overlapping subproblems.",
        concepts: [
          "Optimal substructure and overlapping subproblems",
          "Memoization (top-down) vs tabulation (bottom-up)",
          "Classic DPs: longest common subsequence, 0/1 knapsack, coin change",
          "Edit distance; matrix chain multiplication",
        ],
        practice:
          "Solve 15+ DP problems on LeetCode. For each, write the recurrence before coding it.",
      },
      {
        n: 10,
        topic: "String / Pattern Matching Algorithms",
        focus: "Finding patterns inside text efficiently.",
        concepts: [
          "Naive pattern matching",
          "Rabin-Karp (rolling hash)",
          "Knuth-Morris-Pratt (KMP) and the failure function",
          "Boyer-Moore; tries",
        ],
        practice:
          "Implement KMP and build its prefix table by hand. Build a trie and use it for autocomplete.",
      },
      {
        n: 11,
        topic: "Network Flows, Linear Programming, Classes of Algorithms",
        focus: "Flow problems and the limits of efficient computation.",
        concepts: [
          "Max-flow / min-cut; Ford-Fulkerson",
          "Linear programming — formulation and intuition",
          "Complexity classes P, NP, NP-complete, NP-hard",
          "Reductions and intractability",
        ],
        practice:
          "Trace Ford-Fulkerson on a small flow network. Read example NP-complete reductions (SAT, vertex cover).",
      },
      {
        n: 12,
        topic: "Summary",
        focus: "Consolidate every paradigm and revise.",
        concepts: [
          "Pick the right paradigm for a problem (greedy vs DP vs D&C)",
          "Complexity comparison across the course's structures",
          "Common pitfalls review",
          "Timed end-term practice",
        ],
        practice:
          "Do a full timed mock. Re-solve every assignment you got wrong during the term.",
      },
    ],
    resources: [
      {
        name: "Introduction to Algorithms — Cormen, Leiserson, Rivest, Stein (CLRS)",
        kind: "Reference textbook",
        note: "The definitive reference. Use it topic-by-topic, not cover-to-cover.",
      },
      {
        name: "Algorithm Design — Kleinberg & Tardos",
        kind: "Reference textbook",
        note: "Outstanding for graph algorithms, greedy, network flow, and NP-completeness.",
      },
      {
        name: "Grokking Algorithms — Aditya Bhargava",
        kind: "Beginner book",
        note: "Friendly, illustrated intro — great first read before CLRS.",
      },
      {
        name: "NPTEL PDSA with Python (Madhavan Mukund)",
        kind: "Free course",
        note: "The course's own lecture series — watch alongside the weekly material.",
        url: "https://nptel.ac.in/courses/106106145",
      },
      {
        name: "Abdul Bari — Algorithms playlist",
        kind: "YouTube",
        note: "Clear visual explanations of sorting, graphs, DP, greedy.",
      },
      {
        name: "NeetCode",
        kind: "YouTube + site",
        note: "Pattern-based problem walkthroughs — excellent for DP and graphs.",
        url: "https://neetcode.io/",
      },
      {
        name: "VisuAlgo",
        kind: "Visualization",
        note: "Animate sorting, BSTs, heaps, graphs — invaluable for tracing.",
        url: "https://visualgo.net/",
      },
      {
        name: "LeetCode",
        kind: "Practice platform",
        note: "Primary problem source. Work topic-wise alongside each week.",
        url: "https://leetcode.com/",
      },
      {
        name: "GeeksforGeeks — DSA",
        kind: "Reference",
        note: "Quick topic notes and Python implementations for every structure.",
      },
    ],
    projects: [
      "Data-structures library: implement linked list, stack, queue, heap, BST, AVL tree, and a graph class from scratch with tests.",
      "Maze solver and pathfinding visualizer: read a grid, then solve and animate BFS, DFS, and Dijkstra.",
      "Autocomplete engine: build a trie over a word list and return ranked completions for a prefix.",
      "Mini route planner: model a city as a weighted graph and find shortest paths with Dijkstra and A*.",
      "Text-diff tool: compute edit distance / longest common subsequence between two files and show the changes.",
    ],
    exam: [
      "Two question types: theory quizzes (trace algorithms, solve recurrences, derive complexity) and timed programming assignments — practice both separately.",
      "For programming assignments, practice coding speed and reading inputs correctly — many marks are lost to format mistakes, not logic.",
      "Master the Master Theorem and complexity analysis — these recur in every quiz.",
      "Hand-trace algorithms (Dijkstra, KMP failure function, AVL rotations) on paper; quizzes ask for intermediate states.",
      "Pitfall: off-by-one errors in binary search; Python recursion-depth limits on deep recursion.",
      "Pitfall: mutable default arguments in Python functions; miscounting nested-loop complexity.",
    ],
  },
  {
    id: "mlf",
    code: "BSCS2004",
    name: "Machine Learning Foundations",
    short: "ML Foundations",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2004.html",
    credits: 4,
    blurb:
      "The mathematics under machine learning — calculus, linear algebra, optimization, and probability — taught as the foundation models are built on. It is a math course; expect derivations, not coding-heavy weeks.",
    weeks: [
      {
        n: 1,
        topic: "Introduction to Machine Learning",
        focus: "The landscape and vocabulary of ML.",
        concepts: [
          "Supervised vs unsupervised learning",
          "Regression vs classification vs clustering",
          "The ML pipeline: data → model → loss → optimization → evaluation",
          "Why each later math topic is needed",
        ],
        practice:
          "Map 5 real problems to ML problem types. Skim the syllabus so you know what math is coming.",
      },
      {
        n: 2,
        topic: "Calculus",
        focus: "The differential calculus optimization relies on.",
        concepts: [
          "Derivatives; partial derivatives",
          "Gradient and the chain rule",
          "Taylor series approximation",
          "Directional derivatives",
        ],
        practice:
          "Compute gradients of multivariate functions by hand. Watch 3Blue1Brown 'Essence of Calculus'.",
      },
      {
        n: 3,
        topic: "Linear Algebra — Least Squares Regression",
        focus: "Vectors, matrices, and regression as projection.",
        concepts: [
          "Vector spaces, span, basis, rank",
          "Matrix operations; column and null space",
          "Projections onto subspaces",
          "Normal equations; least-squares regression",
        ],
        practice:
          "Derive the normal equations. Fit a least-squares line by hand on a tiny dataset.",
      },
      {
        n: 4,
        topic: "Linear Algebra — Eigenvalues and Eigenvectors",
        focus: "The directions a matrix only stretches.",
        concepts: [
          "Characteristic equation; eigenvalues and eigenvectors",
          "Diagonalization",
          "Geometric meaning of eigen-decomposition",
          "Eigenvalues and matrix powers",
        ],
        practice:
          "Compute eigenvalues/eigenvectors for 2×2 and 3×3 matrices. Watch 3Blue1Brown's eigenvectors video.",
      },
      {
        n: 5,
        topic: "Linear Algebra — Symmetric Matrices",
        focus: "The especially well-behaved matrices ML keeps using.",
        concepts: [
          "Spectral theorem for symmetric matrices",
          "Orthogonal diagonalization",
          "Positive definite / semidefinite matrices",
          "Quadratic forms",
        ],
        practice:
          "Classify quadratic forms as positive/negative definite. Verify the spectral theorem on an example.",
      },
      {
        n: 6,
        topic: "SVD and PCA in Image Processing",
        focus: "Decomposing any matrix; dimensionality reduction.",
        concepts: [
          "Singular value decomposition (SVD)",
          "Low-rank approximation",
          "Principal Component Analysis (PCA)",
          "PCA / SVD applied to image compression",
        ],
        practice:
          "Compute the SVD of a small matrix. Run PCA on an image dataset and inspect the top components.",
      },
      {
        n: 7,
        topic: "Unconstrained Optimisation",
        focus: "Finding minima when there are no constraints.",
        concepts: [
          "First- and second-order optimality conditions",
          "Gradient descent",
          "Newton's method",
          "The Hessian and its role",
        ],
        practice:
          "Implement gradient descent on a quadratic and watch it converge. Hand-trace a few Newton steps.",
      },
      {
        n: 8,
        topic: "Convex Sets, Functions, and Optimisation Problems",
        focus: "Why convexity makes optimization tractable.",
        concepts: [
          "Convex sets and convex functions",
          "Tests for convexity (Hessian PSD)",
          "Convex optimization problems",
          "Why local minima are global for convex problems",
        ],
        practice:
          "Prove convexity/non-convexity for several functions. Identify convex problems among examples.",
      },
      {
        n: 9,
        topic: "Constrained Optimisation, Lagrange Multipliers, Logistic Regression",
        focus: "Optimization with constraints; logistic regression as a case study.",
        concepts: [
          "Equality constraints and Lagrange multipliers",
          "Inequality constraints and KKT conditions",
          "Logistic regression framed as an optimization problem",
          "The logistic loss",
        ],
        practice:
          "Solve constrained optimization problems with Lagrange multipliers. Derive the logistic-regression objective.",
      },
      {
        n: 10,
        topic: "Probabilistic Models in Machine Learning",
        focus: "Bringing probability into modelling.",
        concepts: [
          "Probability review: random variables, distributions, expectation",
          "Bayes' theorem; likelihood",
          "Maximum likelihood estimation (MLE)",
          "Examples of probabilistic models",
        ],
        practice:
          "Derive the MLE for a Gaussian's mean and variance. Watch the relevant StatQuest videos.",
      },
      {
        n: 11,
        topic: "Exponential Family of Distributions",
        focus: "The unifying family behind many distributions.",
        concepts: [
          "Exponential-family form",
          "Natural parameters and sufficient statistics",
          "Common members: Bernoulli, Gaussian, Poisson",
          "Why the family matters for ML",
        ],
        practice:
          "Write Bernoulli, Gaussian, and Poisson in exponential-family form and identify each natural parameter.",
      },
      {
        n: 12,
        topic: "Parameter Estimation and Expectation Maximization",
        focus: "Estimating parameters, including with hidden variables.",
        concepts: [
          "MLE and MAP estimation",
          "Latent variables",
          "The Expectation-Maximization (EM) algorithm",
          "Gaussian Mixture Models",
        ],
        practice:
          "Hand-trace EM on a small Gaussian mixture. Do a full timed revision of the course's derivations.",
      },
    ],
    resources: [
      {
        name: "Mathematics for Machine Learning — Deisenroth, Faisal, Ong",
        kind: "Primary textbook",
        note: "Free PDF; matches this course almost section for section.",
        url: "https://mml-book.github.io/",
      },
      {
        name: "Introduction to Statistical Learning (ISLR)",
        kind: "Reference book",
        note: "Free PDF; gentle treatment of regression, classification, and model ideas.",
        url: "https://www.statlearning.com/",
      },
      {
        name: "Pattern Recognition and Machine Learning — Bishop",
        kind: "Reference book",
        note: "Deeper probabilistic view — exponential family, EM, mixture models.",
      },
      {
        name: "3Blue1Brown — Essence of Linear Algebra & Calculus",
        kind: "YouTube",
        note: "Builds the geometric intuition for weeks 2–6. Watch before the lectures.",
        url: "https://www.3blue1brown.com/",
      },
      {
        name: "StatQuest with Josh Starmer",
        kind: "YouTube",
        note: "Clear, slow explanations of probability, MLE, PCA, and EM.",
        url: "https://www.youtube.com/@statquest",
      },
      {
        name: "MIT 18.06 Linear Algebra (Gilbert Strang)",
        kind: "Free course",
        note: "The gold standard for eigenvalues, symmetric matrices, and SVD.",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      },
      {
        name: "Andrew Ng — Machine Learning Specialization",
        kind: "Free course",
        note: "Connects the math to working models — useful context, not a substitute.",
      },
      {
        name: "Khan Academy — Multivariable Calculus & Probability",
        kind: "Free course",
        note: "Best place to patch any prerequisite gaps quickly.",
        url: "https://www.khanacademy.org/",
      },
    ],
    projects: [
      "Linear regression from scratch: implement it via the normal equations and via gradient descent, then compare.",
      "PCA image compressor: run PCA/SVD on a face or digit dataset and reconstruct images from k components.",
      "Logistic regression classifier built by minimizing the logistic loss with gradient descent — no ML library.",
      "Gradient-descent playground: visualize descent paths on convex vs non-convex surfaces and study learning-rate effects.",
      "Gaussian Mixture Model with EM: cluster a 2D dataset and animate the E and M steps.",
    ],
    exam: [
      "This is a math course — quizzes and the end-term reward clean derivations, so practice deriving results, not memorizing them.",
      "Drill numerical work: eigenvalue computation, gradients, matrix operations, MLE setups all appear under time pressure.",
      "Brush up prerequisites early — weak linear algebra or calculus will compound across weeks 2–9.",
      "Re-solve every weekly assignment; end-term questions are usually variations on them.",
      "Pitfall: matrix dimension mismatches and sign errors in gradients — the most common silent mistakes.",
      "Pitfall: confusing covariance with correlation; mis-setting up the MLE objective (forgetting the log, or the negative sign).",
    ],
  },
];
