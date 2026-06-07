import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CareBridge Health Case Study | Gebedi",
  description:
    "How CareBridge Health uses trust, SEO and patient-focused journeys to support healthcare coordination.",
};

export default function CareBridgeCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f3ee] text-slate-950 dark:bg-slate-950 dark:text-white">
        <section className="mx-auto max-w-6xl px-6 py-32 md:px-10 md:py-40">
          <Link
            href="/case-studies"
            className="mb-10 inline-flex text-sm font-semibold text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            ← Back to case studies
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Owned Venture
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 dark:text-white md:text-7xl">
            CareBridge Health
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 dark:text-slate-300">
            Building trust in healthcare coordination.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              ["Sector", "Healthcare"],
              ["Focus", "Trust"],
              ["Strategy", "Organic"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-6 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {label}
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 space-y-6">
            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Challenge
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                Healthcare decisions require a high degree of trust. Patients
                need clarity, reassurance and confidence before making contact,
                particularly when considering treatment abroad.
              </p>
            </section>

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Solution
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                We built a trust-focused website structure with treatment-specific
                landing pages, consultation journeys, SEO foundations and clear
                patient communication designed for long-term visibility and
                credibility.
              </p>
            </section>

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Results
              </h2>

              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <li>• SEO-first content structure</li>
                <li>• Treatment-specific landing pages</li>
                <li>• Consultation capture system</li>
                <li>• UK-focused positioning</li>
                <li>• Trust-oriented patient journey</li>
                <li>• Foundation for long-term organic growth</li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}