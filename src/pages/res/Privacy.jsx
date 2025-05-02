import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p>We collect several types of information from and about users of our Service, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, payment information, and other contact details you provide when creating an account or making a purchase.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our Service, including courses accessed, time spent, progress, and quiz results.</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical details about your device.</li>
            <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p>We use the information we collect for various purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Data Sharing and Disclosure',
      content: (
        <div className="space-y-4">
          <p>We may share your personal information in the following situations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>With Instructors:</strong> Course instructors may receive information about your progress and performance in their courses.</li>
            <li><strong>With Service Providers:</strong> We may employ third party companies and individuals to facilitate our Service, provide the Service on our behalf, or assist us in analyzing how our Service is used.</li>
            <li><strong>For Business Transfers:</strong> If we are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.</li>
            <li><strong>For Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p>The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction or damage.</p>
          <p>However, no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        </div>
      )
    },
    {
      title: 'Your Data Protection Rights',
      content: (
        <div className="space-y-4">
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>Rectification:</strong> You have the right to request correction of any information you believe is inaccurate.</li>
            <li><strong>Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            <li><strong>Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at privacy@mentora.com.</p>
        </div>
      )
    },
    {
      title: 'Children\'s Privacy',
      content: (
        <div className="space-y-4">
          <p>Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>
          <p>If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
        </div>
      )
    },
    {
      title: 'Changes to This Privacy Policy',
      content: (
        <div className="space-y-4">
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
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
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Privacy Policy
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
                At Mentora, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online learning platform and related services.
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
                  If you have any questions about this Privacy Policy, please contact us at privacy@mentora.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
