"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, FileText, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const legalPages = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/data-security', label: 'Data Security' },
  { href: '/accessibility', label: 'Accessibility' },
  { href: '/refund-policy', label: 'Refund Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/user-conduct', label: 'User Conduct' },
  { href: '/intellectual-property', label: 'Intellectual Property' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 hover-lift"
          >
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">
              Legal Pages
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/50 ${
                pathname === '/' ? 'bg-white/70 shadow-md' : ''
              }`}
            >
              <Home className="h-4 w-4 inline-block mr-2" />
              Home
            </Link>
            
            {/* Legal Pages Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/50 flex items-center">
                Legal Documents
                <svg className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {legalPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`block px-4 py-2 text-sm hover:bg-white/50 transition-colors duration-200 ${
                      pathname === page.href ? 'bg-white/70 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-white/50 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mx-4 mb-4 rounded-xl overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === '/' ? 'bg-white/70 text-blue-600' : 'hover:bg-white/50'
                }`}
              >
                <Home className="h-4 w-4 inline-block mr-2" />
                Home
              </Link>
              
              <div className="border-t border-gray-200 my-2"></div>
              
              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                    pathname === page.href ? 'bg-white/70 text-blue-600' : 'hover:bg-white/50'
                  }`}
                >
                  {page.label}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 my-2"></div>
              
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  setIsOpen(false)
                }}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-4 w-4 inline-block mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 inline-block mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}