import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheck, FiLock } from 'react-icons/fi'

const LiveSessionRegisterPage = () => {
  const { id } = useParams()
  const [registered, setRegistered] = useState(false)
  
  // TO DO CONSUME ML API
  const session = {
    id: id,
    title: 'Advanced JavaScript Patterns',
    instructor: 'Moez Souidi',
    date: '2023-06-15T18:00:00',
    duration: '90 mins',
    description: 'Join this live session to learn advanced JavaScript patterns including module patterns, revealing module pattern, and more.',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    price: 49,
    isFree: false,
    maxParticipants: 100,
    registeredParticipants: 78
  }

  const handleRegister = () => {
    setRegistered(true)
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Session Summary */}
          <div className="mb-8 lg:mb-0">
            <Link to={`/live/${id}`} className="flex items-center text-teal-600 hover:text-teal-800 mb-6">
              <FiArrowLeft className="mr-2" />
              Back to session
            </Link>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={session.thumbnail} alt={session.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{session.title}</h2>
                <p className="text-gray-600 mt-2">By {session.instructor}</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <FiCalendar className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">
                      {new Date(session.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">{session.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUser className="h-5 w-5 text-teal-500" />
                    <span className="ml-2 text-gray-700">
                      {session.registeredParticipants}/{session.maxParticipants} participants registered
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">About This Session</h3>
                  <p className="text-gray-700 mt-2">{session.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {registered ? 'Registration Complete!' : 'Register for Session'}
            </h2>
            
            {registered ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <FiCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">You're registered!</h3>
                <p className="mt-2 text-gray-600">
                  We've sent the session details to your email. The session will be available on your dashboard.
                </p>
                <div className="mt-6">
                  <Link
                    to="/my-live-sessions"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Go to My Live Sessions
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Session Fee</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Session Price</span>
                      <span className="font-medium">TND {session.price}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-700">Tax</span>
                      <span className="font-medium">TND {(session.price * 0.07).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-3 pt-3 border-t border-gray-200">
                      <span className="text-gray-900 font-bold">Total</span>
                      <span className="text-gray-900 font-bold">TND {(session.price * 1.07).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <button
                    onClick={handleRegister}
                    className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Complete Registration - TND {(session.price * 1.07).toFixed(2)}
                  </button>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FiLock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    Your transaction is secure and encrypted
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveSessionRegisterPage