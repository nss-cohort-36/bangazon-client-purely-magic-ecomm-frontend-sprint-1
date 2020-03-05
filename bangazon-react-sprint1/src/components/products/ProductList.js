import React, { Component } from "react"
import Product from "./ProductCard"
import "./ProductList.css"

class ProductList extends Component {

  render() {
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