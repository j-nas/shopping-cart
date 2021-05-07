import React from "react"
import ProductCard from "./ProductCard"
import "./style/Shop.css"
export default function Shop(props) {
  return(
    <div className="shop">
      {props.isLoading ? "Loading...." : null}
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
              itemId={item.id}
              title={item.title}
            />
          </div>
        )
      })}
    </div>
  )
}