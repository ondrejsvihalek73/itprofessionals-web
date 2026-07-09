import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Work from "@/components/Work";
import References from "@/components/References";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work & references — IT Professionals",
  description:
    "What we do and what we have delivered — service areas and selected realizations for leading brands.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">
        <section className="border-b border-line py-20 md:py-28">
          <div className="wrap">
            <p className="eyebrow mb-6">Portfolio</p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
              Work &amp; references.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              The areas where we make an impact, and a selection of the digital
              products, apps and platforms we have designed and delivered.
            </p>
          </div>
        </section>

        <Work />
        <References />
      </main>
      <Footer />
    </>
  );
}
