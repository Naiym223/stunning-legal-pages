'use client'

import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/breadcrumb'
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, FileText, Users } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help with legal documents and compliance questions',
    value: 'legal@legalpages.com',
    action: 'mailto:legal@legalpages.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our legal compliance team',
    value: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Real-time assistance during business hours',
    value: 'Available 9 AM - 5 PM EST',
    action: '#',
    color: 'from-purple-500 to-purple-600'
  }
]

const departments = [
  {
    icon: Shield,
    title: 'Privacy & Data Protection',
    email: 'privacy@legalpages.com',
    description: 'GDPR, CCPA, and privacy compliance questions'
  },
  {
    icon: FileText,
    title: 'Legal Documents',
    email: 'documents@legalpages.com',
    description: 'Document templates and legal content'
  },
  {
    icon: Users,
    title: 'General Support',
    email: 'support@legalpages.com',
    description: 'Account issues and general inquiries'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact Information', href: '/contact' }
              ]} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Information
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our legal team for support, questions, or compliance assistance. 
                We're here to help you navigate legal requirements.
              </p>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  <p className="text-lg font-semibold text-blue-600">
                    {method.value}
                  </p>
                </motion.a>
              )
            })}
          </motion.section>

          {/* Business Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Business Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                  Business Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Headquarters</h3>
                    <p className="text-gray-600">
                      Legal Pages, Inc.<br />
                      123 Legal Street, Suite 456<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Business Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Emergency legal support available 24/7
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Tax Information</h3>
                    <p className="text-gray-600">
                      Federal EIN: 12-3456789<br />
                      NY State Tax ID: NY-987654321
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Department Contacts
                </h2>
                
                <div className="space-y-6">
                  {departments.map((dept, index) => {
                    const Icon = dept.icon
                    return (
                      <motion.div
                        key={dept.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-200"
                      >
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{dept.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{dept.description}</p>
                          <a 
                            href={`mailto:${dept.email}`}
                            className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          >
                            {dept.email}
                          </a>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Emergency Contact */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-red-50 border border-red-200 rounded-3xl p-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                Emergency Legal Support
              </h2>
              <p className="text-red-800 mb-4">
                For urgent legal matters requiring immediate attention, contact our 24/7 emergency line:
              </p>
              <a 
                href="tel:+15551234999"
                className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                +1 (555) 123-4999
              </a>
              <p className="text-sm text-red-700 mt-2">
                Available 24/7 for data breaches, compliance emergencies, and urgent legal matters
              </p>
            </div>
          </motion.section>

          {/* Legal Notices */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Legal Notices & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Service of Legal Process</h3>
                <p className="text-gray-600 text-sm">
                  Legal documents should be served to:<br />
                  Legal Pages, Inc.<br />
                  Attn: Legal Department<br />
                  123 Legal Street, Suite 456<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Compliance Officer</h3>
                <p className="text-gray-600 text-sm">
                  For regulatory compliance matters:<br />
                  compliance@legalpages.com<br />
                  Direct Line: +1 (555) 123-4568<br />
                  Available Monday-Friday, 9 AM - 5 PM EST
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}