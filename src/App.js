import React, { useState } from "react"
import './App.css'
import Navbar from "./Sample/Navbar"
import Data from "./Cards/Data"

function App() {
const[count,setCount]=useState(0)
 
 
 return (

    <div className='App'> 
      <Navbar
      count={count}/> 
      <Data 
       count={count}
       setCount={setCount}/>
   
      </div>
  )
}

export default App

