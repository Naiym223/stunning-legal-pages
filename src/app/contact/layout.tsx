import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Information',
  description: 'Get in touch with our legal team for support, questions, or compliance assistance.',
  openGraph: {
    title: 'Contact Information - Legal Pages',
    description: 'Get in touch with our legal team for support, questions, or compliance assistance.',
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}