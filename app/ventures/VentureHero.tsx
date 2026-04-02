import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function VentureHero({
  title,
  logo,
  tag,
  description,
  href,
}: {
  title: string;
  logo: string;
  tag: string;
  description: string;
  href?: string;
}) {
  return (
    <Container>
      <div className="rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.18)] backdrop-blur-xl md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-slate-50 shadow-inner">
              <Image src={logo} alt={`${title} logo`} width={60} height={60} className="h-auto w-[60px]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                {tag}
              </div>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                {title}
              </h1>
            </div>
          </div>

          {href ? (
            <Link
              href={href}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Visit site
            </Link>
          ) : null}
        </div>

        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5">
            <div className="text-sm font-medium text-slate-900">Premium positioning</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Built to feel credible, modern, and high-trust from first impression.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5">
            <div className="text-sm font-medium text-slate-900">Gebedi venture</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Part of the broader Gebedi portfolio of digital brands.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5">
            <div className="text-sm font-medium text-slate-900">Long-term focus</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Designed around quality, customer trust, and sustainable execution.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}