import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import CTASection from "@/components/home/CTASection";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Gebedi | Build Trust Online",
  description:
    "Gebedi helps businesses build trust online through professional websites, SEO foundations, AI-assisted systems, and business infrastructure.",
  alternates: {
    canonical: "https://gebedi.com",
  },
  openGraph: {
    title: "Gebedi | Build Trust Online",
    description:
      "Professional websites, search visibility, AI systems, and business infrastructure designed to help companies look established and grow with confidence.",
    url: "https://gebedi.com",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | Build Trust Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebedi | Build Trust Online",
    description:
      "Websites, SEO foundations, AI systems, and business infrastructure for companies that want to look trusted and grow with confidence.",
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
    "Gebedi helps businesses build trust online through professional websites, SEO foundations, AI-assisted systems, and business infrastructure.",
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
    "Professional websites, search visibility, AI systems, and business infrastructure designed to help companies look established and grow with confidence.",
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
  "Professional business websites",
  "SEO foundations and blog structure",
  "AI customer assistants",
  "Lead enquiry systems",
  "Analytics and Search Console",
  "Business address support through BetaOffice",
];

const caseStudies = [
  {
    title: "BetaOffice",
    label: "Owned Venture",
    text: "Built a trust-first virtual office platform that reached 20+ paying customers through organic traffic, SEO, Reddit, ChatGPT and founder-led growth.",
    stats: ["20+ paying customers", "Organic growth", "Subscription revenue"],
    href: "/case-studies/betaoffice",
  },
  {
    title: "CareBridge Health",
    label: "Owned Venture",
    text: "Created a healthcare coordination brand with SEO-first treatment pages, consultation flow and trust-focused positioning for international patients.",
    stats: ["Healthcare SEO", "Lead structure", "Trust positioning"],
    href: "/case-studies/carebridge-health",
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
                  Not just websites. Trust systems for modern businesses.
                </h2>
              </div>

              <div className="max-w-xl lg:ml-auto">
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  Most businesses do not only need a prettier website. They need
                  to look credible, appear in search, answer customer questions,
                  and make it easy for people to get in touch.
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
                Gebedi is not positioned as an award-winning design studio. Our
                focus is more practical: helping businesses look established,
                become easier to find, and build digital systems that support
                real enquiries.
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
                  Everything a small business needs to look serious online.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                  From websites and SEO to lead forms, AI assistants and
                  professional business presence, we package the essentials that
                  help customers trust you faster.
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore services
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
                    Gebedi is shaped by real startup experience: building
                    BetaOffice, growing organic traffic, setting up lead systems,
                    working with search visibility, and creating online trust
                    from scratch. That experience is what we apply to selected
                    client projects.
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