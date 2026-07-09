import { statement } from "@/lib/content";

export default function Statement() {
  return (
    <section id="about-lead" className="py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-10">{statement.eyebrow}</p>
        <h2 className="max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          {statement.lead.map((part, i) => (
            <span key={i} className={part.accent ? "text-accent" : "text-fg"}>
              {part.text}
            </span>
          ))}
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {statement.body}
        </p>
      </div>
    </section>
  );
}
