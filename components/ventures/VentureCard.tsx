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
    <article className="group rounded-[2rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-38px_rgba(15,23,42,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-50 shadow-inner">
            <Image
              src={venture.logo}
              alt={`${venture.name} logo`}
              width={46}
              height={46}
              className="h-auto w-[46px]"
            />
          </div>

          <div>
            <div className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
              {venture.name}
            </div>

            <div className="mt-1 inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-500">
              {venture.tag}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {venture.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Generation Beta product
        </div>

        <Link
          href={venture.href}
          className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-slate-800"
        >
          Visit
        </Link>
      </div>
    </article>
  );
}