import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Faithlingo Legal',
    default: 'Faithlingo Legal - Privacy Policy & Terms of Service'
  },
  description: 'Legal documentation for Faithlingo spiritual growth app including privacy policy, terms of service, and compliance information by Valoriya.',
  keywords: ['faithlingo', 'privacy policy', 'terms of service', 'spiritual app', 'faith', 'christian app', 'valoriya'],
  authors: [{ name: 'Valoriya Team' }],
  creator: 'Valoriya',
  publisher: 'Valoriya',
  metadataBase: new URL('https://legal-pages-site.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legal-pages-site.vercel.app',
    title: 'Faithlingo Legal - Privacy Policy & Terms of Service',
    description: 'Legal documentation for Faithlingo spiritual growth app by Valoriya.',
    siteName: 'Faithlingo Legal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faithlingo Legal - Privacy Policy & Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faithlingo Legal - Privacy Policy & Terms of Service',
    description: 'Legal documentation for Faithlingo spiritual growth app by Valoriya.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          </div>

          <div className="relative z-10">
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}