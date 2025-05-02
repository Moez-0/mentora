import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiBook, FiClock, FiAward, FiCheckCircle, FiPlay } from 'react-icons/fi'

const MyCoursesPage = () => {
  const [activeTab, setActiveTab] = useState('in-progress')

  const courses = {
    'in-progress': [
      {
        id: 1,
        title: 'Advanced JavaScript Patterns',
        instructor: 'Moez Souidi',
        progress: 65,
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        lastAccessed: '2 days ago',
        totalLessons: 24,
        completedLessons: 16
      },
      {
        id: 2,
        title: 'React Native Fundamentals',
        instructor: 'Mike Chen',
        progress: 30,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        lastAccessed: '1 week ago',
        totalLessons: 18,
        completedLessons: 6
      }
    ],
    completed: [
      {
        id: 3,
        title: 'JavaScript Basics',
        instructor: 'Emma Davis',
        progress: 100,
        thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        completedDate: 'May 15, 2023',
        certificateAvailable: true
      },
      {
        id: 4,
        title: 'CSS Masterclass',
        instructor: 'Alex Johnson',
        progress: 100,
        thumbnail: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        completedDate: 'April 2, 2023',
        certificateAvailable: true
      }
    ],
    wishlist: [
      {
        id: 5,
        title: 'Node.js Backend Development',
        instructor: 'David Wilson',
        price: 149,
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 6,
        title: 'UI/UX Design Principles',
        instructor: 'Jordan Lee',
        price: 99,
        thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10">
            <h1 className="text-3xl font-bold text-white">My Courses</h1>
            <p className="mt-2 text-teal-100">Track your learning progress and achievements</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('in-progress')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'in-progress' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'completed' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'wishlist' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Wishlist
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10">
            {courses[activeTab].length === 0 ? (
              <div className="text-center py-12">
                <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {activeTab === 'in-progress' ? 'No courses in progress' : 
                   activeTab === 'completed' ? 'No completed courses' : 'Your wishlist is empty'}
                </h3>
                <p className="mt-1 text-gray-500">
                  {activeTab === 'in-progress' ? 'Start learning by browsing our courses' : 
                   activeTab === 'completed' ? 'Complete some courses to see them here' : 'Add courses to your wishlist to save them for later'}
                </p>
                <div className="mt-6">
                  <Link
                    to="/courses"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Browse Courses
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses[activeTab].map(course => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="relative h-40 w-full">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {activeTab === 'in-progress' && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs mt-1">
                            <span>{course.progress}% complete</span>
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        <Link to={`/courses/${course.id}`} className="hover:text-teal-600">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">By {course.instructor}</p>
                      
                      {activeTab === 'in-progress' && (
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          Last accessed {course.lastAccessed}
                        </div>
                      )}
                      
                      {activeTab === 'completed' && (
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <FiCheckCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500" />
                            Completed on {course.completedDate}
                          </div>
                          {course.certificateAvailable && (
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                              View Certificate
                            </button>
                          )}
                        </div>
                      )}
                      
                      {activeTab === 'wishlist' && (
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-lg font-bold text-teal-600">TND{course.price}</span>
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900">
                            Enroll Now
                          </button>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <Link
                          to={`/courses/${course.id}`}
                          className={`w-full flex items-center justify-center px-4 py-2 border ${activeTab === 'wishlist' ? 'border-transparent bg-teal-600 text-white hover:bg-teal-700' : 'border-teal-500 text-teal-600 hover:bg-teal-50'} rounded-md shadow-sm text-sm font-medium`}
                        >
                          {activeTab === 'in-progress' ? (
                            <>
                              <FiPlay className="mr-2 h-4 w-4" />
                              Continue Learning
                            </>
                          ) : activeTab === 'completed' ? (
                            'View Course'
                          ) : (
                            'Learn More'
                          )}
                        </Link>
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

export default MyCoursesPage