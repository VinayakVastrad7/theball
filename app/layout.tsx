
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import Footer from "@/components/layout/FooterTemp";

const siteUrl = "https://theball.lol";
const adsensePublisherId = "ca-pub-1662196448440170";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Theball — Football, Tactics, Satire & Humor",
    template: "%s | Theball",
  },

  description:
    "Football tactics, analysis, player profiles, transfers, opinions, satire, dark humor and absurd football stories.",

  keywords: [
    "football",
    "soccer",
    "football tactics",
    "football analysis",
    "player analysis",
    "football transfers",
    "football opinions",
    "football stories",
    "football satire",
    "football humor",
    "football comedy",
    "football memes",
    "dark football humor",
    "satirical football",
    "funny football stories",
    "fictional football stories",
    "football culture",
    "dank football humor",
  ],

  authors: [{ name: "Theball" }],
  creator: "Theball",
  publisher: "Theball",



  openGraph: {
    type: "website",
    siteName: "Theball",
    title: "Theball — Football, Tactics, Satire & Humor",
    description:
      "Football tactics, analysis, player profiles, transfers, opinions, satire, dark humor and absurd football stories.",
    url: siteUrl,
  },

  twitter: {
    card: "summary_large_image",
    title: "Theball — Football, Tactics, Satire & Humor",
    description:
      "Football tactics, analysis, player profiles, transfers, opinions, satire, dark humor and absurd football stories.",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "google-adsense-account": adsensePublisherId,
  },
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Theball",
      description:
        "Football tactics, analysis, player profiles, transfers, opinions, satire, dark humor and absurd football stories.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },

    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Theball",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        <Footer />

        {/* Google AdSense — replace placeholder ID before production */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
