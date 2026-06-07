import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VentureHero from "@/components/ventures/VentureHero";

export const metadata: Metadata = {
  title: "BetaData | Gebedi",
  description:
    "BetaData is a data and engineering brand focused on systems thinking, technical credibility, and modern digital infrastructure.",
  alternates: {
    canonical: "https://gebedi.com/ventures/betadata",
  },
};

export default function BetaDataPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f3ee] pt-32">
        <VentureHero
          title="BetaData"
          logo="/betadata-logo.png"
          tag="Data & Engineering"
          description="BetaData is a data and engineering brand focused on technical credibility, modern infrastructure, and practical systems thinking. It represents the deeper engineering layer within the Gebedi portfolio."
        />

        <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,.4)] backdrop-blur-xl md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              Focus Areas
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Building reliable systems behind modern businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BetaData explores data engineering, analytics, automation and
              scalable digital infrastructure. While other ventures focus on
              customer-facing experiences, BetaData represents the technical
              foundations that power growth.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Data Engineering",
                "Automation",
                "Analytics",
                "Cloud Infrastructure",
                "ETL Pipelines",
                "Systems Design",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-950/10 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}