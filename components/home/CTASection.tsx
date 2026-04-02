import Container from "@/components/layout/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Ventures CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,.25)] backdrop-blur-xl md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-indigo-500/5" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Explore
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                Discover the ventures behind Gebedi
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Explore a growing portfolio of carefully designed digital brands —
                built with long-term thinking, strong positioning, and real execution.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/ventures"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_-20px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_26px_80px_-24px_rgba(168,85,247,0.9)]"
                >
                  View all ventures
                </Link>

                <Link
                  href="/about"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white"
                >
                  Learn about Gebedi
                </Link>
              </div>
            </div>
          </div>

          {/* Services CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,.45)] md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_40%)]" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Selected client work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                We also help brands look sharper, feel stronger, and rank better.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                In addition to building our own ventures, we work on selected digital
                projects including premium website design, brand presentation,
                landing pages, and Google SEO improvements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                  Branding
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                  Websites
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                  Google SEO
                </div>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:info@gebedi.com?subject=Project enquiry"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Discuss a project
                </a>

                <Link
                  href="/about"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Why work with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}