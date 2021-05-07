import React from "react"
import currency from './currency'
export default function ShoppingCart(props) {

  

  if (props.isCartFull){
    return(
      <div>
        <ul>
          {props.cart.map(item => {
            return (
              <li key={item.id}>
                <span>{item.quantity}x</span>
                <span>{item.title}</span>
                <span> {currency(item.price * item.quantity)}</span>
              
              </li>
            )
          })}
        </ul>
        <span>Total: {currency(
          props.cart.map(item => item.price)
          .reduce((a, b) => a + b)
        )}
        </span>
        <button onClick={props.emptyCart}>Empty Cart</button>
        <button>Check Out</button>
      </div>
    )
  } else return (
      <div>
        Cart is empty. Add something.
      </div>
    )
       
}