import { FiExternalLink } from 'react-icons/fi'

const CareersPage = () => {
  const positions = [
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      description: 'We\'re looking for a skilled Frontend Developer to help build our next-generation learning platform using React, TypeScript, and modern web technologies.',
      applyLink: '#'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      type: 'Full-time',
      location: 'Tunis, Tunisia',
      department: 'Design',
      description: 'Join our design team to create beautiful, intuitive learning experiences that help students achieve their goals.',
      applyLink: '#'
    },
    {
      id: 3,
      title: 'Content Marketing Specialist',
      type: 'Contract',
      location: 'Remote',
      department: 'Marketing',
      description: 'Help us create compelling content that educates potential students about our courses and learning philosophy.',
      applyLink: '#'
    },
    {
      id: 4,
      title: 'Course Instructor (JavaScript)',
      type: 'Part-time',
      location: 'Remote',
      department: 'Education',
      description: 'Share your expertise by creating and teaching high-quality programming courses for our global student community.',
      applyLink: '#'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Help shape the future of education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Current Openings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We're always looking for talented individuals to join our mission of making quality education accessible to everyone.
          </p>
        </div>

        <div className="space-y-6">
          {positions.map((position) => (
            <div key={position.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        {position.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a
                      href={position.applyLink}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                    >
                      Apply Now
                      <FiExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{position.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-12 sm:p-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Don't see the perfect role?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              We're always interested in meeting passionate people who want to help transform education. Send us your resume and tell us how you'd like to contribute.
            </p>
            <div className="mt-8">
              <a
                href="mailto:careers@mentora.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
