import type { Metadata } from "next";
import VentureHero from "@/components/ventures/VentureHero";

export const metadata: Metadata = {
  title: "BetaData",
  description:
    "BetaData is a data and engineering brand focused on systems thinking, technical credibility, and modern digital infrastructure.",
  alternates: {
    canonical: "https://gebedi.com/ventures/betadata",
  },
};

export default function BetaDataPage() {
  return (
    <main className="py-24">
      <VentureHero
        title="BetaData"
        logo="/betadata-logo.png"
        tag="Data & Engineering"
        description="BetaData is a data and engineering brand focused on technical credibility, modern infrastructure, and practical systems thinking. It represents the deeper engineering layer within the Gebedi portfolio."
      />
    </main>
  );
}