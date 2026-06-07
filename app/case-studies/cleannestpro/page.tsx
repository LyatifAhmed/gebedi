import type { Metadata } from "next";
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

      <main className="bg-[#f7f3ee]">
        <section className="mx-auto max-w-5xl px-6 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Owned Venture
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            CleanNestPro
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Building trust for international property owners in Antalya.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-400">Market</p>
              <p className="text-4xl font-semibold">Cleaning</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-4xl font-semibold">Antalya</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Focus</p>
              <p className="text-4xl font-semibold">Trust</p>
            </div>
          </div>

          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-3xl font-semibold">Challenge</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Many international homeowners, Airbnb hosts and expats in
                Antalya struggle to find reliable cleaning services they can
                trust remotely.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Most providers focus on cleaning itself, while trust,
                communication, payment confidence and professional presentation
                are often overlooked.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Solution</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                CleanNestPro was positioned as a premium coordination platform
                rather than a traditional cleaning company.
              </p>

              <ul className="mt-6 space-y-4 text-lg text-slate-600">
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

            <section>
              <h2 className="text-3xl font-semibold">What Makes It Different</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The objective was not to build another cleaning website.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The goal was to create a calmer, more internationally-minded
                experience designed around trust, communication and premium
                property care.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Results</h2>

              <ul className="mt-6 space-y-4 text-lg text-slate-600">
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