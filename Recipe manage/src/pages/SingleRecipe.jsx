import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);

  const params = useParams();
  const recipe = data.find((r) => params.id === r.id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      Chef: recipe?.Chef,
      catagory: recipe?.catagory,
      description: recipe?.description,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
    },
  });

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id === r.id);
    if (index === -1) return;
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));


    toast.success("Recipe updated successfully");
    reset();

    console.log(data);
  };

  const deletehandler = () => {
    const filterData = data.filter((r) => r.id !== params.id);
    toast.success("Recipe deleted successfully");
    setdata(filterData);
    unfavHandeler(recipe);
    localStorage.setItem("recipes", JSON.stringify(filterData));
    navigate("/recipe");
  };



  
  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [])
  const isFav = favourite.some(fav => fav.id === recipe.id);
  const FavoriteHandeler = (recipe) => {
    // if (!isFav) {
      const updatedFav = [...favourite, recipe];
      localStorage.setItem("fav", JSON.stringify(updatedFav));
      setfavourite(updatedFav);
      toast.success("Added to favorites");
    // }
  };
  const unfavHandeler = (recipe) => {
    if (isFav) {
      const updatedFav = favourite.filter(fav => fav.id !== recipe.id);
      setfavourite(updatedFav);
      localStorage.setItem("fav", JSON.stringify(updatedFav));
      toast.success("Removed from favorites");
    }
  };
  useEffect(() => {
    console.log("mounted");
    return() => {
      console.log("unmounted");
    };
   
  }, [favourite]);



  return recipe ? (
    <div className="single-recipe min-h-screen bg-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-start mb-4">
            <button
              onClick={() => navigate("/recipe")}
              className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Back to Recipes</span>
            </button>
          </div>
        </div>

        {/* Recipe Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Recipe Info */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="w-full h-80 object-cover"
                src={recipe.image}
                alt={recipe.title}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Favorite Icon - Top Right */}
              <div className="absolute top-4 right-4">
                {isFav ? (
                  <button
                    onClick={() => unfavHandeler(recipe)}
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title="Remove from favorites"
                  >
                    <i className="ri-heart-fill text-xl"></i>
                  </button>
                ) : (
                  <button
                    onClick={() => FavoriteHandeler(recipe)}
                    className="w-12 h-12 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm"
                    title="Add to favorites"
                  >
                    <i className="ri-heart-line text-xl"></i>
                  </button>
                )}
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-4xl font-bold capitalize mb-2">{recipe.title}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line"></i>
                    Chef {recipe.Chef}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-price-tag-3-line"></i>
                    {recipe.catagory}
                  </span>
                </div>
              </div>
            </div>

            {/* Recipe Details */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="ri-information-line text-green-500"></i>
                Recipe Details
              </h2>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <i className="ri-file-text-line"></i>
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{recipe.description}</p>
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <i className="ri-shopping-cart-line"></i>
                    Ingredients
                  </h3>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{recipe.ingredients}</p>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <i className="ri-list-ordered"></i>
                    Cooking Instructions
                  </h3>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{recipe.instructions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="ri-edit-line text-green-500"></i>
                Edit Recipe
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit(updateHandler)}>
                {/* Image URL Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-image-line text-green-500"></i>
                    Recipe Image URL
                  </label>
                  <input
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    {...register("image", { required: "Image URL is required" })}
                    type="url"
                    placeholder="https://example.com/your-recipe-image.jpg"
                  />
                  {errors.image && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <i className="ri-error-warning-line"></i>
                      {errors.image.message}
                    </p>
                  )}
                </div>

                {/* Recipe Title Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-restaurant-line text-green-500"></i>
                    Recipe Title
                  </label>
                  <input
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder="e.g., Classic Spaghetti Carbonara"
                  />
                  {errors.title && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <i className="ri-error-warning-line"></i>
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Chef Name Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-user-line text-green-500"></i>
                    Chef Name
                  </label>
                  <input
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    {...register("Chef", { required: "Chef name is required" })}
                    type="text"
                    placeholder="e.g., Gordon Ramsay"
                  />
                  {errors.Chef && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <i className="ri-error-warning-line"></i>
                      {errors.Chef.message}
                    </p>
                  )}
                </div>

                {/* Category Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-price-tag-3-line text-green-500"></i>
                    Category
                  </label>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    {...register("catagory", { required: "Category is required" })}
                  >
                    <option value="" className="bg-gray-700">Select a category</option>
                    <option value="Italian" className="bg-gray-700">Italian</option>
                    <option value="Indian" className="bg-gray-700">Indian</option>
                    <option value="Mexican" className="bg-gray-700">Mexican</option>
                    <option value="Mediterranean" className="bg-gray-700">Mediterranean</option>
                    <option value="Dessert" className="bg-gray-700">Dessert</option>
                    <option value="Salad" className="bg-gray-700">Salad</option>
                    <option value="veg" className="bg-gray-700">Vegetarian</option>
                    <option value="nonveg" className="bg-gray-700">Non-Vegetarian</option>
                    <option value="vegan" className="bg-gray-700">Vegan</option>
                    <option value="jain" className="bg-gray-700">Jain</option>
                    <option value="other" className="bg-gray-700">Other</option>
                  </select>
                  {errors.catagory && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <i className="ri-error-warning-line"></i>
                      {errors.catagory.message}
                    </p>
                  )}
                </div>

                {/* Description Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-file-text-line text-green-500"></i>
                    Description
                  </label>
                  <textarea
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    {...register("description")}
                    rows="3"
                    placeholder="Describe your recipe in a few sentences..."
                  ></textarea>
                </div>

                {/* Ingredients Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-shopping-cart-line text-green-500"></i>
                    Ingredients
                  </label>
                  <textarea
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    {...register("ingredients")}
                    rows="4"
                    placeholder="List all ingredients with quantities..."
                  ></textarea>
                </div>

                {/* Instructions Field */}
                <div className="form-group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                    <i className="ri-list-ordered text-green-500"></i>
                    Cooking Instructions
                  </label>
                  <textarea
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    {...register("instructions")}
                    rows="6"
                    placeholder="Step-by-step cooking instructions..."
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <i className="ri-save-line"></i>
                    Update Recipe
                  </button>
                  <button
                    onClick={deletehandler}
                    type="button"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <i className="ri-delete-bin-line"></i>
                    Delete Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl text-green-500 mb-4">
          <i className="ri-loader-4-line animate-spin"></i>
        </div>
        <p className="text-xl text-white">Loading recipe...</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
