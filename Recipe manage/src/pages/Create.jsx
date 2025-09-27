import  { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {data, setdata} = useContext(recipecontext);

   const submitHandler = (recipe) => {
    recipe.id = nanoid();
const copydata= [...data]
copydata.push(recipe)
setdata(copydata)
localStorage.setItem("recipes", JSON.stringify(copydata))

    toast.success("Recipe added successfully");
    // const copydata = [...data];
    // copydata.push(recipe);
    // console.log(recipe);
    
    // setdata([...data, recipe])
    reset();
    navigate("/recipe");
  };
  return (
    <div className="create min-h-screen bg-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">Create New Recipe</h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Share your culinary masterpiece with the world. Fill in the details below to create your recipe.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>

            {/* Image URL Field */}
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <i className="ri-shopping-cart-line text-green-500"></i>
                Ingredients
              </label>
              <textarea
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                {...register("ingredients")}
                rows="4"
                placeholder="List all ingredients with quantities (e.g., 2 cups flour, 1 tsp salt, 3 eggs...)"
              ></textarea>
            </div>

            {/* Instructions Field */}
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
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

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <i className="ri-save-line"></i>
                Save Recipe
              </button>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <i className="ri-lightbulb-line text-yellow-500"></i>
            Recipe Tips
          </h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <i className="ri-check-line text-green-500 mt-0.5"></i>
              Use high-quality images for better visual appeal
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-check-line text-green-500 mt-0.5"></i>
              Be specific with ingredient quantities and cooking times
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-check-line text-green-500 mt-0.5"></i>
              Write clear, step-by-step instructions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Create;
