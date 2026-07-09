import Logo from "./Logo";
import { site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft py-14">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Software development and digital consulting for the new economy.
            </p>
          </div>

          <div className="text-sm text-muted md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-dim">
              Get in touch
            </p>
            <p className="mt-3">{site.location}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block transition-colors hover:text-fg"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            Instagram · @it_professionals.cz
          </a>
        </div>
      </div>
    </footer>
  );
}
