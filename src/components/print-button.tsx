"use client"

import { motion } from 'framer-motion'
import { Printer, Download } from 'lucide-react'

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    // For now, we'll show an alert
    alert('PDF download functionality would be implemented here using a library like Puppeteer or jsPDF')
  }

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrint}
        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors duration-200 no-print"
      >
        <Printer className="h-4 w-4 mr-2" />
        Print
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm font-medium transition-colors duration-200 no-print"
      >
        <Download className="h-4 w-4 mr-2" />
        Download PDF
      </motion.button>
    </div>
  )
}