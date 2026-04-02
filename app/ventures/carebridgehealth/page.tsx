import type { Metadata } from "next";
import VentureHero from "@/components/ventures/VentureHero";

export const metadata: Metadata = {
  title: "CareBridgeHealth",
  description:
    "CareBridgeHealth is a premium patient coordination concept built around structure, discretion, and trust.",
  alternates: {
    canonical: "https://gebedi.com/ventures/carebridgehealth",
  },
};

export default function CareBridgeHealthPage() {
  return (
    <main className="py-24">
      <VentureHero
        title="CareBridgeHealth"
        logo="/carebridgehealth-logo.png"
        tag="Health Concierge"
        description="CareBridgeHealth is a premium medical coordination concept designed for a more structured and discreet patient journey. Under the Gebedi umbrella, it reflects a trust-led brand approach built around clarity, presentation, and careful user experience."
        href="https://carebridgehealth.co"
      />
    </main>
  );
}