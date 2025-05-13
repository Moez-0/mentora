import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiSave, FiTrash2 } from 'react-icons/fi';

const EditModulePage = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState({
    title: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch module data - replace with API call
  useEffect(() => {
    const fetchModule = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setModule({
            title: 'Advanced JavaScript Patterns',
            description: 'Master advanced concepts like closures, prototypes, and design patterns'
          });
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching module:', error);
        setIsLoading(false);
      }
    };

    if (moduleId) {
      fetchModule();
    } else {
      setIsLoading(false);
    }
  }, [moduleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save module logic here
    console.log('Module saved:', module);
    navigate(`/mentor/courses/${courseId}/content`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this module? All lessons will be deleted too.')) {
      // Delete logic here
      console.log('Module deleted');
      navigate(`/mentor/courses/${courseId}/content`);
    }
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
              {moduleId ? 'Edit Module' : 'Create New Module'}
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Module Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={module.title}
                  onChange={(e) => setModule({...module, title: e.target.value})}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  value={module.description}
                  onChange={(e) => setModule({...module, description: e.target.value})}
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  {moduleId && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                    >
                      <FiTrash2 className="mr-2" /> Delete Module
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
                >
                  <FiSave className="mr-2" /> Save Module
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModulePage;