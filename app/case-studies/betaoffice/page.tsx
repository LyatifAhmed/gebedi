import type { Metadata } from "next";
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

      <main className="bg-[#f7f3ee]">
        <section className="mx-auto max-w-5xl px-6 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Owned Venture
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            BetaOffice
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Building trust infrastructure for founders and small businesses.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-400">Customers</p>
              <p className="text-4xl font-semibold">20+</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Traffic Source</p>
              <p className="text-4xl font-semibold">Organic</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Model</p>
              <p className="text-4xl font-semibold">Recurring</p>
            </div>
          </div>

          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-3xl font-semibold">Challenge</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The virtual office market is highly competitive, dominated by
                larger providers with established brands and significant
                marketing budgets.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Solution</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                We focused on trust-first positioning, clear pricing,
                transparent onboarding, SEO foundations, AI-assisted customer
                experience and a streamlined subscription system.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Results</h2>

              <ul className="mt-6 space-y-4 text-lg text-slate-600">
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