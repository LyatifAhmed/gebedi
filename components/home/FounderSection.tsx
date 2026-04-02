import Container from "@/components/layout/Container";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="relative py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* LEFT - TEXT */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Built with long-term thinking, not shortcuts
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              Gebedi is a portfolio of digital ventures designed and built by a
              solo founder with a focus on clarity, trust, and execution.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              From SaaS infrastructure to real-world service platforms, each
              product is crafted with a consistent philosophy: build something
              that actually works, scales, and earns trust over time.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="text-sm font-medium text-slate-900">
                Latif Ahmed
              </div>
              <div className="text-sm text-slate-400">
                Founder · Generation Beta Digital Ltd
              </div>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_30px_80px_-40px_rgba(15,23,42,.25)] backdrop-blur-xl">
              
              <Image
                src="/gebedi-founder.webp"
                alt="Founder of Gebedi"
                width={600}
                height={700}
                className="h-full w-full object-cover"
                priority
              />

              {/* subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}