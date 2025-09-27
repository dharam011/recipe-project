import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <i className="ri-restaurant-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Recipe Hub</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for discovering, creating, and sharing amazing recipes. 
              Join our community of passionate cooks and food lovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
                  <i className="ri-home-line text-sm"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipe" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
                  <i className="ri-restaurant-line text-sm"></i>
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
                  <i className="ri-add-circle-line text-sm"></i>
                  Create Recipe
                </Link>
              </li>
              <li>
                <Link to="/fav" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
                  <i className="ri-heart-line text-sm"></i>
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
                  <i className="ri-information-line text-sm"></i>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Popular Categories</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  <i className="ri-restaurant-line text-sm text-red-500"></i>
                  Italian Cuisine
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  <i className="ri-fire-line text-sm text-orange-500"></i>
                  Indian Dishes
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  <i className="ri-cake-3-line text-sm text-pink-500"></i>
                  Desserts
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  <i className="ri-leaf-line text-sm text-green-500"></i>
                  Vegetarian
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center gap-2 cursor-pointer">
                  <i className="ri-sun-line text-sm text-yellow-500"></i>
                  Mexican Food
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-mail-line text-green-500"></i>
                <span className="text-sm">hello@recipehub.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-phone-line text-green-500"></i>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <i className="ri-map-pin-line text-green-500"></i>
                <span className="text-sm">123 Culinary Street, Food City</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                  <i className="ri-send-plane-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Recipe Hub. All rights reserved. Made with ❤️ for food lovers.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
