"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/data-security', label: 'Data Security' },
  { href: '/accessibility', label: 'Accessibility' },
]

const policyLinks = [
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/user-conduct', label: 'User Conduct' },
  { href: '/intellectual-property', label: 'Intellectual Property' },
  { href: '/contact', label: 'Contact Information' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/95 backdrop-blur-lg border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Faithlingo
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              A spiritual growth platform helping believers deepen their faith through daily lessons, prayer, and biblical content.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@walkwithchrist.shop</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span><a href="https://valoriya.org" className="text-gray-600 hover:text-blue-600">valoriya.org</a></span>
              </div>
            </div>
          </motion.div>

          {/* Legal Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Legal Documents</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Last Updated</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Privacy Policy: December 1, 2024</div>
              <div>Terms of Service: December 1, 2024</div>
              <div>Cookie Policy: December 1, 2024</div>
              <div>All Documents: December 1, 2024</div>
            </div>
            <div className="mt-4">
              <Link
                href="/sitemap.xml"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
              >
                View Sitemap
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600">
            © {currentYear} Valoriya. All rights reserved. Faithlingo is a product of Valoriya.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Built with ❤️ using Next.js & Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}