import type { Subject } from "./types";

export const SUBJECTS: Subject[] = [
  {
    id: "mad1-proj",
    code: "BSCS2003P",
    name: "Modern Application Development I - Project",
    short: "MAD1 Project",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2003P.html",
    credits: 2,
    blurb:
      "The hands-on companion to MAD1. You ship one full Flask + Jinja + SQLite web application end-to-end, evaluated across staged milestones and a viva. The grading rewards working code, clean structure, and being able to explain every line you wrote.",
    weeks: [
      {
        n: 1,
        topic: "Problem Statement and Requirements",
        focus: "Pick a domain, write user stories, define scope and constraints.",
        concepts: [
          "Functional vs non-functional requirements",
          "User personas and core user stories (\"as a X, I want to Y so that Z\")",
          "Scope cuts: what is in for the project, what is explicitly out",
          "Constraints from the rubric: Flask, SQLite, Jinja, no heavy frontend frameworks at this stage",
        ],
        practice:
          "Write a 1-page problem statement + 8–12 user stories. Sketch 3–5 main screens on paper. Open a GitHub repo and a Trello/Notion board to track milestones.",
      },
      {
        n: 2,
        topic: "Data Modelling and ER Design",
        focus: "Translate user stories into entities, attributes, and relationships.",
        concepts: [
          "Entities, attributes, primary keys, foreign keys",
          "1:1, 1:N, M:N relationships and join tables",
          "Normalization up to 3NF for a small app schema",
          "When to denormalize for read-heavy screens",
        ],
        practice:
          "Draw an ER diagram (dbdiagram.io or draw.io). Write the CREATE TABLE statements. Seed 10–20 rows per table so screens are not empty.",
      },
      {
        n: 3,
        topic: "Wireframes and UI Flow",
        focus: "Decide what each page shows before writing HTML.",
        concepts: [
          "Low-fidelity wireframes vs high-fidelity mockups",
          "Navigation flow: which page leads to which",
          "Component thinking with Jinja partials (navbar, card, form, flash messages)",
          "Mobile-first layout basics; Bootstrap grid or plain CSS flex/grid",
        ],
        practice:
          "Wireframe all screens in Excalidraw or Figma. Map each screen to a Flask route. Decide your URL scheme before coding.",
      },
      {
        n: 4,
        topic: "Project Scaffold and Flask App Factory",
        focus: "Stand up the skeleton so every later milestone slots in.",
        concepts: [
          "Project layout: app/, templates/, static/, models.py, routes/, config.py",
          "Flask application factory pattern; Blueprints for modules",
          "Config via environment variables; SECRET_KEY hygiene",
          "Virtualenv, requirements.txt, .gitignore, README skeleton",
        ],
        practice:
          "Create the repo with the chosen layout. Run a single \"hello\" route. Push the first green commit. Add Flask-SQLAlchemy and confirm the DB file is created.",
      },
      {
        n: 5,
        topic: "Models and Database Layer",
        focus: "Implement every table as a SQLAlchemy model.",
        concepts: [
          "Declarative models, columns, relationships (backref, lazy loading)",
          "Migrations with Flask-Migrate (alembic) — at least basic upgrade/downgrade",
          "Seed scripts vs fixtures",
          "Querying patterns: filter_by, join, paginate",
        ],
        practice:
          "Code every model. Write a seed.py that loads sample data. Open a Flask shell and query the DB manually to confirm relationships work.",
      },
      {
        n: 6,
        topic: "Authentication and Authorization",
        focus: "Logins, sessions, roles — the milestone graders test hardest.",
        concepts: [
          "Password hashing with werkzeug.security or bcrypt — never plaintext",
          "Flask sessions and the login_required decorator (Flask-Login)",
          "Role-based access (admin vs user); route guards",
          "CSRF protection with Flask-WTF; secure cookie flags",
        ],
        practice:
          "Implement register / login / logout. Add an @admin_required decorator and one admin-only route. Verify you cannot reach admin pages as a normal user.",
      },
      {
        n: 7,
        topic: "Core CRUD and Forms",
        focus: "The list/create/edit/delete loop for every main entity.",
        concepts: [
          "Flask-WTF forms with server-side validation",
          "REST-style route naming: GET list, GET new, POST create, GET/POST edit, POST delete",
          "Flash messages and post-redirect-get to avoid double submits",
          "File uploads with secure_filename if your app needs them",
        ],
        practice:
          "Implement CRUD for every entity in the schema. Add validation messages. Manually test each form's happy path and one error path.",
      },
      {
        n: 8,
        topic: "Search, Filters, and Dashboards",
        focus: "Make the app actually useful by adding query and summary screens.",
        concepts: [
          "URL query parameters for search/filter/sort",
          "Pagination of long lists",
          "Aggregated dashboard counts (today's orders, total users, etc.)",
          "Lightweight charts with Chart.js or matplotlib-rendered PNGs",
        ],
        practice:
          "Add a search box and at least 2 filters to your main list page. Build one dashboard route with 3–4 KPIs and a single chart.",
      },
      {
        n: 9,
        topic: "REST API Endpoints",
        focus: "Expose a small JSON API alongside the HTML app.",
        concepts: [
          "@app.route returning jsonify; status codes (200, 201, 400, 401, 404)",
          "Token or session auth for the API",
          "Versioning: /api/v1/... and consistent error envelopes",
          "Documenting endpoints (a README table is enough at this level)",
        ],
        practice:
          "Expose 3–5 endpoints (list, get, create) for one resource. Test them with Postman or curl. Save the Postman collection in the repo.",
      },
      {
        n: 10,
        topic: "Styling, Polish, and Accessibility",
        focus: "Make the app pleasant — graders notice.",
        concepts: [
          "Consistent layout via a base.html template",
          "Bootstrap 5 components or a small custom CSS file",
          "Color contrast, labels on inputs, alt text on images",
          "Empty states, loading hints, and clear error pages (404, 500)",
        ],
        practice:
          "Audit every page in Lighthouse (Chrome DevTools). Fix the easy a11y and performance issues. Add a 404 and 500 template.",
      },
      {
        n: 11,
        topic: "Testing, Logging, and Deployment",
        focus: "Prove it works and put it somewhere the grader can see it.",
        concepts: [
          "Smoke tests with pytest + Flask test client",
          "Logging with the standard logging module; rotating file handler",
          "Deploying Flask on Render / Railway / PythonAnywhere (gunicorn + Procfile)",
          "Environment-specific config; never commit the dev DB to prod",
        ],
        practice:
          "Write 8–10 pytest tests covering auth and one CRUD flow. Deploy to Render's free tier. Confirm the live URL works on a phone.",
      },
      {
        n: 12,
        topic: "Documentation, Demo Video, and Viva Prep",
        focus: "Final submission package and viva-readiness.",
        concepts: [
          "README with setup, schema diagram, screenshots, and features list",
          "5–7 minute demo video walking through the happy paths",
          "Be ready to explain every file: routes, models, decorators, queries",
          "Common viva probes: how does login work, what is CSRF, what is an ORM, how would you scale this",
        ],
        practice:
          "Record the demo. Tag a v1.0 release on GitHub. Do a mock viva: open a random file and explain it line by line.",
      },
    ],
    resources: [
      {
        name: "Flask Mega-Tutorial — Miguel Grinberg",
        kind: "Tutorial series",
        note: "The definitive practical Flask walkthrough. Chapters 1–10 alone cover almost every milestone in this project.",
        url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
      },
      {
        name: "Flask official documentation",
        kind: "Docs",
        note: "Keep this open. The Quickstart, Patterns, and Tutorial sections answer 80% of \"how do I do X\" questions.",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "SQLAlchemy ORM Tutorial",
        kind: "Docs",
        note: "Models, relationships, and queries — the parts every viva probes.",
        url: "https://docs.sqlalchemy.org/en/20/orm/quickstart.html",
      },
      {
        name: "Render — Deploy a Flask app",
        kind: "Deployment guide",
        note: "Free tier is enough for the project. Walks through gunicorn, env vars, and the build command.",
        url: "https://render.com/docs/deploy-flask",
      },
      {
        name: "Postman Learning Center",
        kind: "API tool",
        note: "For testing the REST endpoints you build in milestone 9. Save the collection in your repo.",
        url: "https://learning.postman.com/",
      },
      {
        name: "Google Lighthouse",
        kind: "Audit tool",
        note: "Built into Chrome DevTools. Run it on every page before submission — fixes accessibility and performance smells.",
        url: "https://developer.chrome.com/docs/lighthouse/overview",
      },
      {
        name: "MDN Web Docs — HTML / CSS / JS",
        kind: "Reference",
        note: "The reference for anything frontend. Beats Stack Overflow for accuracy.",
        url: "https://developer.mozilla.org/",
      },
      {
        name: "Real Python — Flask tutorials",
        kind: "Tutorials",
        note: "Focused walkthroughs on auth, forms, blueprints, testing — pick by topic when stuck.",
        url: "https://realpython.com/tutorials/flask/",
      },
    ],
    projects: [
      "Quantified-Self Tracker: log habits, weights, study hours; daily/weekly dashboards with streaks; admin can manage categories.",
      "Household Services platform: customers book services (plumbing, cleaning), professionals accept jobs, admin approves professionals and views reports.",
      "Library Management: members borrow/return books, late-fee calculation, librarian dashboard, search by title/author/genre.",
      "Influencer-Sponsor marketplace: sponsors post campaigns, influencers send pitches, admin moderates flagged content.",
      "Local Kirana Inventory: shopkeeper logs stock in/out, low-stock alerts, daily sales chart, customer-facing read-only catalog.",
    ],
    exam: [
      "Milestones are sequential — a broken DB layer in M2 will fail every later milestone. Get each green before moving on.",
      "Demo prep: rehearse the happy path twice end-to-end on a fresh browser session. Don't ad-lib during the viva.",
      "Viva tip: be ready to open any file at random and explain it. Graders favor \"I wrote this and here is why\" over polished features you can't defend.",
      "Common viva questions: how is the password stored, what does login_required actually do, what is an ORM, what is CSRF, why use POST-redirect-GET, how would you add a new field to the User model.",
      "Submit a clean repo: meaningful commit history, no .pyc / .db / venv folders, requirements.txt frozen, README with screenshots and run instructions.",
      "Pitfall: storing plaintext passwords, missing CSRF tokens on forms, exposing admin routes without role checks, hard-coded SECRET_KEY in the repo — all of these lose marks immediately.",
    ],
  },
  {
    id: "bdm",
    code: "BSMS2001",
    name: "Business Data Management",
    short: "BDM",
    url: "https://study.iitm.ac.in/ds/course_pages/BSMS2001.html",
    credits: 4,
    blurb:
      "Where data science meets the business it serves. The first half is microeconomics and firm analysis; the second half is sector-by-sector case studies (e-commerce, manufacturing, IT, fintech) using real-style datasets and dashboards in spreadsheets. Quizzes test concepts; the capstone project tests whether you can turn business data into a recommendation.",
    weeks: [
      {
        n: 1,
        topic: "Consumption and Demand",
        focus: "Why people buy what they buy — the demand side of a market.",
        concepts: [
          "Utility, marginal utility, indifference curves",
          "Demand curves; movement along vs shift of demand",
          "Substitutes and complements",
          "Consumer surplus and willingness to pay",
        ],
        practice:
          "Take a product you bought this week and sketch your personal demand curve. Identify two substitutes and one complement. Read the Wikipedia entries on price elasticity.",
      },
      {
        n: 2,
        topic: "Supply, Elasticity, and Production Costs",
        focus: "The supply side and how firms decide quantity.",
        concepts: [
          "Supply curves; producer surplus; market equilibrium",
          "Price, income, and cross-price elasticity",
          "Fixed, variable, marginal, average costs",
          "Make-vs-buy decisions and economies of scale",
        ],
        practice:
          "Compute elasticity from two price/quantity points. Build a small make-vs-buy spreadsheet for a manufactured part. Plot a short-run cost curve.",
      },
      {
        n: 3,
        topic: "Firm Analysis and Pricing Strategy",
        focus: "How a single firm thinks about prices and performance.",
        concepts: [
          "Cost-plus, value-based, and dynamic pricing",
          "Break-even analysis; contribution margin",
          "Profitability ratios: gross margin, operating margin, net margin",
          "Liquidity and efficiency ratios: current, quick, inventory turnover",
        ],
        practice:
          "Pull a public company annual report (Infosys, ITC, DMart) and compute 6 ratios from it. Build a break-even chart for a sample product line.",
      },
      {
        n: 4,
        topic: "Industry Analysis",
        focus: "Stepping up from one firm to the structure of an industry.",
        concepts: [
          "Industry classification: NIC / NAICS / SIC codes",
          "Market share, HHI (Herfindahl-Hirschman Index), CR4 / CR8 concentration",
          "Porter's Five Forces",
          "Value chain analysis and strategic groups",
        ],
        practice:
          "Pick the Indian smartphone industry. Compute HHI from market-share data. Write a 1-page Porter's Five Forces analysis with citations.",
      },
      {
        n: 5,
        topic: "E-Commerce Case Study I — Fabmart",
        focus: "Revenue, distribution, and inventory in an online retailer.",
        concepts: [
          "Revenue decomposition: orders × AOV × conversion × traffic",
          "ABC inventory analysis; safety stock and reorder points",
          "Distribution centers and last-mile fulfilment trade-offs",
          "Cohort vs snapshot analysis",
        ],
        practice:
          "Load the Fabmart-style sales dataset in Excel or Google Sheets. Build a pivot table of revenue by region × month. Identify the top 20% of SKUs driving 80% of revenue.",
      },
      {
        n: 6,
        topic: "E-Commerce Case Study II — Sales Trends and Dashboards",
        focus: "Telling the Fabmart story to a decision-maker.",
        concepts: [
          "Trend, seasonality, and base-level decomposition",
          "RFM segmentation (recency, frequency, monetary)",
          "Dashboard design: 5 KPIs, 1 hero chart, drill-down filters",
          "Common visual mistakes: dual-axis abuse, 3D pies, misleading scales",
        ],
        practice:
          "Build a 1-page Fabmart dashboard in Sheets or Tableau Public with the top KPIs and a month-over-month chart. Write 3 actionable insights in plain English.",
      },
      {
        n: 7,
        topic: "Manufacturing Case Study I — Ace Gears",
        focus: "Production scheduling and regional sales in a manufacturer.",
        concepts: [
          "Bill of materials; production scheduling basics",
          "Capacity utilization; bottleneck identification",
          "Regional sales analysis: state-wise contribution, growth rates",
          "Inventory carrying cost and EOQ (Economic Order Quantity)",
        ],
        practice:
          "Compute EOQ for a sample SKU. Build a state-wise sales heatmap. Identify the bottleneck machine from a small machine-utilization table.",
      },
      {
        n: 8,
        topic: "Manufacturing Case Study II — Profitability Analysis",
        focus: "From production data to profit recommendations.",
        concepts: [
          "Product-level profitability vs customer-level profitability",
          "Allocated vs avoidable costs",
          "Pareto analysis on profit, not just revenue",
          "Recommendations: discontinue, reprice, repackage",
        ],
        practice:
          "Take the Ace Gears profitability table; identify the 5 worst-performing SKUs. Recommend keep / reprice / drop for each with a one-line reason.",
      },
      {
        n: 9,
        topic: "IT Sector — HR and Recruitment Analytics",
        focus: "Workforce as data: hiring funnels and attrition.",
        concepts: [
          "Recruitment funnel: applied → screened → interviewed → offered → joined",
          "Time-to-hire, cost-per-hire, offer-acceptance rate",
          "Attrition by tenure / band / location; survival-curve intuition",
          "Skills gap and workforce planning basics",
        ],
        practice:
          "Build a recruitment funnel chart from a sample dataset. Compute attrition rate by tenure band and identify the riskiest band.",
      },
      {
        n: 10,
        topic: "Fintech — Financial Product Analysis",
        focus: "How fintech firms read their own data.",
        concepts: [
          "Loan-book metrics: NPA, gross/net yield, cost of funds",
          "Customer lifetime value (CLV) and acquisition cost (CAC)",
          "Cross-sell and product penetration metrics",
          "Regulatory / compliance reporting basics",
        ],
        practice:
          "Compute CLV for a sample subscription product. Build a simple cohort retention table. Identify which cohort has the worst retention and hypothesize why.",
      },
      {
        n: 11,
        topic: "A/B Testing and Credit Risk",
        focus: "Two staples: causal experiments and risk scoring.",
        concepts: [
          "A/B test design: hypothesis, MDE, sample size, p-value, power",
          "Pitfalls: peeking, multiple testing, novelty effects",
          "Credit scoring: PD, LGD, EAD; expected loss",
          "Confusion matrix metrics in a risk context",
        ],
        practice:
          "Design an A/B test for a checkout button color change: state hypothesis, sample size, success metric, guardrail metric. Build a small confusion matrix for a toy credit model.",
      },
      {
        n: 12,
        topic: "Capstone Wrap-up and Recommendations",
        focus: "Turning analysis into a defended business recommendation.",
        concepts: [
          "Structuring a business report: executive summary → context → analysis → recommendation",
          "Quantifying impact: revenue uplift, cost saved, risk reduced",
          "Defending assumptions during viva",
          "Knowing when the data is too thin and saying so",
        ],
        practice:
          "Write a 1-page executive summary of any earlier case study. Practice a 5-minute pitch with one hero chart and one explicit recommendation.",
      },
    ],
    resources: [
      {
        name: "R for Data Science — Hadley Wickham & Garrett Grolemund",
        kind: "Free book",
        note: "The cleanest intro to tidy data thinking. Even if you stay in Python/Sheets, the mental model transfers directly.",
        url: "https://r4ds.hadley.nz/",
      },
      {
        name: "Storytelling with Data — Cole Nussbaumer Knaflic",
        kind: "Book",
        note: "The book to read before designing any dashboard. Cuts the bad-chart instinct out of you.",
        url: "https://www.storytellingwithdata.com/books",
      },
      {
        name: "NPTEL — Business Analytics for Management Decision",
        kind: "Free course",
        note: "Closest large free course to BDM's framing. Useful for firm analysis and case-study weeks.",
        url: "https://nptel.ac.in/courses/110105089",
      },
      {
        name: "Tableau Public",
        kind: "Tool + gallery",
        note: "Free tier plus thousands of public dashboards to learn dashboard design from.",
        url: "https://public.tableau.com/",
      },
      {
        name: "Gapminder — Hans Rosling",
        kind: "Data + videos",
        note: "The gold standard for turning data into a story. Watch \"200 Countries in 4 Minutes\" before designing your first dashboard.",
        url: "https://www.gapminder.org/",
      },
      {
        name: "Aswath Damodaran — Corporate Finance lectures",
        kind: "YouTube",
        note: "Free NYU Stern lectures on ratios, valuation, and corporate strategy. Best supplement for the firm-analysis weeks.",
        url: "https://www.youtube.com/@AswathDamodaranonValuation",
      },
      {
        name: "Harvard Business Review — Cases & articles",
        kind: "Reading",
        note: "Short, well-written business cases for the e-commerce, manufacturing, IT, and fintech weeks.",
        url: "https://hbr.org/",
      },
      {
        name: "Kaggle datasets — Retail, HR, Credit",
        kind: "Datasets",
        note: "Real-shape datasets for practicing the case-study weeks beyond the toy ones in lectures.",
        url: "https://www.kaggle.com/datasets",
      },
    ],
    projects: [
      "Local Kirana store study: collect 4 weeks of sales receipts, clean in Sheets, identify slow-moving SKUs and a re-stocking recommendation backed by ABC analysis.",
      "Vegetable vendor pricing: interview a vendor, log daily prices and quantities for two weeks, model demand elasticity for 3 vegetables, recommend a pricing rule.",
      "Restaurant menu profitability: get sales + cost per dish, classify each on the menu-engineering matrix (star / plowhorse / puzzle / dog), recommend menu edits.",
      "D2C brand cohort analysis: pull a public e-commerce dataset, compute monthly cohort retention and CLV, identify the cohort breakpoint and suggest a retention lever.",
      "MSME credit-risk scorecard: take a public lending dataset, build a simple logistic-style scorecard, recommend a cutoff that balances NPA risk vs disbursal volume.",
    ],
    exam: [
      "Quiz 1 (weeks 1–6): economics + firm/industry analysis + Fabmart. Know definitions cold — elasticity, HHI, ratios — these are the highest-yield marks.",
      "Quiz 2 (weeks 7–10): Ace Gears + IT + fintech. Practice with the case-study tables; questions often hand you a small table and ask for the next-step number.",
      "End-term: cumulative with a heavier weight on case-study reasoning. Expect 1–2 \"what would you recommend\" questions — practice writing 2-sentence recommendations.",
      "Capstone project rubric rewards: a clearly stated problem, primary data with provenance, clean cleaning steps documented, and a recommendation tied to numbers — not just charts.",
      "Pitfall: confusing correlation with causation in A/B test discussion; reporting only revenue uplift without checking guardrail metrics like returns or churn.",
      "Pitfall: dashboards with 12 charts and no narrative — graders want 1 hero chart + 4 supporting KPIs + a written insight.",
    ],
  },
  {
    id: "mlp",
    code: "BSCS2008",
    name: "Machine Learning Practice",
    short: "MLP",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2008.html",
    credits: 4,
    blurb:
      "The applied counterpart to MLF and MLT. Every model you proved on paper, you now fit, tune, and evaluate in scikit-learn. The course is end-to-end: data → pipelines → models → metrics → deployment-ready artifacts. Quizzes test API knowledge and metric reasoning; assignments test that your notebook actually runs.",
    weeks: [
      {
        n: 1,
        topic: "End-to-End ML Project with scikit-learn",
        focus: "Walk a full pipeline from raw CSV to a tuned, evaluated model.",
        concepts: [
          "ML project lifecycle: frame → get data → EDA → prepare → model → tune → deploy",
          "Train/val/test splits and why a single split is not enough",
          "Stratified vs random splits; data snooping bias",
          "sklearn estimator API: fit, predict, score",
        ],
        practice:
          "Re-do the Géron Chapter 2 California Housing project end-to-end in a single notebook. Push it to GitHub with a one-paragraph README.",
      },
      {
        n: 2,
        topic: "Data Loading, EDA, and Preprocessing",
        focus: "The unglamorous 70% of any ML project.",
        concepts: [
          "pandas for loading, profiling, slicing",
          "Missing values: drop, impute (mean/median/most_frequent), model-based",
          "Categorical encoding: OrdinalEncoder, OneHotEncoder, target encoding",
          "Scaling: StandardScaler, MinMaxScaler, RobustScaler — when each",
        ],
        practice:
          "Take the Titanic dataset. Build a Pipeline + ColumnTransformer that handles numeric and categorical columns separately. Confirm the pipeline runs on raw input.",
      },
      {
        n: 3,
        topic: "Linear Regression and Gradient Descent",
        focus: "The simplest model, fit two ways.",
        concepts: [
          "LinearRegression closed-form (normal equation)",
          "SGDRegressor: batch, mini-batch, stochastic; learning rate schedules",
          "Convergence diagnostics: loss curves, oscillation, divergence",
          "Multicollinearity and its effect on coefficients",
        ],
        practice:
          "Fit LinearRegression and SGDRegressor on the same dataset; compare coefficients and runtime. Plot the SGD loss curve across epochs.",
      },
      {
        n: 4,
        topic: "Polynomial Regression and Regularization",
        focus: "More flexibility, then controlling the resulting overfit.",
        concepts: [
          "PolynomialFeatures and the bias-variance trade-off",
          "Ridge (L2), Lasso (L1), ElasticNet — penalty geometry intuition",
          "Cross-validation: KFold, StratifiedKFold, cross_val_score",
          "Hyperparameter tuning: GridSearchCV vs RandomizedSearchCV",
        ],
        practice:
          "Take a small regression dataset; fit polynomial degrees 1–10 and plot train vs val MSE. Add Ridge and find the alpha that minimizes val MSE.",
      },
      {
        n: 5,
        topic: "Logistic Regression",
        focus: "The classification workhorse — fast, calibrated, interpretable.",
        concepts: [
          "Logistic regression as linear model + sigmoid; log-loss",
          "Class imbalance: class_weight='balanced', threshold tuning",
          "Multinomial vs one-vs-rest logistic regression",
          "Coefficient interpretation as log-odds",
        ],
        practice:
          "Fit LogisticRegression on the breast-cancer dataset; tune C with GridSearchCV; produce a calibration plot.",
      },
      {
        n: 6,
        topic: "Binary Classification — Metrics and Evaluation",
        focus: "Pick the right metric — accuracy is almost never it.",
        concepts: [
          "Confusion matrix; precision, recall, F1, specificity",
          "ROC curve and AUC; precision-recall curve and average precision",
          "Threshold tuning for asymmetric costs",
          "Probability calibration: Platt scaling, isotonic regression",
        ],
        practice:
          "Build an imbalanced classifier (1:20). Plot ROC and PR curves. Pick a threshold that targets ≥90% recall and report the resulting precision.",
      },
      {
        n: 7,
        topic: "Multiclass Classification",
        focus: "Extending binary techniques cleanly to many classes.",
        concepts: [
          "One-vs-rest, one-vs-one, native multinomial",
          "Macro vs micro vs weighted averaging of metrics",
          "Confusion-matrix heatmaps for many classes",
          "Top-k accuracy when applicable",
        ],
        practice:
          "Fit a multinomial logistic and a OneVsRestClassifier on MNIST (sklearn's load_digits). Compare macro-F1 and inspect the confusion matrix.",
      },
      {
        n: 8,
        topic: "Support Vector Machines",
        focus: "Maximum-margin classifiers with kernels.",
        concepts: [
          "Linear SVM and the C parameter (soft margin)",
          "Kernel trick: RBF, polynomial, sigmoid; gamma intuition",
          "SVR for regression",
          "Scaling matters: SVMs are very sensitive to feature scale",
        ],
        practice:
          "Grid-search a kernel SVM on a non-linearly-separable toy dataset (moons, circles). Visualize the decision boundary for the best params.",
      },
      {
        n: 9,
        topic: "Decision Trees",
        focus: "Non-parametric, interpretable models that overfit easily.",
        concepts: [
          "DecisionTreeClassifier / Regressor; Gini vs entropy",
          "Pre-pruning: max_depth, min_samples_split, min_samples_leaf",
          "Post-pruning via cost-complexity (ccp_alpha)",
          "Feature importance and its pitfalls",
        ],
        practice:
          "Fit a tree on Iris; visualize with plot_tree. Sweep max_depth from 1–20 and plot train vs val accuracy; pick the sweet spot.",
      },
      {
        n: 10,
        topic: "Ensembles and Random Forests",
        focus: "Variance reduction (bagging) and bias reduction (boosting).",
        concepts: [
          "Bagging, RandomForest; why random feature subsets help",
          "Out-of-bag scoring; permutation importance",
          "Boosting families: AdaBoost, GradientBoosting, HistGradientBoosting, XGBoost",
          "Stacking and voting classifiers",
        ],
        practice:
          "On a tabular dataset, compare LogReg vs RandomForest vs HistGradientBoosting on cross-val AUC. Run permutation importance on the winner.",
      },
      {
        n: 11,
        topic: "Neural Networks in scikit-learn",
        focus: "MLPs through the sklearn API — bridge to deep learning.",
        concepts: [
          "MLPClassifier / MLPRegressor; hidden_layer_sizes, activation, solver",
          "Early stopping; learning-rate scheduling",
          "Why sklearn MLPs cap out — when to graduate to PyTorch / TF",
          "Loss-curve diagnostics: underfit, overfit, oscillation",
        ],
        practice:
          "Train an MLPClassifier on MNIST digits with two hidden layers. Plot the loss curve. Compare its accuracy with a RandomForest baseline.",
      },
      {
        n: 12,
        topic: "Unsupervised Learning",
        focus: "When there are no labels.",
        concepts: [
          "KMeans, the elbow method, silhouette score",
          "DBSCAN for density-based clustering with noise",
          "Hierarchical clustering and dendrograms",
          "PCA for dimensionality reduction; explained variance ratio",
        ],
        practice:
          "Cluster the Wholesale Customers dataset with KMeans (k=2..10) and pick k via silhouette. Reduce to 2D with PCA and plot the clusters.",
      },
    ],
    resources: [
      {
        name: "Hands-On ML with Scikit-Learn, Keras & TensorFlow — Aurélien Géron (3rd ed.)",
        kind: "Primary book",
        note: "The de-facto MLP companion. Chapters 1–9 map almost 1:1 to the syllabus. Notebooks are on the author's GitHub.",
        url: "https://github.com/ageron/handson-ml3",
      },
      {
        name: "scikit-learn User Guide",
        kind: "Docs",
        note: "The single best ML reference on the internet. Each algorithm page has the math, the API, and a worked example.",
        url: "https://scikit-learn.org/stable/user_guide.html",
      },
      {
        name: "Kaggle Learn — Intermediate ML & Feature Engineering",
        kind: "Micro-courses",
        note: "Bite-sized, hands-on, and free. Best supplement for the preprocessing and feature-engineering weeks.",
        url: "https://www.kaggle.com/learn",
      },
      {
        name: "Sebastian Raschka — Machine Learning lectures",
        kind: "YouTube + book",
        note: "Crystal-clear lectures on every algorithm in this course; the companion book \"Machine Learning with PyTorch and Scikit-Learn\" is excellent.",
        url: "https://www.youtube.com/@SebastianRaschka",
      },
      {
        name: "StatQuest — Josh Starmer",
        kind: "YouTube",
        note: "Best intuitive explanations of bias-variance, ROC/AUC, trees, boosting, PCA. Watch before each model week.",
        url: "https://www.youtube.com/@statquest",
      },
      {
        name: "MLflow Documentation",
        kind: "Docs",
        note: "For tracking experiments once you start tuning seriously. Even a 30-minute read pays off across the course.",
        url: "https://mlflow.org/docs/latest/index.html",
      },
      {
        name: "Papers with Code — sklearn benchmarks",
        kind: "Reference",
        note: "Sanity-check what state-of-the-art on a dataset actually looks like before you over-celebrate your score.",
        url: "https://paperswithcode.com/",
      },
      {
        name: "Kaggle competitions — Playground series",
        kind: "Practice",
        note: "Beginner-friendly tabular competitions with leaderboard feedback. Best practice ground for the second half of the course.",
        url: "https://www.kaggle.com/competitions?hostSegmentIdFilter=8",
      },
    ],
    projects: [
      "Tabular classifier pipeline: build a sklearn Pipeline + ColumnTransformer + GridSearchCV that takes raw CSV → tuned classifier → ROC/PR plots, with one click.",
      "Telco churn predictor: imbalanced binary classification with class-weighted logistic + gradient boosting; pick a threshold to maximize business value, not F1.",
      "House-price regressor: feature-engineer a Kaggle housing dataset, compare Ridge / RandomForest / HistGB, report cross-val RMSE and permutation importance.",
      "Image-digits classifier: MLP vs SVM vs RandomForest on sklearn's digits dataset; produce a confusion matrix and call out which digits are hardest.",
      "Customer-segmentation report: KMeans + PCA on a retail dataset; write a 1-page persona for each cluster with actionable marketing recommendations.",
    ],
    exam: [
      "Quiz 1 (weeks 1–5): pipelines, preprocessing, regression, logistic. Expect API-recall questions — know which transformer goes where and what fit_transform returns.",
      "Quiz 2 (middle weeks): classification metrics, SVMs, trees, ensembles. Practice reading a confusion matrix and computing precision/recall/F1 by hand.",
      "End-term: cumulative. The hardest questions blend two weeks — e.g. \"given this pipeline and this metric, what is wrong?\" Practice diagnosis, not just code recall.",
      "Programming assignments: read the input/output format twice. Many marks are lost to wrong column names, wrong index handling, or off-by-one splits.",
      "Pitfall: leaking the target into features (e.g. fitting the scaler on the full dataset before splitting). Always fit transformers inside a Pipeline.",
      "Pitfall: optimizing accuracy on an imbalanced dataset, forgetting random_state, comparing models with different CV splits.",
    ],
  },
];
