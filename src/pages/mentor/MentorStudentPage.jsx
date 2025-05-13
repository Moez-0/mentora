import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiUser,FiCalendar, FiMail, FiBook, FiAward, FiClock, FiMessageSquare, FiArrowLeft } from 'react-icons/fi';

const MentorStudentPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const student = {
    id: id,
    name: 'Ahmed Ben Ali',
    email: 'ahmed.benali@example.com',
    joinDate: 'Joined March 2023',
    location: 'Tunis, Tunisia',
    bio: 'Frontend developer passionate about React and UI design.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'UI/UX']
  };
  
  const enrolledCourses = [
    {
      id: 1,
      title: 'Advanced JavaScript Patterns',
      progress: 85,
      lastAccessed: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'React Native Fundamentals',
      progress: 45,
      lastAccessed: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];
  
  const attendedSessions = [
    {
      id: 1,
      title: 'Live Q&A Session - JavaScript',
      date: '2023-05-20T16:30:00',
      thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'React Hooks Workshop',
      date: '2023-04-15T14:00:00',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/mentor/students" className="inline-flex items-center text-teal-600 hover:text-teal-800">
            <FiArrowLeft className="mr-2" /> Back to Students
          </Link>
        </div>
        
        {/* Student Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="p-6 sm:flex sm:items-start">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <img className="w-32 h-32 rounded-full border-4 border-white shadow-lg" src={student.avatar} alt={student.name} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
                  <p className="mt-1 text-gray-600">{student.email}</p>
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                  <FiMessageSquare className="mr-2" /> Send Message
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiUser className="mr-1.5 h-4 w-4 text-gray-400" />
                  {student.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
                  {student.joinDate}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'courses' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'sessions' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Live Sessions
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6">{student.bio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Learning Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Courses Enrolled</p>
                      <div className="flex items-center">
                        <FiBook className="mr-2 h-5 w-5 text-teal-500" />
                        <span className="text-gray-900">5 courses</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Sessions Attended</p>
                      <div className="flex items-center">
                        <FiAward className="mr-2 h-5 w-5 text-teal-500" />
                        <span className="text-gray-900">8 sessions</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Certificates Earned</p>
                      <div className="flex items-center">
                        <FiAward className="mr-2 h-5 w-5 text-teal-500" />
                        <span className="text-gray-900">3 certificates</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiBook className="h-5 w-5 text-teal-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Started "React Native Fundamentals" course</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiAward className="h-5 w-5 text-teal-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Completed "JavaScript Basics" course</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiClock className="h-5 w-5 text-teal-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-700">Attended "Live Q&A Session"</p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Enrolled Courses</h2>
              
              {enrolledCourses.length === 0 ? (
                <div className="text-center py-12">
                  <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No courses enrolled yet</h3>
                  <p className="mt-1 text-gray-500">This student hasn't enrolled in any of your courses</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map(course => (
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
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span>{course.progress}% complete</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">Last accessed {course.lastAccessed}</span>
                          <Link
                            to={`/mentor/courses/${course.id}`}
                            className="inline-flex items-center px-3 py-1 border border-teal-500 text-xs font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'sessions' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Attended Sessions</h2>
              
              {attendedSessions.length === 0 ? (
                <div className="text-center py-12">
                  <FiCalendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No sessions attended yet</h3>
                  <p className="mt-1 text-gray-500">This student hasn't attended any of your live sessions</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {attendedSessions.map(session => (
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
                        <div className="mt-4 flex items-center justify-between">
                          <Link
                            to={`/mentor/sessions/${session.id}`}
                            className="inline-flex items-center px-3 py-1 border border-teal-500 text-xs font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50"
                          >
                            View Session
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorStudentPage;