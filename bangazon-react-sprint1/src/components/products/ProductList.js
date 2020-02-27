import React, { Component } from "react"
import Product from "./ProductCard"
import "./ProductList.css"

class ProductList extends Component {

  render() {
      console.log(this.props, "List")
    return (
        <>
        <article className="productList">
          {
            this.props.products.map(product =>
              <Product
                key={product.id}                
                product={product}
              />)
          }
        </article>
      </>
    )
  }
}

export default ProductList