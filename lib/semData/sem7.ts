import type { Subject } from "./types";

export const SUBJECTS: Subject[] = [
  {
    id: "mad2-proj",
    code: "BSCS2006P",
    name: "Modern Application Development II - Project",
    short: "MAD2 Project",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2006P.html",
    credits: 4,
    blurb:
      "Build a full multi-user web app on the MAD2 stack: Flask/Flask-RESTful on the backend, Vue.js (with Vue Router and Vuex/Pinia) on the frontend, plus Redis for caching, Celery for background jobs, and JWT or token auth for security. The 12 weeks are milestones, not lectures — you ship a working app, a demo video, and a written report.",
    weeks: [
      {
        n: 1,
        topic: "Problem Statement and Requirements",
        focus:
          "Pick a problem worth solving and write down what the system must actually do.",
        concepts: [
          "Choosing a problem with two clear user roles (e.g., admin vs user, manager vs employee)",
          "Functional vs non-functional requirements; must-have vs nice-to-have",
          "User stories in the 'as a <role> I want <goal> so that <reason>' form",
          "Scope control: cutting features so the app can actually be finished",
        ],
        practice:
          "Write a 1-page problem statement, 8-12 user stories, and a rough wireframe (pen, Figma, or Excalidraw). Commit it to a fresh Git repo as docs/requirements.md.",
      },
      {
        n: 2,
        topic: "Data Model and API Design",
        focus: "Translate requirements into tables and HTTP endpoints.",
        concepts: [
          "ER diagram and SQLAlchemy model classes",
          "Normalization to 3NF; foreign keys and cascade rules",
          "REST resource naming, HTTP verbs, status codes, idempotency",
          "Designing request/response JSON shapes before writing code",
        ],
        practice:
          "Draw the ER diagram, define all SQLAlchemy models, and write an OpenAPI/Swagger sketch (or a plain Markdown table) of every endpoint with sample payloads.",
      },
      {
        n: 3,
        topic: "Backend Scaffold with Flask",
        focus: "Stand up the API skeleton and wire the database.",
        concepts: [
          "Flask app factory, Blueprints, configuration objects",
          "Flask-RESTful resources or vanilla view functions",
          "Flask-SQLAlchemy session lifecycle and migrations (Alembic)",
          "CORS handling for the future Vue client",
        ],
        practice:
          "Implement CRUD for one core resource end-to-end. Seed the DB with a fixtures script. Verify every endpoint with curl or Postman.",
      },
      {
        n: 4,
        topic: "Authentication and Authorization",
        focus: "Lock the API down with tokens and roles.",
        concepts: [
          "Password hashing with bcrypt or Werkzeug security helpers",
          "Token-based auth: JWT vs Flask-Security-Too vs simple session tokens",
          "Role-based access control; protecting routes with decorators",
          "Refresh tokens, logout, and token expiry",
        ],
        practice:
          "Add /register, /login, /logout, and a /me endpoint. Gate admin-only routes behind a role decorator. Test with two different users in Postman.",
      },
      {
        n: 5,
        topic: "Frontend Scaffold with Vue.js",
        focus: "Bootstrap the SPA and connect it to the API.",
        concepts: [
          "Vue 3 CLI / Vite project setup; single-file components",
          "Vue Router: routes, nested routes, route guards",
          "Composition API basics: ref, reactive, computed, watch",
          "Calling the Flask API with fetch or axios; handling CORS in dev",
        ],
        practice:
          "Build the login page, a protected dashboard, and one list/detail view backed by the API. Store the token in localStorage and attach it to every request.",
      },
      {
        n: 6,
        topic: "State Management and UI Polish",
        focus: "Centralize app state and make the UI feel like an app, not a demo.",
        concepts: [
          "Vuex or Pinia store: state, getters, actions, mutations",
          "Bootstrap 5 or Tailwind for a consistent visual language",
          "Form validation, loading states, error toasts, empty states",
          "Responsive layout for mobile and tablet widths",
        ],
        practice:
          "Move auth and resource lists into the store. Add a global loading bar and an error toast component. Test the app on a phone-sized viewport.",
      },
      {
        n: 7,
        topic: "Background Jobs with Celery",
        focus: "Push slow work off the request thread.",
        concepts: [
          "Celery worker, broker (Redis), and result backend",
          "Async tasks vs scheduled tasks (Celery Beat)",
          "Idempotent tasks, retries, and failure handling",
          "Sending email via Flask-Mail or SMTP from a task",
        ],
        practice:
          "Add a daily reminder email job and a monthly report job. Trigger one task on-demand from an API endpoint and watch it run in the worker logs.",
      },
      {
        n: 8,
        topic: "Caching with Redis",
        focus: "Make hot endpoints fast and reduce DB load.",
        concepts: [
          "Cache-aside pattern: read-through vs write-through",
          "Flask-Caching with a Redis backend; per-route caching",
          "Cache invalidation on writes; TTLs and stale-while-revalidate",
          "Measuring before/after latency with ab or wrk",
        ],
        practice:
          "Cache the two slowest read endpoints. Benchmark with ab -n 1000 -c 20 and screenshot the latency drop for the report.",
      },
      {
        n: 9,
        topic: "Reports, Exports, and File Handling",
        focus: "Generate user-facing artifacts: CSVs, PDFs, charts.",
        concepts: [
          "CSV export with the csv module; streaming responses for large files",
          "PDF generation with WeasyPrint or ReportLab",
          "Chart rendering on the client with Chart.js or ApexCharts",
          "Triggering exports as Celery jobs and emailing the link",
        ],
        practice:
          "Add a 'Download monthly report' button that enqueues a Celery job, builds a PDF, and emails it. Add a dashboard chart of the same data.",
      },
      {
        n: 10,
        topic: "Testing and Hardening",
        focus: "Catch the bugs before the evaluator does.",
        concepts: [
          "Backend tests with pytest; using a test DB and fixtures",
          "Frontend component tests with Vitest or Cypress component tests",
          "End-to-end tests with Cypress or Playwright",
          "Input validation, SQL injection avoidance, and XSS hygiene",
        ],
        practice:
          "Write at least 20 backend tests and 5 end-to-end happy-path tests. Run the OWASP ZAP baseline scan against your local app.",
      },
      {
        n: 11,
        topic: "Deployment",
        focus: "Get the app onto the public internet.",
        concepts: [
          "Gunicorn behind Nginx; or a single-container deploy on Render/Fly.io",
          "Environment variables and .env handling; never committing secrets",
          "Building the Vue app and serving it as static files",
          "Persistent Redis and SQLite/Postgres in production",
        ],
        practice:
          "Deploy to Render, Fly.io, or a free-tier VM. Record the live URL. Confirm Celery worker and Beat are running in production.",
      },
      {
        n: 12,
        topic: "Demo Video, Report, and Viva Prep",
        focus: "Package the work so it gets the marks it deserves.",
        concepts: [
          "Report structure: problem, design, schema, endpoints, screenshots, limitations",
          "Demo video: 5-8 minutes, narrated, every feature touched",
          "GitHub README with setup steps a stranger can follow",
          "Anticipating viva questions: 'why this design?', 'what would you change?'",
        ],
        practice:
          "Record the demo video in one take after a dry run. Write the report. Push a tagged release. Do a mock viva with a friend.",
      },
    ],
    resources: [
      {
        name: "Flask Documentation",
        kind: "Primary docs",
        note: "App factory, blueprints, request lifecycle — bookmark the 'Patterns' section.",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "Vue.js 3 Guide",
        kind: "Primary docs",
        note: "Composition API, reactivity, and the official router and Pinia guides.",
        url: "https://vuejs.org/guide/introduction.html",
      },
      {
        name: "Celery Documentation",
        kind: "Primary docs",
        note: "First Steps and User Guide cover everything the project needs.",
        url: "https://docs.celeryq.dev/",
      },
      {
        name: "Render — Deploy a Flask App",
        kind: "Deployment guide",
        note: "Free tier is enough for the demo; supports a Redis instance and worker services.",
        url: "https://render.com/docs/deploy-flask",
      },
      {
        name: "Cypress Documentation",
        kind: "Testing tool",
        note: "End-to-end tests that record video — gold for the demo and the viva.",
        url: "https://docs.cypress.io/",
      },
      {
        name: "MAD2 Student Repos on GitHub",
        kind: "Reference projects",
        note: "Search 'IITM MAD2 project' on GitHub to see how past batches structured their code; read, don't copy.",
        url: "https://github.com/search?q=iitm+mad2+project&type=repositories",
      },
    ],
    projects: [
      "Household Services app: customers book plumbers/electricians; admin approves professionals; service requests, ratings, monthly summary emails.",
      "Library Management System: users borrow e-books, librarians manage inventory, Celery jobs send return reminders and overdue notices.",
      "Influencer-Sponsor platform: sponsors post campaigns, influencers apply, admin moderates, dashboards show campaign performance.",
      "Grocery store with categories, cart, and checkout: store manager creates products and approves price changes, customers order, daily sales report PDF.",
      "Quiz master app: admin builds chapters/quizzes, users attempt with a timer, scores tracked, monthly performance email.",
    ],
    exam: [
      "There is no end-term written exam — your marks come from milestones, the demo video, the report, and the viva. Treat each milestone like a deadline that exists.",
      "Viva tips: be ready to open any file in your repo and explain it. The fastest way to fail is saying 'I copied that from a tutorial'.",
      "Demo video: record on a fresh DB, walk through every user role, and explicitly point to Celery, Redis, and the auth flow when they happen.",
      "Report rubric usually rewards a clean ER diagram, a clear API table, and screenshots — not prose. Cut the filler.",
      "Common pitfall: leaving Celery and Redis on localhost only and not getting them running in deployment. Test the deployed worker before submission.",
      "Common pitfall: storing the JWT in localStorage but never refreshing or expiring it — examiners ask about this.",
    ],
  },
  {
    id: "mlp-proj",
    code: "BSCS2008P",
    name: "Machine Learning Practice - Project",
    short: "MLP Project",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2008P.html",
    credits: 4,
    blurb:
      "An end-to-end ML project on a real Kaggle dataset, judged on the five components every ML system has: data, model, cost function, optimization, evaluation. The 12 weeks are milestones — by the end you have a notebook, a small report, a tracked set of experiments, and (often) a deployed inference endpoint. A viva with an industry expert closes the course.",
    weeks: [
      {
        n: 1,
        topic: "Problem Framing",
        focus:
          "Turn a vague Kaggle blurb into a precise ML problem statement.",
        concepts: [
          "Supervised vs unsupervised vs ranking vs time-series framing",
          "Choosing the target variable and the prediction unit",
          "Picking a primary metric (RMSE, AUC, F1, MAP@k) and a secondary one",
          "Defining what 'good enough' looks like before any modelling",
        ],
        practice:
          "Pick a Kaggle dataset (Titanic-tier is too small — go for House Prices, Telco Churn, NYC Taxi, or a Playground Series). Write a 1-page problem statement and commit it.",
      },
      {
        n: 2,
        topic: "Data Acquisition and EDA",
        focus: "Get the data, look at it honestly, and write down what you see.",
        concepts: [
          "Kaggle API for reproducible downloads",
          "Pandas: dtypes, missingness, cardinality, duplicates",
          "Univariate and bivariate plots; target-vs-feature relationships",
          "Data leakage checks: anything that wouldn't exist at prediction time",
        ],
        practice:
          "Produce an EDA notebook with at least 15 plots and a written 'things I learned' list. Identify and flag at least one leakage risk.",
      },
      {
        n: 3,
        topic: "Validation Strategy",
        focus: "Decide how you will measure progress, before you tune anything.",
        concepts: [
          "Train/val/test split vs k-fold CV vs stratified k-fold",
          "Time-series splits and group splits when rows are not i.i.d.",
          "Holdout that mirrors the Kaggle test set; out-of-fold predictions",
          "Why a public leaderboard score is not a validation score",
        ],
        practice:
          "Pick and justify a CV scheme. Write a reusable cross_validate() helper that returns OOF predictions and the chosen metric.",
      },
      {
        n: 4,
        topic: "Data Cleaning and Preprocessing",
        focus: "Build a preprocessing pipeline that runs the same on train and test.",
        concepts: [
          "sklearn Pipeline and ColumnTransformer",
          "Numeric imputation (median, KNN), categorical imputation",
          "Scaling: StandardScaler, RobustScaler, when none is needed",
          "Encoding: one-hot, ordinal, target/leave-one-out (with CV folds)",
        ],
        practice:
          "Wrap every preprocessing step in a single sklearn Pipeline object. Serialize it with joblib. Confirm fit_transform on train and transform on test give consistent shapes.",
      },
      {
        n: 5,
        topic: "Baseline Models",
        focus: "Establish the dumb-but-fair benchmark every later model must beat.",
        concepts: [
          "Dummy classifier/regressor: the mean/mode/stratified baseline",
          "Linear and logistic regression as the first 'real' baseline",
          "Reporting CV score and standard deviation, not a single number",
          "Why a strong baseline often beats a weak boosted tree",
        ],
        practice:
          "Score at least three baselines (Dummy, Linear, kNN or a default Random Forest) under the chosen CV scheme. Log the scores in a results.md table.",
      },
      {
        n: 6,
        topic: "Feature Engineering",
        focus: "Squeeze signal out of the columns you have.",
        concepts: [
          "Interaction features, ratios, polynomial features",
          "Date/time decomposition: year, month, dayofweek, is_weekend",
          "Text features: TF-IDF, sentence embeddings",
          "Target encoding done safely inside CV folds",
        ],
        practice:
          "Add at least five engineered features. Measure each one's marginal CV lift. Drop the ones that don't help — engineering ablations belong in the report.",
      },
      {
        n: 7,
        topic: "Gradient Boosting and Strong Models",
        focus: "Move to the models that actually win on tabular data.",
        concepts: [
          "XGBoost, LightGBM, CatBoost — what each is best at",
          "Key hyperparameters: learning_rate, num_leaves/max_depth, n_estimators, regularization",
          "Early stopping on a validation fold",
          "Handling categorical features natively (LightGBM, CatBoost)",
        ],
        practice:
          "Train LightGBM with early stopping under the CV scheme. Beat every week-5 baseline. Save OOF predictions and the trained models.",
      },
      {
        n: 8,
        topic: "Hyperparameter Tuning and Experiment Tracking",
        focus: "Search the space without losing track of what you tried.",
        concepts: [
          "Random search vs Bayesian search (Optuna)",
          "Defining a clean search space with priors that make sense",
          "MLflow or Weights & Biases: logging params, metrics, artifacts",
          "Reproducibility: seeds, requirements.txt, data versioning",
        ],
        practice:
          "Run an Optuna study of 50+ trials with MLflow or W&B tracking. Pin the best config in a YAML file checked into the repo.",
      },
      {
        n: 9,
        topic: "Error Analysis and Iteration",
        focus: "Look at the rows you're getting wrong and fix the cause.",
        concepts: [
          "Confusion matrices and per-class precision/recall (classification)",
          "Residual plots and worst-K error inspection (regression)",
          "Slicing errors by subgroup (region, segment, time) to find bias",
          "Deciding when to collect more data vs add a feature vs change the model",
        ],
        practice:
          "Write an error-analysis notebook. Pick the worst 50 predictions, label why each is wrong, and ship one fix that addresses the dominant failure mode.",
      },
      {
        n: 10,
        topic: "Ensembling and Final Model",
        focus: "Combine your best models without overfitting the leaderboard.",
        concepts: [
          "Simple averaging and rank averaging",
          "Stacking with a linear meta-learner on OOF predictions",
          "Blending vs stacking — when each is safer",
          "Choosing the final model based on CV, not the public leaderboard",
        ],
        practice:
          "Stack your two best models with logistic/ridge on OOF predictions. Lock the final submission. Note the public vs private LB gap if available.",
      },
      {
        n: 11,
        topic: "Deployment and Inference",
        focus: "Turn the notebook into something a user can hit.",
        concepts: [
          "Saving the full Pipeline (preprocess + model) as a single joblib artifact",
          "FastAPI or Flask endpoint wrapping the predict call",
          "Streamlit or Gradio app for an interactive demo",
          "Containerizing with Docker and deploying free-tier (HF Spaces, Render)",
        ],
        practice:
          "Ship a Streamlit or Gradio demo on Hugging Face Spaces or Render. Add a /predict endpoint and a small request/response example to the README.",
      },
      {
        n: 12,
        topic: "Report, Reproducibility, and Viva Prep",
        focus: "Make the work explainable in 10 minutes to a stranger.",
        concepts: [
          "Report structure: problem, data, validation, baselines, final model, errors, deployment",
          "Reproducibility checklist: pinned deps, seed, data version, one-command run",
          "Model card: intended use, limitations, fairness, training data summary",
          "Viva: ready to defend every choice with a number, not a vibe",
        ],
        practice:
          "Write the report (5-8 pages). Add a 'make reproduce' or 'python run_all.py' entry point. Do a mock viva and time the explanation of your validation scheme.",
      },
    ],
    resources: [
      {
        name: "Kaggle Learn — Intermediate ML and Feature Engineering",
        kind: "Free course",
        note: "Short, hands-on, exactly the level this project lives at.",
        url: "https://www.kaggle.com/learn",
      },
      {
        name: "scikit-learn User Guide",
        kind: "Primary docs",
        note: "Pipelines, model_selection, and metrics chapters are mandatory reading.",
        url: "https://scikit-learn.org/stable/user_guide.html",
      },
      {
        name: "LightGBM and XGBoost Documentation",
        kind: "Primary docs",
        note: "Parameter tuning guide in each is the fastest path to a strong model.",
        url: "https://lightgbm.readthedocs.io/",
      },
      {
        name: "MLflow Documentation",
        kind: "Tool",
        note: "Tracking, models, and registry — minimal setup, huge payoff at viva time.",
        url: "https://mlflow.org/docs/latest/index.html",
      },
      {
        name: "Designing Machine Learning Systems — Chip Huyen",
        kind: "Book",
        note: "Best single book on the framing, validation, and deployment side of the project.",
        url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
      },
      {
        name: "Kaggle Competition Write-ups",
        kind: "Reference",
        note: "Read 1st-place solutions for any tabular comp; they show how pros structure CV and ensembling.",
        url: "https://www.kaggle.com/competitions",
      },
    ],
    projects: [
      "House price regression (Kaggle Ames): full pipeline, target log-transform, LightGBM + ridge stack, Streamlit demo.",
      "Telco customer churn classification with explainability: SHAP plots in the report and a Gradio demo on Hugging Face Spaces.",
      "Credit card fraud detection with heavy class imbalance: focus on PR-AUC, threshold tuning, and cost-sensitive evaluation.",
      "NYC taxi trip duration regression: time-aware CV, geospatial features, deployed FastAPI endpoint with a /predict route.",
      "Multi-class product categorization from text (Mercari or e-commerce dataset): TF-IDF + LightGBM baseline, then a small sentence-transformer embedding model.",
    ],
    exam: [
      "There is no written exam — the viva with an industry expert is the assessment. Treat it like an ML interview.",
      "Be able to defend your validation scheme in one minute: 'I used 5-fold stratified CV because…'. This is the most common viva question.",
      "Know your numbers cold: baseline score, final CV score, public LB, private LB (if applicable), and the gap between them.",
      "Have one clean failure analysis ready: 'the model is worst on segment X because Y, and here's what I'd try next'.",
      "Pitfall: tuning hyperparameters before fixing the validation split — you'll overfit your CV and not notice.",
      "Pitfall: a notebook that doesn't re-run top-to-bottom. Examiners do try this. Add a 'Restart and Run All' check before submission.",
    ],
  },
  {
    id: "java",
    code: "BSCS2005",
    name: "Programming Concepts using Java",
    short: "Java",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2005.html",
    credits: 4,
    blurb:
      "A serious second pass at object-oriented programming, taught in Java by Madhavan Mukund. The first half is OOP done properly — classes, inheritance, polymorphism, abstract types. The second half is the parts that make Java distinctive: generics and collections, I/O and serialization, exceptions, and concurrent programming. Two invigilated quizzes plus an end-term.",
    weeks: [
      {
        n: 1,
        topic: "Java Basics and Classes",
        focus: "From Python/C to Java: types, classes, and the JVM model.",
        concepts: [
          "Primitive types vs reference types; autoboxing",
          "Defining classes: fields, constructors, methods, this",
          "Static vs instance members; main and the JVM entry point",
          "Compilation model: javac, .class files, classpath",
        ],
        practice:
          "Install JDK 21 and IntelliJ IDEA Community. Write a Rational/Complex number class with arithmetic methods and a toString. Run it from the command line and from the IDE.",
      },
      {
        n: 2,
        topic: "Inheritance and Subtyping",
        focus: "Extending classes the right way.",
        concepts: [
          "extends, super, constructor chaining",
          "Method overriding vs overloading; the @Override contract",
          "Liskov substitution: when subclassing is and isn't safe",
          "Object class: equals, hashCode, toString defaults",
        ],
        practice:
          "Build a Shape hierarchy (Circle, Rectangle, Triangle). Override area() correctly. Write equals and hashCode by the contract — verify with a HashSet.",
      },
      {
        n: 3,
        topic: "Polymorphism and Dynamic Dispatch",
        focus: "Why a single method call can run different code.",
        concepts: [
          "Static type vs dynamic type",
          "Virtual method invocation; how the JVM resolves calls",
          "Upcasting and downcasting; instanceof and pattern matching (Java 21)",
          "final classes and methods; sealed types",
        ],
        practice:
          "Write a method that takes a List<Shape> and totals the area. Add a new shape without changing the method. Trace which area() runs and why.",
      },
      {
        n: 4,
        topic: "Abstract Classes and Interfaces",
        focus: "Designing with types, not just classes.",
        concepts: [
          "abstract classes vs interfaces; when to use each",
          "Multiple interface inheritance; default and static methods on interfaces",
          "Marker interfaces; the Comparable and Comparator interfaces",
          "Functional interfaces and lambda expressions",
        ],
        practice:
          "Define a Drawable interface and a Movable interface. Make Shape implement Drawable. Sort a list of Shapes by area using a Comparator lambda.",
      },
      {
        n: 5,
        topic: "Collections and Iterators",
        focus: "The data structures Java gives you out of the box.",
        concepts: [
          "Collection hierarchy: List, Set, Map, Queue, Deque",
          "ArrayList vs LinkedList; HashMap vs TreeMap; HashSet vs TreeSet",
          "Iterable, Iterator, and the enhanced for-loop",
          "fail-fast iterators and ConcurrentModificationException",
        ],
        practice:
          "Solve 10 small problems using each of ArrayList, HashMap, HashSet, and TreeMap. Implement your own LinkedList that supports Iterable<T>.",
      },
      {
        n: 6,
        topic: "Generics and Type Safety",
        focus: "Writing code that works for many types without sacrificing safety.",
        concepts: [
          "Generic classes and methods",
          "Bounded type parameters: <T extends Comparable<T>>",
          "Wildcards: ? extends T, ? super T; PECS rule",
          "Type erasure and its consequences",
        ],
        practice:
          "Write a generic Stack<T> and a generic max(Collection<? extends T>, Comparator<? super T>). Try to break type safety with raw types — see the warnings.",
      },
      {
        n: 7,
        topic: "Packages, Cloning, and Object Identity",
        focus: "Organizing code and copying objects properly.",
        concepts: [
          "Packages, imports, and access modifiers (public, protected, package, private)",
          "Shallow vs deep cloning; the Cloneable interface and its problems",
          "Copy constructors as a cleaner alternative to clone()",
          "Immutability: final fields, defensive copies, immutable collections",
        ],
        practice:
          "Take a class that holds a List inside. Implement both a clone() and a copy constructor. Show that the shallow clone aliases the list and the deep copy does not.",
      },
      {
        n: 8,
        topic: "I/O and Serialization",
        focus: "Reading and writing data, in text and in binary.",
        concepts: [
          "Streams vs Readers/Writers; buffered I/O",
          "java.nio.file: Path, Files, try-with-resources",
          "Serializable, transient, serialVersionUID",
          "JSON serialization with Jackson or Gson",
        ],
        practice:
          "Read a CSV with BufferedReader, parse into objects, serialize the list to a binary file and back, and to JSON with Jackson. Diff the two outputs.",
      },
      {
        n: 9,
        topic: "Exception Handling",
        focus: "Handling failure without hiding it.",
        concepts: [
          "Checked vs unchecked exceptions; the Throwable hierarchy",
          "try/catch/finally and try-with-resources",
          "Custom exception classes; chaining causes",
          "When to throw, when to wrap, when to let it bubble up",
        ],
        practice:
          "Take last week's CSV reader and harden it: handle file-not-found, malformed rows, and I/O errors. Write a custom CsvFormatException with a cause.",
      },
      {
        n: 10,
        topic: "Threads and Synchronization",
        focus: "The mechanics of running code in parallel.",
        concepts: [
          "Thread class and Runnable; start() vs run()",
          "Race conditions and the synchronized keyword",
          "volatile, happens-before, and the Java memory model (intuition)",
          "Object monitor methods: wait, notify, notifyAll",
        ],
        practice:
          "Write a counter incremented by 10 threads, 100k times each. Show the unsynchronized version gives the wrong answer; fix it with synchronized and with AtomicInteger.",
      },
      {
        n: 11,
        topic: "Concurrent Programming with java.util.concurrent",
        focus: "The high-level tools you should actually use.",
        concepts: [
          "ExecutorService and thread pools",
          "Callable, Future, CompletableFuture",
          "Concurrent collections: ConcurrentHashMap, BlockingQueue",
          "Locks, ReentrantLock, ReadWriteLock; semaphores and latches",
        ],
        practice:
          "Build a small producer-consumer with a BlockingQueue and 3 producers / 2 consumers. Convert a sequential web-scrape into parallel calls with CompletableFuture.allOf.",
      },
      {
        n: 12,
        topic: "Putting It Together and Revision",
        focus: "Tie OOP, generics, I/O, exceptions, and concurrency into one project.",
        concepts: [
          "Layered design: model, service, I/O",
          "Designing for testability with interfaces and dependency injection",
          "Unit testing with JUnit 5",
          "Common JVM gotchas: null, equals/hashCode mismatch, leaked threads",
        ],
        practice:
          "Build a multi-threaded log-file analyzer: reads N files in parallel, parses lines into objects, aggregates with a ConcurrentHashMap, writes a JSON report, with JUnit tests covering each layer.",
      },
    ],
    resources: [
      {
        name: "Programming in Java — Madhavan Mukund (NPTEL/YouTube)",
        kind: "Lecture videos",
        note: "The instructor's own playlist; matches the syllabus 1:1.",
        url: "https://www.youtube.com/playlist?list=PLZ2ps__7DhBaXTORd_OKXZRXCMh3dGnBZ",
      },
      {
        name: "Effective Java — Joshua Bloch (3rd edition)",
        kind: "Reference book",
        note: "Short, sharp items on equals/hashCode, generics, concurrency. The book every Java dev cites.",
      },
      {
        name: "Head First Java — Sierra & Bates",
        kind: "Beginner book",
        note: "Friendly, visual intro to OOP and the language; great if Java feels heavy at first.",
      },
      {
        name: "Oracle Java Tutorials",
        kind: "Primary docs",
        note: "Free and authoritative; the Collections, Generics, Concurrency, and I/O trails map onto weeks 5-11.",
        url: "https://docs.oracle.com/javase/tutorial/",
      },
      {
        name: "Baeldung",
        kind: "Tutorials",
        note: "Short focused articles on every Java topic — best 'how do I do X in Java' reference.",
        url: "https://www.baeldung.com/",
      },
      {
        name: "Java Concurrency in Practice — Brian Goetz",
        kind: "Reference book",
        note: "The canonical book for weeks 10-11; older but still correct on the memory model.",
      },
    ],
    projects: [
      "Multi-threaded log analyzer: parses Apache/Nginx logs in parallel, aggregates by IP and URL, writes a JSON report.",
      "Mini banking system with accounts, transfers, and a transaction log — uses synchronized or locks to keep balances consistent under concurrent transfers.",
      "Generic in-memory key-value store with TTL, backed by a ConcurrentHashMap and a scheduled cleanup thread.",
      "CSV-to-JSON converter that streams large files with NIO, handles malformed rows via custom exceptions, and is unit-tested with JUnit 5.",
      "Small chat server with a fixed thread pool, one client handler per socket, and a BlockingQueue for broadcast messages.",
    ],
    exam: [
      "Two invigilated quizzes and an end-term — they reward writing actual Java by hand. Practice on paper, not just in the IDE.",
      "OOP weeks (1-4) feed every later week — if inheritance and polymorphism feel fuzzy, redo them before moving on.",
      "Drill equals/hashCode, Comparable/Comparator, and generics with wildcards — these show up in quizzes as 'spot the bug' questions.",
      "For concurrency questions, be able to explain why an unsynchronized counter loses updates, not just that it does.",
      "Pitfall: confusing == with .equals() for Strings and wrappers; missing @Override and silently overloading instead of overriding.",
      "Pitfall: catching Exception broadly and swallowing it — examiners specifically probe exception design questions.",
    ],
  },
];
