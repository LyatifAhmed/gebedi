import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import CTASection from "@/components/home/CTASection";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Gebedi | SEO-Led Websites & Digital Ventures",
  description:
    "Gebedi builds SEO-led websites, AI-assisted systems, and digital ventures for modern service businesses, founders, and online brands.",
  alternates: {
    canonical: "https://gebedi.com",
  },
  openGraph: {
    title: "Gebedi | SEO-Led Websites & Digital Ventures",
    description:
      "Clean, fast, search-ready websites and digital systems designed to build trust, generate enquiries, and support long-term growth.",
    url: "https://gebedi.com",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | SEO-Led Websites & Digital Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebedi | SEO-Led Websites & Digital Ventures",
    description:
      "SEO-led websites, AI-assisted systems, and digital ventures built with clarity, trust, and technical depth.",
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
    "Gebedi builds SEO-led websites, AI-assisted systems, and digital ventures for modern service businesses, founders, and online brands.",
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
    "SEO-led websites, AI-assisted systems, and digital ventures built with clarity, trust, and technical depth.",
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

      <main className="bg-[#f7f3ee]">
        <Hero />

        <LogoCarousel ventures={ventures} />

        <section className="relative overflow-hidden py-28 md:py-40">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  What we build
                </p>

                <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  Digital foundations for businesses that need to be found,
                  trusted, and contacted.
                </h2>
              </div>

              <div className="max-w-xl lg:ml-auto">
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  Gebedi creates clean, fast and SEO-focused websites supported
                  by practical systems — enquiry forms, analytics, search
                  visibility, automation and AI-assisted customer journeys.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "SEO-led websites",
                  text: "Search-ready pages, service structure, blog foundations and technical SEO from day one.",
                },
                {
                  title: "Lead systems",
                  text: "Contact forms, email notifications, enquiry flows and conversion-focused page structure.",
                },
                {
                  title: "AI-assisted support",
                  text: "Smart chat assistants and automation that help visitors ask questions before they become leads.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-950/10 bg-white/45 p-7 shadow-[0_24px_70px_-45px_rgba(15,23,42,.45)] backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-950/10 bg-slate-950 py-24 text-white md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
                Our position
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-6xl">
                Not decorative websites. Business assets.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-white/65 md:text-lg">
                We are not trying to build overcomplicated showcase websites.
                Our focus is simple: create a strong digital presence that makes
                a business look credible, appear in search, and turn attention
                into enquiries.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                Philosophy
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-slate-950 md:text-6xl">
                First make it clear.
                <br />
                Then make it grow.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Every project starts with the essentials: positioning, speed,
                trust, search visibility and a working path for customers to get
                in touch. Premium design matters — but only when it supports the
                business outcome.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}