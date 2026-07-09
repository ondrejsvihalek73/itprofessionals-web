import { services } from "@/lib/content";

function EngagementList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dim">
        {label}
      </p>
      <ul className="mt-4 divide-y divide-line/70">
        {items.map((f) => (
          <li key={f} className="flex items-center gap-3 py-3 text-fg">
            <span className="font-display text-accent">--</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-16">{services.eyebrow}</p>

        <div className="space-y-20 md:space-y-28">
          {services.items.map((item) => (
            <div key={item.no}>
              <span className="font-display text-sm font-semibold tracking-widest text-accent">
                {item.no}
              </span>
              <h3 className="mt-3 font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
                {item.title}
              </h3>
              <div className="mt-6 h-px w-full bg-line" />

              <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
                <p className="text-lg leading-relaxed text-muted">
                  {item.body}
                </p>

                <div className="space-y-8">
                  <EngagementList
                    label="Focused engagements"
                    items={item.focused}
                  />
                  <EngagementList
                    label="Ongoing partnership"
                    items={item.ongoing}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
