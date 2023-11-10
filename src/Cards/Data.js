import React, { useState } from 'react'
import Dresscard from './Dresscard'
import "./Data.css"

const data = [{
    name : "Women Black Dress",
    img:"https://rukminim2.flixcart.com/image/832/832/k7z3afk0/dress/h/r/y/s-r-7-herija-original-imafq3dkvrsyzwjp.jpeg?q=70",
    price :'$479',
  },

  {
    name : "Women Casual Shirt",
    img:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/g/t/xxl-trisa-grey-pinpoint-seller-original-imagtajhfubcsgxh.jpeg?q=70",
    price : "$369",
  },

 {
    name : "A-line Multicolor Dress",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/o/m/h/xxl-a1-otabu-original-imagq2qj4wq7p3yz.jpeg?q=70",
    price : "$459",
  },
  {
    name : "Women Fit Dress",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/p/z/w/l-na-kottydress50-kotty-original-imagzj5hxtcg5x8a.jpeg?q=70",
    price : "$407",
  },
  {
    name : "Women Rayon Kurta",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/v/f/o/xl-rajvadi-pink-first-choice-house-original-imagdur4wte2d9jp-bb.jpeg?q=70",
    price : "$355",
  },
  {
    name : " Embroidered Kurta",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/salwar-kurta-dupatta/2/l/r/m-sharara-101-dress-zip-original-imagg4dtggkgeswe.jpeg?q=70",
    price : "$799",
  },
  {
    name : "Anarkali Kurta",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/n/x/0/yes-1-6-m-semi-stitched-2-m-2-5-m-as-30107-atsevam-original-imagkegyfs69pcct.jpeg?q=70",
    price : "$807",
  },
  {
    name : "Viscose Rayon Kurta",
    img : "https://rukminim2.flixcart.com/image/832/832/xif0q/gown/n/o/e/na-l-half-sleeve-stitched-alc-lblkmr-321-shedika-na-original-imagg7gwsmdrdz5h.jpeg?q=70",
    price : "$479",
  }


 
]
//map the data
export default function Data({count,setCount}) {
  return (
  
    <div className='data-content'>

          {
         data.map((movie, idx)=>(
          <Dresscard className="app-dresscard"key={idx}
          img={movie.img}
          name={movie.name}
          price={movie.price}
          count={count}
          setCount={setCount}
      
         
          
          />
        ))
      }
    </div>
  )
}
