import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiPlay, FiCheckCircle, FiBookOpen, FiDownload, FiAward } from 'react-icons/fi'

const CourseLearnPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('content')
  const [completedLessons, setCompletedLessons] = useState([1, 2, 3]) 

  // TO DO CONSUME ML API
  const course = {
    id: id,
    title: 'Advanced JavaScript Patterns',
    instructor: 'Moez Souidi',
    description: 'Master advanced JavaScript concepts including closures, prototypes, design patterns, and performance optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    progress: 65,
    sections: [
      {
        id: 1,
        title: 'Getting Started',
        lessons: [
          { id: 1, title: 'Introduction to Advanced JS', duration: '12:45', videoId: 'abc123' },
          { id: 2, title: 'Setting Up Environment', duration: '8:30', videoId: 'def456' },
          { id: 3, title: 'Tooling Overview', duration: '15:20', videoId: 'ghi789' }
        ]
      },
      {
        id: 2,
        title: 'Core Concepts',
        lessons: [
          { id: 4, title: 'Closures Deep Dive', duration: '22:10', videoId: 'jkl012' },
          { id: 5, title: 'Prototypal Inheritance', duration: '18:45', videoId: 'mno345' }
        ]
      },
      {
        id: 3,
        title: 'Design Patterns',
        lessons: [
          { id: 6, title: 'Module Pattern', duration: '14:20', videoId: 'pqr678' },
          { id: 7, title: 'Revealing Module Pattern', duration: '16:50', videoId: 'stu901' }
        ]
      }
    ],
    resources: [
      { id: 1, title: 'Course Slides PDF', type: 'pdf', url: '#' },
      { id: 2, title: 'Exercise Files', type: 'zip', url: '#' }
    ]
  }

  const toggleLessonComplete = (lessonId) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId))
    } else {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Course Content</h3>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
                </div>
              </div>
              
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                {course.sections.map(section => (
                  <div key={section.id} className="border-b border-gray-200">
                    <div className="p-4 bg-gray-50">
                      <h4 className="font-medium text-gray-900">{section.title}</h4>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      {section.lessons.map(lesson => (
                        <li key={lesson.id}>
                          <Link
                            to={`/courses/${course.id}/learn/${lesson.videoId}`}
                            className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 ${completedLessons.includes(lesson.id) ? 'bg-teal-50' : ''}`}
                          >
                            <div className="flex items-center">
                              <FiPlay className={`h-4 w-4 ${completedLessons.includes(lesson.id) ? 'text-teal-500' : 'text-gray-400'}`} />
                              <span className={`ml-3 ${completedLessons.includes(lesson.id) ? 'text-teal-700 font-medium' : 'text-gray-700'}`}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-500 mr-3">{lesson.duration}</span>
                              {completedLessons.includes(lesson.id) ? (
                                <FiCheckCircle className="h-5 w-5 text-teal-500" />
                              ) : null}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Resources</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {course.resources.map(resource => (
                  <li key={resource.id}>
                    <a
                      href={resource.url}
                      download
                      className="flex items-center px-4 py-3 hover:bg-gray-50"
                    >
                      <FiDownload className="h-5 w-5 text-gray-400" />
                      <span className="ml-3 text-gray-700">{resource.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Video Player */}
              <div className="bg-black aspect-w-16 aspect-h-9">
                <iframe

                  src='https://www.youtube.com/embed/tJCSxhm3Cc0'
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                    <p className="text-gray-600 mt-1">By {course.instructor}</p>
                  </div>
                  <button
                    onClick={() => toggleLessonComplete(course.sections[0].lessons[0].id)}
                    className={`inline-flex items-center px-4 py-2 border ${completedLessons.includes(course.sections[0].lessons[0].id) ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-gray-300 text-gray-700'} rounded-md shadow-sm text-sm font-medium`}
                  >
                    {completedLessons.includes(course.sections[0].lessons[0].id) ? (
                      <>
                        <FiCheckCircle className="mr-2 h-4 w-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        <FiCheckCircle className="mr-2 h-4 w-4" />
                        Mark Complete
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mt-6">
                  <nav className="-mb-px flex">
                    <button
                      onClick={() => setActiveTab('content')}
                      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'content' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                      <FiBookOpen className="inline mr-2" />
                      Course Content
                    </button>
                    <button
                      onClick={() => setActiveTab('resources')}
                      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'resources' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                      <FiDownload className="inline mr-2" />
                      Resources
                    </button>
                    <button
                      onClick={() => setActiveTab('certificate')}
                      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'certificate' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                      <FiAward className="inline mr-2" />
                      Certificate
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="py-6">
                  {activeTab === 'content' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">About This Course</h3>
                      <p className="text-gray-700">{course.description}</p>
                      
                      <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Current Lesson: {course.sections[0].lessons[0].title}</h3>
                      <p className="text-gray-700">This lesson covers the fundamental concepts needed to understand advanced JavaScript patterns.</p>
                    </div>
                  )}
                  
                  {activeTab === 'resources' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Downloadable Resources</h3>
                      <ul className="divide-y divide-gray-200">
                        {course.resources.map(resource => (
                          <li key={resource.id} className="py-3">
                            <div className="flex items-center">
                              <FiDownload className="h-5 w-5 text-gray-400" />
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                                <p className="text-sm text-gray-500">{resource.type.toUpperCase()} File</p>
                              </div>
                              <div className="ml-auto">
                                <a
                                  href={resource.url}
                                  download
                                  className="text-sm font-medium text-teal-600 hover:text-teal-500"
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'certificate' && (
                    <div className="text-center py-8">
                      <FiAward className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium text-gray-900">Certificate of Completion</h3>
                      <p className="mt-2 text-gray-600">
                        Complete all lessons to unlock your certificate
                      </p>
                      <div className="mt-6">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-teal-500 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{course.progress}% complete</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Discussion/Comments */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Discussion</h2>
                <div className="border border-gray-200 rounded-lg p-4">
                  <textarea
                    rows="3"
                    className="block w-full border-0 resize-none focus:ring-0 sm:text-sm"
                    placeholder="Ask a question or share your thoughts..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseLearnPage