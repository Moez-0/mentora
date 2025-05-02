import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p>Welcome to Mentora! These Terms of Service govern your access to and use of our website, services, and applications. By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.</p>
          <p>These Terms apply to all visitors, users, and others who access the Service. Please read them carefully before using the Service.</p>
        </div>
      )
    },
    {
      title: 'Accounts',
      content: (
        <div className="space-y-4">
          <p>To access certain features of the Service, you may be required to create an account. You must provide accurate and complete information.</p>
          <p>You are solely responsible for activity on your account and for keeping your password secure. Notify us immediately of any breach or unauthorized use.</p>
          <p>Mentora will not be liable for any losses caused by unauthorized use of your account. You may be held liable for the losses of Mentora or others due to such misuse.</p>
        </div>
      )
    },
    {
      title: 'Course Enrollment and Payment',
      content: (
        <div className="space-y-4">
          <p>By enrolling in a course, you agree to pay the specified fees. All fees are non-refundable except as required by law or specifically stated in our Refund Policy.</p>
          <p>We may offer free trials or promotional periods. If not canceled before the trial ends, you will be charged the applicable fees.</p>
          <p>All prices are in USD unless otherwise stated. You are responsible for any taxes associated with your purchase.</p>
        </div>
      )
    },
    {
      title: 'Content and Conduct',
      content: (
        <div className="space-y-4">
          <p>All course materials are owned by Mentora or its licensors and are protected by copyright and other laws.</p>
          <p>You may access the content for personal, non-commercial use only. Do not copy, distribute, or exploit it without prior written consent.</p>
          <p>Prohibited activities include redistributing any part of the Service, using automated systems, disrupting the Service, or violating laws.</p>
        </div>
      )
    },
    {
      title: 'Termination',
      content: (
        <div className="space-y-4">
          <p>We may terminate or suspend your account immediately, without notice, for any reason, including a breach of the Terms.</p>
          <p>You may terminate your account by discontinuing use of the Service. Provisions regarding ownership, disclaimers, indemnity, and limitations of liability survive termination.</p>
        </div>
      )
    },
    {
      title: 'Changes to Terms',
      content: (
        <div className="space-y-4">
          <p>We reserve the right to modify these Terms at any time. Material changes will be communicated at least 30 days before they take effect.</p>
          <p>Continued use of the Service after revisions means you accept the new terms. If you disagree, please stop using the Service.</p>
        </div>
      )
    },
    {
      title: 'Disclaimer and Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p>The Service is provided "AS IS" without warranties of any kind. Mentora disclaims all implied warranties, including fitness for a particular purpose.</p>
          <p>Mentora is not liable for any consequential losses resulting from use or inability to use the Service, even if advised of the possibility of such damages.</p>
        </div>
      )
    },
    {
      title: 'Governing Law',
      content: (
        <div className="space-y-4">
          <p>These Terms are governed by the laws of the State of Delaware, United States.</p>
          <p>Failure to enforce any provision of these Terms does not waive our rights. If any provision is invalid, the rest remain effective.</p>
        </div>
      )
    }
  ]

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index)
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Last updated: June 15, 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                Please read these Terms of Service carefully before using the Mentora website and services operated by Mentora Inc.
              </p>

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="flex justify-between items-start w-full text-left"
                    >
                      <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                      <span className="ml-6 h-7 flex items-center text-teal-600">
                        {activeSection === index ? (
                          <FiChevronUp className="h-5 w-5" />
                        ) : (
                          <FiChevronDown className="h-5 w-5" />
                        )}
                      </span>
                    </button>
                    {activeSection === index && (
                      <div className="mt-4 pr-12 text-gray-600">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
                <p className="mt-2 text-gray-600">
                  If you have any questions about these Terms, please contact us at legal@mentora.com.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
