import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiClock, FiBook, FiUsers, FiDollarSign, FiMessageSquare, FiCalendar, FiAward } from 'react-icons/fi';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Mock data - TO BE REPLACED WITH API CALLS
  const stats = [
    { id: 1, name: 'Total Students', value: 124, icon: FiUsers, change: '+12%', changeType: 'positive' },
    { id: 2, name: 'Active Courses', value: 8, icon: FiBook, change: '+2', changeType: 'positive' },
    { id: 3, name: 'Monthly Earnings', value: 'TND 3,450', icon: FiDollarSign, change: '+5%', changeType: 'positive' },
    { id: 4, name: 'Pending Messages', value: 5, icon: FiMessageSquare, change: '-2', changeType: 'negative' }
  ];
  
  const courses = [
    {
      id: 1,
      title: 'Advanced JavaScript Patterns',
      students: 42,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'React Native Fundamentals',
      students: 36,
      rating: 4.6,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: '1 week ago'
    }
  ];
  
  const sessions = [
    {
      id: 1,
      title: 'Live Q&A Session - JavaScript',
      date: '2023-06-15T18:00:00',
      duration: '90 mins',
      registeredStudents: 24,
      thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'React Hooks Workshop',
      date: '2023-06-18T14:00:00',
      duration: '120 mins',
      registeredStudents: 18,
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mentor Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your courses, students, and earnings</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={`bg-gray-50 px-5 py-3 ${stat.changeType === 'positive' ? 'text-teal-700' : 'text-red-700'}`}>
                <div className="text-sm">
                  <span className="font-medium">{stat.change}</span> from last month
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('courses')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'courses' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab('sessions')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'sessions' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Live Sessions
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'students' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'earnings' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Earnings
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {activeTab === 'courses' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                <Link
                  to="/mentor/courses/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  Create New Course
                </Link>
              </div>
              
              {courses.length === 0 ? (
                <div className="text-center py-12">
                  <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No courses created yet</h3>
                  <p className="mt-1 text-gray-500">Create your first course to start teaching</p>
                  <div className="mt-6">
                    <Link
                      to="/mentor/courses/new"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      Create Course
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map(course => (
                    <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className="relative h-40 w-full">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          <Link to={`/mentor/courses/${course.id}`} className="hover:text-teal-600">
                            {course.title}
                          </Link>
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <FiUsers className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          {course.students} students
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <FiAward className="flex-shrink-0 mr-1.5 h-4 w-4 text-yellow-400" />
                          {course.rating} rating
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">Updated {course.lastUpdated}</span>
                          <Link
                            to={`/mentor/courses/${course.id}`}
                            className="inline-flex items-center px-3 py-1 border border-teal-500 text-xs font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50"
                          >
                            Manage
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'sessions' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Live Sessions</h2>
                <Link
                  to="/mentor/sessions/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  Schedule Session
                </Link>
              </div>
              
              {sessions.length === 0 ? (
                <div className="text-center py-12">
                  <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No sessions scheduled</h3>
                  <p className="mt-1 text-gray-500">Schedule a live session to interact with your students</p>
                  <div className="mt-6">
                    <Link
                      to="/mentor/sessions/new"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      Schedule Session
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sessions.map(session => (
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
                          <Link to={`/mentor/sessions/${session.id}`} className="hover:text-teal-600">
                            {session.title}
                          </Link>
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
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
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{session.registeredStudents} registered</span>
                          <Link
                            to={`/mentor/sessions/${session.id}`}
                            className="inline-flex items-center px-3 py-1 border border-teal-500 text-xs font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50"
                          >
                            Manage
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'students' && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Students</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Student Management</h3>
                <p className="mt-1 text-gray-500">View and manage all your students in one place</p>
                <div className="mt-6">
                  <Link
                    to="/mentor/students"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    View All Students
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'earnings' && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <FiDollarSign className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Earnings Dashboard</h3>
                <p className="mt-1 text-gray-500">Track your earnings and payment history</p>
                <div className="mt-6">
                  <Link
                    to="/mentor/earnings"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    View Earnings
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;