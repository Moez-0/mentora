import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiBook, FiUsers, FiClock, FiEdit, FiTrash2, FiPlus, FiArrowLeft, FiAward, FiX, FiVideo, FiFileText, FiDownload } from 'react-icons/fi';

const MentorCoursePage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showModuleModal, setShowModuleModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [newModule, setNewModule] = useState({ title: '' });
  const [newLesson, setNewLesson] = useState({ title: '', duration: '', type: 'video' });
  const [newResource, setNewResource] = useState({ title: '', type: 'pdf', url: '' });
  const [selectedModule, setSelectedModule] = useState(null);

  // Mock data - TO BE REPLACED WITH API CALL
  const course = {
    id: id,
    title: 'Advanced JavaScript Patterns',
    description: 'Master advanced JavaScript concepts including closures, prototypes, design patterns, and performance optimization techniques.',
    instructor: 'Moez Souidi',
    category: 'Web Development',
    level: 'Advanced',
    price: 'TND 149',
    students: 42,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    lastUpdated: '2 days ago',
    totalLessons: 24,
    published: true,
    resources: [
      { id: 1, title: 'Course Slides', type: 'pdf', url: '#' },
      { id: 2, title: 'Exercise Files', type: 'zip', url: '#' }
    ]
  };
  
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Getting Started with Advanced JS',
      lessons: [
        { id: 1, title: 'Course Introduction', duration: '15 min', type: 'video' },
        { id: 2, title: 'Setting Up Environment', duration: '20 min', type: 'video' },
        { id: 3, title: 'JavaScript Engine Overview', duration: '25 min', type: 'video' }
      ]
    },
    {
      id: 2,
      title: 'Closures and Scopes',
      lessons: [
        { id: 4, title: 'Understanding Scopes', duration: '30 min', type: 'video' },
        { id: 5, title: 'Closures in Depth', duration: '35 min', type: 'video' },
        { id: 6, title: 'Practical Examples', duration: '25 min', type: 'video' },
        { id: 7, title: 'Exercise: Closure Patterns', duration: '45 min', type: 'exercise' }
      ]
    }
  ]);
  
  const students = [
    { id: 1, name: 'Ahmed Ben Ali', email: 'ahmed.benali@example.com', progress: 85, lastAccessed: '2 days ago' },
    { id: 2, name: 'Fatma Ksontini', email: 'fatma.ksontini@example.com', progress: 72, lastAccessed: '1 week ago' },
    { id: 3, name: 'Mohamed Trabelsi', email: 'mohamed.trabelsi@example.com', progress: 45, lastAccessed: '3 days ago' },
    { id: 4, name: 'Amina Hammami', email: 'amina.hammami@example.com', progress: 93, lastAccessed: '1 day ago' }
  ];
  
  const reviews = [
    { id: 1, student: 'Ahmed Ben Ali', rating: 5, comment: 'Excellent course with deep insights into advanced JavaScript concepts.', date: 'May 15, 2023' },
    { id: 2, student: 'Fatma Ksontini', rating: 4, comment: 'Very informative, but some sections could use more practical examples.', date: 'May 10, 2023' }
  ];

  const handleAddModule = () => {
    if (!newModule.title.trim()) return;
    
    const module = {
      id: modules.length + 1,
      title: newModule.title,
      lessons: []
    };
    
    setModules([...modules, module]);
    setNewModule({ title: '' });
    setShowModuleModal(false);
  };

  const handleAddLesson = () => {
    if (!newLesson.title.trim() || !selectedModule) return;
    
    const lesson = {
      id: Date.now(),
      title: newLesson.title,
      duration: newLesson.duration || '0 min',
      type: newLesson.type
    };
    
    const updatedModules = modules.map(module => {
      if (module.id === selectedModule) {
        return {
          ...module,
          lessons: [...module.lessons, lesson]
        };
      }
      return module;
    });
    
    setModules(updatedModules);
    setNewLesson({ title: '', duration: '', type: 'video' });
    setShowLessonModal(false);
    setSelectedModule(null);
  };

  const handleAddResource = () => {
    if (!newResource.title.trim() || !newResource.url.trim()) return;
    
    const resource = {
      id: Date.now(),
      title: newResource.title,
      type: newResource.type,
      url: newResource.url
    };
    
    // In a real app, you would update the course.resources state here
    alert(`Resource "${newResource.title}" added successfully!`);
    setNewResource({ title: '', type: 'pdf', url: '' });
    setShowResourceModal(false);
  };

  const deleteModule = (moduleId) => {
    if (window.confirm('Are you sure you want to delete this module and all its lessons?')) {
      setModules(modules.filter(module => module.id !== moduleId));
    }
  };

  const deleteLesson = (moduleId, lessonId) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
        };
      }
      return module;
    });
    setModules(updatedModules);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Add Module Modal */}
      {showModuleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Module</h3>
              <button onClick={() => setShowModuleModal(false)} className="text-gray-400 hover:text-gray-500">
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="module-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Module Title
                </label>
                <input
                  type="text"
                  id="module-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={newModule.title}
                  onChange={(e) => setNewModule({ title: e.target.value })}
                  placeholder="Enter module title"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowModuleModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddModule}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                >
                  Add Module
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Lesson</h3>
              <button onClick={() => setShowLessonModal(false)} className="text-gray-400 hover:text-gray-500">
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="lesson-module" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Module
                </label>
                <select
                  id="lesson-module"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={selectedModule || ''}
                  onChange={(e) => setSelectedModule(Number(e.target.value))}
                >
                  <option value="">Select a module</option>
                  {modules.map(module => (
                    <option key={module.id} value={module.id}>{module.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="lesson-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Lesson Title
                </label>
                <input
                  type="text"
                  id="lesson-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={newLesson.title}
                  onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                  placeholder="Enter lesson title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lesson-duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="lesson-duration"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={newLesson.duration}
                    onChange={(e) => setNewLesson({...newLesson, duration: e.target.value})}
                    placeholder="e.g. 15 min"
                  />
                </div>
                <div>
                  <label htmlFor="lesson-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    id="lesson-type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={newLesson.type}
                    onChange={(e) => setNewLesson({...newLesson, type: e.target.value})}
                  >
                    <option value="video">Video</option>
                    <option value="exercise">Exercise</option>
                    <option value="quiz">Quiz</option>
                    <option value="reading">Reading</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowLessonModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddLesson}
                  disabled={!selectedModule}
                  className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${!selectedModule ? 'bg-teal-400' : 'bg-teal-600 hover:bg-teal-700'}`}
                >
                  Add Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Resource Modal */}
      {showResourceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Resource</h3>
              <button onClick={() => setShowResourceModal(false)} className="text-gray-400 hover:text-gray-500">
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="resource-title" className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Title
                </label>
                <input
                  type="text"
                  id="resource-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={newResource.title}
                  onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                  placeholder="Enter resource title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    id="resource-type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={newResource.type}
                    onChange={(e) => setNewResource({...newResource, type: e.target.value})}
                  >
                    <option value="pdf">PDF</option>
                    <option value="zip">ZIP</option>
                    <option value="doc">Document</option>
                    <option value="link">Link</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="resource-url" className="block text-sm font-medium text-gray-700 mb-1">
                    URL/File
                  </label>
                  <input
                    type="text"
                    id="resource-url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={newResource.url}
                    onChange={(e) => setNewResource({...newResource, url: e.target.value})}
                    placeholder="Enter URL or upload file"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowResourceModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddResource}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                >
                  Add Resource
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/mentor/courses" className="inline-flex items-center text-teal-600 hover:text-teal-800">
            <FiArrowLeft className="mr-2" /> Back to Courses
          </Link>
        </div>
        
        {/* Course Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="p-6 sm:flex sm:items-start">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <img className="w-40 h-40 object-cover rounded-lg" src={course.thumbnail} alt={course.title} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                  <p className="mt-1 text-gray-600">{course.instructor}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${course.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {course.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiBook className="mr-1.5 h-4 w-4 text-gray-400" />
                  {course.category}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiUsers className="mr-1.5 h-4 w-4 text-gray-400" />
                  {course.students} students
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiAward className="mr-1.5 h-4 w-4 text-yellow-400" />
                  {course.rating} rating
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1.5 h-4 w-4 text-gray-400" />
                  Updated {course.lastUpdated}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to={`/mentor/courses/${course.id}/edit`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 mr-3"
                >
                  <FiEdit className="mr-2" /> Edit Course
                </Link>
                <button
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FiTrash2 className="mr-2" /> Delete
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
                onClick={() => setActiveTab('content')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'content' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Content
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'students' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'analytics' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Course Details</h3>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">Level:</span> {course.level}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Price:</span> {course.price}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Total Lessons:</span> {course.totalLessons}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-teal-500 text-sm font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50">
                      Preview Course
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                      Share Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'content' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Course Content</h2>
                <div className="space-x-3">
                  <button 
                    onClick={() => setShowModuleModal(true)}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FiPlus className="mr-1" /> Add Module
                  </button>
                  <button 
                    onClick={() => setShowLessonModal(true)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                  >
                    <FiPlus className="mr-1" /> Add Lesson
                  </button>
                  <button 
                    onClick={() => setShowResourceModal(true)}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FiDownload className="mr-1" /> Add Resource
                  </button>
                </div>
              </div>
              
              {modules.length === 0 ? (
                <div className="text-center py-12">
                  <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No content yet</h3>
                  <p className="mt-1 text-gray-500">Add modules and lessons to build your course</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {modules.map(module => (
                    <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-medium text-gray-900">{module.title}</h3>
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-teal-600">
                            
                            <Link to={`/mentor/courses/${course.id}/modules/${module.id}/edit`}>
                                <FiEdit className="h-4 w-4" />
                            </Link>
                          </button>
                          <button 
                            onClick={() => deleteModule(module.id)}
                            className="text-gray-500 hover:text-red-600"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {module.lessons.map(lesson => (
                          <div key={lesson.id} className="px-4 py-3 flex justify-between items-center">
                            <div className="flex items-center">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                lesson.type === 'video' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                              } mr-3`}>
                                {lesson.type}
                              </span>
                              <span className="text-sm font-medium text-gray-900">{lesson.title}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                              <button className="text-gray-500 hover:text-teal-600">
                                <Link to={`/mentor/courses/${course.id}/modules/${module.id}/lessons/${lesson.id}/edit`}>

                                <FiEdit className="h-4 w-4" />
                             
                                </Link>
                              </button>
                              <button 
                                onClick={() => deleteLesson(module.id, lesson.id)}
                                className="text-gray-500 hover:text-red-600"
                              >
                                <FiTrash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Resources Section */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Course Resources</h3>
                {course.resources.length === 0 ? (
                  <div className="text-center py-6 bg-gray-50 rounded-lg">
                    <FiDownload className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">No resources added yet</p>
                  </div>
                ) : (
                  <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                    {course.resources.map(resource => (
                      <li key={resource.id} className="px-4 py-3 flex justify-between items-center hover:bg-gray-50">
                        <div className="flex items-center">
                          <FiDownload className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-900">{resource.title}</span>
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {resource.type.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <a href={resource.url} download className="text-sm text-teal-600 hover:text-teal-500">
                            Download
                          </a>
                          <button className="text-gray-500 hover:text-red-600">
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'students' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Students Enrolled</h2>
              
              {students.length === 0 ? (
                <div className="text-center py-12">
                  <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No students enrolled yet</h3>
                  <p className="mt-1 text-gray-500">Students will appear here once they enroll in your course</p>
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
                          Progress
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Accessed
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
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-teal-600 h-2.5 rounded-full" 
                                  style={{ width: `${student.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-500">{student.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.lastAccessed}
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
        
        {activeTab === 'reviews' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Student Reviews</h2>
              
              {reviews.length === 0 ? (
                <div className="text-center py-12">
                  <FiAward className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No reviews yet</h3>
                  <p className="mt-1 text-gray-500">Reviews will appear here once students rate your course</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-md font-medium text-gray-900">{review.student}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'analytics' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Course Analytics</h2>
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <FiBook className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Analytics Dashboard</h3>
                <p className="mt-1 text-gray-500">View detailed analytics about your course performance</p>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                    View Full Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorCoursePage;