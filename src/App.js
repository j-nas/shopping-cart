import React, { useEffect, useState }from "react"
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import Homepage from "./components/Homepage"
export default function App() {
  const [inventory, setInventory] = useState([])
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect( () => {
    async function fetchStore () {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setInventory(json))
    }
    fetchStore()
   },[])

  useEffect(()=>{
    setIsLoading(true)
    if(inventory !== []) {
      setIsLoading(false)
    }
  },[inventory])
  
  function emptyCart() {
    setCart([])
  }

  function addToCart(e){
    const { id } = e.target
    if(cart.findIndex(item => item.id === Number(id)) === -1){
      const itemToAdd = inventory.find(item => item.id === Number(id))
      itemToAdd.quantity = 1
      setCart([...cart, itemToAdd])
    }
  }
  function removeFromCart(id) {
    const newCart = [...cart].filter(item => item.id !== Number(id))
    setCart(newCart)
  }

  function adjustQuantity(e) {
    const {name, id, value} = e.target
    const itemIndex = cart.findIndex(item => item.id === Number(id))
    const newCart = [...cart]
    name === "inputQuantity"
      ? newCart[itemIndex].quantity = value
      : name === "incQuantity"
        ? newCart[itemIndex].quantity += 1
        : newCart[itemIndex].quantity -= 1
    newCart[itemIndex].quantity === 0
      ? removeFromCart(id)
      : setCart(newCart)
    
  }
  
  
  return (
    <BrowserRouter>
      <Navbar 
        cart={cart}
        emptyCart={emptyCart}
      />
          {isLoading? "loading..." : "finshed loading"} <br/>
          <button id="2" onClick={addToCart}>Add to cart</button>
          <button id="3" onClick={addToCart}>Add to cart 2</button>
          <button onClick={emptyCart}>empty cart</button>
          <button onClick={() => console.log("cart: ",cart)}>Console.log cart</button>
          <button onClick={() => console.log("cartindex: ",cart.findIndex(item => item.id === 2))}>Console.log cart index</button>
          <button onClick={() => console.log(inventory)}>Console.log inventory</button>
          
          <div>
            
          </div>
          
      <Switch>
        <Route path="/shop">
          <Shop
            isLoading={isLoading}
            cart={cart}
            inventory={inventory}
            adjustQuantity={adjustQuantity}
          />
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

