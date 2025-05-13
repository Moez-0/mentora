import { useParams } from 'react-router-dom'

const LiveSessionDetails = () => {
  const { id } = useParams()
  
  // TO DO CONSUME ML API
  const session = {
    id: 1,
    title: 'Advanced JavaScript Patterns',
    instructor: 'Moez Souidi',
    date: '2023-06-15T18:00:00',
    duration: '90 mins',
    category: 'Development',
    description: 'In this live session, we\'ll explore advanced JavaScript patterns including factory functions, modules, proxies, and decorators. You\'ll learn how to write more maintainable and performant JavaScript code.',
    topics: [
      'Factory Functions vs Constructor Functions',
      'JavaScript Modules Pattern',
      'ES6 Proxies',
      'Decorator Pattern',
      'Performance Considerations'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    instructorBio: 'Sarah has been a JavaScript developer for 8 years, specializing in architectural patterns and performance optimization. She has trained over 10,000 developers worldwide.',
    registered: true,
    attendees: 342,
    recordingAvailable: false
  }

  return (
    <div className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-extrabold text-gray-900">{session.title}</h1>
            <p className="mt-2 text-xl text-gray-600">By {session.instructor}</p>
            
            <div className="mt-6 flex items-center space-x-4">
              <span className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                {session.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {new Date(session.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {session.duration}
              </div>
            </div>

            <div className="mt-8 aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden p-8">
              {session.registered ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-lg text-white">Session starts in:</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <div className="bg-gray-800 rounded p-2 w-16">
                        <p className="text-2xl font-bold text-white">02</p>
                        <p className="text-xs text-gray-300">Days</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2 w-16">
                        <p className="text-2xl font-bold text-white">14</p>
                        <p className="text-xs text-gray-300">Hours</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2 w-16">
                        <p className="text-2xl font-bold text-white">32</p>
                        <p className="text-xs text-gray-300">Minutes</p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6">
                    <p className="text-lg text-white mb-4">Register to access this live session</p>
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900">
                      Register Now
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">About this session</h2>
              <p className="mt-4 text-gray-600">{session.description}</p>
              
              <h2 className="mt-8 text-xl font-bold text-gray-900">What we'll cover</h2>
              <ul className="mt-4 space-y-3">
                {session.topics.map((topic, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">About the instructor</h2>
              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={session.instructorAvatar}
                    alt={session.instructor}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{session.instructor}</h3>
                  <p className="mt-1 text-gray-600">{session.instructorBio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Session Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Date & Time</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {new Date(session.date).toLocaleString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Duration</h4>
                  <p className="mt-1 text-sm text-gray-600">{session.duration}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Attendees</h4>
                  <p className="mt-1 text-sm text-gray-600">{session.attendees} registered</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Requirements</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Basic JavaScript knowledge, laptop with Chrome browser
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                {session.registered ? (
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="flex-shrink-0 mr-2 h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      You're registered for this session
                    </div>
                    <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                      Add to Calendar
                    </button>
                  </div>
                ) : (
                  <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveSessionDetails