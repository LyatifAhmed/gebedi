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
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venturesJsonLd) }}
      />

      <Navbar />

      <main className="py-24">
        <Container>
          {/* HEADER */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Ventures
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
              Brands under the Gebedi umbrella.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              A curated portfolio of premium digital ventures across SaaS,
              data infrastructure, health coordination, and service platforms —
              each built with a consistent standard of trust and execution.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {ventures.map((venture) => (
              <VentureCard key={venture.name} venture={venture} />
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}