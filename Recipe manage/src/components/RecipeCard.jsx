import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

   const {id,image,title,catagory,description, Chef} = props.recipe;





  return (
    

      <Link to={`/recipe/details/${id}`}
      key={id}
      className="duration-150 hover:scale-103  w-[30%] Items h-62  flex flex-col justify-center items-center overflow-hidden bg-gray-900 rounded shadow-lg p-4"
    >
      <img
        src={image}
        className="w-24 h-24 object-cover rounded-full border-4  "
        alt={title}
      />
      <h1 className="text-2xl text-green-800 capitalize font-semibold mt-2">
        {title}
      </h1>
      <h2 className="text-md text-gray-100 font-light">
        By Chef {Chef}
      </h2>
      <h3 className="text-xs text-gray-500 font-thin">
        Category: {catagory}
      </h3>
      <p className="text-sm px-2 text-gray-300 font-light">
        {description.slice(0, 50)}...{""}
        <small className='text-blue-500'>more</small>
      </p>

    </Link>
   
    
  )
}

export default RecipeCard