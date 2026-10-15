import type { Metadata } from "next";

import CategoryPage from "@/components/articles/CategoryPage";

export const metadata: Metadata = {
  title: "Investigation Pieces",
  description:
    "Fictional investigations, satirical stories and completely serious reports about things that never happened.",

  alternates: {
    canonical: "/investigation-pieces",
  },

  openGraph: {
    title: "Investigation Pieces | Theball",
    description:
      "Fictional investigations, satirical stories and completely serious reports about things that never happened.",
    url: "https://theball.lol/investigation-pieces",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Investigation Pieces | Theball",
    description:
      "Fictional investigations, satirical stories and completely serious reports about things that never happened.",
  },
};

export default function InvestigationPiecesPage() {
  return (
    <CategoryPage
      title="Investigation Pieces"
      category="Investigation Pieces"
      description="Fictional investigations, satirical stories and completely serious reports about things that never happened."
    />
  );
}