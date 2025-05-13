import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiPlus,FiBook,FiCalendar, FiClock, FiUsers, FiEdit, FiTrash2, FiArrowLeft, FiVideo } from 'react-icons/fi';

const MentorSessionPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const session = {
    id: id,
    title: 'Live Q&A Session - JavaScript',
    description: 'Join me for a live Q&A session where we\'ll answer your JavaScript questions and solve coding challenges together.',
    date: '2023-06-15T18:00:00',
    duration: '90 mins',
    category: 'Web Development',
    price: 'Free',
    registeredStudents: 24,
    maxStudents: 50,
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    status: 'upcoming',
    meetingLink: 'https://meet.example.com/js-qa-june15'
  };
  
  const students = [
    { id: 1, name: 'Ahmed Ben Ali', email: 'ahmed.benali@example.com', registeredDate: 'May 20, 2023' },
    { id: 2, name: 'Fatma Ksontini', email: 'fatma.ksontini@example.com', registeredDate: 'May 18, 2023' },
    { id: 3, name: 'Mohamed Trabelsi', email: 'mohamed.trabelsi@example.com', registeredDate: 'May 15, 2023' },
    { id: 4, name: 'Amina Hammami', email: 'amina.hammami@example.com', registeredDate: 'May 22, 2023' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/mentor/sessions" className="inline-flex items-center text-teal-600 hover:text-teal-800">
            <FiArrowLeft className="mr-2" /> Back to Sessions
          </Link>
        </div>
        
        {/* Session Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="p-6 sm:flex sm:items-start">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <img className="w-40 h-40 object-cover rounded-lg" src={session.thumbnail} alt={session.title} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{session.title}</h1>
                  <p className="mt-1 text-gray-600">{session.category}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                  session.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {session.status === 'upcoming' ? 'Upcoming' : session.status === 'completed' ? 'Completed' : 'Cancelled'}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
                  {new Date(session.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1.5 h-4 w-4 text-gray-400" />
                  {session.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiUsers className="mr-1.5 h-4 w-4 text-gray-400" />
                  {session.registeredStudents}/{session.maxStudents} registered
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={`/mentor/sessions/${session.id}/edit`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 mr-3"
                >
                  <FiEdit className="mr-2" /> Edit Session
                </Link>
                <button
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FiTrash2 className="mr-2" /> Cancel Session
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
                onClick={() => setActiveTab('resources')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'resources' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Resources
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Session Description</h2>
              <p className="text-gray-600 mb-6">{session.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Session Details</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">Date & Time:</span> {new Date(session.date).toLocaleString()}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Duration:</span> {session.duration}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Price:</span> {session.price}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Meeting Link:</span> 
                      <a href={session.meetingLink} className="text-teal-600 hover:text-teal-800 ml-1">{session.meetingLink}</a>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                      <FiVideo className="mr-2" /> Start Session
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-teal-500 text-sm font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50">
                      Share Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'students' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Registered Students</h2>
              
              {students.length === 0 ? (
                <div className="text-center py-12">
                  <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No students registered yet</h3>
                  <p className="mt-1 text-gray-500">Students will appear here once they register for your session</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Registered Date
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{student.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.registeredDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-teal-600 hover:text-teal-900 mr-3">
                              Message
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Session Resources</h2>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                  <FiPlus className="mr-1" /> Add Resource
                </button>
              </div>
              
              <div className="text-center py-12">
                <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No resources added yet</h3>
                <p className="mt-1 text-gray-500">Add files, links or materials for your students</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorSessionPage;