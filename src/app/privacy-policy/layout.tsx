import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Comprehensive privacy policy for Sanctus Bible & Prayer app detailing data collection, usage, and protection practices for AI features, spiritual content, and user interactions.",
  openGraph: {
    title: "Privacy Policy - Sanctus",
    description:
      "Comprehensive privacy policy for Sanctus Bible & Prayer app with AI Spiritual Mentor and Bible Chat features.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}