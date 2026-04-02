import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Gebedi, the umbrella brand behind premium digital ventures, and discover our approach to branding, websites, and digital growth.",
  alternates: {
    canonical: "https://gebedi.com/about",
  },
  openGraph: {
    title: "About Gebedi",
    description:
      "Learn about Gebedi, the umbrella brand behind premium digital ventures, and discover our approach to branding, websites, and digital growth.",
    url: "https://gebedi.com/about",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Gebedi",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="py-20 md:py-24">
        <Container>
          <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.18)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              About Gebedi
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
              An umbrella brand built around trust, quality, and technical depth.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Gebedi exists to build and compound premium digital ventures with a
              consistent standard: strong positioning, thoughtful design, and
              serious operational execution.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              Rather than launching disconnected websites, Gebedi brings together
              a portfolio of brands shaped by long-term thinking. The goal is not
              just to create digital products, but to create businesses that feel
              credible, modern, and carefully built from the beginning.
            </p>
          </div>

          {/* Founder section */}
          <section className="relative mt-14">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Founder
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                  Built with long-term thinking, not shortcuts
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                  Gebedi is a portfolio of digital ventures designed and built by a
                  solo founder with a focus on clarity, trust, and execution.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                  From SaaS infrastructure to real-world service platforms, each
                  product is crafted with a consistent philosophy: build something
                  that actually works, scales, and earns trust over time.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="text-sm font-medium text-slate-900">
                    Latif Ahmed
                  </div>
                  <div className="text-sm text-slate-400">
                    Founder · Generation Beta Digital Ltd
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_30px_80px_-40px_rgba(15,23,42,.25)] backdrop-blur-xl">
                  <Image
                    src="/gebedi-founder.png"
                    alt="Founder of Gebedi"
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Services CTA */}
          <section className="mt-16">
            <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.5)] md:p-12">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Also available
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                We can also help shape your brand, website, and digital visibility.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Beyond building our own ventures, we also work on premium digital
                positioning for selected clients — including website design,
                brand presentation, conversion-focused landing pages, and Google
                visibility improvements through stronger structure and SEO.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-medium text-white">
                    Brand positioning
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Premium presentation, clarity, and trust-first brand direction.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-medium text-white">
                    Website design
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    High-conviction landing pages and modern product or service websites.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-medium text-white">
                    Google optimisation
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Stronger SEO structure, visibility, and trust signals for long-term growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@gebedi.com"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Discuss a project
                </a>

                <Link
                  href="/ventures"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View our ventures
                </Link>
              </div>
            </div>
          </section>
          {/* Trust & company details */}
<section className="mt-16">
  <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.15)] backdrop-blur-xl md:p-12">
    
    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
      Company details
    </p>

    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
      Registered and operating in the United Kingdom
    </h3>

    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
      Gebedi operates under Generation Beta Digital Ltd, a UK-registered company.
      We maintain compliance with UK regulations and data protection standards.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      
      {/* Address */}
      <div className="rounded-[24px] border border-black/5 bg-white/80 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Registered address
        </div>
        <div className="mt-2 text-sm font-medium text-slate-900">
          3rd Floor, 86–90 Paul Street
        </div>
        <div className="text-sm text-slate-600">
          London EC2A 4NE, United Kingdom
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-[24px] border border-black/5 bg-white/80 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Contact
        </div>
        <div className="mt-2 text-sm font-medium text-slate-900">
          info@gebedi.com
        </div>
      </div>

      {/* Company number */}
      <div className="rounded-[24px] border border-black/5 bg-white/80 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Company number
        </div>
        <div className="mt-2 text-sm font-medium text-slate-900">
          16274319
        </div>
      </div>

      {/* ICO */}
      <div className="rounded-[24px] border border-black/5 bg-white/80 p-5">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Data protection
        </div>
        <div className="mt-2 text-sm font-medium text-slate-900">
          ICO Registration No: ZB883806
        </div>
      </div>

    </div>
  </div>
</section>
        </Container>
      </main>

      <Footer />
    </>
  );
}