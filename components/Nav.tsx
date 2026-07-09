"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, hero } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a href={hero.primaryCta.href} className="btn-primary">
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-fg transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-fg transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="wrap flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-muted transition-colors hover:bg-fg/5 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={hero.primaryCta.href}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
