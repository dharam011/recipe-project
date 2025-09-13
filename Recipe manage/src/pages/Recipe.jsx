import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const render = data.map((recipe) => (
    <div
      key={recipe.id}
      className="w-[30%] Items h-52 flex flex-col justify-center items-center overflow-hidden bg-gray-900 rounded shadow-lg p-4"
    >
      <img
        src={recipe.image}
        className="w-24 h-24 object-cover rounded-full border-4  "
        alt={recipe.title}
      />
      <h1 className="text-4xl text-green-800 capitalize font-semibold mt-2">
        {recipe.title}
      </h1>
      <h2 className="text-md text-gray-100 font-light">
        By Chef {recipe.Chef}
      </h2>
      <h3 className="text-xs text-gray-500 font-thin">
        Category: {recipe.catagory}
      </h3>
    </div>
  ));
  return (
    <div className="mt-5 card flex flex-col items-center w-full h-full">
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
        {render}
      </div>
    </div>
  );
};

export default Recipe;
