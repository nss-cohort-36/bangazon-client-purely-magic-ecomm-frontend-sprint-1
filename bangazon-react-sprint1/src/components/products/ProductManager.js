import React, { Component } from "react"
import ProductList from "./ProductList"
// import { isAuthenticated } from "../helpers/simpleAuth"

class ProductManager extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    // get all products
    // set state with new data for products
    // if (isAuthenticated()) {
      fetch("http://localhost:8000/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem("bangazon_token")}`
        }
      })
      .then(response => response.json())
      .then(response => {
        // console.log("prop", this.props.products)
        // console.log("res",response)
        this.setState({ products: response })
      })
    // }
  }

  render() {
    return (
      <>
        <main className="explorer">
          <ProductList products={this.state.products} />
        </main>
      </>
    )
  }
}

export default ProductManager