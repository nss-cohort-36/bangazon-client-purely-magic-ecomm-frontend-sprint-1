import React, { Component } from "react"
import { Card } from 'react-bootstrap';

class Product extends Component {

  render() {
    
    return (
      <>
        <section className="product">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.product.imagePath} />
            <Card.Body>
              <Card.Title onClick={() => { this.props.history.push(`/products/${this.props.product.id}`) }}>{this.props.product.name} ${this.props.product.price}</Card.Title>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }
}

export default Product

