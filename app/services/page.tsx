import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Services | BetaOffice Ltd",
  description: "Explore products and services from BetaOffice Ltd, including UK virtual office addresses, digital mail management and AI business tools in development.",
  alternates: { canonical: "https://gebedi.com/services" },
};

const products = [
  { title: "BetaOffice", status: "Live service", description: "London registered office and director service addresses, digital mail scans, AI-assisted mail summaries and a self-service company dashboard.", href: "https://betaoffice.uk", action: "Explore BetaOffice" },
  { title: "AI Business Assistant", status: "In development", description: "An AI operations assistant being developed for small businesses. Not yet available as a live service.", href: "/ventures", action: "View projects" },
  { title: "CleanNestPro", status: "Project", description: "Cleaning service coordination for international clients in Antalya, working with local service partners.", href: "https://cleannestpro.com", action: "Visit CleanNestPro" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7f3ee] px-6 pb-28 pt-40 text-slate-950 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">BetaOffice Ltd · Company No. 16274319</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Products and services.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">Gebedi introduces the products and projects of BetaOffice Ltd. Our live virtual office service is available today; other tools are clearly marked by development status.</p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="flex flex-col rounded-[2rem] border border-slate-950/10 bg-white/70 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{product.status}</p>
                <h2 className="mt-5 text-3xl font-semibold">{product.title}</h2>
                <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{product.description}</p>
                <Link href={product.href} className="mt-8 inline-flex items-center font-semibold text-slate-950 underline underline-offset-4">{product.action}</Link>
              </article>
            ))}
          </div>
          <p className="mt-14 text-sm text-slate-500">BetaOffice Ltd · 66 Paul Street, London EC2A 4NA, United Kingdom</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
