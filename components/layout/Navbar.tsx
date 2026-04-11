"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <div className="relative z-50 pt-4 md:pt-5">
      <Container>
        <header className="flex h-16 items-center justify-between rounded-full border border-white/80 bg-white/78 px-4 shadow-[0_18px_50px_-26px_rgba(15,23,42,.14)] backdrop-blur-2xl md:h-[72px] md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/gebedi-logo.png"
              alt="Gebedi"
              width={124}
              height={40}
              priority
              className="h-8 w-auto object-contain opacity-95 transition duration-300 hover:opacity-100 md:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
            >
              About
            </Link>
            <Link
              href="/ventures"
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
            >
              Ventures
            </Link>
            <a
              href="mailto:info@gebedi.com"
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
            >
              Contact
            </a>
          </nav>

          <Link
            href="/ventures"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
          >
            Discover
          </Link>
        </header>
      </Container>
    </div>
  );
}