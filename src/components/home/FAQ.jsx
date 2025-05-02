
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQSection = () => {
    const faqs = [
      {
        id: 1,
        question: "How do I access my courses after purchasing?",
        answer: "Once you've enrolled in a course, you can access it immediately from your dashboard. All course materials are available 24/7 through our learning platform."
      },
      {
        id: 2,
        question: "Can I download course materials for offline use?",
        answer: "Yes, most of our courses allow you to download videos, PDFs, and other resources for offline viewing. Look for the download icon next to each resource."
      },
      {
        id: 3,
        question: "Do you offer certificates upon completion?",
        answer: "Absolutely! All our paid courses include a verifiable certificate of completion that you can share on LinkedIn or include in your resume."
      },
      {
        id: 4,
        question: "What if I need help during my learning journey?",
        answer: "We offer multiple support channels including community forums, Q&A sections in each course, and direct messaging with teaching assistants for premium courses."
      },
      {
        id: 5,
        question: "Is there a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied, simply contact our support team for a full refund."
      },
      {
        id: 6,
        question: "How often are courses updated?",
        answer: "Our team and instructors regularly update course content to ensure it reflects the latest industry standards and technologies."
      }
    ]
  
    const [openId, setOpenId] = useState(null)
  
    const toggleFAQ = (id) => {
      setOpenId(openId === id ? null : id)
    }
  
    return (
      <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Can't find what you're looking for? <Link to="/contact" className="text-teal-600 hover:text-teal-500">Contact our support team</Link>.
            </p>
          </div>
  
          <div className="mt-16 max-w-3xl mx-auto">
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <dt className="px-6 py-4">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex justify-between items-center text-left text-gray-900"
                    >
                      <span className="text-lg font-medium">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                        {openId === faq.id ? (
                          <svg className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </dt>
                  <dd className={`px-6 pb-4 ${openId === faq.id ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }

  export default FAQSection