import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full max-w-7xl mx-auto">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master new skills with</span>
                <span className="block text-teal-600">personalized learning</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join hundreds of students accelerating their careers through our interactive courses, live sessions, and expert mentorship.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/courses"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10"
                  >
                    Browse courses
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-8 sm:flex">
                  <div className="flex items-center justify-center px-5 py-3 border border-gray-200 rounded-md bg-white">
                    <div className="flex items-center">
                      <div className="flex -space-x-2 overflow-hidden">
                        <img
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-700">
                        Join <span className="text-teal-600">100+</span> learners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1733509213080-db2aca1bc244?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students learning online"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600 to-transparent opacity-70 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">Live interactive session</h3>
                  <p className="mt-1">Join our next live session</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                        alt="Instructor"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Moez Souidi</p>
                      <p className="text-xs">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection