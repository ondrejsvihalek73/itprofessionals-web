import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-8">{work.eyebrow}</p>
        <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
          {work.title}
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {work.items.map((item) => (
            <div
              key={item.title}
              className="group flex min-h-[200px] flex-col bg-ink-card p-7 transition-colors hover:bg-ink-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {item.tag}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
