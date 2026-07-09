"use client";

import { useState } from "react";
import { method } from "@/lib/content";

export default function Method() {
  const [active, setActive] = useState(0);
  const current = method.phases[active];

  return (
    <section id="method" className="border-t border-line bg-ink-soft py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-8">{method.eyebrow}</p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-fg md:text-4xl">
          {method.heading}
        </h2>

        <div className="mt-10 max-w-2xl space-y-5">
          {method.intro.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="flex items-start justify-between gap-2">
            {method.phases.map((p, i) => {
              const isActive = i === active;
              return (
                <div key={p.no} className="flex flex-1 items-start">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center text-center"
                    aria-pressed={isActive}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full border font-display text-sm font-bold transition-colors ${
                        isActive
                          ? "border-accent bg-accent text-white"
                          : "border-line bg-ink-card text-muted group-hover:border-fg/40 group-hover:text-fg"
                      }`}
                    >
                      {p.no}
                    </span>
                    <span
                      className={`mt-4 text-sm font-semibold transition-colors ${
                        isActive ? "text-fg" : "text-muted"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="text-sm text-muted-dim">{p.sub}</span>
                  </button>
                  {i < method.phases.length - 1 && (
                    <span className="mt-7 h-px flex-1 bg-line" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm italic text-muted-dim">
            {method.hint}
          </p>

          {/* Detail cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-ink-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dim">
                Expert judgment
              </p>
              <p className="mt-4 leading-relaxed text-fg">{current.human}</p>
            </div>
            <div className="rounded-2xl border border-accent/40 bg-accent/5 p-7 shadow-[0_0_60px_-20px_rgba(84,184,105,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {current.aiLabel}
              </p>
              <p className="mt-4 leading-relaxed text-fg">{current.tech}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
