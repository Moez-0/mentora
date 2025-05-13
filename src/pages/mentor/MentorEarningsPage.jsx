import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDollarSign ,FiUsers , FiBook, FiTrendingUp, FiTrendingDown, FiCalendar, FiDownload } from 'react-icons/fi';

const MentorEarningsPage = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const stats = {
    totalEarnings: 'TND 8,450',
    lastMonthEarnings: 'TND 2,150',
    totalStudents: 124,
    courses: 8,
    changePercentage: '+15%'
  };
  
  const earnings = [
    { id: 1, date: '2023-06-15', amount: 'TND 1,250', course: 'Advanced JavaScript Patterns', students: 12, status: 'paid' },
    { id: 2, date: '2023-06-10', amount: 'TND 980', course: 'React Native Fundamentals', students: 8, status: 'paid' },
    { id: 3, date: '2023-06-05', amount: 'TND 750', course: 'UI/UX Design Principles', students: 5, status: 'paid' },
    { id: 4, date: '2023-05-28', amount: 'TND 1,120', course: 'Advanced JavaScript Patterns', students: 9, status: 'paid' },
    { id: 5, date: '2023-05-20', amount: 'TND 650', course: 'CSS Masterclass', students: 4, status: 'paid' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Earnings</h1>
          <p className="mt-2 text-gray-600">Track your earnings and payment history</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiDollarSign className="h-6 w-6 text-teal-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Earnings</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stats.totalEarnings}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiDollarSign className="h-6 w-6 text-teal-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Last Month</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stats.lastMonthEarnings}</div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className={`bg-gray-50 px-5 py-3 ${stats.changePercentage.includes('+') ? 'text-teal-700' : 'text-red-700'}`}>
                <div className="text-sm">
                  <span className="font-medium">{stats.changePercentage}</span> from previous month
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiUsers className="h-6 w-6 text-teal-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stats.totalStudents}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiBook className="h-6 w-6 text-teal-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Courses</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stats.courses}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Range Selector */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Earnings History</h2>
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
          
          {/* Earnings Chart Placeholder */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Earnings chart for {timeRange} view</p>
            </div>
          </div>
        </div>
        
        {/* Transactions */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
            <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
              <FiDownload className="mr-1" /> Export
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {earnings.map((earning) => (
                  <tr key={earning.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(earning.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {earning.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {earning.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {earning.students}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        earning.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {earning.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEarningsPage;