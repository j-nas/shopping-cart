import React from "react"
import Quantity from "./Quantity"
import currency from "./currency"
import "./style/ProductCard.css"
export default function ProductCard(props) {
  
  
  let itemQuantity = props.cart[props.cart.findIndex(item => 
    item.id === Number(props.itemId))] 
  
  const addButton = (
    <button
      onClick={props.addToCart}
      id={props.itemId}
    >
      Add To cart
    </button>
  )
  
  return(
    <div className="productCard">
      <img 
        src={props.image} 
        alt={props.title} 
      />
      <div>
        {props.title}
      </div>
      <div>
        {currency(props.price)}
      </div>
      {/* <div>
        {props.description}
      </div> */}
      { itemQuantity !== undefined
        ? <Quantity 
            id={props.itemId} 
            adjustQuantity={props.adjustQuantity}
            quantity={itemQuantity.quantity}
          /> 
        : addButton}
    </div>
  )
}