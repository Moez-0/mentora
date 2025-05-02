import React from 'react'

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Mentora
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
            Learn more about who we are and what we do.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                Mentora is a modern online learning platform designed to empower individuals and organizations through accessible, engaging, and high-quality educational experiences.
              </p>

              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
                  <p className="mt-4 text-gray-600">
                    Our mission is to make education accessible and impactful for everyone, everywhere. We believe in the power of knowledge to transform lives and open new opportunities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">What We Offer</h2>
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                    <li>Curated courses led by industry experts</li>
                    <li>Interactive and engaging learning tools</li>
                    <li>Progress tracking and personalized recommendations</li>
                    <li>Accessible learning anytime, anywhere</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
                  <p className="mt-4 text-gray-600">
                    At the heart of Mentora are values that drive our approach:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                    <li><strong>Accessibility:</strong> Learning should be available to everyone, regardless of background or circumstance.</li>
                    <li><strong>Excellence:</strong> We strive to deliver the highest quality content and services.</li>
                    <li><strong>Innovation:</strong> We embrace technology to enhance learning experiences.</li>
                    <li><strong>Community:</strong> We foster a supportive environment for learners and educators alike.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                  <p className="mt-4 text-gray-600">
                    Have questions, ideas, or feedback? Reach out to us at <a href="mailto:support@mentora.com" className="text-teal-600 font-medium">support@mentora.com</a>.
                  </p>
                </section>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
