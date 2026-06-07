"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f3ee] text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-24rem] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#d8c3ff]/45 blur-3xl" />
        <div className="absolute right-[-12rem] top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#ffb6d5]/35 blur-3xl" />
        <div className="absolute left-[-10rem] bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#9ad7ff]/30 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:4px_4px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pt-36">
        <div className="mb-20 hidden items-center justify-between text-[11px] font-semibold uppercase tracking-[0.42em] text-slate-400 md:flex">
          <span>Gebedi</span>
          <span>Digital Venture Studio</span>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center rounded-full border border-slate-950/10 bg-white/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-[0_20px_60px_-35px_rgba(15,23,42,.35)] backdrop-blur-2xl">
              Generation Beta Digital Ltd
            </div>

            <h1 className="max-w-5xl text-[4.4rem] font-semibold leading-[0.82] tracking-[-0.095em] text-slate-950 sm:text-[5.8rem] md:text-[7.5rem] xl:text-[9rem]">
              Brands
              <br />
              with
              <br />
              weight.
            </h1>
          </div>

          <div className="max-w-md lg:pb-8">
            <p className="text-lg leading-8 text-slate-600 md:text-xl">
              We build clean, trusted and search-ready digital foundations for
              modern businesses — from brand presence to lead generation.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/ventures"
                className="group inline-flex h-14 items-center justify-between rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:scale-[1.015] hover:bg-slate-800"
              >
                <span>Discover ventures</span>
                <span className="ml-6 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="group inline-flex h-14 items-center justify-between rounded-full border border-slate-950/10 bg-white/50 px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_-35px_rgba(15,23,42,.4)] backdrop-blur-xl transition hover:bg-white/80"
              >
                <span>About Gebedi</span>
                <span className="ml-6 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 border-t border-slate-950/10 pt-5 text-xs uppercase tracking-[0.22em] text-slate-500 md:grid-cols-3">
          <div>SEO-led websites</div>
          <div className="md:text-center">AI-assisted systems</div>
          <div className="md:text-right">Built from London</div>
        </div>
      </div>
    </section>
  );
}