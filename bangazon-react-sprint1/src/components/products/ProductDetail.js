import React, { Component } from "react"
import { Card, Button } from 'react-bootstrap';



class ProductDetail extends Component {

    render() {
        return (
            <>
                <section className="product">
                    <Card className="bg-dark text-white">
                        <Card.Img src={this.props.product.imagePath} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{this.props.product.name}</Card.Title>
                            <Card.Text>${this.props.product.price}</Card.Text>
                            <Card.Text>{this.props.product.description}</Card.Text>
                            <Card.Text>{this.props.product.quantity} left to buy.</Card.Text>
                            <Button variant="primary">Add To Order</Button>
                        </Card.ImgOverlay>
                    </Card>
                </section>
            </>
        )
    }
}

export default ProductDetail