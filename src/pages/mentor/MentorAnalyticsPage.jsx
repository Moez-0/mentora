import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiUsers, FiBook, FiDollarSign, FiCalendar } from 'react-icons/fi';

const MentorAnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const stats = {
    totalStudents: 124,
    activeStudents: 89,
    totalCourses: 8,
    totalEarnings: 'TND 8,450',
    completionRate: '72%',
    satisfactionRate: '4.8/5'
  };
  
  const studentGrowth = [
    { month: 'Jan', students: 20 },
    { month: 'Feb', students: 35 },
    { month: 'Mar', students: 48 },
    { month: 'Apr', students: 62 },
    { month: 'May', students: 89 },
    { month: 'Jun', students: 124 }
  ];
  
  const popularCourses = [
    { id: 1, title: 'Advanced JavaScript Patterns', students: 42, revenue: 'TND 3,150' },
    { id: 2, title: 'React Native Fundamentals', students: 36, revenue: 'TND 2,700' },
    { id: 3, title: 'UI/UX Design Principles', students: 28, revenue: 'TND 1,960' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-2 text-gray-600">Track your teaching performance and growth</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Performance Overview</h2>
              <div className="flex">
                <button
                  onClick={() => setTimeRange('weekly')}
                  className={`px-3 py-1 text-sm font-medium rounded-md mr-2 ${timeRange === 'weekly' ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setTimeRange('monthly')}
                  className={`px-3 py-1 text-sm font-medium rounded-md mr-2 ${timeRange === 'monthly' ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setTimeRange('yearly')}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${timeRange === 'yearly' ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  Yearly
                </button>
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
                onClick={() => setActiveTab('students')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'students' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'courses' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Courses
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
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full">
                        <FiUsers className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{stats.totalStudents}</h3>
                        <p className="text-sm text-gray-500">Total Students</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                        <FiTrendingUp className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{stats.activeStudents}</h3>
                        <p className="text-sm text-gray-500">Active Students</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                        <FiBook className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{stats.totalCourses}</h3>
                        <p className="text-sm text-gray-500">Courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                        <FiDollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{stats.totalEarnings}</h3>
                        <p className="text-sm text-gray-500">Total Earnings</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Student Growth Chart */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Student Growth</h3>
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500">Student growth chart for {timeRange} view</p>
                      <div className="mt-2 flex justify-center">
                        <div className="w-full max-w-md">
                          <div className="flex justify-between text-xs text-gray-500">
                            {studentGrowth.map(item => (
                              <span key={item.month}>{item.month}</span>
                            ))}
                          </div>
                          <div className="mt-1 relative h-32">
                            <div className="absolute bottom-0 w-full flex items-end">
                              {studentGrowth.map((item, index) => (
                                <div
                                  key={item.month}
                                  className="flex-1 flex justify-center"
                                  style={{ height: `${(item.students / 150) * 100}%` }}
                                >
                                  <div
                                    className={`w-8 ${index % 2 === 0 ? 'bg-teal-500' : 'bg-teal-300'} rounded-t`}
                                    title={`${item.students} students`}
                                  ></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Completion and Satisfaction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Course Completion Rate</h3>
                    <div className="flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-gray-200"
                            strokeWidth="10"
                            stroke="currentColor"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-teal-600"
                            strokeWidth="10"
                            strokeDasharray={`${stats.completionRate.replace('%', '') * 2.51} 251`}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                        </svg>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-900">{stats.completionRate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Student Satisfaction</h3>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-8 w-8 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg font-medium text-gray-900">{stats.satisfactionRate}</p>
                        <p className="text-sm text-gray-500">Average rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'students' && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Student Analytics</h3>
                <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center">
                  <p className="text-gray-500">Student analytics for {timeRange} view</p>
                </div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Course Performance</h3>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-8 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Students
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenue
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Completion Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {popularCourses.map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{course.students}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{course.revenue}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-teal-600 h-2.5 rounded-full" 
                                  style={{ width: '72%' }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-500">72%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Course Engagement</h3>
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Course engagement metrics for {timeRange} view</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'earnings' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Earnings Analytics</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Earnings chart for {timeRange} view</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Sources</h3>
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Revenue breakdown for {timeRange} view</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorAnalyticsPage;