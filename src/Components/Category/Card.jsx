import React from 'react'
import "./Card.css"



const Card = ({products}) => {
  return (
    <div>
      <div className='ProductCard'>
        <img src={products.img} alt="" />
        <p>{products.text}</p>
      </div>
    </div>
  )
}

export default Card
