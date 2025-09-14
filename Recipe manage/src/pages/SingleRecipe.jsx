import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";

import { useForm } from "react-hook-form";


import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data, setdata } = useContext(recipecontext);

  const submitHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id === r.id);
    if (index === -1) return;
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe updated successfully");
    reset();
    navigate("/recipe");
  };

const deletehandler = () => {
    const filterData = data.filter((r)=> r.id !== params.id);
    toast.success("Recipe deleted successfully");
    setdata(filterData);
    navigate("/recipe");
  
}

  const params = useParams();
  const recipe = data.find((r) => params.id === r.id);
  

  return recipe ? (
    <div className="flex justify-center gap-30  mt-5">
      <div className="left">
        <h1 className="text-5xl font-bold capitalize">{recipe.title}</h1>
        <img
          className="w-[30vw] object-cover mt-2 rounded h-[30vh]"
          src={recipe.image}
          alt=""
        />
        <h2 className="font-medium text-xl">
          Description :<p className=" font-thin text">{recipe.description}</p>
        </h2>

        <h2>Chef Name : {recipe.Chef}</h2>
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
            defaultValue={recipe.image}
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
            defaultValue={recipe.title}
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
            defaultValue={recipe.Chef}
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
            defaultValue={recipe.catagory}
          >
            <option value="">Select Category</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="veg">Veg</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="nonveg">Non-Veg</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="vegan">Vegan</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="jain">Jain</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="other">Other</option>
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
            defaultValue={recipe.description}
          ></textarea>

          <textarea
            className="ingredients block border-b outline-0 p-2 "
            {...register("ingredients")}
            type="text"
            placeholder=" //ingradients used"
            defaultValue={recipe.ingredients}
          ></textarea>

          <textarea
            className="instruction block border-b outline-0 p-2 "
            {...register("instructions")}
            type="text"
            placeholder="//Give Intructions"
            defaultValue={recipe.instructions}
          ></textarea>

          <button className="mt-5 update block text-xs bg-green-500 px-2 py-2 rounded" type="submit">
            Update Recipe
          </button>
          <button onClick={deletehandler} className="mt-5 delete block text-xs px-2 py-2 rounded bg-red-500" type="button">
            Delete recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "loading..."
  );
};

export default SingleRecipe;
