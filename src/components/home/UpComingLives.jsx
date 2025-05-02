
import React from 'react';
import { Link } from 'react-router-dom';



const LiveSessionsSection = () => {
    const sessions = [
      {
        id: 1,
        title: "Advanced JavaScript Patterns",
        instructor: "Moez Souidi",
        date: "2023-06-15",
        time: "18:00",
        duration: "90 mins",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Web Development"
      },
      {
        id: 2,
        title: "Data Visualization with Python",
        instructor: "Zrafi Abd-Slam",
        date: "2023-06-17",
        time: "16:30",
        duration: "120 mins",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Data Science"
      },
      {
        id: 3,
        title: "UX Design Principles",
        instructor: "Chams Mhamdi",
        date: "2023-06-20",
        time: "14:00",
        duration: "60 mins",
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        category: "Design"
      }
    ]
  
    return (
      <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Live Sessions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Interactive learning experiences with expert instructors
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {sessions.map((session) => (
              <div key={session.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {session.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-teal-500 rounded-md p-2">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {session.title}
                      </h3>
                      <p className="text-sm text-gray-500">With {session.instructor}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-600">
                        {new Date(session.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-600">
                        {session.time} ({session.duration})
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <Link
              to="/live"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800"
            >
              View all sessions
              <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  export default LiveSessionsSection