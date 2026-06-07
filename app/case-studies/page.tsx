import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Case Studies | Gebedi",
  description:
    "Explore how Gebedi applies trust, SEO, AI systems and business infrastructure across real ventures.",
};

const studies = [
  {
    title: "BetaOffice",
    slug: "betaoffice",
    type: "Owned Venture",
    description:
      "Growing a virtual office platform through organic traffic, SEO and trust-first positioning.",
  },
  {
    title: "CareBridge Health",
    slug: "carebridge-health",
    type: "Owned Venture",
    description:
      "Building trust in healthcare coordination through SEO, content and patient-focused journeys.",
  },
  {
    title: "CleanNestPro",
    slug: "cleannestpro",
    type: "Owned Venture",
    description:
      "Building trust for international property owners, Airbnb hosts and expats in Antalya through premium positioning, SEO and operational systems.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f3ee]">
        <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Case Studies
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-7xl">
            Real projects.
            <br />
            Real lessons.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of ventures where we applied trust, visibility and
            growth systems in practice.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group rounded-[2rem] border border-slate-950/10 bg-white/60 p-8 shadow-[0_24px_70px_-52px_rgba(15,23,42,.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {study.type}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {study.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {study.description}
                </p>

                <div className="mt-6 font-semibold text-slate-950">
                  View case study{" "}
                  <span className="inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}