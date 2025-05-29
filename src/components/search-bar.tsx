"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText } from 'lucide-react'
import Link from 'next/link'

const searchableContent = [
  { title: 'Privacy Policy', href: '/privacy-policy', keywords: ['privacy', 'data', 'personal information', 'gdpr', 'ccpa', 'collection', 'processing'] },
  { title: 'Terms of Service', href: '/terms-of-service', keywords: ['terms', 'conditions', 'agreement', 'service', 'user obligations', 'liability'] },
  { title: 'Cookie Policy', href: '/cookie-policy', keywords: ['cookies', 'tracking', 'analytics', 'consent', 'preferences', 'opt-out'] },
  { title: 'Data Security Policy', href: '/data-security', keywords: ['security', 'protection', 'encryption', 'breach', 'safeguards', 'protocols'] },
  { title: 'Accessibility Statement', href: '/accessibility', keywords: ['accessibility', 'ada', 'compliance', 'disabilities', 'accommodations', 'wcag'] },
  { title: 'Refund Policy', href: '/refund-policy', keywords: ['refund', 'return', 'cancellation', 'payment', 'billing', 'reimbursement'] },
  { title: 'Disclaimer', href: '/disclaimer', keywords: ['disclaimer', 'liability', 'accuracy', 'warranty', 'responsibility', 'limitation'] },
  { title: 'User Conduct Policy', href: '/user-conduct', keywords: ['conduct', 'behavior', 'prohibited', 'acceptable use', 'enforcement', 'violations'] },
  { title: 'Intellectual Property', href: '/intellectual-property', keywords: ['copyright', 'trademark', 'dmca', 'intellectual property', 'content', 'infringement'] },
  { title: 'Contact Information', href: '/contact', keywords: ['contact', 'support', 'legal', 'address', 'phone', 'email'] },
]

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchableContent>([])
  const [isOpen, setIsOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const handleResultClick = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    setFocused(false)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        animate={{
          scale: focused ? 1.02 : 1,
          boxShadow: focused 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="flex items-center p-4">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search legal documents..."
              className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
            />
            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={handleClear}
                  className="ml-3 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Search Results */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              {results.map((result, index) => (
                <motion.div
                  key={result.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={result.href}
                    onClick={handleResultClick}
                    className="flex items-center p-3 rounded-xl hover:bg-white/50 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200 mr-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {result.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {result.keywords.slice(0, 3).join(', ')}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl overflow-hidden z-50"
          >
            <div className="p-6 text-center">
              <Search className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No documents found for "{query}"</p>
              <p className="text-sm text-gray-500 mt-1">
                Try searching for terms like "privacy", "terms", "cookies", or "security"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}