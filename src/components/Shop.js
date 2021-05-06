import React from "react"
import ProductCard from "./ProductCard"
export default function Shop(props) {
  return(
    <div>This is Shop
      {props.inventory.map(item => {
        return(
          <div key={item.id}>
            <ProductCard
              addToCart={props.addToCart}
              isInCart={props.productInCart}
              adjustQuantity={props.adjustQuantity}
              cart={props.cart}
              image={item.image}
              price={item.price}
              description={item.description}
              id={item.id}
              title={item.title}
            />
          </div>
        )
      })}
    </div>
  )
}