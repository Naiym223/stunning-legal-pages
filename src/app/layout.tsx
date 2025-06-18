import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sanctus Legal",
    default: "Sanctus Legal - Privacy Policy & Terms of Service",
  },
  description:
    "Legal documentation for Sanctus Bible & Prayer app including privacy policy, terms of service, and compliance information. Features AI Spiritual Mentor, Bible Chat, daily challenges, and calming music.",
  keywords: [
    "sanctus",
    "privacy policy",
    "terms of service",
    "bible app",
    "prayer app",
    "spiritual mentor",
    "bible chat",
    "ai",
    "christian app",
  ],
  authors: [{ name: "Sanctus Team" }],
  creator: "Sanctus",
  publisher: "Sanctus",
  metadataBase: new URL("https://legal-pages-site.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legal-pages-site.vercel.app",
    title: "Sanctus Legal - Privacy Policy & Terms of Service",
    description:
      "Legal documentation for Sanctus Bible & Prayer app with AI features.",
    siteName: "Sanctus Legal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanctus Legal - Privacy Policy & Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctus Legal - Privacy Policy & Terms of Service",
    description:
      "Legal documentation for Sanctus Bible & Prayer app with AI features.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-40 right-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          </div>

          <div className="relative z-10">
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}