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
    <div className="create h-full flex flex-col justify-center items-center  ">
      <h1 className="text-xl font-thin m-6 py-2 px-8 rounded text-white  ">Create Recipe</h1>
      <form className="create-form flex-col flex justify-center" onSubmit={handleSubmit(submitHandler)}>
        <input
          className="create-form outline-0 border-b p-2 block "
          {...register("image", { required: "Image URL is required" })}
          type="url"
          placeholder="Enter image URL"
        />
        {errors.image && (
          <small className="text-red-400 text-xs block mb-1 ml-2">{errors.image.message}</small>
        )}
        <input
          className="create-form outline-0 border-b p-2 block mb-3 "
          {...register("title", { required: "Title is required" })}
          type="text"
          placeholder="Recipe title"
        />
        {errors.title && (
          <small className="text-red-400 text-xs block mb-1 ml-2">{errors.title.message}</small>
        )}
       
        <input
          className="create-form outline-0 border-b p-2 block mb-3 "
          {...register("Chef", { required: "Chef name is required" })}
          type="text"
          placeholder="Chef Name"
        />
        {errors.Chef && (
          <small className="text-red-400 text-xs block mb-1 ml-2">{errors.Chef.message}</small>
        )}
        <select
          className="instruction block border-b outline-0 p-2 text-xs "
          {...register("catagory", { required: "Category is required" })}
          type="text"
        >
            <option value="">Select Category</option>
            <option className="bg-gray-800 text-white text-xs font-thin  "  value="veg">Veg</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="nonveg">Non-Veg</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="vegan">Vegan</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="jain">Jain</option>
            <option className="bg-gray-800 text-white text-xs font-thin  " value="other">Other</option>
        </select>
        {errors.catagory && (
          <small className="text-red-400 text-xs block mb-1 ml-2">{errors.catagory.message}</small>
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
        ></textarea>
        
        <textarea
          className="instruction block border-b outline-0 p-2 "
          {...register("instructions")}
          type="text"
          placeholder="//Give Intructions">

        </textarea>
      

        <button className="mt-5 block text-sm bg-gradient-to-r from-orange-500 to-blue-950 px-2 py-2 rounded">Save Recipe</button>
      </form>
    </div>
  );
};

export default Create;
