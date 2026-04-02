"use client";

import Image from "next/image";
import Link from "next/link";

const ventures = [
  {
    name: "BetaOffice",
    logo: "/betaoffice-logo.png",
    tag: "SaaS",
  },
  {
    name: "BetaData",
    logo: "/betadata-logo.png",
    tag: "Data & Engineering",
  },
  {
    name: "CareBridgeHealth",
    logo: "/carebridgehealth-logo.png",
    tag: "Health Concierge",
  },
  {
    name: "CleanNestPro",
    logo: "/cleannestpro-logo.png",
    tag: "Premium Services",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-88px)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,rgba(248,250,252,0.96),#f6f8fc)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-[24rem] w-[24rem] rounded-full bg-fuchsia-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center px-6 md:px-10">
        <div className="grid w-full items-center gap-14 py-10 md:grid-cols-[1.02fr_0.98fr] md:gap-16 md:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/70 bg-white/75 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-600 shadow-[0_8px_24px_-16px_rgba(15,23,42,.14)] backdrop-blur-xl">
              Generation Beta Digital Ltd
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-slate-950 md:text-7xl xl:text-[5.4rem]">
              Premium digital brands, built with clarity and depth.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Gebedi is the umbrella brand behind a portfolio of modern
              internet-first ventures across SaaS, health, services, and data —
              shaped by trust, thoughtful design, and serious execution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ventures"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore ventures
              </Link>

              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-800 shadow-[0_10px_30px_-18px_rgba(15,23,42,.12)] backdrop-blur transition hover:bg-white"
              >
                About Gebedi
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_28px_-18px_rgba(15,23,42,.12)] backdrop-blur-xl">
                4 active ventures
              </div>
              <div className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_28px_-18px_rgba(15,23,42,.12)] backdrop-blur-xl">
                Premium positioning
              </div>
              <div className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_28px_-18px_rgba(15,23,42,.12)] backdrop-blur-xl">
                Long-term brand thinking
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] border border-white/70 bg-white/78 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,.18)] backdrop-blur-2xl md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Portfolio
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-[2rem]">
                    Brands under Gebedi
                  </div>
                </div>

                <div className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-500">
                  Umbrella brand
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {ventures.map((venture) => (
                  <div
                    key={venture.name}
                    className="rounded-[24px] border border-slate-200/70 bg-white/85 p-5 shadow-[0_14px_40px_-26px_rgba(15,23,42,.10)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
                        <Image
                          src={venture.logo}
                          alt={`${venture.name} logo`}
                          width={32}
                          height={32}
                          className="h-auto w-8 object-contain"
                        />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-slate-950">
                          {venture.name}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {venture.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Standard
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Every venture is built around the same foundation: premium
                  presentation, customer trust, and technical seriousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}