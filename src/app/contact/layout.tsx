import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Information",
  description:
    "Get in touch with our Faithlingo support team for help with your spiritual growth journey.",
  openGraph: {
    title: "Contact Information - Faithlingo",
    description:
      "Get in touch with our Faithlingo support team for help with your spiritual growth journey.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
