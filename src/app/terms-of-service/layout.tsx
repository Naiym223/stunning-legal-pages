import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Comprehensive terms of service governing the use of our platform and services in compliance with New York state legal requirements.',
  openGraph: {
    title: 'Terms of Service - Legal Pages',
    description: 'Comprehensive terms of service governing the use of our platform and services.',
  }
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}