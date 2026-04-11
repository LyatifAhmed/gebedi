"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const ventures = [
  {
    name: "BetaOffice",
    href: "https://betaoffice.uk",
  },
  {
    name: "BetaData",
    href: "/ventures/betadata",
  },
  {
    name: "CleanNestPro",
    href: "https://cleannestpro.com",
  },
  {
    name: "CareBridgeHealth",
    href: "https://carebridgehealth.co",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/70 bg-white/72 py-16 backdrop-blur-2xl md:mt-32 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(217,70,239,0.06),transparent_26%)]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/gebedi-logo.png"
                alt="Gebedi"
                width={140}
                height={40}
                className="h-auto w-[120px] object-contain opacity-95 md:w-[140px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Gebedi is the umbrella brand behind a focused portfolio of premium
              digital ventures across SaaS, health, services, and data.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Generation Beta Digital Ltd
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-slate-950">
                About
              </Link>
              <Link href="/ventures" className="transition hover:text-slate-950">
                Ventures
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Ventures
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              {ventures.map((venture) => {
                const isExternal = venture.href.startsWith("http");

                return (
                  <Link
                    key={venture.name}
                    href={venture.href}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="transition hover:text-slate-950"
                  >
                    {venture.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Contact & Trust
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-600">
              <a
                href="mailto:info@gebedi.com"
                className="transition hover:text-slate-950"
              >
                info@gebedi.com
              </a>

              <div className="leading-7">
                3rd Floor, 86–90 Paul Street
                <br />
                London EC2A 4NE, United Kingdom
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-400">
                <div>Company No: 16274319</div>
                <div>ICO Registration No: ZB883806</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-400 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gebedi. All rights reserved.</p>
          <p>Built with clarity, trust, and long-term brand thinking.</p>
        </div>
      </Container>
    </footer>
  );
}