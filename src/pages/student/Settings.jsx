import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiBell, FiCreditCard, FiGlobe } from 'react-icons/fi'

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('account')
  const [formData, setFormData] = useState({
    name: 'Chams Mhamdi',
    email: 'chams.mh@gmail.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    newsletter: true,
    language: 'en',
    currency: 'TND'
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Settings saved successfully!')
  }

  const tabs = [
    { id: 'account', name: 'Account', icon: FiUser },
    { id: 'security', name: 'Security', icon: FiLock },
    { id: 'notifications', name: 'Notifications', icon: FiBell },
    { id: 'billing', name: 'Billing', icon: FiCreditCard },
    { id: 'preferences', name: 'Preferences', icon: FiGlobe }
  ]

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="mt-2 text-teal-100">Manage your account settings and preferences</p>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <div className="md:w-1/5 border-b md:border-b-0 md:border-r border-gray-200">
              <nav className="flex md:flex-col overflow-x-auto">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-3 text-sm font-medium ${activeTab === tab.id ? 'bg-teal-50 text-teal-700 border-l-2 border-teal-500' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    <tab.icon className="mr-3 h-5 w-5" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:w-4/5 p-6 sm:p-10">
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Account Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Change Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifications"
                            name="notifications"
                            type="checkbox"
                            checked={formData.notifications}
                            onChange={handleInputChange}
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifications" className="font-medium text-gray-700">
                            Email Notifications
                          </label>
                          <p className="text-gray-500">Receive email notifications about your courses and account.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            checked={formData.newsletter}
                            onChange={handleInputChange}
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="font-medium text-gray-700">
                            Newsletter
                          </label>
                          <p className="text-gray-500">Receive our monthly newsletter with learning tips and new courses.</p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Billing Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Current Plan</h3>
                    <p className="text-gray-600">Individual Plan - TND29/month</p>
                    <p className="text-sm text-gray-500 mt-1">Next billing date: July 15, 2023</p>
                    <button className="mt-4 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                      Change Plan
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 mb-4">Payment Methods</h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-gray-500">Expires 04/2025</p>
                          </div>
                          <button className="text-sm text-red-600 hover:text-red-800">
                            Remove
                          </button>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                        Add Payment Method
                      </button>
                    </div>
                    <div className="pt-6 border-t border-gray-200">
                      <Link
                        to="/billing-history"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                      >
                        View Billing History
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Preferences</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                          Language
                        </label>
                        <select
                          id="language"
                          name="language"
                          value={formData.language}
                          onChange={handleInputChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                        >
                          <option value="en">English</option>
                          <option value="fr">French</option>
                          <option value="ar">Arabic</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                          Currency
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          value={formData.currency}
                          onChange={handleInputChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                        >
                          <option value="TND">Tunisian Dinar (TND)</option>
                          <option value="USD">US Dollar (USD)</option>
                          <option value="EUR">Euro (EUR)</option>
                        </select>
                      </div>
                      <div className="pt-6 border-t border-gray-200">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                        >
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage