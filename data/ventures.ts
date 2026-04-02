export type Venture = {
  name: string;
  logo: string;
  description: string;
  tag: string;
  href: string;
};

export const ventures: Venture[] = [
  {
    name: "BetaOffice",
    logo: "/betaoffice-logo.png",
    description:
      "A premium London virtual office platform with AI-sorted mail, privacy-first positioning, and modern compliance flows.",
    tag: "SaaS",
    href: "https://betaoffice.uk",
  },
  {
    name: "BetaData",
    logo: "/betadata-logo.png",
    description:
      "A modern data and engineering brand focused on technical credibility, systems thinking, and digital infrastructure.",
    tag: "Data & Engineering",
    href: "#",
  },
  {
    name: "CareBridgeHealth",
    logo: "/carebridgehealth-logo.png",
    description:
      "A premium medical coordination concept built around trust, structure, and a more discreet patient journey.",
    tag: "Health Concierge",
    href: "https://carebridgehealth.co",
  },
  {
    name: "CleanNestPro",
    logo: "/cleannestpro-logo.png",
    description:
      "A premium property cleaning brand designed for expats, hosts, and homeowners who value reliability and presentation.",
    tag: "Premium Services",
    href: "https://cleannestpro.com",
  },
];