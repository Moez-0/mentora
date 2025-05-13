import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiSave, FiTrash2, FiVideo, FiFileText, FiCode } from 'react-icons/fi';

const EditLessonPage = () => {
  const { courseId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState({
    title: '',
    type: 'video',
    duration: '',
    content: '',
    videoUrl: '',
    resources: []
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch lesson data - replace with API call
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setLesson({
            title: 'Closures Deep Dive',
            type: 'video',
            duration: '22:10',
            content: 'Learn about closures in JavaScript and how they work behind the scenes.',
            videoUrl: 'https://youtube.com/embed/abc123',
            resources: [
              { id: 1, name: 'Closures Cheat Sheet.pdf', type: 'pdf' },
              { id: 2, name: 'Exercise Files.zip', type: 'zip' }
            ]
          });
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching lesson:', error);
        setIsLoading(false);
      }
    };

    if (lessonId) {
      fetchLesson();
    } else {
      setIsLoading(false);
    }
  }, [lessonId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save lesson logic here
    console.log('Lesson saved:', lesson);
    navigate(`/mentor/courses/${courseId}/content`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      // Delete logic here
      console.log('Lesson deleted');
      navigate(`/mentor/courses/${courseId}/content`);
    }
  };

  const handleAddResource = () => {
    // In a real app, this would open a modal or another interface
    console.log('Add resource clicked');
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            to={`/mentor/courses/${courseId}/`}
            className="inline-flex items-center text-teal-600 hover:text-teal-800"
          >
            <FiArrowLeft className="mr-2" /> Back to Course Content
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {lessonId ? 'Edit Lesson' : 'Create New Lesson'}
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Lesson Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={lesson.title}
                  onChange={(e) => setLesson({...lesson, title: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Lesson Type
                  </label>
                  <select
                    id="type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={lesson.type}
                    onChange={(e) => setLesson({...lesson, type: e.target.value})}
                  >
                    <option value="video">Video</option>
                    <option value="reading">Reading</option>
                    <option value="exercise">Exercise</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (mm:ss)
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={lesson.duration}
                    onChange={(e) => setLesson({...lesson, duration: e.target.value})}
                    placeholder="e.g. 15:30"
                  />
                </div>
              </div>

              {lesson.type === 'video' && (
                <div className="mb-6">
                  <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Video URL
                  </label>
                  <input
                    type="text"
                    id="videoUrl"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    value={lesson.videoUrl}
                    onChange={(e) => setLesson({...lesson, videoUrl: e.target.value})}
                    placeholder="https://youtube.com/embed/..."
                  />
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Lesson Content
                </label>
                <textarea
                  id="content"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={lesson.content}
                  onChange={(e) => setLesson({...lesson, content: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Resources
                  </label>
                  <button
                    type="button"
                    onClick={handleAddResource}
                    className="text-sm text-teal-600 hover:text-teal-500"
                  >
                    + Add Resource
                  </button>
                </div>
                {lesson.resources.length > 0 ? (
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {lesson.resources.map(resource => (
                      <li key={resource.id} className="px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center">
                          {resource.type === 'pdf' && <FiFileText className="h-5 w-5 text-red-500 mr-2" />}
                          {resource.type === 'zip' && <FiCode className="h-5 w-5 text-blue-500 mr-2" />}
                          <span className="text-sm">{resource.name}</span>
                        </div>
                        <button
                          type="button"
                          className="text-gray-400 hover:text-red-500"
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-4 text-sm text-gray-500">
                    No resources added yet
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  {lessonId && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      <FiTrash2 className="mr-2" /> Delete Lesson
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  <FiSave className="mr-2" /> Save Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLessonPage;