import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div>
        <img 
          src="/logo.svg" 
          alt="Not Found" 
          className="w-32 h-32 mb-4"
        />
      </div>
      <h1 className="text-7xl font-extrabold text-teal-700 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 text-lg mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
