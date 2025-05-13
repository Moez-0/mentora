import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiUsers, FiUpload, FiX, FiVideo } from 'react-icons/fi';

const MentorEditSessionPage = () => {
  const { id } = useParams();
  const [sessionData, setSessionData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '60',
    maxStudents: '50',
    price: '0',
    thumbnail: null,
    thumbnailPreview: '',
    meetingLink: '',
    status: 'upcoming'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading session data from API
    const fetchSession = async () => {
      setIsLoading(true);
      // TO BE REPLACED WITH API CALL
      setTimeout(() => {
        setSessionData({
          title: 'Live Q&A Session - JavaScript',
          description: 'Join me for a live Q&A session where we\'ll answer your JavaScript questions and solve coding challenges together.',
          date: '2023-06-15',
          time: '18:00',
          duration: '90',
          maxStudents: '50',
          price: '0',
          thumbnailPreview: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          meetingLink: 'https://meet.example.com/js-qa-june15',
          status: 'upcoming'
        });
        setIsLoading(false);
      }, 800);
    };
    
    fetchSession();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSessionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSessionData(prev => ({
        ...prev,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file)
      }));
    }
  };

  const removeThumbnail = () => {
    setSessionData(prev => ({
      ...prev,
      thumbnail: null,
      thumbnailPreview: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!sessionData.title.trim()) newErrors.title = 'Title is required';
    if (!sessionData.description.trim()) newErrors.description = 'Description is required';
    if (!sessionData.date) newErrors.date = 'Date is required';
    if (!sessionData.time) newErrors.time = 'Time is required';
    if (!sessionData.meetingLink) newErrors.meetingLink = 'Meeting link is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Submit form data to API
      console.log('Updating session:', sessionData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Session updated successfully!');
      }, 1500);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 sm:p-10 text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to={`/mentor/sessions/${id}`} className="inline-flex items-center text-teal-600 hover:text-teal-800">
            <FiArrowLeft className="mr-2" /> Back to Session
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10">
            <h1 className="text-3xl font-bold text-white">Edit Session</h1>
            <p className="mt-2 text-teal-100">Update your live session details</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <div className="space-y-8">
              {/* Session Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Session Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={sessionData.title}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                />
                {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
              </div>
              
              {/* Session Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Session Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={sessionData.description}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                ></textarea>
                {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
              </div>
              
              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiCalendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={sessionData.date}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 border ${errors.date ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                    />
                  </div>
                  {errors.date && <p className="mt-2 text-sm text-red-600">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiClock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={sessionData.time}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 border ${errors.time ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                    />
                  </div>
                  {errors.time && <p className="mt-2 text-sm text-red-600">{errors.time}</p>}
                </div>
              </div>
              
              {/* Duration and Max Students */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Duration (minutes)
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={sessionData.duration}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="30">30 mins</option>
                    <option value="60">60 mins</option>
                    <option value="90">90 mins</option>
                    <option value="120">120 mins</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="maxStudents" className="block text-sm font-medium text-gray-700">
                    Maximum Students
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUsers className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="maxStudents"
                      name="maxStudents"
                      min="1"
                      value={sessionData.maxStudents}
                      onChange={handleInputChange}
                      className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Session Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (TND)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">TND</span>
                  </div>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="1"
                    value={sessionData.price}
                    onChange={handleInputChange}
                    className="block w-full pl-12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
              
              {/* Meeting Link */}
              <div>
                <label htmlFor="meetingLink" className="block text-sm font-medium text-gray-700">
                  Meeting Link *
                </label>
                <input
                  type="url"
                  id="meetingLink"
                  name="meetingLink"
                  value={sessionData.meetingLink}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.meetingLink ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                />
                {errors.meetingLink && <p className="mt-2 text-sm text-red-600">{errors.meetingLink}</p>}
              </div>
              
              {/* Session Thumbnail */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Session Thumbnail
                </label>
                {sessionData.thumbnailPreview ? (
                  <div className="mt-2 relative">
                    <img src={sessionData.thumbnailPreview} alt="Session thumbnail preview" className="h-48 w-full object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                    >
                      <FiX className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                ) : (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="thumbnail"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="thumbnail"
                            name="thumbnail"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Session Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={sessionData.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              {/* Form Actions */}
              <div className="pt-6 border-t border-gray-200 flex justify-between">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                >
                  Cancel Session
                </button>
                <div>
                  <Link
                    to={`/mentor/sessions/${id}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 mr-3"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorEditSessionPage;