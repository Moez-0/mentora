import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FiCheck, FiCreditCard, FiLock, FiArrowLeft, FiAward } from 'react-icons/fi'

const SubscriptionCheckoutPage = () => {
  const [searchParams] = useSearchParams()
  const [plan, setPlan] = useState('individual') 
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [agreeTerms, setAgreeTerms] = useState(false)

  useEffect(() => {
    // Get plan from URL query parameter
    const planParam = searchParams.get('plan')
    if (planParam && ['individual', 'corporate', 'student'].includes(planParam)) {
      setPlan(planParam)
    }
  }, [searchParams])

  const plans = {
    individual: {
      name: 'Individual',
      monthlyPrice: 29,
      annualPrice: 25,
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Certificate of completion',
        '1 live session per month',
        'Email support',
        'Community access'
      ],
      icon: <FiAward className="h-6 w-6 text-teal-500" />
    },
    corporate: {
      name: 'Corporate',
      monthlyPrice: 99,
      annualPrice: 89,
      features: [
        'Everything in Individual',
        'Team dashboard',
        '5 live sessions per month',
        'Progress tracking',
        'Priority support',
        'Dedicated account manager',
        'Custom learning paths'
      ],
      icon: <FiAward className="h-6 w-6 text-teal-500" />
    },
    student: {
      name: 'Student',
      monthlyPrice: 15,
      annualPrice: 12,
      features: [
        'Access to all courses',
        'Downloadable resources',
        'Certificate of completion',
        'Student community',
        'Academic discounts',
        'Career guidance',
        'Special student pricing'
      ],
      icon: <FiAward className="h-6 w-6 text-teal-500" />
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process payment and subscription
    alert(`Subscription to ${plans[plan].name} plan activated successfully!`)
    // Redirect to dashboard
    window.location.href = '/mycourses'
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Plan Summary */}
          <div className="mb-8 lg:mb-0">
            <Link to="/pricing" className="flex items-center text-teal-600 hover:text-teal-800 mb-6">
              <FiArrowLeft className="mr-2" />
              Back to pricing
            </Link>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  {plans[plan].icon}
                  <h2 className="text-2xl font-bold text-gray-900 ml-3">Subscribe to {plans[plan].name} Plan</h2>
                </div>
                
                {/* Billing Toggle */}
                <div className="mt-6 flex items-center justify-center">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-l-md ${billingCycle === 'monthly' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setBillingCycle('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-r-md ${billingCycle === 'annual' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setBillingCycle('annual')}
                  >
                    Annual (Save {Math.round(((plans[plan].monthlyPrice * 12 - plans[plan].annualPrice * 12) / (plans[plan].monthlyPrice * 12)) * 100)}%)
                  </button>
                </div>
                
                {/* Price Display */}
                <div className="mt-6 text-center">
                  <span className="text-4xl font-bold text-gray-900">
                    TND{billingCycle === 'monthly' ? plans[plan].monthlyPrice : plans[plan].annualPrice}
                  </span>
                  <span className="text-lg text-gray-500 ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-gray-500 mt-1">
                      Equivalent to TND{(plans[plan].annualPrice / 12).toFixed(2)}/month
                    </p>
                  )}
                </div>
                
                {/* Student Verification (only for student plan) */}
                {plan === 'student' && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">Student Verification Required</h4>
                    <p className="text-sm text-blue-700">
                      You'll need to verify your student status with a valid student ID or email address after payment.
                    </p>
                  </div>
                )}
                
                {/* Features */}
                <div className="mt-8 space-y-3">
                  {plans[plan].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FiCheck className="h-5 w-5 text-teal-500" />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Subscription</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Plan Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Plan</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPlan('individual')}
                    className={`p-3 border rounded-md text-sm ${plan === 'individual' ? 'border-teal-500 bg-teal-50' : 'border-gray-300'}`}
                  >
                    <h4 className="font-medium">Individual</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      TND{plans.individual.monthlyPrice}/month
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlan('student')}
                    className={`p-3 border rounded-md text-sm ${plan === 'student' ? 'border-teal-500 bg-teal-50' : 'border-gray-300'}`}
                  >
                    <h4 className="font-medium">Student</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      TND{plans.student.monthlyPrice}/month
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlan('corporate')}
                    className={`p-3 border rounded-md text-sm ${plan === 'corporate' ? 'border-teal-500 bg-teal-50' : 'border-gray-300'}`}
                  >
                    <h4 className="font-medium">Corporate</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      TND{plans.corporate.monthlyPrice}/month
                    </p>
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Payment Method</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                    />
                    <label htmlFor="card" className="ml-3 flex items-center">
                      <FiCreditCard className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">Credit/Debit Card</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="flouci"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === 'flouci'}
                      onChange={() => setPaymentMethod('flouci')}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                    />
                    <label htmlFor="flouci" className="ml-3 flex items-center">
                      <img src="/flouci.png" alt="Flouci" className="h-5 w-5 mr-2" />
                      <span className="text-gray-700">Flouci</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Card Details (shown when card is selected) */}
              {paymentMethod === 'card' && (
                <div className="mb-6 space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/YY"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Order Summary</h3>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Plan</span>
                  <span className="font-medium">{plans[plan].name}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Billing Cycle</span>
                  <span className="font-medium">{billingCycle === 'monthly' ? 'Monthly' : 'Annual'}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">TND{billingCycle === 'monthly' ? plans[plan].monthlyPrice : plans[plan].annualPrice}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">TND{(billingCycle === 'monthly' ? plans[plan].monthlyPrice * 0.07 : plans[plan].annualPrice * 0.07).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                  <span className="text-gray-900 font-bold">Total</span>
                  <span className="text-gray-900 font-bold">
                    TND{(billingCycle === 'monthly' ? 
                      (plans[plan].monthlyPrice * 1.07).toFixed(2) : 
                      (plans[plan].annualPrice * 1.07).toFixed(2))}
                  </span>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the <Link to="/terms" className="text-teal-600 hover:text-teal-800">Terms of Service</Link> and <Link to="/privacy" className="text-teal-600 hover:text-teal-800">Privacy Policy</Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!agreeTerms}
                className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${agreeTerms ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
              >
                <FiLock className="mr-2" />
                {plan === 'student' ? 'Verify Student Status' : 'Complete Subscription'} - TND{(billingCycle === 'monthly' ? 
                  (plans[plan].monthlyPrice * 1.07).toFixed(2) : 
                  (plans[plan].annualPrice * 1.07).toFixed(2))}
              </button>

              {/* Security Info */}
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <FiLock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                Your transaction is secure and encrypted
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCheckoutPage