import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Gebedi",
  description:
    "Gebedi helps businesses build trust online through professional websites, SEO foundations, AI-assisted systems, Stripe payments, and business infrastructure.",
  alternates: {
    canonical: "https://gebedi.com/services",
  },
  openGraph: {
    title: "Gebedi Services | Build Trust Online",
    description:
      "Professional websites, SEO foundations, AI customer assistants, online payments and business infrastructure for modern companies.",
    url: "https://gebedi.com/services",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi Services",
      },
    ],
  },
};

const services = [
  {
    title: "Professional Websites",
    text: "Clean, fast and credible websites designed to make your business look established and easy to understand.",
    items: ["Business website", "Landing pages", "Mobile responsive", "Clear calls to action"],
  },
  {
    title: "SEO Foundations",
    text: "Search-ready structure that helps Google understand what your business does and where it should appear.",
    items: ["Technical SEO", "Service pages", "Blog structure", "Search Console setup"],
  },
  {
    title: "Lead Systems",
    text: "Simple customer journeys that help visitors contact you, ask questions and become real enquiries.",
    items: ["Contact forms", "Email notifications", "Enquiry flows", "Conversion structure"],
  },
  {
    title: "AI Customer Assistants",
    text: "AI-assisted chat experiences that answer common questions and help customers before they contact you.",
    items: ["Website chatbot", "FAQ assistant", "Lead qualification", "Business-specific prompts"],
  },
  {
    title: "Online Payments",
    text: "Secure payment setup using your own Stripe account, so customers can pay deposits, invoices or bookings online.",
    items: ["Stripe setup guidance", "Payment links", "Checkout flows", "Confirmation emails"],
  },
  {
    title: "Business Infrastructure",
    text: "Practical trust signals that help a company look more professional from the outside.",
    items: ["Business email", "Analytics", "Google Business Profile", "BetaOffice address support"],
  },
];

const process = [
  {
    title: "Audit",
    text: "We review your current website, online presence, search visibility and customer journey.",
  },
  {
    title: "Foundation",
    text: "We build the essentials: website, SEO structure, forms, analytics and trust signals.",
  },
  {
    title: "Growth",
    text: "We improve visibility through content, service pages, AI assistance and conversion improvements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#f7f3ee] text-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-24rem] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#d8c3ff]/40 blur-3xl" />
          <div className="absolute right-[-14rem] top-[26rem] h-[34rem] w-[34rem] rounded-full bg-[#ffb6d5]/30 blur-3xl" />
          <div className="absolute left-[-12rem] bottom-[16rem] h-[32rem] w-[32rem] rounded-full bg-[#9ad7ff]/24 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        </div>

        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                Services
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.075em] md:text-7xl lg:text-8xl">
                Digital systems that
                <br />
                build business trust.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                We help businesses look established, become easier to find and
                turn attention into enquiries through websites, SEO, AI systems,
                online payments and practical business infrastructure.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:info@gebedi.com?subject=Project enquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Discuss a project
                </a>

                <Link
                  href="/ventures"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/55 px-7 text-sm font-semibold text-slate-950 backdrop-blur-xl transition hover:bg-white/85"
                >
                  View our ventures
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-slate-950/10 bg-white/55 p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,.45)] backdrop-blur-xl"
                >
                  <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.text}
                  </p>

                  <div className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-slate-950/10 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
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
                  Our approach
                </p>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-6xl">
                  We do not sell “just a website”.
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-white/65 md:text-lg">
                  A website is only one part of trust. Customers also look for
                  proof, clarity, location, payment confidence, fast answers and
                  a smooth way to get in touch.
                </p>

                <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
                  Gebedi brings these pieces together into a practical digital
                  foundation that helps a business appear more credible and
                  operate with more confidence.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative py-24 md:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Process
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] md:text-6xl">
                  Clear, practical and built around outcomes.
                </h2>
              </div>

              <div className="space-y-4">
                {process.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[2rem] border border-slate-950/10 bg-white/55 p-6 shadow-[0_24px_70px_-52px_rgba(15,23,42,.5)] backdrop-blur-xl"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Step {index + 1}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="rounded-[2.5rem] border border-slate-950/10 bg-white/60 p-8 shadow-[0_30px_100px_-70px_rgba(15,23,42,.65)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                    Pricing
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.06em] md:text-5xl">
                    Projects are shaped around the business, not a fixed template.
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-8 text-slate-600 md:text-lg">
                    Every business needs a different mix of website, SEO,
                    payments, AI, email and infrastructure. We usually start
                    with a short discussion, then provide a clear proposal based
                    on the scope.
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                    Custom projects typically start from{" "}
                    <span className="font-semibold text-slate-950">£750</span>.
                  </p>

                  <a
                    href="mailto:info@gebedi.com?subject=Project enquiry"
                    className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Request a proposal
                  </a>
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