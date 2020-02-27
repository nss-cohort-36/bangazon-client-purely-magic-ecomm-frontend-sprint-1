import React, { Component } from "react"
import { Button, Card } from 'react-bootstrap';

class Product extends Component {

  render() {
    return (
      <>
        <section className="product">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.product.imagePath} />
            <Card.Body>
              <Card.Title>{this.props.product.name} ${this.props.product.price}</Card.Title>
              <Card.Text>{this.props.product.description}</Card.Text>
              <Card.Text>{this.props.product.quantity} left to buy.</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }
}

export default Product

