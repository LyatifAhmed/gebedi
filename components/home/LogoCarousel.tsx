"use client";

import Image from "next/image";
import Link from "next/link";

type Venture = {
  name: string;
  logo: string;
  description: string;
  tag: string;
  href: string;
};

export default function LogoCarousel({ ventures }: { ventures: Venture[] }) {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_44%)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-4xl">
              A shared standard across every venture
            </h2>
          </div>

          <Link
            href="/ventures"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            View all ventures →
          </Link>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent" />

          <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scroll-behavior:smooth]">
            {ventures.map((venture) => {
              const isExternal = venture.href.startsWith("http");

              return (
                <Link
                  key={venture.name}
                  href={venture.href}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group min-w-[300px] max-w-[300px] snap-start rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-30px_rgba(15,23,42,.22)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                      <Image
                        src={venture.logo}
                        alt={venture.name}
                        width={34}
                        height={34}
                        className="h-auto w-8 object-contain"
                      />
                    </div>

                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      {venture.tag}
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                    {venture.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {venture.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-slate-100" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Explore venture</span>
                    <span className="text-sm font-medium text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}