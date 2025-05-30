import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Comprehensive terms of service governing the use of Faithlingo spiritual growth platform and services.",
  openGraph: {
    title: "Terms of Service - Faithlingo",
    description:
      "Comprehensive terms of service governing the use of Faithlingo spiritual growth platform and services.",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
