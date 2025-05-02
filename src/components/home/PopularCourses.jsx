import { Link } from 'react-router-dom'

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      instructor: 'Moez Souidi',
      price: 199,
      rating: 4.9,
      students: 50,
      duration: '8 weeks',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Moez Souidi',
      price: 249,
      rating: 4.8,
      students: 980,
      duration: '10 weeks',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'UX/UI Design Masterclass',
      instructor: 'Chams Mhamdi',
      price: 179,
      rating: 4.7,
      students: 850,
      duration: '6 weeks',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Jordan Lee',
      price: 159,
      rating: 4.6,
      students: 1200,
      duration: '5 weeks',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Popular Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Start learning from industry experts with these top-rated courses
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="group relative">
              <div className="relative w-full h-56 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-center"
                />
                {course.featured && (
                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link to={`/courses/${course.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {course.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{course.instructor}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-teal-600">TND{course.price}</p>
                  {course.price > 199 && (
                    <p className="text-xs line-through text-gray-400">TND{course.price + 50}</p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-gray-600">
                    {course.rating} <span className="text-gray-400">({course.students})</span>
                  </span>
                </div>
                <div className="text-sm text-gray-500">{course.duration}</div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                >
                  View course
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800"
          >
            Browse all courses
            <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursesSection