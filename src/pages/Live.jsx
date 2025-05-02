import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiFilter, FiX, FiChevronDown, FiChevronUp, FiCalendar, FiClock } from 'react-icons/fi'

const LiveSessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [filter, setFilter] = useState('all')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const sessions = {
    upcoming: [
      {
        id: 1,
        title: 'Advanced JavaScript Patterns',
        instructor: 'Moez Souidi',
        date: '2023-06-15T18:00:00',
        duration: '90 mins',
        category: 'Development',
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        registered: true,
        isFeatured: true
      },
      {
        id: 2,
        title: 'UX Design Principles Workshop',
        instructor: 'Emma Rodriguez',
        date: '2023-06-18T14:00:00',
        duration: '120 mins',
        category: 'Design',
        thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        registered: false
      },
      {
        id: 3,
        title: 'Data Science Career Panel',
        instructor: 'Michael Chen',
        date: '2023-06-22T16:30:00',
        duration: '60 mins',
        category: 'Data Science',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        registered: false,
        isNew: true
      }
    ],
    past: [
      {
        id: 4,
        title: 'React Hooks Deep Dive',
        instructor: 'Mike Chen',
        date: '2023-05-20T16:30:00',
        duration: '120 mins',
        category: 'Development',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        recordingAvailable: true
      },
      {
        id: 5,
        title: 'Digital Marketing Trends 2023',
        instructor: 'Jordan Lee',
        date: '2023-05-15T11:00:00',
        duration: '90 mins',
        category: 'Business',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        recordingAvailable: true
      }
    ]
  }

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Business']

  const filteredSessions = sessions[activeTab].filter(session => {
    if (filter === 'all') return true
    return session.category === filter
  })

  const FilterDropdown = ({ title, options, filterKey, currentValue }) => {
    const [open, setOpen] = useState(false)
    
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between px-4 py-2 rounded-lg border ${currentValue !== 'all' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'} transition-colors`}
        >
          <span className="text-sm font-medium">
            {title}: {currentValue === 'all' ? 'All' : currentValue}
          </span>
          {open ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
        </button>
        
        {open && (
          <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
            {options.map(option => (
              <button
                key={option}
                onClick={() => {
                  setFilter(option.toLowerCase())
                  setOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${currentValue === option.toLowerCase() ? 'bg-teal-100 text-teal-800' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Live Learning Sessions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Interactive sessions with expert instructors
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
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Category</h3>
                <div className="mt-2 space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`mobile-category-${category}`}
                        name="category"
                        type="radio"
                        checked={filter === category.toLowerCase()}
                        onChange={() => setFilter(category.toLowerCase())}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={`mobile-category-${category}`} className="ml-3 text-sm text-gray-700">
                        {category}
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
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Upcoming Sessions
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'past' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Past Sessions
                </button>
              </nav>
            </div>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center space-x-4">
              <FilterDropdown 
                title="Category" 
                options={categories} 
                filterKey="category" 
                currentValue={filter}
              />
            </div>

            {/* Mobile filter button */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Active filters */}
          {filter !== 'all' && (
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                Category: {filter}
                <button
                  onClick={() => setFilter('all')}
                  className="ml-1.5 inline-flex text-teal-600 hover:text-teal-900"
                >
                  <FiX className="h-3 w-3" />
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-700">
            Showing <span className="font-semibold">{filteredSessions.length}</span> {activeTab === 'upcoming' ? 'upcoming' : 'past'} sessions
          </p>
        </div>

        {/* Sessions Grid */}
        {filteredSessions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">No sessions found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your filters</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map(session => (
              <div key={session.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <img
                    src={session.thumbnail}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    {session.isNew && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New
                      </span>
                    )}
                    {session.isFeatured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Featured
                      </span>
                    )}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {session.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    <Link to={`/live/${session.id}/watch`} className="hover:text-teal-600">
                      {session.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">By {session.instructor}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FiCalendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {new Date(session.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FiClock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {session.duration}
                  </div>

                  <div className="mt-6">
                    {activeTab === 'upcoming' ? (
                      session.registered ? (
                        <Link
                          to={`/live/${session.id}`}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Join Session
                        </Link>
                      ) : (
                        <Link 
                        to={`/live/${session.id}/register`}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900">
                          Register Now
                        </Link>
                      )
                    ) : (
                      session.recordingAvailable ? (
                        <Link
                          to={`/live/${session.id}`}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Watch Recording
                        </Link>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Recording Coming Soon
                        </span>
                      )
                    )}
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

export default LiveSessions