import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiCreditCard, FiLock, FiArrowLeft } from 'react-icons/fi'

const CourseCheckoutPage = () => {
  const { id } = useParams()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [agreeTerms, setAgreeTerms] = useState(false)
  
  // TO DO CONSUME ML API
  const course = {
    id: id,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Moez Souidi',
    price: 199,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description: 'Master advanced JavaScript concepts including closures, prototypes, design patterns, and performance optimization.',
    duration: '8 weeks',
    lessons: 24,
    students: 50,
    rating: 4.9
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process payment and enrollment
    alert('Payment processed successfully!')
    // Redirect to course page
    window.location.href = `/courses/${id}/learn`
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Course Summary */}
          <div className="mb-8 lg:mb-0">
            <Link to={`/courses/${id}`} className="flex items-center text-teal-600 hover:text-teal-800 mb-6">
              <FiArrowLeft className="mr-2" />
              Back to course
            </Link>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                <p className="text-gray-600 mt-2">By {course.instructor}</p>
                
                <div className="mt-4 flex items-center">
                  <div className="flex items-center text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{course.rating} ({course.students} students)</span>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <FiCheck className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">{course.duration} duration</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Enrollment</h2>
            
            <form onSubmit={handleSubmit}>
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
                  <span className="text-gray-600">Course Price</span>
                  <span className="font-medium">TND {course.price}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">TND {(course.price * 0.07).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                  <span className="text-gray-900 font-bold">Total</span>
                  <span className="text-gray-900 font-bold">TND {(course.price * 1.07).toFixed(2)}</span>
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
                Complete Enrollment - TND {(course.price * 1.07).toFixed(2)}
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

export default CourseCheckoutPage