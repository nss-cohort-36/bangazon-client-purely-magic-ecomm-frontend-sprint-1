import React, { Component } from "react"
import ProductDetail from "./ProductDetail"
// import { isAuthenticated } from "../helpers/simpleAuth"

class ProductDetailView extends Component {

    state = {
        product: []
      }
    
      componentDidMount() {
        this.getProduct()
      }

    getProduct = () => {
        // get all products
        // set state with new data for products
        // if (isAuthenticated()) {
          fetch(`http://localhost:8000/products/${this.props.match.params.productId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
            }
          })
          .then(response => response.json())
          .then(response => {
            // console.log("prop", this.props.products)
            // console.log("res",response)
            this.setState({ product: response })
          })
        // }
      }

  render() {
    return (
      <>
        <main className="explorer">
          <ProductDetail product={this.state.product} key={this.state.product.id} {...this.props}/>
          
        </main>
      </>
    )
  }
}

export default ProductDetailView