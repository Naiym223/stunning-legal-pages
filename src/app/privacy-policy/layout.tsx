import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Comprehensive privacy policy detailing data collection, usage, and protection practices in compliance with GDPR, CCPA, and NY state requirements.',
  openGraph: {
    title: 'Privacy Policy - Legal Pages',
    description: 'Comprehensive privacy policy detailing data collection, usage, and protection practices.',
  }
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}