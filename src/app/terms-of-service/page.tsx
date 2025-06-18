"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { LastUpdated } from "@/components/last-updated";
import { PrintButton } from "@/components/print-button";
import { TableOfContents } from "@/components/table-of-contents";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  FileText,
  Gavel,
  Scale,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", level: 1 },
  { id: "description-of-service", title: "Description of Service", level: 1 },
  { id: "ai-features", title: "AI Features & Spiritual Guidance", level: 2 },
  { id: "user-accounts", title: "User Accounts and Registration", level: 1 },
  { id: "user-obligations", title: "User Obligations and Conduct", level: 1 },
  { id: "acceptable-use", title: "Acceptable Use Policy", level: 2 },
  { id: "prohibited-activities", title: "Prohibited Activities", level: 2 },
  { id: "spiritual-content", title: "Spiritual Content & AI Guidance", level: 1 },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    level: 1,
  },
  { id: "user-content", title: "User-Generated Content", level: 1 },
  { id: "privacy-data", title: "Privacy and Data Protection", level: 1 },
  { id: "payment-terms", title: "Payment Terms and Billing", level: 1 },
  {
    id: "service-availability",
    title: "Service Availability and Modifications",
    level: 1,
  },
  { id: "termination", title: "Termination of Service", level: 1 },
  { id: "disclaimers", title: "Disclaimers and Warranties", level: 1 },
  { id: "limitation-liability", title: "Limitation of Liability", level: 1 },
  { id: "indemnification", title: "Indemnification", level: 1 },
  { id: "governing-law", title: "Governing Law and Jurisdiction", level: 1 },
  { id: "dispute-resolution", title: "Dispute Resolution", level: 1 },
  { id: "changes-terms", title: "Changes to Terms", level: 1 },
  { id: "contact-information", title: "Contact Information", level: 1 },
];

export default function TermsOfServicePage() {
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
                    { label: "Terms of Service", href: "/terms-of-service" },
                  ]}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Terms of Service
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    These terms govern your use of Sanctus Bible & Prayer app and establish the
                    legal relationship between you and Sanctus. Please read
                    carefully.
                  </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <LastUpdated date="December 1, 2024" />
                  <PrintButton />
                </div>
              </div>

              {/* Content */}
              <div className="glass-card rounded-3xl p-8 md:p-12 prose prose-lg max-w-none">
                <section id="acceptance" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Scale className="h-6 w-6 mr-3 text-blue-600" />
                    Acceptance of Terms
                  </motion.h2>
                  <p>
                    By accessing, browsing, or using the Sanctus Bible & Prayer app,
                    website, and spiritual growth services ("Service"), you acknowledge that you have read, understood, and agree to
                    be bound by these Terms of Service ("Terms"). These Terms
                    constitute a legally binding agreement between you ("User"
                    or "you") and Sanctus ("we," "us," or "our").
                  </p>
                  <p>
                    If you do not agree to these Terms, you must not access or
                    use our Service. Your continued use of the Service following
                    any changes to these Terms constitutes acceptance of those
                    changes.
                  </p>
                </section>

                <section
                  id="description-of-service"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Description of Service
                  </motion.h2>
                  <p>
                    Sanctus provides a comprehensive Bible & Prayer platform designed to
                    help users deepen their faith through technology-enhanced spiritual growth. Our Service includes:
                  </p>
                  <ul>
                    <li>
                      Complete Bible reading with progress tracking and bookmarks
                    </li>
                    <li>AI Spiritual Mentor for personalized spiritual guidance</li>
                    <li>Bible Chat feature for AI-powered biblical questions and answers</li>
                    <li>Daily streak challenges to build consistent spiritual habits</li>
                    <li>Prayer tracking and spiritual reflection tools</li>
                    <li>Calming music integrated with daily verse modals</li>
                    <li>
                      Community features for connecting with fellow believers
                    </li>
                    <li>Customer support and spiritual guidance resources</li>
                  </ul>

                  <h3
                    id="ai-features"
                    className="text-xl font-semibold text-gray-800 mb-3 flex items-center"
                  >
                    <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
                    AI Features & Spiritual Guidance
                  </h3>
                  <p>
                    Our AI-powered features are designed to enhance your spiritual journey:
                  </p>
                  <ul>
                    <li>
                      <strong>AI Spiritual Mentor:</strong> Provides personalized spiritual guidance based on biblical principles
                    </li>
                    <li>
                      <strong>Bible Chat:</strong> Answers questions about biblical content, theology, and spiritual matters
                    </li>
                    <li>
                      <strong>Personalized Recommendations:</strong> Suggests relevant scriptures, prayers, and spiritual content
                    </li>
                  </ul>
                  <p>
                    <strong>Important Disclaimer:</strong> Our AI features provide spiritual guidance based on biblical content but do not constitute
                    professional religious counseling, pastoral care, or theological advice. We recommend consulting
                    with qualified spiritual leaders, pastors, or religious professionals for personal spiritual matters,
                    theological questions, or life decisions.
                  </p>
                </section>

                <section
                  id="user-accounts"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    User Accounts and Registration
                  </motion.h2>
                  <p>
                    To access certain features of Sanctus, you may need to
                    create an account:
                  </p>
                  <ul>
                    <li>
                      <strong>Account Information:</strong> You must provide
                      accurate, current, and complete information
                    </li>
                    <li>
                      <strong>Account Security:</strong> You are responsible for
                      maintaining the confidentiality of your account
                      credentials
                    </li>
                    <li>
                      <strong>Account Responsibility:</strong> You are
                      responsible for all activities under your account, including AI interactions
                    </li>
                    <li>
                      <strong>Age Requirement:</strong> You must be at least 13
                      years old to create an account (parental guidance recommended for minors)
                    </li>
                    <li>
                      <strong>Spiritual Content:</strong> You acknowledge that spiritual and prayer data
                      will be stored to enhance your experience
                    </li>
                  </ul>
                </section>

                <section
                  id="user-obligations"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    User Obligations and Conduct
                  </motion.h2>

                  <h3
                    id="acceptable-use"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    Acceptable Use Policy
                  </h3>
                  <p>When using Sanctus, you agree to:</p>
                  <ul>
                    <li>
                      Use the Service only for lawful purposes and in accordance
                      with these Terms
                    </li>
                    <li>
                      Respect the intellectual property rights of Sanctus and
                      third parties
                    </li>
                    <li>
                      Provide accurate information and keep your account
                      information updated
                    </li>
                    <li>
                      Maintain the security and confidentiality of your account
                    </li>
                    <li>
                      Use the platform in a manner consistent with Christian
                      values and respect for others
                    </li>
                    <li>
                      Use AI features responsibly and understand their limitations
                    </li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>

                  <h3
                    id="prohibited-activities"
                    className="text-xl font-semibold text-gray-800 mb-3"
                  >
                    Prohibited Activities
                  </h3>
                  <p>You agree not to:</p>
                  <ul>
                    <li>
                      Use the Service for any illegal or unauthorized purpose
                    </li>
                    <li>Violate any laws in your jurisdiction or ours</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Attempt to gain unauthorized access to our systems or AI models</li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Collect or harvest user information without consent</li>
                    <li>Impersonate any person or entity</li>
                    <li>Use automated systems to access the Service or AI features</li>
                    <li>Attempt to reverse engineer or extract AI model information</li>
                    <li>Use AI responses for commercial purposes without permission</li>
                  </ul>
                </section>

                <section
                  id="spiritual-content"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Spiritual Content & AI Guidance
                  </motion.h2>
                  <p>
                    Sanctus provides spiritual content and AI-powered guidance with the following understanding:
                  </p>
                  <ul>
                    <li>
                      <strong>Biblical Accuracy:</strong> We strive for biblical accuracy but encourage personal study and verification
                    </li>
                    <li>
                      <strong>AI Limitations:</strong> AI responses are generated based on training data and may not always reflect perfect theological understanding
                    </li>
                    <li>
                      <strong>Personal Responsibility:</strong> Users are responsible for their spiritual decisions and should seek pastoral guidance for important matters
                    </li>
                    <li>
                      <strong>Denominational Neutrality:</strong> We aim to provide broadly Christian content while respecting denominational differences
                    </li>
                    <li>
                      <strong>Continuous Improvement:</strong> AI responses improve over time but should not replace scripture study and prayer
                    </li>
                  </ul>
                </section>

                <section
                  id="intellectual-property"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Intellectual Property Rights
                  </motion.h2>
                  <p>
                    The Service and its original content, features, AI models, and
                    functionality are owned by Sanctus and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable
                    license to access and use the Service for its intended
                    purpose. This license does not include the right to:
                  </p>
                  <ul>
                    <li>Sell, resell, or commercialize the Service or AI responses</li>
                    <li>Modify, distribute, or create derivative works</li>
                    <li>Reverse engineer or attempt to extract source code or AI models</li>
                    <li>Remove or alter proprietary notices</li>
                    <li>Use AI-generated content for commercial purposes</li>
                  </ul>
                  <p>
                    <strong>Biblical Content:</strong> Biblical text is in the public domain, but our
                    specific presentations, AI interpretations, and enhanced features are proprietary.
                  </p>
                </section>

                <section id="user-content" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    User-Generated Content
                  </motion.h2>
                  <p>
                    You retain ownership of spiritual content you submit to Sanctus (prayers, notes, reflections).
                    However, by submitting content, you grant us a worldwide,
                    non-exclusive, royalty-free license to use, reproduce,
                    modify, and distribute such content in connection with
                    operating the Service and improving AI features.
                  </p>
                  <p>You represent and warrant that your content:</p>
                  <ul>
                    <li>Does not infringe any third-party rights</li>
                    <li>Complies with applicable laws and regulations</li>
                    <li>Does not contain harmful or malicious code</li>
                    <li>Is not defamatory, obscene, or offensive</li>
                    <li>Respects the spiritual nature of the platform</li>
                  </ul>
                  <p>
                    <strong>Privacy of Spiritual Content:</strong> Personal prayers and spiritual reflections
                    are treated with special care and are not shared publicly without your explicit consent.
                  </p>
                </section>

                <section id="privacy-data" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Shield className="h-6 w-6 mr-3 text-blue-600" />
                    Privacy and Data Protection
                  </motion.h2>
                  <p>
                    Your privacy is important to us, especially regarding spiritual and personal data. Our collection and use of
                    personal information is governed by our Privacy Policy,
                    which is incorporated into these Terms by reference. Please
                    review our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Privacy Policy
                    </a>
                    to understand our practices regarding spiritual data, AI interactions, and personal information.
                  </p>
                </section>

                <section
                  id="payment-terms"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Payment Terms and Billing
                  </motion.h2>
                  <p>For premium features and services:</p>
                  <ul>
                    <li>
                      <strong>Payment:</strong> Payment is due upon purchase or
                      as specified in your subscription
                    </li>
                    <li>
                      <strong>Billing:</strong> Recurring charges will be billed
                      in advance for premium AI features
                    </li>
                    <li>
                      <strong>Taxes:</strong> You are responsible for applicable
                      taxes
                    </li>
                    <li>
                      <strong>Refunds:</strong> Subject to our{" "}
                      <a
                        href="/refund-policy"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <strong>Price Changes:</strong> We may change prices with
                      30 days' notice
                    </li>
                    <li>
                      <strong>Free Features:</strong> Basic Bible reading and prayer features remain free
                    </li>
                  </ul>
                </section>

                <section
                  id="service-availability"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Service Availability and Modifications
                  </motion.h2>
                  <p>
                    We strive to maintain Service availability but cannot
                    guarantee uninterrupted access to Sanctus or AI features. We reserve the right to
                    modify, suspend, or discontinue the Service at any time with
                    reasonable notice. AI features may be updated or improved without notice.
                  </p>
                </section>

                <section id="termination" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Termination of Service
                  </motion.h2>
                  <p>
                    We may terminate or suspend your account immediately for
                    violations of these Terms. You may terminate your account at
                    any time by contacting us. Upon termination, your right to
                    use the Service ceases immediately, but your spiritual data can be exported upon request.
                  </p>
                </section>

                <section id="disclaimers" className="print-break-inside-avoid">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <AlertTriangle className="h-6 w-6 mr-3 text-blue-600" />
                    Disclaimers and Warranties
                  </motion.h2>
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
                    KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
                    INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                    AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    <strong>SPIRITUAL GUIDANCE DISCLAIMER:</strong> AI SPIRITUAL GUIDANCE IS PROVIDED
                    FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE PROFESSIONAL
                    RELIGIOUS COUNSELING, PASTORAL CARE, OR THEOLOGICAL ADVICE.
                  </p>
                </section>

                <section
                  id="limitation-liability"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Limitation of Liability
                  </motion.h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE
                    LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                    OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE,
                    INCLUDING AI FEATURES AND SPIRITUAL GUIDANCE.
                  </p>
                </section>

                <section
                  id="indemnification"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Indemnification
                  </motion.h2>
                  <p>
                    You agree to indemnify and hold harmless Sanctus from any
                    claims arising from your use of the Service, violation of
                    these Terms, or infringement of any third-party rights, including
                    claims related to AI-generated content or spiritual guidance.
                  </p>
                </section>

                <section
                  id="governing-law"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <Gavel className="h-6 w-6 mr-3 text-blue-600" />
                    Governing Law and Jurisdiction
                  </motion.h2>
                  <p>
                    These Terms are governed by applicable federal and state
                    laws of the United States, without regard to conflict of law
                    principles. Any legal action must be brought in the
                    appropriate courts with jurisdiction.
                  </p>
                </section>

                <section
                  id="dispute-resolution"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Dispute Resolution
                  </motion.h2>
                  <p>
                    We encourage resolving disputes through direct
                    communication in a spirit of Christian reconciliation. If necessary, disputes may be subject to
                    binding arbitration under the rules of the American
                    Arbitration Association.
                  </p>
                </section>

                <section
                  id="changes-terms"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Changes to Terms
                  </motion.h2>
                  <p>
                    We reserve the right to modify these Terms at any time,
                    especially as we improve AI features and add new spiritual tools. We
                    will notify users of significant changes via email or
                    in-app notice. Continued use after changes constitutes
                    acceptance of the modified Terms.
                  </p>
                </section>

                <section
                  id="contact-information"
                  className="print-break-inside-avoid"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Contact Information
                  </motion.h2>
                  <p>For questions about these Terms, please contact us:</p>
                  <div className="bg-blue-50 rounded-xl p-6 mt-4">
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
                        <strong>Features:</strong> AI Spiritual Mentor, Bible Chat, Daily Challenges, Prayer Tracking
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