import React from "react"

export default function Quantity(props){
  return (
    <div>
      <button
        onclick={props.adjustQuantity}
        id={props.id}
        name='incQuantity'
      >
        +
      </button>
      <input 
        type="text" 
        name="inputQuantity" 
        id={props.id}
        value={props.quantity}
      />
      <button
        onclick={props.adjustQuantity}
        id={props.id}
        name="decQuantity"
      >
        -
      </button>
    </div>
  )
}