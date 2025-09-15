import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const render = data.map((recipe) => (
   <RecipeCard key={recipe.id} recipe={recipe}/>
  ));
  return (
    <div className="mt-5 h-full card flex flex-col items-center w-full bg-gray-800">
      <h1 className="text-4xl font-bold text-green-700 mb-2">
        Delicious Recipes Collection
      </h1>
      <p className="text-lg text-white mb-8 max-w-2xl text-center">
        Discover a world of flavors with our curated selection of recipes!
        Whether you're a seasoned chef or just starting out, these dishes are
        crafted to inspire and delight. Explore unique tastes, beautiful
        presentations, and the stories behind every meal.
      </p>
      <div className="flex gap-10 flex-wrap justify-center w-full ">
        {data.length > 0 ? render : <p>No recipe found</p>  }
      </div>
    </div>
  );
};

export default Recipe;
