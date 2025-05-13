
import React from 'react'
import { Link } from 'react-router-dom'


const FeaturesSection = () => {
  const features = [
    {
      name: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience and proven teaching skills.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: 'AI-Powered Learning Paths',
      description: 'Get a personalized roadmap powered by AI to match your goals, pace, and skill level.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 118 0v2m-4 4a4 4 0 01-4-4v-2m0-6a4 4 0 118 0v2m0 4a4 4 0 01-4 4v2" />
        </svg>
      )
    },
    {
      name: 'Live AI Q&A Assistant',
      description: 'Ask questions anytime and get instant, AI-generated explanations and resources.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      )
    },
    {
      name: 'AI-Powered Live Session Tools',
      description: 'Real-time AI captions, translations, topic tracking, and instant summaries during live sessions.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6v6m0 0l-4.553-2.276a1 1 0 010-1.448L9 10m6 6a9 9 0 110-12 9 9 0 010 12z" />
        </svg>
      )
    },
    {
      name: 'Community Network',
      description: 'Connect with peers, alumni, and mentors in our exclusive learning community.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'AI-Powered Interview Prep',
      description: 'Practice interview questions tailored to your role with instant AI feedback and scoring.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M12 20h9" />
        </svg>
      )
    }
  ];
  
  
    return (
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-white" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gray-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why learn with Mentora?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Our platform combines the best of online education with personalized support to help you succeed.
            </p>
          </div>
  
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white rounded-lg shadow-md px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-200">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mx-auto">
                        {feature.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
              >
                Explore all features
                <svg className="-mr-1 ml-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturesSection