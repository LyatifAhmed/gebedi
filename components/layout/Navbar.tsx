"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <div className="absolute left-0 top-0 z-50 w-full pt-5 md:pt-6">
      <Container>
        <header className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-slate-950/10 bg-white/55 px-4 shadow-[0_24px_80px_-45px_rgba(15,23,42,.45)] backdrop-blur-2xl md:h-16 md:px-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/gebedi-logo.png"
              alt="Gebedi"
              width={110}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              About
            </Link>

            <Link
              href="/ventures"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Ventures
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Services
            </Link>

            <a
              href="mailto:info@gebedi.com"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Contact
            </a>
          </nav>

          <Link
            href="/ventures"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-slate-800"
          >
            Discover
          </Link>
        </header>
      </Container>
    </div>
  );
}