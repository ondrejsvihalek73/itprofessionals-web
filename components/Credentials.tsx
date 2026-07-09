import { credentials } from "@/lib/content";

export default function Credentials() {
  const marquee = [...credentials.partners, ...credentials.partners];

  return (
    <section className="border-y border-line bg-ink-soft py-16">
      <div className="wrap">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-dim">
          {credentials.kicker}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {credentials.stats.map((s) => (
            <div key={s.value} className="text-center md:text-left">
              <div className="font-display text-4xl font-bold text-accent">
                {s.value}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling sector marquee */}
      <div className="relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {marquee.map((p, i) => (
            <span
              key={i}
              className="text-sm font-medium uppercase tracking-[0.18em] text-muted-dim"
            >
              {p}
              <span className="ml-12 text-accent/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
