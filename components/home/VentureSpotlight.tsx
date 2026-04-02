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
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Ventures
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            A portfolio of focused digital products
          </h2>

          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Each venture is designed with a clear purpose — from infrastructure
            to real-world services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ventures.map((venture) => (
            <Link
              key={venture.name}
              href={venture.href}
              className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_-40px_rgba(15,23,42,.35)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
                <Image
                  src={venture.logo}
                  alt={venture.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {venture.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {venture.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Explore
                </span>

                <span className="text-sm font-medium text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}