import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import CTASection from "@/components/home/CTASection";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Gebedi | BetaOffice Ltd Products",
  description:
    "Gebedi showcases the products and projects of BetaOffice Ltd.",
  alternates: {
    canonical: "https://gebedi.com",
  },
  openGraph: {
    title: "Gebedi | BetaOffice Ltd Products",
    description:
      "Explore the products and digital projects of BetaOffice Ltd, including UK virtual office services and AI business tools in development.",
    url: "https://gebedi.com",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | BetaOffice Ltd Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebedi | BetaOffice Ltd Products",
    description:
      "Products and digital projects by BetaOffice Ltd.",
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
    "Gebedi showcases the products and projects of BetaOffice Ltd.",
  parentOrganization: {
    "@type": "Organization",
    name: "BetaOffice Ltd",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gebedi",
  url: "https://gebedi.com",
  description:
    "Explore the products and digital projects of BetaOffice Ltd, including UK virtual office services and AI business tools in development.",
};

const trustPillars = [
  {
    title: "Look established",
    text: "A clean website, professional email, strong positioning and credible business presence help customers feel they are dealing with a serious company.",
  },
  {
    title: "Be found",
    text: "SEO-ready pages, service structure, blog foundations, analytics and Search Console setup give your business a clearer path into Google.",
  },
  {
    title: "Convert interest",
    text: "Enquiry forms, AI-assisted chat, call-to-action structure and simple customer journeys help visitors turn into real leads.",
  },
];

const services = [
  "London registered office address",
  "Director service address",
  "Digital mail scans and AI summaries",
  "Company management dashboard",
  "UK business correspondence",
  "AI business assistant (in development)",
];

const caseStudies = [
  {
    title: "BetaOffice",
    label: "Owned Venture",
    text: "Built and operate a UK virtual office service with digital mail management and AI-assisted summaries.",
    stats: ["20+ paying customers", "Organic growth", "Subscription revenue"],
    href: "/case-studies/betaoffice",
  },
  {
    title: "AI Business Assistant",
    label: "Owned Venture",
    text: "An AI operations assistant for small businesses, currently in development.",
    stats: ["In development", "AI tools"],
    href: "/ventures",
  },
  {
    title: "CleanNestPro",
    label: "Owned Venture",
    text: "Built a trust-first cleaning coordination brand for international property owners, Airbnb hosts and expats in Antalya.",
    stats: ["Antalya", "SEO-ready", "International audience"],
    href: "/case-studies/cleannestpro",
  },
];

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

        <section className="relative overflow-hidden py-24 md:py-36">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  What we actually build
                </p>

                <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  Products for modern businesses.
                </h2>
              </div>

              <div className="max-w-xl lg:ml-auto">
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  BetaOffice Ltd develops practical digital services for business owners, beginning with our UK virtual office and mail management platform.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {trustPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-950/10 bg-white/50 p-7 shadow-[0_24px_70px_-45px_rgba(15,23,42,.45)] backdrop-blur-xl"
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
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
                Our position
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-6xl">
                Trust. Visibility. Growth.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-white/65 md:text-lg">
                Gebedi is a product showcase operated by BetaOffice Ltd. We distinguish live services from projects still in development.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Services
                </p>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  What we build and operate.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                  We focus on UK business addresses, digital correspondence, practical business software and AI-assisted operations.
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore products
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-slate-950/10 bg-white/50 px-5 py-5 text-sm font-semibold text-slate-800 shadow-[0_18px_50px_-40px_rgba(15,23,42,.45)] backdrop-blur-xl"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="rounded-[2.5rem] border border-slate-950/10 bg-white/55 p-8 shadow-[0_30px_100px_-70px_rgba(15,23,42,.6)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                    Built from experience
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 md:text-5xl">
                    We use what we learned building our own ventures.
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-8 text-slate-600 md:text-lg">
                    BetaOffice Ltd builds products from real operating experience. Gebedi brings our services and projects together in one place.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/case-studies"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      View all case studies
                    </Link>

                    <Link
                      href="/ventures"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/55 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white/85"
                    >
                      Explore ventures
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {caseStudies.map((study) => (
                  <Link
                    key={study.title}
                    href={study.href}
                    className="group rounded-[2rem] border border-slate-950/10 bg-white/60 p-6 shadow-[0_24px_70px_-52px_rgba(15,23,42,.5)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {study.label}
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {study.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {study.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-full border border-slate-950/10 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-500"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 text-sm font-semibold text-slate-950">
                      View case study{" "}
                      <span className="inline-block transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}