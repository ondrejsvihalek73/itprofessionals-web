import { contact, site } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="wrap relative text-center">
        <p className="eyebrow mb-8 justify-center">{contact.eyebrow}</p>
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-fg">{contact.titleLine1}</span>{" "}
          <span className="text-accent">{contact.titleLine2}</span>
        </h2>
        <p className="mt-6 text-lg text-muted">{contact.lead}</p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-3 text-lg text-fg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-accent">
              @
            </span>
            <span className="transition-colors group-hover:text-accent">
              {site.email}
            </span>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg text-fg"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-accent">
              ✦
            </span>
            <span className="transition-colors group-hover:text-accent">
              @it_professionals.cz
            </span>
          </a>
        </div>

        <p className="mt-10 text-sm italic text-muted-dim">
          {contact.responseNote}
        </p>
      </div>
    </section>
  );
}
