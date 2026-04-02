"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <div className="relative z-40 pt-4">
      <Container>
        <header className="flex h-16 items-center justify-between rounded-full border border-white/55 bg-white/72 px-4 shadow-[0_14px_40px_-24px_rgba(15,23,42,.14)] backdrop-blur-xl md:px-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/gebedi-logo.png"
              alt="Gebedi"
              width={120}
              height={40}
              priority
              className="h-8 w-auto object-contain opacity-95 transition hover:opacity-100 md:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/about" className="transition hover:text-slate-950">
              About
            </Link>
            <Link href="/ventures" className="transition hover:text-slate-950">
              Ventures
            </Link>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>

          <Link
            href="/ventures"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Explore
          </Link>
        </header>
      </Container>
    </div>
  );
}