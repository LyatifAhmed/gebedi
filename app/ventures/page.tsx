import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import VentureCard from "@/components/ventures/VentureCard";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore the ventures under the Gebedi umbrella, including BetaOffice, BetaData, CareBridgeHealth, and CleanNestPro.",
  alternates: {
    canonical: "https://gebedi.com/ventures",
  },
  openGraph: {
    title: "Gebedi Ventures",
    description:
      "Explore the ventures under the Gebedi umbrella, including BetaOffice, BetaData, CareBridgeHealth, and CleanNestPro.",
    url: "https://gebedi.com/ventures",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi Ventures",
      },
    ],
  },
};

const venturesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Gebedi Ventures",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "BetaOffice",
      url: "https://betaoffice.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "BetaData",
      url: "https://gebedi.com/ventures/betadata",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CareBridgeHealth",
      url: "https://carebridgehealth.co",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "CleanNestPro",
      url: "https://cleannestpro.com",
    },
  ],
};

export default function VenturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venturesJsonLd) }}
      />

      <Navbar />

      <main className="relative overflow-hidden bg-[#f8fafc]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-140px] top-[24rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Ventures
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 md:text-7xl">
                Brands under the Gebedi umbrella.
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                A focused portfolio of premium digital ventures across SaaS,
                data, healthcare coordination, and service-led platforms — all
                shaped by the same standard of trust, design clarity, and
                long-term execution.
              </p>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="mb-10 rounded-[28px] border border-white/80 bg-white/72 px-6 py-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,.16)] backdrop-blur-xl md:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Portfolio standard
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 md:text-[15px]">
                    Each venture is built with premium positioning, strong brand
                    presentation, and a serious long-term mindset.
                  </p>
                </div>

                <div className="text-sm font-medium text-slate-900">
                  {ventures.length} active ventures
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {ventures.map((venture) => (
                <VentureCard key={venture.name} venture={venture} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}