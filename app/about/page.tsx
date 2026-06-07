import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gebedi | Build Trust Online",
  description:
    "Gebedi helps businesses build trust online through professional websites, search visibility, AI-assisted systems, lead generation, and business infrastructure.",
  alternates: {
    canonical: "https://gebedi.com/about",
  },
  openGraph: {
    title: "About Gebedi | Build Trust Online",
    description:
      "Learn how Gebedi helps businesses look established, become easier to find, and turn attention into enquiries.",
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

const trustPillars = [
  {
    title: "Look established",
    text: "A professional website, clear message, business email, credible address and polished online presence help customers take you seriously.",
  },
  {
    title: "Be found",
    text: "SEO-ready pages, Google Search Console, Analytics, local visibility and content foundations help your business appear where customers search.",
  },
  {
    title: "Convert attention",
    text: "Enquiry forms, AI assistants, payment flows and clear customer journeys help visitors move from interest to action.",
  },
];

const services = [
  "Professional business websites",
  "SEO foundations",
  "Google Search Console setup",
  "Analytics setup",
  "AI customer assistants",
  "Lead enquiry forms",
  "Stripe payment setup",
  "Business email setup",
  "BetaOffice business address support",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#f7f3ee] text-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-22rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[#d8c3ff]/40 blur-3xl" />
          <div className="absolute right-[-12rem] top-[24rem] h-[34rem] w-[34rem] rounded-full bg-[#ffb6d5]/28 blur-3xl" />
          <div className="absolute left-[-12rem] bottom-[18rem] h-[32rem] w-[32rem] rounded-full bg-[#9ad7ff]/24 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        </div>

        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                About Gebedi
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-slate-950 md:text-7xl lg:text-8xl">
                Helping businesses
                <br />
                build trust online.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                Gebedi helps businesses look established, become easier to find,
                and turn attention into enquiries through professional websites,
                SEO foundations, AI-assisted systems and practical business
                infrastructure.
              </p>

              <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3">
                {["Trust", "Visibility", "Growth", "Infrastructure"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-950/10 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 backdrop-blur-xl"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-20 md:pb-28">
          <Container>
            <div className="rounded-[2.5rem] border border-slate-950/10 bg-white/55 p-8 shadow-[0_30px_100px_-70px_rgba(15,23,42,.6)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                    Why Gebedi exists
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.06em] text-slate-950 md:text-6xl">
                    Most businesses do not only need a website.
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-8 text-slate-600 md:text-lg">
                    They need customers to trust them, find them, understand
                    them and know what to do next. A website is only useful when
                    it supports that bigger outcome.
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                    That is why Gebedi focuses on the full digital foundation:
                    positioning, credibility, search visibility, enquiry flows,
                    automation and the operational tools that help a business
                    look serious.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-20 md:pb-28">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {trustPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-950/10 bg-white/50 p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,.45)] backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative border-y border-slate-950/10 bg-slate-950 py-24 text-white md:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
                  Built from experience
                </p>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-6xl">
                  We use what we learned building our own ventures.
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-white/65 md:text-lg">
                  Gebedi started as the umbrella brand behind our own digital
                  ventures, including BetaOffice and CareBridge Health. Building
                  real businesses taught us that trust comes before growth.
                </p>

                <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
                  The lessons are practical: make the offer clear, make the
                  business credible, make it searchable, and make it easy for a
                  customer to take action.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Real startup experience",
                    "Organic growth",
                    "Search visibility",
                    "Lead systems",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative py-24 md:py-32">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Founder
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  Practical growth thinking, not agency noise.
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                  Gebedi was founded by Latif Ahmed, founder of Generation Beta
                  Digital Ltd. The company is shaped by hands-on experience
                  building digital products, service businesses, SEO structures,
                  payment flows, customer systems and operational infrastructure.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                  The focus is not on creating decorative websites. It is on
                  helping businesses look credible, get found and build systems
                  that can support real enquiries.
                </p>

                <div className="mt-8 border-l border-slate-950/10 pl-5">
                  <div className="text-sm font-semibold text-slate-950">
                    Latif Ahmed
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Founder · Generation Beta Digital Ltd
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2.25rem] border border-slate-950/10 bg-white/55 shadow-[0_30px_100px_-65px_rgba(15,23,42,.7)] backdrop-blur-2xl">
                  <Image
                    src="/gebedi-founder.webp"
                    alt="Founder of Gebedi"
                    width={720}
                    height={860}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="rounded-[2.5rem] border border-slate-950/10 bg-white/55 p-8 shadow-[0_30px_100px_-70px_rgba(15,23,42,.6)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                    What we help with
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] text-slate-950 md:text-6xl">
                    Digital foundations that make a business feel serious.
                  </h2>

                  <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                    Selected client projects can include the practical pieces a
                    business needs to look more credible, receive enquiries and
                    operate with confidence online.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl border border-slate-950/10 bg-white/60 px-5 py-5 text-sm font-semibold text-slate-800 shadow-[0_18px_50px_-42px_rgba(15,23,42,.5)] backdrop-blur-xl"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@gebedi.com?subject=Project enquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Discuss a project
                </a>

                <Link
                  href="/ventures"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/55 px-6 text-sm font-semibold text-slate-950 transition hover:bg-white/85"
                >
                  View our ventures
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="rounded-[2.5rem] border border-slate-950/10 bg-white/55 p-8 shadow-[0_30px_100px_-75px_rgba(15,23,42,.6)] backdrop-blur-2xl md:p-12">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Company details
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                  Registered and operating in the United Kingdom.
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Gebedi operates under Generation Beta Digital Ltd, a
                  UK-registered company with a trust-focused approach to online
                  business, digital infrastructure and data protection.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-950/10 bg-white/65 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Registered address
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    3rd Floor, 86–90 Paul Street
                  </div>
                  <div className="mt-1 text-sm leading-7 text-slate-600">
                    London EC2A 4NE, United Kingdom
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-950/10 bg-white/65 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Contact
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    info@gebedi.com
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-950/10 bg-white/65 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Company number
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    16274319
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-950/10 bg-white/65 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Data protection
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    ICO Registration No: ZB883806
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}