import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CleanNestPro Case Study | Gebedi",
  description:
    "How CleanNestPro was built to create trust for international property owners and Airbnb hosts in Antalya.",
};

export default function CleanNestProCaseStudy() {
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
            CleanNestPro
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 dark:text-slate-300">
            Building trust for international property owners in Antalya.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              ["Market", "Cleaning"],
              ["Location", "Antalya"],
              ["Focus", "Trust"],
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
                Many international homeowners, Airbnb hosts and expats in
                Antalya struggle to find reliable cleaning services they can
                trust remotely.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                Most providers focus on cleaning itself, while trust,
                communication, payment confidence and professional presentation
                are often overlooked.
              </p>
            </section>

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Solution
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                CleanNestPro was positioned as a premium coordination platform
                rather than a traditional cleaning company.
              </p>

              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <li>• SEO-focused service structure</li>
                <li>• Antalya landing pages</li>
                <li>• Airbnb-specific content</li>
                <li>• Villa cleaning positioning</li>
                <li>• Detailed quote workflow</li>
                <li>• Multilingual support</li>
                <li>• Stripe payment infrastructure</li>
                <li>• UK business trust layer</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                What Makes It Different
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                The objective was not to build another cleaning website.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                The goal was to create a calmer, more internationally-minded
                experience designed around trust, communication and premium
                property care.
              </p>
            </section>

            <section className="rounded-[2rem] border border-slate-950/10 bg-white/60 p-7 shadow-[0_24px_70px_-55px_rgba(15,23,42,.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-9">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                Results
              </h2>

              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <li>• Premium international positioning</li>
                <li>• SEO-ready content architecture</li>
                <li>• Service-specific landing pages</li>
                <li>• Structured quote generation system</li>
                <li>• Partner application workflow</li>
                <li>• Multi-language customer support</li>
                <li>• Stripe-enabled payment infrastructure</li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}