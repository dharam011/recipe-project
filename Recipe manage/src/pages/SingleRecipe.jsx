import { useContext } from "react";
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
      title: recipe.title,
      image: recipe.image,
      Chef: recipe.Chef,
      catagory: recipe.catagory,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    },
  });

  const submitHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id === r.id);
    if (index === -1) return;
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe updated successfully");
    reset();
   
    console.log(data);
  };

  const deletehandler = () => {
    const filterData = data.filter((r) => r.id !== params.id);
    toast.success("Recipe deleted successfully");
    setdata(filterData);
    navigate("/recipe");
  };

  return recipe ? (
    <div className="singleR flex justify-center gap-30  mt-5">
      <div className="left text-white bg-orange-400  p-5 ">
        <h1 className="text-5xl font-bold capitalize">{recipe.title}</h1>
        <img
          className="w-[30vw] object-cover mt-2 rounded h-[30vh]"
          src={recipe.image}
          alt=""
        />
        <h2 className="font-medium text-xl">
          Description :{" "}
          <span className=" font-thin text">{recipe.description}</span>
        </h2>

        <h2>Chef Name : {recipe.Chef}</h2>
        <h2>Catagory : {recipe.catagory}</h2>
        <h2>Ingredients : {recipe.ingredients}</h2>
        <h2>Instructions : {recipe.instructions}</h2>
      </div>

      <div className="right mt-10 ">
        <form
          className="create-form flex-col flex justify-center"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            className="create-form outline-0 border-b p-2 block "
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Enter image URL"
          />
          {errors.image && (
            <small className="text-red-400 text-xs block mb-1 ml-2">
              {errors.image.message}
            </small>
          )}
          <input
            className="create-form outline-0 border-b p-2 block mb-3 "
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe title"
          />
          {errors.title && (
            <small className="text-red-400 text-xs block mb-1 ml-2">
              {errors.title.message}
            </small>
          )}

          <input
            className="create-form outline-0 border-b p-2 block mb-3 "
            {...register("Chef", { required: "Chef name is required" })}
            type="text"
            placeholder="Chef Name"
          />
          {errors.Chef && (
            <small className="text-red-400 text-xs block mb-1 ml-2">
              {errors.Chef.message}
            </small>
          )}
          <select
            className="instruction block border-b outline-0 p-2 text-xs "
            {...register("catagory", { required: "Category is required" })}
            type="text"
          >
            <option value="">Select Category</option>
            <option
              className="bg-gray-800 text-white text-xs font-thin  "
              value="veg"
            >
              Veg
            </option>
            <option
              className="bg-gray-800 text-white text-xs font-thin  "
              value="nonveg"
            >
              Non-Veg
            </option>
            <option
              className="bg-gray-800 text-white text-xs font-thin  "
              value="vegan"
            >
              Vegan
            </option>
            <option
              className="bg-gray-800 text-white text-xs font-thin  "
              value="jain"
            >
              Jain
            </option>
            <option
              className="bg-gray-800 text-white text-xs font-thin  "
              value="other"
            >
              Other
            </option>
          </select>
          {errors.catagory && (
            <small className="text-red-400 text-xs block mb-1 ml-2">
              {errors.catagory.message}
            </small>
          )}
          <textarea
            className="description block border-b outline-0 p-2 "
            {...register("description")}
            type="text"
            placeholder="//write the description"
          ></textarea>

          <textarea
            className="ingredients block border-b outline-0 p-2 "
            {...register("ingredients")}
            type="text"
            placeholder=" //ingradients used"
            // defaultValue={recipe.ingredients}
          ></textarea>

          <textarea
            className="instruction block border-b outline-0 p-2 "
            {...register("instructions")}
            type="text"
            placeholder="//Give Intructions"
            // defaultValue={recipe.instructions}
          ></textarea>
          <div className="btn flex justify-between gap-5">
            <button
              className="mt-5 update w-40 block text-xs bg-green-500 px-2 py-2 rounded"
              type="sumbit"
            >
              Update Recipe
            </button>
            <button
              onClick={deletehandler}
              className="mt-5 delete block w-40 text-xs px-2 py-2 rounded bg-red-500"
              type="button"
            >
              Delete recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "loading..."
  );
};

export default SingleRecipe;
