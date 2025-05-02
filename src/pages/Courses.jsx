import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    price: 'all',
    duration: 'all',
    sort: 'most-popular'
  })

  const categories = ['All', 'Development', 'Design', 'Business', 'Data Science', 'Marketing']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const prices = ['All', 'Free', 'Paid']
  const durations = ['All', '0-4 weeks', '4-8 weeks', '8+ weeks']
  const sortOptions = [
    { value: 'most-popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'highest-rated', label: 'Highest Rated' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' }
  ]

  useEffect(() => {
    // Simulate API fetch
    const fetchCourses = async () => {
      try {
        // Replace with actual API call
        const mockCourses = [
          {
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
            isNew: true,
            isFeatured: true
          },
          {
            id: 2,
            title: 'UX/UI Design Masterclass',
            instructor: 'Chams Mhamdi',
            price: 149,
            rating: 4.8,
            students: 890,
            duration: '6 weeks',
            category: 'Design',
            level: 'Intermediate',
            thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 3,
            title: 'Data Science Fundamentals',
            instructor: 'Moez Souidi',
            price: 249,
            rating: 4.7,
            students: 1100,
            duration: '10 weeks',
            category: 'Data Science',
            level: 'Beginner',
            thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            isFeatured: true
          },
          {
            id: 4,
            title: 'Digital Marketing Strategy',
            instructor: 'Zrafi Abd-Slam',
            price: 99,
            rating: 4.6,
            students: 750,
            duration: '4 weeks',
            category: 'Marketing',
            level: 'Beginner',
            thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 5,
            title: 'Python for Beginners',
            instructor: 'Moez Souidi',
            price: 0,
            rating: 4.5,
            students: 2300,
            duration: '5 weeks',
            category: 'Development',
            level: 'Beginner',
            thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            isNew: true
          },
          {
            id: 6,
            title: 'Advanced JavaScript Patterns',
            instructor: 'Zrafi Abd-Slam',
            price: 179,
            rating: 4.9,
            students: 680,
            duration: '7 weeks',
            category: 'Development',
            level: 'Advanced',
            thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
          }
        ]
        setCourses(mockCourses)
        setFilteredCourses(mockCourses)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  useEffect(() => {
    let results = [...courses]
    
    if (filters.category !== 'all') {
      results = results.filter(course => course.category === filters.category)
    }
    
    if (filters.level !== 'all') {
      results = results.filter(course => course.level === filters.level)
    }
    
    if (filters.price !== 'all') {
      results = filters.price === 'Free' 
        ? results.filter(course => course.price === 0)
        : results.filter(course => course.price > 0)
    }
    
    if (filters.duration !== 'all') {
      const [min, max] = filters.duration.split('-').map(Number)
      results = results.filter(course => {
        const weeks = parseInt(course.duration)
        if (max) return weeks >= min && weeks < max
        return weeks >= min
      })
    }

    // Apply sorting
    switch (filters.sort) {
      case 'newest':
        results.sort((a, b) => b.id - a.id) // Using ID as proxy for newness
        break
      case 'highest-rated':
        results.sort((a, b) => b.rating - a.rating)
        break
      case 'price-low-high':
        results.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        results.sort((a, b) => b.price - a.price)
        break
      default: // most-popular
        results.sort((a, b) => b.students - a.students)
    }
    
    setFilteredCourses(results)
  }, [filters, courses])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const FilterDropdown = ({ title, options, filterKey }) => {
    const [open, setOpen] = useState(false)
    
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between px-4 py-2 rounded-lg border ${filters[filterKey] !== 'all' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'} transition-colors`}
        >
          <span className="text-sm font-medium">
            {title}: {filters[filterKey] === 'all' ? 'All' : filters[filterKey]}
          </span>
          {open ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
        </button>
        
        {open && (
          <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1 ">
            {options.map(option => (
              <button
                key={option}
                onClick={() => {
                  handleFilterChange(filterKey, option.toLowerCase())
                  setOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${filters[filterKey] === option.toLowerCase() ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Explore Our Courses
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Find the perfect course to advance your career
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile filter dialog */}
        <div className={`fixed inset-0 z-40 lg:hidden ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-400 hover:text-gray-500">
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-4 mt-16">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Category</h3>
                <div className="mt-2 space-y-2">
                  {categories.map(cat => (
                    <div key={cat} className="flex items-center">
                      <input
                        id={`mobile-category-${cat}`}
                        name="category"
                        type="radio"
                        checked={filters.category === cat.toLowerCase()}
                        onChange={() => handleFilterChange('category', cat.toLowerCase())}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={`mobile-category-${cat}`} className="ml-3 text-sm text-gray-700">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Level</h3>
                <div className="mt-2 space-y-2">
                  {levels.map(level => (
                    <div key={level} className="flex items-center">
                      <input
                        id={`mobile-level-${level}`}
                        name="level"
                        type="radio"
                        checked={filters.level === level.toLowerCase()}
                        onChange={() => handleFilterChange('level', level.toLowerCase())}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={`mobile-level-${level}`} className="ml-3 text-sm text-gray-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Price</h3>
                <div className="mt-2 space-y-2">
                  {prices.map(price => (
                    <div key={price} className="flex items-center">
                      <input
                        id={`mobile-price-${price}`}
                        name="price"
                        type="radio"
                        checked={filters.price === price.toLowerCase()}
                        onChange={() => handleFilterChange('price', price.toLowerCase())}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={`mobile-price-${price}`} className="ml-3 text-sm text-gray-700">
                        {price}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Duration</h3>
                <div className="mt-2 space-y-2">
                  {durations.map(duration => (
                    <div key={duration} className="flex items-center">
                      <input
                        id={`mobile-duration-${duration}`}
                        name="duration"
                        type="radio"
                        checked={filters.duration === duration.toLowerCase()}
                        onChange={() => handleFilterChange('duration', duration.toLowerCase())}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={`mobile-duration-${duration}`} className="ml-3 text-sm text-gray-700">
                        {duration}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter/Sort Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Mobile filter button */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FiFilter className="mr-2" />
              Filters
            </button>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center space-x-4">
              <FilterDropdown title="Category" options={categories} filterKey="category" />
              <FilterDropdown title="Level" options={levels} filterKey="level" />
              <FilterDropdown title="Price" options={prices} filterKey="price" />
              <FilterDropdown title="Duration" options={durations} filterKey="duration" />
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={filters.sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Active filters */}
          {(filters.category !== 'all' || filters.level !== 'all' || filters.price !== 'all' || filters.duration !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.category !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  Category: {filters.category}
                  <button
                    onClick={() => handleFilterChange('category', 'all')}
                    className="ml-1.5 inline-flex text-teal-600 hover:text-teal-900"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.level !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  Level: {filters.level}
                  <button
                    onClick={() => handleFilterChange('level', 'all')}
                    className="ml-1.5 inline-flex text-teal-600 hover:text-teal-900"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.price !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  Price: {filters.price}
                  <button
                    onClick={() => handleFilterChange('price', 'all')}
                    className="ml-1.5 inline-flex text-teal-600 hover:text-teal-900"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.duration !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  Duration: {filters.duration}
                  <button
                    onClick={() => handleFilterChange('duration', 'all')}
                    className="ml-1.5 inline-flex text-teal-600 hover:text-teal-900"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-700">
            Showing <span className="font-semibold">{filteredCourses.length}</span> courses
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your filters</p>
            <button
              onClick={() => setFilters({
                category: 'all',
                level: 'all',
                price: 'all',
                duration: 'all',
                sort: 'most-popular'
              })}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {course.isNew && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                    {course.isFeatured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Featured
                      </span>
                    )}
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        <Link to={`/courses/${course.id}`} className="hover:text-teal-600">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">By {course.instructor}</p>
                    </div>
                    {course.price > 0 ? (
                      <div className="text-right">
                        <span className="text-md font-bold text-teal-600">TND{course.price}</span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Free
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${star <= Math.round(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          {course.rating} <span className="text-gray-400">({course.students})</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/courses/${course.id}`}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses