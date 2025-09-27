import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const render = data.map((recipe) => (
   <RecipeCard key={recipe.id} recipe={recipe}/>
  ));
  return (
    <div className="py-16 h-full card flex flex-col items-center w-full bg-gray-800">
      <h1 className="text-6xl font-bold text-green-700 mb-2">
        Delicious Recipes Collection
      </h1>
      <p className="text-lg text-white mt-4 mb-8 max-w-2xl text-center">
        Discover a world of flavors with our curated selection of recipes!
        Whether you're a seasoned chef or just starting out, these dishes are
        crafted to inspire and delight. Explore unique tastes, beautiful
        presentations, and the stories behind every meal.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {data.length > 0 ? render : (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl text-gray-600 mb-4">
              <i className="ri-restaurant-line"></i>
            </div>
            <p className="text-xl text-gray-400">No recipes found</p>
            <p className="text-gray-500 mt-2">Start by creating your first recipe!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
