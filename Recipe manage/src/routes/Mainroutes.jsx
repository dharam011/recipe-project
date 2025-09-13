
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
const Mainroutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/recipe' element={<Recipe/>}/>
<Route path='/create' element={<Create/>}/>

</Routes>

    </div>
  )
}

export default Mainroutes