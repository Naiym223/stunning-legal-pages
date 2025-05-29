"use client"

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { format } from 'date-fns'

interface LastUpdatedProps {
  date: string
}

export function LastUpdated({ date }: LastUpdatedProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Calendar className="h-4 w-4 mr-2" />
      </motion.div>
      Last updated: {formattedDate}
    </motion.div>
  )
}