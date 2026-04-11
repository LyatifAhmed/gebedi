import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import CTASection from "@/components/home/CTASection";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Premium Digital Brands",
  description:
    "Gebedi is the umbrella brand behind premium digital ventures across SaaS, health, services, and data engineering.",
  alternates: {
    canonical: "https://gebedi.com",
  },
  openGraph: {
    title: "Gebedi | Premium Digital Brands",
    description:
      "Gebedi is the umbrella brand behind premium digital ventures across SaaS, health, services, and data engineering.",
    url: "https://gebedi.com",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | Premium Digital Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebedi | Premium Digital Brands",
    description:
      "Gebedi is the umbrella brand behind premium digital ventures across SaaS, health, services, and data engineering.",
    images: ["/og/gebedi-og.jpg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gebedi",
  url: "https://gebedi.com",
  logo: "https://gebedi.com/gebedi-logo.png",
  description:
    "Gebedi is the umbrella brand behind premium digital ventures across SaaS, health, services, and data engineering.",
  parentOrganization: {
    "@type": "Organization",
    name: "Generation Beta Digital Ltd",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gebedi",
  url: "https://gebedi.com",
  description:
    "A premium umbrella brand building modern digital ventures with trust, design, and technical depth.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Navbar />

      <main className="bg-[#f8fafc]">
        <Hero />

        <LogoCarousel ventures={ventures} />

        {/* NEW — BRAND STATEMENT */}
        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Philosophy
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 md:text-5xl">
              Not just building products.
              <br />
              Building brands that hold.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Every venture under Gebedi is shaped with the same intention —
              clarity in positioning, strength in execution, and a long-term
              commitment to trust.
            </p>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}