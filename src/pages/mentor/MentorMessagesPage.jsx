import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiSearch, FiSend, FiUser, FiClock } from 'react-icons/fi';

const MentorMessagesPage = () => {
  const [activeConversation, setActiveConversation] = useState(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - TO BE REPLACED WITH API CALL
  const conversations = [
    {
      id: 1,
      student: {
        id: 1,
        name: 'Ahmed Ben Ali',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
      },
      lastMessage: 'Thank you for the clarification!',
      lastMessageTime: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      student: {
        id: 2,
        name: 'Fatma Ksontini',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
      },
      lastMessage: 'I have a question about the React course...',
      lastMessageTime: '1 day ago',
      unread: false
    },
    {
      id: 3,
      student: {
        id: 3,
        name: 'Mohamed Trabelsi',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80'
      },
      lastMessage: 'When will the next live session be scheduled?',
      lastMessageTime: '3 days ago',
      unread: false
    }
  ];
  
  const messages = [
    {
      id: 1,
      sender: 'student',
      text: 'Hello, I have a question about the JavaScript course',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'mentor',
      text: 'Hi Ahmed, what would you like to know?',
      time: '10:35 AM'
    },
    {
      id: 3,
      sender: 'student',
      text: 'I\'m having trouble understanding closures',
      time: '10:36 AM'
    },
    {
      id: 4,
      sender: 'mentor',
      text: 'Closures can be tricky at first. They allow a function to access variables from an enclosing scope even after it leaves the scope in which it was declared.',
      time: '10:40 AM'
    },
    {
      id: 5,
      sender: 'student',
      text: 'Thank you for the clarification!',
      time: '10:45 AM'
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      // TO DO: Send message to API
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="mt-2 text-gray-600">Communicate with your students</p>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row h-[600px]">
            {/* Conversations List */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[500px]">
                {filteredConversations.length === 0 ? (
                  <div className="text-center py-12">
                    <FiMessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No conversations</h3>
                    <p className="mt-1 text-gray-500">Start a conversation with your students</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {filteredConversations.map(conversation => (
                      <div
                        key={conversation.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${activeConversation === conversation.id ? 'bg-teal-50' : ''}`}
                        onClick={() => setActiveConversation(conversation.id)}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={conversation.student.avatar} alt={conversation.student.name} />
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-900">{conversation.student.name}</h3>
                              {conversation.unread && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                                  New
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                            <p className="text-xs text-gray-400 mt-1">{conversation.lastMessageTime}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Messages Area */}
            <div className="w-full md:w-2/3 flex flex-col">
              {activeConversation ? (
                <>
                  <div className="p-4 border-b border-gray-200 flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={conversations.find(c => c.id === activeConversation).student.avatar}
                        alt={conversations.find(c => c.id === activeConversation).student.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {conversations.find(c => c.id === activeConversation).student.name}
                      </h3>
                      <p className="text-sm text-gray-500">Active now</p>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {messages.map(message => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'mentor' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'mentor' ? 'bg-teal-600 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}
                          >
                            <p>{message.text}</p>
                            <p className={`text-xs mt-1 ${message.sender === 'mentor' ? 'text-teal-100' : 'text-gray-500'}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex">
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                      >
                        <FiSend className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <FiMessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Select a conversation</h3>
                    <p className="mt-1 text-gray-500">Choose a student to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorMessagesPage;