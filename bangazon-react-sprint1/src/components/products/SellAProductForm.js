import React, { Component } from "react"
import APIManager from '../../modules/APIManager'
import { Form, Button, Container } from 'react-bootstrap';


class SellAProductForm extends Component {

    state = {
        name: "",
        price: null,
        description: "",
        quantity: null,
        location: "",
        // imagePath: "",
        // createdAt: "",
        productType: "",
        producttypes: []
    }

    componentDidMount() {
        // Gets all product types, then sets them in state to load the dropdown later
        APIManager.getAll("producttypes")
            .then((response) => {
                this.setState({
                    producttypes: response
                })
            })
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.name] = evt.target.value
        this.setState(stateToChange)
    }

    addAProductToSell = evt => {
        evt.preventDefault();
        if (this.state.productType === "") {
            window.alert("Please include a product type.");
        } else {
            const newProduct = {
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                quantity: Number(this.state.quantity),
                location: this.state.location,
                // createdAt: this.state.createdAt, 
                productType_id: this.state.productType
            }
            // Create the user profile and redirect user to their profile
            APIManager.post("products", newProduct)
                .then(() => this.props.history.push("/products"));
            console.log(newProduct)
        }
    }

    render() {
        return (
            <>
                <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of Product</Form.Label>
                        <Form.Control type="text" placeholder="product name" id="name" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="price" id="price" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="description" id="description" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" placeholder="quantity" id="quantity" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="location" id="location" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select a Product Type</Form.Label>
                        <Form.Control as="select" id="productType" name="productType" onChange={this.handleInputChange}>
                            {this.state.producttypes.map(producttype => (
                                <option key={producttype.id} value={producttype.id}>
                                    {producttype.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={this.addAProductToSell}>Submit</Button>
                </Form>
                </Container>
                
            </>
        )
    }
}
    
        
export default SellAProductForm
