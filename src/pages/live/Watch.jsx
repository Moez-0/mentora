import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiCalendar, FiClock, FiUser, FiVideo, FiMessageSquare } from 'react-icons/fi'

const LiveSessionPage = () => {
  const { id } = useParams()
  const [isLive, setIsLive] = useState(true)
  const [chatMessages, setChatMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  
  // Mock session data
  const session = {
    id: id,
    title: 'Advanced JavaScript Patterns',
    instructor: 'Moez Souidi',
    date: '2023-06-15T18:00:00',
    duration: '90 mins',
    description: 'Join this live session to learn advanced JavaScript patterns including module patterns, revealing module pattern, and more.',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isRegistered: true,
    isPast: false,
    recordingAvailable: false
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Session Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">{session.title}</h1>
            <p className="text-gray-600 mt-1">By {session.instructor}</p>
            
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <FiCalendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                {new Date(session.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                {session.duration}
              </div>
              {session.isPast && session.recordingAvailable && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Recording Available
                </span>
              )}
              {!session.isPast && session.isRegistered && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                  Registered
                </span>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:grid lg:grid-cols-3">
            {/* Video/Content Area */}
            <div className="lg:col-span-2">
              {isLive ? (
                <div className="bg-black aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="bg-gray-900 aspect-w-16 aspect-h-9 flex items-center justify-center">
                  <div className="text-center p-6">
                    <FiVideo className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium text-white">
                      {session.isPast ? 
                        (session.recordingAvailable ? 'Session Recording' : 'No Recording Available') : 
                        'Session Has Not Started Yet'}
                    </h3>
                    <p className="mt-2 text-gray-300">
                      {session.isPast ? 
                        (session.recordingAvailable ? 
                          'Watch the recording of this session below' : 
                          'The recording for this session is not available') : 
                        `The live session will begin on ${new Date(session.date).toLocaleDateString()} at ${new Date(session.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                    </p>
                    {session.isPast && session.recordingAvailable && (
                      <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                        Watch Recording
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {/* Session Description */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">About This Session</h2>
                <p className="text-gray-700">{session.description}</p>
              </div>
            </div>

            {/* Chat/Sidebar */}
            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-200">
              {isLive ? (
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: '400px' }}>
                    {chatMessages.length > 0 ? (
                      chatMessages.map(message => (
                        <div key={message.id} className="flex">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                            <FiUser className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{message.user}</p>
                            <p className="text-sm text-gray-600">{message.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No messages yet. Say hello!</p>
                    )}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage}>
                      <div className="flex">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                          placeholder="Type a message..."
                        />
                        <button
                          type="submit"
                          className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                        >
                          <FiMessageSquare className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Session Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Instructor</h4>
                      <p className="text-sm text-gray-600 mt-1">{session.instructor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Scheduled Time</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(session.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Duration</h4>
                      <p className="text-sm text-gray-600 mt-1">{session.duration}</p>
                    </div>
                    {!session.isRegistered && !session.isPast && (
                      <div className="pt-4">
                        <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700">
                          Register for Session
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveSessionPage
