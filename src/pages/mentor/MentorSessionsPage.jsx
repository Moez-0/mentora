import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiUsers, FiPlus, FiSearch, FiVideo } from 'react-icons/fi';

const MentorSessionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const sessions = {
    upcoming: [
      {
        id: 1,
        title: 'Live Q&A - Advanced JavaScript',
        date: '2023-06-15T18:00:00',
        duration: '90 mins',
        registeredStudents: 24,
        maxStudents: 50,
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        meetingLink: 'https://meet.example.com/js-qa-june15'
      },
      {
        id: 2,
        title: 'React Hooks Workshop',
        date: '2023-06-18T14:00:00',
        duration: '120 mins',
        registeredStudents: 18,
        maxStudents: 30,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        meetingLink: 'https://meet.example.com/react-hooks-june18'
      }
    ],
    past: [
      {
        id: 3,
        title: 'JavaScript Fundamentals Review',
        date: '2023-05-20T16:30:00',
        duration: '90 mins',
        attendedStudents: 22,
        thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        recordingAvailable: true
      },
      {
        id: 4,
        title: 'CSS Masterclass',
        date: '2023-05-15T11:00:00',
        duration: '120 mins',
        attendedStudents: 15,
        thumbnail: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        recordingAvailable: true
      }
    ],
    cancelled: [
      {
        id: 5,
        title: 'Node.js Performance',
        date: '2023-04-10T15:00:00',
        duration: '60 mins',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        reason: 'Technical issues'
      }
    ]
  };

  const filteredSessions = sessions[activeTab].filter(session =>
    session.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    totalSessions: sessions.upcoming.length + sessions.past.length + sessions.cancelled.length,
    upcomingSessions: sessions.upcoming.length,
    averageAttendance: sessions.past.length > 0 
      ? Math.round(sessions.past.reduce((sum, session) => sum + (session.attendedStudents || 0), 0) / sessions.past.length)
      : 0,
    cancellationRate: sessions.cancelled.length / (sessions.past.length + sessions.cancelled.length) * 100
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Live Sessions</h1>
              <p className="mt-2 text-gray-600">Manage your scheduled live teaching sessions</p>
            </div>
            <Link
              to="/mentor/sessions/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
            >
              <FiPlus className="mr-2" /> Schedule Session
            </Link>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Tabs and Search */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex mb-4 md:mb-0">
                <nav className="-mb-px flex space-x-4">
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setActiveTab('past')}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'past' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Past Sessions
                  </button>
                  <button
                    onClick={() => setActiveTab('cancelled')}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'cancelled' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Cancelled
                  </button>
                </nav>
              </div>
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search sessions..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Sessions List */}
          <div className="p-6">
            {filteredSessions.length === 0 ? (
              <div className="text-center py-12">
                <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {activeTab === 'upcoming' ? 'No upcoming sessions' : 
                   activeTab === 'past' ? 'No past sessions' : 'No cancelled sessions'}
                </h3>
                <p className="mt-1 text-gray-500">
                  {activeTab === 'upcoming' ? 'Schedule a session to get started' : 
                   activeTab === 'past' ? 'Your past sessions will appear here' : 'No sessions have been cancelled'}
                </p>
                {activeTab === 'upcoming' && (
                  <div className="mt-6">
                    <Link
                      to="/mentor/sessions/new"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      Schedule Session
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSessions.map(session => (
                  <div key={session.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="relative h-40 w-full">
                      <img
                        src={session.thumbnail}
                        alt={session.title}
                        className="w-full h-full object-cover"
                      />
                      {activeTab === 'cancelled' && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <span className="text-white font-bold bg-red-500 px-3 py-1 rounded-md">
                            Cancelled
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        <Link to={`/mentor/sessions/${session.id}`} className="hover:text-teal-600">
                          {session.title}
                        </Link>
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FiCalendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {new Date(session.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {session.duration}
                      </div>
                      
                      {activeTab === 'upcoming' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Registered</span>
                            <span>{session.registeredStudents}/{session.maxStudents}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
                              style={{ width: `${(session.registeredStudents / session.maxStudents) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'past' && (
                        <div className="mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <FiUsers className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {session.attendedStudents} attended
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'cancelled' && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Reason:</span> {session.reason}
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        {activeTab === 'upcoming' ? (
                          <Link
                            to={`/mentor/sessions/${session.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                          >
                            Manage Session
                          </Link>
                        ) : activeTab === 'past' ? (
                          session.recordingAvailable ? (
                            <Link
                              to={`/mentor/sessions/${session.id}`}
                              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                            >
                              View Recording
                            </Link>
                          ) : (
                            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                              No Recording Available
                            </button>
                          )
                        ) : (
                          <Link
                            to={`/mentor/sessions/${session.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View Details
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Stats Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiVideo className="h-5 w-5 text-teal-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Total Sessions</p>
                    <p className="text-lg font-semibold text-gray-900">{stats.totalSessions}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiCalendar className="h-5 w-5 text-blue-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Upcoming</p>
                    <p className="text-lg font-semibold text-gray-900">{stats.upcomingSessions}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiUsers className="h-5 w-5 text-green-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Avg Attendance</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {stats.averageAttendance > 0 ? stats.averageAttendance : '-'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiClock className="h-5 w-5 text-purple-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Cancellation Rate</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {stats.cancellationRate > 0 ? `${stats.cancellationRate.toFixed(1)}%` : '0%'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSessionsPage;