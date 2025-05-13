import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiPlus, FiSearch, FiFilter, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi';

const MentorCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const courses = [
    {
      id: 1,
      title: 'Advanced JavaScript Patterns',
      students: 42,
      rating: 4.8,
      price: 'TND 149',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: '2 days ago',
      status: 'published',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'React Native Fundamentals',
      students: 36,
      rating: 4.6,
      price: 'TND 129',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: '1 week ago',
      status: 'published',
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      students: 28,
      rating: 4.7,
      price: 'TND 99',
      thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: '3 weeks ago',
      status: 'published',
      category: 'Design'
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      students: 0,
      rating: 0,
      price: 'TND 159',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lastUpdated: 'Just now',
      status: 'draft',
      category: 'Web Development'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Courses' },
    { id: 'published', name: 'Published' },
    { id: 'draft', name: 'Drafts' },
    { id: 'popular', name: 'Popular' },
    { id: 'new', name: 'Newest' }
  ];

  const filteredCourses = courses.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'published' && course.status === 'published') ||
                         (activeFilter === 'draft' && course.status === 'draft') ||
                         (activeFilter === 'popular' && course.students > 30) ||
                         (activeFilter === 'new' && course.lastUpdated.includes('Just now') || course.lastUpdated.includes('days ago'));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="mt-2 text-gray-600">Manage and track your teaching courses</p>
            </div>
            <Link
              to="/mentor/courses/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
            >
              <FiPlus className="mr-2" /> Create Course
            </Link>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Filters and Search */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-64 mb-4 md:mb-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`whitespace-nowrap px-3 py-1 rounded-md text-sm font-medium ${activeFilter === filter.id ? 'bg-teal-100 text-teal-800' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Courses List */}
          <div className="p-6">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
                <p className="mt-1 text-gray-500">
                  {activeFilter === 'draft' ? 'You have no draft courses' : 
                   activeFilter === 'published' ? 'You have no published courses' : 
                   'Create your first course to get started'}
                </p>
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
                {filteredCourses.map(course => (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="relative h-40 w-full">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {course.status === 'draft' && (
                        <span className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-md">
                          Draft
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          <Link to={`/mentor/courses/${course.id}`} className="hover:text-teal-600">
                            {course.title}
                          </Link>
                        </h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                          {course.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FiUsers className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        {course.students} students
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        Updated {course.lastUpdated}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-teal-600">{course.price}</span>
                        <div className="flex space-x-2">
                          <Link
                            to={`/mentor/courses/${course.id}`}
                            className="inline-flex items-center px-3 py-1 border border-teal-500 text-xs font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50"
                          >
                            Manage
                          </Link>
                        </div>
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
                  <FiBook className="h-5 w-5 text-teal-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Total Courses</p>
                    <p className="text-lg font-semibold text-gray-900">{courses.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiUsers className="h-5 w-5 text-blue-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Total Students</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {courses.reduce((sum, course) => sum + course.students, 0)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiTrendingUp className="h-5 w-5 text-green-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Published</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {courses.filter(c => c.status === 'published').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-xs">
                <div className="flex items-center">
                  <FiFilter className="h-5 w-5 text-purple-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Drafts</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {courses.filter(c => c.status === 'draft').length}
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

export default MentorCoursesPage;