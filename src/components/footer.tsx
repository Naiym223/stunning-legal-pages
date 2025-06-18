"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/data-security", label: "Data Security" },
  { href: "/accessibility", label: "Accessibility" },
];

const policyLinks = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/user-conduct", label: "User Conduct" },
  { href: "/intellectual-property", label: "Intellectual Property" },
  { href: "/contact", label: "Contact Information" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Sanctus
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              A comprehensive Bible & Prayer app featuring AI Spiritual Mentor, 
              Bible Chat, daily streak challenges, and calming music to enhance 
              your spiritual journey.
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
                <Sparkles className="h-4 w-4" />
                <span>AI-Powered Spiritual Growth</span>
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
            <h3 className="text-lg font-semibold text-gray-900">
              Legal Documents
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm flex items-center group"
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
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* App Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Sanctus Features
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>🤖 AI Spiritual Mentor</div>
              <div>💬 Bible Chat with AI</div>
              <div>📖 Complete Bible Reading</div>
              <div>🔥 Daily Streak Challenges</div>
              <div>🎵 Calming Music & Verses</div>
              <div>🙏 Prayer Tracking</div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-gray-500">
                Last Updated: December 1, 2024
              </span>
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
            © {currentYear} Sanctus. All rights reserved. Empowering spiritual growth through technology.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Built with ❤️ for the faithful community
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}