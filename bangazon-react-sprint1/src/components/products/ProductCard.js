import React, { Component } from "react"

class Product extends Component {

  render() {
    return (
      <>
        <section className="product">
          <p>
            {this.props.product.name}
          </p>
        </section>
      </>
    )
  }
}

export default Product