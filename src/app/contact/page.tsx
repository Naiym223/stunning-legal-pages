'use client'

import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/breadcrumb'
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, FileText, Users, Globe } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help with Faithlingo and spiritual growth questions',
    value: 'support@walkwithchrist.shop',
    action: 'mailto:support@walkwithchrist.shop',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MessageSquare,
    title: 'Support Tickets',
    description: 'Create detailed support tickets for technical issues',
    value: 'Visit our help desk portal',
    action: 'https://support.faithlybible.com',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Globe,
    title: 'Main Website',
    description: 'Visit our main company website for more information',
    value: 'valoriya.org',
    action: 'https://valoriya.org',
    color: 'from-purple-500 to-purple-600'
  }
]

const departments = [
  {
    icon: Shield,
    title: 'Privacy & Data Protection',
    email: 'support@walkwithchrist.shop',
    description: 'Privacy policy and data protection questions'
  },
  {
    icon: FileText,
    title: 'App Support',
    email: 'support@walkwithchrist.shop',
    description: 'Faithlingo app features and spiritual content'
  },
  {
    icon: Users,
    title: 'General Support',
    email: 'support@walkwithchrist.shop',
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
                Get in touch with our Faithlingo support team for help with your spiritual growth journey. 
                We're here to help you navigate your faith and app features.
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
                    <h3 className="font-semibold text-gray-800 mb-2">Company Information</h3>
                    <p className="text-gray-600">
                      Valoriya<br />
                      Makers of Faithlingo<br />
                      Website: <a href="https://valoriya.org" className="text-blue-600 hover:text-blue-700">https://valoriya.org</a><br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Business Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Email Support: Available 24/7</p>
                      <p>Support Tickets: Monitored daily</p>
                      <p>Response Time: Within 24 hours</p>
                      <p className="text-sm text-gray-500 mt-2">
                        For urgent matters, please use our support ticket system
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Support Channels</h3>
                    <p className="text-gray-600">
                      Email: General inquiries and quick questions<br />
                      Help Desk: Detailed support tickets and technical issues<br />
                      Website: Additional resources and information
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

          {/* Quick Support Guide */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-blue-50 border border-blue-200 rounded-3xl p-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                How to Get Support
              </h2>
              <p className="text-blue-800 mb-4">
                Choose the best way to contact us based on your needs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="text-left">
                  <h3 className="font-semibold text-blue-900 mb-2">For General Questions:</h3>
                  <p className="text-sm text-blue-700">
                    Email us at <a href="mailto:support@walkwithchrist.shop" className="underline">support@walkwithchrist.shop</a> for quick answers about Faithlingo features, account questions, or spiritual guidance.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-blue-900 mb-2">For Technical Issues:</h3>
                  <p className="text-sm text-blue-700">
                    Create a support ticket at <a href="https://support.faithlybible.com" className="underline">our help desk</a> for detailed technical problems, bug reports, or feature requests.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Additional Resources */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Faithlingo App</h3>
                <p className="text-gray-600 text-sm">
                  Download our spiritual growth app:<br />
                  Available on iOS and Android<br />
                  Features daily lessons, prayer tracking, and community<br />
                  Visit our main website for download links
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Company Information</h3>
                <p className="text-gray-600 text-sm">
                  Valoriya - makers of Faithlingo<br />
                  Website: <a href="https://valoriya.org" className="text-blue-600 hover:text-blue-700">https://valoriya.org</a><br />
                  Supporting your spiritual growth journey<br />
                  Connect with fellow believers
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}