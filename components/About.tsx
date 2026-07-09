import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-ink-soft py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="eyebrow mb-8">{about.eyebrow}</p>
          <h2 className="whitespace-pre-line font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
            {about.title}
          </h2>
        </div>

        <div className="space-y-8">
          {about.quotes.map((q, i) => (
            <p
              key={i}
              className="border-l-2 border-accent/60 pl-6 text-lg italic leading-relaxed text-muted"
            >
              &ldquo;{q}&rdquo;
            </p>
          ))}
          <p className="pl-6 text-sm font-semibold uppercase tracking-[0.15em] text-fg">
            {about.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
