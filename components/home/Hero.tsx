"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-120px] bottom-[-80px] h-[22rem] w-[22rem] rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative flex min-h-screen items-center justify-center px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500 shadow-[0_10px_30px_-18px_rgba(15,23,42,.12)] backdrop-blur-xl">
            Generation Beta Digital Ltd
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.08em] text-slate-950 md:text-7xl xl:text-[7.25rem]">
            Brands with weight.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Gebedi builds and shapes premium digital ventures with clarity,
            trust, and long-term brand thinking.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ventures"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-7 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
            >
              Discover ventures
            </Link>

            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-7 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,.10)] backdrop-blur transition-all duration-300 hover:bg-white"
            >
              About Gebedi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}