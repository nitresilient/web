import type { Subject } from "./types";

export const SUBJECTS: Subject[] = [
  {
    id: "dl-proj",
    code: "BSDA2001P",
    name: "Deep Learning and Generative AI — Project",
    short: "DL/GenAI Proj",
    url: "https://study.iitm.ac.in/ds/course_pages/BSDA2001P.html",
    credits: 4,
    blurb:
      "The capstone of the degree — and the only Sem 8 course. You take everything from ML Foundations, MLP, MLT, MLOps, and the DL & GenAI theory course and turn it into one substantial, end-to-end project built with PyTorch and Hugging Face. Assessment is a live demo plus an industry-expert viva that simulates a real ML interview, so the bar is reproducibility and depth of understanding, not just a working notebook.",
    weeks: [
      {
        n: 1,
        topic: "Problem Selection and Scoping",
        focus:
          "Pick a problem that is ambitious enough to defend in a viva but small enough to actually finish in 12 weeks.",
        concepts: [
          "Project archetypes: RAG system, LLM fine-tune, diffusion / image generation, vision-language model, multimodal agent",
          "Scoping a capstone: clear input/output, measurable metric, baseline that already exists",
          "Compute budget: what fits on a free Colab T4 / Kaggle P100 vs what needs paid A100s",
          "Risk register — data access, training instability, evaluation difficulty",
          "Writing a 1-page proposal: problem, dataset, model family, evaluation, deliverable",
        ],
        practice:
          "Draft three candidate proposals, score each on novelty/feasibility/compute, and commit to one. Open a GitHub repo with a README scoping document and a kanban board for the 12 weeks.",
      },
      {
        n: 2,
        topic: "Literature Scan",
        focus:
          "Find the 8–12 papers and 2–3 reference implementations your project sits on top of.",
        concepts: [
          "Searching arxiv-sanity, Papers With Code, Semantic Scholar, Google Scholar by task and SOTA",
          "Reading a deep-learning paper: skim abstract/figures/tables, then method, then ablations",
          "Identifying the canonical baseline and the current SOTA on your benchmark",
          "Tracking related code on GitHub: stars, last commit, reproducibility of reported numbers",
          "Writing a literature-review section that justifies your method choice",
        ],
        practice:
          "Build an annotated bibliography of 10 papers in a Zotero / Notion table. For each, capture method, dataset, headline metric, and what you can borrow. Push a 'related work' markdown into the repo.",
      },
      {
        n: 3,
        topic: "Dataset Acquisition and Preprocessing",
        focus:
          "Get the data, clean it, version it, and understand what is actually inside it before you train anything.",
        concepts: [
          "Public dataset sources: Hugging Face Datasets, Kaggle, OpenML, LAION, Common Crawl",
          "Licensing and PII checks — what you can publish and what you cannot",
          "Tokenization (BPE, WordPiece, SentencePiece) or image transforms (resize, augment, normalize)",
          "Train / validation / test splits with no leakage; stratification",
          "Data versioning with DVC or Hugging Face Hub revisions",
        ],
        practice:
          "Write a `data.py` that downloads, cleans, splits, and caches the dataset. Run exploratory data analysis: class balance, length distribution, sample images / texts. Commit a dataset card.",
      },
      {
        n: 4,
        topic: "Baseline Model",
        focus:
          "Get the dumbest reasonable model working end-to-end before touching anything fancy.",
        concepts: [
          "'Always predict the majority class' / random / nearest-neighbour baselines",
          "Off-the-shelf pretrained checkpoint (BERT-base, ResNet-50, SD 1.5) used zero-shot",
          "Minimum-viable training loop in PyTorch / Lightning / Hugging Face Trainer",
          "Logging losses and metrics to Weights & Biases or TensorBoard from day one",
          "Sanity checks: overfit a single batch, verify forward/backward shapes",
        ],
        practice:
          "Train and evaluate a baseline end-to-end on a small subset. Record the metric in the README. Commit a `train.py` that runs in under 10 minutes on Colab.",
      },
      {
        n: 5,
        topic: "Architecture Iteration",
        focus:
          "Move from the baseline to the architecture you actually want to defend.",
        concepts: [
          "Transformer blocks: multi-head attention, KV cache, positional encodings (RoPE, ALiBi)",
          "Diffusion: U-Net / DiT backbones, noise schedules, classifier-free guidance",
          "RAG: chunking strategies, embedding models (BGE, E5), vector stores (FAISS, Chroma, Qdrant)",
          "Adapter methods: LoRA, QLoRA, prefix tuning — when each is the right choice",
          "PEFT, quantization (bitsandbytes 4/8-bit), gradient checkpointing for memory",
        ],
        practice:
          "Swap the baseline for your chosen architecture. Profile memory and step time. Document why this architecture beats the baseline conceptually, even before final numbers.",
      },
      {
        n: 6,
        topic: "Training and Hyperparameter Tuning",
        focus:
          "Run real training and treat hyperparameters as experiments, not guesses.",
        concepts: [
          "Optimizers: AdamW, Lion; learning-rate schedules (warmup + cosine)",
          "Mixed precision (fp16 / bf16); gradient accumulation; effective batch size",
          "Hyperparameter search: grid, random, Optuna / W&B sweeps",
          "Stability tricks: gradient clipping, layer-norm placement, weight decay",
          "Early stopping and model checkpointing strategy",
        ],
        practice:
          "Run at least one sweep over 3–5 hyperparameters. Track every run in W&B with the same metric. Pick the winning config and document the search budget.",
      },
      {
        n: 7,
        topic: "Evaluation — Quantitative",
        focus:
          "Compute the metrics that prove (or refute) that the model works.",
        concepts: [
          "Task-appropriate metrics: accuracy/F1, BLEU/ROUGE, BERTScore, FID/CLIPScore, perplexity, MRR@k / nDCG",
          "LLM-as-a-judge with GPT-4 / Claude — when it is acceptable and how to validate it",
          "Held-out test set vs cross-validation; confidence intervals via bootstrap",
          "Comparison table: your model vs baseline vs SOTA on the same split",
          "Standard benchmarks: MMLU, HELM, MTEB, GLUE, ImageNet — pick the right one",
        ],
        practice:
          "Build an `evaluate.py` that produces the full results table from a single command. Commit the results JSON. Plot training curves and per-class / per-subset breakdowns.",
      },
      {
        n: 8,
        topic: "Evaluation — Qualitative and Failure Analysis",
        focus:
          "Look at what the model gets wrong; numbers alone never pass a viva.",
        concepts: [
          "Error categorization: confusion matrix, error buckets, qualitative samples",
          "Hallucination, bias, and safety probes for generative models",
          "Adversarial / out-of-distribution test cases",
          "Slice-based evaluation (per language, per demographic, per length bucket)",
          "Honest reporting: what the model still cannot do",
        ],
        practice:
          "Produce a one-page 'failure analysis' section with 20 cherry-picked good and bad outputs, grouped by failure mode. Add a 'limitations' subsection to the report draft.",
      },
      {
        n: 9,
        topic: "Deployment",
        focus:
          "Wrap the trained model into something a non-author can actually use.",
        concepts: [
          "Serving stacks: FastAPI, Gradio, Streamlit, Hugging Face Spaces",
          "Inference optimization: ONNX, TensorRT, vLLM, llama.cpp, quantized weights",
          "Containerization with Docker; a one-command `docker run` for graders",
          "Latency, throughput, and cost budgeting per request",
          "Basic observability: request logging, error rates, output sampling",
        ],
        practice:
          "Deploy the model to a Hugging Face Space or a small VPS. Measure p50/p95 latency under 10 concurrent requests. Put the public URL in the README.",
      },
      {
        n: 10,
        topic: "Demo Build",
        focus:
          "Design the live demo you will present and the viva will probe.",
        concepts: [
          "Demo arc: problem → input → live inference → metric → comparison to baseline",
          "Pre-loaded examples that exhibit a strength AND a known weakness",
          "Backup plan if the GPU / network fails on demo day (local screen recording, cached outputs)",
          "Two-minute, five-minute, and fifteen-minute versions of the same demo",
          "Anticipating examiner prompts: 'try this edge case', 'what if I change X?'",
        ],
        practice:
          "Record a 5-minute Loom walkthrough of the demo. Practise the live demo end-to-end three times against a timer. Prepare a slide that links every demo step to a section of the report.",
      },
      {
        n: 11,
        topic: "Report and Reproducibility",
        focus:
          "Write the report and make sure anyone can reproduce your numbers.",
        concepts: [
          "Report structure: abstract, related work, method, experiments, results, limitations, ethics",
          "Reproducibility checklist: pinned `requirements.txt`, seed, exact data version, single command to retrain",
          "Figures and tables that stand on their own (captions, axis labels, units)",
          "Citation hygiene with BibTeX",
          "Ethics statement: dataset provenance, potential misuse, model card",
        ],
        practice:
          "Draft the full report in LaTeX (Overleaf) or Markdown. Clone the repo into a fresh environment and reproduce the headline number from scratch — fix every step that breaks.",
      },
      {
        n: 12,
        topic: "Viva Defence and Submission",
        focus:
          "Defend the work to an industry expert and ship the final artefacts.",
        concepts: [
          "Common viva probes: 'why this architecture?', 'what would you change with 10× compute?', 'walk me through one backward pass'",
          "Defending design choices with ablations rather than opinions",
          "Discussing failure modes openly — examiners reward honesty",
          "Final artefacts: code repo, model weights on HF Hub, deployed demo, PDF report, recorded demo video",
          "Post-mortem: what worked, what did not, what you would do differently",
        ],
        practice:
          "Do two mock vivas with a peer using a question bank covering data, model, training, evaluation, deployment. Submit all artefacts at least 48 hours before the official deadline.",
      },
    ],
    resources: [
      {
        name: "Deep Learning — Goodfellow, Bengio, Courville",
        kind: "Reference textbook",
        note: "The foundational reference for the architectures and optimization you will defend in the viva. Free online.",
        url: "https://www.deeplearningbook.org/",
      },
      {
        name: "Deep Learning: Foundations and Concepts — Bishop & Bishop",
        kind: "Reference textbook",
        note: "Modern (2024) treatment that covers transformers, diffusion, and normalizing flows — better aligned with a GenAI project than Goodfellow alone.",
        url: "https://www.bishopbook.com/",
      },
      {
        name: "Hugging Face — Transformers, Diffusers, PEFT docs and free courses",
        kind: "Library docs + course",
        note: "Single most useful resource for the build. The NLP course, Diffusion course, and Audio course are all free and project-grade.",
        url: "https://huggingface.co/learn",
      },
      {
        name: "PyTorch official tutorials",
        kind: "Library docs",
        note: "Read the 'Learn the Basics' track plus the distributed training and `torch.compile` pages before training your real model.",
        url: "https://pytorch.org/tutorials/",
      },
      {
        name: "Andrej Karpathy — Neural Networks: Zero to Hero (and nanoGPT)",
        kind: "YouTube + code",
        note: "Builds GPT from scratch on video. The clearest way to be able to answer 'walk me through one backward pass' in the viva.",
        url: "https://karpathy.ai/zero-to-hero.html",
      },
      {
        name: "Papers With Code",
        kind: "Research portal",
        note: "Use during weeks 1–2 to find the SOTA baseline and a reference implementation for whatever task you pick.",
        url: "https://paperswithcode.com/",
      },
      {
        name: "Weights & Biases — documentation and free courses",
        kind: "Tooling",
        note: "Free for students; use it from week 4 onward to log every run, every sweep, and every artefact. Examiners love the dashboards.",
        url: "https://docs.wandb.ai/",
      },
      {
        name: "Designing Machine Learning Systems — Chip Huyen",
        kind: "Reference book",
        note: "Best single reference for the deployment, evaluation, and monitoring sections of the report.",
        url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
      },
      {
        name: "fast.ai — Practical Deep Learning Part 2 (From Deep Learning Foundations to Stable Diffusion)",
        kind: "Free course",
        note: "Builds Stable Diffusion from scratch. Excellent if your project is in the diffusion / image-generation space.",
        url: "https://course.fast.ai/Lessons/part2.html",
      },
    ],
    projects: [
      "Domain-specific RAG assistant: chunk a corpus (textbooks, legal docs, research papers), embed with BGE / E5, store in Qdrant, retrieve with hybrid BM25 + dense, and answer with a small open LLM (Llama 3 8B / Mistral 7B). Evaluate with Ragas (faithfulness, answer relevance, context precision) and an LLM-as-judge held-out set.",
      "LoRA / QLoRA fine-tune of a 7B–8B open LLM on a specialized task (e.g. Indian-language instruction following, medical Q&A, code review). Compare zero-shot, few-shot, full fine-tune, and LoRA on a held-out benchmark; ship the adapter on Hugging Face Hub with a model card.",
      "Custom diffusion model or DreamBooth / LoRA fine-tune of Stable Diffusion on a personal dataset (a style, an object, a face). Evaluate with FID, CLIPScore, and a human-preference study; deploy a Gradio demo with prompt presets.",
      "Vision-language project: fine-tune LLaVA / SigLIP / a small VLM for a focused task such as chart-question-answering, medical image captioning, or document VQA. Compare against GPT-4V on a curated test set.",
      "Speech / audio generative project: fine-tune Whisper for a low-resource language ASR task, or build a TTS pipeline with Bark / XTTS. Evaluate with WER (ASR) or MOS-style human ratings (TTS).",
      "Multimodal agent / tool-using LLM: build an agent that combines a fine-tuned LLM, retrieval, and 2–3 tools (calculator, web search, code execution) to solve a benchmark like GAIA or a custom task suite. Report per-tool ablations.",
    ],
    exam: [
      "There is no written end-term — the grade is the project, the report, the demo, and a live viva with an industry expert. Plan backwards from those four artefacts from week 1.",
      "Reproducibility is the single biggest source of easy marks. A graders-can-clone-and-rerun repo with pinned dependencies and one-command training beats a slightly better model that only runs on your laptop.",
      "Treat the viva as a real ML interview: expect 'why did you choose X over Y?', 'show me the loss curve', 'what is one thing that would break this model in production?'. Ablations and failure analysis are your best defence.",
      "In the demo, lead with the comparison to the baseline, not the architecture. Examiners want to see the delta you produced, not a textbook recap of transformers.",
      "Keep a weekly engineering log (date, what you tried, result, next step) — it becomes the spine of the report and saves you in viva when asked 'why didn't approach Z work?'.",
      "Submit at least 48 hours before the hard deadline. HF Spaces, model uploads, and PDF compilation all fail in interesting ways the night before — give yourself a buffer.",
      "Common pitfalls: training on the test set by accident, reporting a metric that nobody else in the literature uses, having no baseline to compare against, and a demo that only works on three hand-picked inputs. Audit for all four before submission.",
    ],
  },
];
