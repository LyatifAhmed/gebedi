import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gebedi.com"),

  title: {
    default: "Gebedi | BetaOffice Ltd Products",
    template: "%s | Gebedi",
  },

  description:
    "Gebedi presents the products and digital projects of BetaOffice Ltd, a UK-registered company.",

  applicationName: "Gebedi",

  keywords: [
    "Gebedi",
    "BetaOffice Ltd",
    "digital brands",
    "umbrella brand",
    "premium digital ventures",
    "SaaS",
    "health concierge",
    "data engineering",
    "premium services",
  ],

  authors: [{ name: "BetaOffice Ltd" }],
  creator: "BetaOffice Ltd",
  publisher: "BetaOffice Ltd",
  category: "business",

  alternates: {
    canonical: "https://www.gebedi.com",
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.gebedi.com",
    siteName: "Gebedi",
    title: "Gebedi | BetaOffice Ltd Products",
    description:
      "Explore the products and projects of BetaOffice Ltd, including virtual office services and digital business tools.",
    images: [
      {
        url: "https://www.gebedi.com/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | BetaOffice Ltd Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gebedi | BetaOffice Ltd Products",
    description:
      "Explore the products and projects of BetaOffice Ltd, including virtual office services and digital business tools.",
    images: ["https://www.gebedi.com/og/gebedi-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="bg-[#f6f8fc] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}