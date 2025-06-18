"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { LastUpdated } from "@/components/last-updated";
import { PrintButton } from "@/components/print-button";
import { TableOfContents } from "@/components/table-of-contents";
import { motion } from "framer-motion";
import { BookOpen, Eye, Globe, Lock, Mail, Shield, Sparkles, Users } from "lucide-react";

const sections = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "information-we-collect", title: "Information We Collect", level: 1 },
  { id: "personal-information", title: "Personal Information", level: 2 },
  { id: "spiritual-data", title: "Spiritual & Prayer Data", level: 2 },
  { id: "ai-interactions", title: "AI Interaction Data", level: 2 },
  { id: "usage-information", title: "Usage Information", level: 2 },
  { id: "cookies-tracking", title: "Cookies and Tracking", level: 2 },
  { id: "how-we-use", title: "How We Use Your Information", level: 1 },
  { id: "ai-processing", title: "AI Processing & Spiritual Guidance", level: 2 },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    level: 1,
  },
  { id: "data-security", title: "Data Security", level: 1 },
  { id: "your-rights", title: "Your Privacy Rights", level: 1 },
  { id: "gdpr-rights", title: "GDPR Rights (EU Residents)", level: 2 },
  { id: "ccpa-rights", title: "CCPA Rights (California Residents)", level: 2 },
  { id: "data-retention", title: "Data Retention", level: 1 },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    level: 1,
  },
  { id: "childrens-privacy", title: "Children's Privacy", level: 1 },
  { id: "changes-policy", title: "Changes to This Policy", level: 1 },
  { id: "contact-us", title: "Contact Us", level: 1 },
];

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
                    { label: "Home", href: "/" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                  ]}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 mb-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Privacy Policy
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We are committed to protecting your privacy and ensuring the
                    security of your personal and spiritual information. This policy explains
                    how we collect, use, and safeguard your data in Sanctus.
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
                    <Eye className="h-6 w-6 mr-3 text-purple-600" />
                    Overview
                  </motion.h2>
                  <p>
                    This Privacy Policy describes how Sanctus ("we," "our," or
                    "us") collects, uses, and protects your personal information when you use our
                    Bible & Prayer app and spiritual growth services. Sanctus features AI Spiritual Mentor,
                    Bible Chat, daily streak challenges, calming music, and prayer tracking to enhance
                    your spiritual journey.
                  </p>
                  <p>
                    We are committed to transparency and compliance with applicable
                    privacy laws, including the General Data Protection
                    Regulation (GDPR), California Consumer Privacy Act (CCPA),
                    and other applicable federal and state regulations.
                  </p>
                  <p>
                    By using Sanctus, you consent to the collection and use of your
                    information as described in this policy. If you do not agree
                    with our practices, please do not use our services.
                  </p>
                </section>

                <section
                  id="information-we-collect"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Users className="h-6 w-6 mr-3 text-purple-600" />
                    Information We Collect
                  </motion.h2>

                  <h3
                    id="personal-information"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    Personal Information
                  </h3>
                  <p>
                    We may collect the following types of personal information:
                  </p>
                  <ul>
                    <li>
                      <strong>Contact Information:</strong> Name, email address,
                      phone number (optional)
                    </li>
                    <li>
                      <strong>Account Information:</strong> Username, password
                      (encrypted), profile preferences, spiritual goals
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Credit card details,
                      billing address (processed securely through third-party
                      providers for premium features)
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Messages you send to
                      us, support inquiries, feedback, community interactions
                    </li>
                  </ul>

                  <h3
                    id="spiritual-data"
                    className="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                    Spiritual & Prayer Data
                  </h3>
                  <p>
                    To provide personalized spiritual guidance, we collect:
                  </p>
                  <ul>
                    <li>
                      <strong>Prayer Requests:</strong> Personal prayers and spiritual intentions
                    </li>
                    <li>
                      <strong>Bible Reading Progress:</strong> Chapters read, bookmarks, notes
                    </li>
                    <li>
                      <strong>Daily Challenges:</strong> Streak data, completed challenges, spiritual milestones
                    </li>
                    <li>
                      <strong>Spiritual Preferences:</strong> Favorite verses, prayer topics, devotional preferences
                    </li>
                    <li>
                      <strong>Reflection Notes:</strong> Personal spiritual insights and journal entries
                    </li>
                  </ul>

                  <h3
                    id="ai-interactions"
                    className="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                    AI Interaction Data
                  </h3>
                  <p>
                    For our AI Spiritual Mentor and Bible Chat features:
                  </p>
                  <ul>
                    <li>
                      <strong>Conversation History:</strong> Questions asked to AI Spiritual Mentor
                    </li>
                    <li>
                      <strong>Bible Chat Queries:</strong> Biblical questions and AI responses
                    </li>
                    <li>
                      <strong>Spiritual Guidance Requests:</strong> Topics discussed with AI mentor
                    </li>
                    <li>
                      <strong>Learning Patterns:</strong> How you interact with AI features for personalization
                    </li>
                  </ul>

                  <h3
                    id="usage-information"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    Usage Information
                  </h3>
                  <p>
                    We automatically collect information about how you interact
                    with Sanctus:
                  </p>
                  <ul>
                    <li>
                      <strong>Device Information:</strong> IP address, browser
                      type, operating system, device identifiers
                    </li>
                    <li>
                      <strong>App Analytics:</strong> Features used, time spent,
                      navigation patterns, music listening habits
                    </li>
                    <li>
                      <strong>Location Data:</strong> General geographic
                      location (for relevant spiritual content)
                    </li>
                    <li>
                      <strong>Performance Data:</strong> App loading times,
                      error reports, crash logs
                    </li>
                  </ul>

                  <h3
                    id="cookies-tracking"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    Cookies and Tracking Technologies
                  </h3>
                  <p>
                    We use cookies, web beacons, and similar technologies to
                    enhance your spiritual experience. For detailed information about our
                    cookie practices, please see our
                    <a
                      href="/cookie-policy"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      {" "}
                      Cookie Policy
                    </a>
                    .
                  </p>
                </section>

                <section id="how-we-use" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Globe className="h-6 w-6 mr-3 text-purple-600" />
                    How We Use Your Information
                  </motion.h2>
                  <p>
                    We use your personal information for the following purposes:
                  </p>
                  <ul>
                    <li>
                      <strong>Spiritual Service Provision:</strong> To provide, maintain,
                      and improve Sanctus and our Bible & Prayer features
                    </li>
                    <li>
                      <strong>Personalized Guidance:</strong> To customize your spiritual
                      experience and provide relevant biblical content
                    </li>
                    <li>
                      <strong>AI Enhancement:</strong> To improve our AI Spiritual Mentor
                      and Bible Chat responses
                    </li>
                    <li>
                      <strong>Communication:</strong> To respond to inquiries,
                      send spiritual updates, and provide support
                    </li>
                    <li>
                      <strong>Security:</strong> To protect against fraud,
                      unauthorized access, and security threats
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with legal
                      obligations and protect our rights
                    </li>
                    <li>
                      <strong>Analytics:</strong> To understand usage patterns
                      and improve our spiritual platform
                    </li>
                  </ul>

                  <h3
                    id="ai-processing"
                    className="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                    AI Processing & Spiritual Guidance
                  </h3>
                  <p>
                    Our AI features process your spiritual data to:
                  </p>
                  <ul>
                    <li>Provide personalized biblical guidance and answers</li>
                    <li>Suggest relevant scripture based on your spiritual journey</li>
                    <li>Offer prayer recommendations and spiritual insights</li>
                    <li>Track your spiritual growth and suggest improvements</li>
                    <li>Enhance the accuracy of our AI Spiritual Mentor responses</li>
                  </ul>
                  <p>
                    <strong>Important:</strong> AI responses are for spiritual guidance only
                    and should not replace professional counseling or pastoral care.
                  </p>
                </section>

                <section
                  id="information-sharing"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Information Sharing and Disclosure
                  </motion.h2>
                  <p>
                    We do not sell your personal or spiritual information. We may share your
                    information in the following circumstances:
                  </p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> Trusted third parties
                      who assist in operating our spiritual services (AI providers, cloud storage)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law,
                      court order, or government request
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with
                      mergers, acquisitions, or asset sales
                    </li>
                    <li>
                      <strong>Consent:</strong> When you have given explicit
                      consent for sharing
                    </li>
                    <li>
                      <strong>Protection:</strong> To protect our rights,
                      safety, or the rights of others
                    </li>
                  </ul>
                  <p>
                    <strong>Spiritual Data Protection:</strong> We take extra care with
                    spiritual and prayer data, ensuring it's only shared when absolutely
                    necessary and with appropriate safeguards.
                  </p>
                </section>

                <section
                  id="data-security"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Lock className="h-6 w-6 mr-3 text-purple-600" />
                    Data Security
                  </motion.h2>
                  <p>
                    We implement comprehensive security measures to protect your
                    personal and spiritual information, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Encryption:</strong> All spiritual data, prayers, and AI
                      conversations are encrypted in transit and at rest
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Strict access controls
                      and authentication requirements for spiritual data
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> Security assessments and
                      vulnerability testing of AI systems
                    </li>
                    <li>
                      <strong>Staff Training:</strong> Regular security training
                      for all personnel handling spiritual data
                    </li>
                    <li>
                      <strong>Incident Response:</strong> Procedures for
                      detecting and responding to security incidents
                    </li>
                  </ul>
                  <p>
                    For more detailed information about our security practices,
                    please see our
                    <a
                      href="/data-security"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      {" "}
                      Data Security Policy
                    </a>
                    .
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

                  <h3
                    id="gdpr-rights"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    GDPR Rights (EU Residents)
                  </h3>
                  <p>
                    If you are located in the European Union, you have the
                    following rights:
                  </p>
                  <ul>
                    <li>
                      <strong>Access:</strong> Right to access your personal and spiritual data
                    </li>
                    <li>
                      <strong>Rectification:</strong> Right to correct
                      inaccurate data
                    </li>
                    <li>
                      <strong>Erasure:</strong> Right to deletion ("right to be
                      forgotten") including spiritual data
                    </li>
                    <li>
                      <strong>Portability:</strong> Right to data portability
                      for your spiritual journey data
                    </li>
                    <li>
                      <strong>Restriction:</strong> Right to restrict processing
                    </li>
                    <li>
                      <strong>Objection:</strong> Right to object to processing
                    </li>
                    <li>
                      <strong>Automated Decision-Making:</strong> Rights
                      regarding AI processing and automated spiritual guidance
                    </li>
                  </ul>

                  <h3
                    id="ccpa-rights"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    CCPA Rights (California Residents)
                  </h3>
                  <p>
                    California residents have the following rights under the
                    CCPA:
                  </p>
                  <ul>
                    <li>
                      <strong>Know:</strong> Right to know what personal and spiritual
                      information is collected
                    </li>
                    <li>
                      <strong>Delete:</strong> Right to delete personal and spiritual
                      information
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> Right to opt out of the sale of
                      personal information (we don't sell spiritual data)
                    </li>
                    <li>
                      <strong>Non-Discrimination:</strong> Right to
                      non-discriminatory treatment
                    </li>
                  </ul>
                </section>

                <section
                  id="data-retention"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Data Retention
                  </motion.h2>
                  <p>
                    We retain your personal information only as long as
                    necessary to fulfill the purposes outlined in this policy.
                    Specific retention periods:
                  </p>
                  <ul>
                    <li>
                      <strong>Account Data:</strong> Retained while your account is active
                    </li>
                    <li>
                      <strong>Spiritual Data:</strong> Retained to maintain your spiritual
                      journey continuity (can be deleted upon request)
                    </li>
                    <li>
                      <strong>AI Conversations:</strong> Retained to improve AI responses
                      (anonymized after 2 years)
                    </li>
                    <li>
                      <strong>Prayer Data:</strong> Retained as long as you use the app
                      (fully deletable)
                    </li>
                  </ul>
                </section>

                <section
                  id="international-transfers"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    International Data Transfers
                  </motion.h2>
                  <p>
                    Your information may be transferred to and processed in
                    countries other than your own. We implement appropriate
                    safeguards, including Standard Contractual Clauses and
                    adequacy decisions, to ensure your spiritual data receives adequate
                    protection across borders.
                  </p>
                </section>

                <section
                  id="childrens-privacy"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Children's Privacy
                  </motion.h2>
                  <p>
                    Sanctus is intended for users 13 years and older. For users
                    under 18, we recommend parental guidance when using AI spiritual
                    features. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>
                </section>

                <section
                  id="changes-policy"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Changes to This Policy
                  </motion.h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect
                    changes in our practices, new AI features, or applicable laws. We will notify
                    you of significant changes by posting a notice in the app or sending you an email. 
                    Your continued use of Sanctus after such changes constitutes
                    acceptance of the updated policy.
                  </p>
                </section>

                <section id="contact-us" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Mail className="h-6 w-6 mr-3 text-purple-600" />
                    Contact Us
                  </motion.h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to
                    exercise your privacy rights, please contact us:
                  </p>
                  <div className="bg-purple-50 rounded-xl p-6 mt-4">
                    <ul className="space-y-2">
                      <li>
                        <strong>Email:</strong> support@walkwithchrist.shop
                      </li>
                      <li>
                        <strong>Support Tickets:</strong>{" "}
                        <a
                          href="https://support.faithlybible.com"
                          className="text-purple-600 hover:text-purple-700"
                        >
                          https://support.faithlybible.com
                        </a>
                      </li>
                      <li>
                        <strong>App:</strong> Sanctus Bible & Prayer
                      </li>
                      <li>
                        <strong>Features:</strong> AI Spiritual Mentor, Bible Chat, Daily Challenges
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      For general inquiries about spiritual features, email us directly. 
                      For technical support with AI features, please use our help desk portal.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}