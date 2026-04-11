import Container from "@/components/layout/Container";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.08),transparent_36%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl">
              Built with restraint, taste, and long-term intent
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Gebedi is designed as a focused portfolio of digital ventures,
              built by a solo founder who cares deeply about positioning,
              credibility, and execution.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              The goal is not to ship noise. It is to create brands that feel
              sharp, trustworthy, and durable — products that can grow with real
              substance behind them.
            </p>

            <div className="mt-8 border-l border-slate-200 pl-4">
              <div className="text-sm font-semibold text-slate-950">
                Latif Ahmed
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Founder · Generation Beta Digital Ltd
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/80 bg-white/75 shadow-[0_30px_80px_-40px_rgba(15,23,42,.20)] backdrop-blur-2xl">
              <Image
                src="/gebedi-founder.webp"
                alt="Founder of Gebedi"
                width={720}
                height={860}
                className="h-full w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}