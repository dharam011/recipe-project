
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotFound from '../pages/PageNotFound'
import Fav from '../pages/Fav'

const Mainroutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/fav' element={<Fav/>}/>
<Route path='/recipe' element={<Recipe/>}/>
<Route path='/recipe/details/:id' element={<SingleRecipe/>}/>
<Route path='/create' element={<Create/>}/>
<Route path='*' element={<PageNotFound/>}></Route>

</Routes>

    </div>
  )
}

export default Mainroutes