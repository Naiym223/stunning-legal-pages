import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Comprehensive terms of service governing the use of Sanctus Bible & Prayer app, AI Spiritual Mentor, Bible Chat, and spiritual growth features.",
  openGraph: {
    title: "Terms of Service - Sanctus",
    description:
      "Comprehensive terms of service governing the use of Sanctus Bible & Prayer app with AI features.",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}