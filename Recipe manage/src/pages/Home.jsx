import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home w-full min-h-screen bg-gray-800 text-white">
      {/* Hero Section */}
      <div className="hero-section flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6 leading-tight">
            Welcome to Recipe Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, create, and share amazing recipes from around the world.
            Your culinary journey starts here with our collection of delicious,
            easy-to-follow recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/recipe"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Recipes
            </Link>
            <Link
              to="/create"
              className="bg-gray-900 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600"
            >
              Create Recipe
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose Recipe Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-green-700 mb-4">
                <i className="ri-book-open-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Vast Recipe Collection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Access hundreds of carefully curated recipes from different cuisines
                and cooking styles, all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-pink-500 mb-4">
                <i className="ri-add-circle-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Create & Share
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Share your own recipes with the community and discover
                new favorites from fellow cooking enthusiasts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-gray-900 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-yellow-500 mb-4">
                <i className="ri-heart-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Save Favorites
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Keep track of your favorite recipes and build your personal
                cookbook for quick access anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who have already discovered their new favorite recipes.
            Start your culinary adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/recipe"
              className="bg-green-700 hover:bg-green-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse All Recipes
            </Link>
            <Link
              to="/about"
              className="text-green-700 hover:text-green-500 text-lg font-semibold transition-colors duration-300 underline"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-300 text-lg">Recipes Available</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-300 text-lg">Expert Chefs</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-gray-300 text-lg">Happy Cooks</div>
            </div>
            <div className="stat-item">
              <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Recipe Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home