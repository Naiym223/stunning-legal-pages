"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { List, ChevronRight } from 'lucide-react'

interface Section {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  sections: Section[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -80% 0%',
        threshold: 0
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex items-center mb-4">
        <List className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="font-semibold text-gray-900">Table of Contents</h3>
      </div>
      
      <nav className="space-y-1">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => scrollToSection(section.id)}
            className={`w-full text-left p-2 rounded-lg transition-all duration-200 flex items-center group ${
              activeSection === section.id
                ? 'bg-blue-100 text-blue-700 shadow-sm'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            } ${section.level === 2 ? 'ml-4 text-sm' : ''}`}
          >
            <ChevronRight 
              className={`h-3 w-3 mr-2 transition-transform duration-200 ${
                activeSection === section.id ? 'rotate-90' : 'group-hover:translate-x-0.5'
              }`} 
            />
            <span className="truncate">{section.title}</span>
          </motion.button>
        ))}
      </nav>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Click any section to jump directly to it
        </p>
      </div>
    </motion.div>
  )
}