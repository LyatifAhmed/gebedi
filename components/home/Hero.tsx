"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f3ee] text-slate-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#d8c3ff]/40 blur-3xl" />
        <div className="absolute right-[-12rem] top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#ffb6d5]/30 blur-3xl" />
        <div className="absolute left-[-10rem] bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#9ad7ff]/25 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      </div>

      {/* Noise / texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:4px_4px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10 md:py-10">
        {/* Top line */}
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
            Gebedi
          </div>

          <div className="hidden text-xs uppercase tracking-[0.28em] text-slate-400 md:block">
            Digital Venture Studio
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 inline-flex items-center rounded-full border border-slate-950/10 bg-white/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-[0_20px_60px_-30px_rgba(15,23,42,.35)] backdrop-blur-2xl">
                Generation Beta Digital Ltd
              </div>

              <h1 className="max-w-5xl text-[4.2rem] font-semibold leading-[0.82] tracking-[-0.09em] text-slate-950 md:text-[7.5rem] xl:text-[9.5rem]">
                Brands
                <br />
                with
                <br />
                weight.
              </h1>
            </div>

            <div className="max-w-md lg:pb-6">
              <p className="text-lg leading-8 text-slate-600 md:text-xl">
                We build clean, trusted and search-ready digital foundations for
                modern businesses — from brand presence to lead generation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/ventures"
                  className="group inline-flex h-14 items-center justify-between rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.015] hover:bg-slate-800"
                >
                  <span>Discover ventures</span>
                  <span className="ml-6 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="group inline-flex h-14 items-center justify-between rounded-full border border-slate-950/10 bg-white/50 px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_-35px_rgba(15,23,42,.4)] backdrop-blur-xl transition-all duration-300 hover:bg-white/80"
                >
                  <span>About Gebedi</span>
                  <span className="ml-6 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom editorial strip */}
        <div className="grid gap-4 border-t border-slate-950/10 pt-5 text-xs uppercase tracking-[0.22em] text-slate-500 md:grid-cols-3">
          <div>SEO-led websites</div>
          <div className="md:text-center">AI-assisted systems</div>
          <div className="md:text-right">Built from London</div>
        </div>
      </div>
    </section>
  );
}