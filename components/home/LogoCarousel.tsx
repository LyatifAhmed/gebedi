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
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Featured ventures
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-4xl">
              Built under one standard
            </h2>
          </div>

          <Link
            href="/ventures"
            className="text-sm text-slate-500 transition hover:text-slate-900"
          >
            View all →
          </Link>
        </div>

        {/* scroll container */}
        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-none">
            {ventures.map((venture) => (
              <Link
                key={venture.name}
                href={venture.href}
                className="group min-w-[280px] max-w-[280px] rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(15,23,42,.25)]"
              >
                {/* logo */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                  <Image
                    src={venture.logo}
                    alt={venture.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>

                {/* content */}
                <div className="mt-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {venture.tag}
                  </div>

                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                    {venture.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {venture.description}
                  </p>
                </div>

                {/* subtle hover line */}
                <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}