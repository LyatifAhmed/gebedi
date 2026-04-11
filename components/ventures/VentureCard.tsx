import Image from "next/image";
import Link from "next/link";

type Venture = {
  name: string;
  logo: string;
  description: string;
  tag: string;
  href: string;
};

export default function VentureCard({ venture }: { venture: Venture }) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/82 p-6 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_-38px_rgba(15,23,42,0.24)] md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_58%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] border border-slate-100 bg-slate-50 shadow-inner">
            <Image
              src={venture.logo}
              alt={`${venture.name} logo`}
              width={46}
              height={46}
              className="h-auto w-[46px] object-contain"
            />
          </div>

          <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            {venture.tag}
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
          {venture.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
          {venture.description}
        </p>

        <div className="mt-6 grid gap-3">
          <div className="rounded-[22px] border border-slate-200/70 bg-slate-50/70 px-4 py-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Built under one standard
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Premium presentation, trust-first positioning, and long-term brand
              thinking.
            </p>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-slate-200/70 pt-5">
          <span className="text-sm text-slate-500">Explore venture</span>

          <Link
            href={venture.href}
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 group-hover:translate-x-0.5"
          >
            Visit site
          </Link>
        </div>
      </div>
    </article>
  );
}