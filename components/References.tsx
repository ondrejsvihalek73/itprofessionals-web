import { references } from "@/lib/content";

export default function References() {
  return (
    <section id="references" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-8">{references.eyebrow}</p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
          {references.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{references.lead}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {references.items.map((item) => (
            <article
              key={item.client}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-card p-4 transition-colors hover:border-accent/50"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-ink-soft p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.client} — ${item.kind}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <h3 className="font-display text-xl font-bold text-fg">
                  {item.client}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.kind}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
