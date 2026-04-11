"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

type Venture = {
  name: string;
  logo: string;
  description: string;
  href: string;
};

export default function VentureSpotlight({
  ventures,
}: {
  ventures: Venture[];
}) {
  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.08),transparent_38%)]" />
      <div className="pointer-events-none absolute left-[-140px] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
            Ventures
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">
            Focused brands. Different markets. One standard.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            From SaaS infrastructure to service-led businesses, each venture is
            shaped with the same attention to design, trust, and long-term
            positioning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ventures.map((venture) => (
            <Link
              key={venture.name}
              href={venture.href}
              className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_-40px_rgba(15,23,42,.26)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                  <Image
                    src={venture.logo}
                    alt={venture.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-slate-950">
                  {venture.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {venture.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm text-slate-500">View venture</span>
                  <span className="text-sm font-medium text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}