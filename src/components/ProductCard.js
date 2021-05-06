import React from "react"

export default function ProductCard(props) {
  return(
    <div>
      cart: {props.cart.map(item => {
        return (
          <div key={item.id}>
            title: {item.title} quantity: {item.quantity} 
            <button 
              name="decQuantity" 
              onClick={props.adjustQuantity}
              id={item.id}              
            >-
            </button> 
            <input type="text"
              onChange={props.adjustQuantity}
              name="inputQuantity"
              id={item.id}
              value={item.quantity}
            />
            <button
              name="incQuantity"
              onClick={props.adjustQuantity}
              id={item.id}
            >+
      </button>
          </div>
        )
      })}
    
    </div>
  )
}