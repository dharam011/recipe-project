import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const {id, image, title, catagory, description, Chef} = props.recipe;

  // Function to get category color and icon
  const getCategoryStyle = (category) => {
    const styles = {
      'Italian': { color: 'text-red-500', bg: 'bg-red-100', icon: 'ri-restaurant-line' },
      'Indian': { color: 'text-orange-500', bg: 'bg-orange-100', icon: 'ri-fire-line' },
      'Mexican': { color: 'text-yellow-500', bg: 'bg-yellow-100', icon: 'ri-sun-line' },
      'Mediterranean': { color: 'text-blue-500', bg: 'bg-blue-100', icon: 'ri-ship-line' },
      'Dessert': { color: 'text-pink-500', bg: 'bg-pink-100', icon: 'ri-cake-3-line' },
      'Salad': { color: 'text-green-500', bg: 'bg-green-100', icon: 'ri-leaf-line' },
      'veg': { color: 'text-green-500', bg: 'bg-green-100', icon: 'ri-leaf-line' },
      'nonveg': { color: 'text-red-500', bg: 'bg-red-100', icon: 'ri-restaurant-line' },
      'vegan': { color: 'text-emerald-500', bg: 'bg-emerald-100', icon: 'ri-plant-line' },
      'jain': { color: 'text-purple-500', bg: 'bg-purple-100', icon: 'ri-heart-line' },
      'other': { color: 'text-gray-500', bg: 'bg-gray-100', icon: 'ri-more-line' }
    };
    return styles[category] || styles['other'];
  };

  const categoryStyle = getCategoryStyle(catagory);

  return (
    <Link 
      to={`/recipe/details/${id}`}
      key={id}
      className="recipe-card group relative w-full max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-700 hover:border-green-500/50"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className={`absolute top-3 right-3 ${categoryStyle.bg} ${categoryStyle.color} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm bg-opacity-90`}>
          <i className={categoryStyle.icon}></i>
          <span className="capitalize text-gray-800">{catagory}</span>
        </div>

        {/* Chef Badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <i className="ri-user-line"></i>
          <span>Chef {Chef}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h1 className="text-xl font-bold text-white capitalize leading-tight group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description.slice(0, 100)}
          {description.length > 100 && (
            <span className="text-green-400 font-medium ml-1 group-hover:text-green-300">
              ...read more
            </span>
          )}
        </p>

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <i className="ri-time-line"></i>
            <span>Quick Recipe</span>
          </div>
          <div className="flex items-center gap-1 text-green-400 font-medium text-sm group-hover:text-green-300 transition-colors duration-300">
            <span>View Recipe</span>
            <i className="ri-arrow-right-line transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-green-500/10 transition-all duration-500 pointer-events-none"></div>
    </Link>
  )
}

export default RecipeCard
