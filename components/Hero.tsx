import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-[68px]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="wrap relative">
        <div className="max-w-4xl animate-fadeUp">
          <p className="eyebrow mb-8">{hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block text-fg">{hero.titleLine1}</span>
            <span className="block text-accent">{hero.titleLine2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
