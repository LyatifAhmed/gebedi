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
    <section className="relative min-h-[82vh] overflow-hidden bg-[#f8fafc] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-500 shadow-[0_10px_30px_-18px_rgba(15,23,42,.12)] backdrop-blur-xl">
            {tag}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[30px] border border-white/80 bg-white/85 shadow-[0_20px_60px_-30px_rgba(15,23,42,.16)] backdrop-blur-xl md:h-28 md:w-28">
              <Image
                src={logo}
                alt={`${title} logo`}
                width={64}
                height={64}
                className="h-auto w-14 object-contain md:w-16"
                priority
              />
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-slate-400">
            A Gebedi venture
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950 md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {href ? (
              <Link
                href={href}
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-7 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
              >
                Visit official website
              </Link>
            ) : (
              <span className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-7 text-sm font-semibold text-slate-500">
                Coming soon
              </span>
            )}

            <Link
              href="/ventures"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-7 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,.10)] backdrop-blur transition hover:bg-white"
            >
              Back to ventures
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-4xl gap-4 border-t border-slate-200/70 pt-8 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/80 bg-white/78 px-5 py-5 text-left shadow-[0_18px_50px_-34px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Positioning
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Designed to feel credible, modern, and premium from the first
                impression.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/80 bg-white/78 px-5 py-5 text-left shadow-[0_18px_50px_-34px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Ecosystem
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Part of the wider Gebedi portfolio of focused digital ventures.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/80 bg-white/78 px-5 py-5 text-left shadow-[0_18px_50px_-34px_rgba(15,23,42,.12)] backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Direction
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Built with long-term brand discipline, product clarity, and
                serious execution.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}