import type { Subject } from "./types";

export const SUBJECTS: Subject[] = [
  {
    id: "mad1",
    code: "BSCS2003",
    name: "Modern Application Development I",
    short: "MAD I",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2003.html",
    credits: 4,
    blurb:
      "Your first end-to-end web stack: HTML/CSS/JS on the front, Python + Flask + SQLite/MySQL on the back, glued by HTTP and REST. Two halves — concepts of the web and the MVC pattern (weeks 1–6), then real backend, frontend, security, testing and deployment (weeks 7–12). The course is co-taken with DBMS; treat MAD as the place you finally use SQL for real.",
    weeks: [
      {
        n: 1,
        topic: "Basic Terminologies of the Web",
        focus:
          "How the web actually works under a browser request, end to end.",
        concepts: [
          "Client/server model; URL anatomy (scheme, host, port, path, query, fragment)",
          "HTTP request/response cycle; methods (GET, POST, PUT, DELETE) and status codes (2xx/3xx/4xx/5xx)",
          "DNS resolution, IP addresses, ports; what TCP and TLS add",
          "Stateless protocols, cookies, and the idea of a session",
        ],
        practice:
          "Open browser DevTools → Network on three sites and annotate one full request/response. Use curl -v to fetch a page and label every header. Read the MDN 'How the web works' page end to end.",
      },
      {
        n: 2,
        topic: "Webpages in HTML and CSS",
        focus: "Author semantic markup and style it without a framework.",
        concepts: [
          "HTML5 semantic tags (header, nav, main, article, section, footer)",
          "Forms and inputs; labels, validation attributes, accessibility basics",
          "CSS selectors, specificity, the box model, display/positioning",
          "Flexbox and CSS Grid; responsive design with media queries",
        ],
        practice:
          "Build a 3-page personal site in pure HTML + CSS (no framework) with a responsive nav. Complete FreeCodeCamp's Responsive Web Design certification sections on Flexbox and Grid.",
      },
      {
        n: 3,
        topic: "Presentation Layer — View",
        focus: "Server-side templating with Jinja2 to render dynamic HTML.",
        concepts: [
          "MVC separation: why views must not contain business logic",
          "Jinja2 syntax: {{ }} expressions, {% %} statements, filters",
          "Template inheritance with extends/block; includes and macros",
          "Escaping, autoescape, and safe rendering of user content",
        ],
        practice:
          "Create a Flask app with a base.html layout and 3 child templates. Pass a list of dicts from the view and render it as a table with a loop and a filter. Read the Jinja2 'Template Designer Documentation'.",
      },
      {
        n: 4,
        topic: "Models — Introduction to Databases",
        focus: "Persisting application state with SQLite/MySQL via SQLAlchemy.",
        concepts: [
          "Models as Python classes; SQLAlchemy declarative base",
          "CRUD operations through the ORM session",
          "Relationships: one-to-many, many-to-many; back_populates",
          "Migrations conceptually; seeding data for development",
        ],
        practice:
          "Add a SQLite database to your Flask app with two related tables (User → Posts). Write a script that creates the schema and seeds 10 rows. Wire one page to list rows from the DB.",
      },
      {
        n: 5,
        topic: "Controllers — Business Logic",
        focus: "Routing requests to Python functions that orchestrate the work.",
        concepts: [
          "Flask routes, URL converters (<int:id>), HTTP method binding",
          "Request parsing: request.args, request.form, request.json",
          "Redirects, flash messages, url_for; blueprints for modularization",
          "Where to put validation, business rules, and error handling",
        ],
        practice:
          "Extend your app with full CRUD on the Post model — list, view, create (form), edit, delete. Split routes into a blueprint. Handle a 404 cleanly with errorhandler.",
      },
      {
        n: 6,
        topic: "APIs and REST APIs",
        focus: "Exposing data over HTTP for machines, not browsers.",
        concepts: [
          "REST principles: resources, URIs, HTTP verbs, statelessness",
          "JSON request/response; content negotiation; status codes for APIs",
          "CRUD endpoints; idempotency of PUT/DELETE vs POST",
          "API versioning, pagination, filtering basics",
        ],
        practice:
          "Add a /api/v1/posts JSON API with GET/POST/PUT/DELETE. Hit each endpoint with curl and Postman. Read Roy Fielding's REST chapter summary on restfulapi.net.",
      },
      {
        n: 7,
        topic: "Backend Systems",
        focus:
          "Sessions, authentication, background work, and the request lifecycle.",
        concepts: [
          "Cookies vs sessions; secure/HttpOnly/SameSite flags",
          "Authentication (who) vs authorization (what); password hashing with werkzeug or bcrypt",
          "Flask-Login; protecting routes with decorators",
          "Background tasks and caching — Celery + Redis at a high level",
        ],
        practice:
          "Add login/logout/register to your app with hashed passwords. Restrict CRUD on posts to the post's owner. Add a /profile page guarded by @login_required.",
      },
      {
        n: 8,
        topic: "Application Frontend",
        focus: "JavaScript in the browser — DOM, fetch, and interactivity.",
        concepts: [
          "JS basics: let/const, functions, arrays, objects, promises, async/await",
          "DOM API: querySelector, addEventListener, classList, dataset",
          "fetch() with JSON; handling errors and loading states",
          "Vue 3 / Alpine.js intro (whichever the course uses) — reactivity and components",
        ],
        practice:
          "Add a 'like' button to each post that POSTs via fetch and updates the count without reload. Build a small search box that filters a list client-side. Work through Eloquent JavaScript chapters 4–6 and 13–14.",
      },
      {
        n: 9,
        topic: "Application Security",
        focus: "The attacks every web app must defend against.",
        concepts: [
          "OWASP Top 10 at a glance",
          "SQL injection — and why parameterized queries / ORM fix it",
          "Cross-site scripting (XSS): stored, reflected, DOM-based; escaping and CSP",
          "CSRF tokens; clickjacking; secure cookies; HTTPS",
        ],
        practice:
          "Deliberately introduce an XSS vector into your app, exploit it, then patch it with autoescape. Add CSRF protection (Flask-WTF). Run your app through the OWASP ZAP baseline scan.",
      },
      {
        n: 10,
        topic: "Testing of Web Applications",
        focus: "Automated tests at unit, integration, and end-to-end levels.",
        concepts: [
          "Unit tests with pytest; fixtures and parametrize",
          "Flask test client; testing routes with a separate test DB",
          "Mocking external calls; coverage measurement",
          "End-to-end testing with Selenium or Playwright (intro)",
        ],
        practice:
          "Write 15+ pytest tests covering models, routes, and an auth flow. Get coverage above 70% on your app. Add one Selenium test that logs in and creates a post.",
      },
      {
        n: 11,
        topic: "HTML Evolution and Beyond HTML",
        focus: "What HTML5 added and where the modern web is going.",
        concepts: [
          "HTML5 features: semantic tags, <canvas>, <video>/<audio>, localStorage",
          "Progressive Web Apps: service workers, manifest, offline caching",
          "WebSockets vs long-polling; server-sent events",
          "Accessibility (ARIA), internationalization, web components",
        ],
        practice:
          "Convert your app into a minimal PWA: add a manifest and a service worker that caches the shell. Run Lighthouse and improve the accessibility and PWA scores.",
      },
      {
        n: 12,
        topic: "Application Deployment",
        focus: "Getting your app onto the public internet.",
        concepts: [
          "WSGI servers (gunicorn) vs the Flask dev server",
          "Reverse proxies (nginx); static file serving; HTTPS via Let's Encrypt",
          "Environment variables, 12-factor config, requirements.txt / venv",
          "PaaS options (Render, Railway, Fly.io, PythonAnywhere); intro to Docker",
        ],
        practice:
          "Deploy your finished app to a free PaaS with a real domain and HTTPS. Move secrets to env vars. Write a one-page deployment runbook. Do a timed mock end-term across all 12 weeks.",
      },
    ],
    resources: [
      {
        name: "MDN Web Docs",
        kind: "Reference",
        note: "The single best reference for HTML, CSS, JS, and HTTP. Use it as your default 'how does this work?' lookup.",
        url: "https://developer.mozilla.org/",
      },
      {
        name: "Flask documentation (Pallets)",
        kind: "Official docs",
        note: "Read the tutorial start-to-finish in week 3 or 4 — it builds essentially the same kind of app the course expects.",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "Jinja2 Template Designer Documentation",
        kind: "Official docs",
        note: "Short and complete — covers everything you'll need for the View layer.",
        url: "https://jinja.palletsprojects.com/en/stable/templates/",
      },
      {
        name: "Eloquent JavaScript (Marijn Haverbeke)",
        kind: "Free book",
        note: "The clearest free JS book. Chapters 1–6, 13–14, and 18 align with weeks 8 and 11.",
        url: "https://eloquentjavascript.net/",
      },
      {
        name: "FreeCodeCamp — Responsive Web Design",
        kind: "Free course",
        note: "Hands-on HTML/CSS practice with auto-graded projects. Finish the Flexbox + Grid sections.",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      },
      {
        name: "NPTEL — Modern Application Development",
        kind: "Free course",
        note: "Lecture series by the IITM instructors; the closest match to this course's tone.",
        url: "https://nptel.ac.in/courses/106106156",
      },
      {
        name: "The Flask Mega-Tutorial — Miguel Grinberg",
        kind: "Tutorial",
        note: "A long, project-driven Flask walkthrough covering auth, DB, deployment, testing — every theme of MAD.",
        url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
      },
      {
        name: "OWASP Top 10",
        kind: "Reference",
        note: "Read the current list once — week 9 questions track these directly.",
        url: "https://owasp.org/www-project-top-ten/",
      },
    ],
    projects: [
      "Personal blog: Flask + SQLAlchemy + Jinja2 with auth, post CRUD, comments, tags, and a JSON API exposing posts. Deploy to a free PaaS.",
      "Expense tracker: log expenses by category, show monthly summary charts on the frontend with Chart.js, export to CSV, and back it with SQLite.",
      "URL shortener with analytics: short codes stored in DB, click counter, referrer tracking, and a dashboard page.",
      "Bookmark / read-later app: form to save URLs, server fetches and stores the page title, tag system, search box that filters via fetch() without reload.",
      "Mini Twitter clone: users, follow relationships, post timeline, REST API, login with hashed passwords, and a basic Selenium end-to-end test for the post flow.",
    ],
    exam: [
      "Quiz 1 (weeks 1–5/6): HTTP fundamentals, HTML/CSS, Jinja templating, basic Flask routing, simple SQL via ORM. The conceptual half — drill terminology.",
      "Quiz 2 (middle weeks): REST APIs, sessions/auth, frontend JS + fetch. Bring a written cheat-sheet of HTTP status codes and REST verbs to your prep.",
      "End-term (cumulative): security (OWASP), testing, PWAs, and deployment carry heavy weight — don't skim weeks 9–12.",
      "Practice writing code on paper: small Flask routes, Jinja templates, and SQLAlchemy queries are common short-answer questions.",
      "Pitfall: confusing 401 (unauthenticated) with 403 (unauthorized); thinking POST is idempotent; missing autoescape consequences for XSS.",
      "Pitfall: forgetting CSRF tokens on state-changing forms; mixing up GET/POST when designing REST endpoints; misnaming HTTP methods.",
    ],
  },
  {
    id: "sc",
    code: "BSSE2001",
    name: "System Commands",
    short: "SC",
    url: "https://study.iitm.ac.in/ds/course_pages/BSSE2001.html",
    credits: 4,
    blurb:
      "A working knowledge of Linux as a programmer's environment: shell, filesystem, processes, scripting, text processing, networking, version control, and packaging. Heavily practical — most marks come from VM-based programming assignments, not theory. If you can comfortably live in a terminal by the end, you've passed.",
    weeks: [
      {
        n: 1,
        topic: "Linux Fundamentals and the Command Line",
        focus: "Get comfortable in a Linux shell from the very first command.",
        concepts: [
          "Operating systems and the role of the shell (bash); kernel vs userspace",
          "Navigation: pwd, ls, cd, file, stat; man and --help",
          "Hardware and OS introspection: hwinfo, lshw, lscpu, uname, lsb_release",
          "Package basics; stdin/stdout/stderr and basic redirection (>, >>, <)",
        ],
        practice:
          "Spin up a Linux VM (or WSL2). Run 30 commands from chapter 1–3 of 'The Linux Command Line'. Watch MIT Missing Semester lecture 1 and reproduce every command shown.",
      },
      {
        n: 2,
        topic: "Packages, Files, and Permissions",
        focus: "Install software and reason about who can read/write what.",
        concepts: [
          "apt / dpkg: install, remove, search, list; repositories and sources.list",
          "File types (regular, directory, link, device); inspecting with ls -l",
          "Permissions in symbolic (u+x) and numeric (755, 644) form; chmod, chown, chgrp",
          "Environment variables: $HOME, $USER, $PATH; export and unset",
        ],
        practice:
          "Solve OverTheWire Bandit levels 1–10. Create a script in ~/bin, add it to your PATH, and run it from anywhere. Change a file's permissions five different ways with chmod.",
      },
      {
        n: 3,
        topic: "Shell Internals, Links, and Processes",
        focus: "Understand the shell's environment and the process model.",
        concepts: [
          "Shell variables vs environment variables; PS1 and prompt customization",
          "Hard links vs symbolic links; inodes and what 'a file' really is",
          "Filesystem hierarchy: /etc, /var, /usr, /home, /tmp, /proc",
          "Processes: ps, top, htop, kill, signals; foreground/background; ssh basics",
        ],
        practice:
          "Customize your PS1 with colors and git branch info. Create a hard link and a symlink to the same file and observe behavior when you delete the original. Continue OverTheWire Bandit levels 11–20.",
      },
      {
        n: 4,
        topic: "Pipes, Regex, find, and Editors",
        focus: "Chain small tools into powerful one-liners.",
        concepts: [
          "Pipes (|) and command composition; tee, xargs",
          "Regular expressions; grep/egrep with -E, -i, -v, -r, -o",
          "find with -name, -type, -mtime, -size, -exec",
          "Terminal editors: nano (gentle), vi/vim (modes, motions, save/quit), emacs",
        ],
        practice:
          "Solve 20 grep/find/awk challenges on commandchallenge.com. Learn 15 vim motions (h/j/k/l, w/b, d/y/p, i/a/o, :w :q) until they feel automatic. Use ExplainShell to break down 5 complex one-liners.",
      },
      {
        n: 5,
        topic: "Shell Scripting",
        focus: "Automate repetitive work with bash scripts.",
        concepts: [
          "Shebang (#!/bin/bash); script arguments ($1, $@, $#); exit codes",
          "Conditionals: if/elif/else/fi; [[ ... ]] tests",
          "Loops: for, while, until; case statements",
          "Functions; variable scoping (local); scheduling with cron",
        ],
        practice:
          "Write 5 scripts: a backup script that tars a folder, a log-rotation script, a 'health check' that pings hosts, a renamer using a regex, and a cron job that emails you a daily summary.",
      },
      {
        n: 6,
        topic: "Text Processing with sed and awk",
        focus: "The two heavyweight text tools every Linux user must know.",
        concepts: [
          "sed: substitution (s/old/new/g), addresses, in-place edit (-i)",
          "awk: fields ($1..$NF), BEGIN/END blocks, patterns, printf",
          "Combining cut, sort, uniq, wc, head, tail with sed/awk",
          "Practical tasks: log parsing, CSV manipulation, report generation",
        ],
        practice:
          "Parse an Apache/nginx access log with awk to count requests per IP and top-10 URLs. Use sed to bulk-rename text inside 20 files in place. Work through 'AWK one-liners explained' by Peteris Krumins.",
      },
      {
        n: 7,
        topic: "Make, Archives, and Networking",
        focus: "Build systems, archive tools, and basic network diagnosis.",
        concepts: [
          "make and Makefiles: targets, dependencies, recipes, variables",
          "Archiving and compression: tar, gzip, bzip2, xz, zip",
          "Networking: IP addresses, ports, DNS, HTTP basics",
          "Diagnostics: ping, traceroute, dig, nslookup, ss/netstat, curl, wget",
        ],
        practice:
          "Write a Makefile that builds and tests a small C/Python project with all/clean/test targets. Capture a packet trace with tcpdump for one curl call and identify the layers. Compare gzip vs xz on the same 100MB file.",
      },
      {
        n: 8,
        topic: "RAID, Git, and Collaboration",
        focus: "Disk redundancy concepts and real version control.",
        concepts: [
          "RAID 0/1/5/6/10: redundancy vs performance trade-offs",
          "Git basics: init, add, commit, status, log, diff",
          "Branching and merging; resolving conflicts; rebase vs merge",
          "Remote workflows: clone, fetch, pull, push; pull requests on GitHub",
        ],
        practice:
          "Complete the 'Learn Git Branching' interactive tutorial. Create a GitHub repo, branch off, make commits, open a PR against yourself, resolve a deliberate conflict, and merge. Read the Pro Git book chapters 1–3.",
      },
      {
        n: 9,
        topic: "Python on Linux and Environment Management",
        focus: "Use Python as a system tool with isolated environments.",
        concepts: [
          "python3 vs system python; pip and the package index",
          "Virtual environments: venv, activation, requirements.txt",
          "Useful stdlib modules for sysadmin: os, sys, subprocess, pathlib, argparse",
          "Calling shell from Python and vice-versa; choosing bash vs Python for a task",
        ],
        practice:
          "Convert your week-5 backup bash script into a Python CLI with argparse. Freeze its requirements.txt. Write a Python script that walks a tree and reports file sizes (use pathlib, not os.walk strings).",
      },
      {
        n: 10,
        topic: "Process Control, Job Scheduling, and Logs",
        focus: "Long-running services, scheduling, and observing the system.",
        concepts: [
          "Foreground/background jobs (&, fg, bg, jobs, nohup, disown)",
          "cron and crontab; anacron; systemd timers as a modern alternative",
          "systemd services: unit files, enable/start/status, journalctl",
          "Log files in /var/log; logrotate; tailing logs with tail -f and less +F",
        ],
        practice:
          "Write a systemd service unit that runs your Python script from week 9 on boot, plus a timer that runs it every 10 minutes. Inspect its logs with journalctl -u. Set up logrotate for your own log file.",
      },
      {
        n: 11,
        topic: "Web Servers, SSH, and Remote Workflows",
        focus: "Running services and working on remote machines fluently.",
        concepts: [
          "SSH: keypairs, ssh-keygen, ssh-copy-id, ~/.ssh/config",
          "Copying files: scp, rsync (with --delete, --dry-run, --exclude)",
          "Persistent sessions: tmux or screen (sessions, windows, panes)",
          "Running a basic web server: python -m http.server, nginx fundamentals",
        ],
        practice:
          "Set up passwordless SSH to a free cloud VM. rsync a local folder up and back with --dry-run first. Serve a static site with nginx on the VM. Live inside tmux for one full work session.",
      },
      {
        n: 12,
        topic: "Containers, Deployment, and Course Wrap-Up",
        focus: "Package and ship a real application in a container.",
        concepts: [
          "Containers vs VMs; Docker images vs containers; layered filesystem",
          "Dockerfile basics: FROM, RUN, COPY, CMD, ENTRYPOINT, EXPOSE",
          "docker build / run / ps / logs / exec; volumes and port mapping",
          "docker compose for multi-service apps; a tour of CI/CD pipelines",
        ],
        practice:
          "Dockerize a Flask 'hello world' (Dockerfile + docker run -p). Add a Postgres service with docker compose and connect them. Push the image to Docker Hub. Do a timed practice OPPE-style assignment covering weeks 1–12.",
      },
    ],
    resources: [
      {
        name: "The Linux Command Line — William Shotts",
        kind: "Free book",
        note: "The canonical free book for this course. Covers everything from week 1 navigation to week 5 shell scripting cleanly.",
        url: "https://linuxcommand.org/tlcl.php",
      },
      {
        name: "MIT Missing Semester",
        kind: "Free course",
        note: "Twelve short lectures on the shell, vim, git, debugging, and metaprogramming — exactly the missing CS skill set. Watch all 12.",
        url: "https://missing.csail.mit.edu/",
      },
      {
        name: "ExplainShell",
        kind: "Tool",
        note: "Paste any command and see every flag annotated against the man page — invaluable while learning awk/find/sed.",
        url: "https://explainshell.com/",
      },
      {
        name: "tldr pages",
        kind: "Tool",
        note: "Community-driven 'man pages with examples' — install with `pip install tldr` and use whenever a man page is too dense.",
        url: "https://tldr.sh/",
      },
      {
        name: "OverTheWire — Bandit",
        kind: "Practice (wargame)",
        note: "The single best way to learn the shell by doing. Levels 0–25 cover everything through week 6.",
        url: "https://overthewire.org/wargames/bandit/",
      },
      {
        name: "Pro Git book — Chacon & Straub",
        kind: "Free book",
        note: "The reference for week 8. Chapters 1–3 are mandatory, chapter 7 is great for rebase and reflog.",
        url: "https://git-scm.com/book/en/v2",
      },
      {
        name: "Learn Git Branching",
        kind: "Interactive tutorial",
        note: "Visual sandbox that teaches branching, rebasing, and merging by doing. Finish all the 'Main' levels.",
        url: "https://learngitbranching.js.org/",
      },
      {
        name: "Docker Curriculum (Prakhar Srivastav)",
        kind: "Tutorial",
        note: "Best free intro to Docker — builds from `hello-world` up to a multi-container app, matching week 12.",
        url: "https://docker-curriculum.com/",
      },
    ],
    projects: [
      "Personal dotfiles repo: version-control your .bashrc, .vimrc, .tmux.conf, and an install.sh that symlinks them on a fresh machine.",
      "Server-health dashboard: bash + awk script that collects CPU, memory, disk, and load every minute via cron, writes to a log, and renders a simple HTML report served by python -m http.server.",
      "Log analyzer CLI: Python + argparse tool that parses an nginx access log and reports top IPs, status code distribution, and slowest endpoints. Packaged as a pip-installable command.",
      "Automated backup pipeline: rsync local folders to a remote VM nightly via a systemd timer, with retention (keep last 7), and a notification on failure.",
      "Dockerized portfolio site: Dockerfile + docker-compose with nginx serving a static site and a tiny Flask API, deployed to a free cloud VM with HTTPS via Let's Encrypt.",
    ],
    exam: [
      "Most marks come from the OPPE (online programming practical exam) on a real VM — practice in a terminal, not on paper. Time yourself.",
      "Re-do every weekly graded programming assignment from scratch the day before the OPPE; question patterns repeat closely.",
      "For theory quizzes, memorize: permission octals (755/644/600), common signals (1/2/9/15), and the difference between symbolic and hard links.",
      "Drill the 10 most common one-liners (grep | awk | sort | uniq -c | sort -rn | head) until you can type them blind.",
      "Pitfall: forgetting `chmod +x` on a script; quoting bugs in bash (use \"$var\" not $var); using `==` in sh test instead of `=`.",
      "Pitfall: editing live files with sed without `-i.bak`; running rsync without `--dry-run` first; pushing to the wrong git branch — practice safe defaults.",
    ],
  },
  {
    id: "mlt",
    code: "BSCS2007",
    name: "Machine Learning Techniques",
    short: "MLT",
    url: "https://study.iitm.ac.in/ds/course_pages/BSCS2007.html",
    credits: 4,
    blurb:
      "The 'algorithms' half of the ML sequence — taught right after ML Foundations, which gives you the math. Two halves: unsupervised learning (representation, clustering, density estimation) in weeks 1–4, then supervised learning (regression, classification, SVMs, ensembles, neural nets) in weeks 5–12. Heavy on derivations; you are expected to know why an algorithm works, not just call sklearn.",
    weeks: [
      {
        n: 1,
        topic: "Introduction; Representation Learning — PCA",
        focus: "Course overview and the first unsupervised technique: PCA.",
        concepts: [
          "Supervised vs unsupervised vs reinforcement learning recap",
          "Why representation matters; the curse of dimensionality",
          "PCA as variance maximization and as reconstruction-error minimization",
          "Eigen-decomposition of the covariance matrix; choosing k components",
        ],
        practice:
          "Derive PCA from both the variance and reconstruction viewpoints on paper. Run PCA on the MNIST or Iris dataset with sklearn; plot explained variance vs k and visualize the top-2 components.",
      },
      {
        n: 2,
        topic: "Kernel PCA",
        focus: "PCA in a non-linear feature space via the kernel trick.",
        concepts: [
          "Limits of linear PCA on non-linear manifolds",
          "Feature maps φ(x) and inner products; the kernel trick",
          "Common kernels: polynomial, RBF (Gaussian), sigmoid; Mercer's condition",
          "Centering in feature space; eigenproblem on the kernel matrix",
        ],
        practice:
          "Apply Kernel PCA with an RBF kernel to the 'two moons' / 'two circles' toy datasets in sklearn and compare with linear PCA. Derive the centered Gram matrix step by step.",
      },
      {
        n: 3,
        topic: "Clustering — K-means and Kernel K-means",
        focus: "Partition data into clusters by minimizing within-cluster variance.",
        concepts: [
          "K-means objective; Lloyd's algorithm (assign, update) and convergence",
          "Initialization (random, k-means++) and the local-minima trap",
          "Choosing k: elbow method, silhouette score",
          "Kernel K-means and its equivalence to spectral clustering (intuition)",
        ],
        practice:
          "Implement K-means from scratch in NumPy on a synthetic Gaussian-blob dataset. Plot the elbow and silhouette curves. Compare against sklearn.cluster.KMeans on the Iris dataset.",
      },
      {
        n: 4,
        topic: "Estimation — MLE, Bayesian Estimation, GMM and EM",
        focus: "Estimating parameters; mixtures of Gaussians via EM.",
        concepts: [
          "MLE vs MAP vs Bayesian estimation",
          "Mixture models: soft assignment, latent variables",
          "EM algorithm: E-step (responsibilities), M-step (updates)",
          "Monotonic likelihood increase; relation between GMM and K-means",
        ],
        practice:
          "Hand-derive the EM updates for a 2-component 1D Gaussian mixture. Implement it in NumPy and animate the E and M steps on a toy bimodal dataset. Compare against sklearn.mixture.GaussianMixture.",
      },
      {
        n: 5,
        topic: "Regression — Least Squares and the Bayesian View",
        focus: "Linear regression, derived two ways.",
        concepts: [
          "Linear model y = Xβ + ε; normal equations and the closed-form solution",
          "Gradient descent for least squares; mini-batch and stochastic variants",
          "Probabilistic view: Gaussian noise → MLE recovers least squares",
          "Bayesian linear regression: prior, posterior, predictive distribution",
        ],
        practice:
          "Implement linear regression three ways (normal equations, gradient descent, sklearn) on the Boston/Diabetes dataset and check they match. Derive the posterior over β under a Gaussian prior.",
      },
      {
        n: 6,
        topic: "Regression — Ridge and LASSO",
        focus: "Regularization to control variance and induce sparsity.",
        concepts: [
          "Bias-variance trade-off; why regularize",
          "Ridge regression (L2): closed form (XᵀX + λI)⁻¹Xᵀy",
          "LASSO (L1): sparsity induction and feature selection",
          "Choosing λ by cross-validation; Bayesian interpretation as Gaussian / Laplace priors",
        ],
        practice:
          "On a noisy high-dimensional dataset, sweep λ for ridge and LASSO and plot CV error and coefficient paths. Reproduce the famous LASSO coefficient-path plot.",
      },
      {
        n: 7,
        topic: "Classification — K-NN and Decision Trees",
        focus: "Two non-parametric classifiers with very different inductive biases.",
        concepts: [
          "K-NN: distance metrics, choice of k, voting, computational cost",
          "Decision trees: split criteria (Gini, entropy / information gain)",
          "Tree construction (ID3/C4.5/CART) and pruning",
          "Overfitting: K-NN with small k, deep unpruned trees",
        ],
        practice:
          "Implement K-NN from scratch and validate against sklearn. Train a decision tree on Iris with sklearn, export it with graphviz, and trace one prediction by hand through the tree.",
      },
      {
        n: 8,
        topic: "Classification — Generative Models, Naive Bayes",
        focus: "Modelling P(x|y) and using Bayes' rule to classify.",
        concepts: [
          "Generative vs discriminative classifiers; pros and cons of each",
          "Bayes' theorem applied to classification; class priors and likelihoods",
          "Naive Bayes assumption (conditional independence of features given y)",
          "Gaussian, Bernoulli, Multinomial Naive Bayes; Laplace smoothing",
        ],
        practice:
          "Build a Multinomial Naive Bayes spam classifier on the SMS Spam Collection dataset from scratch — tokenize, count, smooth, predict. Compare accuracy vs sklearn's MultinomialNB.",
      },
      {
        n: 9,
        topic: "Discriminative Models — Perceptron and Logistic Regression",
        focus: "Learn a decision boundary directly.",
        concepts: [
          "Perceptron algorithm; the perceptron convergence theorem (linearly separable case)",
          "Logistic regression as maximum-likelihood under a Bernoulli model",
          "The logistic loss (binary cross-entropy); gradient and Hessian",
          "Multiclass extension via softmax",
        ],
        practice:
          "Implement the perceptron and logistic regression from scratch in NumPy on a 2D toy dataset and plot the decision boundary at each gradient step. Derive the logistic-loss gradient on paper.",
      },
      {
        n: 10,
        topic: "Support Vector Machines",
        focus: "Maximum-margin classification — the dual, kernels, and soft margins.",
        concepts: [
          "Geometric margin; the maximum-margin primal optimization",
          "Lagrangian and the dual; support vectors",
          "Soft-margin SVM with slack variables (parameter C)",
          "Kernel SVM (linear, polynomial, RBF); choosing hyperparameters",
        ],
        practice:
          "Derive the SVM dual from the primal on paper. Use sklearn.svm.SVC to fit linear and RBF SVMs to the moons and digits datasets; tune C and γ on a grid with cross-validation.",
      },
      {
        n: 11,
        topic: "Ensemble Methods — Bagging and Boosting (AdaBoost)",
        focus: "Combine many weak learners into one strong learner.",
        concepts: [
          "Bias-variance perspective on ensembles",
          "Bagging and Random Forests: bootstrap samples + feature subsampling",
          "Boosting: train sequentially, reweight misclassified points",
          "AdaBoost: weights, weak-learner weight α, and the exponential loss view",
        ],
        practice:
          "Hand-trace one AdaBoost round on a 5-point dataset (update sample weights and compute α). Train Random Forest and AdaBoost on a tabular dataset and compare against a single decision tree.",
      },
      {
        n: 12,
        topic: "Artificial Neural Networks — Multiclass Classification",
        focus: "From logistic regression to a small feedforward network.",
        concepts: [
          "Perceptron → MLP; activation functions (sigmoid, tanh, ReLU)",
          "Softmax output and cross-entropy loss for multiclass",
          "Backpropagation: chain rule over a computational graph",
          "SGD, mini-batches, learning rate; overfitting and the role of regularization/dropout (intro)",
        ],
        practice:
          "Implement a 2-layer neural net from scratch in NumPy (forward + backprop + SGD) on MNIST and reach >90% test accuracy. Then re-do it in PyTorch in <50 lines. Run a timed mock end-term covering all 12 weeks.",
      },
    ],
    resources: [
      {
        name: "Pattern Recognition and Machine Learning — Christopher Bishop",
        kind: "Primary textbook",
        note: "The course's main reference. Chapters 1, 4, 6, 7, 9, 14 cover most of the syllabus directly.",
      },
      {
        name: "The Elements of Statistical Learning — Hastie, Tibshirani, Friedman",
        kind: "Reference book",
        note: "Free PDF. Gold standard for regression, classification, trees, boosting, SVMs.",
        url: "https://hastie.su.domains/ElemStatLearn/",
      },
      {
        name: "An Introduction to Statistical Learning (ISLR)",
        kind: "Reference book",
        note: "Free PDF. Gentler than ESL; great first read for linear models, trees, and ensembles.",
        url: "https://www.statlearning.com/",
      },
      {
        name: "Andrew Ng — Machine Learning Specialization (Coursera)",
        kind: "Free course",
        note: "Best paced video coverage of regression, classification, neural nets. Audit for free.",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
      },
      {
        name: "StatQuest with Josh Starmer",
        kind: "YouTube",
        note: "Friendly intuition videos for PCA, K-means, GMM/EM, decision trees, AdaBoost, SVM — watch one before each lecture.",
        url: "https://www.youtube.com/@statquest",
      },
      {
        name: "scikit-learn user guide",
        kind: "Official docs",
        note: "Use it as a hands-on companion — most lectures have a directly corresponding chapter.",
        url: "https://scikit-learn.org/stable/user_guide.html",
      },
      {
        name: "Pattern Classification — Duda, Hart, Stork",
        kind: "Reference book",
        note: "Classic source for Bayesian classification, generative models, and discriminant analysis.",
      },
      {
        name: "CS229 (Stanford) Lecture Notes",
        kind: "Lecture notes",
        note: "Andrew Ng's original notes. The SVM and EM notes in particular are the cleanest derivations available.",
        url: "https://cs229.stanford.edu/",
      },
    ],
    projects: [
      "PCA + K-means image-segmentation pipeline: project image patches with PCA, cluster with K-means, and recolor the image by cluster — built from scratch in NumPy.",
      "GMM colour quantizer: fit a Gaussian Mixture (with your own EM) over an image's RGB values and replace each pixel with its component mean.",
      "End-to-end tabular ML benchmark: on the UCI Adult or Titanic dataset, train logistic regression, decision tree, random forest, AdaBoost, and SVM (RBF); produce a comparison report with CV accuracy and confusion matrices.",
      "From-scratch ML library: implement linear/ridge/LASSO regression, logistic regression, K-NN, decision tree, K-means, and a 2-layer neural net with a unified fit/predict API and tests.",
      "MNIST digit classifier shoot-out: Naive Bayes vs Logistic Regression vs SVM (RBF) vs a NumPy MLP; report training time and accuracy and discuss the bias-variance picture.",
    ],
    exam: [
      "Co-requisite ML Foundations is heavily used — keep its eigenvalue, gradient, Lagrange, and MLE machinery fresh; MLT exams assume it.",
      "Quiz 1 (weeks 1–4/5): PCA, kernel PCA, K-means, EM/GMM, least squares. Expect derivations and small numerical computations.",
      "Quiz 2 (middle weeks): ridge/LASSO, K-NN, decision trees, Naive Bayes, perceptron, logistic regression — focus on objective functions and update rules.",
      "End-term (cumulative): SVMs, ensembles, neural networks carry heavy weight; the SVM dual and one AdaBoost round are perennial questions.",
      "Be able to derive — not just state — PCA, EM for GMM, logistic-loss gradient, SVM dual, and the AdaBoost weight update. These are the most common written questions.",
      "Pitfall: forgetting to centre data before PCA; confusing generative (P(x|y)) with discriminative (P(y|x)) models; mixing up the L1 vs L2 penalty effects; sign errors in gradient derivations.",
    ],
  },
];
