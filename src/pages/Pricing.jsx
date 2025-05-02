import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaUser, FaUsers, FaGraduationCap, FaLightbulb } from 'react-icons/fa'

const PricingPage = () => {
  const [annualBilling, setAnnualBilling] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('individual')

  const plans = [
    {
      id: 'individual',
      name: 'Individual',
      priceMonthly: 29,
      priceAnnual: 25,
      description: 'Perfect for self-learners and professionals',
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Certificate of completion',
        '1 live session per month',
        'Email support',
        'Community access'
      ],
      cta: 'Get Started',
      popular: false,
      icon: <FaUser className="h-6 w-6 text-teal-500" />
    },
    {
      id: 'corporate',
      name: 'Corporate',
      priceMonthly: 99,
      priceAnnual: 89,
      description: 'For teams and organizations',
      features: [
        'Everything in Individual',
        'Team dashboard',
        '5 live sessions per month',
        'Progress tracking',
        'Priority support',
        'Dedicated account manager',
        'Custom learning paths'
      ],
      cta: 'Subscribe',
      popular: true,
      icon: <FaUsers className="h-6 w-6 text-teal-500" />
    },
    {
      id: 'student',
      name: 'Student',
      priceMonthly: 15,
      priceAnnual: 12,
      description: 'Discounted access for verified students',
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Certificate of completion',
        'Student community',
        'Academic discounts',
        'Career guidance'
      ],
      cta: 'Verify Student Status',
      popular: false,
      icon: <FaGraduationCap className="h-6 w-6 text-teal-500" />
    }
  ]

  const savings = (monthly, annual) => {
    return Math.round(((monthly * 12 - annual * 12) / (monthly * 12)) * 100)
  }

  return (
    <div className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Flexible Plans for Every Learner
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that fits your learning goals and budget
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 text-sm font-medium ${!annualBilling ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              onClick={() => setAnnualBilling(!annualBilling)}
            >
              <span
                aria-hidden="true"
                className={`${annualBilling ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </button>
            <span className="ml-4 text-sm font-medium">
              <span className={annualBilling ? 'text-gray-900' : 'text-gray-500'}>Annual</span>
              {annualBilling && (
                <span className="ml-2 inline-flex items-center rounded-full bg-teal-100 px-3 py-0.5 text-xs font-medium text-teal-800">
                  Save up to {savings(plans[0].priceMonthly, plans[0].priceAnnual)}%
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ${plan.popular ? 'border-teal-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex items-center">
                  {plan.icon}
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                
                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {annualBilling ? plan.priceAnnual : plan.priceMonthly} TND
                    </span>
                    <span className="ml-1 text-lg font-medium text-gray-500">
                      /{annualBilling ? 'year' : 'month'}
                    </span>
                  </div>
                  {annualBilling && (
                    <p className="mt-1 text-sm text-gray-500">
                      Equivalent to {(plan.priceAnnual / 12).toFixed(2)} TND/month
                    </p>
                  )}
                </div>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                      <span className="ml-3 text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">

                  <Link
                    to={`/subscribe?plan=${plan.id}`}
                    className={`block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${plan.popular ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {plan.cta}
                  </Link>
                
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaLightbulb className="h-6 w-6 text-teal-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Custom solutions for large organizations with 50+ learners
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Features</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Everything in Corporate</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Unlimited learners</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Custom reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">API access</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Benefits</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Volume discounts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Single sign-on (SSO)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Dedicated support team</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-teal-500" />
                    <span className="ml-3 text-sm text-gray-700">Custom content integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 sm:px-10">
            <Link
              to="/contact"
              className="block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium bg-gray-800 text-white hover:bg-gray-900"
            >
              Contact Enterprise Team
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="mt-6 border-t border-gray-200 pt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
              {[
                {
                  question: 'Can I switch plans later?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. You\'ll only pay the difference for the remaining period.'
                },
                {
                  question: 'Do you offer discounts for students?',
                  answer: 'Yes, we offer a special discounted Student plan. You\'ll need to verify your student status with a valid student ID or email address.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards (Visa, MasterCard, CIB), bank transfers, and mobile payment solutions like Flouci.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'We offer a 7-day free trial for our Individual plan. No credit card required. Corporate and Enterprise plans can request a demo.'
                },
                {
                  question: 'How do I cancel my subscription?',
                  answer: 'You can cancel anytime from your account settings. Your subscription will remain active until the end of the current billing period.'
                },
                {
                  question: 'Are certificates included?',
                  answer: 'Yes, all paid plans include verifiable certificates of completion for each course you finish.'
                }
              ].map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage