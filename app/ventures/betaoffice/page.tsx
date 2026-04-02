import type { Metadata } from "next";
import VentureHero from "@/components/ventures/VentureHero";

export const metadata: Metadata = {
  title: "BetaOffice",
  description:
    "BetaOffice is a premium London virtual office platform with AI-sorted mail, privacy-first positioning, and modern compliance flows.",
  alternates: {
    canonical: "https://gebedi.com/ventures/betaoffice",
  },
};

export default function BetaOfficePage() {
  return (
    <main className="py-24">
      <VentureHero
        title="BetaOffice"
        logo="/betaoffice-logo.png"
        tag="SaaS"
        description="BetaOffice is a premium London virtual office platform designed around trust, privacy, and a modern customer experience. It combines a Central London business address with AI-sorted mail and a more polished onboarding flow for founders who want a serious business presence."
        href="https://betaoffice.uk"
      />
    </main>
  );
}