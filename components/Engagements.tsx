import { engagements, hero } from "@/lib/content";

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="border-t border-line bg-ink-soft py-24 md:py-32"
    >
      <div className="wrap">
        <p className="eyebrow mb-8">{engagements.eyebrow}</p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
          {engagements.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">{engagements.lead}</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagements.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-line bg-ink-card p-8 transition-colors hover:border-fg/20"
            >
              <h3 className="font-display text-2xl font-bold text-fg">
                {item.title}
              </h3>
              <div className="mt-5 h-0.5 w-10 bg-accent" />
              <p className="mt-6 font-medium text-fg">{item.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-fg">
                    <span className="text-accent">›</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex min-h-[2.75rem] items-end text-xs italic text-muted-dim">
                {item.meta}
              </p>

              <a
                href={hero.primaryCta.href}
                className="btn-primary mt-7 w-full"
              >
                {item.cta}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm italic text-muted-dim">
          {engagements.closing}
        </p>
      </div>
    </section>
  );
}
