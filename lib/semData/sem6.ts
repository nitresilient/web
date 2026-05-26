import type { Subject } from "./types";

export const SUBJECTS: Subject[] = [
  {
    id: "mad2",
    code: "BSCS2006",
    name: "Modern Application Development II",
    short: "MAD II",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2006.html",
    credits: 4,
    blurb:
      "The second half of full-stack web development: a hard pivot to JavaScript and Vue.js on the frontend, plus the API design, auth, async jobs, and messaging patterns that real applications need on the backend. Heavily project-driven — your grade and your skill both come from shipping something that works end-to-end.",
    weeks: [
      {
        n: 1,
        topic: "Basics of JavaScript",
        focus: "Get fluent in the language the rest of the course runs on.",
        concepts: [
          "Variables (let / const / var), primitives, type coercion, == vs ===",
          "Functions, arrow functions, default and rest parameters, scope and hoisting",
          "Arrays and objects; destructuring; spread and rest",
          "Control flow, template literals, the JavaScript runtime in the browser",
        ],
        practice:
          "Work through the JavaScript.info 'JavaScript Fundamentals' track. Re-implement 10 small Python utilities (factorial, fizzbuzz, anagram check, etc.) in vanilla JS and run them in the browser console.",
      },
      {
        n: 2,
        topic: "Advanced JavaScript",
        focus: "Closures, prototypes, modules, async — the non-obvious parts.",
        concepts: [
          "Closures and lexical scope; the `this` keyword and bind/call/apply",
          "Prototypes, classes, inheritance; ES6 modules (import/export)",
          "The event loop: call stack, microtasks, macrotasks",
          "Promises, async/await, fetch; error handling with try/catch",
        ],
        practice:
          "Build a small CLI-style script that fetches data from a public API (e.g. JSONPlaceholder) with async/await. Solve 10 closure and `this` quiz questions from JavaScript.info.",
      },
      {
        n: 3,
        topic: "Introduction to Web Frontend",
        focus: "The DOM, events, and how a browser actually renders a page.",
        concepts: [
          "Document Object Model; querySelector, createElement, appendChild",
          "Event listeners; event delegation; bubbling vs capturing",
          "Forms and form validation in vanilla JS",
          "Browser dev tools: Elements, Console, Network, Performance tabs",
        ],
        practice:
          "Build a vanilla-JS todo app — add, edit, delete, persist to localStorage — with zero frameworks. Inspect every event in DevTools.",
      },
      {
        n: 4,
        topic: "Introduction to Vue.js",
        focus: "The reactivity model and Single-File Components.",
        concepts: [
          "Vue 3 Composition API; `ref`, `reactive`, `computed`, `watch`",
          "Template syntax: v-bind, v-model, v-if/v-else, v-for, event modifiers",
          "Single-File Components (.vue): template, script, style",
          "Props, emits, slots — parent/child communication",
        ],
        practice:
          "Scaffold a project with `npm create vue@latest`. Rebuild the week-3 todo app in Vue using the Composition API. Read the official Vue tutorial end to end.",
      },
      {
        n: 5,
        topic: "Vue with APIs",
        focus: "Wiring a Vue frontend to a real backend.",
        concepts: [
          "fetch / axios from inside components; loading and error states",
          "Lifecycle hooks (`onMounted`, `onUnmounted`) for data fetching",
          "vue-router: routes, dynamic segments, nested routes, navigation guards",
          "CORS, JSON, REST conventions",
        ],
        practice:
          "Build a 3-page Vue app (list, detail, search) that consumes the OpenLibrary or PokéAPI. Handle loading spinners, empty states, and network errors explicitly.",
      },
      {
        n: 6,
        topic: "Advanced Vue.js",
        focus: "Composables, custom directives, transitions, and structure for bigger apps.",
        concepts: [
          "Composables — extracting reusable reactive logic (useFetch, useAuth)",
          "Custom directives; provide / inject for cross-cutting state",
          "Built-in components: Teleport, Suspense, KeepAlive, Transition",
          "Project structure: components vs views vs composables vs stores",
        ],
        practice:
          "Refactor the week-5 app: pull all fetch logic into a `useApi` composable, add a global loading bar with provide/inject, and animate route transitions.",
      },
      {
        n: 7,
        topic: "Advanced State Management",
        focus: "Centralised state with Pinia (Vue's current official store).",
        concepts: [
          "Why prop-drilling breaks down at scale",
          "Pinia stores: state, getters, actions; the setup-store syntax",
          "Persisting state to localStorage; the Vue DevTools timeline",
          "When to use a store vs a composable vs route params",
        ],
        practice:
          "Add a Pinia store for auth + cart to a small e-commerce mock. Use the Vue DevTools to step through every mutation.",
      },
      {
        n: 8,
        topic: "Authentication and API Design",
        focus: "Token-based auth and designing REST APIs that don't hurt to consume.",
        concepts: [
          "Sessions vs tokens; JWT structure (header / payload / signature)",
          "Login, logout, refresh-token flows; storing tokens (cookie vs localStorage)",
          "REST design: resources, verbs, status codes, pagination, filtering",
          "API versioning; OpenAPI / Swagger specs; role-based access control",
        ],
        practice:
          "Build a Flask or FastAPI backend with JWT auth and a `/me` endpoint. Wire it to your Vue app — login form, protected route, logout. Document the API with Swagger UI.",
      },
      {
        n: 9,
        topic: "Asynchronous Jobs",
        focus: "Doing slow work off the request path.",
        concepts: [
          "Why HTTP requests should be fast; the request/response vs background-job split",
          "Task queues: Celery with Redis or RabbitMQ as the broker",
          "Scheduled / periodic jobs (Celery Beat, cron)",
          "Sending emails, generating reports, processing uploads asynchronously",
        ],
        practice:
          "Add a Celery worker to your week-8 app. Trigger a job that generates a CSV export and emails it. Watch the Redis queue with `redis-cli MONITOR`.",
      },
      {
        n: 10,
        topic: "Inter-Service Messaging and Webhooks",
        focus: "Letting services talk to each other and to the outside world.",
        concepts: [
          "Sync vs async communication between services",
          "Pub/sub messaging; brokers; at-least-once vs exactly-once delivery",
          "Webhooks: producing and consuming; signature verification",
          "Idempotency, retries, dead-letter queues",
        ],
        practice:
          "Add a webhook endpoint that listens for Stripe/GitHub-style events. On the producer side, send a webhook to a public endpoint (use webhook.site) whenever a record is created.",
      },
      {
        n: 11,
        topic: "Performance",
        focus: "Making the app feel fast on real networks and real devices.",
        concepts: [
          "Caching layers: HTTP cache headers, browser cache, server-side, Redis",
          "Frontend perf: code splitting, lazy loading routes, image optimisation",
          "Bundle analysis with Vite / rollup-plugin-visualizer",
          "Database / N+1 fixes; measuring with Lighthouse and Chrome DevTools",
        ],
        practice:
          "Run Lighthouse on your project, fix the three worst scores. Add route-level lazy loading. Add Redis caching for one expensive endpoint and measure the latency drop.",
      },
      {
        n: 12,
        topic: "Project",
        focus: "Ship the end-to-end application that ties everything together.",
        concepts: [
          "Full-stack architecture decisions: frontend, backend, DB, cache, worker, broker",
          "Auth, async jobs, and at least one webhook or inter-service call",
          "Deployment: containers, environment variables, basic observability",
          "Documentation: README, API docs, demo video",
        ],
        practice:
          "Build the term project: SPA frontend (Vue + Pinia + Router) + REST backend (Flask/FastAPI) + Celery worker + Redis + SQL DB. Deploy it and record a short demo.",
      },
    ],
    resources: [
      {
        name: "Vue.js Official Docs (Vue 3)",
        kind: "Primary reference",
        note: "The official guide and tutorial are excellent — start with the interactive tutorial, then read the guide cover to cover.",
        url: "https://vuejs.org/",
      },
      {
        name: "Vite Official Docs",
        kind: "Build tool reference",
        note: "The bundler every new Vue project uses. Skim the 'Features' and 'Build' pages.",
        url: "https://vitejs.dev/",
      },
      {
        name: "Pinia Official Docs",
        kind: "State management",
        note: "Vue's current official store library — replaces Vuex. The docs are short and the Getting Started covers 80% of what you need.",
        url: "https://pinia.vuejs.org/",
      },
      {
        name: "JavaScript.info",
        kind: "Tutorial site",
        note: "The single best free resource for modern JavaScript. Do weeks 1–2 from here before touching Vue.",
        url: "https://javascript.info/",
      },
      {
        name: "Full Stack Open (University of Helsinki)",
        kind: "Free course",
        note: "React-flavoured, but the parts on REST, authentication, JWT, deployment, and testing are directly transferable to MAD2.",
        url: "https://fullstackopen.com/en/",
      },
      {
        name: "Vue Mastery — Free Courses",
        kind: "Video course",
        note: "The 'Vue 3 Essentials' and 'Composition API' tracks are free and complement the official docs.",
        url: "https://www.vuemastery.com/courses/",
      },
      {
        name: "MDN Web Docs",
        kind: "Reference",
        note: "The canonical reference for JavaScript, DOM, fetch, and browser APIs.",
        url: "https://developer.mozilla.org/",
      },
      {
        name: "Celery Documentation",
        kind: "Reference",
        note: "For weeks 9–10: setting up workers, periodic tasks, and brokers.",
        url: "https://docs.celeryq.dev/",
      },
    ],
    projects: [
      "Household services app (a recurring MAD2 term project): admins, customers, and service professionals; service requests with status transitions; Celery-driven monthly report emails; Redis caching for the dashboard.",
      "Personal finance tracker SPA: Vue + Pinia frontend, FastAPI backend with JWT, async monthly summary job that emails a PDF, Lighthouse score ≥ 90.",
      "Multi-user blog / forum: Markdown posts, comments, follow/unfollow, webhook out to Discord on new posts, full-text search with caching.",
      "Real-time bookings (clinic / restaurant / classroom): conflict-free slot reservation, email + SMS confirmations via async jobs, admin analytics dashboard.",
      "Mini Twitter clone: timeline with infinite scroll, follow graph, async fan-out-on-write to a Redis-backed feed, dark mode, PWA installable.",
    ],
    exam: [
      "MAD2 is graded heavily on the project — start the term project by week 6, not week 11. The marks come from a working, deployed app with code quality, not from cramming theory.",
      "Quiz 1 covers JavaScript and early Vue (weeks 1–6): expect questions on `==` vs `===`, closures, the event loop, Composition API reactivity, and v-directives. Drill them.",
      "Quiz 2 covers Pinia, auth, async jobs, and messaging (weeks 7–10): rehearse JWT flow, Celery task lifecycle, and webhook signature verification on paper.",
      "End-term is conceptual — REST design principles, caching layers, performance trade-offs. Be able to draw an architecture diagram of your project end-to-end.",
      "Practice writing small Vue components by hand on paper — props, emits, a v-for, a computed. The quiz UI is unforgiving.",
      "Pitfall: forgetting `.value` on `ref`s in JS code; mutating Pinia state outside actions; storing JWTs in localStorage when the assignment expects httpOnly cookies; CORS errors caused by misconfigured backend headers.",
    ],
  },
  {
    id: "tds",
    code: "BSSE2002",
    name: "Tools in Data Science",
    short: "TDS",
    url: "https://study.iitm.ac.in/ds/course_pages/BSSE2002.html",
    credits: 3,
    blurb:
      "A practical tour of the tools real data scientists use: dev environments, version control, scraping, wrangling, LLMs, dashboards, containers, deployment. There is deliberately almost no 'content' — the course is graded assignments and two take-home projects. The skill is in actually shipping a solution end-to-end with whatever tool fits.",
    weeks: [
      {
        n: 1,
        topic: "Development Tools — Setup",
        focus: "The editor, shell, and dev environment a working data scientist lives in.",
        concepts: [
          "VS Code + extensions; GitHub Codespaces for instant cloud dev",
          "Unix shell basics: pipes, redirection, grep, find, jq, curl",
          "Python virtual environments; uv / pip / conda; pyproject.toml",
          "Jupyter, IPython, and notebook hygiene (don't commit outputs)",
        ],
        practice:
          "Set up a clean Codespaces dev container. Configure VS Code with Python, Jupyter, and ESLint. Pipe `curl | jq` over the GitHub API to list your own repos.",
      },
      {
        n: 2,
        topic: "Version Control and Collaboration",
        focus: "Git, GitHub, and the automation around them.",
        concepts: [
          "git basics: clone, branch, commit, merge, rebase, reset (and when each is dangerous)",
          "Pull requests, code review, conflict resolution",
          "GitHub Actions: workflows, runners, secrets, scheduled jobs",
          "GitHub Pages and static-site hosting",
        ],
        practice:
          "Set up a repo with a GitHub Action that runs pytest on every push. Publish a static site (your portfolio or a project README) to GitHub Pages.",
      },
      {
        n: 3,
        topic: "Deployment Tools",
        focus: "Taking a script or model and putting it on the public internet.",
        concepts: [
          "Docker basics: images vs containers, Dockerfile, layers, volumes",
          "FastAPI for serving Python as a REST API",
          "Hugging Face Spaces, Render, Vercel — free hosting tiers",
          "Environment variables, secrets management, ngrok for local exposure",
        ],
        practice:
          "Wrap a small ML model (or any function) in a FastAPI endpoint, containerise it with Docker, and deploy to Hugging Face Spaces. Hit it with curl from your laptop.",
      },
      {
        n: 4,
        topic: "Large Language Models as a Tool",
        focus: "Using LLMs as part of the data-science workflow.",
        concepts: [
          "Prompting patterns: zero-shot, few-shot, chain-of-thought, JSON-mode",
          "Function / tool calling; structured outputs (Pydantic schemas)",
          "Embeddings; cosine similarity; vector databases (Chroma, Typesense)",
          "Retrieval-Augmented Generation (RAG); when RAG beats fine-tuning",
          "GitHub Copilot and Cursor as everyday accelerants",
        ],
        practice:
          "Build a small RAG bot over a folder of PDFs: extract text, chunk, embed, store, retrieve, answer. Compare GPT-4o-mini vs Gemini Flash on the same prompts.",
      },
      {
        n: 5,
        topic: "Data Sourcing",
        focus: "Getting data out of the web, files, and APIs.",
        concepts: [
          "HTTP fundamentals; headers, status codes, sessions, rate limits",
          "Web scraping: requests + BeautifulSoup; Playwright for JS-rendered pages",
          "CSS and XPath selectors; respecting robots.txt and ToS",
          "Parsing PDFs, DOCX, audio transcripts, images (OCR with Tesseract)",
        ],
        practice:
          "Scrape a 100-row dataset from a public site you actually care about (movies, cricket, Hacker News). Save to a CSV. Then convert a real PDF report to clean Markdown.",
      },
      {
        n: 6,
        topic: "Data Preparation — Wrangle",
        focus: "Cleaning, reshaping, and joining messy real-world data.",
        concepts: [
          "Pandas: indexing, filtering, groupby, merge, pivot, melt",
          "Missing data, type coercion, string cleaning, datetimes and timezones",
          "OpenRefine for interactive cleaning at scale",
          "Schema validation with pydantic / pandera; data-quality checks",
        ],
        practice:
          "Take a deliberately messy CSV (Kaggle has many). Produce a clean, typed, validated DataFrame and document every transformation in a notebook.",
      },
      {
        n: 7,
        topic: "Data Analysis",
        focus: "Asking and answering questions of data.",
        concepts: [
          "Pandas + SQL: when to push work into the database",
          "DuckDB for fast in-process analytics on CSV/Parquet",
          "Exploratory analysis: distributions, correlations, segmentation",
          "Excel as an analyst's calculator: pivot tables, lookups, forecasting",
        ],
        practice:
          "Load a multi-GB CSV with DuckDB and answer five business-style questions in pure SQL. Reproduce the same answers with Pandas; compare runtime.",
      },
      {
        n: 8,
        topic: "Testing and Reproducibility",
        focus: "Trusting your code and your results.",
        concepts: [
          "pytest fundamentals; fixtures; parametrised tests",
          "Reproducible notebooks (papermill, nbconvert); pinned dependencies",
          "Data tests with Great Expectations / dbt tests",
          "CI for data science: running notebooks and tests in GitHub Actions",
        ],
        practice:
          "Add pytest tests to a data-cleaning script. Wire them to a GitHub Action that runs on every PR. Add one Great-Expectations check for your dataset.",
      },
      {
        n: 9,
        topic: "Data Visualization",
        focus: "Charts that make a point, not just charts that look nice.",
        concepts: [
          "Matplotlib + Seaborn for static plots; Plotly for interactivity",
          "Chart choice: bar vs line vs scatter vs heatmap vs map",
          "Colour, annotation, hierarchy — the basics of visual storytelling",
          "Geospatial: Folium, kepler.gl, QGIS; choropleths and point maps",
        ],
        practice:
          "Take last week's DuckDB analysis and produce a single multi-chart figure that tells the headline story. Get feedback from one non-technical friend.",
      },
      {
        n: 10,
        topic: "Presentation — Dashboards and Storytelling",
        focus: "Putting analysis in front of a user, not just yourself.",
        concepts: [
          "Streamlit and Gradio for fast Python dashboards",
          "Observable / Datasette for data-first publishing",
          "Narrative structure: question → evidence → recommendation",
          "Sharing notebooks: nbviewer, Quarto, marimo",
        ],
        practice:
          "Wrap your week-9 analysis in a Streamlit app with two filters and one chart. Deploy it. Share the link in a 100-word write-up.",
      },
      {
        n: 11,
        topic: "Packaging and Distribution",
        focus: "Turning a script into something someone else can install and run.",
        concepts: [
          "pyproject.toml, src layout, building wheels",
          "Publishing to PyPI; `pipx` and CLIs with Typer / Click",
          "Semantic versioning; CHANGELOG hygiene",
          "Containers as a packaging format; reproducible Dockerfiles",
        ],
        practice:
          "Convert one of your scripts into a CLI tool with Typer. Publish it to TestPyPI. Install it on a fresh Codespace and run it.",
      },
      {
        n: 12,
        topic: "Capstone and Review",
        focus: "Ship a project that uses tools from every module.",
        concepts: [
          "Picking a real (small) problem and scoping it down",
          "Composing tools: scrape → wrangle → analyse → visualise → deploy",
          "Documentation: README, demo GIF, architecture diagram",
          "Review: what each tool is best for and what to reach for next time",
        ],
        practice:
          "Build the take-home project: scrape data, clean it, analyse with DuckDB, build a Streamlit dashboard, deploy on Hugging Face Spaces, automate the refresh with a GitHub Action on a schedule.",
      },
    ],
    resources: [
      {
        name: "tds.s-anand.net (Official course site)",
        kind: "Primary course site",
        note: "S Anand's own course site — every assignment, prompt, and walkthrough lives here. The course IS this site; read it cover to cover.",
        url: "https://tds.s-anand.net/",
      },
      {
        name: "sanand0/tools-in-data-science-public (GitHub)",
        kind: "Course repo",
        note: "Source for the course site; contains all the markdown lessons, live-session links, and historic assignments. Star it and watch for updates.",
        url: "https://github.com/sanand0/tools-in-data-science-public",
      },
      {
        name: "Python for Data Analysis — Wes McKinney (3rd ed., free online)",
        kind: "Reference book",
        note: "The Pandas book, by the author of Pandas. Use it as a lookup for weeks 6–7.",
        url: "https://wesmckinney.com/book/",
      },
      {
        name: "Data Science from Scratch — Joel Grus",
        kind: "Reference book",
        note: "Implements every tool/technique in plain Python — useful when you want to understand what a library is doing under the hood.",
      },
      {
        name: "Kaggle Learn — Pandas, Data Cleaning, Data Visualization",
        kind: "Micro-courses",
        note: "Free, bite-sized, with interactive notebooks. Quickest way to build Pandas + viz reps.",
        url: "https://www.kaggle.com/learn",
      },
      {
        name: "GitHub Actions Documentation",
        kind: "Reference",
        note: "Skim 'Quickstart' and 'Workflow syntax'; copy from the 'Examples' page for week-2 and week-8 assignments.",
        url: "https://docs.github.com/en/actions",
      },
      {
        name: "Streamlit Gallery + Docs",
        kind: "Reference",
        note: "Best place to steal layout ideas for the dashboard project.",
        url: "https://streamlit.io/gallery",
      },
      {
        name: "DuckDB Documentation",
        kind: "Reference",
        note: "The SQL section is enough to do week 7; the 'Guides' page has end-to-end CSV/Parquet examples.",
        url: "https://duckdb.org/docs/",
      },
    ],
    projects: [
      "Public dashboard: scrape a weekly-updating data source (cricket scores, IMDB top movies, AQI, GitHub trending), store in DuckDB/Parquet, refresh with a scheduled GitHub Action, present with Streamlit on Hugging Face Spaces.",
      "Personal RAG over your notes / PDFs: index a folder of documents with embeddings, expose a chat UI via Streamlit or Gradio, deployed publicly with auth.",
      "Resume / job-posting analyser: scrape postings, extract skills with an LLM in JSON mode, visualise which skills cluster with which roles.",
      "Containerised ML micro-API: train a small classifier, wrap in FastAPI, Dockerise, deploy, write pytest tests, and run them in CI on every push.",
      "Open-data civic project: take a government CSV (rainfall, elections, budgets), clean with OpenRefine, analyse with DuckDB, publish an Observable / Datasette site with three narrated charts.",
    ],
    exam: [
      "TDS grading is dominated by the two take-home projects — pick something you'd actually use, scope it small, and start week 1.",
      "The 'remote online exam' and end-term reward tool fluency: be able to write a one-liner pandas/SQL/jq from memory under time pressure.",
      "Every assignment is automatically graded against a hidden test — read the prompt carefully and match the exact output format (file name, column order, JSON keys). Most lost marks are formatting, not logic.",
      "Live-session recordings on the course site are where S Anand demos the actual tools — watch them, don't just skim the markdown.",
      "Pitfall: notebook state — re-run from the top before submitting; don't rely on hidden cell state.",
      "Pitfall: scraping politely (User-Agent, rate limit, robots.txt) so your IP doesn't get banned during a graded assignment.",
    ],
  },
  {
    id: "introdl",
    code: "BSDA2001",
    name: "Introduction to Deep Learning and Generative AI",
    short: "IntroDL",
    url: "https://study.iitm.ac.in/ds/course_pages/BSDA2001.html",
    credits: 4,
    blurb:
      "A modern intro to deep learning: from a single artificial neuron, through CNNs and RNNs, to VAEs, GANs, diffusion models, and the transformer architecture that powers today's LLMs. Theory weeks alternate with practice weeks in TensorFlow/Keras — both halves are tested.",
    weeks: [
      {
        n: 1,
        topic: "Artificial Neural Networks — Theory",
        focus: "What a neuron is, and what stacking them buys you.",
        concepts: [
          "The artificial neuron: weights, bias, weighted sum, activation",
          "Activations: sigmoid, tanh, ReLU, softmax — and why ReLU usually wins",
          "Loss functions: MSE for regression, cross-entropy for classification",
          "Forward pass through a multi-layer network",
        ],
        practice:
          "Compute a forward pass through a 2-layer network with pen and paper. Watch 3Blue1Brown's 'But what is a neural network?' video.",
      },
      {
        n: 2,
        topic: "Artificial Neural Networks — Practice",
        focus: "Train your first network in Keras and watch it learn.",
        concepts: [
          "TensorFlow/Keras Sequential API; Dense layers",
          "Gradient descent variants: SGD, momentum, Adam",
          "Backpropagation as the chain rule applied automatically",
          "Train/validation/test split; overfitting; dropout and weight decay",
        ],
        practice:
          "Train a 3-layer MLP on Fashion-MNIST. Plot loss + accuracy curves. Add dropout, change optimisers, and see what moves the validation curve.",
      },
      {
        n: 3,
        topic: "Modeling Vision — CNN Theory",
        focus: "Why convolution + pooling is the right inductive bias for images.",
        concepts: [
          "Convolution operation; kernels, stride, padding, channels",
          "Pooling (max / average); receptive field",
          "Translation invariance; parameter sharing",
          "Classic architectures: LeNet, AlexNet, VGG, ResNet (skip connections)",
        ],
        practice:
          "By hand, convolve a 5×5 image with a 3×3 edge-detection kernel. Compute the output shape of each layer in a small ConvNet.",
      },
      {
        n: 4,
        topic: "Modeling Vision — CNN Practice",
        focus: "Train a CNN on real images.",
        concepts: [
          "Keras Conv2D, MaxPooling2D, Flatten, Dense",
          "Data augmentation (flip, crop, rotate) and ImageDataGenerator / tf.data",
          "Transfer learning from ImageNet-pretrained backbones",
          "Diagnosing overfitting from training curves",
        ],
        practice:
          "Train a CNN on CIFAR-10 from scratch. Then fine-tune a pretrained MobileNetV2 on the same task and compare accuracy and training time.",
      },
      {
        n: 5,
        topic: "Modeling Sequential Data — Theory",
        focus: "Networks for data that has an order.",
        concepts: [
          "Recurrent neural networks (RNNs); hidden state; unrolling through time",
          "Backpropagation Through Time (BPTT); vanishing / exploding gradients",
          "LSTM and GRU: gating to keep long-range information",
          "Bidirectional and stacked RNNs",
        ],
        practice:
          "Hand-trace an RNN over a length-3 sequence. Write down the LSTM gate equations from memory until you can do it without looking.",
      },
      {
        n: 6,
        topic: "Modeling Sequential Data — Practice",
        focus: "Train RNNs / LSTMs on text and time series.",
        concepts: [
          "Tokenisation; word indexing; padding and masking",
          "Embedding layer; text classification with an LSTM",
          "Sequence-to-sequence and encoder-decoder structure",
          "Time-series forecasting with windowed sequences",
        ],
        practice:
          "Train an LSTM sentiment classifier on the IMDB dataset. Generate text character-by-character from a small corpus (Shakespeare, song lyrics).",
      },
      {
        n: 7,
        topic: "Generative AI for Vision — VAEs and GANs",
        focus: "Two early generative recipes.",
        concepts: [
          "Autoencoders; bottleneck representations",
          "Variational autoencoders: ELBO, the reparameterisation trick",
          "GANs: generator vs discriminator, the minimax game",
          "Mode collapse and other GAN failure modes; DCGAN architecture",
        ],
        practice:
          "Train a VAE on MNIST; sample digits from the latent space and visualise the 2D latent. Train a DCGAN on Fashion-MNIST and watch it converge (or not).",
      },
      {
        n: 8,
        topic: "Generative AI for Vision — Diffusion Models",
        focus: "The technique behind Stable Diffusion and friends.",
        concepts: [
          "Forward diffusion: gradually adding Gaussian noise",
          "Reverse process: learning to denoise step by step",
          "DDPM training objective; U-Net as the denoising network",
          "Classifier-free guidance; conditioning on text or class",
        ],
        practice:
          "Read the annotated DDPM blog post. Train a tiny diffusion model on MNIST and sample from it; watch the noise become digits over the reverse steps.",
      },
      {
        n: 9,
        topic: "Generative AI for Vision — Practice",
        focus: "Use the pretrained giants instead of training from scratch.",
        concepts: [
          "Hugging Face `diffusers` library; pipelines",
          "Stable Diffusion: text-to-image, image-to-image, inpainting",
          "ControlNet and LoRA fine-tuning of diffusion models",
          "Practical inference: guidance scale, steps, schedulers",
        ],
        practice:
          "Generate 10 images with Stable Diffusion via `diffusers`. Use image-to-image to restyle a photo. Try one ControlNet (pose, depth, or canny).",
      },
      {
        n: 10,
        topic: "Large Language Models — Transformer",
        focus: "The architecture that ate NLP.",
        concepts: [
          "Tokenisation: BPE, WordPiece, SentencePiece",
          "Word and positional embeddings",
          "Self-attention: queries, keys, values; scaled dot-product",
          "Multi-head attention; encoder vs decoder blocks; layer norm + residuals",
        ],
        practice:
          "Implement scaled dot-product attention from scratch in NumPy. Watch Karpathy's 'Let's build GPT' video and follow along to a tiny working transformer.",
      },
      {
        n: 11,
        topic: "Large Language Models — Advanced",
        focus: "Pretraining, fine-tuning, and the model families.",
        concepts: [
          "Encoder models (BERT) for classification / NER; masked-language-model pretraining",
          "Decoder models (GPT-family) for generation; causal LM pretraining",
          "Encoder-decoder (T5, BART) for translation / summarisation",
          "Fine-tuning vs PEFT vs LoRA; instruction tuning; RLHF in one paragraph",
        ],
        practice:
          "Fine-tune `distilbert-base-uncased` on a sentiment dataset with Hugging Face Transformers. Then LoRA-fine-tune a small open LLM on a tiny instruction dataset.",
      },
      {
        n: 12,
        topic: "Large Language Models — Practice",
        focus: "Prompting and lightweight adaptation in production.",
        concepts: [
          "Prompt patterns: zero-shot, few-shot, chain-of-thought, ReAct",
          "Structured output: JSON mode, function calling, schemas",
          "Prompt tuning / prefix tuning vs full fine-tuning",
          "Evaluation: BLEU / ROUGE for generation; held-out accuracy; vibe-checks",
        ],
        practice:
          "Build a small task (e.g. classify support tickets) three ways: zero-shot prompt, few-shot prompt, fine-tuned classifier. Compare cost, latency, and accuracy.",
      },
    ],
    resources: [
      {
        name: "Deep Learning — Goodfellow, Bengio, Courville",
        kind: "Primary textbook",
        note: "The canonical reference. Free online. Chapters 6–10 map directly to weeks 1–6.",
        url: "https://www.deeplearningbook.org/",
      },
      {
        name: "Deep Learning Specialization — Andrew Ng (Coursera / DeepLearning.AI)",
        kind: "Video course",
        note: "Five-course series; the first three (NN basics, hyperparam tuning, CNNs) align beautifully with weeks 1–4.",
        url: "https://www.coursera.org/specializations/deep-learning",
      },
      {
        name: "fast.ai — Practical Deep Learning for Coders",
        kind: "Free course",
        note: "Top-down, code-first. Best companion if the theory feels abstract — you train models in lesson 1.",
        url: "https://course.fast.ai/",
      },
      {
        name: "3Blue1Brown — Neural Networks playlist",
        kind: "YouTube",
        note: "Builds the visual intuition for forward pass, backprop, and gradient descent. Watch before week 2.",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
      },
      {
        name: "Andrej Karpathy — 'Neural Networks: Zero to Hero' (YouTube)",
        kind: "Video series",
        note: "Build micrograd, makemore, and a GPT from scratch in PyTorch. The single best resource for understanding transformers (week 10).",
        url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
      },
      {
        name: "Hugging Face Course (NLP + diffusers)",
        kind: "Free course",
        note: "Hands-on with Transformers and diffusers libraries — directly maps to weeks 9, 11, 12.",
        url: "https://huggingface.co/learn",
      },
      {
        name: "TensorFlow / Keras Official Tutorials",
        kind: "Reference",
        note: "The Keras 'Getting Started' and 'Computer Vision' guides cover most weekly assignments.",
        url: "https://www.tensorflow.org/tutorials",
      },
      {
        name: "The Annotated Transformer / Annotated DDPM",
        kind: "Blog posts",
        note: "Line-by-line annotated implementations of the transformer paper and DDPM. Read alongside weeks 8 and 10.",
        url: "https://nlp.seas.harvard.edu/annotated-transformer/",
      },
    ],
    projects: [
      "Image classifier with transfer learning: fine-tune MobileNetV2 or ResNet50 on a custom 5–10 class dataset (your photos, plants, dishes). Ship as a Gradio demo.",
      "Sentiment + topic dashboard: LSTM and fine-tuned DistilBERT classifiers on tweets / reviews, side-by-side comparison with a Streamlit dashboard.",
      "Tiny GPT from scratch: follow Karpathy's nanoGPT and train a character-level model on a corpus you care about (your chat logs, lyrics, code). Sample from it.",
      "Diffusion playground: fine-tune a Stable Diffusion LoRA on 20 images of a specific style/subject and generate new ones with ControlNet for pose.",
      "RAG chatbot over a textbook or codebase: chunk + embed with sentence-transformers, retrieve with FAISS, generate with an open LLM, evaluate retrieval quality.",
    ],
    exam: [
      "Theory weeks (1, 3, 5, 7, 8, 10, 11) are quiz-heavy: be able to derive output shapes of conv layers, write LSTM gate equations, and explain self-attention from memory.",
      "Practice weeks reward fluency in Keras / Hugging Face — re-do every weekly notebook from scratch without copying.",
      "End-term mixes a generative-model question (VAE / GAN / diffusion) with a transformer / LLM question — don't skip the last four weeks just because they feel newer.",
      "Pitfall: shape errors. Always print `.shape` after every tensor op while debugging. Most assignment failures are dimension mismatches, not algorithmic bugs.",
      "Pitfall: confusing cross-entropy variants — `binary_crossentropy` vs `categorical_crossentropy` vs `sparse_categorical_crossentropy`. Read Keras docs carefully.",
      "Pitfall: training a GAN or diffusion model on your laptop. Use Google Colab or Kaggle GPU; otherwise a 'failed run' is just 'didn't train long enough'.",
    ],
  },
];
