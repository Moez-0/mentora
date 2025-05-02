import { useState } from 'react';
import { 
  FiUsers, FiCalendar, FiBook, FiMessageSquare, 
  FiUser, FiSettings, FiLogOut, FiChevronRight,
  FiClock, FiDollarSign, FiBarChart2, FiFileText
} from 'react-icons/fi';
import { FaUserGraduate, FaRegStar, FaStar } from 'react-icons/fa';
import { RiLiveLine } from 'react-icons/ri';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [upcomingSessions, setUpcomingSessions] = useState([
    { 
      id: 1, 
      title: 'Advanced Calculus', 
      student: 'Alex Johnson', 
      date: '2023-06-15', 
      time: '10:00 AM',
      duration: '90 mins',
      status: 'confirmed'
    },
    { 
      id: 2, 
      title: 'Quantum Physics', 
      student: 'Maria Garcia', 
      date: '2023-06-16', 
      time: '2:00 PM',
      duration: '60 mins',
      status: 'confirmed'
    }
  ]);

  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: 'Alex Johnson', 
      email: 'alex@example.com',
      courses: ['Linear Algebra', 'Calculus II'],
      lastSession: '2 days ago',
      progress: 78,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 2, 
      name: 'Maria Garcia', 
      email: 'maria@example.com',
      courses: ['Quantum Physics', 'Modern Physics'],
      lastSession: '1 day ago',
      progress: 65,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 3, 
      name: 'Sam Wilson', 
      email: 'sam@example.com',
      courses: ['Organic Chemistry'],
      lastSession: '3 days ago',
      progress: 42,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ]);

  const stats = [
    { title: 'Total Students', value: '24', icon: <FiUsers className="h-6 w-6" />, change: '+3 this month' },
    { title: 'Upcoming Sessions', value: '8', icon: <FiCalendar className="h-6 w-6" />, change: '2 today' },
    { title: 'Courses Taught', value: '6', icon: <FiBook className="h-6 w-6" />, change: '1 new' },
    { title: 'Earnings', value: '$2,840', icon: <FiDollarSign className="h-6 w-6" />, change: '+$320 this week' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              MS
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Mentor Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
              <FiSettings className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
              <FiLogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-8">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => setActiveTab('students')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'students' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FaUserGraduate className="mr-3 h-5 w-5" />
                  My Students
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveTab('sessions')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'sessions' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiCalendar className="mr-3 h-5 w-5" />
                  Upcoming Sessions
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiBook className="mr-3 h-5 w-5" />
                  My Courses
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'messages' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiMessageSquare className="mr-3 h-5 w-5" />
                  Messages
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'analytics' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiBarChart2 className="mr-3 h-5 w-5" />
                  Analytics
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <FiUser className="mr-3 h-5 w-5" />
                  Profile
                  <FiChevronRight className="ml-auto h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === 'students' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-5">
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                          {stat.icon}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                          <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Students Table */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">My Students</h2>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Add New Student
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Session</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {students.map(student => (
                            <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={student.avatar} alt={student.name} />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                    <div className="text-sm text-gray-500">{student.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                  {student.courses.map((course, i) => (
                                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-700">
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                    <div 
                                      className="bg-purple-600 h-2 rounded-full" 
                                      style={{ width: `${student.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm text-gray-600">{student.progress}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {student.lastSession}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-purple-600 hover:text-purple-900 mr-4">
                                  Message
                                </button>
                                <button className="text-purple-600 hover:text-purple-900">
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sessions' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Upcoming Sessions</h2>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Schedule Session
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Calendar View
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {upcomingSessions.map(session => (
                    <div key={session.id} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="font-semibold text-gray-800">{session.title}</h3>
                          <p className="text-sm text-gray-600">With {session.student}</p>
                          
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <FiCalendar className="mr-2 h-4 w-4" />
                            <span>{session.date} at {session.time}</span>
                            <FiClock className="ml-4 mr-2 h-4 w-4" />
                            <span>{session.duration}</span>
                          </div>
                          
                          <div className="mt-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              session.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                            <RiLiveLine className="mr-2 h-4 w-4" />
                            Start Session
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Reschedule
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add other tabs content similarly */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;