import React, { useEffect, useState }from "react"
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Shop from "./components/Shop"
import Homepage from "./components/Homepage"
export default function App() {
  const [inventory, setInventory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  

   
    
  
  
  
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

