'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  FileText, 
  Cookie, 
  Lock, 
  Eye, 
  RefreshCcw, 
  AlertTriangle, 
  Users, 
  Copyright, 
  Phone,
  Search,
  Download,
  BookOpen,
  Heart,
  Sparkles
} from 'lucide-react'
import { SearchBar } from '@/components/search-bar'

const legalDocuments = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Comprehensive privacy protection and data handling practices for your spiritual journey with AI features.',
    icon: Shield,
    href: '/privacy-policy',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'terms-of-service',
    title: 'Terms of Service',
    description: 'Detailed terms governing the use of Sanctus Bible & Prayer app and AI spiritual features.',
    icon: FileText,
    href: '/terms-of-service',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    description: 'Transparent cookie usage policy with detailed consent management for enhanced spiritual experience.',
    icon: Cookie,
    href: '/cookie-policy',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'data-security',
    title: 'Data Security Policy',
    description: 'Comprehensive security measures protecting your prayers, Bible study data, and AI interactions.',
    icon: Lock,
    href: '/data-security',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'accessibility',
    title: 'Accessibility Statement',
    description: 'Making spiritual growth accessible to all believers through inclusive design and features.',
    icon: Eye,
    href: '/accessibility',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'refund-policy',
    title: 'Refund Policy',
    description: 'Clear refund terms for premium spiritual features and subscription services.',
    icon: RefreshCcw,
    href: '/refund-policy',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    description: 'Important disclaimers regarding AI spiritual guidance and biblical content accuracy.',
    icon: AlertTriangle,
    href: '/disclaimer',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'user-conduct',
    title: 'User Conduct Policy',
    description: 'Community guidelines for respectful interaction in our spiritual community platform.',
    icon: Users,
    href: '/user-conduct',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    description: 'Copyright information for biblical content, AI responses, and user-generated spiritual content.',
    icon: Copyright,
    href: '/intellectual-property',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    lastUpdated: 'December 1, 2024'
  },
  {
    id: 'contact',
    title: 'Contact Information',
    description: 'Support contacts for spiritual guidance, technical help, and legal inquiries.',
    icon: Phone,
    href: '/contact',
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50',
    lastUpdated: 'December 1, 2024'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <BookOpen className="h-12 w-12 text-purple-600" />
              <Heart className="h-10 w-10 text-blue-600" />
              <Sparkles className="h-11 w-11 text-indigo-600" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Sanctus Legal Pages</span>
              <br />
              <span className="text-gray-700">For Your Spiritual Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive legal documentation for Sanctus Bible & Prayer app, featuring AI Spiritual Mentor, 
              Bible Chat, daily challenges, and calming music. All documents meet the highest legal standards 
              while supporting your faith journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#documents" className="btn-primary inline-flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Browse Legal Documents
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-secondary inline-flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-50 animate-blob"></div>
      </motion.section>

      {/* Search Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-white/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Search className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Search Legal Documents</h2>
            <p className="text-gray-600">Find specific information across all our legal documentation</p>
          </div>
          <SearchBar />
        </div>
      </motion.section>

      {/* Documents Grid */}
      <motion.section
        id="documents"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="gradient-text">Legal Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through our beautifully designed legal documents for Sanctus. Each document is carefully 
              crafted to meet the highest legal standards while supporting your spiritual growth journey with AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalDocuments.map((doc, index) => {
              const Icon = doc.icon
              return (
                <motion.div
                  key={doc.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group"
                >
                  <Link href={doc.href}>
                    <div className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${doc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {doc.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {doc.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Updated: {doc.lastUpdated}
                        </span>
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                            title="Download PDF"
                          >
                            <Download className="h-4 w-4 text-gray-600" />
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${doc.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="gradient-text">Legal Documentation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience legal documentation designed specifically for spiritual apps with AI features and community interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spiritually Focused',
                description: 'Tailored specifically for Bible & Prayer apps with AI spiritual guidance features.',
                icon: BookOpen,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'AI-Ready Compliance',
                description: 'Comprehensive coverage for AI Spiritual Mentor and Bible Chat features.',
                icon: Sparkles,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Community Focused',
                description: 'Guidelines for spiritual community interaction and user-generated content.',
                icon: Heart,
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>
    </div>
  )
}