import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Information",
  description:
    "Get in touch with our Sanctus support team for help with your spiritual growth journey, AI features, and technical assistance.",
  openGraph: {
    title: "Contact Information - Sanctus",
    description:
      "Get in touch with our Sanctus support team for help with your spiritual growth journey and AI features.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}