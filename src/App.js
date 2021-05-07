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
    setIsLoading(true)
    async function fetchStore () {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
          setInventory(json)
          setIsLoading(false)
        })
    }
    fetchStore()
   },[])
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
    const {name, id, value, currentTarget} = e.target
    const itemIndex = cart.findIndex(item => item.id === Number(id))
    const newCart = [...cart]
    currentTarget === "inputQuantity" && currentTarget.select()
    name === "inputQuantity"
      ? newCart[itemIndex].quantity = value
      : name === "incQuantity"
        ? newCart[itemIndex].quantity += 1
        : newCart[itemIndex].quantity -= 1
    newCart[itemIndex].quantity <= 0
      ? removeFromCart(id)
      : setCart(newCart)
  }
  function productInCart(id){
    if(cart.findIndex(item => item.id === Number(id)) === -1){
      return false
    } else return true
  }
  
  return (
    <BrowserRouter>
      <Navbar 
        cart={cart}
        emptyCart={emptyCart}
      />
      <Switch>
        <Route path="/shop">
          <Shop
            isLoading={isLoading}
            cart={cart}
            inventory={inventory}
            adjustQuantity={adjustQuantity}
            productInCart={productInCart}
            addToCart={addToCart}
          />
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

