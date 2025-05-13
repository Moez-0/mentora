import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiVideo, FiCheckCircle, FiXCircle } from 'react-icons/fi'

const MyLiveSessionsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  // TO DO CONSUME ML API
  const sessions = {
    upcoming: [
      {
        id: 1,
        title: 'Advanced JavaScript Patterns',
        instructor: 'Moez Souidi',
        date: '2023-06-15T18:00:00',
        duration: '90 mins',
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        registered: true
      },
      {
        id: 2,
        title: 'UX Design Principles Workshop',
        instructor: 'Emma Rodriguez',
        date: '2023-06-18T14:00:00',
        duration: '120 mins',
        thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        registered: true
      }
    ],
    past: [
      {
        id: 3,
        title: 'React Hooks Deep Dive',
        instructor: 'Mike Chen',
        date: '2023-05-20T16:30:00',
        duration: '120 mins',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        attended: true,
        recordingAvailable: true
      },
      {
        id: 4,
        title: 'Digital Marketing Trends 2023',
        instructor: 'Jordan Lee',
        date: '2023-05-15T11:00:00',
        duration: '90 mins',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        attended: false,
        recordingAvailable: true
      }
    ]
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10">
            <h1 className="text-3xl font-bold text-white">My Live Sessions</h1>
            <p className="mt-2 text-teal-100">View your registered and past live sessions</p>
          </div>
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'past' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Past Sessions
              </button>
            </nav>
          </div>
          <div className="px-6 py-8 sm:px-10">
            {sessions[activeTab].length === 0 ? (
              <div className="text-center py-12">
                <FiVideo className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {activeTab === 'upcoming' ? 'No upcoming sessions' : 'No past sessions'}
                </h3>
                <p className="mt-1 text-gray-500">
                  {activeTab === 'upcoming' ? 'Register for upcoming live sessions to see them here' : 'Attend some live sessions to see them here'}
                </p>
                <div className="mt-6">
                  <Link
                    to="/live"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Browse Live Sessions
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sessions[activeTab].map(session => (
                  <div key={session.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="relative h-40 w-full">
                      <img
                        src={session.thumbnail}
                        alt={session.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        <Link to={`/live/${session.id}`} className="hover:text-teal-600">
                          {session.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">By {session.instructor}</p>
                      
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <FiCalendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {new Date(session.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {session.duration}
                      </div>
                      
                      {activeTab === 'past' && (
                        <div className="mt-4 flex items-center">
                          {session.attended ? (
                            <>
                              <FiCheckCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-600">Attended</span>
                            </>
                          ) : (
                            <>
                              <FiXCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-600">Not Attended</span>
                            </>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-6">
                        {activeTab === 'upcoming' ? (
                          <Link
                            to={`/live/${session.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                          >
                            View Details
                          </Link>
                        ) : session.recordingAvailable ? (
                          <Link
                            to={`/live/${session.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                          >
                            Watch Recording
                          </Link>
                        ) : (
                          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            No Recording Available
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyLiveSessionsPage