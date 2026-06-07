import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BetaOffice Case Study | Gebedi",
  description:
    "How BetaOffice grew through SEO, trust-first positioning and recurring revenue.",
};

export default function BetaOfficeCaseStudy() {
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
            BetaOffice
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 dark:text-slate-300">
            Building trust infrastructure for founders and small businesses.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              ["Customers", "20+"],
              ["Traffic Source", "Organic"],
              ["Model", "Recurring"],
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
            {[
              {
                title: "Challenge",
                text: "The virtual office market is highly competitive, dominated by larger providers with established brands and significant marketing budgets.",
              },
              {
                title: "Solution",
                text: "We focused on trust-first positioning, clear pricing, transparent onboarding, SEO foundations, AI-assisted customer experience and a streamlined subscription system.",
              },
            ].map((section) => (
              <section
                key={section.title}
                className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9"
              >
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                  {section.title}
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {section.text}
                </p>
              </section>
            ))}

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Results
              </h2>

              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <li>• 20+ paying customers</li>
                <li>• Organic growth without paid advertising</li>
                <li>• Traffic from Google, Reddit and ChatGPT</li>
                <li>• Live recurring revenue business</li>
                <li>• Complete customer dashboard and automation system</li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}