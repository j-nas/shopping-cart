import React from "react"

export default function Quantity(props){
  function handleFocus(e) {
    e.currentTarget.select()
  }
  
  
  return (
    <div>
      <button
        onClick={props.adjustQuantity}
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
        onChange={props.adjustQuantity}
        onFocus={handleFocus}        
      />
      <button
        onClick={props.adjustQuantity}
        id={props.id}
        name="decQuantity"
      >
        -
      </button>
    </div>
  )
}