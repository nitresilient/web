"use client";

import { useEffect, useMemo, useState } from "react";
import { SUBJECTS, type Subject } from "@/lib/sem3Data";

type Progress = Record<string, Record<string, boolean>>;

const STORAGE_KEY = "sem3-progress";
const BRAND_GRADIENT =
  "linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2))";

export function Sem3Plan() {
  const [activeId, setActiveId] = useState<string>(SUBJECTS[0].id);
  const [progress, setProgress] = useState<Progress>({});
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProgress(JSON.parse(raw) as Progress);
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* ignore */
    }
  }, [progress, loaded]);

  // Collapse all weeks when switching subjects.
  useEffect(() => {
    setExpanded(new Set());
  }, [activeId]);

  const active = useMemo(
    () => SUBJECTS.find((s) => s.id === activeId) ?? SUBJECTS[0],
    [activeId]
  );

  const subjectProgress = progress[activeId] ?? {};
  const doneCount = active.weeks.filter(
    (w) => subjectProgress[`week${w.n}`]
  ).length;
  const pct = Math.round((doneCount / active.weeks.length) * 100);

  function toggleWeekDone(subjectId: string, n: number) {
    setProgress((prev) => {
      const subj = { ...(prev[subjectId] ?? {}) };
      subj[`week${n}`] = !subj[`week${n}`];
      return { ...prev, [subjectId]: subj };
    });
  }

  function toggleExpand(n: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  }

  function expandAll() {
    setExpanded(new Set(active.weeks.map((w) => w.n)));
  }
  function collapseAll() {
    setExpanded(new Set());
  }
  function resetProgress() {
    setProgress((prev) => ({ ...prev, [activeId]: {} }));
  }

  return (
    <div className="not-prose mt-6">
      {/* Subject switcher */}
      <div
        role="tablist"
        aria-label="Choose a subject"
        className="flex flex-wrap gap-2 overflow-x-auto pb-1"
      >
        {SUBJECTS.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(s.id)}
              className="shrink-0 rounded-full px-3 py-1.5 text-[13px] sm:text-[14px] font-semibold transition-all"
              style={{
                background: isActive ? BRAND_GRADIENT : "var(--vp-c-bg-alt)",
                color: isActive ? "#fff" : "var(--vp-c-text-2)",
                border: `1px solid ${
                  isActive ? "transparent" : "var(--vp-c-divider)"
                }`,
              }}
            >
              {s.short}
            </button>
          );
        })}
      </div>

      {SUBJECTS.map((s) => (
        <SubjectPanel
          key={s.id}
          subject={s}
          hidden={s.id !== activeId}
          isActive={s.id === activeId}
          active={active}
          doneCount={doneCount}
          pct={pct}
          subjectProgress={subjectProgress}
          expanded={expanded}
          loaded={loaded}
          onToggleWeekDone={toggleWeekDone}
          onToggleExpand={toggleExpand}
          onExpandAll={expandAll}
          onCollapseAll={collapseAll}
          onReset={resetProgress}
        />
      ))}
    </div>
  );
}

function SubjectPanel({
  subject,
  hidden,
  isActive,
  active,
  doneCount,
  pct,
  subjectProgress,
  expanded,
  loaded,
  onToggleWeekDone,
  onToggleExpand,
  onExpandAll,
  onCollapseAll,
  onReset,
}: {
  subject: Subject;
  hidden: boolean;
  isActive: boolean;
  active: Subject;
  doneCount: number;
  pct: number;
  subjectProgress: Record<string, boolean>;
  expanded: Set<number>;
  loaded: boolean;
  onToggleWeekDone: (subjectId: string, n: number) => void;
  onToggleExpand: (n: number) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  onReset: () => void;
}) {
  // Anchor target so the scroll-spy sidebar can reach each subject.
  return (
    <section
      id={subject.id}
      aria-hidden={hidden}
      style={{ display: hidden ? "none" : "block", scrollMarginTop: "5rem" }}
      className="mt-6"
    >
      {isActive && (
        <>
          {/* Header card */}
          <div
            className="rounded-xl p-4 sm:p-5"
            style={{
              background: "var(--vp-c-bg-elv)",
              border: "1px solid var(--vp-c-divider)",
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3
                className="m-0 text-[18px] sm:text-[20px] font-bold"
                style={{ color: "var(--vp-c-text-1)" }}
              >
                {active.name}
              </h3>
              <span
                className="text-[12px] font-semibold"
                style={{ color: "var(--vp-c-brand-1)" }}
              >
                {active.code} · {active.credits} credits
              </span>
            </div>
            <p
              className="mt-2 mb-3 text-[14px] leading-[1.6]"
              style={{ color: "var(--vp-c-text-2)" }}
            >
              {active.blurb}
            </p>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold"
              style={{ color: "var(--vp-c-brand-1)" }}
            >
              Official course page ↗
            </a>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: "var(--vp-c-text-1)" }}
                >
                  {loaded ? `${doneCount} / 12 weeks done` : "Loading progress…"}
                </span>
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: "var(--vp-c-text-3)" }}
                >
                  {loaded ? `${pct}%` : ""}
                </span>
              </div>
              <div
                className="h-2.5 w-full rounded-full overflow-hidden"
                style={{ background: "var(--vp-c-bg-alt)" }}
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: BRAND_GRADIENT }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="mt-4 flex flex-wrap gap-2">
              <ControlButton onClick={onExpandAll} label="Expand all" />
              <ControlButton onClick={onCollapseAll} label="Collapse all" />
              <ControlButton
                onClick={onReset}
                label="Reset progress"
                danger
              />
            </div>
          </div>

          {/* Week accordion */}
          <h4
            className="mt-7 mb-3 text-[15px] font-bold"
            style={{ color: "var(--vp-c-text-1)" }}
          >
            12-Week Plan
          </h4>
          <div className="flex flex-col gap-2.5">
            {active.weeks.map((w) => {
              const isOpen = expanded.has(w.n);
              const isDone = !!subjectProgress[`week${w.n}`];
              return (
                <div
                  key={w.n}
                  className="rounded-xl overflow-hidden transition-colors"
                  style={{
                    background: "var(--vp-c-bg-elv)",
                    border: `1px solid ${
                      isDone
                        ? "var(--vp-c-brand-1)"
                        : "var(--vp-c-divider)"
                    }`,
                  }}
                >
                  <div className="flex items-stretch">
                    <label
                      className="flex items-center pl-3 sm:pl-4 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => onToggleWeekDone(active.id, w.n)}
                        aria-label={`Mark week ${w.n} as done`}
                        className="h-4 w-4 cursor-pointer accent-[var(--vp-c-brand-1)]"
                      />
                    </label>
                    <button
                      onClick={() => onToggleExpand(w.n)}
                      aria-expanded={isOpen}
                      className="flex-1 min-w-0 flex items-center gap-3 px-3 sm:px-4 py-3 text-left"
                    >
                      <span
                        className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-bold"
                        style={{
                          background: isDone
                            ? BRAND_GRADIENT
                            : "var(--vp-c-bg-alt)",
                          color: isDone ? "#fff" : "var(--vp-c-text-2)",
                        }}
                      >
                        {w.n}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[14px] sm:text-[15px] font-semibold truncate"
                          style={{
                            color: "var(--vp-c-text-1)",
                            textDecoration: isDone
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {w.topic}
                        </span>
                      </span>
                      <span
                        className="shrink-0 text-[14px] transition-transform duration-200"
                        style={{
                          color: "var(--vp-c-text-3)",
                          transform: isOpen
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        }}
                        aria-hidden
                      >
                        ▶
                      </span>
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-4 pt-1"
                      style={{
                        borderTop: "1px solid var(--vp-c-divider)",
                      }}
                    >
                      <p
                        className="mt-3 mb-3 text-[13px] sm:text-[14px] italic leading-[1.6]"
                        style={{ color: "var(--vp-c-text-2)" }}
                      >
                        {w.focus}
                      </p>
                      <p
                        className="mb-1.5 text-[12px] font-bold uppercase tracking-wide"
                        style={{ color: "var(--vp-c-text-3)" }}
                      >
                        Key concepts
                      </p>
                      <ul className="mb-3 pl-5 list-disc">
                        {w.concepts.map((c) => (
                          <li
                            key={c}
                            className="text-[13px] sm:text-[14px] leading-[1.6]"
                            style={{ color: "var(--vp-c-text-2)" }}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="rounded-lg p-3 text-[13px] sm:text-[14px] leading-[1.6]"
                        style={{
                          background: "var(--vp-c-bg-alt)",
                          color: "var(--vp-c-text-2)",
                        }}
                      >
                        <strong style={{ color: "var(--vp-c-text-1)" }}>
                          Practice:{" "}
                        </strong>
                        {w.practice}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Resources */}
          <h4
            className="mt-8 mb-3 text-[15px] font-bold"
            style={{ color: "var(--vp-c-text-1)" }}
          >
            Resources
          </h4>
          <div className="card-grid">
            {active.resources.map((r) => (
              <div key={r.name} className="card">
                <h3>
                  {r.url ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.name}
                    </a>
                  ) : (
                    r.name
                  )}
                </h3>
                <p>{r.note}</p>
              </div>
            ))}
          </div>

          {/* Course coverage (self-study mapping) */}
          {active.coverage && (
            <>
              <h4
                className="mt-8 mb-3 text-[15px] font-bold"
                style={{ color: "var(--vp-c-text-1)" }}
              >
                {active.coverage.title}
              </h4>
              <p
                className="mb-3 text-[13px] sm:text-[14px] leading-[1.65]"
                style={{ color: "var(--vp-c-text-2)" }}
              >
                {active.coverage.intro}
              </p>
              <div className="flex flex-col gap-2.5">
                {active.coverage.rows.map((row) => (
                  <div
                    key={row.source}
                    className="rounded-xl p-3.5 sm:p-4"
                    style={{
                      background: "var(--vp-c-bg-elv)",
                      border: "1px solid var(--vp-c-divider)",
                    }}
                  >
                    <div
                      className="text-[14px] sm:text-[15px] font-bold"
                      style={{ color: "var(--vp-c-text-1)" }}
                    >
                      {row.url ? (
                        <a
                          href={row.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--vp-c-brand-1)" }}
                        >
                          {row.source} ↗
                        </a>
                      ) : (
                        row.source
                      )}
                    </div>
                    <p
                      className="mt-2 mb-1.5 text-[13px] sm:text-[14px] leading-[1.6]"
                      style={{ color: "var(--vp-c-text-2)" }}
                    >
                      <strong style={{ color: "var(--vp-c-brand-1)" }}>
                        Covers:{" "}
                      </strong>
                      {row.covers}
                    </p>
                    <p
                      className="m-0 text-[13px] sm:text-[14px] leading-[1.6]"
                      style={{ color: "var(--vp-c-text-2)" }}
                    >
                      <strong style={{ color: "var(--vp-c-text-3)" }}>
                        Doesn&apos;t cover:{" "}
                      </strong>
                      {row.gaps}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="mt-4 mb-1.5 text-[12px] font-bold uppercase tracking-wide"
                style={{ color: "var(--vp-c-text-3)" }}
              >
                Gaps to patch separately
              </p>
              <ul className="mb-3 pl-5 list-disc">
                {active.coverage.gaps.map((g) => (
                  <li
                    key={g}
                    className="text-[13px] sm:text-[14px] leading-[1.6]"
                    style={{ color: "var(--vp-c-text-2)" }}
                  >
                    {g}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-lg p-3.5 text-[13px] sm:text-[14px] leading-[1.65]"
                style={{
                  background: "var(--vp-c-bg-alt)",
                  borderLeft: "3px solid var(--vp-c-brand-1)",
                  color: "var(--vp-c-text-2)",
                }}
              >
                <strong style={{ color: "var(--vp-c-text-1)" }}>
                  {active.coverage.verdict}
                </strong>
              </div>
            </>
          )}

          {/* Projects */}
          <h4
            className="mt-8 mb-3 text-[15px] font-bold"
            style={{ color: "var(--vp-c-text-1)" }}
          >
            Project Ideas
          </h4>
          <ol className="flex flex-col gap-2 pl-0 list-none">
            {active.projects.map((p, i) => (
              <li
                key={p}
                className="flex gap-3 rounded-lg p-3 text-[13px] sm:text-[14px] leading-[1.6]"
                style={{
                  background: "var(--vp-c-bg-elv)",
                  border: "1px solid var(--vp-c-divider)",
                  color: "var(--vp-c-text-2)",
                }}
              >
                <span
                  className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md text-[12px] font-bold"
                  style={{ background: BRAND_GRADIENT, color: "#fff" }}
                >
                  {i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>

          {/* Exam strategy */}
          <h4
            className="mt-8 mb-3 text-[15px] font-bold"
            style={{ color: "var(--vp-c-text-1)" }}
          >
            Exam Strategy
          </h4>
          <ul className="flex flex-col gap-2 pl-0 list-none">
            {active.exam.map((e) => (
              <li
                key={e}
                className="flex gap-2.5 rounded-lg p-3 text-[13px] sm:text-[14px] leading-[1.6]"
                style={{
                  background: "var(--vp-c-bg-alt)",
                  color: "var(--vp-c-text-2)",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    color: "var(--vp-c-brand-1)",
                    fontWeight: 700,
                  }}
                >
                  ›
                </span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

function ControlButton({
  onClick,
  label,
  danger,
}: {
  onClick: () => void;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-3 py-1.5 text-[12px] sm:text-[13px] font-semibold transition-colors"
      style={{
        background: "var(--vp-c-bg-alt)",
        border: "1px solid var(--vp-c-divider)",
        color: danger ? "var(--vp-c-brand-1)" : "var(--vp-c-text-2)",
      }}
    >
      {label}
    </button>
  );
}
