import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about w-full min-h-screen bg-gray-800 text-white">
      {/* Header Section */}
      <div className="header-section py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            About Recipe Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We're passionate about bringing people together through the joy of cooking.
            Our platform connects food lovers, home cooks, and professional chefs in a
            vibrant community dedicated to sharing culinary experiences.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Recipe Hub, we believe that cooking is more than just preparing food—it's
                about creating memories, sharing cultures, and bringing people together. Our
                mission is to make cooking accessible, enjoyable, and inspiring for everyone.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a beginner looking to learn basic techniques or an experienced
                chef wanting to share your expertise, Recipe Hub provides the tools and
                community to support your culinary journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-green-700 mb-4">
                  <i className="ri-restaurant-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Cooking Made Simple
                </h3>
                <p className="text-gray-300">
                  From kitchen basics to gourmet creations, we make every recipe
                  easy to follow and delicious to taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="value-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-green-700 mb-4">
                <i className="ri-community-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Building a supportive community where cooks of all levels can learn,
                share, and grow together.
              </p>
            </div>

            {/* Value 2 */}
            <div className="value-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-pink-500 mb-4">
                <i className="ri-lightbulb-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Constantly improving our platform with new features and tools to
                enhance your cooking experience.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-yellow-500 mb-4">
                <i className="ri-star-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Ensuring every recipe meets our high standards for clarity,
                accuracy, and deliciousness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-user-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
              <p className="text-green-700 font-medium mb-3">Head Chef & Founder</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                With 15 years of culinary experience, Sarah brings professional
                expertise and passion to every recipe.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-user-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mike Chen</h3>
              <p className="text-pink-500 font-medium mb-3">Tech Lead</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Mike ensures our platform runs smoothly and continues to innovate
                with new features for our users.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-user-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Emma Davis</h3>
              <p className="text-yellow-500 font-medium mb-3">Community Manager</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Emma fosters our vibrant community and helps connect cooks
                from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or want to share your cooking story?
            We'd love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="contact-item">
              <div className="text-4xl text-green-700 mb-4">
                <i className="ri-mail-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">hello@recipehub.com</p>
            </div>
            <div className="contact-item">
              <div className="text-4xl text-pink-500 mb-4">
                <i className="ri-phone-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <div className="text-4xl text-yellow-500 mb-4">
                <i className="ri-map-pin-line"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Culinary Street, Food City</p>
            </div>
          </div>
          <Link
            to="/create"
            className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Start Creating Recipes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About