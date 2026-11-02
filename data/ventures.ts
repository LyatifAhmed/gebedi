export type Venture = { name: string; logo: string; description: string; tag: string; href: string; };
export const ventures: Venture[] = [
  { name: "BetaOffice", logo: "/betaoffice-logo.png", description: "Our live UK virtual office service, including London registered office and director service addresses, digital mail scans and AI-assisted summaries.", tag: "Live service", href: "https://betaoffice.uk" },
  { name: "AI Business Assistant", logo: "/gebedi-logo.png", description: "An AI operations assistant for small businesses. Currently in development and not yet available as a live service.", tag: "In development", href: "/ventures" },
  { name: "CareBridgeHealth", logo: "/carebridgehealth-logo.png", description: "A healthcare coordination platform concept for international patients. Project status and availability should be confirmed on its website.", tag: "Project", href: "https://carebridgehealth.co" },
  { name: "CleanNestPro", logo: "/cleannestpro-logo.png", description: "A cleaning service coordination project for international clients in Antalya through local partners.", tag: "Project", href: "https://cleannestpro.com" },
];
