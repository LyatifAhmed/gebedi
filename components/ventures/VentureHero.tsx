import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function VentureHero({
  title,
  logo,
  tag,
  description,
  href,
}: {
  title: string;
  logo: string;
  tag: string;
  description: string;
  href?: string;
}) {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container>
        <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/78 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.22)] backdrop-blur-xl md:p-12">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                {tag}
              </div>

              <div className="mt-6 flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-slate-50 shadow-inner">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    width={52}
                    height={52}
                    className="h-auto w-[52px] object-contain"
                    priority
                  />
                </div>

                <div>
                  <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                    {title}
                  </h1>
                  <p className="mt-2 text-sm text-slate-400">
                    A Gebedi venture
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {href ? (
                  <Link
                    href={href}
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_-20px_rgba(168,85,247,0.65)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_24px_80px_-24px_rgba(168,85,247,0.8)]"
                  >
                    Visit website
                  </Link>
                ) : (
                  <span className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-500">
                    Coming soon
                  </span>
                )}

                <Link
                  href="/ventures"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-800 transition hover:bg-white"
                >
                  Back to ventures
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:w-[320px]">
              <div className="rounded-[24px] border border-slate-200/70 bg-white/80 p-5">
                <div className="text-sm font-medium text-slate-900">
                  Premium positioning
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Built to feel credible, modern, and high-trust from the first
                  impression.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200/70 bg-white/80 p-5">
                <div className="text-sm font-medium text-slate-900">
                  Part of Gebedi
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  This venture sits under the wider Gebedi umbrella of digital
                  brands.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200/70 bg-white/80 p-5">
                <div className="text-sm font-medium text-slate-900">
                  Long-term focus
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Designed with product discipline, thoughtful execution, and
                  long-term brand value in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}