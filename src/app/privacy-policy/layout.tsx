import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Comprehensive privacy policy for Faithlingo detailing data collection, usage, and protection practices in compliance with GDPR, CCPA, and applicable regulations.",
  openGraph: {
    title: "Privacy Policy - Faithlingo",
    description:
      "Comprehensive privacy policy for Faithlingo detailing data collection, usage, and protection practices.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
