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
    <article className="group rounded-[2rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-38px_rgba(15,23,42,0.24)] md:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-50 shadow-inner ring-1 ring-slate-200/60">
          <Image
            src={venture.logo}
            alt={`${venture.name} logo`}
            width={46}
            height={46}
            className="h-auto w-[46px]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
            {venture.name}
          </h3>

          <div className="mt-2 inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-500">
            {venture.tag}
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-[15px]">
        {venture.description}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3">
          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Positioning
          </div>
          <p className="mt-1 text-sm text-slate-700">
            Built with a premium, trust-first approach.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3">
          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Portfolio
          </div>
          <p className="mt-1 text-sm text-slate-700">
            Part of the wider Gebedi venture ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 border-t border-slate-200/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Explore venture
        </div>

        <Link
          href={venture.href}
          className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white transition group-hover:bg-slate-800"
        >
          Visit official site
        </Link>
      </div>
    </article>
  );
}