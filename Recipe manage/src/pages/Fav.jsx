import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const Fav = () => {
  // Fix the localStorage parsing issue
  const favorites = JSON.parse(localStorage.getItem("fav") || "[]");

  const render = favorites.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ));

  return (
    <div className="mt-5 h-full card flex flex-col items-center w-full bg-gray-800">
      <h1 className="text-4xl font-bold text-green-700 mb-2">
        Your Favourite Recipes
      </h1>
      <p className="text-lg text-white mb-8 max-w-2xl text-center">
        Here are the recipes you've marked as your favorites! Easily revisit and enjoy your most-loved dishes anytime. Add or remove favorites as you explore new tastes.
      </p>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {render}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="text-8xl text-gray-600 mb-6">
            <i className="ri-heart-line"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            No Favourite Recipes Yet
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            You haven't marked any recipes as favorites yet. Start exploring our delicious collection and save your favorites for easy access!
          </p>
          <Link
            to="/recipe"
            className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <i className="ri-search-line"></i>
            Explore Recipes
          </Link>
        </div>
      )}
    </div>
  );
}

export default Fav