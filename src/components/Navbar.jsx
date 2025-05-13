import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, ChevronUp, User } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isUserOpen, setIsUserOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('TND')
  const location = useLocation()

  // TO DO: Replace with actual context/API calls
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [userRole, setUserRole] = useState('mentor') // 'student' or 'mentor'
  const [userData, setUserData] = useState({
    name: 'Chams Mhamdi',
    email: 'chams.mh@gmail.com',
    avatar: null
  })

  const resourcesRef = useRef(null)
  const currencyRef = useRef(null)
  const userRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Live Sessions', path: '/live' },
    { name: 'Pricing', path: '/pricing' },
    {
      name: 'Resources',
      subLinks: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
    { name: 'About', path: '/about' },
  ]

  // Add mentor-specific link if user is mentor
  if (userRole === 'mentor') {
    navLinks.splice(2, 0, { name: 'Mentor Dashboard', path: '/mentor/' })
  }

  const currencies = [
    { code: 'TND', name: 'Tunisian Dinar', symbol: 'DT' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
  ]

  const studentMenuItems = [
    { name: 'My Profile', path: '/profile', icon: User },
    { name: 'My Courses', path: '/my-courses', icon: null },
    { name: 'Live Sessions', path: '/my-live-sessions', icon: null },
    { name: 'Wishlist', path: '/wishlist', icon: null },
    { name: 'Settings', path: '/settings', icon: null },
    { name: 'Logout', path: '/login', icon: null },
  ]

  const mentorMenuItems = [
    { name: 'My Profile', path: '/profile', icon: User },
    { name: 'Dashboard', path: '/mentor/', icon: null },
    { name: 'My Courses', path: '/mentor/courses', icon: null },
    { name: 'My Sessions', path: '/mentor/sessions', icon: null },
    { name: 'Students', path: '/mentor/students', icon: null },
    { name: 'Earnings', path: '/mentor/earnings', icon: null },
    { name: 'Messages', path: '/mentor/messages', icon: null },
    { name: 'Settings', path: '/settings', icon: null },
    { name: 'Logout', path: '/login', icon: null },
  ]

  const closeAllDropdowns = () => {
    setIsResourcesOpen(false)
    setIsCurrencyOpen(false)
    setIsUserOpen(false)
    setIsOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    closeAllDropdowns()
    // TO DO: Add actual logout logic
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false)
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyOpen(false)
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsUserOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.classList.contains('mobile-menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-9 w-auto" src="/logo.svg" alt="Mentora" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" ref={link.subLinks ? resourcesRef : null}>
                {link.subLinks ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-1 py-2 text-sm font-medium ${
                        location.pathname.startsWith('/resources')
                          ? 'text-teal-600'
                          : 'text-gray-700 hover:text-teal-500'
                      }`}
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    >
                      {link.name}
                      {isResourcesOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 ${
                        isResourcesOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={closeAllDropdowns}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-1 py-2 text-sm font-medium ${
                      location.pathname === link.path
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-700 hover:text-teal-500'
                    }`}
                    onClick={closeAllDropdowns}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-md hover:bg-gray-50"
              >
                {selectedCurrency}
                {isCurrencyOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelectedCurrency(currency.code)
                        setIsCurrencyOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedCurrency === currency.code
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {currency.code} - {currency.symbol}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {isLoggedIn ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setIsUserOpen(!isUserOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-md hover:bg-gray-50"
                >
                  {userData.avatar ? (
                    <img 
                      src={userData.avatar} 
                      alt="User avatar" 
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <User size={16} />
                    </div>
                  )}
                  {isUserOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {isUserOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                      <p className="text-xs text-gray-500">{userData.email}</p>
                      {userRole === 'mentor' && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                          Mentor
                        </span>
                      )}
                    </div>
                    {(userRole === 'mentor' ? mentorMenuItems : studentMenuItems).map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                          if (item.name === 'Logout') {
                            handleLogout()
                          } else {
                            closeAllDropdowns()
                          }
                        }}
                        className={`flex items-center px-4 py-2 text-sm ${
                          item.name === 'Logout'
                            ? 'text-red-600 hover:bg-red-50'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-md hover:bg-gray-50"
                  onClick={closeAllDropdowns}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-1.5 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 transition ease-in-out shadow-sm rounded-md"
                  onClick={closeAllDropdowns}
                >
                  Create an Account
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg" ref={mobileMenuRef}>
          <div className="px-3 pt-3 pb-5 space-y-1 sm:px-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                    >
                      {link.name}
                      {isResourcesOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                    {isResourcesOpen && (
                      <div className="pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="block px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                            onClick={closeAllDropdowns}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-teal-600'
                    }`}
                    onClick={closeAllDropdowns}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-teal-600"
              >
                Currency ({selectedCurrency})
                {isCurrencyOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {isCurrencyOpen && (
                <div className="pl-4">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelectedCurrency(currency.code)
                        setIsCurrencyOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-1.5 rounded-md text-sm ${
                        selectedCurrency === currency.code
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {currency.code} - {currency.symbol}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 pb-2">
              {isLoggedIn ? (
                <>
                  <div className="px-3 py-2 mb-2 flex items-center space-x-3">
                    {userData.avatar ? (
                      <img 
                        src={userData.avatar} 
                        alt="User avatar" 
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                        <User size={18} />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                      <p className="text-xs text-gray-500">{userData.email}</p>
                      {userRole === 'mentor' && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                          Mentor
                        </span>
                      )}
                    </div>
                  </div>
                  {(userRole === 'mentor' ? mentorMenuItems : studentMenuItems).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        if (item.name === 'Logout') {
                          handleLogout()
                        } else {
                          closeAllDropdowns()
                        }
                      }}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        item.name === 'Logout'
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-teal-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 hover:text-teal-600 rounded-md hover:bg-gray-50"
                    onClick={closeAllDropdowns}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full px-4 py-2 mt-2 text-center text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-md hover:from-teal-700 hover:to-teal-600 shadow-sm"
                    onClick={closeAllDropdowns}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar