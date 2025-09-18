import React from 'react'
import Axios from '../utils/Axios';


const Home = () => {


  const getProduct = async () =>  {
    console.log("clicked")

try {
//    const response = await fetch("/products")
//  const jsondata = await response.json()
//  console.log(response)
//  console.log(jsondata)
const { data }  = await Axios.get("https://fakestoreapi.com/products")
console.log(data)
  data.map((item) => {
<h1>title:{item.title}</h1>
})
} 
  catch(error){
    console.log(error);
    
  }
  }
  return (
    <div className="home w-full h-screen">
      <h1>Home</h1>
      <button onClick={getProduct}>get products</button>
      
      </div>
  )
}

export default Home