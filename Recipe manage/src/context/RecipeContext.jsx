import React, { createContext, useEffect, useState } from "react";
export const recipecontext = createContext(null);

// Prebuilt recipes data
const prebuiltRecipes = [
  {
    id: "recipe-1",
    title: "Classic Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
    Chef: "Marco Romano",
    catagory: "Italian",
    description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and pepper. Simple yet incredibly flavorful.",
    ingredients: "400g spaghetti, 200g pancetta, 4 large eggs, 100g Pecorino Romano cheese, Black pepper, Salt",
    instructions: "1. Cook spaghetti in salted water. 2. Fry pancetta until crispy. 3. Whisk eggs with cheese. 4. Combine hot pasta with pancetta, then add egg mixture off heat. 5. Toss quickly and serve immediately."
  },
  {
    id: "recipe-2",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    Chef: "Priya Sharma",
    catagory: "Indian",
    description: "Tender chicken pieces in a rich, creamy tomato-based sauce with aromatic spices. A beloved Indian classic.",
    ingredients: "500g chicken breast, 200ml heavy cream, 400g canned tomatoes, 2 onions, 4 garlic cloves, Ginger, Garam masala, Turmeric, Cumin",
    instructions: "1. Marinate chicken in yogurt and spices. 2. Grill chicken until cooked. 3. Sauté onions, garlic, and ginger. 4. Add tomatoes and spices, simmer. 5. Add cream and grilled chicken. 6. Simmer until thick and serve with rice."
  },
  {
    id: "recipe-3",
    title: "Classic Caesar Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    Chef: "Julia Martinez",
    catagory: "Salad",
    description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan cheese, and crunchy croutons.",
    ingredients: "2 heads romaine lettuce, 1/2 cup parmesan cheese, 1 cup croutons, 2 anchovy fillets, 2 garlic cloves, 1 egg yolk, Lemon juice, Olive oil",
    instructions: "1. Wash and chop romaine lettuce. 2. Make dressing with anchovies, garlic, egg yolk, lemon juice, and olive oil. 3. Toss lettuce with dressing. 4. Top with parmesan and croutons. 5. Serve immediately."
  },
  {
    id: "recipe-4",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    Chef: "Carlos Rodriguez",
    catagory: "Mexican",
    description: "Seasoned ground beef in soft tortillas with fresh toppings. Perfect for a quick and delicious meal.",
    ingredients: "500g ground beef, 8 soft tortillas, 1 onion, 2 tomatoes, Lettuce, Cheese, Sour cream, Cumin, Chili powder, Garlic powder",
    instructions: "1. Brown ground beef with onions. 2. Season with cumin, chili powder, and garlic powder. 3. Warm tortillas. 4. Fill tortillas with beef mixture. 5. Top with lettuce, tomatoes, cheese, and sour cream."
  },
  {
    id: "recipe-5",
    title: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    Chef: "Sarah Johnson",
    catagory: "Dessert",
    description: "Soft and chewy chocolate chip cookies that are perfect for any occasion. A timeless favorite!",
    ingredients: "2 1/4 cups flour, 1 cup butter, 3/4 cup brown sugar, 1/2 cup white sugar, 2 eggs, 2 cups chocolate chips, 1 tsp vanilla, 1 tsp baking soda, 1 tsp salt",
    instructions: "1. Preheat oven to 375°F. 2. Cream butter and sugars. 3. Add eggs and vanilla. 4. Mix in flour, baking soda, and salt. 5. Fold in chocolate chips. 6. Drop spoonfuls on baking sheet. 7. Bake 9-11 minutes."
  },
  {
    id: "recipe-6",
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    Chef: "Dimitri Kostas",
    catagory: "Mediterranean",
    description: "Fresh and vibrant Greek salad with tomatoes, cucumbers, olives, and feta cheese in olive oil dressing.",
    ingredients: "4 tomatoes, 2 cucumbers, 1 red onion, 200g feta cheese, 1/2 cup Kalamata olives, Olive oil, Red wine vinegar, Oregano, Salt, Pepper",
    instructions: "1. Chop tomatoes, cucumbers, and onion. 2. Combine vegetables in a bowl. 3. Add olives and crumbled feta. 4. Whisk olive oil, vinegar, oregano, salt, and pepper. 5. Drizzle dressing over salad and toss gently."
  }
];

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  console.log(data);

  useEffect(() => {
    console.log("mounted");
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // If no recipes in localStorage, add prebuilt recipes
    if (storedRecipes.length === 0) {
      setdata(prebuiltRecipes);
      localStorage.setItem("recipes", JSON.stringify(prebuiltRecipes));
    } else {
      setdata(storedRecipes);
    }
  }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
