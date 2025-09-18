import React, { createContext, useEffect, useState } from "react";
export const recipecontext = createContext(null);


const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {
    
    console.log("mounted");
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
