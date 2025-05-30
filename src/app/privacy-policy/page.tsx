'use client'

import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/breadcrumb'
import { TableOfContents } from '@/components/table-of-contents'
import { LastUpdated } from '@/components/last-updated'
import { PrintButton } from '@/components/print-button'
import { Shield, Eye, Lock, Users, Globe, Mail } from 'lucide-react'

const sections = [
  { id: 'overview', title: 'Overview', level: 1 },
  { id: 'information-we-collect', title: 'Information We Collect', level: 1 },
  { id: 'personal-information', title: 'Personal Information', level: 2 },
  { id: 'usage-information', title: 'Usage Information', level: 2 },
  { id: 'cookies-tracking', title: 'Cookies and Tracking', level: 2 },
  { id: 'how-we-use', title: 'How We Use Your Information', level: 1 },
  { id: 'information-sharing', title: 'Information Sharing and Disclosure', level: 1 },
  { id: 'data-security', title: 'Data Security', level: 1 },
  { id: 'your-rights', title: 'Your Privacy Rights', level: 1 },
  { id: 'gdpr-rights', title: 'GDPR Rights (EU Residents)', level: 2 },
  { id: 'ccpa-rights', title: 'CCPA Rights (California Residents)', level: 2 },
  { id: 'ny-residents', title: 'New York Residents', level: 2 },
  { id: 'data-retention', title: 'Data Retention', level: 1 },
  { id: 'international-transfers', title: 'International Data Transfers', level: 1 },
  { id: 'childrens-privacy', title: "Children's Privacy", level: 1 },
  { id: 'changes-policy', title: 'Changes to This Policy', level: 1 },
  { id: 'contact-us', title: 'Contact Us', level: 1 },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents sections={sections} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <Breadcrumb 
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy', href: '/privacy-policy' }
                  ]} 
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mb-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Privacy Policy
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We are committed to protecting your privacy and ensuring the security of your personal information. 
                    This policy explains how we collect, use, and safeguard your data.
                  </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <LastUpdated date="December 1, 2024" />
                  <PrintButton />
                </div>
              </div>

              {/* Content */}
              <div className="glass-card rounded-3xl p-8 md:p-12 prose prose-lg max-w-none">
                
                <section id="overview" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Eye className="h-6 w-6 mr-3 text-blue-600" />
                    Overview
                  </motion.h2>
                  <p>
                    This Privacy Policy describes how Valoriya ("we," "our," or "us"), the company behind Faithlingo, collects, uses, and protects 
                    your personal information when you visit our website or use our spiritual growth services. We are committed to 
                    transparency and compliance with applicable privacy laws, including the General Data Protection 
                    Regulation (GDPR), California Consumer Privacy Act (CCPA), and New York state privacy requirements.
                  </p>
                  <p>
                    By using our website, Faithlingo app, or spiritual growth services, you consent to the collection and use of your information as 
                    described in this policy. If you do not agree with our practices, please do not use our services.
                  </p>
                </section>

                <section id="information-we-collect" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    Information We Collect
                  </motion.h2>
                  
                  <h3 id="personal-information" className="text-xl font-semibold text-gray-800 mb-3">
                    Personal Information
                  </h3>
                  <p>We may collect the following types of personal information:</p>
                  <ul>
                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                    <li><strong>Account Information:</strong> Username, password (encrypted), profile preferences</li>
                    <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through third-party providers)</li>
                    <li><strong>Communication Data:</strong> Messages you send to us, support inquiries, feedback</li>
                    <li><strong>Professional Information:</strong> Job title, company name, industry (when relevant)</li>
                  </ul>

                  <h3 id="usage-information" className="text-xl font-semibold text-gray-800 mb-3">
                    Usage Information
                  </h3>
                  <p>We automatically collect information about how you interact with our services:</p>
                  <ul>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Usage Analytics:</strong> Pages visited, time spent, click patterns, referral sources</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li><strong>Performance Data:</strong> Website loading times, error reports, crash logs</li>
                  </ul>

                  <h3 id="cookies-tracking" className="text-xl font-semibold text-gray-800 mb-3">
                    Cookies and Tracking Technologies
                  </h3>
                  <p>
                    We use cookies, web beacons, and similar technologies to enhance your experience. 
                    For detailed information about our cookie practices, please see our 
                    <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700"> Cookie Policy</a>.
                  </p>
                </section>

                <section id="how-we-use" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Globe className="h-6 w-6 mr-3 text-blue-600" />
                    How We Use Your Information
                  </motion.h2>
                  <p>We use your personal information for the following purposes:</p>
                  <ul>
                    <li><strong>Service Provision:</strong> To provide, maintain, and improve Faithlingo and our spiritual growth services</li>
                    <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                    <li><strong>Personalization:</strong> To customize your faith learning experience and provide relevant spiritual content</li>
                    <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                    <li><strong>Analytics:</strong> To understand usage patterns and improve our spiritual growth platform</li>
                    <li><strong>Marketing:</strong> To send promotional materials about faith-based content (with your consent where required)</li>
                  </ul>
                </section>

                <section id="information-sharing" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Information Sharing and Disclosure
                  </motion.h2>
                  <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                  <ul>
                    <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our services</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Consent:</strong> When you have given explicit consent for sharing</li>
                    <li><strong>Protection:</strong> To protect our rights, safety, or the rights of others</li>
                  </ul>
                </section>

                <section id="data-security" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Lock className="h-6 w-6 mr-3 text-blue-600" />
                    Data Security
                  </motion.h2>
                  <p>
                    We implement comprehensive security measures to protect your personal information, including:
                  </p>
                  <ul>
                    <li><strong>Encryption:</strong> Data in transit and at rest is encrypted using industry standards</li>
                    <li><strong>Access Controls:</strong> Strict access controls and authentication requirements</li>
                    <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                    <li><strong>Staff Training:</strong> Regular security training for all personnel</li>
                    <li><strong>Incident Response:</strong> Procedures for detecting and responding to security incidents</li>
                  </ul>
                  <p>
                    For more detailed information about our security practices, please see our 
                    <a href="/data-security" className="text-blue-600 hover:text-blue-700"> Data Security Policy</a>.
                  </p>
                </section>

                <section id="your-rights" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Your Privacy Rights
                  </motion.h2>

                  <h3 id="gdpr-rights" className="text-xl font-semibold text-gray-800 mb-3">
                    GDPR Rights (EU Residents)
                  </h3>
                  <p>If you are located in the European Union, you have the following rights:</p>
                  <ul>
                    <li><strong>Access:</strong> Right to access your personal data</li>
                    <li><strong>Rectification:</strong> Right to correct inaccurate data</li>
                    <li><strong>Erasure:</strong> Right to deletion ("right to be forgotten")</li>
                    <li><strong>Portability:</strong> Right to data portability</li>
                    <li><strong>Restriction:</strong> Right to restrict processing</li>
                    <li><strong>Objection:</strong> Right to object to processing</li>
                    <li><strong>Automated Decision-Making:</strong> Rights regarding automated processing</li>
                  </ul>

                  <h3 id="ccpa-rights" className="text-xl font-semibold text-gray-800 mb-3">
                    CCPA Rights (California Residents)
                  </h3>
                  <p>California residents have the following rights under the CCPA:</p>
                  <ul>
                    <li><strong>Know:</strong> Right to know what personal information is collected</li>
                    <li><strong>Delete:</strong> Right to delete personal information</li>
                    <li><strong>Opt-Out:</strong> Right to opt out of the sale of personal information</li>
                    <li><strong>Non-Discrimination:</strong> Right to non-discriminatory treatment</li>
                  </ul>

                  <h3 id="ny-residents" className="text-xl font-semibold text-gray-800 mb-3">
                    New York Residents
                  </h3>
                  <p>
                    New York residents have specific rights under the NY SHIELD Act and other state privacy laws, 
                    including enhanced data breach notification requirements and additional security safeguards.
                  </p>
                </section>

                <section id="data-retention" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Data Retention
                  </motion.h2>
                  <p>
                    We retain your personal information only as long as necessary to fulfill the purposes outlined 
                    in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
                    Specific retention periods vary based on the type of information and applicable legal requirements.
                  </p>
                </section>

                <section id="international-transfers" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    International Data Transfers
                  </motion.h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We implement appropriate safeguards, including Standard Contractual Clauses and adequacy 
                    decisions, to ensure your data receives adequate protection.
                  </p>
                </section>

                <section id="childrens-privacy" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Children's Privacy
                  </motion.h2>
                  <p>
                    Faithlingo and our spiritual growth services are not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13. If we become aware that we have 
                    collected such information, we will take steps to delete it promptly.
                  </p>
                </section>

                <section id="changes-policy" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Changes to This Policy
                  </motion.h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or 
                    applicable laws. We will notify you of significant changes by posting a notice on our 
                    website or sending you an email. Your continued use of Faithlingo and our services after such changes 
                    constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section id="contact-us" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Mail className="h-6 w-6 mr-3 text-blue-600" />
                    Contact Us
                  </motion.h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                    please contact us:
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 mt-4">
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> support@walkwithchrist.shop</li>
                      <li><strong>Support Tickets:</strong> <a href="https://support.faithlybible.com" className="text-blue-600 hover:text-blue-700">https://support.faithlybible.com</a></li>
                      <li><strong>Company:</strong> Valoriya</li>
                      <li><strong>Website:</strong> <a href="https://valoriya.org" className="text-blue-600 hover:text-blue-700">https://valoriya.org</a></li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      For general inquiries, email us directly. For technical support tickets, please use our help desk portal.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}