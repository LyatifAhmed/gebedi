import type { Metadata } from "next";
import VentureHero from "@/components/ventures/VentureHero";

export const metadata: Metadata = {
  title: "CleanNestPro",
  description:
    "CleanNestPro is a premium property cleaning brand designed for expats, hosts, and homeowners who value reliability and presentation.",
  alternates: {
    canonical: "https://gebedi.com/ventures/cleannestpro",
  },
};

export default function CleanNestProPage() {
  return (
    <main className="py-24">
      <VentureHero
        title="CleanNestPro"
        logo="/cleannestpro-logo.png"
        tag="Premium Services"
        description="CleanNestPro is a premium property cleaning brand built for expats, holiday homeowners, and service-conscious clients who value trust, presentation, and reliability. It represents the service brand side of the Gebedi portfolio."
        href="https://cleannestpro.com"
      />
    </main>
  );
}