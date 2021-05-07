import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ShoppingCart from './ShoppingCart'

import "./style/Navbar.css"
function Navbar(props) {
  const [showCart, setShowCart] = useState(false)
  const [isCartFull, setIsCartFull] = useState(false)
  function toggleCart(){
    setShowCart(!showCart)
  }
  
  function emptyCartCallback() {
    setIsCartFull(false)
    props.emptyCart()
  }
  
  useEffect(
    function checkCartStatus() {
      if (props.cart.length === 0){
        setIsCartFull(false)
      } else setIsCartFull(true)
    },[props]
  )
  return (
    <div>
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        
        <button 
          onClick={toggleCart}
          className="cartCount"
        >
          Cart: {props.cart.length} items
        </button>
        {showCart && 
          <ShoppingCart 
            cart={props.cart} 
            isCartFull={isCartFull}
            emptyCart={emptyCartCallback}
          />}
      </div>
    </div>
  )
}
export default Navbar