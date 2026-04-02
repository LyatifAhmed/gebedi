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
    <footer className="relative mt-24 overflow-hidden border-t border-black/5 bg-white/70 py-16 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/gebedi-logo.png"
                alt="Gebedi"
                width={140}
                height={40}
                className="h-auto w-[120px] md:w-[140px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Gebedi is the umbrella brand behind premium digital ventures across
              SaaS, health, services, and data.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Generation Beta Digital Ltd
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-950">
                Home
              </Link>
              <Link href="/about" className="hover:text-slate-950">
                About
              </Link>
              <Link href="/ventures" className="hover:text-slate-950">
                Ventures
              </Link>
              <Link href="/services" className="hover:text-slate-950">
                Services
              </Link>
            </div>
          </div>

          {/* VENTURES */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Ventures
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              {ventures.map((venture) => (
                <Link
                  key={venture.name}
                  href={venture.href}
                  target={venture.href.startsWith("http") ? "_blank" : "_self"}
                  className="hover:text-slate-950"
                >
                  {venture.name}
                </Link>
              ))}
            </div>
          </div>

          {/* TRUST / CONTACT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Contact & Trust
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600">
              <a href="mailto:info@gebedi.com" className="hover:text-slate-950">
                info@gebedi.com
              </a>

              <div>
                3rd Floor, 86–90 Paul Street <br />
                London EC2A 4NE, UK
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Company No: 16274319
              </div>

              <div className="text-xs text-slate-400">
                ICO: ZB883806
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Gebedi. All rights reserved.</p>

          <p>
            Built with long-term thinking, trust, and technical depth.
          </p>
        </div>
      </Container>
    </footer>
  );
}