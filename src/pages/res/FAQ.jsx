import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I access my courses after purchasing?',
      answer: 'Once you enroll in a course, you can access it immediately from your dashboard. All course materials are available 24/7 through our learning platform. Simply log in to your account and click on "My Courses" to continue your learning.'
    },
    {
      question: 'Can I download course materials for offline use?',
      answer: 'Yes, most of our courses allow you to download videos, PDFs, and other resources for offline viewing. Look for the download icon next to each resource. Note that some materials may have DRM protection to prevent unauthorized distribution.'
    },
    {
      question: 'Do you offer certificates upon completion?',
      answer: 'Absolutely! All our paid courses include a verifiable certificate of completion that you can share on LinkedIn or include in your resume. Certificates are automatically generated when you complete all course requirements and pass any assessments.'
    },
    {
      question: 'What if I need help during my learning journey?',
      answer: 'We offer multiple support channels including community forums, Q&A sections in each course, and direct messaging with teaching assistants for premium courses. Our average response time is less than 24 hours for all support inquiries.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all courses. If you\'re not satisfied, simply contact our support team for a full refund. Please note that refunds are not available after certificate issuance.'
    },
    {
      question: 'How often are courses updated?',
      answer: 'Our content team and instructors regularly update course materials to ensure they reflect the latest industry standards and technologies. Major updates are typically announced in the course dashboard, and you\'ll retain access to all future updates for courses you\'ve purchased.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some regions, mobile payment solutions. All transactions are securely processed through our PCI-compliant payment gateway.'
    },
    {
      question: 'Can I gift a course to someone else?',
      answer: 'Yes! During checkout, you\'ll find an option to purchase the course as a gift. You can specify the recipient\'s email address, and they\'ll receive instructions to redeem their course. Gift purchases are valid for 12 months from the date of purchase.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF7E5D] to-[#FF7E5D] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-orange-100">
            Find answers to common questions about our platform
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-start w-full text-left"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <span className="ml-6 h-7 flex items-center text-[#FF7E5D]">
                      {activeIndex === index ? (
                        <FiChevronUp className="h-5 w-5" />
                      ) : (
                        <FiChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="mt-4 pr-12">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium text-gray-900">Still have questions?</h3>
              <p className="mt-2 text-gray-600">
                Our support team is ready to help you with any additional questions you might have.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#FF7E5D] hover:bg-[#e96d4f]"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
