import React from "react"
import Quantity from "./Quantity"
import "./ProductCard.css"
export default function ProductCard(props) {
  const addButton = (
    <button
      onClick={props.addToCart}
      id={props.id}
    >
      Add To cart
    </button>
  )
  
  return(
    <div>
      <img 
        src={props.image} 
        alt={props.title} 
      />
      <div>
        {props.title}
      </div>
      <div>
        ${props.price}
      </div>
      {/* <div>
        {props.description}
      </div> */}
      {props.productInCart ? <Quantity /> : addButton}
    </div>
  )
}