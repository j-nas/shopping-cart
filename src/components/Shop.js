import React from "react"
import ProductCard from "./ProductCard"
export default function Shop(props) {
  return(
    <div>This is Shop
      {props.inventory.map(item => {
        return(
          <div key={item.id}>
            <ProductCard
              isInCart={props.productInCart}
              adjustQuantity={props.adjustQuantity}
              cart={props.cart}
              price={props.inventory.price}
              description={props.inventory.description}
              id={props.inventory.id}
              title={props.inventory.title}
            />
          </div>
        )
      })}
    </div>
  )
}