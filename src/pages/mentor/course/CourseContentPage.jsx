import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit, FiTrash2, FiArrowLeft, FiVideo, FiFileText, FiCode } from 'react-icons/fi';

const CourseContentPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch course modules - replace with API call
  useEffect(() => {
    const fetchModules = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setModules([
            {
              id: 1,
              title: 'Getting Started',
              lessons: [
                { id: 1, title: 'Introduction', type: 'video', duration: '15:00' },
                { id: 2, title: 'Setup', type: 'video', duration: '10:30' }
              ]
            },
            {
              id: 2,
              title: 'Core Concepts',
              lessons: [
                { id: 3, title: 'Closures', type: 'video', duration: '22:10' },
                { id: 4, title: 'Prototypes', type: 'video', duration: '18:45' },
                { id: 5, title: 'Exercises', type: 'exercise', duration: '30:00' }
              ]
            }
          ]);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching modules:', error);
        setIsLoading(false);
      }
    };

    fetchModules();
  }, [courseId]);

  const deleteModule = (moduleId) => {
    if (window.confirm('Are you sure you want to delete this module and all its lessons?')) {
      setModules(modules.filter(module => module.id !== moduleId));
    }
  };

  const deleteLesson = (moduleId, lessonId) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
        };
      }
      return module;
    }));
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading course content...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link 
            to={`/mentor/courses/${courseId}`}
            className="inline-flex items-center text-teal-600 hover:text-teal-800"
          >
            <FiArrowLeft className="mr-2" /> Back to Course
          </Link>
          <div className="space-x-3">
            <Link
              to={`/mentor/courses/${courseId}/modules/new`}
              className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiPlus className="mr-1" /> Add Module
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h1>

            {modules.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No modules created yet</p>
                <Link
                  to={`/mentor/courses/${courseId}/modules/new`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  <FiPlus className="mr-2" /> Create First Module
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {modules.map(module => (
                  <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                      <h2 className="font-medium text-gray-900">{module.title}</h2>
                      <div className="flex space-x-2">
                        <Link
                          to={`/mentor/courses/${courseId}/modules/${module.id}/edit`}
                          className="text-gray-500 hover:text-teal-600"
                        >
                          <FiEdit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => deleteModule(module.id)}
                          className="text-gray-500 hover:text-red-600"
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {module.lessons.map(lesson => (
                        <div key={lesson.id} className="px-4 py-3 flex justify-between items-center">
                          <div className="flex items-center">
                            {lesson.type === 'video' && <FiVideo className="h-4 w-4 text-blue-500 mr-2" />}
                            {lesson.type === 'exercise' && <FiCode className="h-4 w-4 text-green-500 mr-2" />}
                            <span className="text-sm font-medium text-gray-900">{lesson.title}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                            <Link
                              to={`/mentor/courses/${courseId}/modules/${module.id}/lessons/${lesson.id}/edit`}
                              className="text-gray-500 hover:text-teal-600"
                            >
                              <FiEdit className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => deleteLesson(module.id, lesson.id)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <FiTrash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="px-4 py-3 bg-gray-50">
                        <Link
                          to={`/mentor/courses/${courseId}/modules/${module.id}/lessons/new`}
                          className="inline-flex items-center text-sm text-teal-600 hover:text-teal-700"
                        >
                          <FiPlus className="mr-1" /> Add Lesson
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentPage;