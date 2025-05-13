import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CourseDetails = () => {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // TO DO CONSUME ML API 
        const mockCourse = {
          id: 1,
          title: 'Complete Web Development Bootcamp',
          instructor: 'Moez Souidi',
          price: 199,
          rating: 4.9,
          students: 50,
          duration: '8 weeks',
          category: 'Development',
          level: 'Beginner',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          description: 'Become a full-stack developer with this comprehensive bootcamp that covers HTML, CSS, JavaScript, React, Node.js, and more.',
          syllabus: [
            { week: 1, title: 'HTML & CSS Fundamentals', topics: ['HTML5', 'CSS3', 'Responsive Design'] },
            { week: 2, title: 'JavaScript Basics', topics: ['Variables', 'Functions', 'DOM Manipulation'] },
         
          ],
          requirements: ['Basic computer skills', 'No prior programming experience needed'],
          instructorBio: 'Web Developer. Passionate about teaching and sharing knowledge.',
        }
        setCourse(mockCourse)
      } catch (error) {
        console.error('Error fetching course:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [id])

  if (loading) return <div className="text-center py-12">Loading course details...</div>
  if (!course) return <div className="text-center py-12">Course not found</div>

  return (
    <div className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
         
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-extrabold text-gray-900">{course.title}</h1>
            <p className="mt-2 text-xl text-gray-600">By {course.instructor}</p>
            
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-gray-700">
                  {course.rating} <span className="text-gray-500">({course.students} students)</span>
                </span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-700">{course.duration}</span>
              <span className="text-gray-500">|</span>
              <span className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                {course.level}
              </span>
            </div>

            <div className="mt-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('syllabus')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'syllabus' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Syllabus
                  </button>
                  <button
                    onClick={() => setActiveTab('instructor')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'instructor' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Reviews
                  </button>
                </nav>
              </div>

              <div className="mt-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">About this course</h3>
                    <p className="mt-4 text-gray-600">{course.description}</p>
                    
                    <h3 className="mt-8 text-lg font-medium text-gray-900">What you'll learn</h3>
                    <ul className="mt-4 space-y-3">
                      {course.syllabus.flatMap(week => week.topics).slice(0, 5).map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Requirements</h3>
                    <ul className="mt-4 space-y-2">
                      {course.requirements.map((req, i) => (
                        <li key={i} className="text-gray-600">• {req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'syllabus' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Course Content</h3>
                    <div className="mt-6 space-y-4">
                      {course.syllabus.map((week, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100">
                            <span className="font-medium text-gray-900">Week {week.week}: {week.title}</span>
                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <div className="p-4 border-t border-gray-200">
                            <ul className="space-y-2">
                              {week.topics.map((topic, j) => (
                                <li key={j} className="flex items-start">
                                  <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-600">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">About the instructor</h3>
                    <div className="mt-6 flex items-start">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                          alt={course.instructor}
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">{course.instructor}</h4>
                        <p className="text-gray-600 mt-1">{course.instructorBio}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Student Reviews</h3>
                    <div className="mt-6 space-y-6">
                  
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                              alt="Reviewer"
                            />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-gray-900">Moez Souidi</h4>
                            <div className="flex items-center mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                              good course
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-6">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                {course.price > 0 ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <span className="ml-1 text-lg text-gray-500">TND</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">Free</span>
                )}
              </div>

              <div className="mt-6 space-y-4">
                
              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                 <Link to={`/courses/${course.id}/checkout`} className="w-full flex justify-center">
                  Enroll Now
                </Link>
                </button>
                <button className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">This course includes:</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm text-gray-600">30 hours on-demand video</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">15 articles</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm text-gray-600">Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm text-gray-600">Full lifetime access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails