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

      <main className="relative overflow-hidden bg-[#f8fafc]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_24%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-140px] top-[28rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

        <section className="relative pt-28 pb-18 md:pt-36 md:pb-24">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                About Gebedi
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 md:text-7xl">
                Built to create brands
                <br />
                with weight.
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                Gebedi is an umbrella brand focused on building premium digital
                ventures with clarity in positioning, strong design judgment,
                and serious long-term execution.
              </p>
            </div>
          </Container>
        </section>

        <section className="relative pb-20 md:pb-28">
          <Container>
            <div className="mx-auto max-w-4xl rounded-[32px] border border-white/80 bg-white/78 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.16)] backdrop-blur-2xl md:p-12">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Philosophy
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Not a collection of random projects.
                <br className="hidden md:block" />
                A deliberate portfolio.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                Rather than launching disconnected websites, Gebedi brings
                together a portfolio of digital ventures shaped by the same
                standard: premium presentation, trust-first positioning, and
                thoughtful product execution.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                The aim is not simply to make products look modern. It is to
                build businesses that feel credible, intentional, and durable
                from the beginning.
              </p>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  Founder
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">
                  Built with restraint, taste, and long-term intent
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                  Gebedi is designed and built by a solo founder with a strong
                  focus on clarity, trust, and execution across every layer of a
                  digital business.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                  From SaaS infrastructure to real-world service platforms, the
                  consistent principle is simple: build things that work, earn
                  trust, and improve in value over time.
                </p>

                <div className="mt-8 border-l border-slate-200 pl-4">
                  <div className="text-sm font-semibold text-slate-950">
                    Latif Ahmed
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Founder · Generation Beta Digital Ltd
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center md:justify-end">
                <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/80 bg-white/75 shadow-[0_30px_80px_-40px_rgba(15,23,42,.20)] backdrop-blur-2xl">
                  <Image
                    src="/gebedi-founder.webp"
                    alt="Founder of Gebedi"
                    width={720}
                    height={860}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] md:p-12">
              <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">
                Selected client work
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                We also help selected brands look sharper, feel stronger, and
                grow with more credibility.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Alongside our own ventures, we occasionally work with selected
                clients on premium website design, brand presentation,
                conversion-focused landing pages, and stronger Google visibility
                through cleaner structure and SEO foundations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Brand positioning",
                  "Website design",
                  "Landing pages",
                  "Google SEO",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@gebedi.com?subject=Project enquiry"
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
          </Container>
        </section>

        <section className="relative pb-24 md:pb-32">
          <Container>
            <div className="rounded-[32px] border border-white/80 bg-white/78 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.14)] backdrop-blur-2xl md:p-12">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Company details
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                  Registered and operating in the United Kingdom
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Gebedi operates under Generation Beta Digital Ltd, a
                  UK-registered company. We maintain a trust-focused approach to
                  operations, compliance, and data protection.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200/70 bg-white/82 p-5">
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

                <div className="rounded-[24px] border border-slate-200/70 bg-white/82 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Contact
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    info@gebedi.com
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200/70 bg-white/82 p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Company number
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    16274319
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200/70 bg-white/82 p-5">
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