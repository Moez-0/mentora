import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiBook, FiUsers, FiClock, FiUpload, FiX } from 'react-icons/fi';

const MentorEditCoursePage = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    level: 'beginner',
    price: '',
    thumbnail: null,
    thumbnailPreview: '',
    isPublished: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading course data from API
    const fetchCourse = async () => {
      setIsLoading(true);
      // TO BE REPLACED WITH API CALL
      setTimeout(() => {
        setCourseData({
          title: 'Advanced JavaScript Patterns',
          description: 'Master advanced JavaScript concepts including closures, prototypes, design patterns, and performance optimization techniques.',
          category: 'Web Development',
          level: 'advanced',
          price: '149',
          thumbnailPreview: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          isPublished: true
        });
        setIsLoading(false);
      }, 800);
    };
    
    fetchCourse();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData(prev => ({
        ...prev,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file)
      }));
    }
  };

  const removeThumbnail = () => {
    setCourseData(prev => ({
      ...prev,
      thumbnail: null,
      thumbnailPreview: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!courseData.title.trim()) newErrors.title = 'Title is required';
    if (!courseData.description.trim()) newErrors.description = 'Description is required';
    if (!courseData.category.trim()) newErrors.category = 'Category is required';
    if (!courseData.price) newErrors.price = 'Price is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Submit form data to API
      console.log('Updating course:', courseData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Course updated successfully!');
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
          <Link to={`/mentor/courses/${id}`} className="inline-flex items-center text-teal-600 hover:text-teal-800">
            <FiArrowLeft className="mr-2" /> Back to Course
          </Link>
        </div>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-6 py-8 sm:py-12 sm:px-10">
            <h1 className="text-3xl font-bold text-white">Edit Course</h1>
            <p className="mt-2 text-teal-100">Update your course details</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <div className="space-y-8">
              {/* Course Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Course Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={courseData.title}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                />
                {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
              </div>
              
              {/* Course Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Course Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={courseData.description}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                ></textarea>
                {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
              </div>
              
              {/* Course Category and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={courseData.category}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full border ${errors.category ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                  />
                  {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
                </div>
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                    Level
                  </label>
                  <select
                    id="level"
                    name="level"
                    value={courseData.level}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              
              {/* Course Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (TND) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="1"
                  value={courseData.price}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border ${errors.price ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                />
                {errors.price && <p className="mt-2 text-sm text-red-600">{errors.price}</p>}
              </div>
              
              {/* Course Thumbnail */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Thumbnail
                </label>
                {courseData.thumbnailPreview ? (
                  <div className="mt-2 relative">
                    <img src={courseData.thumbnailPreview} alt="Course thumbnail preview" className="h-48 w-full object-cover rounded-lg" />
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
              
              {/* Publish Status */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="isPublished"
                    name="isPublished"
                    type="checkbox"
                    checked={courseData.isPublished}
                    onChange={(e) => setCourseData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="isPublished" className="font-medium text-gray-700">
                    Publish Course
                  </label>
                  <p className="text-gray-500">Make this course available to students</p>
                </div>
              </div>
              
              {/* Form Actions */}
              <div className="pt-6 border-t border-gray-200 flex justify-between">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                >
                  Delete Course
                </button>
                <div>
                  <Link
                    to={`/mentor/courses/${id}`}
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

export default MentorEditCoursePage;