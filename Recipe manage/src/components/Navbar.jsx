
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navBAR flex items-center justify-center gap-10 font-thin text-xl  ">

  <NavLink className={(e) => e.isActive ? "text-pink-500 " :"" }to="/"  >Home</NavLink>
  <NavLink className={(e) => e.isActive ? "text-pink-500" :"" } to="/about">About</NavLink>
  <NavLink className={(e) => e.isActive  ? "text-pink-500"  :""} to="/recipe">Recipes</NavLink>
<NavLink className={ `px-2 py-2 text-xs bg-gray-900 rounded $(e) => e.isActive ? "text-pink-500" : ""` } to="/create">Create Recipe

</NavLink>
<NavLink className={(e) => e.isActive ? "text-pink-500" :"" } to="/fav">Favourites</NavLink>
    </div>
  )
}

export default Navbar