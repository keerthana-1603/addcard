import React, { useState } from "react"
import "./Dresscard.css"

export default function Dresscard({img, name, price,count,setCount}){
 
    const[show,setShow]=useState(true)
//change the state the add button
    const handleAdd=()=>{
      setShow(!show)
       setCount(count+1)
  
    }
//change the state the remove button
    const handleRemove=()=>{
      setShow(!show)
      setCount(count-1)
    }
    return (
      <div className="card-container">
        <div className='dress-card'>
        <div className='img-sec'>
          <img src={img} alt=""/>
          <h5>{name}</h5>
          <p>price : {price}</p>
        </div>
       
        <div className='btn-sec'> 
        {show===true?
          <button onClick={handleAdd}>add to cart</button>:
               
          <button onClick={handleRemove}>Remove</button>
        }
        <button>Buy now</button>
        </div>
      </div>
      </div>
    )
  }