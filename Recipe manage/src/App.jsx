import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white font-thin flex flex-col overflow-x-hidden">
      <div className="py-10 px-[10%] flex-1">
        <Navbar/>
        <Mainroutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App