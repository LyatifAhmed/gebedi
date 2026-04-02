import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gebedi.com"),

  title: {
    default: "Gebedi | Premium Digital Brands",
    template: "%s | Gebedi",
  },

  description:
    "Gebedi is the umbrella brand behind premium digital ventures across SaaS, health, services, and data engineering.",

  applicationName: "Gebedi",

  keywords: [
    "Gebedi",
    "Generation Beta Digital",
    "digital brands",
    "umbrella brand",
    "premium digital ventures",
    "SaaS",
    "health concierge",
    "data engineering",
    "premium services",
  ],

  authors: [{ name: "Generation Beta Digital Ltd" }],
  creator: "Generation Beta Digital Ltd",
  publisher: "Generation Beta Digital Ltd",
  category: "business",

  alternates: {
    canonical: "https://gebedi.com",
  },

  // ✅ EKLENEN KISIM
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
    url: "https://gebedi.com",
    siteName: "Gebedi",
    title: "Gebedi | Premium Digital Brands",
    description:
      "A premium umbrella brand building modern digital ventures with trust, design, and technical depth.",
    images: [
      {
        url: "/og/gebedi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gebedi | Premium Digital Brands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gebedi | Premium Digital Brands",
    description:
      "A premium umbrella brand building modern digital ventures with trust, design, and technical depth.",
    images: ["/og/gebedi-og.jpg"],
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