import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CareBridge Health Case Study | Gebedi",
};

export default function CareBridgeCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f7f3ee]">
        <section className="mx-auto max-w-5xl px-6 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Owned Venture
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            CareBridge Health
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            Building trust in healthcare coordination.
          </p>

          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-3xl font-semibold">Challenge</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Healthcare decisions require a high degree of trust. Patients
                need clarity, reassurance and confidence before making contact.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Solution</h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                We built a trust-focused website structure, treatment-specific
                landing pages, consultation journeys and SEO foundations aimed
                at long-term visibility.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold">Results</h2>

              <ul className="mt-6 space-y-4 text-lg text-slate-600">
                <li>• SEO-first content structure</li>
                <li>• Healthcare-specific landing pages</li>
                <li>• Consultation capture system</li>
                <li>• UK-focused positioning</li>
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