import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiUser, FiMail, FiCalendar, FiMapPin, FiBook, FiAward } from 'react-icons/fi'

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Chams Mhamdi',
    email: 'chams.mh@gmail.com',
    bio: 'Web Developer.',
    location: 'Monastir, Tunisia',
    joinDate: 'Joined April 2025',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'UI/UX','Spring Boot'],
    education: 'Software Engineering Degree - Polytechnique Monastir',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
  })

  const [formData, setFormData] = useState({ ...profile })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProfile(formData)
    setEditMode(false)
  }

  const stats = [
    { value: 12, label: 'Courses Completed', icon: FiBook },
    { value: 8, label: 'Live Sessions Attended', icon: FiAward },
    { value: 24, label: 'Certificates Earned', icon: FiAward }
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10 relative">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">My Profile</h1>
              <button
                onClick={() => setEditMode(!editMode)}
                className="flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-md text-teal-500 hover:bg-opacity-30 transition"
              >
                <FiEdit className="mr-2" />
                {editMode ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-6 py-8 sm:px-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Avatar and Stats */}
              <div className="md:w-1/3">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                      src={profile.avatar}
                      alt="Profile"
                    />
                    {editMode && (
                      <button className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition">
                        <FiEdit className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-600">{profile.location}</p>
                  <p className="text-sm text-gray-500 mt-1">{profile.joinDate}</p>
                </div>

                {/* Stats */}
                <div className="mt-8 space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <stat.icon className="h-6 w-6 text-teal-500" />
                      <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Profile Info */}
              <div className="md:w-2/3">
                {editMode ? (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                          name="bio"
                          rows="4"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Education</label>
                        <input
                          type="text"
                          name="education"
                          value={formData.education}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setEditMode(false)}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FiUser className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">About</h3>
                        <p className="mt-1 text-gray-600">{profile.bio}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiMail className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="mt-1 text-gray-600">{profile.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiMapPin className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Location</h3>
                        <p className="mt-1 text-gray-600">{profile.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiCalendar className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Member Since</h3>
                        <p className="mt-1 text-gray-600">{profile.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiBook className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Education</h3>
                        <p className="mt-1 text-gray-600">{profile.education}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiAward className="h-5 w-5 text-teal-500 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {profile.skills.map((skill, index) => (
                            <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage