import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiBook, FiAward, FiSearch } from 'react-icons/fi';

const MentorStudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const students = [
    {
      id: 1,
      name: 'Ahmed Ben Ali',
      email: 'ahmed.benali@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      coursesEnrolled: 5,
      sessionsAttended: 8,
      lastActive: '2 days ago'
    },
    {
      id: 2,
      name: 'Fatma Ksontini',
      email: 'fatma.ksontini@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      coursesEnrolled: 3,
      sessionsAttended: 5,
      lastActive: '1 week ago'
    },
    {
      id: 3,
      name: 'Mohamed Trabelsi',
      email: 'mohamed.trabelsi@example.com',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      coursesEnrolled: 2,
      sessionsAttended: 3,
      lastActive: '3 days ago'
    },
    {
      id: 4,
      name: 'Amina Hammami',
      email: 'amina.hammami@example.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      coursesEnrolled: 4,
      sessionsAttended: 6,
      lastActive: '1 day ago'
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="mt-2 text-gray-600">Manage and track your students' progress</p>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search students..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                Export
              </button>
            </div>
          </div>
          
          {filteredStudents.length === 0 ? (
            <div className="text-center py-12">
              <FiUser className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No students found</h3>
              <p className="mt-1 text-gray-500">Students will appear here once they enroll in your courses</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <div key={student.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={student.avatar} alt={student.name} />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <Link to={`/mentor/students/${student.id}`} className="text-sm font-medium text-teal-600 hover:text-teal-900">
                          {student.name}
                        </Link>
                        <div className="text-xs text-gray-500">Last active {student.lastActive}</div>
                      </div>
                      <div className="mt-1 text-sm text-gray-500">{student.email}</div>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span className="flex items-center mr-3">
                          <FiBook className="mr-1 h-3 w-3" /> {student.coursesEnrolled} courses
                        </span>
                        <span className="flex items-center">
                          <FiAward className="mr-1 h-3 w-3" /> {student.sessionsAttended} sessions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorStudentsPage;